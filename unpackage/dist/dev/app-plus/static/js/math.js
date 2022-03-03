/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 10.2.0
 * @date    2022-03-01
 *
 * @license
 * Copyright (C) 2013-2022 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define &&
		define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t()
}(this, (function() {
	return function(e) {
		var t = {};

		function r(n) {
			if (t[n]) return t[n].exports;
			var i = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
		}
		return r.m = e, r.c = t, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol
				.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.t = function(e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var i in e) r.d(n, i, function(t) {
					return e[t]
				}.bind(null, i));
			return n
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = 254)
	}([function(e, t, r) {
		var n = r(110),
			i = r(36),
			a = r(192);
		n || i(Object.prototype, "toString", a, {
			unsafe: !0
		})
	}, function(e, t, r) {
		(function(t) {
			var r = function(e) {
				return e && e.Math == Math && e
			};
			e.exports = r("object" == typeof globalThis && globalThis) || r("object" ==
				typeof window && window) || r("object" == typeof self && self) || r(
				"object" == typeof t && t) || function() {
				return this
			}() || Function("return this")()
		}).call(this, r(188))
	}, , function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(81).map;
		n({
			target: "Array",
			proto: !0,
			forced: !r(82)("map")
		}, {
			map: function(e) {
				return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	}, function(e, t) {
		function r(t) {
			return e.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol
				.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
						Symbol.prototype ? "symbol" : typeof e
				}, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
		}
		e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n = r(1),
			i = r(144),
			a = r(145),
			o = r(193),
			s = r(53),
			u = function(e) {
				if (e && e.forEach !== o) try {
					s(e, "forEach", o)
				} catch (t) {
					e.forEach = o
				}
			};
		for (var c in i) i[c] && u(n[c] && n[c].prototype);
		u(a)
	}, function(e, t, r) {
		var n = r(1),
			i = r(58).f,
			a = r(53),
			o = r(36),
			s = r(107),
			u = r(140),
			c = r(80);
		e.exports = function(e, t) {
			var r, f, l, p, m, h = e.target,
				d = e.global,
				v = e.stat;
			if (r = d ? n : v ? n[h] || s(h, {}) : (n[h] || {}).prototype)
				for (f in t) {
					if (p = t[f], l = e.noTargetGet ? (m = i(r, f)) && m.value : r[f], !c(d ?
							f : h + (v ? "." : "#") + f, e.forced) && void 0 !== l) {
						if (typeof p == typeof l) continue;
						u(p, l)
					}(e.sham || l && l.sham) && a(p, "sham", !0), o(r, f, p, e)
				}
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(9),
			i = r(78).PROPER,
			a = r(36),
			o = r(20),
			s = r(52),
			u = r(34),
			c = r(8),
			f = r(116),
			l = RegExp.prototype,
			p = l.toString,
			m = n(f),
			h = c((function() {
				return "/a/b" != p.call({
					source: "a",
					flags: "b"
				})
			})),
			d = i && "toString" != p.name;
		(h || d) && a(RegExp.prototype, "toString", (function() {
			var e = o(this),
				t = u(e.source),
				r = e.flags;
			return "/" + t + "/" + u(void 0 === r && s(l, e) && !("flags" in l) ? m(e) :
				r)
		}), {
			unsafe: !0
		})
	}, function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		}
	}, function(e, t, r) {
		var n = r(86),
			i = Function.prototype,
			a = i.bind,
			o = i.call,
			s = n && a.bind(o, o);
		e.exports = n ? function(e) {
			return e && s(e)
		} : function(e) {
			return e && function() {
				return o.apply(e, arguments)
			}
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(100);
		n({
			target: "RegExp",
			proto: !0,
			forced: /./.exec !== i
		}, {
			exec: i
		})
	}, function(e, t, r) {
		"use strict";
		var n, i, a, o, s = r(6),
			u = r(67),
			c = r(1),
			f = r(48),
			l = r(22),
			p = r(224),
			m = r(36),
			h = r(174),
			d = r(115),
			v = r(85),
			y = r(117),
			g = r(66),
			x = r(14),
			b = r(23),
			w = r(128),
			N = r(93),
			M = r(126),
			E = r(129),
			S = r(155),
			A = r(177).set,
			O = r(226),
			C = r(229),
			_ = r(230),
			T = r(179),
			I = r(231),
			k = r(232),
			z = r(44),
			R = r(80),
			q = r(15),
			B = r(233),
			D = r(130),
			j = r(76),
			P = q("species"),
			F = "Promise",
			U = z.getterFor(F),
			L = z.set,
			$ = z.getterFor(F),
			H = p && p.prototype,
			G = p,
			V = H,
			Z = c.TypeError,
			W = c.document,
			Y = c.process,
			J = T.f,
			X = J,
			Q = !!(W && W.createEvent && c.dispatchEvent),
			K = x(c.PromiseRejectionEvent),
			ee = !1,
			te = R(F, (function() {
				var e = N(G),
					t = e !== String(G);
				if (!t && 66 === j) return !0;
				if (u && !V.finally) return !0;
				if (j >= 51 && /native code/.test(e)) return !1;
				var r = new G((function(e) {
						e(1)
					})),
					n = function(e) {
						e((function() {}), (function() {}))
					};
				return (r.constructor = {})[P] = n, !(ee = r.then((
				function() {})) instanceof n) || !t && B && !K
			})),
			re = te || !E((function(e) {
				G.all(e).catch((function() {}))
			})),
			ne = function(e) {
				var t;
				return !(!b(e) || !x(t = e.then)) && t
			},
			ie = function(e, t) {
				var r, n, i, a = t.value,
					o = 1 == t.state,
					s = o ? e.ok : e.fail,
					u = e.resolve,
					c = e.reject,
					f = e.domain;
				try {
					s ? (o || (2 === t.rejection && ce(t), t.rejection = 1), !0 === s ? r = a : (
							f && f.enter(), r = s(a), f && (f.exit(), i = !0)), r === e
						.promise ? c(Z("Promise-chain cycle")) : (n = ne(r)) ? l(n, r, u, c) :
						u(r)) : c(a)
				} catch (e) {
					f && !i && f.exit(), c(e)
				}
			},
			ae = function(e, t) {
				e.notified || (e.notified = !0, O((function() {
					for (var r, n = e.reactions; r = n.get();) ie(r, e);
					e.notified = !1, t && !e.rejection && se(e)
				})))
			},
			oe = function(e, t, r) {
				var n, i;
				Q ? ((n = W.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0),
					c.dispatchEvent(n)) : n = {
					promise: t,
					reason: r
				}, !K && (i = c["on" + e]) ? i(n) : "unhandledrejection" === e && _(
					"Unhandled promise rejection", r)
			},
			se = function(e) {
				l(A, c, (function() {
					var t, r = e.facade,
						n = e.value;
					if (ue(e) && (t = I((function() {
							D ? Y.emit("unhandledRejection", n, r) : oe(
								"unhandledrejection", r, n)
						})), e.rejection = D || ue(e) ? 2 : 1, t.error)) throw t.value
				}))
			},
			ue = function(e) {
				return 1 !== e.rejection && !e.parent
			},
			ce = function(e) {
				l(A, c, (function() {
					var t = e.facade;
					D ? Y.emit("rejectionHandled", t) : oe("rejectionhandled", t, e
						.value)
				}))
			},
			fe = function(e, t, r) {
				return function(n) {
					e(t, n, r)
				}
			},
			le = function(e, t, r) {
				e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, ae(e, !0))
			},
			pe = function(e, t, r) {
				if (!e.done) {
					e.done = !0, r && (e = r);
					try {
						if (e.facade === t) throw Z("Promise can't be resolved itself");
						var n = ne(t);
						n ? O((function() {
							var r = {
								done: !1
							};
							try {
								l(n, t, fe(pe, r, e), fe(le, r, e))
							} catch (t) {
								le(r, t, e)
							}
						})) : (e.value = t, e.state = 1, ae(e, !1))
					} catch (t) {
						le({
							done: !1
						}, t, e)
					}
				}
			};
		if (te && (V = (G = function(e) {
				w(this, V), g(e), l(n, this);
				var t = U(this);
				try {
					e(fe(pe, t), fe(le, t))
				} catch (e) {
					le(t, e)
				}
			}).prototype, (n = function(e) {
				L(this, {
					type: F,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: new k,
					rejection: !1,
					state: 0,
					value: void 0
				})
			}).prototype = h(V, {
				then: function(e, t) {
					var r = $(this),
						n = J(S(this, G));
					return r.parent = !0, n.ok = !x(e) || e, n.fail = x(t) && t, n
						.domain = D ? Y.domain : void 0, 0 == r.state ? r.reactions.add(
							n) : O((function() {
							ie(n, r)
						})), n.promise
				},
				catch: function(e) {
					return this.then(void 0, e)
				}
			}), i = function() {
				var e = new n,
					t = U(e);
				this.promise = e, this.resolve = fe(pe, t), this.reject = fe(le, t)
			}, T.f = J = function(e) {
				return e === G || e === a ? new i(e) : X(e)
			}, !u && x(p) && H !== Object.prototype)) {
			o = H.then, ee || (m(H, "then", (function(e, t) {
				var r = this;
				return new G((function(e, t) {
					l(o, r, e, t)
				})).then(e, t)
			}), {
				unsafe: !0
			}), m(H, "catch", V.catch, {
				unsafe: !0
			}));
			try {
				delete H.constructor
			} catch (e) {}
			d && d(H, V)
		}
		s({
			global: !0,
			wrap: !0,
			forced: te
		}, {
			Promise: G
		}), v(G, F, !1, !0), y(F), a = f(F), s({
			target: F,
			stat: !0,
			forced: te
		}, {
			reject: function(e) {
				var t = J(this);
				return l(t.reject, void 0, e), t.promise
			}
		}), s({
			target: F,
			stat: !0,
			forced: u || te
		}, {
			resolve: function(e) {
				return C(u && this === a ? G : this, e)
			}
		}), s({
			target: F,
			stat: !0,
			forced: re
		}, {
			all: function(e) {
				var t = this,
					r = J(t),
					n = r.resolve,
					i = r.reject,
					a = I((function() {
						var r = g(t.resolve),
							a = [],
							o = 0,
							s = 1;
						M(e, (function(e) {
							var u = o++,
								c = !1;
							s++, l(r, t, e).then((function(e) {
								c || (c = !0, a[u] = e,
									--s || n(a))
							}), i)
						})), --s || n(a)
					}));
				return a.error && i(a.value), r.promise
			},
			race: function(e) {
				var t = this,
					r = J(t),
					n = r.reject,
					i = I((function() {
						var i = g(t.resolve);
						M(e, (function(e) {
							l(i, t, e).then(r.resolve, n)
						}))
					}));
				return i.error && n(i.value), r.promise
			}
		})
	}, function(e, t, r) {
		var n = r(18),
			i = r(78).EXISTS,
			a = r(9),
			o = r(19).f,
			s = Function.prototype,
			u = a(s.toString),
			c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
			f = a(c.exec);
		n && !i && o(s, "name", {
			configurable: !0,
			get: function() {
				try {
					return f(c, u(this))[1]
				} catch (e) {
					return ""
				}
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(22);
		n({
			target: "URL",
			proto: !0,
			enumerable: !0
		}, {
			toJSON: function() {
				return i(URL.prototype.toString, this)
			}
		})
	}, function(e, t) {
		e.exports = function(e) {
			return "function" == typeof e
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(90),
			a = r(26),
			o = r(91),
			s = r(105),
			u = r(137),
			c = i("wks"),
			f = n.Symbol,
			l = f && f.for,
			p = u ? f : f && f.withoutSetter || o;
		e.exports = function(e) {
			if (!a(c, e) || !s && "string" != typeof c[e]) {
				var t = "Symbol." + e;
				s && a(f, e) ? c[e] = f[e] : c[e] = u && l ? l(t) : p(t)
			}
			return c[e]
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(9),
			a = r(104),
			o = r(40),
			s = r(112),
			u = i([].join),
			c = a != Object,
			f = s("join", ",");
		n({
			target: "Array",
			proto: !0,
			forced: c || !f
		}, {
			join: function(e) {
				return u(o(this), void 0 === e ? "," : e)
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(97),
			o = r(98),
			s = r(23),
			u = r(79),
			c = r(45),
			f = r(40),
			l = r(71),
			p = r(15),
			m = r(82),
			h = r(123),
			d = m("slice"),
			v = p("species"),
			y = i.Array,
			g = Math.max;
		n({
			target: "Array",
			proto: !0,
			forced: !d
		}, {
			slice: function(e, t) {
				var r, n, i, p = f(this),
					m = c(p),
					d = u(e, m),
					x = u(void 0 === t ? m : t, m);
				if (a(p) && (r = p.constructor, (o(r) && (r === y || a(r.prototype)) ||
							s(r) && null === (r = r[v])) && (r = void 0), r === y ||
						void 0 === r)) return h(p, d, x);
				for (n = new(void 0 === r ? y : r)(g(x - d, 0)), i = 0; d < x; d++, i++)
					d in p && l(n, i, p[d]);
				return n.length = i, n
			}
		})
	}, function(e, t, r) {
		var n = r(8);
		e.exports = !n((function() {
			return 7 != Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1]
		}))
	}, function(e, t, r) {
		var n = r(1),
			i = r(18),
			a = r(138),
			o = r(139),
			s = r(20),
			u = r(87),
			c = n.TypeError,
			f = Object.defineProperty,
			l = Object.getOwnPropertyDescriptor;
		t.f = i ? o ? function(e, t, r) {
			if (s(e), t = u(t), s(r), "function" == typeof e && "prototype" === t && "value" in
				r && "writable" in r && !r.writable) {
				var n = l(e, t);
				n && n.writable && (e[t] = r.value, r = {
					configurable: "configurable" in r ? r.configurable : n.configurable,
					enumerable: "enumerable" in r ? r.enumerable : n.enumerable,
					writable: !1
				})
			}
			return f(e, t, r)
		} : f : function(e, t, r) {
			if (s(e), t = u(t), s(r), a) try {
				return f(e, t, r)
			} catch (e) {}
			if ("get" in r || "set" in r) throw c("Accessors not supported");
			return "value" in r && (e[t] = r.value), e
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(23),
			a = n.String,
			o = n.TypeError;
		e.exports = function(e) {
			if (i(e)) return e;
			throw o(a(e) + " is not an object")
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(8),
			o = r(97),
			s = r(23),
			u = r(35),
			c = r(45),
			f = r(71),
			l = r(111),
			p = r(82),
			m = r(15),
			h = r(76),
			d = m("isConcatSpreadable"),
			v = i.TypeError,
			y = h >= 51 || !a((function() {
				var e = [];
				return e[d] = !1, e.concat()[0] !== e
			})),
			g = p("concat"),
			x = function(e) {
				if (!s(e)) return !1;
				var t = e[d];
				return void 0 !== t ? !!t : o(e)
			};
		n({
			target: "Array",
			proto: !0,
			forced: !y || !g
		}, {
			concat: function(e) {
				var t, r, n, i, a, o = u(this),
					s = l(o, 0),
					p = 0;
				for (t = -1, n = arguments.length; t < n; t++)
					if (x(a = -1 === t ? o : arguments[t])) {
						if (p + (i = c(a)) > 9007199254740991) throw v(
							"Maximum allowed index exceeded");
						for (r = 0; r < i; r++, p++) r in a && f(s, p, a[r])
					} else {
						if (p >= 9007199254740991) throw v(
							"Maximum allowed index exceeded");
						f(s, p++, a)
					} return s.length = p, s
			}
		})
	}, function(e, t, r) {
		var n = r(86),
			i = Function.prototype.call;
		e.exports = n ? i.bind(i) : function() {
			return i.apply(i, arguments)
		}
	}, function(e, t, r) {
		var n = r(14);
		e.exports = function(e) {
			return "object" == typeof e ? null !== e : n(e)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(81).find,
			a = r(124),
			o = !0;
		"find" in [] && Array(1).find((function() {
			o = !1
		})), n({
			target: "Array",
			proto: !0,
			forced: o
		}, {
			find: function(e) {
				return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), a("find")
	}, function(e, t, r) {
		var n = r(240),
			i = r(241),
			a = r(181),
			o = r(242);
		e.exports = function(e) {
			return n(e) || i(e) || a(e) || o()
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n = r(9),
			i = r(35),
			a = n({}.hasOwnProperty);
		e.exports = Object.hasOwn || function(e, t) {
			return a(i(e), t)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(40),
			i = r(124),
			a = r(84),
			o = r(44),
			s = r(19).f,
			u = r(125),
			c = r(67),
			f = r(18),
			l = o.set,
			p = o.getterFor("Array Iterator");
		e.exports = u(Array, "Array", (function(e, t) {
			l(this, {
				type: "Array Iterator",
				target: n(e),
				index: 0,
				kind: t
			})
		}), (function() {
			var e = p(this),
				t = e.target,
				r = e.kind,
				n = e.index++;
			return !t || n >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == r ? {
				value: n,
				done: !1
			} : "values" == r ? {
				value: t[n],
				done: !1
			} : {
				value: [n, t[n]],
				done: !1
			}
		}), "values");
		var m = a.Arguments = a.Array;
		if (i("keys"), i("values"), i("entries"), !c && f && "values" !== m.name) try {
			s(m, "name", {
				value: "values"
			})
		} catch (e) {}
	}, function(e, t, r) {
		var n = r(6),
			i = r(35),
			a = r(109);
		n({
			target: "Object",
			stat: !0,
			forced: r(8)((function() {
				a(1)
			}))
		}, {
			keys: function(e) {
				return a(i(e))
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(79),
			o = r(60),
			s = r(45),
			u = r(35),
			c = r(111),
			f = r(71),
			l = r(82)("splice"),
			p = i.TypeError,
			m = Math.max,
			h = Math.min;
		n({
			target: "Array",
			proto: !0,
			forced: !l
		}, {
			splice: function(e, t) {
				var r, n, i, l, d, v, y = u(this),
					g = s(y),
					x = a(e, g),
					b = arguments.length;
				if (0 === b ? r = n = 0 : 1 === b ? (r = 0, n = g - x) : (r = b - 2, n =
						h(m(o(t), 0), g - x)), g + r - n > 9007199254740991) throw p(
					"Maximum allowed length exceeded");
				for (i = c(y, n), l = 0; l < n; l++)(d = x + l) in y && f(i, l, y[d]);
				if (i.length = n, r < n) {
					for (l = x; l < g - n; l++) v = l + r, (d = l + n) in y ? y[v] = y[
						d] : delete y[v];
					for (l = g; l > g - n + r; l--) delete y[l - 1]
				} else if (r > n)
					for (l = g - n; l > x; l--) v = l + r - 1, (d = l + n - 1) in y ? y[
						v] = y[d] : delete y[v];
				for (l = 0; l < r; l++) y[l + x] = arguments[l + 2];
				return y.length = g - n + r, i
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(18),
			i = r(1),
			a = r(9),
			o = r(80),
			s = r(36),
			u = r(26),
			c = r(114),
			f = r(52),
			l = r(88),
			p = r(136),
			m = r(8),
			h = r(68).f,
			d = r(58).f,
			v = r(19).f,
			y = r(160),
			g = r(161).trim,
			x = i.Number,
			b = x.prototype,
			w = i.TypeError,
			N = a("".slice),
			M = a("".charCodeAt),
			E = function(e) {
				var t = p(e, "number");
				return "bigint" == typeof t ? t : S(t)
			},
			S = function(e) {
				var t, r, n, i, a, o, s, u, c = p(e, "number");
				if (l(c)) throw w("Cannot convert a Symbol value to a number");
				if ("string" == typeof c && c.length > 2)
					if (c = g(c), 43 === (t = M(c, 0)) || 45 === t) {
						if (88 === (r = M(c, 2)) || 120 === r) return NaN
					} else if (48 === t) {
					switch (M(c, 1)) {
						case 66:
						case 98:
							n = 2, i = 49;
							break;
						case 79:
						case 111:
							n = 8, i = 55;
							break;
						default:
							return +c
					}
					for (o = (a = N(c, 2)).length, s = 0; s < o; s++)
						if ((u = M(a, s)) < 48 || u > i) return NaN;
					return parseInt(a, n)
				}
				return +c
			};
		if (o("Number", !x(" 0o1") || !x("0b1") || x("+0x1"))) {
			for (var A, O = function(e) {
						var t = arguments.length < 1 ? 0 : x(E(e)),
							r = this;
						return f(b, r) && m((function() {
							y(r)
						})) ? c(Object(t), r, O) : t
					}, C = n ? h(x) :
					"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range"
					.split(","), _ = 0; C.length > _; _++) u(x, A = C[_]) && !u(O, A) && v(O, A, d(
				x, A));
			O.prototype = b, b.constructor = O, s(i, "Number", O)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(144),
			a = r(145),
			o = r(27),
			s = r(53),
			u = r(15),
			c = u("iterator"),
			f = u("toStringTag"),
			l = o.values,
			p = function(e, t) {
				if (e) {
					if (e[c] !== l) try {
						s(e, c, l)
					} catch (t) {
						e[c] = l
					}
					if (e[f] || s(e, f, t), i[t])
						for (var r in o)
							if (e[r] !== o[r]) try {
								s(e, r, o[r])
							} catch (t) {
								e[r] = o[r]
							}
				}
			};
		for (var m in i) p(n[m] && n[m].prototype, m);
		p(a, "DOMTokenList")
	}, function(e, t) {
		function r() {
			return e.exports = r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(this,
				arguments)
		}
		e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n;
		/**
		 * @license Complex.js v2.0.15 12/05/2020
		 *
		 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 **/
		! function(r) {
			"use strict";
			var i = function(e) {
					return .5 * (Math.exp(e) + Math.exp(-e))
				},
				a = function(e) {
					return .5 * (Math.exp(e) - Math.exp(-e))
				},
				o = function() {
					throw SyntaxError("Invalid Param")
				};

			function s(e, t) {
				var r = Math.abs(e),
					n = Math.abs(t);
				return 0 === e ? Math.log(n) : 0 === t ? Math.log(r) : r < 3e3 && n < 3e3 ? .5 *
					Math.log(e * e + t * t) : Math.log(e / Math.cos(Math.atan2(t, e)))
			}

			function u(e, t) {
				if (!(this instanceof u)) return new u(e, t);
				var r = function(e, t) {
					var r = {
						re: 0,
						im: 0
					};
					if (null == e) r.re = r.im = 0;
					else if (void 0 !== t) r.re = e, r.im = t;
					else switch (typeof e) {
						case "object":
							if ("im" in e && "re" in e) r.re = e.re, r.im = e.im;
							else if ("abs" in e && "arg" in e) {
								if (!Number.isFinite(e.abs) && Number.isFinite(e.arg))
									return u.INFINITY;
								r.re = e.abs * Math.cos(e.arg), r.im = e.abs * Math.sin(e
									.arg)
							} else if ("r" in e && "phi" in e) {
								if (!Number.isFinite(e.r) && Number.isFinite(e.phi))
								return u.INFINITY;
								r.re = e.r * Math.cos(e.phi), r.im = e.r * Math.sin(e.phi)
							} else 2 === e.length ? (r.re = e[0], r.im = e[1]) : o();
							break;
						case "string":
							r.im = r.re = 0;
							var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
								i = 1,
								a = 0;
							null === n && o();
							for (var s = 0; s < n.length; s++) {
								var c = n[s];
								" " === c || "\t" === c || "\n" === c || ("+" === c ? i++ :
									"-" === c ? a++ : "i" === c || "I" === c ? (i +
										a === 0 && o(), " " === n[s + 1] || isNaN(n[s +
											1]) ? r.im += parseFloat((a % 2 ? "-" :
											"") + "1") : (r.im += parseFloat((a % 2 ?
											"-" : "") + n[s + 1]), s++), i = a = 0) : ((
											i + a === 0 || isNaN(c)) && o(), "i" === n[
											s + 1] || "I" === n[s + 1] ? (r.im +=
											parseFloat((a % 2 ? "-" : "") + c), s++) : r
										.re += parseFloat((a % 2 ? "-" : "") + c), i =
										a = 0))
							}
							i + a > 0 && o();
							break;
						case "number":
							r.im = 0, r.re = e;
							break;
						default:
							o()
					}
					return isNaN(r.re) || isNaN(r.im), r
				}(e, t);
				this.re = r.re, this.im = r.im
			}
			u.prototype = {
					re: 0,
					im: 0,
					sign: function() {
						var e = this.abs();
						return new u(this.re / e, this.im / e)
					},
					add: function(e, t) {
						var r = new u(e, t);
						return this.isInfinite() && r.isInfinite() ? u.NAN : this
						.isInfinite() || r.isInfinite() ? u.INFINITY : new u(this.re + r.re,
								this.im + r.im)
					},
					sub: function(e, t) {
						var r = new u(e, t);
						return this.isInfinite() && r.isInfinite() ? u.NAN : this
						.isInfinite() || r.isInfinite() ? u.INFINITY : new u(this.re - r.re,
								this.im - r.im)
					},
					mul: function(e, t) {
						var r = new u(e, t);
						return this.isInfinite() && r.isZero() || this.isZero() && r
							.isInfinite() ? u.NAN : this.isInfinite() || r.isInfinite() ? u
							.INFINITY : 0 === r.im && 0 === this.im ? new u(this.re * r.re, 0) :
							new u(this.re * r.re - this.im * r.im, this.re * r.im + this.im * r
								.re)
					},
					div: function(e, t) {
						var r = new u(e, t);
						if (this.isZero() && r.isZero() || this.isInfinite() && r.isInfinite())
							return u.NAN;
						if (this.isInfinite() || r.isZero()) return u.INFINITY;
						if (this.isZero() || r.isInfinite()) return u.ZERO;
						e = this.re, t = this.im;
						var n, i, a = r.re,
							o = r.im;
						return 0 === o ? new u(e / a, t / a) : Math.abs(a) < Math.abs(o) ?
							new u((e * (i = a / o) + t) / (n = a * i + o), (t * i - e) / n) :
							new u((e + t * (i = o / a)) / (n = o * i + a), (t - e * i) / n)
					},
					pow: function(e, t) {
						var r = new u(e, t);
						if (e = this.re, t = this.im, r.isZero()) return u.ONE;
						if (0 === r.im) {
							if (0 === t && e > 0) return new u(Math.pow(e, r.re), 0);
							if (0 === e) switch ((r.re % 4 + 4) % 4) {
								case 0:
									return new u(Math.pow(t, r.re), 0);
								case 1:
									return new u(0, Math.pow(t, r.re));
								case 2:
									return new u(-Math.pow(t, r.re), 0);
								case 3:
									return new u(0, -Math.pow(t, r.re))
							}
						}
						if (0 === e && 0 === t && r.re > 0 && r.im >= 0) return u.ZERO;
						var n = Math.atan2(t, e),
							i = s(e, t);
						return e = Math.exp(r.re * i - r.im * n), t = r.im * i + r.re * n,
							new u(e * Math.cos(t), e * Math.sin(t))
					},
					sqrt: function() {
						var e, t, r = this.re,
							n = this.im,
							i = this.abs();
						if (r >= 0) {
							if (0 === n) return new u(Math.sqrt(r), 0);
							e = .5 * Math.sqrt(2 * (i + r))
						} else e = Math.abs(n) / Math.sqrt(2 * (i - r));
						return t = r <= 0 ? .5 * Math.sqrt(2 * (i - r)) : Math.abs(n) / Math
							.sqrt(2 * (i + r)), new u(e, n < 0 ? -t : t)
					},
					exp: function() {
						var e = Math.exp(this.re);
						return this.im, new u(e * Math.cos(this.im), e * Math.sin(this.im))
					},
					expm1: function() {
						var e = this.re,
							t = this.im;
						return new u(Math.expm1(e) * Math.cos(t) + function(e) {
							var t = Math.PI / 4;
							if (-t > e || e > t) return Math.cos(e) - 1;
							var r = e * e;
							return r * (r * (r * (r * (r * (r * (r * (r /
										20922789888e3 - 1 /
										87178291200) + 1 /
									479001600) - 1 / 3628800) + 1 /
								40320) - 1 / 720) + 1 / 24) - .5)
						}(t), Math.exp(e) * Math.sin(t))
					},
					log: function() {
						var e = this.re,
							t = this.im;
						return new u(s(e, t), Math.atan2(t, e))
					},
					abs: function() {
						return e = this.re, t = this.im, r = Math.abs(e), n = Math.abs(t), r <
							3e3 && n < 3e3 ? Math.sqrt(r * r + n * n) : (r < n ? (r = n, n = e /
								t) : n = t / e, r * Math.sqrt(1 + n * n));
						var e, t, r, n
					},
					arg: function() {
						return Math.atan2(this.im, this.re)
					},
					sin: function() {
						var e = this.re,
							t = this.im;
						return new u(Math.sin(e) * i(t), Math.cos(e) * a(t))
					},
					cos: function() {
						var e = this.re,
							t = this.im;
						return new u(Math.cos(e) * i(t), -Math.sin(e) * a(t))
					},
					tan: function() {
						var e = 2 * this.re,
							t = 2 * this.im,
							r = Math.cos(e) + i(t);
						return new u(Math.sin(e) / r, a(t) / r)
					},
					cot: function() {
						var e = 2 * this.re,
							t = 2 * this.im,
							r = Math.cos(e) - i(t);
						return new u(-Math.sin(e) / r, a(t) / r)
					},
					sec: function() {
						var e = this.re,
							t = this.im,
							r = .5 * i(2 * t) + .5 * Math.cos(2 * e);
						return new u(Math.cos(e) * i(t) / r, Math.sin(e) * a(t) / r)
					},
					csc: function() {
						var e = this.re,
							t = this.im,
							r = .5 * i(2 * t) - .5 * Math.cos(2 * e);
						return new u(Math.sin(e) * i(t) / r, -Math.cos(e) * a(t) / r)
					},
					asin: function() {
						var e = this.re,
							t = this.im,
							r = new u(t * t - e * e + 1, -2 * e * t).sqrt(),
							n = new u(r.re - t, r.im + e).log();
						return new u(n.im, -n.re)
					},
					acos: function() {
						var e = this.re,
							t = this.im,
							r = new u(t * t - e * e + 1, -2 * e * t).sqrt(),
							n = new u(r.re - t, r.im + e).log();
						return new u(Math.PI / 2 - n.im, n.re)
					},
					atan: function() {
						var e = this.re,
							t = this.im;
						if (0 === e) {
							if (1 === t) return new u(0, 1 / 0);
							if (-1 === t) return new u(0, -1 / 0)
						}
						var r = e * e + (1 - t) * (1 - t),
							n = new u((1 - t * t - e * e) / r, -2 * e / r).log();
						return new u(-.5 * n.im, .5 * n.re)
					},
					acot: function() {
						var e = this.re,
							t = this.im;
						if (0 === t) return new u(Math.atan2(1, e), 0);
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).atan() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).atan()
					},
					asec: function() {
						var e = this.re,
							t = this.im;
						if (0 === e && 0 === t) return new u(0, 1 / 0);
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).acos() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).acos()
					},
					acsc: function() {
						var e = this.re,
							t = this.im;
						if (0 === e && 0 === t) return new u(Math.PI / 2, 1 / 0);
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).asin() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).asin()
					},
					sinh: function() {
						var e = this.re,
							t = this.im;
						return new u(a(e) * Math.cos(t), i(e) * Math.sin(t))
					},
					cosh: function() {
						var e = this.re,
							t = this.im;
						return new u(i(e) * Math.cos(t), a(e) * Math.sin(t))
					},
					tanh: function() {
						var e = 2 * this.re,
							t = 2 * this.im,
							r = i(e) + Math.cos(t);
						return new u(a(e) / r, Math.sin(t) / r)
					},
					coth: function() {
						var e = 2 * this.re,
							t = 2 * this.im,
							r = i(e) - Math.cos(t);
						return new u(a(e) / r, -Math.sin(t) / r)
					},
					csch: function() {
						var e = this.re,
							t = this.im,
							r = Math.cos(2 * t) - i(2 * e);
						return new u(-2 * a(e) * Math.cos(t) / r, 2 * i(e) * Math.sin(t) / r)
					},
					sech: function() {
						var e = this.re,
							t = this.im,
							r = Math.cos(2 * t) + i(2 * e);
						return new u(2 * i(e) * Math.cos(t) / r, -2 * a(e) * Math.sin(t) / r)
					},
					asinh: function() {
						var e = this.im;
						this.im = -this.re, this.re = e;
						var t = this.asin();
						return this.re = -this.im, this.im = e, e = t.re, t.re = -t.im, t.im =
							e, t
					},
					acosh: function() {
						var e = this.acos();
						if (e.im <= 0) {
							var t = e.re;
							e.re = -e.im, e.im = t
						} else {
							t = e.im;
							e.im = -e.re, e.re = t
						}
						return e
					},
					atanh: function() {
						var e = this.re,
							t = this.im,
							r = e > 1 && 0 === t,
							n = 1 - e,
							i = 1 + e,
							a = n * n + t * t,
							o = 0 !== a ? new u((i * n - t * t) / a, (t * n + i * t) / a) :
							new u(-1 !== e ? e / 0 : 0, 0 !== t ? t / 0 : 0),
							c = o.re;
						return o.re = s(o.re, o.im) / 2, o.im = Math.atan2(o.im, c) / 2, r && (o
							.im = -o.im), o
					},
					acoth: function() {
						var e = this.re,
							t = this.im;
						if (0 === e && 0 === t) return new u(0, Math.PI / 2);
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).atanh() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).atanh()
					},
					acsch: function() {
						var e = this.re,
							t = this.im;
						if (0 === t) return new u(0 !== e ? Math.log(e + Math.sqrt(e * e + 1)) :
							1 / 0, 0);
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).asinh() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).asinh()
					},
					asech: function() {
						var e = this.re,
							t = this.im;
						if (this.isZero()) return u.INFINITY;
						var r = e * e + t * t;
						return 0 !== r ? new u(e / r, -t / r).acosh() : new u(0 !== e ? e / 0 :
							0, 0 !== t ? -t / 0 : 0).acosh()
					},
					inverse: function() {
						if (this.isZero()) return u.INFINITY;
						if (this.isInfinite()) return u.ZERO;
						var e = this.re,
							t = this.im,
							r = e * e + t * t;
						return new u(e / r, -t / r)
					},
					conjugate: function() {
						return new u(this.re, -this.im)
					},
					neg: function() {
						return new u(-this.re, -this.im)
					},
					ceil: function(e) {
						return e = Math.pow(10, e || 0), new u(Math.ceil(this.re * e) / e, Math
							.ceil(this.im * e) / e)
					},
					floor: function(e) {
						return e = Math.pow(10, e || 0), new u(Math.floor(this.re * e) / e, Math
							.floor(this.im * e) / e)
					},
					round: function(e) {
						return e = Math.pow(10, e || 0), new u(Math.round(this.re * e) / e, Math
							.round(this.im * e) / e)
					},
					equals: function(e, t) {
						var r = new u(e, t);
						return Math.abs(r.re - this.re) <= u.EPSILON && Math.abs(r.im - this
							.im) <= u.EPSILON
					},
					clone: function() {
						return new u(this.re, this.im)
					},
					toString: function() {
						var e = this.re,
							t = this.im,
							r = "";
						return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math
							.abs(e) < u.EPSILON && (e = 0), Math.abs(t) < u.EPSILON && (t =
								0), 0 === t ? r + e : (0 !== e ? (r += e, r += " ", t < 0 ?
								(t = -t, r += "-") : r += "+", r += " ") : t < 0 && (
								t = -t, r += "-"), 1 !== t && (r += t), r + "i"))
					},
					toVector: function() {
						return [this.re, this.im]
					},
					valueOf: function() {
						return 0 === this.im ? this.re : null
					},
					isNaN: function() {
						return isNaN(this.re) || isNaN(this.im)
					},
					isZero: function() {
						return 0 === this.im && 0 === this.re
					},
					isFinite: function() {
						return isFinite(this.re) && isFinite(this.im)
					},
					isInfinite: function() {
						return !(this.isNaN() || this.isFinite())
					}
				}, u.ZERO = new u(0, 0), u.ONE = new u(1, 0), u.I = new u(0, 1), u.PI = new u(Math
					.PI, 0), u.E = new u(Math.E, 0), u.INFINITY = new u(1 / 0, 1 / 0), u.NAN =
				new u(NaN, NaN), u.EPSILON = 1e-15, void 0 === (n = function() {
					return u
				}.apply(t, [])) || (e.exports = n)
		}()
	}, function(e, t, r) {
		var n = r(1),
			i = r(96),
			a = n.String;
		e.exports = function(e) {
			if ("Symbol" === i(e)) throw TypeError("Cannot convert a Symbol value to a string");
			return a(e)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(47),
			a = n.Object;
		e.exports = function(e) {
			return a(i(e))
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(14),
			a = r(26),
			o = r(53),
			s = r(107),
			u = r(93),
			c = r(44),
			f = r(78).CONFIGURABLE,
			l = c.get,
			p = c.enforce,
			m = String(String).split("String");
		(e.exports = function(e, t, r, u) {
			var c, l = !!u && !!u.unsafe,
				h = !!u && !!u.enumerable,
				d = !!u && !!u.noTargetGet,
				v = u && void 0 !== u.name ? u.name : t;
			i(r) && ("Symbol(" === String(v).slice(0, 7) && (v = "[" + String(v).replace(
					/^Symbol\(([^)]*)\)/, "$1") + "]"), (!a(r, "name") || f && r.name !==
				v) && o(r, "name", v), (c = p(r)).source || (c.source = m.join("string" ==
					typeof v ? v : ""))), e !== n ? (l ? !d && e[t] && (h = !0) : delete e[
				t], h ? e[t] = r : o(e, t, r)) : h ? e[t] = r : s(t, r)
		})(Function.prototype, "toString", (function() {
			return i(this) && l(this).source || u(this)
		}))
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(81).filter;
		n({
			target: "Array",
			proto: !0,
			forced: !r(82)("filter")
		}, {
			filter: function(e) {
				return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(48),
			o = r(83),
			s = r(22),
			u = r(9),
			c = r(67),
			f = r(18),
			l = r(105),
			p = r(8),
			m = r(26),
			h = r(97),
			d = r(14),
			v = r(23),
			y = r(52),
			g = r(88),
			x = r(20),
			b = r(35),
			w = r(40),
			N = r(87),
			M = r(34),
			E = r(75),
			S = r(70),
			A = r(109),
			O = r(68),
			C = r(169),
			_ = r(143),
			T = r(58),
			I = r(19),
			k = r(152),
			z = r(135),
			R = r(123),
			q = r(36),
			B = r(90),
			D = r(94),
			j = r(77),
			P = r(91),
			F = r(15),
			U = r(175),
			L = r(176),
			$ = r(85),
			H = r(44),
			G = r(81).forEach,
			V = D("hidden"),
			Z = F("toPrimitive"),
			W = H.set,
			Y = H.getterFor("Symbol"),
			J = Object.prototype,
			X = i.Symbol,
			Q = X && X.prototype,
			K = i.TypeError,
			ee = i.QObject,
			te = a("JSON", "stringify"),
			re = T.f,
			ne = I.f,
			ie = C.f,
			ae = z.f,
			oe = u([].push),
			se = B("symbols"),
			ue = B("op-symbols"),
			ce = B("string-to-symbol-registry"),
			fe = B("symbol-to-string-registry"),
			le = B("wks"),
			pe = !ee || !ee.prototype || !ee.prototype.findChild,
			me = f && p((function() {
				return 7 != S(ne({}, "a", {
					get: function() {
						return ne(this, "a", {
							value: 7
						}).a
					}
				})).a
			})) ? function(e, t, r) {
				var n = re(J, t);
				n && delete J[t], ne(e, t, r), n && e !== J && ne(J, t, n)
			} : ne,
			he = function(e, t) {
				var r = se[e] = S(Q);
				return W(r, {
					type: "Symbol",
					tag: e,
					description: t
				}), f || (r.description = t), r
			},
			de = function(e, t, r) {
				e === J && de(ue, t, r), x(e);
				var n = N(t);
				return x(r), m(se, n) ? (r.enumerable ? (m(e, V) && e[V][n] && (e[V][n] = !1), r =
					S(r, {
						enumerable: E(0, !1)
					})) : (m(e, V) || ne(e, V, E(1, {})), e[V][n] = !0), me(e, n, r)) : ne(e, n,
					r)
			},
			ve = function(e, t) {
				x(e);
				var r = w(t),
					n = A(r).concat(be(r));
				return G(n, (function(t) {
					f && !s(ye, r, t) || de(e, t, r[t])
				})), e
			},
			ye = function(e) {
				var t = N(e),
					r = s(ae, this, t);
				return !(this === J && m(se, t) && !m(ue, t)) && (!(r || !m(this, t) || !m(se, t) ||
					m(this, V) && this[V][t]) || r)
			},
			ge = function(e, t) {
				var r = w(e),
					n = N(t);
				if (r !== J || !m(se, n) || m(ue, n)) {
					var i = re(r, n);
					return !i || !m(se, n) || m(r, V) && r[V][n] || (i.enumerable = !0), i
				}
			},
			xe = function(e) {
				var t = ie(w(e)),
					r = [];
				return G(t, (function(e) {
					m(se, e) || m(j, e) || oe(r, e)
				})), r
			},
			be = function(e) {
				var t = e === J,
					r = ie(t ? ue : w(e)),
					n = [];
				return G(r, (function(e) {
					!m(se, e) || t && !m(J, e) || oe(n, se[e])
				})), n
			};
		(l || (q(Q = (X = function() {
				if (y(Q, this)) throw K("Symbol is not a constructor");
				var e = arguments.length && void 0 !== arguments[0] ? M(arguments[0]) :
					void 0,
					t = P(e),
					r = function(e) {
						this === J && s(r, ue, e), m(this, V) && m(this[V], t) && (this[
							V][t] = !1), me(this, t, E(1, e))
					};
				return f && pe && me(J, t, {
					configurable: !0,
					set: r
				}), he(t, e)
			}).prototype, "toString", (function() {
				return Y(this).tag
			})), q(X, "withoutSetter", (function(e) {
				return he(P(e), e)
			})), z.f = ye, I.f = de, k.f = ve, T.f = ge, O.f = C.f = xe, _.f = be, U.f =
			function(e) {
				return he(F(e), e)
			}, f && (ne(Q, "description", {
				configurable: !0,
				get: function() {
					return Y(this).description
				}
			}), c || q(J, "propertyIsEnumerable", ye, {
				unsafe: !0
			}))), n({
			global: !0,
			wrap: !0,
			forced: !l,
			sham: !l
		}, {
			Symbol: X
		}), G(A(le), (function(e) {
			L(e)
		})), n({
			target: "Symbol",
			stat: !0,
			forced: !l
		}, {
			for: function(e) {
				var t = M(e);
				if (m(ce, t)) return ce[t];
				var r = X(t);
				return ce[t] = r, fe[r] = t, r
			},
			keyFor: function(e) {
				if (!g(e)) throw K(e + " is not a symbol");
				if (m(fe, e)) return fe[e]
			},
			useSetter: function() {
				pe = !0
			},
			useSimple: function() {
				pe = !1
			}
		}), n({
			target: "Object",
			stat: !0,
			forced: !l,
			sham: !f
		}, {
			create: function(e, t) {
				return void 0 === t ? S(e) : ve(S(e), t)
			},
			defineProperty: de,
			defineProperties: ve,
			getOwnPropertyDescriptor: ge
		}), n({
			target: "Object",
			stat: !0,
			forced: !l
		}, {
			getOwnPropertyNames: xe,
			getOwnPropertySymbols: be
		}), n({
			target: "Object",
			stat: !0,
			forced: p((function() {
				_.f(1)
			}))
		}, {
			getOwnPropertySymbols: function(e) {
				return _.f(b(e))
			}
		}), te) && n({
			target: "JSON",
			stat: !0,
			forced: !l || p((function() {
				var e = X();
				return "[null]" != te([e]) || "{}" != te({
					a: e
				}) || "{}" != te(Object(e))
			}))
		}, {
			stringify: function(e, t, r) {
				var n = R(arguments),
					i = t;
				if ((v(t) || void 0 !== e) && !g(e)) return h(t) || (t = function(e,
				t) {
					if (d(i) && (t = s(i, this, e, t)), !g(t)) return t
				}), n[1] = t, o(te, null, n)
			}
		});
		if (!Q[Z]) {
			var we = Q.valueOf;
			q(Q, Z, (function(e) {
				return s(we, this)
			}))
		}
		$(X, "Symbol"), j[V] = !0
	}, function(e, t) {
		e.exports = function() {
			throw new Error("define cannot be used indirect")
		}
	}, function(e, t, r) {
		var n = r(104),
			i = r(47);
		e.exports = function(e) {
			return n(i(e))
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(9),
			a = r(66),
			o = r(35),
			s = r(45),
			u = r(34),
			c = r(8),
			f = r(197),
			l = r(112),
			p = r(198),
			m = r(199),
			h = r(76),
			d = r(200),
			v = [],
			y = i(v.sort),
			g = i(v.push),
			x = c((function() {
				v.sort(void 0)
			})),
			b = c((function() {
				v.sort(null)
			})),
			w = l("sort"),
			N = !c((function() {
				if (h) return h < 70;
				if (!(p && p > 3)) {
					if (m) return !0;
					if (d) return d < 603;
					var e, t, r, n, i = "";
					for (e = 65; e < 76; e++) {
						switch (t = String.fromCharCode(e), e) {
							case 66:
							case 69:
							case 70:
							case 72:
								r = 3;
								break;
							case 68:
							case 71:
								r = 4;
								break;
							default:
								r = 2
						}
						for (n = 0; n < 47; n++) v.push({
							k: t + n,
							v: r
						})
					}
					for (v.sort((function(e, t) {
							return t.v - e.v
						})), n = 0; n < v.length; n++) t = v[n].k.charAt(0), i.charAt(i
						.length - 1) !== t && (i += t);
					return "DGBEFHACIJK" !== i
				}
			}));
		n({
			target: "Array",
			proto: !0,
			forced: x || !b || !w || !N
		}, {
			sort: function(e) {
				void 0 !== e && a(e);
				var t = o(this);
				if (N) return void 0 === e ? y(t) : y(t, e);
				var r, n, i = [],
					c = s(t);
				for (n = 0; n < c; n++) n in t && g(i, t[n]);
				for (f(i, function(e) {
						return function(t, r) {
							return void 0 === r ? -1 : void 0 === t ? 1 :
								void 0 !== e ? +e(t, r) || 0 : u(t) > u(r) ? 1 :
								-1
						}
					}(e)), r = i.length, n = 0; n < r;) t[n] = i[n++];
				for (; n < c;) delete t[n++];
				return t
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(156).charAt,
			i = r(34),
			a = r(44),
			o = r(125),
			s = a.set,
			u = a.getterFor("String Iterator");
		o(String, "String", (function(e) {
			s(this, {
				type: "String Iterator",
				string: i(e),
				index: 0
			})
		}), (function() {
			var e, t = u(this),
				r = t.string,
				i = t.index;
			return i >= r.length ? {
				value: void 0,
				done: !0
			} : (e = n(r, i), t.index += e.length, {
				value: e,
				done: !1
			})
		}))
	}, function(e, t, r) {
		var n = r(9),
			i = n({}.toString),
			a = n("".slice);
		e.exports = function(e) {
			return a(i(e), 8, -1)
		}
	}, function(e, t, r) {
		var n, i, a, o = r(190),
			s = r(1),
			u = r(9),
			c = r(23),
			f = r(53),
			l = r(26),
			p = r(106),
			m = r(94),
			h = r(77),
			d = s.TypeError,
			v = s.WeakMap;
		if (o || p.state) {
			var y = p.state || (p.state = new v),
				g = u(y.get),
				x = u(y.has),
				b = u(y.set);
			n = function(e, t) {
				if (x(y, e)) throw new d("Object already initialized");
				return t.facade = e, b(y, e, t), t
			}, i = function(e) {
				return g(y, e) || {}
			}, a = function(e) {
				return x(y, e)
			}
		} else {
			var w = m("state");
			h[w] = !0, n = function(e, t) {
				if (l(e, w)) throw new d("Object already initialized");
				return t.facade = e, f(e, w, t), t
			}, i = function(e) {
				return l(e, w) ? e[w] : {}
			}, a = function(e) {
				return l(e, w)
			}
		}
		e.exports = {
			set: n,
			get: i,
			has: a,
			enforce: function(e) {
				return a(e) ? i(e) : n(e, {})
			},
			getterFor: function(e) {
				return function(t) {
					var r;
					if (!c(t) || (r = i(t)).type !== e) throw d(
						"Incompatible receiver, " + e + " required");
					return r
				}
			}
		}
	}, function(e, t, r) {
		var n = r(95);
		e.exports = function(e) {
			return n(e.length)
		}
	}, function(e, t, r) {
		"use strict";
		r(10);
		var n, i, a = r(6),
			o = r(1),
			s = r(22),
			u = r(9),
			c = r(14),
			f = r(23),
			l = (n = !1, (i = /[ac]/).exec = function() {
				return n = !0, /./.exec.apply(this, arguments)
			}, !0 === i.test("abc") && n),
			p = o.Error,
			m = u(/./.test);
		a({
			target: "RegExp",
			proto: !0,
			forced: !l
		}, {
			test: function(e) {
				var t = this.exec;
				if (!c(t)) return m(this, e);
				var r = s(t, this, e);
				if (null !== r && !f(r)) throw new p(
					"RegExp exec method returned something other than an Object or null"
					);
				return !!r
			}
		})
	}, function(e, t, r) {
		var n = r(1).TypeError;
		e.exports = function(e) {
			if (null == e) throw n("Can't call method on " + e);
			return e
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(14),
			a = function(e) {
				return i(e) ? e : void 0
			};
		e.exports = function(e, t) {
			return arguments.length < 2 ? a(n[e]) : n[e] && n[e][t]
		}
	}, function(e, t, r) {
		var n = r(6),
			i = r(1),
			a = r(48),
			o = r(83),
			s = r(9),
			u = r(8),
			c = i.Array,
			f = a("JSON", "stringify"),
			l = s(/./.exec),
			p = s("".charAt),
			m = s("".charCodeAt),
			h = s("".replace),
			d = s(1..toString),
			v = /[\uD800-\uDFFF]/g,
			y = /^[\uD800-\uDBFF]$/,
			g = /^[\uDC00-\uDFFF]$/,
			x = function(e, t, r) {
				var n = p(r, t - 1),
					i = p(r, t + 1);
				return l(y, e) && !l(g, i) || l(g, e) && !l(y, n) ? "\\u" + d(m(e, 0), 16) : e
			},
			b = u((function() {
				return '"\\udf06\\ud834"' !== f("\udf06\ud834") || '"\\udead"' !== f(
					"\udead")
			}));
		f && n({
			target: "JSON",
			stat: !0,
			forced: b
		}, {
			stringify: function(e, t, r) {
				for (var n = 0, i = arguments.length, a = c(i); n < i; n++) a[n] =
					arguments[n];
				var s = o(f, null, a);
				return "string" == typeof s ? h(s, v, x) : s
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(83),
			i = r(22),
			a = r(9),
			o = r(119),
			s = r(149),
			u = r(20),
			c = r(47),
			f = r(155),
			l = r(120),
			p = r(95),
			m = r(34),
			h = r(65),
			d = r(121),
			v = r(122),
			y = r(100),
			g = r(99),
			x = r(8),
			b = g.UNSUPPORTED_Y,
			w = Math.min,
			N = [].push,
			M = a(/./.exec),
			E = a(N),
			S = a("".slice);
		o("split", (function(e, t, r) {
			var a;
			return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)
				.length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(
					/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/)
				.length ? function(e, r) {
					var a = m(c(this)),
						o = void 0 === r ? 4294967295 : r >>> 0;
					if (0 === o) return [];
					if (void 0 === e) return [a];
					if (!s(e)) return i(t, a, e, o);
					for (var u, f, l, p = [], h = (e.ignoreCase ? "i" : "") + (e
							.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e
							.sticky ? "y" : ""), v = 0, g = new RegExp(e.source, h +
							"g");
						(u = i(y, g, a)) && !((f = g.lastIndex) > v && (E(p, S(a, v, u
							.index)), u.length > 1 && u.index < a.length && n(N,
							p, d(u, 1)), l = u[0].length, v = f, p.length >= o));) g
						.lastIndex === u.index && g.lastIndex++;
					return v === a.length ? !l && M(g, "") || E(p, "") : E(p, S(a, v)),
						p.length > o ? d(p, 0, o) : p
				} : "0".split(void 0, 0).length ? function(e, r) {
					return void 0 === e && 0 === r ? [] : i(t, this, e, r)
				} : t, [function(t, r) {
					var n = c(this),
						o = null == t ? void 0 : h(t, e);
					return o ? i(o, t, n, r) : i(a, m(n), t, r)
				}, function(e, n) {
					var i = u(this),
						o = m(e),
						s = r(a, i, o, n, a !== t);
					if (s.done) return s.value;
					var c = f(i, RegExp),
						h = i.unicode,
						d = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (
							i.unicode ? "u" : "") + (b ? "g" : "y"),
						y = new c(b ? "^(?:" + i.source + ")" : i, d),
						g = void 0 === n ? 4294967295 : n >>> 0;
					if (0 === g) return [];
					if (0 === o.length) return null === v(y, o) ? [o] : [];
					for (var x = 0, N = 0, M = []; N < o.length;) {
						y.lastIndex = b ? 0 : N;
						var A, O = v(y, b ? S(o, N) : o);
						if (null === O || (A = w(p(y.lastIndex + (b ? N : 0)), o
								.length)) === x) N = l(o, N, h);
						else {
							if (E(M, S(o, x, N)), M.length === g) return M;
							for (var C = 1; C <= O.length - 1; C++)
								if (E(M, O[C]), M.length === g) return M;
							N = x = A
						}
					}
					return E(M, S(o, x)), M
				}]
		}), !!x((function() {
			var e = /(?:)/,
				t = e.exec;
			e.exec = function() {
				return t.apply(this, arguments)
			};
			var r = "ab".split(e);
			return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
		})), b)
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(18),
			a = r(1),
			o = r(9),
			s = r(26),
			u = r(14),
			c = r(52),
			f = r(34),
			l = r(19).f,
			p = r(140),
			m = a.Symbol,
			h = m && m.prototype;
		if (i && u(m) && (!("description" in h) || void 0 !== m().description)) {
			var d = {},
				v = function() {
					var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[
							0]),
						t = c(h, this) ? new m(e) : void 0 === e ? m() : m(e);
					return "" === e && (d[t] = !0), t
				};
			p(v, m), v.prototype = h, h.constructor = v;
			var y = "Symbol(test)" == String(m("test")),
				g = o(h.toString),
				x = o(h.valueOf),
				b = /^Symbol\((.*)\)[^)]+$/,
				w = o("".replace),
				N = o("".slice);
			l(h, "description", {
				configurable: !0,
				get: function() {
					var e = x(this),
						t = g(e);
					if (s(d, e)) return "";
					var r = y ? N(t, 7, -1) : w(t, b, "$1");
					return "" === r ? void 0 : r
				}
			}), n({
				global: !0,
				forced: !0
			}, {
				Symbol: v
			})
		}
	}, function(e, t, r) {
		var n = r(9);
		e.exports = n({}.isPrototypeOf)
	}, function(e, t, r) {
		var n = r(18),
			i = r(19),
			a = r(75);
		e.exports = n ? function(e, t, r) {
			return i.f(e, t, a(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	}, function(e, t, r) {
		r(176)("iterator")
	}, function(e, t) {
		e.exports = function(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n = r(237),
			i = r(238),
			a = r(181),
			o = r(239);
		e.exports = function(e, t) {
			return n(e) || i(e, t) || a(e, t) || o()
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		e.exports = r(234)
	}, function(e, t, r) {
		var n = r(18),
			i = r(22),
			a = r(135),
			o = r(75),
			s = r(40),
			u = r(87),
			c = r(26),
			f = r(138),
			l = Object.getOwnPropertyDescriptor;
		t.f = n ? l : function(e, t) {
			if (e = s(e), t = u(t), f) try {
				return l(e, t)
			} catch (e) {}
			if (c(e, t)) return o(!i(a.f, e, t), e[t])
		}
	}, function(e, t, r) {
		var n = r(48);
		e.exports = n("navigator", "userAgent") || ""
	}, function(e, t) {
		var r = Math.ceil,
			n = Math.floor;
		e.exports = function(e) {
			var t = +e;
			return t != t || 0 === t ? 0 : (t > 0 ? n : r)(t)
		}
	}, function(e, t, r) {
		var n = r(6),
			i = r(221);
		n({
			target: "Array",
			stat: !0,
			forced: !r(129)((function(e) {
				Array.from(e)
			}))
		}, {
			from: i
		})
	}, function(e, t, r) {
		var n;
		! function(i) {
			"use strict";
			var a, o, s, u = 9e15,
				c = "0123456789abcdef",
				f =
				"2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
				l =
				"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
				p = {
					precision: 20,
					rounding: 4,
					modulo: 1,
					toExpNeg: -7,
					toExpPos: 21,
					minE: -u,
					maxE: u,
					crypto: !1
				},
				m = !0,
				h = "[DecimalError] Invalid argument: ",
				d = "[object Decimal]",
				v = Math.floor,
				y = Math.pow,
				g = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
				x = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
				b = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
				w = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
				N = 1e7,
				M = f.length - 1,
				E = l.length - 1,
				S = {
					toStringTag: d
				};

			function A(e) {
				var t, r, n, i = e.length - 1,
					a = "",
					o = e[0];
				if (i > 0) {
					for (a += o, t = 1; t < i; t++)(r = 7 - (n = e[t] + "").length) && (a += D(r)),
						a += n;
					(r = 7 - (n = (o = e[t]) + "").length) && (a += D(r))
				} else if (0 === o) return "0";
				for (; o % 10 == 0;) o /= 10;
				return a + o
			}

			function O(e, t, r) {
				if (e !== ~~e || e < t || e > r) throw Error(h + e)
			}

			function C(e, t, r, n) {
				var i, a, o, s;
				for (a = e[0]; a >= 10; a /= 10) --t;
				return --t < 0 ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), a = y(10,
						7 - t), s = e[i] % a | 0, null == n ? t < 3 ? (0 == t ? s = s / 100 | 0 :
						1 == t && (s = s / 10 | 0), o = r < 4 && 99999 == s || r > 3 && 49999 ==
						s || 5e4 == s || 0 == s) : o = (r < 4 && s + 1 == a || r > 3 && s + 1 == a /
						2) && (e[i + 1] / a / 100 | 0) == y(10, t - 2) - 1 || (s == a / 2 || 0 ==
					s) && 0 == (e[i + 1] / a / 100 | 0) : t < 4 ? (0 == t ? s = s / 1e3 | 0 : 1 ==
						t ? s = s / 100 | 0 : 2 == t && (s = s / 10 | 0), o = (n || r < 4) &&
						9999 == s || !n && r > 3 && 4999 == s) : o = ((n || r < 4) && s + 1 == a ||
						!n && r > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == y(10, t - 3) -
					1, o
			}

			function _(e, t, r) {
				for (var n, i, a = [0], o = 0, s = e.length; o < s;) {
					for (i = a.length; i--;) a[i] *= t;
					for (a[0] += c.indexOf(e.charAt(o++)), n = 0; n < a.length; n++) a[n] > r - 1 &&
						(void 0 === a[n + 1] && (a[n + 1] = 0), a[n + 1] += a[n] / r | 0, a[n] %= r)
				}
				return a.reverse()
			}
			S.absoluteValue = S.abs = function() {
				var e = new this.constructor(this);
				return e.s < 0 && (e.s = 1), I(e)
			}, S.ceil = function() {
				return I(new this.constructor(this), this.e + 1, 2)
			}, S.clampedTo = S.clamp = function(e, t) {
				var r = this,
					n = r.constructor;
				if (e = new n(e), t = new n(t), !e.s || !t.s) return new n(NaN);
				if (e.gt(t)) throw Error(h + t);
				return r.cmp(e) < 0 ? e : r.cmp(t) > 0 ? t : new n(r)
			}, S.comparedTo = S.cmp = function(e) {
				var t, r, n, i, a = this,
					o = a.d,
					s = (e = new a.constructor(e)).d,
					u = a.s,
					c = e.s;
				if (!o || !s) return u && c ? u !== c ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1 :
					NaN;
				if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -c : 0;
				if (u !== c) return u;
				if (a.e !== e.e) return a.e > e.e ^ u < 0 ? 1 : -1;
				for (t = 0, r = (n = o.length) < (i = s.length) ? n : i; t < r; ++t)
					if (o[t] !== s[t]) return o[t] > s[t] ^ u < 0 ? 1 : -1;
				return n === i ? 0 : n > i ^ u < 0 ? 1 : -1
			}, S.cosine = S.cos = function() {
				var e, t, r = this,
					n = r.constructor;
				return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math
					.max(r.e, r.sd()) + 7, n.rounding = 1, r = function(e, t) {
						var r, n, i;
						if (t.isZero()) return t;
						(n = t.d.length) < 32 ? (r = Math.ceil(n / 3), i = (1 / Z(4, r))
							.toString()) : (r = 16, i = "2.3283064365386962890625e-10");
						e.precision += r, t = V(e, 1, t.times(i), new e(1));
						for (var a = r; a--;) {
							var o = t.times(t);
							t = o.times(o).minus(o).times(8).plus(1)
						}
						return e.precision -= r, t
					}(n, W(n, r)), n.precision = e, n.rounding = t, I(2 == s || 3 == s ? r
						.neg() : r, e, t, !0)) : new n(1) : new n(NaN)
			}, S.cubeRoot = S.cbrt = function() {
				var e, t, r, n, i, a, o, s, u, c, f = this,
					l = f.constructor;
				if (!f.isFinite() || f.isZero()) return new l(f);
				for (m = !1, (a = f.s * y(f.s * f, 1 / 3)) && Math.abs(a) != 1 / 0 ? n = new l(a
						.toString()) : (r = A(f.d), (a = ((e = f.e) - r.length + 1) % 3) && (
						r += 1 == a || -2 == a ? "0" : "00"), a = y(r, 1 / 3), e = v((e +
						1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (n = new l(r = a == 1 / 0 ?
						"5e" + e : (r = a.toExponential()).slice(0, r.indexOf("e") +
						1) + e)).s = f.s), o = (e = l.precision) + 3;;)
					if (c = (u = (s = n).times(s).times(s)).plus(f), n = T(c.plus(f).times(s), c
							.plus(u), o + 2, 1), A(s.d).slice(0, o) === (r = A(n.d)).slice(0,
						o)) {
						if ("9999" != (r = r.slice(o - 3, o + 1)) && (i || "4999" != r)) {
							+r && (+r.slice(1) || "5" != r.charAt(0)) || (I(n, e + 1, 1), t = !n
								.times(n).times(n).eq(f));
							break
						}
						if (!i && (I(s, e + 1, 0), s.times(s).times(s).eq(f))) {
							n = s;
							break
						}
						o += 4, i = 1
					} return m = !0, I(n, e, l.rounding, t)
			}, S.decimalPlaces = S.dp = function() {
				var e, t = this.d,
					r = NaN;
				if (t) {
					if (r = 7 * ((e = t.length - 1) - v(this.e / 7)), e = t[e])
						for (; e % 10 == 0; e /= 10) r--;
					r < 0 && (r = 0)
				}
				return r
			}, S.dividedBy = S.div = function(e) {
				return T(this, new this.constructor(e))
			}, S.dividedToIntegerBy = S.divToInt = function(e) {
				var t = this.constructor;
				return I(T(this, new t(e), 0, 1, 1), t.precision, t.rounding)
			}, S.equals = S.eq = function(e) {
				return 0 === this.cmp(e)
			}, S.floor = function() {
				return I(new this.constructor(this), this.e + 1, 3)
			}, S.greaterThan = S.gt = function(e) {
				return this.cmp(e) > 0
			}, S.greaterThanOrEqualTo = S.gte = function(e) {
				var t = this.cmp(e);
				return 1 == t || 0 === t
			}, S.hyperbolicCosine = S.cosh = function() {
				var e, t, r, n, i, a = this,
					o = a.constructor,
					s = new o(1);
				if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
				if (a.isZero()) return s;
				r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o
					.rounding = 1, (i = a.d.length) < 32 ? t = (1 / Z(4, e = Math.ceil(i / 3)))
					.toString() : (e = 16, t = "2.3283064365386962890625e-10"), a = V(o, 1, a
						.times(t), new o(1), !0);
				for (var u, c = e, f = new o(8); c--;) u = a.times(a), a = s.minus(u.times(f
					.minus(u.times(f))));
				return I(a, o.precision = r, o.rounding = n, !0)
			}, S.hyperbolicSine = S.sinh = function() {
				var e, t, r, n, i = this,
					a = i.constructor;
				if (!i.isFinite() || i.isZero()) return new a(i);
				if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) +
					4, a.rounding = 1, (n = i.d.length) < 3) i = V(a, 2, i, i, !0);
				else {
					e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e, i = V(a, 2, i = i.times(1 /
						Z(5, e)), i, !0);
					for (var o, s = new a(5), u = new a(16), c = new a(20); e--;) o = i.times(
						i), i = i.times(s.plus(o.times(u.times(o).plus(c))))
				}
				return a.precision = t, a.rounding = r, I(i, t, r, !0)
			}, S.hyperbolicTangent = S.tanh = function() {
				var e, t, r = this,
					n = r.constructor;
				return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding,
					n.precision = e + 7, n.rounding = 1, T(r.sinh(), r.cosh(), n.precision =
						e, n.rounding = t)) : new n(r.s)
			}, S.inverseCosine = S.acos = function() {
				var e, t = this,
					r = t.constructor,
					n = t.abs().cmp(1),
					i = r.precision,
					a = r.rounding;
				return -1 !== n ? 0 === n ? t.isNeg() ? q(r, i, a) : new r(0) : new r(NaN) : t
					.isZero() ? q(r, i + 4, a).times(.5) : (r.precision = i + 6, r.rounding = 1,
						t = t.asin(), e = q(r, i + 4, a).times(.5), r.precision = i, r
						.rounding = a, e.minus(t))
			}, S.inverseHyperbolicCosine = S.acosh = function() {
				var e, t, r = this,
					n = r.constructor;
				return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision,
					t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n
					.rounding = 1, m = !1, r = r.times(r).minus(1).sqrt().plus(r), m = !0, n
					.precision = e, n.rounding = t, r.ln()) : new n(r)
			}, S.inverseHyperbolicSine = S.asinh = function() {
				var e, t, r = this,
					n = r.constructor;
				return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n
					.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n
					.rounding = 1, m = !1, r = r.times(r).plus(1).sqrt().plus(r), m = !0, n
					.precision = e, n.rounding = t, r.ln())
			}, S.inverseHyperbolicTangent = S.atanh = function() {
				var e, t, r, n, i = this,
					a = i.constructor;
				return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ?
					i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n,
					e) < 2 * -i.e - 1 ? I(new a(i), e, t, !0) : (a.precision = r = n - i.e,
						i = T(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4,
						a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i
						.times(.5))) : new a(NaN)
			}, S.inverseSine = S.asin = function() {
				var e, t, r, n, i = this,
					a = i.constructor;
				return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a
					.rounding, -1 !== t ? 0 === t ? ((e = q(a, r + 4, n).times(.5)).s = i.s,
						e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(
							new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision =
						r, a.rounding = n, i.times(2)))
			}, S.inverseTangent = S.atan = function() {
				var e, t, r, n, i, a, o, s, u, c = this,
					f = c.constructor,
					l = f.precision,
					p = f.rounding;
				if (c.isFinite()) {
					if (c.isZero()) return new f(c);
					if (c.abs().eq(1) && l + 4 <= E) return (o = q(f, l + 4, p).times(.25)).s =
						c.s, o
				} else {
					if (!c.s) return new f(NaN);
					if (l + 4 <= E) return (o = q(f, l + 4, p).times(.5)).s = c.s, o
				}
				for (f.precision = s = l + 10, f.rounding = 1, e = r = Math.min(28, s / 7 + 2 |
						0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
				for (m = !1, t = Math.ceil(s / 7), n = 1, u = c.times(c), o = new f(c), i = c; -
					1 !== e;)
					if (i = i.times(u), a = o.minus(i.div(n += 2)), i = i.times(u), void 0 !== (
							o = a.plus(i.div(n += 2))).d[t])
						for (e = t; o.d[e] === a.d[e] && e--;);
				return r && (o = o.times(2 << r - 1)), m = !0, I(o, f.precision = l, f
					.rounding = p, !0)
			}, S.isFinite = function() {
				return !!this.d
			}, S.isInteger = S.isInt = function() {
				return !!this.d && v(this.e / 7) > this.d.length - 2
			}, S.isNaN = function() {
				return !this.s
			}, S.isNegative = S.isNeg = function() {
				return this.s < 0
			}, S.isPositive = S.isPos = function() {
				return this.s > 0
			}, S.isZero = function() {
				return !!this.d && 0 === this.d[0]
			}, S.lessThan = S.lt = function(e) {
				return this.cmp(e) < 0
			}, S.lessThanOrEqualTo = S.lte = function(e) {
				return this.cmp(e) < 1
			}, S.logarithm = S.log = function(e) {
				var t, r, n, i, a, o, s, u, c = this.constructor,
					f = c.precision,
					l = c.rounding;
				if (null == e) e = new c(10), t = !0;
				else {
					if (r = (e = new c(e)).d, e.s < 0 || !r || !r[0] || e.eq(1)) return new c(
						NaN);
					t = e.eq(10)
				}
				if (r = this.d, this.s < 0 || !r || !r[0] || this.eq(1)) return new c(r && !r[
					0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0);
				if (t)
					if (r.length > 1) a = !0;
					else {
						for (i = r[0]; i % 10 == 0;) i /= 10;
						a = 1 !== i
					} if (m = !1, o = L(this, s = f + 5), n = t ? R(c, s + 10) : L(e, s), C((u =
						T(o, n, s, 1)).d, i = f, l))
					do {
						if (o = L(this, s += 10), n = t ? R(c, s + 10) : L(e, s), u = T(o, n, s,
								1), !a) {
							+A(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = I(u, f + 1, 0));
							break
						}
					} while (C(u.d, i += 10, l));
				return m = !0, I(u, f, l)
			}, S.minus = S.sub = function(e) {
				var t, r, n, i, a, o, s, u, c, f, l, p, h = this,
					d = h.constructor;
				if (e = new d(e), !h.d || !e.d) return h.s && e.s ? h.d ? e.s = -e.s : e =
					new d(e.d || h.s !== e.s ? h : NaN) : e = new d(NaN), e;
				if (h.s != e.s) return e.s = -e.s, h.plus(e);
				if (c = h.d, p = e.d, s = d.precision, u = d.rounding, !c[0] || !p[0]) {
					if (p[0]) e.s = -e.s;
					else {
						if (!c[0]) return new d(3 === u ? -0 : 0);
						e = new d(h)
					}
					return m ? I(e, s, u) : e
				}
				if (r = v(e.e / 7), f = v(h.e / 7), c = c.slice(), a = f - r) {
					for ((l = a < 0) ? (t = c, a = -a, o = p.length) : (t = p, r = f, o = c
							.length), a > (n = Math.max(Math.ceil(s / 7), o) + 2) && (a = n, t
							.length = 1), t.reverse(), n = a; n--;) t.push(0);
					t.reverse()
				} else {
					for ((l = (n = c.length) < (o = p.length)) && (o = n), n = 0; n < o; n++)
						if (c[n] != p[n]) {
							l = c[n] < p[n];
							break
						} a = 0
				}
				for (l && (t = c, c = p, p = t, e.s = -e.s), o = c.length, n = p.length - o; n >
					0; --n) c[o++] = 0;
				for (n = p.length; n > a;) {
					if (c[--n] < p[n]) {
						for (i = n; i && 0 === c[--i];) c[i] = N - 1;
						--c[i], c[n] += N
					}
					c[n] -= p[n]
				}
				for (; 0 === c[--o];) c.pop();
				for (; 0 === c[0]; c.shift()) --r;
				return c[0] ? (e.d = c, e.e = z(c, r), m ? I(e, s, u) : e) : new d(3 === u ? -
					0 : 0)
			}, S.modulo = S.mod = function(e) {
				var t, r = this,
					n = r.constructor;
				return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r
					.d && !r.d[0] ? I(new n(r), n.precision, n.rounding) : (m = !1, 9 == n
						.modulo ? (t = T(r, e.abs(), 0, 3, 1)).s *= e.s : t = T(r, e, 0, n
							.modulo, 1), t = t.times(e), m = !0, r.minus(t))
			}, S.naturalExponential = S.exp = function() {
				return U(this)
			}, S.naturalLogarithm = S.ln = function() {
				return L(this)
			}, S.negated = S.neg = function() {
				var e = new this.constructor(this);
				return e.s = -e.s, I(e)
			}, S.plus = S.add = function(e) {
				var t, r, n, i, a, o, s, u, c, f, l = this,
					p = l.constructor;
				if (e = new p(e), !l.d || !e.d) return l.s && e.s ? l.d || (e = new p(e.d || l
					.s === e.s ? l : NaN)) : e = new p(NaN), e;
				if (l.s != e.s) return e.s = -e.s, l.minus(e);
				if (c = l.d, f = e.d, s = p.precision, u = p.rounding, !c[0] || !f[0]) return f[
					0] || (e = new p(l)), m ? I(e, s, u) : e;
				if (a = v(l.e / 7), n = v(e.e / 7), c = c.slice(), i = a - n) {
					for (i < 0 ? (r = c, i = -i, o = f.length) : (r = f, n = a, o = c.length),
						i > (o = (a = Math.ceil(s / 7)) > o ? a + 1 : o + 1) && (i = o, r
							.length = 1), r.reverse(); i--;) r.push(0);
					r.reverse()
				}
				for ((o = c.length) - (i = f.length) < 0 && (i = o, r = f, f = c, c = r), t =
					0; i;) t = (c[--i] = c[i] + f[i] + t) / N | 0, c[i] %= N;
				for (t && (c.unshift(t), ++n), o = c.length; 0 == c[--o];) c.pop();
				return e.d = c, e.e = z(c, n), m ? I(e, s, u) : e
			}, S.precision = S.sd = function(e) {
				var t, r = this;
				if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(h + e);
				return r.d ? (t = B(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t
			}, S.round = function() {
				var e = this,
					t = e.constructor;
				return I(new t(e), e.e + 1, t.rounding)
			}, S.sine = S.sin = function() {
				var e, t, r = this,
					n = r.constructor;
				return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding,
					n.precision = e + Math.max(r.e, r.sd()) + 7, n.rounding = 1, r =
					function(e, t) {
						var r, n = t.d.length;
						if (n < 3) return t.isZero() ? t : V(e, 2, t, t);
						r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r, t = t.times(1 / Z(5,
							r)), t = V(e, 2, t, t);
						for (var i, a = new e(5), o = new e(16), s = new e(20); r--;) i = t
							.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
						return t
					}(n, W(n, r)), n.precision = e, n.rounding = t, I(s > 2 ? r.neg() : r,
						e, t, !0)) : new n(NaN)
			}, S.squareRoot = S.sqrt = function() {
				var e, t, r, n, i, a, o = this,
					s = o.d,
					u = o.e,
					c = o.s,
					f = o.constructor;
				if (1 !== c || !s || !s[0]) return new f(!c || c < 0 && (!s || s[0]) ? NaN : s ?
					o : 1 / 0);
				for (m = !1, 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((t = A(s)).length + u) %
						2 == 0 && (t += "0"), c = Math.sqrt(t), u = v((u + 1) / 2) - (u < 0 ||
							u % 2), n = new f(t = c == 1 / 0 ? "5e" + u : (t = c
						.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : n = new f(c
						.toString()), r = (u = f.precision) + 3;;)
					if (n = (a = n).plus(T(o, a, r + 2, 1)).times(.5), A(a.d).slice(0, r) === (
							t = A(n.d)).slice(0, r)) {
						if ("9999" != (t = t.slice(r - 3, r + 1)) && (i || "4999" != t)) {
							+t && (+t.slice(1) || "5" != t.charAt(0)) || (I(n, u + 1, 1), e = !n
								.times(n).eq(o));
							break
						}
						if (!i && (I(a, u + 1, 0), a.times(a).eq(o))) {
							n = a;
							break
						}
						r += 4, i = 1
					} return m = !0, I(n, u, f.rounding, e)
			}, S.tangent = S.tan = function() {
				var e, t, r = this,
					n = r.constructor;
				return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding,
					n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = T(r,
						new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n
					.rounding = t, I(2 == s || 4 == s ? r.neg() : r, e, t, !0)) : new n(NaN)
			}, S.times = S.mul = function(e) {
				var t, r, n, i, a, o, s, u, c, f = this,
					l = f.constructor,
					p = f.d,
					h = (e = new l(e)).d;
				if (e.s *= f.s, !(p && p[0] && h && h[0])) return new l(!e.s || p && !p[0] && !
					h || h && !h[0] && !p ? NaN : p && h ? 0 * e.s : e.s / 0);
				for (r = v(f.e / 7) + v(e.e / 7), (u = p.length) < (c = h.length) && (a = p, p =
						h, h = a, o = u, u = c, c = o), a = [], n = o = u + c; n--;) a.push(0);
				for (n = c; --n >= 0;) {
					for (t = 0, i = u + n; i > n;) s = a[i] + h[n] * p[i - n - 1] + t, a[i--] =
						s % N | 0, t = s / N | 0;
					a[i] = (a[i] + t) % N | 0
				}
				for (; !a[--o];) a.pop();
				return t ? ++r : a.shift(), e.d = a, e.e = z(a, r), m ? I(e, l.precision, l
					.rounding) : e
			}, S.toBinary = function(e, t) {
				return Y(this, 2, e, t)
			}, S.toDecimalPlaces = S.toDP = function(e, t) {
				var r = this,
					n = r.constructor;
				return r = new n(r), void 0 === e ? r : (O(e, 0, 1e9), void 0 === t ? t = n
					.rounding : O(t, 0, 8), I(r, e + r.e + 1, t))
			}, S.toExponential = function(e, t) {
				var r, n = this,
					i = n.constructor;
				return void 0 === e ? r = k(n, !0) : (O(e, 0, 1e9), void 0 === t ? t = i
						.rounding : O(t, 0, 8), r = k(n = I(new i(n), e + 1, t), !0, e + 1)), n
					.isNeg() && !n.isZero() ? "-" + r : r
			}, S.toFixed = function(e, t) {
				var r, n, i = this,
					a = i.constructor;
				return void 0 === e ? r = k(i) : (O(e, 0, 1e9), void 0 === t ? t = a.rounding :
						O(t, 0, 8), r = k(n = I(new a(i), e + i.e + 1, t), !1, e + n.e + 1)), i
					.isNeg() && !i.isZero() ? "-" + r : r
			}, S.toFraction = function(e) {
				var t, r, n, i, a, o, s, u, c, f, l, p, d = this,
					v = d.d,
					g = d.constructor;
				if (!v) return new g(d);
				if (c = r = new g(1), n = u = new g(0), o = (a = (t = new g(n)).e = B(v) - d.e -
						1) % 7, t.d[0] = y(10, o < 0 ? 7 + o : o), null == e) e = a > 0 ? t : c;
				else {
					if (!(s = new g(e)).isInt() || s.lt(c)) throw Error(h + s);
					e = s.gt(t) ? a > 0 ? t : c : s
				}
				for (m = !1, s = new g(A(v)), f = g.precision, g.precision = a = 7 * v.length *
					2; l = T(s, t, 0, 1, 1), 1 != (i = r.plus(l.times(n))).cmp(e);) r = n, n =
					i, i = c, c = u.plus(l.times(i)), u = i, i = t, t = s.minus(l.times(i)), s =
					i;
				return i = T(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i
						.times(n)), u.s = c.s = d.s, p = T(c, n, a, 1).minus(d).abs().cmp(T(u,
						r, a, 1).minus(d).abs()) < 1 ? [c, n] : [u, r], g.precision = f, m = !0,
					p
			}, S.toHexadecimal = S.toHex = function(e, t) {
				return Y(this, 16, e, t)
			}, S.toNearest = function(e, t) {
				var r = this,
					n = r.constructor;
				if (r = new n(r), null == e) {
					if (!r.d) return r;
					e = new n(1), t = n.rounding
				} else {
					if (e = new n(e), void 0 === t ? t = n.rounding : O(t, 0, 8), !r.d) return e
						.s ? r : e;
					if (!e.d) return e.s && (e.s = r.s), e
				}
				return e.d[0] ? (m = !1, r = T(r, e, 0, t, 1).times(e), m = !0, I(r)) : (e.s = r
					.s, r = e), r
			}, S.toNumber = function() {
				return +this
			}, S.toOctal = function(e, t) {
				return Y(this, 8, e, t)
			}, S.toPower = S.pow = function(e) {
				var t, r, n, i, a, o, s = this,
					u = s.constructor,
					c = +(e = new u(e));
				if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(y(+s, c));
				if ((s = new u(s)).eq(1)) return s;
				if (n = u.precision, a = u.rounding, e.eq(1)) return I(s, n, a);
				if ((t = v(e.e / 7)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <=
					9007199254740991) return i = j(u, s, r, n), e.s < 0 ? new u(1).div(i) : I(i,
					n, a);
				if ((o = s.s) < 0) {
					if (t < e.d.length - 1) return new u(NaN);
					if (0 == (1 & e.d[t]) && (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d
						.length) return s.s = o, s
				}
				return (t = 0 != (r = y(+s, c)) && isFinite(r) ? new u(r + "").e : v(c * (Math
						.log("0." + A(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u
					.minE - 1 ? new u(t > 0 ? o / 0 : 0) : (m = !1, u.rounding = s.s = 1, r =
						Math.min(12, (t + "").length), (i = U(e.times(L(s, n + r)), n)).d && C((
							i = I(i, n + 5, 1)).d, n, a) && (t = n + 10, +A((i = I(U(e.times(L(
								s, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 ==
							1e14 && (i = I(i, n + 1, 0))), i.s = o, m = !0, u.rounding = a, I(i,
							n, a))
			}, S.toPrecision = function(e, t) {
				var r, n = this,
					i = n.constructor;
				return void 0 === e ? r = k(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (O(e,
						1, 1e9), void 0 === t ? t = i.rounding : O(t, 0, 8), r = k(n = I(
						new i(n), e, t), e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n
					.isZero() ? "-" + r : r
			}, S.toSignificantDigits = S.toSD = function(e, t) {
				var r = this.constructor;
				return void 0 === e ? (e = r.precision, t = r.rounding) : (O(e, 1, 1e9),
					void 0 === t ? t = r.rounding : O(t, 0, 8)), I(new r(this), e, t)
			}, S.toString = function() {
				var e = this,
					t = e.constructor,
					r = k(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
				return e.isNeg() && !e.isZero() ? "-" + r : r
			}, S.truncated = S.trunc = function() {
				return I(new this.constructor(this), this.e + 1, 1)
			}, S.valueOf = S.toJSON = function() {
				var e = this,
					t = e.constructor,
					r = k(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
				return e.isNeg() ? "-" + r : r
			};
			var T = function() {
				function e(e, t, r) {
					var n, i = 0,
						a = e.length;
					for (e = e.slice(); a--;) n = e[a] * t + i, e[a] = n % r | 0, i = n / r | 0;
					return i && e.unshift(i), e
				}

				function t(e, t, r, n) {
					var i, a;
					if (r != n) a = r > n ? 1 : -1;
					else
						for (i = a = 0; i < r; i++)
							if (e[i] != t[i]) {
								a = e[i] > t[i] ? 1 : -1;
								break
							} return a
				}

				function r(e, t, r, n) {
					for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[
						r] - t[r];
					for (; !e[0] && e.length > 1;) e.shift()
				}
				return function(n, i, a, s, u, c) {
					var f, l, p, m, h, d, y, g, x, b, w, M, E, S, A, O, C, _, T, k, z = n
						.constructor,
						R = n.s == i.s ? 1 : -1,
						q = n.d,
						B = i.d;
					if (!(q && q[0] && B && B[0])) return new z(n.s && i.s && (q ? !B || q[
							0] != B[0] : B) ? q && 0 == q[0] || !B ? 0 * R : R / 0 :
						NaN);
					for (c ? (h = 1, l = n.e - i.e) : (c = N, h = 7, l = v(n.e / h) - v(i
							.e / h)), T = B.length, C = q.length, b = (x = new z(R)).d = [],
						p = 0; B[p] == (q[p] || 0); p++);
					if (B[p] > (q[p] || 0) && l--, null == a ? (S = a = z.precision, s = z
							.rounding) : S = u ? a + (n.e - i.e) + 1 : a, S < 0) b.push(1),
						d = !0;
					else {
						if (S = S / h + 2 | 0, p = 0, 1 == T) {
							for (m = 0, B = B[0], S++;
								(p < C || m) && S--; p++) A = m * c + (q[p] || 0), b[p] =
								A / B | 0, m = A % B | 0;
							d = m || p < C
						} else {
							for ((m = c / (B[0] + 1) | 0) > 1 && (B = e(B, m, c), q = e(q,
									m, c), T = B.length, C = q.length), O = T, M = (w = q
									.slice(0, T)).length; M < T;) w[M++] = 0;
							(k = B.slice()).unshift(0), _ = B[0], B[1] >= c / 2 && ++_;
							do {
								m = 0, (f = t(B, w, T, M)) < 0 ? (E = w[0], T != M && (E =
											E * c + (w[1] || 0)), (m = E / _ | 0) > 1 ? (
											m >= c && (m = c - 1), 1 == (f = t(y = e(B, m,
												c), w, g = y.length, M = w.length)) && (m--,
												r(y, T < g ? k : B, g, c))) : (0 == m && (
											f = m = 1), y = B.slice()), (g = y.length) <
										M && y.unshift(0), r(w, y, M, c), -1 == f && (f = t(
											B, w, T, M = w.length)) < 1 && (m++, r(w, T <
											M ? k : B, M, c)), M = w.length) : 0 === f && (
										m++, w = [0]), b[p++] = m, f && w[0] ? w[M++] = q[
									O] || 0 : (w = [q[O]], M = 1)
							} while ((O++ < C || void 0 !== w[0]) && S--);
							d = void 0 !== w[0]
						}
						b[0] || b.shift()
					}
					if (1 == h) x.e = l, o = d;
					else {
						for (p = 1, m = b[0]; m >= 10; m /= 10) p++;
						x.e = p + l * h - 1, I(x, u ? a + x.e + 1 : a, s, d)
					}
					return x
				}
			}();

			function I(e, t, r, n) {
				var i, a, o, s, u, c, f, l, p, h = e.constructor;
				e: if (null != t) {
					if (!(l = e.d)) return e;
					for (i = 1, s = l[0]; s >= 10; s /= 10) i++;
					if ((a = t - i) < 0) a += 7, o = t, u = (f = l[p = 0]) / y(10, i - o - 1) %
						10 | 0;
					else if ((p = Math.ceil((a + 1) / 7)) >= (s = l.length)) {
						if (!n) break e;
						for (; s++ <= p;) l.push(0);
						f = u = 0, i = 1, o = (a %= 7) - 7 + 1
					} else {
						for (f = s = l[p], i = 1; s >= 10; s /= 10) i++;
						u = (o = (a %= 7) - 7 + i) < 0 ? 0 : f / y(10, i - o - 1) % 10 | 0
					}
					if (n = n || t < 0 || void 0 !== l[p + 1] || (o < 0 ? f : f % y(10, i - o -
							1)), c = r < 4 ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) :
						u > 5 || 5 == u && (4 == r || n || 6 == r && (a > 0 ? o > 0 ? f / y(10,
							i - o) : 0 : l[p - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 ||
						!l[0]) return l.length = 0, c ? (t -= e.e + 1, l[0] = y(10, (7 - t %
						7) % 7), e.e = -t || 0) : l[0] = e.e = 0, e;
					if (0 == a ? (l.length = p, s = 1, p--) : (l.length = p + 1, s = y(10, 7 -
							a), l[p] = o > 0 ? (f / y(10, i - o) % y(10, o) | 0) * s : 0), c)
						for (;;) {
							if (0 == p) {
								for (a = 1, o = l[0]; o >= 10; o /= 10) a++;
								for (o = l[0] += s, s = 1; o >= 10; o /= 10) s++;
								a != s && (e.e++, l[0] == N && (l[0] = 1));
								break
							}
							if (l[p] += s, l[p] != N) break;
							l[p--] = 0, s = 1
						}
					for (a = l.length; 0 === l[--a];) l.pop()
				}
				return m && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e
					.d = [0])), e
			}

			function k(e, t, r) {
				if (!e.isFinite()) return $(e);
				var n, i = e.e,
					a = A(e.d),
					o = a.length;
				return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + D(n) : o >
					1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") +
					e.e) : i < 0 ? (a = "0." + D(-i - 1) + a, r && (n = r - o) > 0 && (a += D(
					n))) : i >= o ? (a += D(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a +
					"." + D(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
					r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += D(n))), a
			}

			function z(e, t) {
				var r = e[0];
				for (t *= 7; r >= 10; r /= 10) t++;
				return t
			}

			function R(e, t, r) {
				if (t > M) throw m = !0, r && (e.precision = r), Error(
					"[DecimalError] Precision limit exceeded");
				return I(new e(f), t, 1, !0)
			}

			function q(e, t, r) {
				if (t > E) throw Error("[DecimalError] Precision limit exceeded");
				return I(new e(l), t, r, !0)
			}

			function B(e) {
				var t = e.length - 1,
					r = 7 * t + 1;
				if (t = e[t]) {
					for (; t % 10 == 0; t /= 10) r--;
					for (t = e[0]; t >= 10; t /= 10) r++
				}
				return r
			}

			function D(e) {
				for (var t = ""; e--;) t += "0";
				return t
			}

			function j(e, t, r, n) {
				var i, a = new e(1),
					o = Math.ceil(n / 7 + 4);
				for (m = !1;;) {
					if (r % 2 && J((a = a.times(t)).d, o) && (i = !0), 0 === (r = v(r / 2))) {
						r = a.d.length - 1, i && 0 === a.d[r] && ++a.d[r];
						break
					}
					J((t = t.times(t)).d, o)
				}
				return m = !0, a
			}

			function P(e) {
				return 1 & e.d[e.d.length - 1]
			}

			function F(e, t, r) {
				for (var n, i = new e(t[0]), a = 0; ++a < t.length;) {
					if (!(n = new e(t[a])).s) {
						i = n;
						break
					}
					i[r](n) && (i = n)
				}
				return i
			}

			function U(e, t) {
				var r, n, i, a, o, s, u, c = 0,
					f = 0,
					l = 0,
					p = e.constructor,
					h = p.rounding,
					d = p.precision;
				if (!e.d || !e.d[0] || e.e > 17) return new p(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 :
					1 : e.s ? e.s < 0 ? 0 : e : NaN);
				for (null == t ? (m = !1, u = d) : u = t, s = new p(.03125); e.e > -2;) e = e.times(
					s), l += 5;
				for (u += n = Math.log(y(2, l)) / Math.LN10 * 2 + 5 | 0, r = a = o = new p(1), p
					.precision = u;;) {
					if (a = I(a.times(e), u, 1), r = r.times(++f), A((s = o.plus(T(a, r, u, 1))).d)
						.slice(0, u) === A(o.d).slice(0, u)) {
						for (i = l; i--;) o = I(o.times(o), u, 1);
						if (null != t) return p.precision = d, o;
						if (!(c < 3 && C(o.d, u - n, h, c))) return I(o, p.precision = d, h, m = !
						0);
						p.precision = u += 10, r = a = s = new p(1), f = 0, c++
					}
					o = s
				}
			}

			function L(e, t) {
				var r, n, i, a, o, s, u, c, f, l, p, h = 1,
					d = e,
					v = d.d,
					y = d.constructor,
					g = y.rounding,
					x = y.precision;
				if (d.s < 0 || !v || !v[0] || !d.e && 1 == v[0] && 1 == v.length) return new y(v &&
					!v[0] ? -1 / 0 : 1 != d.s ? NaN : v ? 0 : d);
				if (null == t ? (m = !1, f = x) : f = t, y.precision = f += 10, n = (r = A(v))
					.charAt(0), !(Math.abs(a = d.e) < 15e14)) return c = R(y, f + 2, x).times(a +
						""), d = L(new y(n + "." + r.slice(1)), f - 10).plus(c), y.precision =
					x, null == t ? I(d, x, g, m = !0) : d;
				for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;) n = (r = A((d = d.times(e))
					.d)).charAt(0), h++;
				for (a = d.e, n > 1 ? (d = new y("0." + r), a++) : d = new y(n + "." + r.slice(1)),
					l = d, u = o = d = T(d.minus(1), d.plus(1), f, 1), p = I(d.times(d), f, 1), i =
					3;;) {
					if (o = I(o.times(p), f, 1), A((c = u.plus(T(o, new y(i), f, 1))).d).slice(0,
						f) === A(u.d).slice(0, f)) {
						if (u = u.times(2), 0 !== a && (u = u.plus(R(y, f + 2, x).times(a + ""))),
							u = T(u, new y(h), f, 1), null != t) return y.precision = x, u;
						if (!C(u.d, f - 10, g, s)) return I(u, y.precision = x, g, m = !0);
						y.precision = f += 10, c = o = d = T(l.minus(1), l.plus(1), f, 1), p = I(d
							.times(d), f, 1), i = s = 1
					}
					u = c, i += 2
				}
			}

			function $(e) {
				return String(e.s * e.s / 0)
			}

			function H(e, t) {
				var r, n, i;
				for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) >
					0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (
						r = t.length), n = 0; 48 === t.charCodeAt(n); n++);
				for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
				if (t = t.slice(n, i)) {
					if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % 7, r < 0 && (n += 7),
						n < i) {
						for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i;) e.d.push(+t.slice(n,
							n += 7));
						n = 7 - (t = t.slice(n)).length
					} else n -= i;
					for (; n--;) t += "0";
					e.d.push(+t), m && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e
						.constructor.minE && (e.e = 0, e.d = [0]))
				} else e.e = 0, e.d = [0];
				return e
			}

			function G(e, t) {
				var r, n, i, o, s, u, c, f, l;
				if (t.indexOf("_") > -1) {
					if (t = t.replace(/(\d)_(?=\d)/g, "$1"), w.test(t)) return H(e, t)
				} else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e
					.d = null, e;
				if (x.test(t)) r = 16, t = t.toLowerCase();
				else if (g.test(t)) r = 2;
				else {
					if (!b.test(t)) throw Error(h + t);
					r = 8
				}
				for ((o = t.search(/p/i)) > 0 ? (c = +t.slice(o + 1), t = t.substring(2, o)) : t = t
					.slice(2), s = (o = t.indexOf(".")) >= 0, n = e.constructor, s && (o = (u = (t =
						t.replace(".", "")).length) - o, i = j(n, new n(r), o, 2 * o)), o = l = (f =
						_(t, r, N)).length - 1; 0 === f[o]; --o) f.pop();
				return o < 0 ? new n(0 * e.s) : (e.e = z(f, l), e.d = f, m = !1, s && (e = T(e, i,
						4 * u)), c && (e = e.times(Math.abs(c) < 54 ? y(2, c) : a.pow(2, c))),
					m = !0, e)
			}

			function V(e, t, r, n, i) {
				var a, o, s, u, c = e.precision,
					f = Math.ceil(c / 7);
				for (m = !1, u = r.times(r), s = new e(n);;) {
					if (o = T(s.times(u), new e(t++ * t++), c, 1), s = i ? n.plus(o) : n.minus(o),
						n = T(o.times(u), new e(t++ * t++), c, 1), void 0 !== (o = s.plus(n)).d[f]
						) {
						for (a = f; o.d[a] === s.d[a] && a--;);
						if (-1 == a) break
					}
					a = s, s = n, n = o, o = a
				}
				return m = !0, o.d.length = f + 1, o
			}

			function Z(e, t) {
				for (var r = e; --t;) r *= e;
				return r
			}

			function W(e, t) {
				var r, n = t.s < 0,
					i = q(e, e.precision, 1),
					a = i.times(.5);
				if ((t = t.abs()).lte(a)) return s = n ? 4 : 1, t;
				if ((r = t.divToInt(i)).isZero()) s = n ? 3 : 2;
				else {
					if ((t = t.minus(r.times(i))).lte(a)) return s = P(r) ? n ? 2 : 3 : n ? 4 : 1,
					t;
					s = P(r) ? n ? 1 : 4 : n ? 3 : 2
				}
				return t.minus(i).abs()
			}

			function Y(e, t, r, n) {
				var i, a, s, u, f, l, p, m, h, d = e.constructor,
					v = void 0 !== r;
				if (v ? (O(r, 1, 1e9), void 0 === n ? n = d.rounding : O(n, 0, 8)) : (r = d
						.precision, n = d.rounding), e.isFinite()) {
					for (v ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, (
							s = (p = k(e)).indexOf(".")) >= 0 && (p = p.replace(".", ""), (h =
							new d(1)).e = p.length - s, h.d = _(k(h), 10, i), h.e = h.d.length), a =
						f = (m = _(p, 10, i)).length; 0 == m[--f];) m.pop();
					if (m[0]) {
						if (s < 0 ? a-- : ((e = new d(e)).d = m, e.e = a, m = (e = T(e, h, r, n, 0,
								i)).d, a = e.e, l = o), s = m[r], u = i / 2, l = l || void 0 !== m[
								r + 1], l = n < 4 ? (void 0 !== s || l) && (0 === n || n === (e.s <
								0 ? 3 : 2)) : s > u || s === u && (4 === n || l || 6 === n && 1 & m[
								r - 1] || n === (e.s < 0 ? 8 : 7)), m.length = r, l)
							for (; ++m[--r] > i - 1;) m[r] = 0, r || (++a, m.unshift(1));
						for (f = m.length; !m[f - 1]; --f);
						for (s = 0, p = ""; s < f; s++) p += c.charAt(m[s]);
						if (v) {
							if (f > 1)
								if (16 == t || 8 == t) {
									for (s = 16 == t ? 4 : 3, --f; f % s; f++) p += "0";
									for (f = (m = _(p, i, t)).length; !m[f - 1]; --f);
									for (s = 1, p = "1."; s < f; s++) p += c.charAt(m[s])
								} else p = p.charAt(0) + "." + p.slice(1);
							p = p + (a < 0 ? "p" : "p+") + a
						} else if (a < 0) {
							for (; ++a;) p = "0" + p;
							p = "0." + p
						} else if (++a > f)
							for (a -= f; a--;) p += "0";
						else a < f && (p = p.slice(0, a) + "." + p.slice(a))
					} else p = v ? "0p+0" : "0";
					p = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + p
				} else p = $(e);
				return e.s < 0 ? "-" + p : p
			}

			function J(e, t) {
				if (e.length > t) return e.length = t, !0
			}

			function X(e) {
				return new this(e).abs()
			}

			function Q(e) {
				return new this(e).acos()
			}

			function K(e) {
				return new this(e).acosh()
			}

			function ee(e, t) {
				return new this(e).plus(t)
			}

			function te(e) {
				return new this(e).asin()
			}

			function re(e) {
				return new this(e).asinh()
			}

			function ne(e) {
				return new this(e).atan()
			}

			function ie(e) {
				return new this(e).atanh()
			}

			function ae(e, t) {
				e = new this(e), t = new this(t);
				var r, n = this.precision,
					i = this.rounding,
					a = n + 4;
				return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = t.s < 0 ? q(this, n, i) :
						new this(0)).s = e.s : !e.d || t.isZero() ? (r = q(this, a, 1).times(.5))
					.s = e.s : t.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(T(e,
							t, a, 1)), t = q(this, a, 1), this.precision = n, this.rounding = i, r =
						e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(T(e, t, a, 1)) : (r = q(
						this, a, 1).times(t.s > 0 ? .25 : .75)).s = e.s : r = new this(NaN), r
			}

			function oe(e) {
				return new this(e).cbrt()
			}

			function se(e) {
				return I(e = new this(e), e.e + 1, 2)
			}

			function ue(e, t, r) {
				return new this(e).clamp(t, r)
			}

			function ce(e) {
				if (!e || "object" != typeof e) throw Error("[DecimalError] Object expected");
				var t, r, n, i = !0 === e.defaults,
					a = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -u, 0, "toExpPos", 0, u,
						"maxE", 0, u, "minE", -u, 0, "modulo", 0, 9
					];
				for (t = 0; t < a.length; t += 3)
					if (r = a[t], i && (this[r] = p[r]), void 0 !== (n = e[r])) {
						if (!(v(n) === n && n >= a[t + 1] && n <= a[t + 2])) throw Error(h + r +
							": " + n);
						this[r] = n
					} if (r = "crypto", i && (this[r] = p[r]), void 0 !== (n = e[r])) {
					if (!0 !== n && !1 !== n && 0 !== n && 1 !== n) throw Error(h + r + ": " + n);
					if (n) {
						if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !
							crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
						this[r] = !0
					} else this[r] = !1
				}
				return this
			}

			function fe(e) {
				return new this(e).cos()
			}

			function le(e) {
				return new this(e).cosh()
			}

			function pe(e, t) {
				return new this(e).div(t)
			}

			function me(e) {
				return new this(e).exp()
			}

			function he(e) {
				return I(e = new this(e), e.e + 1, 3)
			}

			function de() {
				var e, t, r = new this(0);
				for (m = !1, e = 0; e < arguments.length;)
					if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
					else {
						if (t.s) return m = !0, new this(1 / 0);
						r = t
					} return m = !0, r.sqrt()
			}

			function ve(e) {
				return e instanceof a || e && e.toStringTag === d || !1
			}

			function ye(e) {
				return new this(e).ln()
			}

			function ge(e, t) {
				return new this(e).log(t)
			}

			function xe(e) {
				return new this(e).log(2)
			}

			function be(e) {
				return new this(e).log(10)
			}

			function we() {
				return F(this, arguments, "lt")
			}

			function Ne() {
				return F(this, arguments, "gt")
			}

			function Me(e, t) {
				return new this(e).mod(t)
			}

			function Ee(e, t) {
				return new this(e).mul(t)
			}

			function Se(e, t) {
				return new this(e).pow(t)
			}

			function Ae(e) {
				var t, r, n, i, a = 0,
					o = new this(1),
					s = [];
				if (void 0 === e ? e = this.precision : O(e, 1, 1e9), n = Math.ceil(e / 7), this
					.crypto)
					if (crypto.getRandomValues)
						for (t = crypto.getRandomValues(new Uint32Array(n)); a < n;)(i = t[a]) >=
							429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] =
							i % 1e7;
					else {
						if (!crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
						for (t = crypto.randomBytes(n *= 4); a < n;)(i = t[a] + (t[a + 1] << 8) + (
								t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7 ? crypto
							.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
						a = n / 4
					}
				else
					for (; a < n;) s[a++] = 1e7 * Math.random() | 0;
				for (e %= 7, (n = s[--a]) && e && (i = y(10, 7 - e), s[a] = (n / i | 0) * i); 0 ===
					s[a]; a--) s.pop();
				if (a < 0) r = 0, s = [0];
				else {
					for (r = -1; 0 === s[0]; r -= 7) s.shift();
					for (n = 1, i = s[0]; i >= 10; i /= 10) n++;
					n < 7 && (r -= 7 - n)
				}
				return o.e = r, o.d = s, o
			}

			function Oe(e) {
				return I(e = new this(e), e.e + 1, this.rounding)
			}

			function Ce(e) {
				return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
			}

			function _e(e) {
				return new this(e).sin()
			}

			function Te(e) {
				return new this(e).sinh()
			}

			function Ie(e) {
				return new this(e).sqrt()
			}

			function ke(e, t) {
				return new this(e).sub(t)
			}

			function ze() {
				var e = 0,
					t = arguments,
					r = new this(t[e]);
				for (m = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
				return m = !0, I(r, this.precision, this.rounding)
			}

			function Re(e) {
				return new this(e).tan()
			}

			function qe(e) {
				return new this(e).tanh()
			}

			function Be(e) {
				return I(e = new this(e), e.e + 1, 1)
			}(a = function e(t) {
				var r, n, i;

				function a(e) {
					var t, r, n, i = this;
					if (!(i instanceof a)) return new a(e);
					if (i.constructor = a, ve(e)) return i.s = e.s, void(m ? !e.d || e.e > a
						.maxE ? (i.e = NaN, i.d = null) : e.e < a.minE ? (i.e = 0, i
							.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i
							.d = e.d ? e.d.slice() : e.d));
					if ("number" === (n = typeof e)) {
						if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
						if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
							for (t = 0, r = e; r >= 10; r /= 10) t++;
							return void(m ? t > a.maxE ? (i.e = NaN, i.d = null) : t < a.minE ?
								(i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i
									.d = [e]))
						}
						return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : H(
							i, e.toString())
					}
					if ("string" !== n) throw Error(h + e);
					return 45 === (r = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 ===
						r && (e = e.slice(1)), i.s = 1), w.test(e) ? H(i, e) : G(i, e)
				}
				if (a.prototype = S, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a
					.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a
					.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a
					.EUCLID = 9, a.config = a.set = ce, a.clone = e, a.isDecimal = ve, a.abs =
					X, a.acos = Q, a.acosh = K, a.add = ee, a.asin = te, a.asinh = re, a.atan =
					ne, a.atanh = ie, a.atan2 = ae, a.cbrt = oe, a.ceil = se, a.clamp = ue, a
					.cos = fe, a.cosh = le, a.div = pe, a.exp = me, a.floor = he, a.hypot = de,
					a.ln = ye, a.log = ge, a.log10 = be, a.log2 = xe, a.max = we, a.min = Ne, a
					.mod = Me, a.mul = Ee, a.pow = Se, a.random = Ae, a.round = Oe, a.sign = Ce,
					a.sin = _e, a.sinh = Te, a.sqrt = Ie, a.sub = ke, a.sum = ze, a.tan = Re, a
					.tanh = qe, a.trunc = Be, void 0 === t && (t = {}), t && !0 !== t.defaults)
					for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE",
							"modulo", "crypto"
						], r = 0; r < i.length;) t.hasOwnProperty(n = i[r++]) || (t[n] = this[
						n]);
				return a.config(t), a
			}(p)).prototype.constructor = a, a.default = a.Decimal = a, f = new a(f), l = new a(l),
				void 0 === (n = function() {
					return a
				}.call(t, r, t, e)) || (e.exports = n)
		}()
	}, function(e, t, r) {
		var n;
		/**
		 * @license Fraction.js v4.1.3 23/05/2021
		 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
		 *
		 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 **/
		! function(r) {
			"use strict";
			var i = {
				s: 1,
				n: 0,
				d: 1
			};

			function a(e) {
				function t() {
					var t = Error.apply(this, arguments);
					t.name = this.name = e, this.stack = t.stack, this.message = t.message
				}

				function r() {}
				return r.prototype = Error.prototype, t.prototype = new r, t
			}
			var o = m.DivisionByZero = a("DivisionByZero"),
				s = m.InvalidParameter = a("InvalidParameter");

			function u(e, t) {
				return isNaN(e = parseInt(e, 10)) && c(), e * t
			}

			function c() {
				throw new s
			}

			function f(e) {
				for (var t = {}, r = e, n = 2, i = 4; i <= r;) {
					for (; r % n == 0;) r /= n, t[n] = (t[n] || 0) + 1;
					i += 1 + 2 * n++
				}
				return r !== e ? r > 1 && (t[r] = (t[r] || 0) + 1) : t[e] = (t[e] || 0) + 1, t
			}
			var l = function(e, t) {
				var r, n = 0,
					a = 1,
					s = 1,
					f = 0,
					l = 0,
					p = 0,
					m = 1,
					h = 1,
					d = 0,
					v = 1,
					y = 1,
					g = 1,
					x = 1e7;
				if (null == e);
				else if (void 0 !== t) s = (n = e) * (a = t);
				else switch (typeof e) {
					case "object":
						"d" in e && "n" in e ? (n = e.n, a = e.d, "s" in e && (n *= e.s)) :
							0 in e ? (n = e[0], 1 in e && (a = e[1])) : c(), s = n * a;
						break;
					case "number":
						if (e < 0 && (s = e, e = -e), e % 1 == 0) n = e;
						else if (e > 0) {
							for (e >= 1 && (e /= h = Math.pow(10, Math.floor(1 + Math.log(
									e) / Math.LN10))); v <= x && g <= x;) {
								if (e === (r = (d + y) / (v + g))) {
									v + g <= x ? (n = d + y, a = v + g) : g > v ? (n = y,
										a = g) : (n = d, a = v);
									break
								}
								e > r ? (d += y, v += g) : (y += d, g += v), v > x ? (n = y,
									a = g) : (n = d, a = v)
							}
							n *= h
						} else(isNaN(e) || isNaN(t)) && (a = n = NaN);
						break;
					case "string":
						if (null === (v = e.match(/\d+|./g)) && c(), "-" === v[d] ? (s = -1,
								d++) : "+" === v[d] && d++, v.length === d + 1 ? l = u(v[
								d++], s) : "." === v[d + 1] || "." === v[d] ? ("." !== v[
								d] && (f = u(v[d++], s)), (++d + 1 === v.length || "(" ===
									v[d + 1] && ")" === v[d + 3] || "'" === v[d + 1] &&
									"'" === v[d + 3]) && (l = u(v[d], s), m = Math.pow(10,
									v[d].length), d++), ("(" === v[d] && ")" === v[d + 2] ||
									"'" === v[d] && "'" === v[d + 2]) && (p = u(v[d + 1],
									s), h = Math.pow(10, v[d + 1].length) - 1, d += 3)) :
							"/" === v[d + 1] || ":" === v[d + 1] ? (l = u(v[d], s), m = u(v[
								d + 2], 1), d += 3) : "/" === v[d + 3] && " " === v[d +
							1] && (f = u(v[d], s), l = u(v[d + 2], s), m = u(v[d + 4], 1),
								d += 5), v.length <= d) {
							s = n = p + (a = m * h) * f + h * l;
							break
						}
						default:
							c()
				}
				if (0 === a) throw new o;
				i.s = s < 0 ? -1 : 1, i.n = Math.abs(n), i.d = Math.abs(a)
			};

			function p(e, t) {
				if (!e) return t;
				if (!t) return e;
				for (;;) {
					if (!(e %= t)) return t;
					if (!(t %= e)) return e
				}
			}

			function m(e, t) {
				if (!(this instanceof m)) return new m(e, t);
				l(e, t), e = p(i.d, i.n), this.s = i.s, this.n = i.n / e, this.d = i.d / e
			}
			m.prototype = {
				s: 1,
				n: 0,
				d: 1,
				abs: function() {
					return new m(this.n, this.d)
				},
				neg: function() {
					return new m(-this.s * this.n, this.d)
				},
				add: function(e, t) {
					return l(e, t), new m(this.s * this.n * i.d + i.s * this.d * i.n, this
						.d * i.d)
				},
				sub: function(e, t) {
					return l(e, t), new m(this.s * this.n * i.d - i.s * this.d * i.n, this
						.d * i.d)
				},
				mul: function(e, t) {
					return l(e, t), new m(this.s * i.s * this.n * i.n, this.d * i.d)
				},
				div: function(e, t) {
					return l(e, t), new m(this.s * i.s * this.n * i.d, this.d * i.n)
				},
				clone: function() {
					return new m(this)
				},
				mod: function(e, t) {
					return isNaN(this.n) || isNaN(this.d) ? new m(NaN) : void 0 === e ?
						new m(this.s * this.n % this.d, 1) : (l(e, t), 0 === i.n && 0 ===
							this.d && m(0, 0), new m(this.s * (i.d * this.n) % (i.n * this
								.d), i.d * this.d))
				},
				gcd: function(e, t) {
					return l(e, t), new m(p(i.n, this.n) * p(i.d, this.d), i.d * this.d)
				},
				lcm: function(e, t) {
					return l(e, t), 0 === i.n && 0 === this.n ? new m : new m(i.n * this.n,
						p(i.n, this.n) * p(i.d, this.d))
				},
				ceil: function(e) {
					return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new m(
						NaN) : new m(Math.ceil(e * this.s * this.n / this.d), e)
				},
				floor: function(e) {
					return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new m(
						NaN) : new m(Math.floor(e * this.s * this.n / this.d), e)
				},
				round: function(e) {
					return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new m(
						NaN) : new m(Math.round(e * this.s * this.n / this.d), e)
				},
				inverse: function() {
					return new m(this.s * this.d, this.n)
				},
				pow: function(e, t) {
					if (l(e, t), 1 === i.d) return i.s < 0 ? new m(Math.pow(this.s * this.d,
						i.n), Math.pow(this.n, i.n)) : new m(Math.pow(this.s * this
						.n, i.n), Math.pow(this.d, i.n));
					if (this.s < 0) return null;
					var r = f(this.n),
						n = f(this.d),
						a = 1,
						o = 1;
					for (var s in r)
						if ("1" !== s) {
							if ("0" === s) {
								a = 0;
								break
							}
							if (r[s] *= i.n, r[s] % i.d != 0) return null;
							r[s] /= i.d, a *= Math.pow(s, r[s])
						} for (var s in n)
						if ("1" !== s) {
							if (n[s] *= i.n, n[s] % i.d != 0) return null;
							n[s] /= i.d, o *= Math.pow(s, n[s])
						} return i.s < 0 ? new m(o, a) : new m(a, o)
				},
				equals: function(e, t) {
					return l(e, t), this.s * this.n * i.d == i.s * i.n * this.d
				},
				compare: function(e, t) {
					l(e, t);
					var r = this.s * this.n * i.d - i.s * i.n * this.d;
					return (0 < r) - (r < 0)
				},
				simplify: function(e) {
					if (isNaN(this.n) || isNaN(this.d)) return this;
					var t = this.abs().toContinued();

					function r(e) {
						return 1 === e.length ? new m(e[0]) : r(e.slice(1)).inverse().add(e[
							0])
					}
					e = e || .001;
					for (var n = 0; n < t.length; n++) {
						var i = r(t.slice(0, n + 1));
						if (i.sub(this.abs()).abs().valueOf() < e) return i.mul(this.s)
					}
					return this
				},
				divisible: function(e, t) {
					return l(e, t), !(!(i.n * this.d) || this.n * i.d % (i.n * this.d))
				},
				valueOf: function() {
					return this.s * this.n / this.d
				},
				toFraction: function(e) {
					var t, r = "",
						n = this.n,
						i = this.d;
					return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math
							.floor(n / i)) > 0 && (r += t, r += " ", n %= i), r += n,
						r += "/", r += i), r
				},
				toLatex: function(e) {
					var t, r = "",
						n = this.n,
						i = this.d;
					return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math
							.floor(n / i)) > 0 && (r += t, n %= i), r += "\\frac{", r +=
						n, r += "}{", r += i, r += "}"), r
				},
				toContinued: function() {
					var e, t = this.n,
						r = this.d,
						n = [];
					if (isNaN(t) || isNaN(r)) return n;
					do {
						n.push(Math.floor(t / r)), e = t % r, t = r, r = e
					} while (1 !== t);
					return n
				},
				toString: function(e) {
					var t = this.n,
						r = this.d;
					if (isNaN(t) || isNaN(r)) return "NaN";
					e = e || 15;
					var n = function(e, t) {
							for (; t % 2 == 0; t /= 2);
							for (; t % 5 == 0; t /= 5);
							if (1 === t) return 0;
							for (var r = 10 % t, n = 1; 1 !== r; n++)
								if (r = 10 * r % t, n > 2e3) return 0;
							return n
						}(0, r),
						i = function(e, t, r) {
							for (var n = 1, i = function(e, t, r) {
									for (var n = 1; t > 0; e = e * e % r, t >>= 1) 1 &
										t && (n = n * e % r);
									return n
								}(10, r, t), a = 0; a < 300; a++) {
								if (n === i) return a;
								n = 10 * n % t, i = 10 * i % t
							}
							return 0
						}(0, r, n),
						a = -1 === this.s ? "-" : "";
					if (a += t / r | 0, t %= r, (t *= 10) && (a += "."), n) {
						for (var o = i; o--;) a += t / r | 0, t %= r, t *= 10;
						a += "(";
						for (o = n; o--;) a += t / r | 0, t %= r, t *= 10;
						a += ")"
					} else
						for (o = e; t && o--;) a += t / r | 0, t %= r, t *= 10;
					return a
				}
			}, void 0 === (n = function() {
				return m
			}.apply(t, [])) || (e.exports = n)
		}()
	}, function(e, t) {
		e.exports = function e(t, r) {
			"use strict";
			var n, i, a =
				/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
				o = /(^[ ]*|[ ]*$)/g,
				s =
				/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
				u = /^0x[0-9a-f]+$/i,
				c = /^0/,
				f = function(t) {
					return e.insensitive && ("" + t).toLowerCase() || "" + t
				},
				l = f(t).replace(o, "") || "",
				p = f(r).replace(o, "") || "",
				m = l.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
				h = p.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
				d = parseInt(l.match(u), 16) || 1 !== m.length && l.match(s) && Date.parse(l),
				v = parseInt(p.match(u), 16) || d && p.match(s) && Date.parse(p) || null;
			if (v) {
				if (d < v) return -1;
				if (d > v) return 1
			}
			for (var y = 0, g = Math.max(m.length, h.length); y < g; y++) {
				if (n = !(m[y] || "").match(c) && parseFloat(m[y]) || m[y] || 0, i = !(h[y] ||
						"").match(c) && parseFloat(h[y]) || h[y] || 0, isNaN(n) !== isNaN(i))
					return isNaN(n) ? 1 : -1;
				if (typeof n != typeof i && (n += "", i += ""), n < i) return -1;
				if (n > i) return 1
			}
			return 0
		}
	}, function(e, t, r) {
		var n = r(66);
		e.exports = function(e, t) {
			var r = e[t];
			return null == r ? void 0 : n(r)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(14),
			a = r(89),
			o = n.TypeError;
		e.exports = function(e) {
			if (i(e)) return e;
			throw o(a(e) + " is not a function")
		}
	}, function(e, t) {
		e.exports = !1
	}, function(e, t, r) {
		var n = r(142),
			i = r(108).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) {
			return n(e, i)
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(66),
			a = r(86),
			o = n(n.bind);
		e.exports = function(e, t) {
			return i(e), void 0 === t ? e : a ? o(e, t) : function() {
				return e.apply(t, arguments)
			}
		}
	}, function(e, t, r) {
		var n, i = r(20),
			a = r(152),
			o = r(108),
			s = r(77),
			u = r(153),
			c = r(92),
			f = r(94),
			l = f("IE_PROTO"),
			p = function() {},
			m = function(e) {
				return "<script>" + e + "<\/script>"
			},
			h = function(e) {
				e.write(m("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			d = function() {
				try {
					n = new ActiveXObject("htmlfile")
				} catch (e) {}
				var e, t;
				d = "undefined" != typeof document ? document.domain && n ? h(n) : ((t = c(
					"iframe")).style.display = "none", u.appendChild(t), t.src = String(
					"javascript:"), (e = t.contentWindow.document).open(), e.write(m(
					"document.F=Object")), e.close(), e.F) : h(n);
				for (var r = o.length; r--;) delete d.prototype[o[r]];
				return d()
			};
		s[l] = !0, e.exports = Object.create || function(e, t) {
			var r;
			return null !== e ? (p.prototype = i(e), r = new p, p.prototype = null, r[l] = e) :
				r = d(), void 0 === t ? r : a.f(r, t)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(87),
			i = r(19),
			a = r(75);
		e.exports = function(e, t, r) {
			var o = n(t);
			o in e ? i.f(e, o, a(0, r)) : e[o] = r
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(83),
			i = r(22),
			a = r(9),
			o = r(119),
			s = r(8),
			u = r(20),
			c = r(14),
			f = r(60),
			l = r(95),
			p = r(34),
			m = r(47),
			h = r(120),
			d = r(65),
			v = r(207),
			y = r(122),
			g = r(15)("replace"),
			x = Math.max,
			b = Math.min,
			w = a([].concat),
			N = a([].push),
			M = a("".indexOf),
			E = a("".slice),
			S = "$0" === "a".replace(/./, "$0"),
			A = !!/./ [g] && "" === /./ [g]("a", "$0");
		o("replace", (function(e, t, r) {
			var a = A ? "$" : "$0";
			return [function(e, r) {
				var n = m(this),
					a = null == e ? void 0 : d(e, g);
				return a ? i(a, e, n, r) : i(t, p(n), e, r)
			}, function(e, i) {
				var o = u(this),
					s = p(e);
				if ("string" == typeof i && -1 === M(i, a) && -1 === M(i,
					"$<")) {
					var m = r(t, o, s, i);
					if (m.done) return m.value
				}
				var d = c(i);
				d || (i = p(i));
				var g = o.global;
				if (g) {
					var S = o.unicode;
					o.lastIndex = 0
				}
				for (var A = [];;) {
					var O = y(o, s);
					if (null === O) break;
					if (N(A, O), !g) break;
					"" === p(O[0]) && (o.lastIndex = h(s, l(o.lastIndex), S))
				}
				for (var C, _ = "", T = 0, I = 0; I < A.length; I++) {
					for (var k = p((O = A[I])[0]), z = x(b(f(O.index), s
							.length), 0), R = [], q = 1; q < O.length; q++) N(R,
						void 0 === (C = O[q]) ? C : String(C));
					var B = O.groups;
					if (d) {
						var D = w([k], R, z, s);
						void 0 !== B && N(D, B);
						var j = p(n(i, void 0, D))
					} else j = v(k, s, z, R, B, i);
					z >= T && (_ += E(s, T, z) + j, T = z + k.length)
				}
				return _ + E(s, T)
			}]
		}), !!s((function() {
			var e = /./;
			return e.exec = function() {
				var e = [];
				return e.groups = {
					a: "7"
				}, e
			}, "7" !== "".replace(e, "$<a>")
		})) || !S || A)
	}, function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e
				.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						return e.i
					}
				}), e.webpackPolyfill = 1), e
		}
	}, function(e, t) {
		(function(t) {
			e.exports = t
		}).call(this, {})
	}, function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, function(e, t, r) {
		var n, i, a = r(1),
			o = r(59),
			s = a.process,
			u = a.Deno,
			c = s && s.versions || u && u.version,
			f = c && c.v8;
		f && (i = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && o && (!(n = o
			.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[
			1]), e.exports = i
	}, function(e, t) {
		e.exports = {}
	}, function(e, t, r) {
		var n = r(18),
			i = r(26),
			a = Function.prototype,
			o = n && Object.getOwnPropertyDescriptor,
			s = i(a, "name"),
			u = s && "something" === function() {}.name,
			c = s && (!n || n && o(a, "name").configurable);
		e.exports = {
			EXISTS: s,
			PROPER: u,
			CONFIGURABLE: c
		}
	}, function(e, t, r) {
		var n = r(60),
			i = Math.max,
			a = Math.min;
		e.exports = function(e, t) {
			var r = n(e);
			return r < 0 ? i(r + t, 0) : a(r, t)
		}
	}, function(e, t, r) {
		var n = r(8),
			i = r(14),
			a = /#|\.prototype\./,
			o = function(e, t) {
				var r = u[s(e)];
				return r == f || r != c && (i(t) ? n(t) : !!t)
			},
			s = o.normalize = function(e) {
				return String(e).replace(a, ".").toLowerCase()
			},
			u = o.data = {},
			c = o.NATIVE = "N",
			f = o.POLYFILL = "P";
		e.exports = o
	}, function(e, t, r) {
		var n = r(69),
			i = r(9),
			a = r(104),
			o = r(35),
			s = r(45),
			u = r(111),
			c = i([].push),
			f = function(e) {
				var t = 1 == e,
					r = 2 == e,
					i = 3 == e,
					f = 4 == e,
					l = 6 == e,
					p = 7 == e,
					m = 5 == e || l;
				return function(h, d, v, y) {
					for (var g, x, b = o(h), w = a(b), N = n(d, v), M = s(w), E = 0, S = y || u,
							A = t ? S(h, M) : r || p ? S(h, 0) : void 0; M > E; E++)
						if ((m || E in w) && (x = N(g = w[E], E, b), e))
							if (t) A[E] = x;
							else if (x) switch (e) {
						case 3:
							return !0;
						case 5:
							return g;
						case 6:
							return E;
						case 2:
							c(A, g)
					} else switch (e) {
						case 4:
							return !1;
						case 7:
							c(A, g)
					}
					return l ? -1 : i || f ? f : A
				}
			};
		e.exports = {
			forEach: f(0),
			map: f(1),
			filter: f(2),
			some: f(3),
			every: f(4),
			find: f(5),
			findIndex: f(6),
			filterReject: f(7)
		}
	}, function(e, t, r) {
		var n = r(8),
			i = r(15),
			a = r(76),
			o = i("species");
		e.exports = function(e) {
			return a >= 51 || !n((function() {
				var t = [];
				return (t.constructor = {})[o] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[e](Boolean).foo
			}))
		}
	}, function(e, t, r) {
		var n = r(86),
			i = Function.prototype,
			a = i.apply,
			o = i.call;
		e.exports = "object" == typeof Reflect && Reflect.apply || (n ? o.bind(a) : function() {
			return o.apply(a, arguments)
		})
	}, function(e, t) {
		e.exports = {}
	}, function(e, t, r) {
		var n = r(19).f,
			i = r(26),
			a = r(15)("toStringTag");
		e.exports = function(e, t, r) {
			e && !r && (e = e.prototype), e && !i(e, a) && n(e, a, {
				configurable: !0,
				value: t
			})
		}
	}, function(e, t, r) {
		var n = r(8);
		e.exports = !n((function() {
			var e = function() {}.bind();
			return "function" != typeof e || e.hasOwnProperty("prototype")
		}))
	}, function(e, t, r) {
		var n = r(136),
			i = r(88);
		e.exports = function(e) {
			var t = n(e, "string");
			return i(t) ? t : t + ""
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(48),
			a = r(14),
			o = r(52),
			s = r(137),
			u = n.Object;
		e.exports = s ? function(e) {
			return "symbol" == typeof e
		} : function(e) {
			var t = i("Symbol");
			return a(t) && o(t.prototype, u(e))
		}
	}, function(e, t, r) {
		var n = r(1).String;
		e.exports = function(e) {
			try {
				return n(e)
			} catch (e) {
				return "Object"
			}
		}
	}, function(e, t, r) {
		var n = r(67),
			i = r(106);
		(e.exports = function(e, t) {
			return i[e] || (i[e] = void 0 !== t ? t : {})
		})("versions", []).push({
			version: "3.21.1",
			mode: n ? "pure" : "global",
			copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
			license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
			source: "https://github.com/zloirock/core-js"
		})
	}, function(e, t, r) {
		var n = r(9),
			i = 0,
			a = Math.random(),
			o = n(1..toString);
		e.exports = function(e) {
			return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + a, 36)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(23),
			a = n.document,
			o = i(a) && i(a.createElement);
		e.exports = function(e) {
			return o ? a.createElement(e) : {}
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(14),
			a = r(106),
			o = n(Function.toString);
		i(a.inspectSource) || (a.inspectSource = function(e) {
			return o(e)
		}), e.exports = a.inspectSource
	}, function(e, t, r) {
		var n = r(90),
			i = r(91),
			a = n("keys");
		e.exports = function(e) {
			return a[e] || (a[e] = i(e))
		}
	}, function(e, t, r) {
		var n = r(60),
			i = Math.min;
		e.exports = function(e) {
			return e > 0 ? i(n(e), 9007199254740991) : 0
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(110),
			a = r(14),
			o = r(43),
			s = r(15)("toStringTag"),
			u = n.Object,
			c = "Arguments" == o(function() {
				return arguments
			}());
		e.exports = i ? o : function(e) {
			var t, r, n;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r =
					function(e, t) {
						try {
							return e[t]
						} catch (e) {}
					}(t = u(e), s)) ? r : c ? o(t) : "Object" == (n = o(t)) && a(t.callee) ?
				"Arguments" : n
		}
	}, function(e, t, r) {
		var n = r(43);
		e.exports = Array.isArray || function(e) {
			return "Array" == n(e)
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(8),
			a = r(14),
			o = r(96),
			s = r(48),
			u = r(93),
			c = function() {},
			f = [],
			l = s("Reflect", "construct"),
			p = /^\s*(?:class|function)\b/,
			m = n(p.exec),
			h = !p.exec(c),
			d = function(e) {
				if (!a(e)) return !1;
				try {
					return l(c, f, e), !0
				} catch (e) {
					return !1
				}
			},
			v = function(e) {
				if (!a(e)) return !1;
				switch (o(e)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return !1
				}
				try {
					return h || !!m(p, u(e))
				} catch (e) {
					return !0
				}
			};
		v.sham = !0, e.exports = !l || i((function() {
			var e;
			return d(d.call) || !d(Object) || !d((function() {
				e = !0
			})) || e
		})) ? v : d
	}, function(e, t, r) {
		var n = r(8),
			i = r(1).RegExp,
			a = n((function() {
				var e = i("a", "y");
				return e.lastIndex = 2, null != e.exec("abcd")
			})),
			o = a || n((function() {
				return !i("a", "y").sticky
			})),
			s = a || n((function() {
				var e = i("^r", "gy");
				return e.lastIndex = 2, null != e.exec("str")
			}));
		e.exports = {
			BROKEN_CARET: s,
			MISSED_STICKY: o,
			UNSUPPORTED_Y: a
		}
	}, function(e, t, r) {
		"use strict";
		var n, i, a = r(22),
			o = r(9),
			s = r(34),
			u = r(116),
			c = r(99),
			f = r(90),
			l = r(70),
			p = r(44).get,
			m = r(118),
			h = r(150),
			d = f("native-string-replace", String.prototype.replace),
			v = RegExp.prototype.exec,
			y = v,
			g = o("".charAt),
			x = o("".indexOf),
			b = o("".replace),
			w = o("".slice),
			N = (i = /b*/g, a(v, n = /a/, "a"), a(v, i, "a"), 0 !== n.lastIndex || 0 !== i
				.lastIndex),
			M = c.BROKEN_CARET,
			E = void 0 !== /()??/.exec("")[1];
		(N || E || M || m || h) && (y = function(e) {
			var t, r, n, i, o, c, f, m = this,
				h = p(m),
				S = s(e),
				A = h.raw;
			if (A) return A.lastIndex = m.lastIndex, t = a(y, A, S), m.lastIndex = A.lastIndex,
				t;
			var O = h.groups,
				C = M && m.sticky,
				_ = a(u, m),
				T = m.source,
				I = 0,
				k = S;
			if (C && (_ = b(_, "y", ""), -1 === x(_, "g") && (_ += "g"), k = w(S, m.lastIndex),
					m.lastIndex > 0 && (!m.multiline || m.multiline && "\n" !== g(S, m
						.lastIndex - 1)) && (T = "(?: " + T + ")", k = " " + k, I++), r =
					new RegExp("^(?:" + T + ")", _)), E && (r = new RegExp("^" + T + "$(?!\\s)",
					_)), N && (n = m.lastIndex), i = a(v, C ? r : m, k), C ? i ? (i.input = w(i
					.input, I), i[0] = w(i[0], I), i.index = m.lastIndex, m.lastIndex += i[
					0].length) : m.lastIndex = 0 : N && i && (m.lastIndex = m.global ? i.index +
					i[0].length : n), E && i && i.length > 1 && a(d, i[0], r, (function() {
					for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[
						o] && (i[o] = void 0)
				})), i && O)
				for (i.groups = c = l(null), o = 0; o < O.length; o++) c[(f = O[o])[0]] = i[f[
					1]];
			return i
		}), e.exports = y
	}, function(e, t) {
		var r = Math.expm1,
			n = Math.exp;
		e.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-
			2e-17) ? function(e) {
			return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : n(e) - 1
		} : r
	}, function(e, t, r) {
		"use strict";
		var n = r(22),
			i = r(119),
			a = r(20),
			o = r(95),
			s = r(34),
			u = r(47),
			c = r(65),
			f = r(120),
			l = r(122);
		i("match", (function(e, t, r) {
			return [function(t) {
				var r = u(this),
					i = null == t ? void 0 : c(t, e);
				return i ? n(i, t, r) : new RegExp(t)[e](s(r))
			}, function(e) {
				var n = a(this),
					i = s(e),
					u = r(t, n, i);
				if (u.done) return u.value;
				if (!n.global) return l(n, i);
				var c = n.unicode;
				n.lastIndex = 0;
				for (var p, m = [], h = 0; null !== (p = l(n, i));) {
					var d = s(p[0]);
					m[h] = d, "" === d && (n.lastIndex = f(i, o(n.lastIndex),
						c)), h++
				}
				return 0 === h ? null : m
			}]
		}))
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(215);
		n({
			target: "String",
			proto: !0,
			forced: r(216)("sub")
		}, {
			sub: function() {
				return i(this, "sub", "", "")
			}
		})
	}, function(e, t, r) {
		var n = r(1),
			i = r(9),
			a = r(8),
			o = r(43),
			s = n.Object,
			u = i("".split);
		e.exports = a((function() {
			return !s("z").propertyIsEnumerable(0)
		})) ? function(e) {
			return "String" == o(e) ? u(e, "") : s(e)
		} : s
	}, function(e, t, r) {
		var n = r(76),
			i = r(8);
		e.exports = !!Object.getOwnPropertySymbols && !i((function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n &&
				n < 41
		}))
	}, function(e, t, r) {
		var n = r(1),
			i = r(107),
			a = n["__core-js_shared__"] || i("__core-js_shared__", {});
		e.exports = a
	}, function(e, t, r) {
		var n = r(1),
			i = Object.defineProperty;
		e.exports = function(e, t) {
			try {
				i(n, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch (r) {
				n[e] = t
			}
			return t
		}
	}, function(e, t) {
		e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable",
			"toLocaleString", "toString", "valueOf"
		]
	}, function(e, t, r) {
		var n = r(142),
			i = r(108);
		e.exports = Object.keys || function(e) {
			return n(e, i)
		}
	}, function(e, t, r) {
		var n = {};
		n[r(15)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
	}, function(e, t, r) {
		var n = r(194);
		e.exports = function(e, t) {
			return new(n(e))(0 === t ? 0 : t)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(8);
		e.exports = function(e, t) {
			var r = [][e];
			return !!r && n((function() {
				r.call(null, t || function() {
					return 1
				}, 1)
			}))
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(26),
			a = r(14),
			o = r(35),
			s = r(94),
			u = r(147),
			c = s("IE_PROTO"),
			f = n.Object,
			l = f.prototype;
		e.exports = u ? f.getPrototypeOf : function(e) {
			var t = o(e);
			if (i(t, c)) return t[c];
			var r = t.constructor;
			return a(r) && t instanceof r ? r.prototype : t instanceof f ? l : null
		}
	}, function(e, t, r) {
		var n = r(14),
			i = r(23),
			a = r(115);
		e.exports = function(e, t, r) {
			var o, s;
			return a && n(o = t.constructor) && o !== r && i(s = o.prototype) && s !== r
				.prototype && a(e, s), e
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(20),
			a = r(195);
		e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e, t = !1,
				r = {};
			try {
				(e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(
					r, []), t = r instanceof Array
			} catch (e) {}
			return function(r, n) {
				return i(r), a(n), t ? e(r, n) : r.__proto__ = n, r
			}
		}() : void 0)
	}, function(e, t, r) {
		"use strict";
		var n = r(20);
		e.exports = function() {
			var e = n(this),
				t = "";
			return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t +=
				"m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(48),
			i = r(19),
			a = r(15),
			o = r(18),
			s = a("species");
		e.exports = function(e) {
			var t = n(e),
				r = i.f;
			o && t && !t[s] && r(t, s, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(e, t, r) {
		var n = r(8),
			i = r(1).RegExp;
		e.exports = n((function() {
			var e = i(".", "s");
			return !(e.dotAll && e.exec("\n") && "s" === e.flags)
		}))
	}, function(e, t, r) {
		"use strict";
		r(10);
		var n = r(9),
			i = r(36),
			a = r(100),
			o = r(8),
			s = r(15),
			u = r(53),
			c = s("species"),
			f = RegExp.prototype;
		e.exports = function(e, t, r, l) {
			var p = s(e),
				m = !o((function() {
					var t = {};
					return t[p] = function() {
						return 7
					}, 7 != "" [e](t)
				})),
				h = m && !o((function() {
					var t = !1,
						r = /a/;
					return "split" === e && ((r = {}).constructor = {}, r.constructor[
						c] = function() {
							return r
						}, r.flags = "", r[p] = /./ [p]), r.exec = function() {
						return t = !0, null
					}, r[p](""), !t
				}));
			if (!m || !h || r) {
				var d = n(/./ [p]),
					v = t(p, "" [e], (function(e, t, r, i, o) {
						var s = n(e),
							u = t.exec;
						return u === a || u === f.exec ? m && !o ? {
							done: !0,
							value: d(t, r, i)
						} : {
							done: !0,
							value: s(r, t, i)
						} : {
							done: !1
						}
					}));
				i(String.prototype, e, v[0]), i(f, p, v[1])
			}
			l && u(f[p], "sham", !0)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(156).charAt;
		e.exports = function(e, t, r) {
			return t + (r ? n(e, t).length : 1)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(79),
			a = r(45),
			o = r(71),
			s = n.Array,
			u = Math.max;
		e.exports = function(e, t, r) {
			for (var n = a(e), c = i(t, n), f = i(void 0 === r ? n : r, n), l = s(u(f - c, 0)),
					p = 0; c < f; c++, p++) o(l, p, e[c]);
			return l.length = p, l
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(22),
			a = r(20),
			o = r(14),
			s = r(43),
			u = r(100),
			c = n.TypeError;
		e.exports = function(e, t) {
			var r = e.exec;
			if (o(r)) {
				var n = i(r, e, t);
				return null !== n && a(n), n
			}
			if ("RegExp" === s(e)) return i(u, e, t);
			throw c("RegExp#exec called on incompatible receiver")
		}
	}, function(e, t, r) {
		var n = r(9);
		e.exports = n([].slice)
	}, function(e, t, r) {
		var n = r(15),
			i = r(70),
			a = r(19),
			o = n("unscopables"),
			s = Array.prototype;
		null == s[o] && a.f(s, o, {
			configurable: !0,
			value: i(null)
		}), e.exports = function(e) {
			s[o][e] = !0
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(22),
			a = r(67),
			o = r(78),
			s = r(14),
			u = r(217),
			c = r(113),
			f = r(115),
			l = r(85),
			p = r(53),
			m = r(36),
			h = r(15),
			d = r(84),
			v = r(165),
			y = o.PROPER,
			g = o.CONFIGURABLE,
			x = v.IteratorPrototype,
			b = v.BUGGY_SAFARI_ITERATORS,
			w = h("iterator"),
			N = function() {
				return this
			};
		e.exports = function(e, t, r, o, h, v, M) {
			u(r, t, o);
			var E, S, A, O = function(e) {
					if (e === h && k) return k;
					if (!b && e in T) return T[e];
					switch (e) {
						case "keys":
						case "values":
						case "entries":
							return function() {
								return new r(this, e)
							}
					}
					return function() {
						return new r(this)
					}
				},
				C = t + " Iterator",
				_ = !1,
				T = e.prototype,
				I = T[w] || T["@@iterator"] || h && T[h],
				k = !b && I || O(h),
				z = "Array" == t && T.entries || I;
			if (z && (E = c(z.call(new e))) !== Object.prototype && E.next && (a || c(E) ===
					x || (f ? f(E, x) : s(E[w]) || m(E, w, N)), l(E, C, !0, !0), a && (d[C] = N)
					), y && "values" == h && I && "values" !== I.name && (!a && g ? p(T, "name",
					"values") : (_ = !0, k = function() {
					return i(I, this)
				})), h)
				if (S = {
						values: O("values"),
						keys: v ? k : O("keys"),
						entries: O("entries")
					}, M)
					for (A in S)(b || _ || !(A in T)) && m(T, A, S[A]);
				else n({
					target: t,
					proto: !0,
					forced: b || _
				}, S);
			return a && !M || T[w] === k || m(T, w, k, {
				name: h
			}), d[t] = k, S
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(69),
			a = r(22),
			o = r(20),
			s = r(89),
			u = r(170),
			c = r(45),
			f = r(52),
			l = r(171),
			p = r(127),
			m = r(172),
			h = n.TypeError,
			d = function(e, t) {
				this.stopped = e, this.result = t
			},
			v = d.prototype;
		e.exports = function(e, t, r) {
			var n, y, g, x, b, w, N, M = r && r.that,
				E = !(!r || !r.AS_ENTRIES),
				S = !(!r || !r.IS_ITERATOR),
				A = !(!r || !r.INTERRUPTED),
				O = i(t, M),
				C = function(e) {
					return n && m(n, "normal", e), new d(!0, e)
				},
				_ = function(e) {
					return E ? (o(e), A ? O(e[0], e[1], C) : O(e[0], e[1])) : A ? O(e, C) : O(e)
				};
			if (S) n = e;
			else {
				if (!(y = p(e))) throw h(s(e) + " is not iterable");
				if (u(y)) {
					for (g = 0, x = c(e); x > g; g++)
						if ((b = _(e[g])) && f(v, b)) return b;
					return new d(!1)
				}
				n = l(e, y)
			}
			for (w = n.next; !(N = a(w, n)).done;) {
				try {
					b = _(N.value)
				} catch (e) {
					m(n, "throw", e)
				}
				if ("object" == typeof b && b && f(v, b)) return b
			}
			return new d(!1)
		}
	}, function(e, t, r) {
		var n = r(96),
			i = r(65),
			a = r(84),
			o = r(15)("iterator");
		e.exports = function(e) {
			if (null != e) return i(e, o) || i(e, "@@iterator") || a[n(e)]
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(52),
			a = n.TypeError;
		e.exports = function(e, t) {
			if (i(t, e)) return e;
			throw a("Incorrect invocation")
		}
	}, function(e, t, r) {
		var n = r(15)("iterator"),
			i = !1;
		try {
			var a = 0,
				o = {
					next: function() {
						return {
							done: !!a++
						}
					},
					return: function() {
						i = !0
					}
				};
			o[n] = function() {
				return this
			}, Array.from(o, (function() {
				throw 2
			}))
		} catch (e) {}
		e.exports = function(e, t) {
			if (!t && !i) return !1;
			var r = !1;
			try {
				var a = {};
				a[n] = function() {
					return {
						next: function() {
							return {
								done: r = !0
							}
						}
					}
				}, e(a)
			} catch (e) {}
			return r
		}
	}, function(e, t, r) {
		var n = r(43),
			i = r(1);
		e.exports = "process" == n(i.process)
	}, function(e, t, r) {
		var n = r(6),
			i = r(8),
			a = r(40),
			o = r(58).f,
			s = r(18),
			u = i((function() {
				o(1)
			}));
		n({
			target: "Object",
			stat: !0,
			forced: !s || u,
			sham: !s
		}, {
			getOwnPropertyDescriptor: function(e, t) {
				return o(a(e), t)
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(18),
			a = r(141),
			o = r(40),
			s = r(58),
			u = r(71);
		n({
			target: "Object",
			stat: !0,
			sham: !i
		}, {
			getOwnPropertyDescriptors: function(e) {
				for (var t, r, n = o(e), i = s.f, c = a(n), f = {}, l = 0; c.length >
					l;) void 0 !== (r = i(n, t = c[l++])) && u(f, t, r);
				return f
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n, i, a;
		i = [], void 0 === (a = "function" == typeof(n = function() {
			function e() {
				return !0
			}

			function t() {
				return !1
			}

			function r() {}
			return function n() {
				var i = [{
						name: "number",
						test: function(e) {
							return "number" == typeof e
						}
					}, {
						name: "string",
						test: function(e) {
							return "string" == typeof e
						}
					}, {
						name: "boolean",
						test: function(e) {
							return "boolean" == typeof e
						}
					}, {
						name: "Function",
						test: function(e) {
							return "function" == typeof e
						}
					}, {
						name: "Array",
						test: Array.isArray
					}, {
						name: "Date",
						test: function(e) {
							return e instanceof Date
						}
					}, {
						name: "RegExp",
						test: function(e) {
							return e instanceof RegExp
						}
					}, {
						name: "Object",
						test: function(e) {
							return "object" == typeof e && null !== e && e
								.constructor === Object
						}
					}, {
						name: "null",
						test: function(e) {
							return null === e
						}
					}, {
						name: "undefined",
						test: function(e) {
							return void 0 === e
						}
					}],
					a = {
						name: "any",
						test: e
					},
					o = [],
					s = [],
					u = {
						types: i,
						conversions: s,
						ignore: o
					};

				function c(e) {
					var t = P(u.types, (function(t) {
						return t.name === e
					}));
					if (t) return t;
					if ("any" === e) return a;
					var r = P(u.types, (function(t) {
						return t.name.toLowerCase() === e.toLowerCase()
					}));
					throw new TypeError('Unknown type "' + e + '"' + (r ?
						'. Did you mean "' + r.name + '"?' : ""))
				}

				function f(e) {
					return e === a ? 999 : u.types.indexOf(e)
				}

				function l(e) {
					var t = P(u.types, (function(t) {
						return t.test(e)
					}));
					if (t) return t.name;
					throw new TypeError("Value has unknown type. Value: " + e)
				}

				function p(e) {
					return e.map((function(e) {
						var t = e.types.map(b);
						return (e.restParam ? "..." : "") + t.join("|")
					})).join(",")
				}

				function m(e, t) {
					var r = 0 === e.indexOf("..."),
						n = (r ? e.length > 3 ? e.slice(3) : "any" : e).split("|")
						.map(k).filter(z).filter(I),
						i = function(e, t) {
							var r = {};
							return e.forEach((function(e) {
								-1 !== t.indexOf(e.from) || -1 === t
									.indexOf(e.to) || r[e.from] || (r[e
										.from] = e)
							})), Object.keys(r).map((function(e) {
								return r[e]
							}))
						}(t, n),
						a = n.map((function(e) {
							var t = c(e);
							return {
								name: e,
								typeIndex: f(t),
								test: t.test,
								conversion: null,
								conversionIndex: -1
							}
						})),
						o = i.map((function(e) {
							var r = c(e.from);
							return {
								name: e.from,
								typeIndex: f(r),
								test: r.test,
								conversion: e,
								conversionIndex: t.indexOf(e)
							}
						}));
					return {
						types: a.concat(o),
						restParam: r
					}
				}

				function h(e) {
					var t = B(e);
					return !!t && t.restParam
				}

				function d(e) {
					return e.types.some((function(e) {
						return null != e.conversion
					}))
				}

				function v(t) {
					if (t && 0 !== t.types.length) {
						if (1 === t.types.length) return c(t.types[0].name).test;
						if (2 === t.types.length) {
							var r = c(t.types[0].name).test,
								n = c(t.types[1].name).test;
							return function(e) {
								return r(e) || n(e)
							}
						}
						var i = t.types.map((function(e) {
							return c(e.name).test
						}));
						return function(e) {
							for (var t = 0; t < i.length; t++)
								if (i[t](e)) return !0;
							return !1
						}
					}
					return e
				}

				function y(e) {
					var t, r, n, i;
					if (h(e)) {
						var a = (t = (i = e, i.slice(0, i.length - 1)).map(v))
							.length,
							o = v(B(e));
						return function(e) {
							for (var r = 0; r < t.length; r++)
								if (!t[r](e[r])) return !1;
							return function(e) {
								for (var t = a; t < e.length; t++)
									if (!o(e[t])) return !1;
								return !0
							}(e) && e.length >= a + 1
						}
					}
					return 0 === e.length ? function(e) {
						return 0 === e.length
					} : 1 === e.length ? (r = v(e[0]), function(e) {
						return r(e[0]) && 1 === e.length
					}) : 2 === e.length ? (r = v(e[0]), n = v(e[1]), function(
					e) {
						return r(e[0]) && n(e[1]) && 2 === e.length
					}) : (t = e.map(v), function(e) {
						for (var r = 0; r < t.length; r++)
							if (!t[r](e[r])) return !1;
						return e.length === t.length
					})
				}

				function g(e, t) {
					return t < e.params.length ? e.params[t] : h(e.params) ? B(e
						.params) : null
				}

				function x(e, t, r) {
					var n = g(e, t);
					return (n ? r ? n.types.filter(w) : n.types : []).map(b)
				}

				function b(e) {
					return e.name
				}

				function w(e) {
					return null === e.conversion || void 0 === e.conversion
				}

				function N(e, t) {
					var r = function(e) {
						for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
						return Object.keys(t)
					}(F(e, (function(e) {
						return x(e, t, !1)
					})));
					return -1 !== r.indexOf("any") ? ["any"] : r
				}

				function M(e, t, r) {
					var n, i, a, o = e || "unnamed",
						s = r;
					for (a = 0; a < t.length; a++) {
						var u = s.filter((function(e) {
							var r = v(g(e, a));
							return (a < e.params.length || h(e
								.params)) && r(t[a])
						}));
						if (0 === u.length) {
							if ((i = N(s, a)).length > 0) {
								var c = l(t[a]);
								return (n = new TypeError(
									"Unexpected type of argument in function " +
									o + " (expected: " + i.join(" or ") +
									", actual: " + c + ", index: " + a + ")"
									)).data = {
									category: "wrongType",
									fn: o,
									index: a,
									actual: c,
									expected: i
								}, n
							}
						} else s = u
					}
					var f = s.map((function(e) {
						return h(e.params) ? 1 / 0 : e.params.length
					}));
					if (t.length < Math.min.apply(null, f)) return i = N(s, a), (n =
						new TypeError("Too few arguments in function " + o +
							" (expected: " + i.join(" or ") + ", index: " +
							t.length + ")")).data = {
						category: "tooFewArgs",
						fn: o,
						index: t.length,
						expected: i
					}, n;
					var p = Math.max.apply(null, f);
					return t.length > p ? ((n = new TypeError(
						"Too many arguments in function " + o +
						" (expected: " + p + ", actual: " + t.length +
						")")).data = {
						category: "tooManyArgs",
						fn: o,
						index: t.length,
						expectedLength: p
					}, n) : ((n = new TypeError('Arguments of type "' + t.join(
							", ") +
						'" do not match any of the defined signatures of function ' +
						o + ".")).data = {
						category: "mismatch",
						actual: t.map(l)
					}, n)
				}

				function E(e) {
					for (var t = 999, r = 0; r < e.types.length; r++) w(e.types[
						r]) && (t = Math.min(t, e.types[r].typeIndex));
					return t
				}

				function S(e) {
					for (var t = 999, r = 0; r < e.types.length; r++) w(e.types[
						r]) || (t = Math.min(t, e.types[r].conversionIndex));
					return t
				}

				function A(e, t) {
					var r;
					return 0 != (r = e.restParam - t.restParam) || 0 != (r = d(e) -
						d(t)) || 0 != (r = E(e) - E(t)) ? r : S(e) - S(t)
				}

				function O(e, t) {
					var r, n, i = Math.min(e.params.length, t.params.length);
					if (0 != (n = e.params.some(d) - t.params.some(d))) return n;
					for (r = 0; r < i; r++)
						if (0 != (n = d(e.params[r]) - d(t.params[r]))) return n;
					for (r = 0; r < i; r++)
						if (0 !== (n = A(e.params[r], t.params[r]))) return n;
					return e.params.length - t.params.length
				}

				function C(e) {
					var t, r, n, i, a = [],
						o = [];
					switch (e.types.forEach((function(e) {
						e.conversion && (a.push(c(e.conversion.from)
								.test), o.push(e.conversion
							.convert))
					})), o.length) {
						case 0:
							return function(e) {
								return e
							};
						case 1:
							return t = a[0], n = o[0],
								function(e) {
									return t(e) ? n(e) : e
								};
						case 2:
							return t = a[0], r = a[1], n = o[0], i = o[1],
								function(e) {
									return t(e) ? n(e) : r(e) ? i(e) : e
								};
						default:
							return function(e) {
								for (var t = 0; t < o.length; t++)
									if (a[t](e)) return o[t](e);
								return e
							}
					}
				}

				function _(e, t) {
					return function e(r, n, i) {
						if (n < r.length) {
							var a, o = r[n],
								s = t ? o.types.filter(w) : o.types;
							if (o.restParam) {
								var u = s.filter(w);
								a = u.length < s.length ? [u, s] : [s]
							} else a = s.map((function(e) {
								return [e]
							}));
							return F(a, (function(t) {
								return e(r, n + 1, i.concat([t]))
							}))
						}
						return [i.map((function(e, t) {
							return {
								types: e,
								restParam: t === r.length - 1 &&
									h(r)
							}
						}))]
					}(e, 0, [])
				}

				function T(e, n) {
					if (0 === Object.keys(n).length) throw new SyntaxError(
						"No signatures provided");
					var i = [];
					Object.keys(n).map((function(e) {
						return function(e, t, r) {
							var n = [];
							return "" !== e.trim() && (n = e.split(
								",").map(k).map((function(e,
								t, n) {
								var i = m(e, r);
								if (i.restParam &&
									t !== n.length -
									1) throw new SyntaxError(
									'Unexpected rest parameter "' +
									e +
									'": only allowed for the last parameter'
									);
								return i
							}))), n.some(q) ? null : {
								params: n,
								fn: t
							}
						}(e, n[e], u.conversions)
					})).filter(R).forEach((function(e) {
						var t = P(i, (function(t) {
							return function(e, t) {
								for (var r = Math.max(e
											.params
											.length, t
											.params
											.length),
										n = 0; n <
									r; n++)
									if (!j(x(e, n, !0),
											x(t, n, !0)
											)) return !
									1;
								var i = e.params.length,
									a = t.params.length,
									o = h(e.params),
									s = h(t.params);
								return o ? s ? i === a :
									a >= i : s ? i >=
									a : i === a
							}(t, e)
						}));
						if (t) throw new TypeError(
							'Conflicting signatures "' + p(t
								.params) + '" and "' + p(e
								.params) + '".');
						i.push(e)
					}));
					var a = F(i, (function(e) {
						return (e ? _(e.params, !1) : []).map((function(
							t) {
							return {
								params: t,
								fn: e.fn
							}
						}))
					})).filter(R);
					a.sort(O);
					var o = a[0] && a[0].params.length <= 2 && !h(a[0].params),
						s = a[1] && a[1].params.length <= 2 && !h(a[1].params),
						c = a[2] && a[2].params.length <= 2 && !h(a[2].params),
						f = a[3] && a[3].params.length <= 2 && !h(a[3].params),
						l = a[4] && a[4].params.length <= 2 && !h(a[4].params),
						g = a[5] && a[5].params.length <= 2 && !h(a[5].params),
						b = o && s && c && f && l && g,
						w = a.map((function(e) {
							return y(e.params)
						})),
						N = o ? v(a[0].params[0]) : t,
						E = s ? v(a[1].params[0]) : t,
						S = c ? v(a[2].params[0]) : t,
						A = f ? v(a[3].params[0]) : t,
						T = l ? v(a[4].params[0]) : t,
						I = g ? v(a[5].params[0]) : t,
						z = o ? v(a[0].params[1]) : t,
						B = s ? v(a[1].params[1]) : t,
						U = c ? v(a[2].params[1]) : t,
						L = f ? v(a[3].params[1]) : t,
						$ = l ? v(a[4].params[1]) : t,
						H = g ? v(a[5].params[1]) : t,
						G = a.map((function(e) {
							return function(e, t) {
								var r = t;
								if (e.some(d)) {
									var n = h(e),
										i = e.map(C);
									r = function() {
										for (var e = [], r = n ?
												arguments.length -
												1 : arguments
												.length, a = 0; a <
											r; a++) e[a] = i[a](
											arguments[a]);
										return n && (e[r] =
											arguments[r].map(i[
												r])), t.apply(
											this, e)
									}
								}
								var a = r;
								if (h(e)) {
									var o = e.length - 1;
									a = function() {
										return r.apply(this, D(
												arguments, 0, o)
											.concat([D(arguments,
												o)]))
									}
								}
								return a
							}(e.params, e.fn)
						})),
						V = o ? G[0] : r,
						Z = s ? G[1] : r,
						W = c ? G[2] : r,
						Y = f ? G[3] : r,
						J = l ? G[4] : r,
						X = g ? G[5] : r,
						Q = o ? a[0].params.length : -1,
						K = s ? a[1].params.length : -1,
						ee = c ? a[2].params.length : -1,
						te = f ? a[3].params.length : -1,
						re = l ? a[4].params.length : -1,
						ne = g ? a[5].params.length : -1,
						ie = b ? 6 : 0,
						ae = a.length,
						oe = function() {
							for (var t = ie; t < ae; t++)
								if (w[t](arguments)) return G[t].apply(this,
									arguments);
							throw M(e, arguments, a)
						},
						se = function e(t, r) {
							return arguments.length === Q && N(t) && z(r) ? V.apply(
									e, arguments) : arguments.length === K && E(
								t) && B(r) ? Z.apply(e, arguments) : arguments
								.length === ee && S(t) && U(r) ? W.apply(e,
									arguments) : arguments.length === te && A(t) &&
								L(r) ? Y.apply(e, arguments) : arguments.length ===
								re && T(t) && $(r) ? J.apply(e, arguments) :
								arguments.length === ne && I(t) && H(r) ? X.apply(e,
									arguments) : oe.apply(e, arguments)
						};
					try {
						Object.defineProperty(se, "name", {
							value: e
						})
					} catch (e) {}
					return se.signatures = function(e) {
						var t = {};
						return e.forEach((function(e) {
							e.params.some(d) || _(e.params, !0)
								.forEach((function(r) {
									t[p(r)] = e.fn
								}))
						})), t
					}(a), se
				}

				function I(e) {
					return -1 === u.ignore.indexOf(e)
				}

				function k(e) {
					return e.trim()
				}

				function z(e) {
					return !!e
				}

				function R(e) {
					return null !== e
				}

				function q(e) {
					return 0 === e.types.length
				}

				function B(e) {
					return e[e.length - 1]
				}

				function D(e, t, r) {
					return Array.prototype.slice.call(e, t, r)
				}

				function j(e, t) {
					for (var r = 0; r < e.length; r++)
						if (n = t, i = e[r], -1 !== n.indexOf(i)) return !0;
					var n, i;
					return !1
				}

				function P(e, t) {
					for (var r = 0; r < e.length; r++)
						if (t(e[r])) return e[r]
				}

				function F(e, t) {
					return Array.prototype.concat.apply([], e.map(t))
				}

				function U(e) {
					for (var t = "", r = 0; r < e.length; r++) {
						var n = e[r];
						if (("object" == typeof n.signatures || "string" == typeof n
								.signature) && "" !== n.name)
							if ("" === t) t = n.name;
							else if (t !== n.name) {
							var i = new Error(
								"Function names do not match (expected: " + t +
								", actual: " + n.name + ")");
							throw i.data = {
								actual: n.name,
								expected: t
							}, i
						}
					}
					return t
				}

				function L(e) {
					var t, r = {};

					function n(e, n) {
						if (r.hasOwnProperty(e) && n !== r[e]) throw (t = new Error(
								'Signature "' + e + '" is defined twice'))
							.data = {
								signature: e
							}, t
					}
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						if ("object" == typeof a.signatures)
							for (var o in a.signatures) a.signatures.hasOwnProperty(
								o) && (n(o, a.signatures[o]), r[o] = a
								.signatures[o]);
						else {
							if ("string" != typeof a.signature) throw (t =
								new TypeError(
									"Function is no typed-function (index: " +
									i + ")")).data = {
								index: i
							}, t;
							n(a.signature, a), r[a.signature] = a
						}
					}
					return r
				}
				return (u = T("typed", {
						"string, Object": T,
						Object: function(e) {
							var t = [];
							for (var r in e) e.hasOwnProperty(r) && t
								.push(e[r]);
							return T(U(t), e)
						},
						"...Function": function(e) {
							return T(U(e), L(e))
						},
						"string, ...Function": function(e, t) {
							return T(e, L(t))
						}
					})).create = n, u.types = i, u.conversions = s, u.ignore = o, u
					.convert = function(e, t) {
						var r = l(e);
						if (t === r) return e;
						for (var n = 0; n < u.conversions.length; n++) {
							var i = u.conversions[n];
							if (i.from === r && i.to === t) return i.convert(e)
						}
						throw new Error("Cannot convert from " + r + " to " + t)
					}, u.find = function(e, t) {
						if (!e.signatures) throw new TypeError(
							"Function is no typed-function");
						var r;
						if ("string" == typeof t) {
							r = t.split(",");
							for (var n = 0; n < r.length; n++) r[n] = r[n].trim()
						} else {
							if (!Array.isArray(t)) throw new TypeError(
								"String array or a comma separated string expected"
								);
							r = t
						}
						var i = r.join(","),
							a = e.signatures[i];
						if (a) return a;
						throw new TypeError("Signature not found (signature: " + (e
							.name || "unnamed") + "(" + r.join(", ") + "))")
					}, u.addType = function(e, t) {
						if (!e || "string" != typeof e.name || "function" !=
							typeof e.test) throw new TypeError(
							"Object with properties {name: string, test: function} expected"
							);
						if (!1 !== t)
							for (var r = 0; r < u.types.length; r++)
								if ("Object" === u.types[r].name) return void u
									.types.splice(r, 0, e);
						u.types.push(e)
					}, u.addConversion = function(e) {
						if (!e || "string" != typeof e.from || "string" != typeof e
							.to || "function" != typeof e.convert)
						throw new TypeError(
								"Object with properties {from: string, to: string, convert: function} expected"
								);
						u.conversions.push(e)
					}, u
			}()
		}) ? n.apply(t, i) : n) || (e.exports = a)
	}, function(e, t, r) {
		var n = r(245),
			i = r(246),
			a = r(247),
			o = r(248),
			s = r(249),
			u = r(250),
			c = r(251);
		c.alea = n, c.xor128 = i, c.xorwow = a, c.xorshift7 = o, c.xor4096 = s, c.tychei = u, e
			.exports = c
	}, function(e, t, r) {
		"use strict";
		var n = {}.propertyIsEnumerable,
			i = Object.getOwnPropertyDescriptor,
			a = i && !n.call({
				1: 2
			}, 1);
		t.f = a ? function(e) {
			var t = i(this, e);
			return !!t && t.enumerable
		} : n
	}, function(e, t, r) {
		var n = r(1),
			i = r(22),
			a = r(23),
			o = r(88),
			s = r(65),
			u = r(189),
			c = r(15),
			f = n.TypeError,
			l = c("toPrimitive");
		e.exports = function(e, t) {
			if (!a(e) || o(e)) return e;
			var r, n = s(e, l);
			if (n) {
				if (void 0 === t && (t = "default"), r = i(n, e, t), !a(r) || o(r)) return r;
				throw f("Can't convert object to primitive value")
			}
			return void 0 === t && (t = "number"), u(e, t)
		}
	}, function(e, t, r) {
		var n = r(105);
		e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
	}, function(e, t, r) {
		var n = r(18),
			i = r(8),
			a = r(92);
		e.exports = !n && !i((function() {
			return 7 != Object.defineProperty(a("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(e, t, r) {
		var n = r(18),
			i = r(8);
		e.exports = n && i((function() {
			return 42 != Object.defineProperty((function() {}), "prototype", {
				value: 42,
				writable: !1
			}).prototype
		}))
	}, function(e, t, r) {
		var n = r(26),
			i = r(141),
			a = r(58),
			o = r(19);
		e.exports = function(e, t, r) {
			for (var s = i(t), u = o.f, c = a.f, f = 0; f < s.length; f++) {
				var l = s[f];
				n(e, l) || r && n(r, l) || u(e, l, c(t, l))
			}
		}
	}, function(e, t, r) {
		var n = r(48),
			i = r(9),
			a = r(68),
			o = r(143),
			s = r(20),
			u = i([].concat);
		e.exports = n("Reflect", "ownKeys") || function(e) {
			var t = a.f(s(e)),
				r = o.f;
			return r ? u(t, r(e)) : t
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(26),
			a = r(40),
			o = r(191).indexOf,
			s = r(77),
			u = n([].push);
		e.exports = function(e, t) {
			var r, n = a(e),
				c = 0,
				f = [];
			for (r in n) !i(s, r) && i(n, r) && u(f, r);
			for (; t.length > c;) i(n, r = t[c++]) && (~o(f, r) || u(f, r));
			return f
		}
	}, function(e, t) {
		t.f = Object.getOwnPropertySymbols
	}, function(e, t) {
		e.exports = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		}
	}, function(e, t, r) {
		var n = r(92)("span").classList,
			i = n && n.constructor && n.constructor.prototype;
		e.exports = i === Object.prototype ? void 0 : i
	}, function(e, t, r) {
		var n = r(6),
			i = r(8),
			a = r(35),
			o = r(113),
			s = r(147);
		n({
			target: "Object",
			stat: !0,
			forced: i((function() {
				o(1)
			})),
			sham: !s
		}, {
			getPrototypeOf: function(e) {
				return o(a(e))
			}
		})
	}, function(e, t, r) {
		var n = r(8);
		e.exports = !n((function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e
				.prototype
		}))
	}, function(e, t, r) {
		var n = r(18),
			i = r(1),
			a = r(9),
			o = r(80),
			s = r(114),
			u = r(53),
			c = r(19).f,
			f = r(68).f,
			l = r(52),
			p = r(149),
			m = r(34),
			h = r(116),
			d = r(99),
			v = r(36),
			y = r(8),
			g = r(26),
			x = r(44).enforce,
			b = r(117),
			w = r(15),
			N = r(118),
			M = r(150),
			E = w("match"),
			S = i.RegExp,
			A = S.prototype,
			O = i.SyntaxError,
			C = a(h),
			_ = a(A.exec),
			T = a("".charAt),
			I = a("".replace),
			k = a("".indexOf),
			z = a("".slice),
			R = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
			q = /a/g,
			B = /a/g,
			D = new S(q) !== q,
			j = d.MISSED_STICKY,
			P = d.UNSUPPORTED_Y,
			F = n && (!D || j || N || M || y((function() {
				return B[E] = !1, S(q) != q || S(B) == B || "/a/i" != S(q, "i")
			})));
		if (o("RegExp", F)) {
			for (var U = function(e, t) {
					var r, n, i, a, o, c, f = l(A, this),
						h = p(e),
						d = void 0 === t,
						v = [],
						y = e;
					if (!f && h && d && e.constructor === U) return e;
					if ((h || l(A, e)) && (e = e.source, d && (t = "flags" in y ? y.flags : C(
							y))), e = void 0 === e ? "" : m(e), t = void 0 === t ? "" : m(t),
						y = e, N && "dotAll" in q && (n = !!t && k(t, "s") > -1) && (t = I(t,
							/s/g, "")), r = t, j && "sticky" in q && (i = !!t && k(t, "y") > -
						1) && P && (t = I(t, /y/g, "")), M && (e = (a = function(e) {
							for (var t, r = e.length, n = 0, i = "", a = [], o = {},
									s = !1, u = !1, c = 0, f = ""; n <= r; n++) {
								if ("\\" === (t = T(e, n))) t += T(e, ++n);
								else if ("]" === t) s = !1;
								else if (!s) switch (!0) {
									case "[" === t:
										s = !0;
										break;
									case "(" === t:
										_(R, z(e, n + 1)) && (n += 2, u = !0), i +=
											t, c++;
										continue;
									case ">" === t && u:
										if ("" === f || g(o, f)) throw new O(
											"Invalid capture group name");
										o[f] = !0, a[a.length] = [f, c], u = !1, f =
											"";
										continue
								}
								u ? f += t : i += t
							}
							return [i, a]
						}(e))[0], v = a[1]), o = s(S(e, t), f ? this : A, U), (n || i || v
							.length) && (c = x(o), n && (c.dotAll = !0, c.raw = U(function(e) {
							for (var t, r = e.length, n = 0, i = "", a = !1; n <=
								r; n++) "\\" !== (t = T(e, n)) ? a || "." !== t ? (
								"[" === t ? a = !0 : "]" === t && (a = !1), i +=
								t) : i += "[\\s\\S]" : i += t + T(e, ++n);
							return i
						}(e), r)), i && (c.sticky = !0), v.length && (c.groups = v)), e !== y)
						try {
							u(o, "source", "" === y ? "(?:)" : y)
						} catch (e) {}
					return o
				}, L = function(e) {
					e in U || c(U, e, {
						configurable: !0,
						get: function() {
							return S[e]
						},
						set: function(t) {
							S[e] = t
						}
					})
				}, $ = f(S), H = 0; $.length > H;) L($[H++]);
			A.constructor = U, U.prototype = A, v(i, "RegExp", U)
		}
		b("RegExp")
	}, function(e, t, r) {
		var n = r(23),
			i = r(43),
			a = r(15)("match");
		e.exports = function(e) {
			var t;
			return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
		}
	}, function(e, t, r) {
		var n = r(8),
			i = r(1).RegExp;
		e.exports = n((function() {
			var e = i("(?<a>b)", "g");
			return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
		}))
	}, function(e, t, r) {
		var n = r(1),
			i = r(18),
			a = r(118),
			o = r(43),
			s = r(19).f,
			u = r(44).get,
			c = RegExp.prototype,
			f = n.TypeError;
		i && a && s(c, "dotAll", {
			configurable: !0,
			get: function() {
				if (this !== c) {
					if ("RegExp" === o(this)) return !!u(this).dotAll;
					throw f("Incompatible receiver, RegExp required")
				}
			}
		})
	}, function(e, t, r) {
		var n = r(18),
			i = r(139),
			a = r(19),
			o = r(20),
			s = r(40),
			u = r(109);
		t.f = n && !i ? Object.defineProperties : function(e, t) {
			o(e);
			for (var r, n = s(t), i = u(t), c = i.length, f = 0; c > f;) a.f(e, r = i[f++], n[
				r]);
			return e
		}
	}, function(e, t, r) {
		var n = r(48);
		e.exports = n("document", "documentElement")
	}, function(e, t, r) {
		var n = r(1),
			i = r(18),
			a = r(99).MISSED_STICKY,
			o = r(43),
			s = r(19).f,
			u = r(44).get,
			c = RegExp.prototype,
			f = n.TypeError;
		i && a && s(c, "sticky", {
			configurable: !0,
			get: function() {
				if (this !== c) {
					if ("RegExp" === o(this)) return !!u(this).sticky;
					throw f("Incompatible receiver, RegExp required")
				}
			}
		})
	}, function(e, t, r) {
		var n = r(20),
			i = r(196),
			a = r(15)("species");
		e.exports = function(e, t) {
			var r, o = n(e).constructor;
			return void 0 === o || null == (r = n(o)[a]) ? t : i(r)
		}
	}, function(e, t, r) {
		var n = r(9),
			i = r(60),
			a = r(34),
			o = r(47),
			s = n("".charAt),
			u = n("".charCodeAt),
			c = n("".slice),
			f = function(e) {
				return function(t, r) {
					var n, f, l = a(o(t)),
						p = i(r),
						m = l.length;
					return p < 0 || p >= m ? e ? "" : void 0 : (n = u(l, p)) < 55296 || n >
						56319 || p + 1 === m || (f = u(l, p + 1)) < 56320 || f > 57343 ? e ? s(
							l, p) : n : e ? c(l, p, p + 2) : f - 56320 + (n - 55296 << 10) +
						65536
				}
			};
		e.exports = {
			codeAt: f(!1),
			charAt: f(!0)
		}
	}, function(e, t) {
		e.exports = Math.sign || function(e) {
			return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
		}
	}, function(e, t, r) {
		var n = r(6),
			i = Math.log,
			a = Math.LN2;
		n({
			target: "Math",
			stat: !0
		}, {
			log2: function(e) {
				return i(e) / a
			}
		})
	}, function(e, t) {
		var r = Math.log;
		e.exports = Math.log1p || function(e) {
			return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : r(1 + e)
		}
	}, function(e, t, r) {
		var n = r(9);
		e.exports = n(1..valueOf)
	}, function(e, t, r) {
		var n = r(9),
			i = r(47),
			a = r(34),
			o = r(162),
			s = n("".replace),
			u = "[" + o + "]",
			c = RegExp("^" + u + u + "*"),
			f = RegExp(u + u + "*$"),
			l = function(e) {
				return function(t) {
					var r = a(i(t));
					return 1 & e && (r = s(r, c, "")), 2 & e && (r = s(r, f, "")), r
				}
			};
		e.exports = {
			start: l(1),
			end: l(2),
			trim: l(3)
		}
	}, function(e, t) {
		e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(9),
			o = r(60),
			s = r(160),
			u = r(164),
			c = r(8),
			f = i.RangeError,
			l = i.String,
			p = Math.floor,
			m = a(u),
			h = a("".slice),
			d = a(1..toFixed),
			v = function(e, t, r) {
				return 0 === t ? r : t % 2 == 1 ? v(e, t - 1, r * e) : v(e * e, t / 2, r)
			},
			y = function(e, t, r) {
				for (var n = -1, i = r; ++n < 6;) i += t * e[n], e[n] = i % 1e7, i = p(i / 1e7)
			},
			g = function(e, t) {
				for (var r = 6, n = 0; --r >= 0;) n += e[r], e[r] = p(n / t), n = n % t * 1e7
			},
			x = function(e) {
				for (var t = 6, r = ""; --t >= 0;)
					if ("" !== r || 0 === t || 0 !== e[t]) {
						var n = l(e[t]);
						r = "" === r ? n : r + m("0", 7 - n.length) + n
					} return r
			};
		n({
			target: "Number",
			proto: !0,
			forced: c((function() {
				return "0.000" !== d(8e-5, 3) || "1" !== d(.9, 0) || "1.25" !==
					d(1.255, 2) || "1000000000000000128" !== d(
						0xde0b6b3a7640080, 0)
			})) || !c((function() {
				d({})
			}))
		}, {
			toFixed: function(e) {
				var t, r, n, i, a = s(this),
					u = o(e),
					c = [0, 0, 0, 0, 0, 0],
					p = "",
					d = "0";
				if (u < 0 || u > 20) throw f("Incorrect fraction digits");
				if (a != a) return "NaN";
				if (a <= -1e21 || a >= 1e21) return l(a);
				if (a < 0 && (p = "-", a = -a), a > 1e-21)
					if (r = (t = function(e) {
							for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
							for (; r >= 2;) t += 1, r /= 2;
							return t
						}(a * v(2, 69, 1)) - 69) < 0 ? a * v(2, -t, 1) : a / v(2, t, 1),
						r *= 4503599627370496, (t = 52 - t) > 0) {
						for (y(c, 0, r), n = u; n >= 7;) y(c, 1e7, 0), n -= 7;
						for (y(c, v(10, n, 1), 0), n = t - 1; n >= 23;) g(c, 1 << 23),
							n -= 23;
						g(c, 1 << n), y(c, 1, 1), g(c, 2), d = x(c)
					} else y(c, 0, r), y(c, 1 << -t, 0), d = x(c) + m("0", u);
				return d = u > 0 ? p + ((i = d.length) <= u ? "0." + m("0", u - i) + d :
					h(d, 0, i - u) + "." + h(d, i - u)) : p + d
			}
		})
	}, function(e, t, r) {
		"use strict";
		var n = r(1),
			i = r(60),
			a = r(34),
			o = r(47),
			s = n.RangeError;
		e.exports = function(e) {
			var t = a(o(this)),
				r = "",
				n = i(e);
			if (n < 0 || n == 1 / 0) throw s("Wrong number of repetitions");
			for (; n > 0;
				(n >>>= 1) && (t += t)) 1 & n && (r += t);
			return r
		}
	}, function(e, t, r) {
		"use strict";
		var n, i, a, o = r(8),
			s = r(14),
			u = r(70),
			c = r(113),
			f = r(36),
			l = r(15),
			p = r(67),
			m = l("iterator"),
			h = !1;
		[].keys && ("next" in (a = [].keys()) ? (i = c(c(a))) !== Object.prototype && (n = i) :
			h = !0), null == n || o((function() {
			var e = {};
			return n[m].call(e) !== e
		})) ? n = {} : p && (n = u(n)), s(n[m]) || f(n, m, (function() {
			return this
		})), e.exports = {
			IteratorPrototype: n,
			BUGGY_SAFARI_ITERATORS: h
		}
	}, function(e, t, r) {
		"use strict";
		r(167)("Map", (function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}), r(173))
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(1),
			a = r(9),
			o = r(80),
			s = r(36),
			u = r(168),
			c = r(126),
			f = r(128),
			l = r(14),
			p = r(23),
			m = r(8),
			h = r(129),
			d = r(85),
			v = r(114);
		e.exports = function(e, t, r) {
			var y = -1 !== e.indexOf("Map"),
				g = -1 !== e.indexOf("Weak"),
				x = y ? "set" : "add",
				b = i[e],
				w = b && b.prototype,
				N = b,
				M = {},
				E = function(e) {
					var t = a(w[e]);
					s(w, e, "add" == e ? function(e) {
						return t(this, 0 === e ? 0 : e), this
					} : "delete" == e ? function(e) {
						return !(g && !p(e)) && t(this, 0 === e ? 0 : e)
					} : "get" == e ? function(e) {
						return g && !p(e) ? void 0 : t(this, 0 === e ? 0 : e)
					} : "has" == e ? function(e) {
						return !(g && !p(e)) && t(this, 0 === e ? 0 : e)
					} : function(e, r) {
						return t(this, 0 === e ? 0 : e, r), this
					})
				};
			if (o(e, !l(b) || !(g || w.forEach && !m((function() {
					(new b).entries().next()
				}))))) N = r.getConstructor(t, e, y, x), u.enable();
			else if (o(e, !0)) {
				var S = new N,
					A = S[x](g ? {} : -0, 1) != S,
					O = m((function() {
						S.has(1)
					})),
					C = h((function(e) {
						new b(e)
					})),
					_ = !g && m((function() {
						for (var e = new b, t = 5; t--;) e[x](t, t);
						return !e.has(-0)
					}));
				C || ((N = t((function(e, t) {
					f(e, w);
					var r = v(new b, e, N);
					return null != t && c(t, r[x], {
						that: r,
						AS_ENTRIES: y
					}), r
				}))).prototype = w, w.constructor = N), (O || _) && (E("delete"), E("has"),
					y && E("get")), (_ || A) && E(x), g && w.clear && delete w.clear
			}
			return M[e] = N, n({
				global: !0,
				forced: N != b
			}, M), d(N, e), g || r.setStrong(N, e, y), N
		}
	}, function(e, t, r) {
		var n = r(6),
			i = r(9),
			a = r(77),
			o = r(23),
			s = r(26),
			u = r(19).f,
			c = r(68),
			f = r(169),
			l = r(218),
			p = r(91),
			m = r(220),
			h = !1,
			d = p("meta"),
			v = 0,
			y = function(e) {
				u(e, d, {
					value: {
						objectID: "O" + v++,
						weakData: {}
					}
				})
			},
			g = e.exports = {
				enable: function() {
					g.enable = function() {}, h = !0;
					var e = c.f,
						t = i([].splice),
						r = {};
					r[d] = 1, e(r).length && (c.f = function(r) {
						for (var n = e(r), i = 0, a = n.length; i < a; i++)
							if (n[i] === d) {
								t(n, i, 1);
								break
							} return n
					}, n({
						target: "Object",
						stat: !0,
						forced: !0
					}, {
						getOwnPropertyNames: f.f
					}))
				},
				fastKey: function(e, t) {
					if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" :
						"P") + e;
					if (!s(e, d)) {
						if (!l(e)) return "F";
						if (!t) return "E";
						y(e)
					}
					return e[d].objectID
				},
				getWeakData: function(e, t) {
					if (!s(e, d)) {
						if (!l(e)) return !0;
						if (!t) return !1;
						y(e)
					}
					return e[d].weakData
				},
				onFreeze: function(e) {
					return m && h && l(e) && !s(e, d) && y(e), e
				}
			};
		a[d] = !0
	}, function(e, t, r) {
		var n = r(43),
			i = r(40),
			a = r(68).f,
			o = r(121),
			s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object
			.getOwnPropertyNames(window) : [];
		e.exports.f = function(e) {
			return s && "Window" == n(e) ? function(e) {
				try {
					return a(e)
				} catch (e) {
					return o(s)
				}
			}(e) : a(i(e))
		}
	}, function(e, t, r) {
		var n = r(15),
			i = r(84),
			a = n("iterator"),
			o = Array.prototype;
		e.exports = function(e) {
			return void 0 !== e && (i.Array === e || o[a] === e)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(22),
			a = r(66),
			o = r(20),
			s = r(89),
			u = r(127),
			c = n.TypeError;
		e.exports = function(e, t) {
			var r = arguments.length < 2 ? u(e) : t;
			if (a(r)) return o(i(r, e));
			throw c(s(e) + " is not iterable")
		}
	}, function(e, t, r) {
		var n = r(22),
			i = r(20),
			a = r(65);
		e.exports = function(e, t, r) {
			var o, s;
			i(e);
			try {
				if (!(o = a(e, "return"))) {
					if ("throw" === t) throw r;
					return r
				}
				o = n(o, e)
			} catch (e) {
				s = !0, o = e
			}
			if ("throw" === t) throw r;
			if (s) throw o;
			return i(o), r
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(19).f,
			i = r(70),
			a = r(174),
			o = r(69),
			s = r(128),
			u = r(126),
			c = r(125),
			f = r(117),
			l = r(18),
			p = r(168).fastKey,
			m = r(44),
			h = m.set,
			d = m.getterFor;
		e.exports = {
			getConstructor: function(e, t, r, c) {
				var f = e((function(e, n) {
						s(e, m), h(e, {
							type: t,
							index: i(null),
							first: void 0,
							last: void 0,
							size: 0
						}), l || (e.size = 0), null != n && u(n, e[c], {
							that: e,
							AS_ENTRIES: r
						})
					})),
					m = f.prototype,
					v = d(t),
					y = function(e, t, r) {
						var n, i, a = v(e),
							o = g(e, t);
						return o ? o.value = r : (a.last = o = {
								index: i = p(t, !0),
								key: t,
								value: r,
								previous: n = a.last,
								next: void 0,
								removed: !1
							}, a.first || (a.first = o), n && (n.next = o), l ? a.size++
							: e.size++, "F" !== i && (a.index[i] = o)), e
					},
					g = function(e, t) {
						var r, n = v(e),
							i = p(t);
						if ("F" !== i) return n.index[i];
						for (r = n.first; r; r = r.next)
							if (r.key == t) return r
					};
				return a(m, {
					clear: function() {
						for (var e = v(this), t = e.index, r = e.first; r;) r
							.removed = !0, r.previous && (r.previous = r
								.previous.next = void 0), delete t[r.index], r =
							r.next;
						e.first = e.last = void 0, l ? e.size = 0 : this.size =
							0
					},
					delete: function(e) {
						var t = v(this),
							r = g(this, e);
						if (r) {
							var n = r.next,
								i = r.previous;
							delete t.index[r.index], r.removed = !0, i && (i
									.next = n), n && (n.previous = i), t
								.first == r && (t.first = n), t.last == r && (t
									.last = i), l ? t.size-- : this.size--
						}
						return !!r
					},
					forEach: function(e) {
						for (var t, r = v(this), n = o(e, arguments.length > 1 ?
								arguments[1] : void 0); t = t ? t.next : r
							.first;)
							for (n(t.value, t.key, this); t && t.removed;) t = t
								.previous
					},
					has: function(e) {
						return !!g(this, e)
					}
				}), a(m, r ? {
					get: function(e) {
						var t = g(this, e);
						return t && t.value
					},
					set: function(e, t) {
						return y(this, 0 === e ? 0 : e, t)
					}
				} : {
					add: function(e) {
						return y(this, e = 0 === e ? 0 : e, e)
					}
				}), l && n(m, "size", {
					get: function() {
						return v(this).size
					}
				}), f
			},
			setStrong: function(e, t, r) {
				var n = t + " Iterator",
					i = d(t),
					a = d(n);
				c(e, t, (function(e, t) {
					h(this, {
						type: n,
						target: e,
						state: i(e),
						kind: t,
						last: void 0
					})
				}), (function() {
					for (var e = a(this), t = e.kind, r = e.last; r && r
						.removed;) r = r.previous;
					return e.target && (e.last = r = r ? r.next : e.state
						.first) ? "keys" == t ? {
							value: r.key,
							done: !1
						} : "values" == t ? {
							value: r.value,
							done: !1
						} : {
							value: [r.key, r.value],
							done: !1
						} : (e.target = void 0, {
							value: void 0,
							done: !0
						})
				}), r ? "entries" : "values", !r, !0), f(t)
			}
		}
	}, function(e, t, r) {
		var n = r(36);
		e.exports = function(e, t, r) {
			for (var i in t) n(e, i, t[i], r);
			return e
		}
	}, function(e, t, r) {
		var n = r(15);
		t.f = n
	}, function(e, t, r) {
		var n = r(223),
			i = r(26),
			a = r(175),
			o = r(19).f;
		e.exports = function(e) {
			var t = n.Symbol || (n.Symbol = {});
			i(t, e) || o(t, e, {
				value: a.f(e)
			})
		}
	}, function(e, t, r) {
		var n, i, a, o, s = r(1),
			u = r(83),
			c = r(69),
			f = r(14),
			l = r(26),
			p = r(8),
			m = r(153),
			h = r(123),
			d = r(92),
			v = r(225),
			y = r(178),
			g = r(130),
			x = s.setImmediate,
			b = s.clearImmediate,
			w = s.process,
			N = s.Dispatch,
			M = s.Function,
			E = s.MessageChannel,
			S = s.String,
			A = 0,
			O = {};
		try {
			n = s.location
		} catch (e) {}
		var C = function(e) {
				if (l(O, e)) {
					var t = O[e];
					delete O[e], t()
				}
			},
			_ = function(e) {
				return function() {
					C(e)
				}
			},
			T = function(e) {
				C(e.data)
			},
			I = function(e) {
				s.postMessage(S(e), n.protocol + "//" + n.host)
			};
		x && b || (x = function(e) {
				v(arguments.length, 1);
				var t = f(e) ? e : M(e),
					r = h(arguments, 1);
				return O[++A] = function() {
					u(t, void 0, r)
				}, i(A), A
			}, b = function(e) {
				delete O[e]
			}, g ? i = function(e) {
				w.nextTick(_(e))
			} : N && N.now ? i = function(e) {
				N.now(_(e))
			} : E && !y ? (o = (a = new E).port2, a.port1.onmessage = T, i = c(o.postMessage,
				o)) : s.addEventListener && f(s.postMessage) && !s.importScripts && n &&
			"file:" !== n.protocol && !p(I) ? (i = I, s.addEventListener("message", T, !1)) :
			i = "onreadystatechange" in d("script") ? function(e) {
				m.appendChild(d("script")).onreadystatechange = function() {
					m.removeChild(this), C(e)
				}
			} : function(e) {
				setTimeout(_(e), 0)
			}), e.exports = {
			set: x,
			clear: b
		}
	}, function(e, t, r) {
		var n = r(59);
		e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
	}, function(e, t, r) {
		"use strict";
		var n = r(66),
			i = function(e) {
				var t, r;
				this.promise = new e((function(e, n) {
					if (void 0 !== t || void 0 !== r) throw TypeError(
						"Bad Promise constructor");
					t = e, r = n
				})), this.resolve = n(t), this.reject = n(r)
			};
		e.exports.f = function(e) {
			return new i(e)
		}
	}, function(e, t, r) {
		r(6)({
			target: "Number",
			stat: !0
		}, {
			isNaN: function(e) {
				return e != e
			}
		})
	}, function(e, t, r) {
		var n = r(182);
		e.exports = function(e, t) {
			if (e) {
				if ("string" == typeof e) return n(e, t);
				var r = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === r && e.constructor && (r = e.constructor.name), "Map" ===
					r || "Set" === r ? Array.from(e) : "Arguments" === r ||
					/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
			}
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		e.exports = function(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		"use strict";
		r(167)("Set", (function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}), r(173))
	}, function(e, t) {
		function r() {}
		r.prototype = {
			on: function(e, t, r) {
				var n = this.e || (this.e = {});
				return (n[e] || (n[e] = [])).push({
					fn: t,
					ctx: r
				}), this
			},
			once: function(e, t, r) {
				var n = this;

				function i() {
					n.off(e, i), t.apply(r, arguments)
				}
				return i._ = t, this.on(e, i, r)
			},
			emit: function(e) {
				for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[
						e] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[
					n].ctx, t);
				return this
			},
			off: function(e, t) {
				var r = this.e || (this.e = {}),
					n = r[e],
					i = [];
				if (n && t)
					for (var a = 0, o = n.length; a < o; a++) n[a].fn !== t && n[a].fn._ !==
						t && i.push(n[a]);
				return i.length ? r[e] = i : delete r[e], this
			}
		}, e.exports = r, e.exports.TinyEmitter = r
	}, function(e, t) {
		e.exports = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		function r(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n
					.writable = !0), Object.defineProperty(e, n.key, n)
			}
		}
		e.exports = function(e, t, n) {
			return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
				writable: !1
			}), e
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		"use strict";
		var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			},
			i = {
				"{": "\\{",
				"}": "\\}",
				"\\": "\\textbackslash{}",
				"#": "\\#",
				$: "\\$",
				"%": "\\%",
				"&": "\\&",
				"^": "\\textasciicircum{}",
				_: "\\_",
				"~": "\\textasciitilde{}"
			},
			a = {
				"–": "\\--",
				"—": "\\---",
				" ": "~",
				"\t": "\\qquad{}",
				"\r\n": "\\newline{}",
				"\n": "\\newline{}"
			},
			o = function(e, t) {
				return n({}, e, t)
			};
		e.exports = function(e) {
			for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = t.preserveFormatting, s = void 0 !== r && r, u = t.escapeMapFn, c =
					void 0 === u ? o : u, f = String(e), l = "", p = c(n({}, i), s ? n({}, a) :
					{}), m = Object.keys(p), h = function() {
						var e = !1;
						m.forEach((function(t, r) {
							e || f.length >= t.length && f.slice(0, t.length) ===
								t && (l += p[m[r]], f = f.slice(t.length, f.length),
									e = !0)
						})), e || (l += f.slice(0, 1), f = f.slice(1, f.length))
					}; f;) h();
			return l
		}
	}, function(e, t) {
		var r;
		r = function() {
			return this
		}();
		try {
			r = r || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (r = window)
		}
		e.exports = r
	}, function(e, t, r) {
		var n = r(1),
			i = r(22),
			a = r(14),
			o = r(23),
			s = n.TypeError;
		e.exports = function(e, t) {
			var r, n;
			if ("string" === t && a(r = e.toString) && !o(n = i(r, e))) return n;
			if (a(r = e.valueOf) && !o(n = i(r, e))) return n;
			if ("string" !== t && a(r = e.toString) && !o(n = i(r, e))) return n;
			throw s("Can't convert object to primitive value")
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(14),
			a = r(93),
			o = n.WeakMap;
		e.exports = i(o) && /native code/.test(a(o))
	}, function(e, t, r) {
		var n = r(40),
			i = r(79),
			a = r(45),
			o = function(e) {
				return function(t, r, o) {
					var s, u = n(t),
						c = a(u),
						f = i(o, c);
					if (e && r != r) {
						for (; c > f;)
							if ((s = u[f++]) != s) return !0
					} else
						for (; c > f; f++)
							if ((e || f in u) && u[f] === r) return e || f || 0;
					return !e && -1
				}
			};
		e.exports = {
			includes: o(!0),
			indexOf: o(!1)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(110),
			i = r(96);
		e.exports = n ? {}.toString : function() {
			return "[object " + i(this) + "]"
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(81).forEach,
			i = r(112)("forEach");
		e.exports = i ? [].forEach : function(e) {
			return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(97),
			a = r(98),
			o = r(23),
			s = r(15)("species"),
			u = n.Array;
		e.exports = function(e) {
			var t;
			return i(e) && (t = e.constructor, (a(t) && (t === u || i(t.prototype)) || o(t) &&
				null === (t = t[s])) && (t = void 0)), void 0 === t ? u : t
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(14),
			a = n.String,
			o = n.TypeError;
		e.exports = function(e) {
			if ("object" == typeof e || i(e)) return e;
			throw o("Can't set " + a(e) + " as a prototype")
		}
	}, function(e, t, r) {
		var n = r(1),
			i = r(98),
			a = r(89),
			o = n.TypeError;
		e.exports = function(e) {
			if (i(e)) return e;
			throw o(a(e) + " is not a constructor")
		}
	}, function(e, t, r) {
		var n = r(121),
			i = Math.floor,
			a = function(e, t) {
				var r = e.length,
					u = i(r / 2);
				return r < 8 ? o(e, t) : s(e, a(n(e, 0, u), t), a(n(e, u), t), t)
			},
			o = function(e, t) {
				for (var r, n, i = e.length, a = 1; a < i;) {
					for (n = a, r = e[a]; n && t(e[n - 1], r) > 0;) e[n] = e[--n];
					n !== a++ && (e[n] = r)
				}
				return e
			},
			s = function(e, t, r, n) {
				for (var i = t.length, a = r.length, o = 0, s = 0; o < i || s < a;) e[o + s] = o <
					i && s < a ? n(t[o], r[s]) <= 0 ? t[o++] : r[s++] : o < i ? t[o++] : r[s++];
				return e
			};
		e.exports = a
	}, function(e, t, r) {
		var n = r(59).match(/firefox\/(\d+)/i);
		e.exports = !!n && +n[1]
	}, function(e, t, r) {
		var n = r(59);
		e.exports = /MSIE|Trident/.test(n)
	}, function(e, t, r) {
		var n = r(59).match(/AppleWebKit\/(\d+)\./);
		e.exports = !!n && +n[1]
	}, function(e, t, r) {
		r(6)({
			target: "Math",
			stat: !0
		}, {
			sign: r(157)
		})
	}, function(e, t, r) {
		r(6)({
			target: "Math",
			stat: !0
		}, {
			log10: r(203)
		})
	}, function(e, t) {
		var r = Math.log,
			n = Math.LOG10E;
		e.exports = Math.log10 || function(e) {
			return r(e) * n
		}
	}, function(e, t, r) {
		r(6)({
			target: "Math",
			stat: !0
		}, {
			log1p: r(159)
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(157),
			a = Math.abs,
			o = Math.pow;
		n({
			target: "Math",
			stat: !0
		}, {
			cbrt: function(e) {
				return i(e = +e) * o(a(e), 1 / 3)
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(101);
		n({
			target: "Math",
			stat: !0,
			forced: i != Math.expm1
		}, {
			expm1: i
		})
	}, function(e, t, r) {
		var n = r(9),
			i = r(35),
			a = Math.floor,
			o = n("".charAt),
			s = n("".replace),
			u = n("".slice),
			c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
			f = /\$([$&'`]|\d{1,2})/g;
		e.exports = function(e, t, r, n, l, p) {
			var m = r + e.length,
				h = n.length,
				d = f;
			return void 0 !== l && (l = i(l), d = c), s(p, d, (function(i, s) {
				var c;
				switch (o(s, 0)) {
					case "$":
						return "$";
					case "&":
						return e;
					case "`":
						return u(t, 0, r);
					case "'":
						return u(t, m);
					case "<":
						c = l[u(s, 1, -1)];
						break;
					default:
						var f = +s;
						if (0 === f) return i;
						if (f > h) {
							var p = a(f / 10);
							return 0 === p ? i : p <= h ? void 0 === n[p - 1] ? o(s,
								1) : n[p - 1] + o(s, 1) : i
						}
						c = n[f - 1]
				}
				return void 0 === c ? "" : c
			}))
		}
	}, function(e, t, r) {
		r(6)({
			target: "Number",
			stat: !0
		}, {
			EPSILON: Math.pow(2, -52)
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(159),
			a = Math.acosh,
			o = Math.log,
			s = Math.sqrt,
			u = Math.LN2;
		n({
			target: "Math",
			stat: !0,
			forced: !a || 710 != Math.floor(a(Number.MAX_VALUE)) || a(1 / 0) != 1 / 0
		}, {
			acosh: function(e) {
				return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? o(e) + u : i(e - 1 +
					s(e - 1) * s(e + 1))
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = Math.asinh,
			a = Math.log,
			o = Math.sqrt;
		n({
			target: "Math",
			stat: !0,
			forced: !(i && 1 / i(0) > 0)
		}, {
			asinh: function e(t) {
				return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : a(t + o(t * t +
					1)) : t
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = Math.atanh,
			a = Math.log;
		n({
			target: "Math",
			stat: !0,
			forced: !(i && 1 / i(-0) < 0)
		}, {
			atanh: function(e) {
				return 0 == (e = +e) ? e : a((1 + e) / (1 - e)) / 2
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(101),
			a = Math.cosh,
			o = Math.abs,
			s = Math.E;
		n({
			target: "Math",
			stat: !0,
			forced: !a || a(710) === 1 / 0
		}, {
			cosh: function(e) {
				var t = i(o(e) - 1) + 1;
				return (t + 1 / (t * s * s)) * (s / 2)
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(8),
			a = r(101),
			o = Math.abs,
			s = Math.exp,
			u = Math.E;
		n({
			target: "Math",
			stat: !0,
			forced: i((function() {
				return -2e-17 != Math.sinh(-2e-17)
			}))
		}, {
			sinh: function(e) {
				return o(e = +e) < 1 ? (a(e) - a(-e)) / 2 : (s(e - 1) - s(-e - 1)) * (
					u / 2)
			}
		})
	}, function(e, t, r) {
		var n = r(6),
			i = r(101),
			a = Math.exp;
		n({
			target: "Math",
			stat: !0
		}, {
			tanh: function(e) {
				var t = i(e = +e),
					r = i(-e);
				return t == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (t - r) / (a(e) + a(-e))
			}
		})
	}, function(e, t, r) {
		var n = r(9),
			i = r(47),
			a = r(34),
			o = /"/g,
			s = n("".replace);
		e.exports = function(e, t, r, n) {
			var u = a(i(e)),
				c = "<" + t;
			return "" !== r && (c += " " + r + '="' + s(a(n), o, "&quot;") + '"'), c + ">" + u +
				"</" + t + ">"
		}
	}, function(e, t, r) {
		var n = r(8);
		e.exports = function(e) {
			return n((function() {
				var t = "" [e]('"');
				return t !== t.toLowerCase() || t.split('"').length > 3
			}))
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(165).IteratorPrototype,
			i = r(70),
			a = r(75),
			o = r(85),
			s = r(84),
			u = function() {
				return this
			};
		e.exports = function(e, t, r, c) {
			var f = t + " Iterator";
			return e.prototype = i(n, {
				next: a(+!c, r)
			}), o(e, f, !1, !0), s[f] = u, e
		}
	}, function(e, t, r) {
		var n = r(8),
			i = r(23),
			a = r(43),
			o = r(219),
			s = Object.isExtensible,
			u = n((function() {
				s(1)
			}));
		e.exports = u || o ? function(e) {
			return !!i(e) && ((!o || "ArrayBuffer" != a(e)) && (!s || s(e)))
		} : s
	}, function(e, t, r) {
		var n = r(8);
		e.exports = n((function() {
			if ("function" == typeof ArrayBuffer) {
				var e = new ArrayBuffer(8);
				Object.isExtensible(e) && Object.defineProperty(e, "a", {
					value: 8
				})
			}
		}))
	}, function(e, t, r) {
		var n = r(8);
		e.exports = !n((function() {
			return Object.isExtensible(Object.preventExtensions({}))
		}))
	}, function(e, t, r) {
		"use strict";
		var n = r(1),
			i = r(69),
			a = r(22),
			o = r(35),
			s = r(222),
			u = r(170),
			c = r(98),
			f = r(45),
			l = r(71),
			p = r(171),
			m = r(127),
			h = n.Array;
		e.exports = function(e) {
			var t = o(e),
				r = c(this),
				n = arguments.length,
				d = n > 1 ? arguments[1] : void 0,
				v = void 0 !== d;
			v && (d = i(d, n > 2 ? arguments[2] : void 0));
			var y, g, x, b, w, N, M = m(t),
				E = 0;
			if (!M || this == h && u(M))
				for (y = f(t), g = r ? new this(y) : h(y); y > E; E++) N = v ? d(t[E], E) : t[
					E], l(g, E, N);
			else
				for (w = (b = p(t, M)).next, g = r ? new this : []; !(x = a(w, b)).done; E++)
					N = v ? s(b, d, [x.value, E], !0) : x.value, l(g, E, N);
			return g.length = E, g
		}
	}, function(e, t, r) {
		var n = r(20),
			i = r(172);
		e.exports = function(e, t, r, a) {
			try {
				return a ? t(n(r)[0], r[1]) : t(r)
			} catch (t) {
				i(e, "throw", t)
			}
		}
	}, function(e, t, r) {
		var n = r(1);
		e.exports = n
	}, function(e, t, r) {
		var n = r(1);
		e.exports = n.Promise
	}, function(e, t, r) {
		var n = r(1).TypeError;
		e.exports = function(e, t) {
			if (e < t) throw n("Not enough arguments");
			return e
		}
	}, function(e, t, r) {
		var n, i, a, o, s, u, c, f, l = r(1),
			p = r(69),
			m = r(58).f,
			h = r(177).set,
			d = r(178),
			v = r(227),
			y = r(228),
			g = r(130),
			x = l.MutationObserver || l.WebKitMutationObserver,
			b = l.document,
			w = l.process,
			N = l.Promise,
			M = m(l, "queueMicrotask"),
			E = M && M.value;
		E || (n = function() {
			var e, t;
			for (g && (e = w.domain) && e.exit(); i;) {
				t = i.fn, i = i.next;
				try {
					t()
				} catch (e) {
					throw i ? o() : a = void 0, e
				}
			}
			a = void 0, e && e.enter()
		}, d || g || y || !x || !b ? !v && N && N.resolve ? ((c = N.resolve(void 0))
			.constructor = N, f = p(c.then, c), o = function() {
				f(n)
			}) : g ? o = function() {
			w.nextTick(n)
		} : (h = p(h, l), o = function() {
			h(n)
		}) : (s = !0, u = b.createTextNode(""), new x(n).observe(u, {
			characterData: !0
		}), o = function() {
			u.data = s = !s
		})), e.exports = E || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			a && (a.next = t), i || (i = t, o()), a = t
		}
	}, function(e, t, r) {
		var n = r(59),
			i = r(1);
		e.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== i.Pebble
	}, function(e, t, r) {
		var n = r(59);
		e.exports = /web0s(?!.*chrome)/i.test(n)
	}, function(e, t, r) {
		var n = r(20),
			i = r(23),
			a = r(179);
		e.exports = function(e, t) {
			if (n(e), i(t) && t.constructor === e) return t;
			var r = a.f(e);
			return (0, r.resolve)(t), r.promise
		}
	}, function(e, t, r) {
		var n = r(1);
		e.exports = function(e, t) {
			var r = n.console;
			r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t))
		}
	}, function(e, t) {
		e.exports = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (e) {
				return {
					error: !0,
					value: e
				}
			}
		}
	}, function(e, t) {
		var r = function() {
			this.head = null, this.tail = null
		};
		r.prototype = {
			add: function(e) {
				var t = {
					item: e,
					next: null
				};
				this.head ? this.tail.next = t : this.head = t, this.tail = t
			},
			get: function() {
				var e = this.head;
				if (e) return this.head = e.next, this.tail === e && (this.tail = null), e
					.item
			}
		}, e.exports = r
	}, function(e, t) {
		e.exports = "object" == typeof window
	}, function(e, t, r) {
		var n = function(e) {
			"use strict";
			var t = Object.prototype,
				r = t.hasOwnProperty,
				n = "function" == typeof Symbol ? Symbol : {},
				i = n.iterator || "@@iterator",
				a = n.asyncIterator || "@@asyncIterator",
				o = n.toStringTag || "@@toStringTag";

			function s(e, t, r) {
				return Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), e[t]
			}
			try {
				s({}, "")
			} catch (e) {
				s = function(e, t, r) {
					return e[t] = r
				}
			}

			function u(e, t, r, n) {
				var i = t && t.prototype instanceof l ? t : l,
					a = Object.create(i.prototype),
					o = new M(n || []);
				return a._invoke = function(e, t, r) {
					var n = "suspendedStart";
					return function(i, a) {
						if ("executing" === n) throw new Error(
							"Generator is already running");
						if ("completed" === n) {
							if ("throw" === i) throw a;
							return S()
						}
						for (r.method = i, r.arg = a;;) {
							var o = r.delegate;
							if (o) {
								var s = b(o, r);
								if (s) {
									if (s === f) continue;
									return s
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if ("suspendedStart" === n) throw n = "completed", r
								.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							n = "executing";
							var u = c(e, t, r);
							if ("normal" === u.type) {
								if (n = r.done ? "completed" : "suspendedYield", u
									.arg === f) continue;
								return {
									value: u.arg,
									done: r.done
								}
							}
							"throw" === u.type && (n = "completed", r.method = "throw",
								r.arg = u.arg)
						}
					}
				}(e, r, o), a
			}

			function c(e, t, r) {
				try {
					return {
						type: "normal",
						arg: e.call(t, r)
					}
				} catch (e) {
					return {
						type: "throw",
						arg: e
					}
				}
			}
			e.wrap = u;
			var f = {};

			function l() {}

			function p() {}

			function m() {}
			var h = {};
			s(h, i, (function() {
				return this
			}));
			var d = Object.getPrototypeOf,
				v = d && d(d(E([])));
			v && v !== t && r.call(v, i) && (h = v);
			var y = m.prototype = l.prototype = Object.create(h);

			function g(e) {
				["next", "throw", "return"].forEach((function(t) {
					s(e, t, (function(e) {
						return this._invoke(t, e)
					}))
				}))
			}

			function x(e, t) {
				var n;
				this._invoke = function(i, a) {
					function o() {
						return new t((function(n, o) {
							! function n(i, a, o, s) {
								var u = c(e[i], e, a);
								if ("throw" !== u.type) {
									var f = u.arg,
										l = f.value;
									return l && "object" == typeof l && r.call(
											l, "__await") ? t.resolve(l.__await)
										.then((function(e) {
											n("next", e, o, s)
										}), (function(e) {
											n("throw", e, o, s)
										})) : t.resolve(l).then((function(e) {
											f.value = e, o(f)
										}), (function(e) {
											return n("throw", e, o, s)
										}))
								}
								s(u.arg)
							}(i, a, n, o)
						}))
					}
					return n = n ? n.then(o, o) : o()
				}
			}

			function b(e, t) {
				var r = e.iterator[t.method];
				if (void 0 === r) {
					if (t.delegate = null, "throw" === t.method) {
						if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t),
								"throw" === t.method)) return f;
						t.method = "throw", t.arg = new TypeError(
							"The iterator does not provide a 'throw' method")
					}
					return f
				}
				var n = c(r, e.iterator, t.arg);
				if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate =
					null, f;
				var i = n.arg;
				return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !==
						t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) :
					i : (t.method = "throw", t.arg = new TypeError(
						"iterator result is not an object"), t.delegate = null, f)
			}

			function w(e) {
				var t = {
					tryLoc: e[0]
				};
				1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[
					3]), this.tryEntries.push(t)
			}

			function N(e) {
				var t = e.completion || {};
				t.type = "normal", delete t.arg, e.completion = t
			}

			function M(e) {
				this.tryEntries = [{
					tryLoc: "root"
				}], e.forEach(w, this), this.reset(!0)
			}

			function E(e) {
				if (e) {
					var t = e[i];
					if (t) return t.call(e);
					if ("function" == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var n = -1,
							a = function t() {
								for (; ++n < e.length;)
									if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
								return t.value = void 0, t.done = !0, t
							};
						return a.next = a
					}
				}
				return {
					next: S
				}
			}

			function S() {
				return {
					value: void 0,
					done: !0
				}
			}
			return p.prototype = m, s(y, "constructor", m), s(m, "constructor", p), p
				.displayName = s(m, o, "GeneratorFunction"), e.isGeneratorFunction = function(
				e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
				}, e.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ =
						m, s(e, o, "GeneratorFunction")), e.prototype = Object.create(y), e
				}, e.awrap = function(e) {
					return {
						__await: e
					}
				}, g(x.prototype), s(x.prototype, a, (function() {
					return this
				})), e.AsyncIterator = x, e.async = function(t, r, n, i, a) {
					void 0 === a && (a = Promise);
					var o = new x(u(t, r, n, i), a);
					return e.isGeneratorFunction(r) ? o : o.next().then((function(e) {
						return e.done ? e.value : o.next()
					}))
				}, g(y), s(y, o, "Generator"), s(y, i, (function() {
					return this
				})), s(y, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(e) {
					var t = [];
					for (var r in e) t.push(r);
					return t.reverse(),
						function r() {
							for (; t.length;) {
								var n = t.pop();
								if (n in e) return r.value = n, r.done = !1, r
							}
							return r.done = !0, r
						}
				}, e.values = E, M.prototype = {
					constructor: M,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0,
							this.done = !1, this.delegate = null, this.method = "next", this
							.arg = void 0, this.tryEntries.forEach(N), !e)
							for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !
								isNaN(+t.slice(1)) && (this[t] = void 0)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var t = this;

						function n(r, n) {
							return o.type = "throw", o.arg = e, t.next = r, n && (t.method =
								"next", t.arg = void 0), !!n
						}
						for (var i = this.tryEntries.length - 1; i >= 0; --i) {
							var a = this.tryEntries[i],
								o = a.completion;
							if ("root" === a.tryLoc) return n("end");
							if (a.tryLoc <= this.prev) {
								var s = r.call(a, "catchLoc"),
									u = r.call(a, "finallyLoc");
								if (s && u) {
									if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
									if (this.prev < a.finallyLoc) return n(a.finallyLoc)
								} else if (s) {
									if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
								} else {
									if (!u) throw new Error(
										"try statement without catch or finally");
									if (this.prev < a.finallyLoc) return n(a.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var i = this.tryEntries[n];
							if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this
								.prev < i.finallyLoc) {
								var a = i;
								break
							}
						}
						a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a
							.finallyLoc && (a = null);
						var o = a ? a.completion : {};
						return o.type = e, o.arg = t, a ? (this.method = "next", this.next =
							a.finallyLoc, f) : this.complete(o)
					},
					complete: function(e, t) {
						if ("throw" === e.type) throw e.arg;
						return "break" === e.type || "continue" === e.type ? this.next = e
							.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this
								.method = "return", this.next = "end") : "normal" === e
							.type && t && (this.next = t), f
					},
					finish: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var r = this.tryEntries[t];
							if (r.finallyLoc === e) return this.complete(r.completion, r
								.afterLoc), N(r), f
						}
					},
					catch: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var r = this.tryEntries[t];
							if (r.tryLoc === e) {
								var n = r.completion;
								if ("throw" === n.type) {
									var i = n.arg;
									N(r)
								}
								return i
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, r) {
						return this.delegate = {
							iterator: E(e),
							resultName: t,
							nextLoc: r
						}, "next" === this.method && (this.arg = void 0), f
					}
				}, e
		}(e.exports);
		try {
			regeneratorRuntime = n
		} catch (e) {
			"object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r",
				"regeneratorRuntime = r")(n)
		}
	}, function(e, t, r) {
		"use strict";
		var n = r(6),
			i = r(161).trim;
		n({
			target: "String",
			proto: !0,
			forced: r(236)("trim")
		}, {
			trim: function() {
				return i(this)
			}
		})
	}, function(e, t, r) {
		var n = r(78).PROPER,
			i = r(8),
			a = r(162);
		e.exports = function(e) {
			return i((function() {
				return !!a[e]() || "​᠎" !== "​᠎" [e]() || n && a[e].name !== e
			}))
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (Array.isArray(e)) return e
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		e.exports = function(e, t) {
			var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e[
				"@@iterator"];
			if (null != r) {
				var n, i, a = [],
					o = !0,
					s = !1;
				try {
					for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), !t || a
							.length !== t); o = !0);
				} catch (e) {
					s = !0, i = e
				} finally {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw i
					}
				}
				return a
			}
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		e.exports = function() {
			throw new TypeError(
				"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n = r(182);
		e.exports = function(e) {
			if (Array.isArray(e)) return n(e)
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		e.exports = function(e) {
			if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e[
					"@@iterator"]) return Array.from(e)
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t) {
		e.exports = function() {
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
		}, e.exports.__esModule = !0, e.exports.default = e.exports
	}, function(e, t, r) {
		var n = r(6),
			i = r(244),
			a = r(124);
		n({
			target: "Array",
			proto: !0
		}, {
			fill: i
		}), a("fill")
	}, function(e, t, r) {
		"use strict";
		var n = r(35),
			i = r(79),
			a = r(45);
		e.exports = function(e) {
			for (var t = n(this), r = a(t), o = arguments.length, s = i(o > 1 ? arguments[1] :
					void 0, r), u = o > 2 ? arguments[2] : void 0, c = void 0 === u ? r : i(
					u, r); c > s;) t[s++] = e;
			return t
		}
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t, r = this,
						n = (t = 4022871197, function(e) {
							e = String(e);
							for (var r = 0; r < e.length; r++) {
								var n = .02519603282416938 * (t += e.charCodeAt(r));
								n -= t = n >>> 0, t = (n *= t) >>> 0, t += 4294967296 * (
									n -= t)
							}
							return 2.3283064365386963e-10 * (t >>> 0)
						});
					r.next = function() {
							var e = 2091639 * r.s0 + 2.3283064365386963e-10 * r.c;
							return r.s0 = r.s1, r.s1 = r.s2, r.s2 = e - (r.c = 0 | e)
						}, r.c = 1, r.s0 = n(" "), r.s1 = n(" "), r.s2 = n(" "), r.s0 -= n(e), r
						.s0 < 0 && (r.s0 += 1), r.s1 -= n(e), r.s1 < 0 && (r.s1 += 1), r.s2 -=
						n(e), r.s2 < 0 && (r.s2 += 1), n = null
				}

				function s(e, t) {
					return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t
				}

				function u(e, t) {
					var r = new o(e),
						n = t && t.state,
						i = r.next;
					return i.int32 = function() {
						return 4294967296 * r.next() | 0
					}, i.double = function() {
						return i() + 11102230246251565e-32 * (2097152 * i() | 0)
					}, i.quick = i, n && ("object" == typeof n && s(n, r), i.state =
						function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.alea = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t = this,
						r = "";
					t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function() {
						var e = t.x ^ t.x << 11;
						return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^
							e >>> 8
					}, e === (0 | e) ? t.x = e : r += e;
					for (var n = 0; n < r.length + 64; n++) t.x ^= 0 | r.charCodeAt(n), t.next()
				}

				function s(e, t) {
					return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t
				}

				function u(e, t) {
					var r = new o(e),
						n = t && t.state,
						i = function() {
							return (r.next() >>> 0) / 4294967296
						};
					return i.double = function() {
						do {
							var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (
								1 << 21)
						} while (0 === e);
						return e
					}, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && s(n, r),
						i.state = function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.xor128 = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t = this,
						r = "";
					t.next = function() {
							var e = t.x ^ t.x >>> 2;
							return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d +
								362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0
						}, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (0 | e) ? t.x =
						e : r += e;
					for (var n = 0; n < r.length + 64; n++) t.x ^= 0 | r.charCodeAt(n), n == r
						.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next()
				}

				function s(e, t) {
					return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t
				}

				function u(e, t) {
					var r = new o(e),
						n = t && t.state,
						i = function() {
							return (r.next() >>> 0) / 4294967296
						};
					return i.double = function() {
						do {
							var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (
								1 << 21)
						} while (0 === e);
						return e
					}, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && s(n, r),
						i.state = function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.xorwow = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t = this;
					t.next = function() {
							var e, r, n = t.x,
								i = t.i;
							return e = n[i], r = (e ^= e >>> 7) ^ e << 24, r ^= (e = n[i + 1 &
								7]) ^ e >>> 10, r ^= (e = n[i + 3 & 7]) ^ e >>> 3, r ^= (e =
								n[i + 4 & 7]) ^ e << 7, e = n[i + 7 & 7], r ^= (e ^= e <<
								13) ^ e << 9, n[i] = r, t.i = i + 1 & 7, r
						},
						function(e, t) {
							var r, n = [];
							if (t === (0 | t)) n[0] = t;
							else
								for (t = "" + t, r = 0; r < t.length; ++r) n[7 & r] = n[7 &
									r] << 15 ^ t.charCodeAt(r) + n[r + 1 & 7] << 13;
							for (; n.length < 8;) n.push(0);
							for (r = 0; r < 8 && 0 === n[r]; ++r);
							for (8 == r ? n[7] = -1 : n[r], e.x = n, e.i = 0, r = 256; r > 0; --
								r) e.next()
						}(t, e)
				}

				function s(e, t) {
					return t.x = e.x.slice(), t.i = e.i, t
				}

				function u(e, t) {
					null == e && (e = +new Date);
					var r = new o(e),
						n = t && t.state,
						i = function() {
							return (r.next() >>> 0) / 4294967296
						};
					return i.double = function() {
						do {
							var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (
								1 << 21)
						} while (0 === e);
						return e
					}, i.int32 = r.next, i.quick = i, n && (n.x && s(n, r), i.state =
						function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.xorshift7 = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t = this;
					t.next = function() {
							var e, r, n = t.w,
								i = t.X,
								a = t.i;
							return t.w = n = n + 1640531527 | 0, r = i[a + 34 & 127], e = i[a =
									a + 1 & 127], r ^= r << 13, e ^= e << 17, r ^= r >>> 15,
								e ^= e >>> 12, r = i[a] = r ^ e, t.i = a, r + (n ^ n >>> 16) | 0
						},
						function(e, t) {
							var r, n, i, a, o, s = [],
								u = 128;
							for (t === (0 | t) ? (n = t, t = null) : (t += "\0", n = 0, u = Math
									.max(u, t.length)), i = 0, a = -32; a < u; ++a) t && (n ^= t
									.charCodeAt((a + 32) % t.length)), 0 === a && (o = n), n ^=
								n << 10, n ^= n >>> 15, n ^= n << 4, n ^= n >>> 13, a >= 0 && (
									o = o + 1640531527 | 0, i = 0 == (r = s[127 & a] ^= n + o) ?
									i + 1 : 0);
							for (i >= 128 && (s[127 & (t && t.length || 0)] = -1), i = 127, a =
								512; a > 0; --a) n = s[i + 34 & 127], r = s[i = i + 1 & 127],
								n ^= n << 13, r ^= r << 17, n ^= n >>> 15, r ^= r >>> 12, s[i] =
								n ^ r;
							e.w = o, e.X = s, e.i = i
						}(t, e)
				}

				function s(e, t) {
					return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t
				}

				function u(e, t) {
					null == e && (e = +new Date);
					var r = new o(e),
						n = t && t.state,
						i = function() {
							return (r.next() >>> 0) / 4294967296
						};
					return i.double = function() {
						do {
							var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (
								1 << 21)
						} while (0 === e);
						return e
					}, i.int32 = r.next, i.quick = i, n && (n.X && s(n, r), i.state =
						function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.xor4096 = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		(function(e) {
			var n;
			! function(e, i, a) {
				function o(e) {
					var t = this,
						r = "";
					t.next = function() {
							var e = t.b,
								r = t.c,
								n = t.d,
								i = t.a;
							return e = e << 25 ^ e >>> 7 ^ r, r = r - n | 0, n = n << 24 ^ n >>>
								8 ^ i, i = i - e | 0, t.b = e = e << 20 ^ e >>> 12 ^ r, t.c =
								r = r - n | 0, t.d = n << 16 ^ r >>> 16 ^ i, t.a = i - e | 0
						}, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math
						.floor(e) ? (t.a = e / 4294967296 | 0, t.b = 0 | e) : r += e;
					for (var n = 0; n < r.length + 20; n++) t.b ^= 0 | r.charCodeAt(n), t.next()
				}

				function s(e, t) {
					return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t
				}

				function u(e, t) {
					var r = new o(e),
						n = t && t.state,
						i = function() {
							return (r.next() >>> 0) / 4294967296
						};
					return i.double = function() {
						do {
							var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (
								1 << 21)
						} while (0 === e);
						return e
					}, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && s(n, r),
						i.state = function() {
							return s(r, {})
						}), i
				}
				i && i.exports ? i.exports = u : r(39) && r(74) ? void 0 === (n = function() {
					return u
				}.call(t, r, t, i)) || (i.exports = n) : this.tychei = u
			}(0, e, r(39))
		}).call(this, r(73)(e))
	}, function(e, t, r) {
		var n;
		! function(i, a, o) {
			var s, u = o.pow(256, 6),
				c = o.pow(2, 52),
				f = 2 * c;

			function l(e, t, r) {
				var n = [],
					l = h(function e(t, r) {
						var n, i = [],
							a = typeof t;
						if (r && "object" == a)
							for (n in t) try {
								i.push(e(t[n], r - 1))
							} catch (e) {}
						return i.length ? i : "string" == a ? t : t + "\0"
					}((t = 1 == t ? {
						entropy: !0
					} : t || {}).entropy ? [e, d(a)] : null == e ? function() {
						try {
							var e;
							return s && (e = s.randomBytes) ? e = e(256) : (e =
								new Uint8Array(256), (i.crypto || i.msCrypto)
								.getRandomValues(e)), d(e)
						} catch (e) {
							var t = i.navigator,
								r = t && t.plugins;
							return [+new Date, i, r, i.screen, d(a)]
						}
					}() : e, 3), n),
					v = new p(n),
					y = function() {
						for (var e = v.g(6), t = u, r = 0; e < c;) e = 256 * (e + r), t *= 256, r =
							v.g(1);
						for (; e >= f;) e /= 2, t /= 2, r >>>= 1;
						return (e + r) / t
					};
				return y.int32 = function() {
					return 0 | v.g(4)
				}, y.quick = function() {
					return v.g(4) / 4294967296
				}, y.double = y, h(d(v.S), a), (t.pass || r || function(e, t, r, n) {
					return n && (n.S && m(n, v), e.state = function() {
						return m(v, {})
					}), r ? (o.random = e, t) : e
				})(y, l, "global" in t ? t.global : this == o, t.state)
			}

			function p(e) {
				var t, r = e.length,
					n = this,
					i = 0,
					a = n.i = n.j = 0,
					o = n.S = [];
				for (r || (e = [r++]); i < 256;) o[i] = i++;
				for (i = 0; i < 256; i++) o[i] = o[a = 255 & a + e[i % r] + (t = o[i])], o[a] = t;
				(n.g = function(e) {
					for (var t, r = 0, i = n.i, a = n.j, o = n.S; e--;) t = o[i = 255 & i + 1],
						r = 256 * r + o[255 & (o[i] = o[a = 255 & a + t]) + (o[a] = t)];
					return n.i = i, n.j = a, r
				})(256)
			}

			function m(e, t) {
				return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
			}

			function h(e, t) {
				for (var r, n = e + "", i = 0; i < n.length;) t[255 & i] = 255 & (r ^= 19 * t[255 &
					i]) + n.charCodeAt(i++);
				return d(t)
			}

			function d(e) {
				return String.fromCharCode.apply(0, e)
			}
			if (h(o.random(), a), e.exports) {
				e.exports = l;
				try {
					s = r(252)
				} catch (e) {}
			} else void 0 === (n = function() {
				return l
			}.call(t, r, t, e)) || (e.exports = n)
		}("undefined" != typeof self ? self : this, [], Math)
	}, function(e, t) {}, function(e, t, r) {
		r(6)({
			target: "String",
			proto: !0
		}, {
			repeat: r(164)
		})
	}, function(e, t, r) {
		"use strict";
		r.r(t);
		var n = {};
		r.r(n), r.d(n, "createTyped", (function() {
			return bt
		})), r.d(n, "createResultSet", (function() {
			return Et
		})), r.d(n, "createBigNumberClass", (function() {
			return Ot
		})), r.d(n, "createComplexClass", (function() {
			return Tt
		})), r.d(n, "createFractionClass", (function() {
			return zt
		})), r.d(n, "createRangeClass", (function() {
			return Rt
		})), r.d(n, "createMatrixClass", (function() {
			return qt
		})), r.d(n, "createDenseMatrixClass", (function() {
			return Ft
		})), r.d(n, "createClone", (function() {
			return Ut
		})), r.d(n, "createIsInteger", (function() {
			return Wt
		})), r.d(n, "createIsNegative", (function() {
			return Kt
		})), r.d(n, "createIsNumeric", (function() {
			return er
		})), r.d(n, "createHasNumericValue", (function() {
			return tr
		})), r.d(n, "createIsPositive", (function() {
			return rr
		})), r.d(n, "createIsZero", (function() {
			return nr
		})), r.d(n, "createIsNaN", (function() {
			return ir
		})), r.d(n, "createTypeOf", (function() {
			return ar
		})), r.d(n, "createEqualScalar", (function() {
			return sr
		})), r.d(n, "createSparseMatrixClass", (function() {
			return ur
		})), r.d(n, "createNumber", (function() {
			return cr
		})), r.d(n, "createString", (function() {
			return fr
		})), r.d(n, "createBoolean", (function() {
			return lr
		})), r.d(n, "createBignumber", (function() {
			return pr
		})), r.d(n, "createComplex", (function() {
			return mr
		})), r.d(n, "createFraction", (function() {
			return hr
		})), r.d(n, "createMatrix", (function() {
			return dr
		})), r.d(n, "createMatrixFromFunction", (function() {
			return vr
		})), r.d(n, "createMatrixFromRows", (function() {
			return xr
		})), r.d(n, "createMatrixFromColumns", (function() {
			return Nr
		})), r.d(n, "createSplitUnit", (function() {
			return Mr
		})), r.d(n, "createUnaryMinus", (function() {
			return Zr
		})), r.d(n, "createUnaryPlus", (function() {
			return Wr
		})), r.d(n, "createAbs", (function() {
			return Yr
		})), r.d(n, "createApply", (function() {
			return Jr
		})), r.d(n, "createAddScalar", (function() {
			return Qr
		})), r.d(n, "createCbrt", (function() {
			return Kr
		})), r.d(n, "createCeil", (function() {
			return an
		})), r.d(n, "createCube", (function() {
			return on
		})), r.d(n, "createExp", (function() {
			return sn
		})), r.d(n, "createExpm1", (function() {
			return un
		})), r.d(n, "createFix", (function() {
			return cn
		})), r.d(n, "createFloor", (function() {
			return fn
		})), r.d(n, "createGcd", (function() {
			return dn
		})), r.d(n, "createLcm", (function() {
			return gn
		})), r.d(n, "createLog10", (function() {
			return xn
		})), r.d(n, "createLog2", (function() {
			return bn
		})), r.d(n, "createMod", (function() {
			return En
		})), r.d(n, "createMultiplyScalar", (function() {
			return Sn
		})), r.d(n, "createMultiply", (function() {
			return An
		})), r.d(n, "createNthRoot", (function() {
			return On
		})), r.d(n, "createSign", (function() {
			return Cn
		})), r.d(n, "createSqrt", (function() {
			return _n
		})), r.d(n, "createSquare", (function() {
			return Tn
		})), r.d(n, "createSubtract", (function() {
			return In
		})), r.d(n, "createXgcd", (function() {
			return zn
		})), r.d(n, "createInvmod", (function() {
			return Rn
		})), r.d(n, "createDotMultiply", (function() {
			return Bn
		})), r.d(n, "createBitAnd", (function() {
			return Kn
		})), r.d(n, "createBitNot", (function() {
			return ei
		})), r.d(n, "createBitOr", (function() {
			return ti
		})), r.d(n, "createBitXor", (function() {
			return ni
		})), r.d(n, "createArg", (function() {
			return ii
		})), r.d(n, "createConj", (function() {
			return ai
		})), r.d(n, "createIm", (function() {
			return oi
		})), r.d(n, "createRe", (function() {
			return si
		})), r.d(n, "createNot", (function() {
			return pi
		})), r.d(n, "createOr", (function() {
			return mi
		})), r.d(n, "createXor", (function() {
			return hi
		})), r.d(n, "createConcat", (function() {
			return di
		})), r.d(n, "createColumn", (function() {
			return yi
		})), r.d(n, "createCount", (function() {
			return gi
		})), r.d(n, "createCross", (function() {
			return xi
		})), r.d(n, "createDiag", (function() {
			return bi
		})), r.d(n, "createFilter", (function() {
			return Ei
		})), r.d(n, "createFlatten", (function() {
			return Ai
		})), r.d(n, "createForEach", (function() {
			return Oi
		})), r.d(n, "createGetMatrixDataType", (function() {
			return _i
		})), r.d(n, "createIdentity", (function() {
			return Ti
		})), r.d(n, "createKron", (function() {
			return Ii
		})), r.d(n, "createMap", (function() {
			return ki
		})), r.d(n, "createDiff", (function() {
			return Ri
		})), r.d(n, "createOnes", (function() {
			return qi
		})), r.d(n, "createRange", (function() {
			return Pi
		})), r.d(n, "createReshape", (function() {
			return Fi
		})), r.d(n, "createResize", (function() {
			return Li
		})), r.d(n, "createRotate", (function() {
			return $i
		})), r.d(n, "createRotationMatrix", (function() {
			return Hi
		})), r.d(n, "createRow", (function() {
			return Gi
		})), r.d(n, "createSize", (function() {
			return Vi
		})), r.d(n, "createSqueeze", (function() {
			return Zi
		})), r.d(n, "createSubset", (function() {
			return Wi
		})), r.d(n, "createTranspose", (function() {
			return Ki
		})), r.d(n, "createCtranspose", (function() {
			return ea
		})), r.d(n, "createZeros", (function() {
			return ta
		})), r.d(n, "createErf", (function() {
			return ra
		})), r.d(n, "createMode", (function() {
			return ua
		})), r.d(n, "createProd", (function() {
			return fa
		})), r.d(n, "createFormat", (function() {
			return la
		})), r.d(n, "createBin", (function() {
			return pa
		})), r.d(n, "createOct", (function() {
			return ma
		})), r.d(n, "createHex", (function() {
			return ha
		})), r.d(n, "createPrint", (function() {
			return da
		})), r.d(n, "createTo", (function() {
			return ya
		})), r.d(n, "createIsPrime", (function() {
			return ga
		})), r.d(n, "createNumeric", (function() {
			return xa
		})), r.d(n, "createDivideScalar", (function() {
			return ba
		})), r.d(n, "createPow", (function() {
			return wa
		})), r.d(n, "createRound", (function() {
			return Oa
		})), r.d(n, "createLog", (function() {
			return _a
		})), r.d(n, "createLog1p", (function() {
			return Ta
		})), r.d(n, "createNthRoots", (function() {
			return Ia
		})), r.d(n, "createDotPow", (function() {
			return ka
		})), r.d(n, "createDotDivide", (function() {
			return za
		})), r.d(n, "createLsolve", (function() {
			return qa
		})), r.d(n, "createUsolve", (function() {
			return Ba
		})), r.d(n, "createLsolveAll", (function() {
			return Pa
		})), r.d(n, "createUsolveAll", (function() {
			return Fa
		})), r.d(n, "createLeftShift", (function() {
			return La
		})), r.d(n, "createRightArithShift", (function() {
			return $a
		})), r.d(n, "createRightLogShift", (function() {
			return Ha
		})), r.d(n, "createAnd", (function() {
			return Ga
		})), r.d(n, "createCompare", (function() {
			return Va
		})), r.d(n, "createCompareNatural", (function() {
			return Ya
		})), r.d(n, "createCompareText", (function() {
			return Ja
		})), r.d(n, "createEqual", (function() {
			return Xa
		})), r.d(n, "createEqualText", (function() {
			return Qa
		})), r.d(n, "createSmaller", (function() {
			return Ka
		})), r.d(n, "createSmallerEq", (function() {
			return eo
		})), r.d(n, "createLarger", (function() {
			return to
		})), r.d(n, "createLargerEq", (function() {
			return ro
		})), r.d(n, "createDeepEqual", (function() {
			return no
		})), r.d(n, "createUnequal", (function() {
			return io
		})), r.d(n, "createPartitionSelect", (function() {
			return ao
		})), r.d(n, "createSort", (function() {
			return oo
		})), r.d(n, "createMax", (function() {
			return so
		})), r.d(n, "createMin", (function() {
			return uo
		})), r.d(n, "createImmutableDenseMatrixClass", (function() {
			return co
		})), r.d(n, "createIndexClass", (function() {
			return fo
		})), r.d(n, "createFibonacciHeapClass", (function() {
			return lo
		})), r.d(n, "createSpaClass", (function() {
			return po
		})), r.d(n, "createUnitClass", (function() {
			return Mo
		})), r.d(n, "createUnitFunction", (function() {
			return Eo
		})), r.d(n, "createSparse", (function() {
			return So
		})), r.d(n, "createCreateUnit", (function() {
			return Ao
		})), r.d(n, "createAcos", (function() {
			return Oo
		})), r.d(n, "createAcosh", (function() {
			return Ho
		})), r.d(n, "createAcot", (function() {
			return Go
		})), r.d(n, "createAcoth", (function() {
			return Vo
		})), r.d(n, "createAcsc", (function() {
			return Zo
		})), r.d(n, "createAcsch", (function() {
			return Wo
		})), r.d(n, "createAsec", (function() {
			return Yo
		})), r.d(n, "createAsech", (function() {
			return Jo
		})), r.d(n, "createAsin", (function() {
			return Xo
		})), r.d(n, "createAsinh", (function() {
			return Qo
		})), r.d(n, "createAtan", (function() {
			return Ko
		})), r.d(n, "createAtan2", (function() {
			return es
		})), r.d(n, "createAtanh", (function() {
			return ts
		})), r.d(n, "createCos", (function() {
			return rs
		})), r.d(n, "createCosh", (function() {
			return ns
		})), r.d(n, "createCot", (function() {
			return is
		})), r.d(n, "createCoth", (function() {
			return as
		})), r.d(n, "createCsc", (function() {
			return os
		})), r.d(n, "createCsch", (function() {
			return ss
		})), r.d(n, "createSec", (function() {
			return us
		})), r.d(n, "createSech", (function() {
			return cs
		})), r.d(n, "createSin", (function() {
			return fs
		})), r.d(n, "createSinh", (function() {
			return ls
		})), r.d(n, "createTan", (function() {
			return ps
		})), r.d(n, "createTanh", (function() {
			return ms
		})), r.d(n, "createSetCartesian", (function() {
			return hs
		})), r.d(n, "createSetDifference", (function() {
			return ds
		})), r.d(n, "createSetDistinct", (function() {
			return vs
		})), r.d(n, "createSetIntersect", (function() {
			return ys
		})), r.d(n, "createSetIsSubset", (function() {
			return gs
		})), r.d(n, "createSetMultiplicity", (function() {
			return xs
		})), r.d(n, "createSetPowerset", (function() {
			return bs
		})), r.d(n, "createSetSize", (function() {
			return ws
		})), r.d(n, "createSetSymDifference", (function() {
			return Ns
		})), r.d(n, "createSetUnion", (function() {
			return Ms
		})), r.d(n, "createAdd", (function() {
			return Es
		})), r.d(n, "createHypot", (function() {
			return Ss
		})), r.d(n, "createNorm", (function() {
			return As
		})), r.d(n, "createDot", (function() {
			return Os
		})), r.d(n, "createTrace", (function() {
			return Cs
		})), r.d(n, "createIndex", (function() {
			return _s
		})), r.d(n, "createNode", (function() {
			return Is
		})), r.d(n, "createAccessorNode", (function() {
			return Rs
		})), r.d(n, "createArrayNode", (function() {
			return qs
		})), r.d(n, "createAssignmentNode", (function() {
			return Fs
		})), r.d(n, "createBlockNode", (function() {
			return Us
		})), r.d(n, "createConditionalNode", (function() {
			return Ls
		})), r.d(n, "createConstantNode", (function() {
			return Xs
		})), r.d(n, "createFunctionAssignmentNode", (function() {
			return Qs
		})), r.d(n, "createIndexNode", (function() {
			return Ks
		})), r.d(n, "createObjectNode", (function() {
			return eu
		})), r.d(n, "createOperatorNode", (function() {
			return tu
		})), r.d(n, "createParenthesisNode", (function() {
			return ru
		})), r.d(n, "createRangeNode", (function() {
			return nu
		})), r.d(n, "createRelationalNode", (function() {
			return iu
		})), r.d(n, "createSymbolNode", (function() {
			return au
		})), r.d(n, "createFunctionNode", (function() {
			return su
		})), r.d(n, "createParse", (function() {
			return uu
		})), r.d(n, "createCompile", (function() {
			return cu
		})), r.d(n, "createEvaluate", (function() {
			return fu
		})), r.d(n, "createParserClass", (function() {
			return lu
		})), r.d(n, "createParser", (function() {
			return pu
		})), r.d(n, "createLup", (function() {
			return mu
		})), r.d(n, "createQr", (function() {
			return hu
		})), r.d(n, "createSlu", (function() {
			return Ou
		})), r.d(n, "createLusolve", (function() {
			return Tu
		})), r.d(n, "createHelpClass", (function() {
			return ku
		})), r.d(n, "createChainClass", (function() {
			return Ru
		})), r.d(n, "createHelp", (function() {
			return ju
		})), r.d(n, "createChain", (function() {
			return Pu
		})), r.d(n, "createDet", (function() {
			return Fu
		})), r.d(n, "createInv", (function() {
			return Uu
		})), r.d(n, "createEigs", (function() {
			return Gu
		})), r.d(n, "createExpm", (function() {
			return Vu
		})), r.d(n, "createSqrtm", (function() {
			return Zu
		})), r.d(n, "createDivide", (function() {
			return Wu
		})), r.d(n, "createDistance", (function() {
			return Yu
		})), r.d(n, "createIntersect", (function() {
			return Ju
		})), r.d(n, "createSum", (function() {
			return Xu
		})), r.d(n, "createMean", (function() {
			return Qu
		})), r.d(n, "createMedian", (function() {
			return Ku
		})), r.d(n, "createMad", (function() {
			return ec
		})), r.d(n, "createVariance", (function() {
			return tc
		})), r.d(n, "createQuantileSeq", (function() {
			return rc
		})), r.d(n, "createStd", (function() {
			return nc
		})), r.d(n, "createCombinations", (function() {
			return oc
		})), r.d(n, "createCombinationsWithRep", (function() {
			return uc
		})), r.d(n, "createGamma", (function() {
			return mc
		})), r.d(n, "createFactorial", (function() {
			return hc
		})), r.d(n, "createKldivergence", (function() {
			return dc
		})), r.d(n, "createMultinomial", (function() {
			return vc
		})), r.d(n, "createPermutations", (function() {
			return yc
		})), r.d(n, "createPickRandom", (function() {
			return Mc
		})), r.d(n, "createRandom", (function() {
			return Sc
		})), r.d(n, "createRandomInt", (function() {
			return Ac
		})), r.d(n, "createStirlingS2", (function() {
			return Oc
		})), r.d(n, "createBellNumbers", (function() {
			return Cc
		})), r.d(n, "createCatalan", (function() {
			return _c
		})), r.d(n, "createComposition", (function() {
			return Tc
		})), r.d(n, "createLeafCount", (function() {
			return Ic
		})), r.d(n, "createSimplify", (function() {
			return jc
		})), r.d(n, "createSimplifyCore", (function() {
			return Pc
		})), r.d(n, "createResolve", (function() {
			return Fc
		})), r.d(n, "createDerivative", (function() {
			return Uc
		})), r.d(n, "createRationalize", (function() {
			return Lc
		})), r.d(n, "createReviver", (function() {
			return $c
		})), r.d(n, "createReplacer", (function() {
			return Hc
		})), r.d(n, "createE", (function() {
			return tf
		})), r.d(n, "createUppercaseE", (function() {
			return pf
		})), r.d(n, "createFalse", (function() {
			return Yc
		})), r.d(n, "createI", (function() {
			return ff
		})), r.d(n, "createInfinity", (function() {
			return Xc
		})), r.d(n, "createLN10", (function() {
			return af
		})), r.d(n, "createLN2", (function() {
			return nf
		})), r.d(n, "createLOG10E", (function() {
			return sf
		})), r.d(n, "createLOG2E", (function() {
			return of
		})), r.d(n, "createNaN", (function() {
			return Qc
		})), r.d(n, "createNull", (function() {
			return Jc
		})), r.d(n, "createPhi", (function() {
			return rf
		})), r.d(n, "createPi", (function() {
			return Kc
		})), r.d(n, "createUppercasePi", (function() {
			return lf
		})), r.d(n, "createSQRT1_2", (function() {
			return uf
		})), r.d(n, "createSQRT2", (function() {
			return cf
		})), r.d(n, "createTau", (function() {
			return ef
		})), r.d(n, "createTrue", (function() {
			return Wc
		})), r.d(n, "createVersion", (function() {
			return mf
		})), r.d(n, "createAtomicMass", (function() {
			return Hf
		})), r.d(n, "createAvogadro", (function() {
			return Gf
		})), r.d(n, "createBohrMagneton", (function() {
			return Ef
		})), r.d(n, "createBohrRadius", (function() {
			return Tf
		})), r.d(n, "createBoltzmann", (function() {
			return Vf
		})), r.d(n, "createClassicalElectronRadius", (function() {
			return If
		})), r.d(n, "createConductanceQuantum", (function() {
			return Sf
		})), r.d(n, "createCoulomb", (function() {
			return Nf
		})), r.d(n, "createDeuteronMass", (function() {
			return Df
		})), r.d(n, "createEfimovFactor", (function() {
			return $f
		})), r.d(n, "createElectricConstant", (function() {
			return bf
		})), r.d(n, "createElectronMass", (function() {
			return kf
		})), r.d(n, "createElementaryCharge", (function() {
			return Mf
		})), r.d(n, "createFaraday", (function() {
			return Zf
		})), r.d(n, "createFermiCoupling", (function() {
			return zf
		})), r.d(n, "createFineStructure", (function() {
			return Rf
		})), r.d(n, "createFirstRadiation", (function() {
			return Wf
		})), r.d(n, "createGasConstant", (function() {
			return Jf
		})), r.d(n, "createGravitationConstant", (function() {
			return vf
		})), r.d(n, "createGravity", (function() {
			return al
		})), r.d(n, "createHartreeEnergy", (function() {
			return qf
		})), r.d(n, "createInverseConductanceQuantum", (function() {
			return Af
		})), r.d(n, "createKlitzing", (function() {
			return _f
		})), r.d(n, "createLoschmidt", (function() {
			return Yf
		})), r.d(n, "createMagneticConstant", (function() {
			return xf
		})), r.d(n, "createMagneticFluxQuantum", (function() {
			return Of
		})), r.d(n, "createMolarMass", (function() {
			return nl
		})), r.d(n, "createMolarMassC12", (function() {
			return il
		})), r.d(n, "createMolarPlanckConstant", (function() {
			return Xf
		})), r.d(n, "createMolarVolume", (function() {
			return Qf
		})), r.d(n, "createNeutronMass", (function() {
			return jf
		})), r.d(n, "createNuclearMagneton", (function() {
			return Cf
		})), r.d(n, "createPlanckCharge", (function() {
			return cl
		})), r.d(n, "createPlanckConstant", (function() {
			return yf
		})), r.d(n, "createPlanckLength", (function() {
			return ol
		})), r.d(n, "createPlanckMass", (function() {
			return sl
		})), r.d(n, "createPlanckTemperature", (function() {
			return fl
		})), r.d(n, "createPlanckTime", (function() {
			return ul
		})), r.d(n, "createProtonMass", (function() {
			return Bf
		})), r.d(n, "createQuantumOfCirculation", (function() {
			return Pf
		})), r.d(n, "createReducedPlanckConstant", (function() {
			return gf
		})), r.d(n, "createRydberg", (function() {
			return Ff
		})), r.d(n, "createSackurTetrode", (function() {
			return Kf
		})), r.d(n, "createSecondRadiation", (function() {
			return el
		})), r.d(n, "createSpeedOfLight", (function() {
			return df
		})), r.d(n, "createStefanBoltzmann", (function() {
			return tl
		})), r.d(n, "createThomsonCrossSection", (function() {
			return Uf
		})), r.d(n, "createVacuumImpedance", (function() {
			return wf
		})), r.d(n, "createWeakMixingAngle", (function() {
			return Lf
		})), r.d(n, "createWienDisplacement", (function() {
			return rl
		})), r.d(n, "createApplyTransform", (function() {
			return ml
		})), r.d(n, "createColumnTransform", (function() {
			return hl
		})), r.d(n, "createFilterTransform", (function() {
			return vl
		})), r.d(n, "createForEachTransform", (function() {
			return gl
		})), r.d(n, "createIndexTransform", (function() {
			return xl
		})), r.d(n, "createMapTransform", (function() {
			return bl
		})), r.d(n, "createMaxTransform", (function() {
			return Ml
		})), r.d(n, "createMeanTransform", (function() {
			return El
		})), r.d(n, "createMinTransform", (function() {
			return Sl
		})), r.d(n, "createRangeTransform", (function() {
			return Al
		})), r.d(n, "createRowTransform", (function() {
			return Ol
		})), r.d(n, "createSubsetTransform", (function() {
			return Cl
		})), r.d(n, "createConcatTransform", (function() {
			return _l
		})), r.d(n, "createDiffTransform", (function() {
			return Tl
		})), r.d(n, "createStdTransform", (function() {
			return Il
		})), r.d(n, "createSumTransform", (function() {
			return kl
		})), r.d(n, "createVarianceTransform", (function() {
			return zl
		}));
		r(30);
		var i = r(4),
			a = r.n(i);
		r(146), r(148), r(151), r(10), r(154), r(7);

		function o(e) {
			return "number" == typeof e
		}

		function s(e) {
			return !(!e || "object" !== a()(e) || "function" != typeof e.constructor) && (!0 === e
				.isBigNumber && "object" === a()(e.constructor.prototype) && !0 === e
				.constructor.prototype.isBigNumber || "function" == typeof e.constructor
				.isDecimal && !0 === e.constructor.isDecimal(e))
		}

		function u(e) {
			return e && "object" === a()(e) && !0 === Object.getPrototypeOf(e).isComplex || !1
		}

		function c(e) {
			return e && "object" === a()(e) && !0 === Object.getPrototypeOf(e).isFraction || !1
		}

		function f(e) {
			return e && !0 === e.constructor.prototype.isUnit || !1
		}

		function l(e) {
			return "string" == typeof e
		}
		var p = Array.isArray;

		function m(e) {
			return e && !0 === e.constructor.prototype.isMatrix || !1
		}

		function h(e) {
			return Array.isArray(e) || m(e)
		}

		function d(e) {
			return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1
		}

		function v(e) {
			return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1
		}

		function y(e) {
			return e && !0 === e.constructor.prototype.isRange || !1
		}

		function g(e) {
			return e && !0 === e.constructor.prototype.isIndex || !1
		}

		function x(e) {
			return "boolean" == typeof e
		}

		function b(e) {
			return e && !0 === e.constructor.prototype.isResultSet || !1
		}

		function w(e) {
			return e && !0 === e.constructor.prototype.isHelp || !1
		}

		function N(e) {
			return "function" == typeof e
		}

		function M(e) {
			return e instanceof Date
		}

		function E(e) {
			return e instanceof RegExp
		}

		function S(e) {
			return !(!e || "object" !== a()(e) || e.constructor !== Object || u(e) || c(e))
		}

		function A(e) {
			return null === e
		}

		function O(e) {
			return void 0 === e
		}

		function C(e) {
			return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1
		}

		function _(e) {
			return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1
		}

		function T(e) {
			return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1
		}

		function I(e) {
			return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1
		}

		function k(e) {
			return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1
		}

		function z(e) {
			return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1
		}

		function R(e) {
			return e && !0 === e.isFunctionAssignmentNode && !0 === e.constructor.prototype
				.isNode || !1
		}

		function q(e) {
			return e && !0 === e.isFunctionNode && !0 === e.constructor.prototype.isNode || !1
		}

		function B(e) {
			return e && !0 === e.isIndexNode && !0 === e.constructor.prototype.isNode || !1
		}

		function D(e) {
			return e && !0 === e.isNode && !0 === e.constructor.prototype.isNode || !1
		}

		function j(e) {
			return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1
		}

		function P(e) {
			return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1
		}

		function F(e) {
			return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1
		}

		function U(e) {
			return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1
		}

		function L(e) {
			return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1
		}

		function $(e) {
			return e && !0 === e.constructor.prototype.isChain || !1
		}

		function H(e) {
			var t = a()(e);
			return "object" === t ? null === e ? "null" : Array.isArray(e) ? "Array" :
				e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : s(e) ? "BigNumber" :
				u(e) ? "Complex" : c(e) ? "Fraction" : m(e) ? "Matrix" : f(e) ? "Unit" : g(e) ?
				"Index" : y(e) ? "Range" : b(e) ? "ResultSet" : D(e) ? e.type : $(e) ? "Chain" : w(
					e) ? "Help" : "Object" : "function" === t ? "Function" : t
		}
		var G = r(133),
			V = r.n(G);
		r(201), r(158), r(202), r(204), r(205), r(206), r(21), r(0), r(72), r(102), r(3), r(50), r(
			16), r(17), r(29), r(208), r(209), r(210), r(211), r(212), r(213), r(214);

		function Z(e) {
			return "boolean" == typeof e || !!isFinite(e) && e === Math.round(e)
		}
		var W = Math.sign || function(e) {
				return e > 0 ? 1 : e < 0 ? -1 : 0
			},
			Y = Math.log2 || function(e) {
				return Math.log(e) / Math.LN2
			},
			J = Math.log10 || function(e) {
				return Math.log(e) / Math.LN10
			},
			X = Math.log1p || function(e) {
				return Math.log(e + 1)
			},
			Q = Math.cbrt || function(e) {
				if (0 === e) return e;
				var t, r = e < 0;
				return r && (e = -e), t = isFinite(e) ? (e / ((t = Math.exp(Math.log(e) / 3)) * t) +
					2 * t) / 3 : e, r ? -t : t
			},
			K = Math.expm1 || function(e) {
				return e >= 2e-4 || e <= -2e-4 ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6
			};

		function ee(e, t, r) {
			var n = {
					2: "0b",
					8: "0o",
					16: "0x"
				} [t],
				i = "";
			if (r) {
				if (r < 1) throw new Error("size must be in greater than 0");
				if (!Z(r)) throw new Error("size must be an integer");
				if (e > Math.pow(2, r - 1) - 1 || e < -Math.pow(2, r - 1)) throw new Error(
					"Value must be in range [-2^".concat(r - 1, ", 2^").concat(r - 1, "-1]")
					);
				if (!Z(e)) throw new Error("Value must be an integer");
				e < 0 && (e += Math.pow(2, r)), i = "i".concat(r)
			}
			var a = "";
			return e < 0 && (e = -e, a = "-"), "".concat(a).concat(n).concat(e.toString(t)).concat(
				i)
		}

		function te(e, t) {
			if ("function" == typeof t) return t(e);
			if (e === 1 / 0) return "Infinity";
			if (e === -1 / 0) return "-Infinity";
			if (isNaN(e)) return "NaN";
			var r, n, i = "auto";
			if (t && (t.notation && (i = t.notation), o(t) ? r = t : o(t.precision) && (r = t
					.precision), t.wordSize && "number" != typeof(n = t.wordSize))) throw new Error(
				'Option "wordSize" must be a number');
			switch (i) {
				case "fixed":
					return ne(e, r);
				case "exponential":
					return ie(e, r);
				case "engineering":
					return function(e, t) {
						if (isNaN(e) || !isFinite(e)) return String(e);
						var r = ae(re(e), t),
							n = r.exponent,
							i = r.coefficients,
							a = n % 3 == 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3;
						if (o(t))
							for (; t > i.length || n - a + 1 > i.length;) i.push(0);
						else
							for (var s = Math.abs(n - a) - (i.length - 1), u = 0; u < s; u++) i
								.push(0);
						var c = Math.abs(n - a),
							f = 1;
						for (; c > 0;) f++, c--;
						var l = i.slice(f).join(""),
							p = o(t) && l.length || l.match(/[1-9]/) ? "." + l : "",
							m = i.slice(0, f).join("") + p + "e" + (n >= 0 ? "+" : "") + a
							.toString();
						return r.sign + m
					}(e, r);
				case "bin":
					return ee(e, 2, n);
				case "oct":
					return ee(e, 8, n);
				case "hex":
					return ee(e, 16, n);
				case "auto":
					return function(e, t, r) {
						if (isNaN(e) || !isFinite(e)) return String(e);
						var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
							i = r && void 0 !== r.upperExp ? r.upperExp : 5,
							a = re(e),
							o = t ? ae(a, t) : a;
						if (o.exponent < n || o.exponent >= i) return ie(e, t);
						var s = o.coefficients,
							u = o.exponent;
						s.length < t && (s = s.concat(oe(t - s.length))), s = s.concat(oe(u - s
								.length + 1 + (s.length < t ? t - s.length : 0))), s = oe(-u)
							.concat(s);
						var c = u > 0 ? u : 0;
						return c < s.length - 1 && s.splice(c + 1, 0, "."), o.sign + s.join("")
					}(e, r, t && t).replace(/((\.\d*?)(0+))($|e)/, (function() {
						var e = arguments[2],
							t = arguments[4];
						return "." !== e ? e + t : t
					}));
				default:
					throw new Error('Unknown notation "' + i +
						'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
			}
		}

		function re(e) {
			var t = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
			if (!t) throw new SyntaxError("Invalid number " + e);
			var r = t[1],
				n = t[2],
				i = parseFloat(t[4] || "0"),
				a = n.indexOf(".");
			i += -1 !== a ? a - 1 : n.length - 1;
			var o = n.replace(".", "").replace(/^0*/, (function(e) {
				return i -= e.length, ""
			})).replace(/0*$/, "").split("").map((function(e) {
				return parseInt(e)
			}));
			return 0 === o.length && (o.push(0), i++), {
				sign: r,
				coefficients: o,
				exponent: i
			}
		}

		function ne(e, t) {
			if (isNaN(e) || !isFinite(e)) return String(e);
			var r = re(e),
				n = "number" == typeof t ? ae(r, r.exponent + 1 + t) : r,
				i = n.coefficients,
				a = n.exponent + 1,
				o = a + (t || 0);
			return i.length < o && (i = i.concat(oe(o - i.length))), a < 0 && (i = oe(1 - a).concat(
					i), a = 1), a < i.length && i.splice(a, 0, 0 === a ? "0." : "."), n.sign + i
				.join("")
		}

		function ie(e, t) {
			if (isNaN(e) || !isFinite(e)) return String(e);
			var r = re(e),
				n = t ? ae(r, t) : r,
				i = n.coefficients,
				a = n.exponent;
			i.length < t && (i = i.concat(oe(t - i.length)));
			var o = i.shift();
			return n.sign + o + (i.length > 0 ? "." + i.join("") : "") + "e" + (a >= 0 ? "+" : "") +
				a
		}

		function ae(e, t) {
			for (var r = {
					sign: e.sign,
					coefficients: e.coefficients,
					exponent: e.exponent
				}, n = r.coefficients; t <= 0;) n.unshift(0), r.exponent++, t++;
			if (n.length > t && n.splice(t, n.length - t)[0] >= 5) {
				var i = t - 1;
				for (n[i]++; 10 === n[i];) n.pop(), 0 === i && (n.unshift(0), r.exponent++, i++), n[
					--i]++
			}
			return r
		}

		function oe(e) {
			for (var t = [], r = 0; r < e; r++) t.push(0);
			return t
		}
		var se = Number.EPSILON || 2220446049250313e-31;

		function ue(e, t, r) {
			if (null == r) return e === t;
			if (e === t) return !0;
			if (isNaN(e) || isNaN(t)) return !1;
			if (isFinite(e) && isFinite(t)) {
				var n = Math.abs(e - t);
				return n < se || n <= Math.max(Math.abs(e), Math.abs(t)) * r
			}
			return !1
		}
		var ce = Math.acosh || function(e) {
				return Math.log(Math.sqrt(e * e - 1) + e)
			},
			fe = Math.asinh || function(e) {
				return Math.log(Math.sqrt(e * e + 1) + e)
			},
			le = Math.atanh || function(e) {
				return Math.log((1 + e) / (1 - e)) / 2
			},
			pe = Math.cosh || function(e) {
				return (Math.exp(e) + Math.exp(-e)) / 2
			},
			me = Math.sinh || function(e) {
				return (Math.exp(e) - Math.exp(-e)) / 2
			},
			he = Math.tanh || function(e) {
				var t = Math.exp(2 * e);
				return (t - 1) / (t + 1)
			};
		r(41), r(5), r(12), r(37), r(46), r(28), r(103), r(163);

		function de(e, t, r) {
			var n = new(0, e.constructor)(2),
				i = "";
			if (r) {
				if (r < 1) throw new Error("size must be in greater than 0");
				if (!Z(r)) throw new Error("size must be an integer");
				if (e.greaterThan(n.pow(r - 1).sub(1)) || e.lessThan(n.pow(r - 1).mul(-1)))
				throw new Error("Value must be in range [-2^".concat(r - 1, ", 2^").concat(r -
						1, "-1]"));
				if (!e.isInteger()) throw new Error("Value must be an integer");
				e.lessThan(0) && (e = e.add(n.pow(r))), i = "i".concat(r)
			}
			switch (t) {
				case 2:
					return "".concat(e.toBinary()).concat(i);
				case 8:
					return "".concat(e.toOctal()).concat(i);
				case 16:
					return "".concat(e.toHexadecimal()).concat(i);
				default:
					throw new Error("Base ".concat(t, " not supported "))
			}
		}

		function ve(e, t) {
			if ("function" == typeof t) return t(e);
			if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
			var r, n, i = "auto";
			if (void 0 !== t && (t.notation && (i = t.notation), "number" == typeof t ? r = t : t
					.precision && (r = t.precision), t.wordSize && "number" != typeof(n = t
						.wordSize))) throw new Error('Option "wordSize" must be a number');
			switch (i) {
				case "fixed":
					return function(e, t) {
						return e.toFixed(t)
					}(e, r);
				case "exponential":
					return ye(e, r);
				case "engineering":
					return function(e, t) {
						var r = e.e,
							n = r % 3 == 0 ? r : r < 0 ? r - 3 - r % 3 : r - r % 3,
							i = e.mul(Math.pow(10, -n)),
							a = i.toPrecision(t); - 1 !== a.indexOf("e") && (a = i.toString());
						return a + "e" + (r >= 0 ? "+" : "") + n.toString()
					}(e, r);
				case "bin":
					return de(e, 2, n);
				case "oct":
					return de(e, 8, n);
				case "hex":
					return de(e, 16, n);
				case "auto":
					var a = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
						o = t && void 0 !== t.upperExp ? t.upperExp : 5;
					if (e.isZero()) return "0";
					var s = e.toSignificantDigits(r),
						u = s.e;
					return (u >= a && u < o ? s.toFixed() : ye(e, r)).replace(/((\.\d*?)(0+))($|e)/,
						(function() {
							var e = arguments[2],
								t = arguments[4];
							return "." !== e ? e + t : t
						}));
				default:
					throw new Error('Unknown notation "' + i +
						'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
			}
		}

		function ye(e, t) {
			return void 0 !== t ? e.toExponential(t - 1) : e.toExponential()
		}

		function ge(e, t) {
			var r = e.length - t.length,
				n = e.length;
			return e.substring(r, n) === t
		}

		function xe(e, t) {
			return "number" == typeof e ? te(e, t) : s(e) ? ve(e, t) : function(e) {
					return e && "object" === a()(e) && "number" == typeof e.s && "number" ==
						typeof e.n && "number" == typeof e.d || !1
				}(e) ? t && "decimal" === t.fraction ? e.toString() : e.s * e.n + "/" + e.d : Array
				.isArray(e) ? function e(t, r) {
					if (Array.isArray(t)) {
						for (var n = "[", i = t.length, a = 0; a < i; a++) 0 !== a && (n += ", "),
							n += e(t[a], r);
						return n += "]"
					}
					return xe(t, r)
				}(e, t) : l(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? String(e
					.syntax) : "function" : e && "object" === a()(e) ? "function" == typeof e
				.format ? e.format(t) : e && e.toString(t) !== {}.toString() ? e.toString(t) : "{" +
				Object.keys(e).map((function(r) {
					return '"' + r + '": ' + xe(e[r], t)
				})).join(", ") + "}" : String(e)
		}

		function be(e) {
			for (var t = String(e), r = "", n = 0; n < t.length;) {
				var i = t.charAt(n);
				"\\" === i ? (r += i, n++, "" !== (i = t.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(
					i) || (r += "\\"), r += i) : r += '"' === i ? '\\"' : i, n++
			}
			return '"' + r + '"'
		}

		function we(e) {
			var t = String(e);
			return t = t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
				.replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}

		function Ne(e, t) {
			if (!l(e)) throw new TypeError(
				"Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " +
				H(e) + ", index: 0)");
			if (!l(t)) throw new TypeError(
				"Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " +
				H(t) + ", index: 1)");
			return e === t ? 0 : e > t ? 1 : -1
		}

		function Me(e, t, r) {
			if (!(this instanceof Me)) throw new SyntaxError(
				"Constructor must be called with the new operator");
			this.actual = e, this.expected = t, this.relation = r, this.message =
				"Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (
					this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" :
				t) + ")", this.stack = (new Error).stack
		}

		function Ee(e, t, r) {
			if (!(this instanceof Ee)) throw new SyntaxError(
				"Constructor must be called with the new operator");
			this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t,
					this.max = r), void 0 !== this.min && this.index < this.min ? this.message =
				"Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this
				.max && this.index >= this.max ? this.message = "Index out of range (" + this
				.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this
				.index + ")", this.stack = (new Error).stack
		}

		function Se(e) {
			for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0];
			return t
		}

		function Ae(e, t) {
			if (0 === t.length) {
				if (Array.isArray(e)) throw new Me(e.length, 0)
			} else ! function e(t, r, n) {
				var i, a = t.length;
				if (a !== r[n]) throw new Me(a, r[n]);
				if (n < r.length - 1) {
					var o = n + 1;
					for (i = 0; i < a; i++) {
						var s = t[i];
						if (!Array.isArray(s)) throw new Me(r.length - 1, r.length, "<");
						e(t[i], r, o)
					}
				} else
					for (i = 0; i < a; i++)
						if (Array.isArray(t[i])) throw new Me(r.length + 1, r.length, ">")
			}(e, t, 0)
		}

		function Oe(e, t) {
			if (!o(e) || !Z(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
			if (e < 0 || "number" == typeof t && e >= t) throw new Ee(e, t)
		}

		function Ce(e, t, r) {
			if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
			if (0 === t.length) throw new Error("Resizing to scalar is not supported");
			return t.forEach((function(e) {
					if (!o(e) || !Z(e) || e < 0) throw new TypeError(
						"Invalid size, must contain positive integers (size: " + xe(
							t) + ")")
				})),
				function e(t, r, n, i) {
					var a, o, s = t.length,
						u = r[n],
						c = Math.min(s, u);
					if (t.length = u, n < r.length - 1) {
						var f = n + 1;
						for (a = 0; a < c; a++) o = t[a], Array.isArray(o) || (o = [o], t[a] = o),
							e(o, r, f, i);
						for (a = c; a < u; a++) o = [], t[a] = o, e(o, r, f, i)
					} else {
						for (a = 0; a < c; a++)
							for (; Array.isArray(t[a]);) t[a] = t[a][0];
						for (a = c; a < u; a++) t[a] = i
					}
				}(e, t, 0, void 0 !== r ? r : 0), e
		}

		function _e(e, t) {
			var r = Re(e),
				n = r.length;
			if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
			if (0 === t.length) throw new Me(0, n, "!=");
			var i = Ie(t = Te(t, n));
			if (n !== i) throw new Me(i, n, "!=");
			try {
				return function(e, t) {
					for (var r, n = e, i = t.length - 1; i > 0; i--) {
						var a = t[i];
						r = [];
						for (var o = n.length / a, s = 0; s < o; s++) r.push(n.slice(s * a, (s +
							1) * a));
						n = r
					}
					return n
				}(r, t)
			} catch (e) {
				if (e instanceof Me) throw new Me(i, n, "!=");
				throw e
			}
		}

		function Te(e, t) {
			var r = Ie(e),
				n = e.slice(),
				i = e.indexOf(-1);
			if (e.indexOf(-1, i + 1) >= 0) throw new Error("More than one wildcard in sizes");
			if (i >= 0) {
				if (!(t % r == 0)) throw new Error("Could not replace wildcard, since " + t +
					" is no multiple of " + -r);
				n[i] = -t / r
			}
			return n
		}

		function Ie(e) {
			return e.reduce((function(e, t) {
				return e * t
			}), 1)
		}

		function ke(e, t) {
			for (var r = t || Se(e); Array.isArray(e) && 1 === e.length;) e = e[0], r.shift();
			for (var n = r.length; 1 === r[n - 1];) n--;
			return n < r.length && (e = function e(t, r, n) {
				var i, a;
				if (n < r) {
					var o = n + 1;
					for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, o)
				} else
					for (; Array.isArray(t);) t = t[0];
				return t
			}(e, n, 0), r.length = n), e
		}

		function ze(e, t, r, n) {
			var i = n || Se(e);
			if (r)
				for (var a = 0; a < r; a++) e = [e], i.unshift(1);
			for (e = function e(t, r, n) {
					var i, a;
					if (Array.isArray(t)) {
						var o = n + 1;
						for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, o)
					} else
						for (var s = n; s < r; s++) t = [t];
					return t
				}(e, t, 0); i.length < t;) i.push(1);
			return e
		}

		function Re(e) {
			if (!Array.isArray(e)) return e;
			var t = [];
			return e.forEach((function e(r) {
				Array.isArray(r) ? r.forEach(e) : t.push(r)
			})), t
		}

		function qe(e, t) {
			return Array.prototype.map.call(e, t)
		}

		function Be(e, t) {
			Array.prototype.forEach.call(e, t)
		}

		function De(e, t) {
			if (1 !== Se(e).length) throw new Error("Only one dimensional matrices supported");
			return Array.prototype.filter.call(e, t)
		}

		function je(e, t) {
			if (1 !== Se(e).length) throw new Error("Only one dimensional matrices supported");
			return Array.prototype.filter.call(e, (function(e) {
				return t.test(e)
			}))
		}

		function Pe(e, t) {
			return Array.prototype.join.call(e, t)
		}

		function Fe(e) {
			if (!Array.isArray(e)) throw new TypeError("Array input expected");
			if (0 === e.length) return e;
			var t = [],
				r = 0;
			t[0] = {
				value: e[0],
				identifier: 0
			};
			for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? r++ : r = 0, t.push({
				value: e[n],
				identifier: r
			});
			return t
		}

		function Ue(e) {
			if (!Array.isArray(e)) throw new TypeError("Array input expected");
			if (0 === e.length) return e;
			for (var t = [], r = 0; r < e.length; r++) t.push(e[r].value);
			return t
		}

		function Le(e, t) {
			for (var r, n = 0, i = 0; i < e.length; i++) {
				var a = e[i],
					o = Array.isArray(a);
				if (0 === i && o && (n = a.length), o && a.length !== n) return;
				var s = o ? Le(a, t) : t(a);
				if (void 0 === r) r = s;
				else if (r !== s) return "mixed"
			}
			return r
		}

		function $e(e, t) {
			return -1 !== e.indexOf(t)
		}

		function He(e) {
			var t = a()(e);
			if ("number" === t || "string" === t || "boolean" === t || null == e) return e;
			if ("function" == typeof e.clone) return e.clone();
			if (Array.isArray(e)) return e.map((function(e) {
				return He(e)
			}));
			if (e instanceof Date) return new Date(e.valueOf());
			if (s(e)) return e;
			if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
			return Ge(e, He)
		}

		function Ge(e, t) {
			var r = {};
			for (var n in e) Je(e, n) && (r[n] = t(e[n]));
			return r
		}

		function Ve(e, t) {
			for (var r in t) Je(t, r) && (e[r] = t[r]);
			return e
		}

		function Ze(e, t) {
			var r, n, i;
			if (Array.isArray(e)) {
				if (!Array.isArray(t)) return !1;
				if (e.length !== t.length) return !1;
				for (n = 0, i = e.length; n < i; n++)
					if (!Ze(e[n], t[n])) return !1;
				return !0
			}
			if ("function" == typeof e) return e === t;
			if (e instanceof Object) {
				if (Array.isArray(t) || !(t instanceof Object)) return !1;
				for (r in e)
					if (!(r in t) || !Ze(e[r], t[r])) return !1;
				for (r in t)
					if (!(r in e)) return !1;
				return !0
			}
			return e === t
		}

		function We(e) {
			var t = {};
			return function e(t, r) {
				for (var n in t)
					if (Je(t, n)) {
						var i = t[n];
						"object" === a()(i) && null !== i ? e(i, r) : r[n] = i
					}
			}(e, t), t
		}

		function Ye(e, t, r) {
			var n, i = !0;
			Object.defineProperty(e, t, {
				get: function() {
					return i && (n = r(), i = !1), n
				},
				set: function(e) {
					n = e, i = !1
				},
				configurable: !0,
				enumerable: !0
			})
		}

		function Je(e, t) {
			return e && Object.hasOwnProperty.call(e, t)
		}

		function Xe(e) {
			return Object.keys(e).map((function(t) {
				return e[t]
			}))
		}

		function Qe(e, t, r, n) {
			function i(n) {
				var i = function(e, t) {
					for (var r = {}, n = 0; n < t.length; n++) {
						var i = t[n],
							a = e[i];
						void 0 !== a && (r[i] = a)
					}
					return r
				}(n, t.map(et));
				return function(e, t, r) {
					if (!t.filter((function(e) {
							return ! function(e) {
								return e && "?" === e[0]
							}(e)
						})).every((function(e) {
							return void 0 !== r[e]
						}))) {
						var n = t.filter((function(e) {
							return void 0 === r[e]
						}));
						throw new Error('Cannot create function "'.concat(e, '", ') +
							"some dependencies are missing: ".concat(n.map((function(e) {
								return '"'.concat(e, '"')
							})).join(", "), "."))
					}
				}(e, t, n), r(i)
			}
			return i.isFactory = !0, i.fn = e, i.dependencies = t.slice().sort(), n && (i.meta = n),
				i
		}

		function Ke(e) {
			return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e
				.dependencies)
		}

		function et(e) {
			return e && "?" === e[0] ? e.slice(1) : e
		}
		Me.prototype = new RangeError, Me.prototype.constructor = RangeError, Me.prototype.name =
			"DimensionError", Me.prototype.isDimensionError = !0, Ee.prototype = new RangeError, Ee
			.prototype.constructor = RangeError, Ee.prototype.name = "IndexError", Ee.prototype
			.isIndexError = !0;
		var tt = r(185),
			rt = r.n(tt),
			nt = r(186),
			it = r.n(nt);
		r(27), r(166), r(42), r(31), r(61), r(38), r(51), r(54);

		function at(e, t) {
			if (ct(e) && st(e, t)) return e[t];
			if ("function" == typeof e[t] && ut(e, t)) throw new Error('Cannot access method "' +
				t + '" as a property');
			throw new Error('No access to property "' + t + '"')
		}

		function ot(e, t, r) {
			if (ct(e) && st(e, t)) return e[t] = r, r;
			throw new Error('No access to property "' + t + '"')
		}

		function st(e, t) {
			return !(!e || "object" !== a()(e)) && (!!Je(ft, t) || !(t in Object.prototype) && !(
				t in Function.prototype))
		}

		function ut(e, t) {
			return null != e && "function" == typeof e[t] && (!(Je(e, t) && Object.getPrototypeOf &&
				t in Object.getPrototypeOf(e)) && (!!Je(lt, t) || !(t in Object
				.prototype) && !(t in Function.prototype)))
		}

		function ct(e) {
			return "object" === a()(e) && e && e.constructor === Object
		}
		var ft = {
				length: !0,
				name: !0
			},
			lt = {
				toString: !0,
				valueOf: !0,
				toLocaleString: !0
			};

		function pt(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return mt(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return mt(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function mt(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		var ht = function() {
			function e(t) {
				rt()(this, e), this.wrappedObject = t
			}
			return it()(e, [{
				key: "keys",
				value: function() {
					return Object.keys(this.wrappedObject)
				}
			}, {
				key: "get",
				value: function(e) {
					return at(this.wrappedObject, e)
				}
			}, {
				key: "set",
				value: function(e, t) {
					return ot(this.wrappedObject, e, t), this
				}
			}, {
				key: "has",
				value: function(e) {
					return t = this.wrappedObject, e in t;
					var t
				}
			}]), e
		}();

		function dt() {
			return new Map
		}

		function vt(e) {
			if (!e) return dt();
			if (yt(e)) return e;
			if (S(e)) return new ht(e);
			throw new Error("createMap can create maps from objects or Maps")
		}

		function yt(e) {
			return !!e && (e instanceof Map || e instanceof ht || "function" == typeof e.set &&
				"function" == typeof e.get && "function" == typeof e.keys && "function" ==
				typeof e.has)
		}

		function gt(e) {
			for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[
				n - 1] = arguments[n];
			for (var i = 0, a = r; i < a.length; i++) {
				var o = a[i];
				if (o)
					if (yt(o)) {
						var s, u = pt(o.keys());
						try {
							for (u.s(); !(s = u.n()).done;) {
								var c = s.value;
								e.set(c, o.get(c))
							}
						} catch (e) {
							u.e(e)
						} finally {
							u.f()
						}
					} else if (S(o))
					for (var f = 0, l = Object.keys(o); f < l.length; f++) {
						var p = l[f];
						e.set(p, o[p])
					}
			}
			return e
		}
		var xt = function() {
				return xt = V.a.create, V.a
			},
			bt = Qe("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], (function(e) {
				var t = e.BigNumber,
					r = e.Complex,
					n = e.DenseMatrix,
					i = e.Fraction,
					a = xt();
				return a.types = [{
					name: "number",
					test: o
				}, {
					name: "Complex",
					test: u
				}, {
					name: "BigNumber",
					test: s
				}, {
					name: "Fraction",
					test: c
				}, {
					name: "Unit",
					test: f
				}, {
					name: "string",
					test: l
				}, {
					name: "Chain",
					test: $
				}, {
					name: "Array",
					test: p
				}, {
					name: "Matrix",
					test: m
				}, {
					name: "DenseMatrix",
					test: d
				}, {
					name: "SparseMatrix",
					test: v
				}, {
					name: "Range",
					test: y
				}, {
					name: "Index",
					test: g
				}, {
					name: "boolean",
					test: x
				}, {
					name: "ResultSet",
					test: b
				}, {
					name: "Help",
					test: w
				}, {
					name: "function",
					test: N
				}, {
					name: "Date",
					test: M
				}, {
					name: "RegExp",
					test: E
				}, {
					name: "null",
					test: A
				}, {
					name: "undefined",
					test: O
				}, {
					name: "AccessorNode",
					test: C
				}, {
					name: "ArrayNode",
					test: _
				}, {
					name: "AssignmentNode",
					test: T
				}, {
					name: "BlockNode",
					test: I
				}, {
					name: "ConditionalNode",
					test: k
				}, {
					name: "ConstantNode",
					test: z
				}, {
					name: "FunctionNode",
					test: q
				}, {
					name: "FunctionAssignmentNode",
					test: R
				}, {
					name: "IndexNode",
					test: B
				}, {
					name: "Node",
					test: D
				}, {
					name: "ObjectNode",
					test: j
				}, {
					name: "OperatorNode",
					test: P
				}, {
					name: "ParenthesisNode",
					test: F
				}, {
					name: "RangeNode",
					test: U
				}, {
					name: "SymbolNode",
					test: L
				}, {
					name: "Map",
					test: yt
				}, {
					name: "Object",
					test: S
				}], a.conversions = [{
					from: "number",
					to: "BigNumber",
					convert: function(e) {
						if (t || wt(e), e.toExponential().replace(/e.*$/, "")
							.replace(/^0\.?0*|\./, "").length > 15)
						throw new TypeError(
								"Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " +
								e +
								"). Use function bignumber(x) to convert to BigNumber."
								);
						return new t(e)
					}
				}, {
					from: "number",
					to: "Complex",
					convert: function(e) {
						return r || Nt(e), new r(e, 0)
					}
				}, {
					from: "number",
					to: "string",
					convert: function(e) {
						return e + ""
					}
				}, {
					from: "BigNumber",
					to: "Complex",
					convert: function(e) {
						return r || Nt(e), new r(e.toNumber(), 0)
					}
				}, {
					from: "Fraction",
					to: "BigNumber",
					convert: function(e) {
						throw new TypeError(
							"Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction."
							)
					}
				}, {
					from: "Fraction",
					to: "Complex",
					convert: function(e) {
						return r || Nt(e), new r(e.valueOf(), 0)
					}
				}, {
					from: "number",
					to: "Fraction",
					convert: function(e) {
						i || Mt(e);
						var t = new i(e);
						if (t.valueOf() !== e) throw new TypeError(
							"Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " +
							e +
							"). Use function fraction(x) to convert to Fraction."
							);
						return t
					}
				}, {
					from: "string",
					to: "number",
					convert: function(e) {
						var t = Number(e);
						if (isNaN(t)) throw new Error('Cannot convert "' + e +
							'" to a number');
						return t
					}
				}, {
					from: "string",
					to: "BigNumber",
					convert: function(e) {
						t || wt(e);
						try {
							return new t(e)
						} catch (t) {
							throw new Error('Cannot convert "' + e +
								'" to BigNumber')
						}
					}
				}, {
					from: "string",
					to: "Fraction",
					convert: function(e) {
						i || Mt(e);
						try {
							return new i(e)
						} catch (t) {
							throw new Error('Cannot convert "' + e +
								'" to Fraction')
						}
					}
				}, {
					from: "string",
					to: "Complex",
					convert: function(e) {
						r || Nt(e);
						try {
							return new r(e)
						} catch (t) {
							throw new Error('Cannot convert "' + e +
								'" to Complex')
						}
					}
				}, {
					from: "boolean",
					to: "number",
					convert: function(e) {
						return +e
					}
				}, {
					from: "boolean",
					to: "BigNumber",
					convert: function(e) {
						return t || wt(e), new t(+e)
					}
				}, {
					from: "boolean",
					to: "Fraction",
					convert: function(e) {
						return i || Mt(e), new i(+e)
					}
				}, {
					from: "boolean",
					to: "string",
					convert: function(e) {
						return String(e)
					}
				}, {
					from: "Array",
					to: "Matrix",
					convert: function(e) {
						return n || function() {
							throw new Error(
								"Cannot convert array into a Matrix: no class 'DenseMatrix' provided"
								)
						}(), new n(e)
					}
				}, {
					from: "Matrix",
					to: "Array",
					convert: function(e) {
						return e.valueOf()
					}
				}], a
			}));

		function wt(e) {
			throw new Error("Cannot convert value ".concat(e,
				" into a BigNumber: no class 'BigNumber' provided"))
		}

		function Nt(e) {
			throw new Error("Cannot convert value ".concat(e,
				" into a Complex number: no class 'Complex' provided"))
		}

		function Mt(e) {
			throw new Error("Cannot convert value ".concat(e,
				" into a Fraction, no class 'Fraction' provided."))
		}
		r(13);
		var Et = Qe("ResultSet", [], (function() {
				function e(t) {
					if (!(this instanceof e)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					this.entries = t || []
				}
				return e.prototype.type = "ResultSet", e.prototype.isResultSet = !0, e
					.prototype.valueOf = function() {
						return this.entries
					}, e.prototype.toString = function() {
						return "[" + this.entries.join(", ") + "]"
					}, e.prototype.toJSON = function() {
						return {
							mathjs: "ResultSet",
							entries: this.entries
						}
					}, e.fromJSON = function(t) {
						return new e(t.entries)
					}, e
			}), {
				isClass: !0
			}),
			St = r(62),
			At = r.n(St),
			Ot = Qe("BigNumber", ["?on", "config"], (function(e) {
				var t = e.on,
					r = e.config,
					n = At.a.clone({
						precision: r.precision,
						modulo: At.a.EUCLID
					});
				return n.prototype = Object.create(n.prototype), n.prototype.type =
					"BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON =
					function() {
						return {
							mathjs: "BigNumber",
							value: this.toString()
						}
					}, n.fromJSON = function(e) {
						return new n(e.value)
					}, t && t("config", (function(e, t) {
						e.precision !== t.precision && n.config({
							precision: e.precision
						})
					})), n
			}), {
				isClass: !0
			}),
			Ct = r(33),
			_t = r.n(Ct),
			Tt = Qe("Complex", [], (function() {
				return _t.a.prototype.type = "Complex", _t.a.prototype.isComplex = !0, _t.a
					.prototype.toJSON = function() {
						return {
							mathjs: "Complex",
							re: this.re,
							im: this.im
						}
					}, _t.a.prototype.toPolar = function() {
						return {
							r: this.abs(),
							phi: this.arg()
						}
					}, _t.a.prototype.format = function(e) {
						var t = this.im,
							r = this.re,
							n = te(this.re, e),
							i = te(this.im, e),
							a = o(e) ? e : e ? e.precision : null;
						if (null !== a) {
							var s = Math.pow(10, -a);
							Math.abs(r / t) < s && (r = 0), Math.abs(t / r) < s && (t = 0)
						}
						return 0 === t ? n : 0 === r ? 1 === t ? "i" : -1 === t ? "-i" : i +
							"i" : t < 0 ? -1 === t ? n + " - i" : n + " - " + i.substring(
							1) + "i" : 1 === t ? n + " + i" : n + " + " + i + "i"
					}, _t.a.fromPolar = function(e) {
						switch (arguments.length) {
							case 1:
								var t = arguments[0];
								if ("object" === a()(t)) return _t()(t);
								throw new TypeError(
									"Input has to be an object with r and phi keys.");
							case 2:
								var r = arguments[0],
									n = arguments[1];
								if (o(r)) {
									if (f(n) && n.hasBase("ANGLE") && (n = n.toNumber(
											"rad")), o(n)) return new _t.a({
										r: r,
										phi: n
									});
									throw new TypeError(
										"Phi is not a number nor an angle unit.")
								}
								throw new TypeError("Radius r is not a number.");
							default:
								throw new SyntaxError(
									"Wrong number of arguments in function fromPolar")
						}
					}, _t.a.prototype.valueOf = _t.a.prototype.toString, _t.a.fromJSON =
					function(e) {
						return new _t.a(e)
					}, _t.a.compare = function(e, t) {
						return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im <
							t.im ? -1 : 0
					}, _t.a
			}), {
				isClass: !0
			}),
			It = r(63),
			kt = r.n(It),
			zt = Qe("Fraction", [], (function() {
				return kt.a.prototype.type = "Fraction", kt.a.prototype.isFraction = !0, kt
					.a.prototype.toJSON = function() {
						return {
							mathjs: "Fraction",
							n: this.s * this.n,
							d: this.d
						}
					}, kt.a.fromJSON = function(e) {
						return new kt.a(e)
					}, kt.a
			}), {
				isClass: !0
			}),
			Rt = (r(11), Qe("Range", [], (function() {
				function e(t, r, n) {
					if (!(this instanceof e)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					var i = null != t,
						a = null != r,
						o = null != n;
					if (i)
						if (s(t)) t = t.toNumber();
						else if ("number" != typeof t) throw new TypeError(
						"Parameter start must be a number");
					if (a)
						if (s(r)) r = r.toNumber();
						else if ("number" != typeof r) throw new TypeError(
						"Parameter end must be a number");
					if (o)
						if (s(n)) n = n.toNumber();
						else if ("number" != typeof n) throw new TypeError(
						"Parameter step must be a number");
					this.start = i ? parseFloat(t) : 0, this.end = a ? parseFloat(r) :
						0, this.step = o ? parseFloat(n) : 1
				}
				return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse =
					function(t) {
						if ("string" != typeof t) return null;
						var r = t.split(":").map((function(e) {
							return parseFloat(e)
						}));
						if (r.some((function(e) {
								return isNaN(e)
							}))) return null;
						switch (r.length) {
							case 2:
								return new e(r[0], r[1]);
							case 3:
								return new e(r[0], r[2], r[1]);
							default:
								return null
						}
					}, e.prototype.clone = function() {
						return new e(this.start, this.end, this.step)
					}, e.prototype.size = function() {
						var e = 0,
							t = this.start,
							r = this.step,
							n = this.end - t;
						return W(r) === W(n) ? e = Math.ceil(n / r) : 0 === n && (e =
							0), isNaN(e) && (e = 0), [e]
					}, e.prototype.min = function() {
						var e = this.size()[0];
						return e > 0 ? this.step > 0 ? this.start : this.start + (e -
							1) * this.step : void 0
					}, e.prototype.max = function() {
						var e = this.size()[0];
						return e > 0 ? this.step > 0 ? this.start + (e - 1) * this
							.step : this.start : void 0
					}, e.prototype.forEach = function(e) {
						var t = this.start,
							r = this.step,
							n = this.end,
							i = 0;
						if (r > 0)
							for (; t < n;) e(t, [i], this), t += r, i++;
						else if (r < 0)
							for (; t > n;) e(t, [i], this), t += r, i++
					}, e.prototype.map = function(e) {
						var t = [];
						return this.forEach((function(r, n, i) {
							t[n[0]] = e(r, n, i)
						})), t
					}, e.prototype.toArray = function() {
						var e = [];
						return this.forEach((function(t, r) {
							e[r[0]] = t
						})), e
					}, e.prototype.valueOf = function() {
						return this.toArray()
					}, e.prototype.format = function(e) {
						var t = te(this.start, e);
						return 1 !== this.step && (t += ":" + te(this.step, e)), t +=
							":" + te(this.end, e)
					}, e.prototype.toString = function() {
						return this.format()
					}, e.prototype.toJSON = function() {
						return {
							mathjs: "Range",
							start: this.start,
							end: this.end,
							step: this.step
						}
					}, e.fromJSON = function(t) {
						return new e(t.start, t.end, t.step)
					}, e
			}), {
				isClass: !0
			})),
			qt = Qe("Matrix", [], (function() {
				function e() {
					if (!(this instanceof e)) throw new SyntaxError(
						"Constructor must be called with the new operator")
				}
				return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype
					.storage = function() {
						throw new Error("Cannot invoke storage on a Matrix interface")
					}, e.prototype.datatype = function() {
						throw new Error("Cannot invoke datatype on a Matrix interface")
					}, e.prototype.create = function(e, t) {
						throw new Error("Cannot invoke create on a Matrix interface")
					}, e.prototype.subset = function(e, t, r) {
						throw new Error("Cannot invoke subset on a Matrix interface")
					}, e.prototype.get = function(e) {
						throw new Error("Cannot invoke get on a Matrix interface")
					}, e.prototype.set = function(e, t, r) {
						throw new Error("Cannot invoke set on a Matrix interface")
					}, e.prototype.resize = function(e, t) {
						throw new Error("Cannot invoke resize on a Matrix interface")
					}, e.prototype.reshape = function(e, t) {
						throw new Error("Cannot invoke reshape on a Matrix interface")
					}, e.prototype.clone = function() {
						throw new Error("Cannot invoke clone on a Matrix interface")
					}, e.prototype.size = function() {
						throw new Error("Cannot invoke size on a Matrix interface")
					}, e.prototype.map = function(e, t) {
						throw new Error("Cannot invoke map on a Matrix interface")
					}, e.prototype.forEach = function(e) {
						throw new Error("Cannot invoke forEach on a Matrix interface")
					}, e.prototype[Symbol.iterator] = function() {
						throw new Error("Cannot iterate a Matrix interface")
					}, e.prototype.toArray = function() {
						throw new Error("Cannot invoke toArray on a Matrix interface")
					}, e.prototype.valueOf = function() {
						throw new Error("Cannot invoke valueOf on a Matrix interface")
					}, e.prototype.format = function(e) {
						throw new Error("Cannot invoke format on a Matrix interface")
					}, e.prototype.toString = function() {
						throw new Error("Cannot invoke toString on a Matrix interface")
					}, e
			}), {
				isClass: !0
			}),
			Bt = r(57),
			Dt = r.n(Bt);

		function jt(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Pt(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return Pt(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function Pt(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		var Ft = Qe("DenseMatrix", ["Matrix"], (function(e) {
				var t = e.Matrix;

				function r(e, t) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (t && !l(t)) throw new Error("Invalid datatype: " + t);
					if (m(e)) "DenseMatrix" === e.type ? (this._data = He(e._data), this
						._size = He(e._size), this._datatype = t || e._datatype) : (this
						._data = e.toArray(), this._size = e.size(), this._datatype =
						t || e._datatype);
					else if (e && p(e.data) && p(e.size)) this._data = e.data, this._size =
						e.size, Ae(this._data, this._size), this._datatype = t || e
						.datatype;
					else if (p(e)) this._data = function e(t) {
							for (var r = 0, n = t.length; r < n; r++) {
								var i = t[r];
								p(i) ? t[r] = e(i) : i && !0 === i.isMatrix && (t[r] = e(i
									.valueOf()))
							}
							return t
						}(e), this._size = Se(this._data), Ae(this._data, this._size), this
						._datatype = t;
					else {
						if (e) throw new TypeError("Unsupported type of data (" + H(e) +
							")");
						this._data = [], this._size = [0], this._datatype = t
					}
				}

				function n(e, t) {
					if (!g(t)) throw new TypeError("Invalid index");
					if (t.isScalar()) return e.get(t.min());
					var n = t.size();
					if (n.length !== e._size.length) throw new Me(n.length, e._size.length);
					for (var i = t.min(), a = t.max(), o = 0, s = e._size.length; o <
						s; o++) Oe(i[o], e._size[o]), Oe(a[o], e._size[o]);
					return new r(function e(t, r, n, i) {
						var a = i === n - 1,
							o = r.dimension(i);
						return a ? o.map((function(e) {
							return Oe(e, t.length), t[e]
						})).valueOf() : o.map((function(a) {
							Oe(a, t.length);
							var o = t[a];
							return e(o, r, n, i + 1)
						})).valueOf()
					}(e._data, t, n.length, 0), e._datatype)
				}

				function i(e, t, r, n) {
					if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
					var i, a = t.size(),
						o = t.isScalar();
					if (m(r) ? (i = r.size(), r = r.valueOf()) : i = Se(r), o) {
						if (0 !== i.length) throw new TypeError("Scalar expected");
						e.set(t.min(), r, n)
					} else {
						if (a.length < e._size.length) throw new Me(a.length, e._size
							.length, "<");
						if (i.length < a.length) {
							for (var s = 0, c = 0; 1 === a[s] && 1 === i[s];) s++;
							for (; 1 === a[s];) c++, s++;
							r = ze(r, a.length, c, i)
						}
						if (!Ze(a, i)) throw new Me(a, i, ">");
						u(e, t.max().map((function(e) {
							return e + 1
						})), n);
						var f = a.length;
						! function e(t, r, n, i, a) {
							var o = a === i - 1,
								s = r.dimension(a);
							o ? s.forEach((function(e, r) {
								Oe(e), t[e] = n[r[0]]
							})) : s.forEach((function(o, s) {
								Oe(o), e(t[o], r, n[s[0]], i, a + 1)
							}))
						}(e._data, t, r, f, 0)
					}
					return e
				}

				function a(e, t, r) {
					if (0 === t.length) {
						for (var n = e._data; p(n);) n = n[0];
						return n
					}
					return e._size = t.slice(0), e._data = Ce(e._data, e._size, r), e
				}

				function u(e, t, r) {
					for (var n = e._size.slice(0), i = !1; n.length < t.length;) n.push(0),
						i = !0;
					for (var o = 0, s = t.length; o < s; o++) t[o] > n[o] && (n[o] = t[o],
						i = !0);
					i && a(e, n, r)
				}
				return r.prototype = new t, r.prototype.createDenseMatrix = function(e, t) {
						return new r(e, t)
					}, r.prototype.type = "DenseMatrix", r.prototype.isDenseMatrix = !0, r
					.prototype.getDataType = function() {
						return Le(this._data, H)
					}, r.prototype.storage = function() {
						return "dense"
					}, r.prototype.datatype = function() {
						return this._datatype
					}, r.prototype.create = function(e, t) {
						return new r(e, t)
					}, r.prototype.subset = function(e, t, r) {
						switch (arguments.length) {
							case 1:
								return n(this, e);
							case 2:
							case 3:
								return i(this, e, t, r);
							default:
								throw new SyntaxError("Wrong number of arguments")
						}
					}, r.prototype.get = function(e) {
						if (!p(e)) throw new TypeError("Array expected");
						if (e.length !== this._size.length) throw new Me(e.length, this
							._size.length);
						for (var t = 0; t < e.length; t++) Oe(e[t], this._size[t]);
						for (var r = this._data, n = 0, i = e.length; n < i; n++) {
							var a = e[n];
							Oe(a, r.length), r = r[a]
						}
						return r
					}, r.prototype.set = function(e, t, r) {
						if (!p(e)) throw new TypeError("Array expected");
						if (e.length < this._size.length) throw new Me(e.length, this._size
							.length, "<");
						var n, i, a;
						u(this, e.map((function(e) {
							return e + 1
						})), r);
						var o = this._data;
						for (n = 0, i = e.length - 1; n < i; n++) Oe(a = e[n], o.length),
							o = o[a];
						return Oe(a = e[e.length - 1], o.length), o[a] = t, this
					}, r.prototype.resize = function(e, t, r) {
						if (!h(e)) throw new TypeError("Array or Matrix expected");
						var n = e.valueOf().map((function(e) {
							return Array.isArray(e) && 1 === e.length ? e[0] : e
						}));
						return a(r ? this.clone() : this, n, t)
					}, r.prototype.reshape = function(e, t) {
						var r = t ? this.clone() : this;
						r._data = _e(r._data, e);
						var n = r._size.reduce((function(e, t) {
							return e * t
						}));
						return r._size = Te(e, n), r
					}, r.prototype.clone = function() {
						return new r({
							data: He(this._data),
							size: He(this._size),
							datatype: this._datatype
						})
					}, r.prototype.size = function() {
						return this._size.slice(0)
					}, r.prototype.map = function(e) {
						var t = this,
							n = function r(n, i) {
								return p(n) ? n.map((function(e, t) {
									return r(e, i.concat(t))
								})) : e(n, i, t)
							}(this._data, []);
						return new r(n, void 0 !== this._datatype ? Le(n, H) : void 0)
					}, r.prototype.forEach = function(e) {
						var t = this;
						! function r(n, i) {
							p(n) ? n.forEach((function(e, t) {
								r(e, i.concat(t))
							})) : e(n, i, t)
						}(this._data, [])
					}, r.prototype[Symbol.iterator] = Dt.a.mark((function e() {
						var t;
						return Dt.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return t = Dt.a.mark((
										function e(t, r) {
											var n;
											return Dt.a
												.wrap((function(
													i
													) {
													for (;;)
														switch (
															i
															.prev =
															i
															.next
															) {
															case 0:
																if (!
																	p(
																		t)
																	) {
																	i.next =
																		9;
																	break
																}
																n =
																0;
															case 2:
																if (!
																	(n < t
																		.length
																		)
																	) {
																	i.next =
																		7;
																	break
																}
																return i
																	.delegateYield(
																		e(t[n],
																			r
																			.concat(
																				n
																				)
																			),
																		"t0",
																		4
																		);
															case 4:
																n++,
																i.next =
																	2;
																break;
															case 7:
																i.next =
																	11;
																break;
															case 9:
																return i
																	.next =
																	11, {
																		value: t,
																		index: r
																	};
															case 11:
															case "end":
																return i
																	.stop()
														}
												}), e)
										})), e.delegateYield(t(
											this._data, []),
										"t0", 2);
								case 2:
								case "end":
									return e.stop()
							}
						}), e, this)
					})), r.prototype.rows = function() {
						var e = [];
						if (2 !== this.size().length) throw new TypeError(
							"Rows can only be returned for a 2D matrix.");
						var t, n = jt(this._data);
						try {
							for (n.s(); !(t = n.n()).done;) {
								var i = t.value;
								e.push(new r([i], this._datatype))
							}
						} catch (e) {
							n.e(e)
						} finally {
							n.f()
						}
						return e
					}, r.prototype.columns = function() {
						var e = this,
							t = [],
							n = this.size();
						if (2 !== n.length) throw new TypeError(
							"Rows can only be returned for a 2D matrix.");
						for (var i = this._data, a = function(n) {
								var a = i.map((function(e) {
									return [e[n]]
								}));
								t.push(new r(a, e._datatype))
							}, o = 0; o < n[1]; o++) a(o);
						return t
					}, r.prototype.toArray = function() {
						return He(this._data)
					}, r.prototype.valueOf = function() {
						return this._data
					}, r.prototype.format = function(e) {
						return xe(this._data, e)
					}, r.prototype.toString = function() {
						return xe(this._data)
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "DenseMatrix",
							data: this._data,
							size: this._size,
							datatype: this._datatype
						}
					}, r.prototype.diagonal = function(e) {
						if (e) {
							if (s(e) && (e = e.toNumber()), !o(e) || !Z(e))
							throw new TypeError(
									"The parameter k must be an integer number")
						} else e = 0;
						for (var t = e > 0 ? e : 0, n = e < 0 ? -e : 0, i = this._size[0],
								a = this._size[1], u = Math.min(i - n, a - t), c = [], f =
								0; f < u; f++) c[f] = this._data[f + n][f + t];
						return new r({
							data: c,
							size: [u],
							datatype: this._datatype
						})
					}, r.diagonal = function(e, t, n, i) {
						if (!p(e)) throw new TypeError("Array expected, size parameter");
						if (2 !== e.length) throw new Error(
							"Only two dimensions matrix are supported");
						if (e = e.map((function(e) {
								if (s(e) && (e = e.toNumber()), !o(e) || !Z(e) ||
									e < 1) throw new Error(
									"Size values must be positive integers");
								return e
							})), n) {
							if (s(n) && (n = n.toNumber()), !o(n) || !Z(n))
							throw new TypeError(
									"The parameter k must be an integer number")
						} else n = 0;
						var a, u = n > 0 ? n : 0,
							c = n < 0 ? -n : 0,
							f = e[0],
							l = e[1],
							h = Math.min(f - c, l - u);
						if (p(t)) {
							if (t.length !== h) throw new Error(
								"Invalid value array length");
							a = function(e) {
								return t[e]
							}
						} else if (m(t)) {
							var d = t.size();
							if (1 !== d.length || d[0] !== h) throw new Error(
								"Invalid matrix length");
							a = function(e) {
								return t.get([e])
							}
						} else a = function() {
							return t
						};
						i || (i = s(a(0)) ? a(0).mul(0) : 0);
						var v = [];
						if (e.length > 0) {
							v = Ce(v, e, i);
							for (var y = 0; y < h; y++) v[y + c][y + u] = a(y)
						}
						return new r({
							data: v,
							size: [f, l]
						})
					}, r.fromJSON = function(e) {
						return new r(e)
					}, r.prototype.swapRows = function(e, t) {
						if (!(o(e) && Z(e) && o(t) && Z(t))) throw new Error(
							"Row index must be positive integers");
						if (2 !== this._size.length) throw new Error(
							"Only two dimensional matrix is supported");
						return Oe(e, this._size[0]), Oe(t, this._size[0]), r._swapRows(e, t,
							this._data), this
					}, r._swapRows = function(e, t, r) {
						var n = r[e];
						r[e] = r[t], r[t] = n
					}, r
			}), {
				isClass: !0
			}),
			Ut = Qe("clone", ["typed"], (function(e) {
				return (0, e.typed)("clone", {
					any: He
				})
			}));

		function Lt(e) {
			for (var t = 0; t < e.length; t++)
				if (h(e[t])) return !0;
			return !1
		}

		function $t(e, t) {
			m(e) && (e = e.valueOf());
			for (var r = 0, n = e.length; r < n; r++) {
				var i = e[r];
				Array.isArray(i) ? $t(i, t) : t(i)
			}
		}

		function Ht(e, t, r) {
			return e && "function" == typeof e.map ? e.map((function(e) {
				return Ht(e, t, r)
			})) : t(e)
		}

		function Gt(e, t, r) {
			var n = Array.isArray(e) ? Se(e) : e.size();
			if (t < 0 || t >= n.length) throw new Ee(t, n.length);
			return m(e) ? e.create(Vt(e.valueOf(), t, r)) : Vt(e, t, r)
		}

		function Vt(e, t, r) {
			var n, i, a, o;
			if (t <= 0) {
				if (Array.isArray(e[0])) {
					for (o = function(e) {
							var t, r, n = e.length,
								i = e[0].length,
								a = [];
							for (r = 0; r < i; r++) {
								var o = [];
								for (t = 0; t < n; t++) o.push(e[t][r]);
								a.push(o)
							}
							return a
						}(e), i = [], n = 0; n < o.length; n++) i[n] = Vt(o[n], t - 1, r);
					return i
				}
				for (a = e[0], n = 1; n < e.length; n++) a = r(a, e[n]);
				return a
			}
			for (i = [], n = 0; n < e.length; n++) i[n] = Vt(e[n], t - 1, r);
			return i
		}

		function Zt(e, t, r, n, i, a, o, s, u, c, f) {
			var l, p, m, h, d = e._values,
				v = e._index,
				y = e._ptr;
			if (n)
				for (p = y[t], m = y[t + 1], l = p; l < m; l++) r[h = v[l]] !== a ? (r[h] = a, o
						.push(h), c ? (n[h] = u ? s(d[l], f) : s(f, d[l]), i[h] = a) : n[h] = d[l]
						) : (n[h] = u ? s(d[l], n[h]) : s(n[h], d[l]), i[h] = a);
			else
				for (p = y[t], m = y[t + 1], l = p; l < m; l++) r[h = v[l]] !== a ? (r[h] = a, o
					.push(h)) : i[h] = a
		}
		var Wt = Qe("isInteger", ["typed"], (function(e) {
			return (0, e.typed)("isInteger", {
				number: Z,
				BigNumber: function(e) {
					return e.isInt()
				},
				Fraction: function(e) {
					return 1 === e.d && isFinite(e.n)
				},
				"Array | Matrix": function(e) {
					return Ht(e, this)
				}
			})
		}));
		r(180);

		function Yt(e) {
			return e < 0
		}

		function Jt(e) {
			return e > 0
		}

		function Xt(e) {
			return 0 === e
		}

		function Qt(e) {
			return Number.isNaN(e)
		}
		Yt.signature = "number", Jt.signature = "number", Xt.signature = "number", Qt.signature =
			"number";
		var Kt = Qe("isNegative", ["typed"], (function(e) {
				return (0, e.typed)("isNegative", {
					number: Yt,
					BigNumber: function(e) {
						return e.isNeg() && !e.isZero() && !e.isNaN()
					},
					Fraction: function(e) {
						return e.s < 0
					},
					Unit: function(e) {
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			er = Qe("isNumeric", ["typed"], (function(e) {
				return (0, e.typed)("isNumeric", {
					"number | BigNumber | Fraction | boolean": function() {
						return !0
					},
					"Complex | Unit | string | null | undefined | Node": function() {
						return !1
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			tr = (r(235), Qe("hasNumericValue", ["typed", "isNumeric"], (function(e) {
				var t = e.typed,
					r = e.isNumeric;
				return t("hasNumericValue", {
					string: function(e) {
						return e.trim().length > 0 && !isNaN(Number(e))
					},
					any: function(e) {
						return r(e)
					}
				})
			}))),
			rr = Qe("isPositive", ["typed"], (function(e) {
				return (0, e.typed)("isPositive", {
					number: Jt,
					BigNumber: function(e) {
						return !e.isNeg() && !e.isZero() && !e.isNaN()
					},
					Fraction: function(e) {
						return e.s > 0 && e.n > 0
					},
					Unit: function(e) {
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			nr = Qe("isZero", ["typed"], (function(e) {
				return (0, e.typed)("isZero", {
					number: Xt,
					BigNumber: function(e) {
						return e.isZero()
					},
					Complex: function(e) {
						return 0 === e.re && 0 === e.im
					},
					Fraction: function(e) {
						return 1 === e.d && 0 === e.n
					},
					Unit: function(e) {
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			ir = Qe("isNaN", ["typed"], (function(e) {
				return (0, e.typed)("isNaN", {
					number: Qt,
					BigNumber: function(e) {
						return e.isNaN()
					},
					Fraction: function(e) {
						return !1
					},
					Complex: function(e) {
						return e.isNaN()
					},
					Unit: function(e) {
						return Number.isNaN(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, Number.isNaN)
					}
				})
			})),
			ar = Qe("typeOf", ["typed"], (function(e) {
				return (0, e.typed)("typeOf", {
					any: H
				})
			}));

		function or(e, t, r) {
			if (null == r) return e.eq(t);
			if (e.eq(t)) return !0;
			if (e.isNaN() || t.isNaN()) return !1;
			if (e.isFinite() && t.isFinite()) {
				var n = e.minus(t).abs();
				if (n.isZero()) return !0;
				var i = e.constructor.max(e.abs(), t.abs());
				return n.lte(i.times(r))
			}
			return !1
		}
		var sr = Qe("equalScalar", ["typed", "config"], (function(e) {
				var t = e.typed,
					r = e.config;
				return t("equalScalar", {
					"boolean, boolean": function(e, t) {
						return e === t
					},
					"number, number": function(e, t) {
						return ue(e, t, r.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.eq(t) || or(e, t, r.epsilon)
					},
					"Fraction, Fraction": function(e, t) {
						return e.equals(t)
					},
					"Complex, Complex": function(e, t) {
						return function(e, t, r) {
							return ue(e.re, t.re, r) && ue(e.im, t.im, r)
						}(e, t, r.epsilon)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					}
				})
			})),
			ur = (Qe("equalScalar", ["typed", "config"], (function(e) {
				var t = e.typed,
					r = e.config;
				return t("equalScalar", {
					"number, number": function(e, t) {
						return ue(e, t, r.epsilon)
					}
				})
			})), r(24), Qe("SparseMatrix", ["typed", "equalScalar", "Matrix"], (function(e) {
				var t = e.typed,
					r = e.equalScalar,
					n = e.Matrix;

				function i(e, t) {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (t && !l(t)) throw new Error("Invalid datatype: " + t);
					if (m(e)) ! function(e, t, r) {
						"SparseMatrix" === t.type ? (e._values = t._values ? He(t
								._values) : void 0, e._index = He(t._index), e
							._ptr = He(t._ptr), e._size = He(t._size), e
							._datatype = r || t._datatype) : a(e, t.valueOf(),
							r || t._datatype)
					}(this, e, t);
					else if (e && p(e.index) && p(e.ptr) && p(e.size)) this._values = e
						.values, this._index = e.index, this._ptr = e.ptr, this._size =
						e.size, this._datatype = t || e.datatype;
					else if (p(e)) a(this, e, t);
					else {
						if (e) throw new TypeError("Unsupported type of data (" + H(e) +
							")");
						this._values = [], this._index = [], this._ptr = [0], this
							._size = [0, 0], this._datatype = t
					}
				}

				function a(e, n, i) {
					e._values = [], e._index = [], e._ptr = [], e._datatype = i;
					var a = n.length,
						o = 0,
						s = r,
						u = 0;
					if (l(i) && (s = t.find(r, [i, i]) || r, u = t.convert(0, i)), a >
						0) {
						var c = 0;
						do {
							e._ptr.push(e._index.length);
							for (var f = 0; f < a; f++) {
								var m = n[f];
								if (p(m)) {
									if (0 === c && o < m.length && (o = m.length), c < m
										.length) {
										var h = m[c];
										s(h, u) || (e._values.push(h), e._index.push(f))
									}
								} else 0 === c && o < 1 && (o = 1), s(m, u) || (e
									._values.push(m), e._index.push(f))
							}
							c++
						} while (c < o)
					}
					e._ptr.push(e._index.length), e._size = [a, o]
				}

				function u(e, t) {
					if (!g(t)) throw new TypeError("Invalid index");
					if (t.isScalar()) return e.get(t.min());
					var r, n, a, o, s = t.size();
					if (s.length !== e._size.length) throw new Me(s.length, e._size
						.length);
					var u = t.min(),
						c = t.max();
					for (r = 0, n = e._size.length; r < n; r++) Oe(u[r], e._size[r]),
						Oe(c[r], e._size[r]);
					var f = e._values,
						l = e._index,
						p = e._ptr,
						m = t.dimension(0),
						h = t.dimension(1),
						d = [],
						v = [];
					m.forEach((function(e, t) {
						v[e] = t[0], d[e] = !0
					}));
					var y = f ? [] : void 0,
						x = [],
						b = [];
					return h.forEach((function(e) {
						for (b.push(x.length), a = p[e], o = p[e + 1]; a <
							o; a++) r = l[a], !0 === d[r] && (x.push(v[r]),
							y && y.push(f[a]))
					})), b.push(x.length), new i({
						values: y,
						index: x,
						ptr: b,
						size: s,
						datatype: e._datatype
					})
				}

				function c(e, t, r, n) {
					if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
					var i, a = t.size(),
						o = t.isScalar();
					if (m(r) ? (i = r.size(), r = r.toArray()) : i = Se(r), o) {
						if (0 !== i.length) throw new TypeError("Scalar expected");
						e.set(t.min(), r, n)
					} else {
						if (1 !== a.length && 2 !== a.length) throw new Me(a.length, e
							._size.length, "<");
						if (i.length < a.length) {
							for (var s = 0, u = 0; 1 === a[s] && 1 === i[s];) s++;
							for (; 1 === a[s];) u++, s++;
							r = ze(r, a.length, u, i)
						}
						if (!Ze(a, i)) throw new Me(a, i, ">");
						if (1 === a.length) {
							t.dimension(0).forEach((function(t, i) {
								Oe(t), e.set([t, 0], r[i[0]], n)
							}))
						} else {
							var c = t.dimension(0),
								f = t.dimension(1);
							c.forEach((function(t, i) {
								Oe(t), f.forEach((function(a, o) {
									Oe(a), e.set([t, a], r[i[0]]
										[o[0]], n)
								}))
							}))
						}
					}
					return e
				}

				function f(e, t, r, n) {
					if (r - t == 0) return r;
					for (var i = t; i < r; i++)
						if (n[i] === e) return i;
					return t
				}

				function d(e, t, r, n, i, a, o) {
					i.splice(e, 0, n), a.splice(e, 0, t);
					for (var s = r + 1; s < o.length; s++) o[s]++
				}

				function v(e, n, i, a) {
					var o = a || 0,
						s = r,
						u = 0;
					l(e._datatype) && (s = t.find(r, [e._datatype, e._datatype]) || r,
						u = t.convert(0, e._datatype), o = t.convert(o, e._datatype)
						);
					var c, f, p, m = !s(o, u),
						h = e._size[0],
						d = e._size[1];
					if (i > d) {
						for (f = d; f < i; f++)
							if (e._ptr[f] = e._values.length, m)
								for (c = 0; c < h; c++) e._values.push(o), e._index
									.push(c);
						e._ptr[i] = e._values.length
					} else i < d && (e._ptr.splice(i + 1, d - i), e._values.splice(e
						._ptr[i], e._values.length), e._index.splice(e._ptr[i],
						e._index.length));
					if (d = i, n > h) {
						if (m) {
							var v = 0;
							for (f = 0; f < d; f++) {
								e._ptr[f] = e._ptr[f] + v, p = e._ptr[f + 1] + v;
								var y = 0;
								for (c = h; c < n; c++, y++) e._values.splice(p + y, 0,
									o), e._index.splice(p + y, 0, c), v++
							}
							e._ptr[d] = e._values.length
						}
					} else if (n < h) {
						var g = 0;
						for (f = 0; f < d; f++) {
							e._ptr[f] = e._ptr[f] - g;
							var x = e._ptr[f],
								b = e._ptr[f + 1] - g;
							for (p = x; p < b; p++)(c = e._index[p]) > n - 1 && (e
								._values.splice(p, 1), e._index.splice(p, 1), g++)
						}
						e._ptr[f] = e._values.length
					}
					return e._size[0] = n, e._size[1] = i, e
				}

				function y(e, t, r, n, i) {
					var a, o, s = n[0],
						u = n[1],
						c = [];
					for (a = 0; a < s; a++)
						for (c[a] = [], o = 0; o < u; o++) c[a][o] = 0;
					for (o = 0; o < u; o++)
						for (var f = r[o], l = r[o + 1], p = f; p < l; p++) c[a = t[p]][
							o
						] = e ? i ? He(e[p]) : e[p] : 1;
					return c
				}
				return i.prototype = new n, i.prototype.createSparseMatrix = function(e,
						t) {
						return new i(e, t)
					}, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = !
					0, i.prototype.getDataType = function() {
						return Le(this._values, H)
					}, i.prototype.storage = function() {
						return "sparse"
					}, i.prototype.datatype = function() {
						return this._datatype
					}, i.prototype.create = function(e, t) {
						return new i(e, t)
					}, i.prototype.density = function() {
						var e = this._size[0],
							t = this._size[1];
						return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0
					}, i.prototype.subset = function(e, t, r) {
						if (!this._values) throw new Error(
							"Cannot invoke subset on a Pattern only matrix");
						switch (arguments.length) {
							case 1:
								return u(this, e);
							case 2:
							case 3:
								return c(this, e, t, r);
							default:
								throw new SyntaxError("Wrong number of arguments")
						}
					}, i.prototype.get = function(e) {
						if (!p(e)) throw new TypeError("Array expected");
						if (e.length !== this._size.length) throw new Me(e.length, this
							._size.length);
						if (!this._values) throw new Error(
							"Cannot invoke get on a Pattern only matrix");
						var t = e[0],
							r = e[1];
						Oe(t, this._size[0]), Oe(r, this._size[1]);
						var n = f(t, this._ptr[r], this._ptr[r + 1], this._index);
						return n < this._ptr[r + 1] && this._index[n] === t ? this
							._values[n] : 0
					}, i.prototype.set = function(e, n, i) {
						if (!p(e)) throw new TypeError("Array expected");
						if (e.length !== this._size.length) throw new Me(e.length, this
							._size.length);
						if (!this._values) throw new Error(
							"Cannot invoke set on a Pattern only matrix");
						var a = e[0],
							o = e[1],
							s = this._size[0],
							u = this._size[1],
							c = r,
							m = 0;
						l(this._datatype) && (c = t.find(r, [this._datatype, this
							._datatype
						]) || r, m = t.convert(0, this._datatype)), (a > s - 1 ||
							o > u - 1) && (v(this, Math.max(a + 1, s), Math.max(o +
							1, u), i), s = this._size[0], u = this._size[1]), Oe(a,
							s), Oe(o, u);
						var h = f(a, this._ptr[o], this._ptr[o + 1], this._index);
						return h < this._ptr[o + 1] && this._index[h] === a ? c(n, m) ?
							function(e, t, r, n, i) {
								r.splice(e, 1), n.splice(e, 1);
								for (var a = t + 1; a < i.length; a++) i[a]--
							}(h, o, this._values, this._index, this._ptr) : this
							._values[h] = n : d(h, a, o, n, this._values, this._index,
								this._ptr), this
					}, i.prototype.resize = function(e, t, r) {
						if (!h(e)) throw new TypeError("Array or Matrix expected");
						var n = e.valueOf().map((function(e) {
							return Array.isArray(e) && 1 === e.length ? e[
								0] : e
						}));
						if (2 !== n.length) throw new Error(
							"Only two dimensions matrix are supported");
						return n.forEach((function(e) {
							if (!o(e) || !Z(e) || e < 0)
							throw new TypeError(
									"Invalid size, must contain positive integers (size: " +
									xe(n) + ")")
						})), v(r ? this.clone() : this, n[0], n[1], t)
					}, i.prototype.reshape = function(e, t) {
						if (!p(e)) throw new TypeError("Array expected");
						if (2 !== e.length) throw new Error(
							"Sparse matrices can only be reshaped in two dimensions"
							);
						e.forEach((function(t) {
							if (!o(t) || !Z(t) || t <= -2 || 0 === t)
							throw new TypeError(
									"Invalid size, must contain positive integers or -1 (size: " +
									xe(e) + ")")
						}));
						var r = this._size[0] * this._size[1];
						if (r !== (e = Te(e, r))[0] * e[1]) throw new Error(
							"Reshaping sparse matrix will result in the wrong number of elements"
							);
						var n = t ? this.clone() : this;
						if (this._size[0] === e[0] && this._size[1] === e[1]) return n;
						for (var i = [], a = 0; a < n._ptr.length; a++)
							for (var s = 0; s < n._ptr[a + 1] - n._ptr[a]; s++) i.push(
								a);
						for (var u = n._values.slice(), c = n._index.slice(), l = 0; l <
							n._index.length; l++) {
							var m = c[l],
								h = i[l],
								v = m * n._size[1] + h;
							i[l] = v % e[1], c[l] = Math.floor(v / e[1])
						}
						n._values.length = 0, n._index.length = 0, n._ptr.length = e[
							1] + 1, n._size = e.slice();
						for (var y = 0; y < n._ptr.length; y++) n._ptr[y] = 0;
						for (var g = 0; g < u.length; g++) {
							var x = c[g],
								b = i[g],
								w = u[g];
							d(f(x, n._ptr[b], n._ptr[b + 1], n._index), x, b, w, n
								._values, n._index, n._ptr)
						}
						return n
					}, i.prototype.clone = function() {
						return new i({
							values: this._values ? He(this._values) : void 0,
							index: He(this._index),
							ptr: He(this._ptr),
							size: He(this._size),
							datatype: this._datatype
						})
					}, i.prototype.size = function() {
						return this._size.slice(0)
					}, i.prototype.map = function(e, n) {
						if (!this._values) throw new Error(
							"Cannot invoke map on a Pattern only matrix");
						var a = this;
						return function(e, n, a, o, s, u, c) {
							var f = [],
								p = [],
								m = [],
								h = r,
								d = 0;
							l(e._datatype) && (h = t.find(r, [e._datatype, e
								._datatype
							]) || r, d = t.convert(0, e._datatype));
							for (var v = function(e, t, r) {
									e = u(e, t, r), h(e, d) || (f.push(e), p
										.push(t))
								}, y = o; y <= s; y++) {
								m.push(f.length);
								var g = e._ptr[y],
									x = e._ptr[y + 1];
								if (c)
									for (var b = g; b < x; b++) {
										var w = e._index[b];
										w >= n && w <= a && v(e._values[b], w - n,
											y - o)
									} else {
										for (var N = {}, M = g; M < x; M++) {
											var E = e._index[M];
											N[E] = e._values[M]
										}
										for (var S = n; S <= a; S++) {
											var A = S in N ? N[S] : 0;
											v(A, S - n, y - o)
										}
									}
							}
							return m.push(f.length), new i({
								values: f,
								index: p,
								ptr: m,
								size: [a - n + 1, s - o + 1]
							})
						}(this, 0, this._size[0] - 1, 0, this._size[1] - 1, (
							function(t, r, n) {
								return e(t, [r, n], a)
							}), n)
					}, i.prototype.forEach = function(e, t) {
						if (!this._values) throw new Error(
							"Cannot invoke forEach on a Pattern only matrix");
						for (var r = this._size[0], n = this._size[1], i = 0; i <
							n; i++) {
							var a = this._ptr[i],
								o = this._ptr[i + 1];
							if (t)
								for (var s = a; s < o; s++) {
									var u = this._index[s];
									e(this._values[s], [u, i], this)
								} else {
									for (var c = {}, f = a; f < o; f++) {
										c[this._index[f]] = this._values[f]
									}
									for (var l = 0; l < r; l++) {
										e(l in c ? c[l] : 0, [l, i], this)
									}
								}
						}
					}, i.prototype[Symbol.iterator] = Dt.a.mark((function e() {
						var t, r, n, i, a, o;
						return Dt.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this._values) {
										e.next = 2;
										break
									}
									throw new Error(
										"Cannot iterate a Pattern only matrix"
										);
								case 2:
									t = this._size[1], r = 0;
								case 4:
									if (!(r < t)) {
										e.next = 18;
										break
									}
									n = this._ptr[r], i = this
										._ptr[r + 1], a = n;
								case 8:
									if (!(a < i)) {
										e.next = 15;
										break
									}
									return o = this._index[a], e
										.next = 12, {
											value: this._values[
												a],
											index: [o, r]
										};
								case 12:
									a++, e.next = 8;
									break;
								case 15:
									r++, e.next = 4;
									break;
								case 18:
								case "end":
									return e.stop()
							}
						}), e, this)
					})), i.prototype.toArray = function() {
						return y(this._values, this._index, this._ptr, this._size, !0)
					}, i.prototype.valueOf = function() {
						return y(this._values, this._index, this._ptr, this._size, !1)
					}, i.prototype.format = function(e) {
						for (var t = this._size[0], r = this._size[1], n = this
								.density(), i = "Sparse Matrix [" + xe(t, e) + " x " +
								xe(r, e) + "] density: " + xe(n, e) + "\n", a = 0; a <
							r; a++)
							for (var o = this._ptr[a], s = this._ptr[a + 1], u = o; u <
								s; u++) {
								i += "\n    (" + xe(this._index[u], e) + ", " + xe(a,
									e) + ") ==> " + (this._values ? xe(this._values[u],
										e) : "X")
							}
						return i
					}, i.prototype.toString = function() {
						return xe(this.toArray())
					}, i.prototype.toJSON = function() {
						return {
							mathjs: "SparseMatrix",
							values: this._values,
							index: this._index,
							ptr: this._ptr,
							size: this._size,
							datatype: this._datatype
						}
					}, i.prototype.diagonal = function(e) {
						if (e) {
							if (s(e) && (e = e.toNumber()), !o(e) || !Z(e))
							throw new TypeError(
									"The parameter k must be an integer number")
						} else e = 0;
						var t = e > 0 ? e : 0,
							r = e < 0 ? -e : 0,
							n = this._size[0],
							a = this._size[1],
							u = Math.min(n - r, a - t),
							c = [],
							f = [],
							l = [];
						l[0] = 0;
						for (var p = t; p < a && c.length < u; p++)
							for (var m = this._ptr[p], h = this._ptr[p + 1], d = m; d <
								h; d++) {
								var v = this._index[d];
								if (v === p - t + r) {
									c.push(this._values[d]), f[c.length - 1] = v - r;
									break
								}
							}
						return l.push(c.length), new i({
							values: c,
							index: f,
							ptr: l,
							size: [u, 1]
						})
					}, i.fromJSON = function(e) {
						return new i(e)
					}, i.diagonal = function(e, n, a, u, c) {
						if (!p(e)) throw new TypeError(
						"Array expected, size parameter");
						if (2 !== e.length) throw new Error(
							"Only two dimensions matrix are supported");
						if (e = e.map((function(e) {
								if (s(e) && (e = e.toNumber()), !o(e) || !Z(
									e) || e < 1) throw new Error(
									"Size values must be positive integers"
									);
								return e
							})), a) {
							if (s(a) && (a = a.toNumber()), !o(a) || !Z(a))
							throw new TypeError(
									"The parameter k must be an integer number")
						} else a = 0;
						var f = r,
							h = 0;
						l(c) && (f = t.find(r, [c, c]) || r, h = t.convert(0, c));
						var d, v = a > 0 ? a : 0,
							y = a < 0 ? -a : 0,
							g = e[0],
							x = e[1],
							b = Math.min(g - y, x - v);
						if (p(n)) {
							if (n.length !== b) throw new Error(
								"Invalid value array length");
							d = function(e) {
								return n[e]
							}
						} else if (m(n)) {
							var w = n.size();
							if (1 !== w.length || w[0] !== b) throw new Error(
								"Invalid matrix length");
							d = function(e) {
								return n.get([e])
							}
						} else d = function() {
							return n
						};
						for (var N = [], M = [], E = [], S = 0; S < x; S++) {
							E.push(N.length);
							var A = S - v;
							if (A >= 0 && A < b) {
								var O = d(A);
								f(O, h) || (M.push(A + y), N.push(O))
							}
						}
						return E.push(N.length), new i({
							values: N,
							index: M,
							ptr: E,
							size: [g, x]
						})
					}, i.prototype.swapRows = function(e, t) {
						if (!(o(e) && Z(e) && o(t) && Z(t))) throw new Error(
							"Row index must be positive integers");
						if (2 !== this._size.length) throw new Error(
							"Only two dimensional matrix is supported");
						return Oe(e, this._size[0]), Oe(t, this._size[0]), i._swapRows(
							e, t, this._size[1], this._values, this._index, this
							._ptr), this
					}, i._forEachRow = function(e, t, r, n, i) {
						for (var a = n[e], o = n[e + 1], s = a; s < o; s++) i(r[s], t[
							s])
					}, i._swapRows = function(e, t, r, n, i, a) {
						for (var o = 0; o < r; o++) {
							var s = a[o],
								u = a[o + 1],
								c = f(e, s, u, i),
								l = f(t, s, u, i);
							if (c < u && l < u && i[c] === e && i[l] === t) {
								if (n) {
									var p = n[c];
									n[c] = n[l], n[l] = p
								}
							} else if (c < u && i[c] === e && (l >= u || i[l] !== t)) {
								var m = n ? n[c] : void 0;
								i.splice(l, 0, t), n && n.splice(l, 0, m), i.splice(l <=
									c ? c + 1 : c, 1), n && n.splice(l <= c ? c +
									1 : c, 1)
							} else if (l < u && i[l] === t && (c >= u || i[c] !== e)) {
								var h = n ? n[l] : void 0;
								i.splice(c, 0, e), n && n.splice(c, 0, h), i.splice(c <=
									l ? l + 1 : l, 1), n && n.splice(c <= l ? l +
									1 : l, 1)
							}
						}
					}, i
			}), {
				isClass: !0
			}));
		var cr = Qe("number", ["typed"], (function(e) {
				var t = (0, e.typed)("number", {
					"": function() {
						return 0
					},
					number: function(e) {
						return e
					},
					string: function(e) {
						if ("NaN" === e) return NaN;
						var t, r, n = (r = (t = e).match(
							/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/)) ? {
							input: t,
							radix: {
								"0b": 2,
								"0o": 8,
								"0x": 16
							} [r[1]],
							integerPart: r[2],
							fractionalPart: r[3]
						} : null;
						if (n) return function(e) {
							for (var t = parseInt(e.integerPart, e
									.radix), r = 0, n = 0; n < e
								.fractionalPart.length; n++) {
								r += parseInt(e.fractionalPart[n], e
									.radix) / Math.pow(e.radix, n +
									1)
							}
							var i = t + r;
							if (isNaN(i)) throw new SyntaxError(
								'String "' + e.input +
								'" is no valid number');
							return i
						}(n);
						var i = 0,
							a = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
						a && (i = Number(a[2]), e = a[1]);
						var o = Number(e);
						if (isNaN(o)) throw new SyntaxError('String "' + e +
							'" is no valid number');
						if (a) {
							if (o > Math.pow(2, i) - 1) throw new SyntaxError(
								'String "'.concat(e,
									'" is out of range'));
							o >= Math.pow(2, i - 1) && (o -= Math.pow(2, i))
						}
						return o
					},
					BigNumber: function(e) {
						return e.toNumber()
					},
					Fraction: function(e) {
						return e.valueOf()
					},
					Unit: function(e) {
						throw new Error(
							"Second argument with valueless unit expected")
					},
					null: function(e) {
						return 0
					},
					"Unit, string | Unit": function(e, t) {
						return e.toNumber(t)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				});
				return t.fromJSON = function(e) {
					return parseFloat(e.value)
				}, t
			})),
			fr = Qe("string", ["typed"], (function(e) {
				return (0, e.typed)("string", {
					"": function() {
						return ""
					},
					number: te,
					null: function(e) {
						return "null"
					},
					boolean: function(e) {
						return e + ""
					},
					string: function(e) {
						return e
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					},
					any: function(e) {
						return String(e)
					}
				})
			})),
			lr = Qe("boolean", ["typed"], (function(e) {
				return (0, e.typed)("boolean", {
					"": function() {
						return !1
					},
					boolean: function(e) {
						return e
					},
					number: function(e) {
						return !!e
					},
					null: function(e) {
						return !1
					},
					BigNumber: function(e) {
						return !e.isZero()
					},
					string: function(e) {
						var t = e.toLowerCase();
						if ("true" === t) return !0;
						if ("false" === t) return !1;
						var r = Number(e);
						if ("" !== e && !isNaN(r)) return !!r;
						throw new Error('Cannot convert "' + e +
							'" to a boolean')
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			pr = Qe("bignumber", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("bignumber", {
					"": function() {
						return new r(0)
					},
					number: function(e) {
						return new r(e + "")
					},
					string: function(e) {
						var t = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
						if (t) {
							var n = t[2],
								i = r(t[1]),
								a = new r(2).pow(Number(n));
							if (i.gt(a.sub(1))) throw new SyntaxError('String "'
								.concat(e, '" is out of range'));
							var o = new r(2).pow(Number(n) - 1);
							return i.gte(o) ? i.sub(a) : i
						}
						return new r(e)
					},
					BigNumber: function(e) {
						return e
					},
					Fraction: function(e) {
						return new r(e.n).div(e.d).times(e.s)
					},
					null: function(e) {
						return new r(0)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			mr = Qe("complex", ["typed", "Complex"], (function(e) {
				var t = e.typed,
					r = e.Complex;
				return t("complex", {
					"": function() {
						return r.ZERO
					},
					number: function(e) {
						return new r(e, 0)
					},
					"number, number": function(e, t) {
						return new r(e, t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return new r(e.toNumber(), t.toNumber())
					},
					Fraction: function(e) {
						return new r(e.valueOf(), 0)
					},
					Complex: function(e) {
						return e.clone()
					},
					string: function(e) {
						return r(e)
					},
					null: function(e) {
						return r(0)
					},
					Object: function(e) {
						if ("re" in e && "im" in e) return new r(e.re, e.im);
						if ("r" in e && "phi" in e || "abs" in e && "arg" in e)
							return new r(e);
						throw new Error(
							"Expected object with properties (re and im) or (r and phi) or (abs and arg)"
							)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			hr = Qe("fraction", ["typed", "Fraction"], (function(e) {
				var t = e.typed,
					r = e.Fraction;
				return t("fraction", {
					number: function(e) {
						if (!isFinite(e) || isNaN(e)) throw new Error(e +
							" cannot be represented as a fraction");
						return new r(e)
					},
					string: function(e) {
						return new r(e)
					},
					"number, number": function(e, t) {
						return new r(e, t)
					},
					null: function(e) {
						return new r(0)
					},
					BigNumber: function(e) {
						return new r(e.toString())
					},
					Fraction: function(e) {
						return e
					},
					Object: function(e) {
						return new r(e)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			dr = (r(49), Qe("matrix", ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], (function(
				e) {
				var t = e.typed,
					r = (e.Matrix, e.DenseMatrix),
					n = e.SparseMatrix;
				return t("matrix", {
					"": function() {
						return i([])
					},
					string: function(e) {
						return i([], e)
					},
					"string, string": function(e, t) {
						return i([], e, t)
					},
					Array: function(e) {
						return i(e)
					},
					Matrix: function(e) {
						return i(e, e.storage())
					},
					"Array | Matrix, string": i,
					"Array | Matrix, string, string": i
				});

				function i(e, t, i) {
					if ("dense" === t || "default" === t || void 0 === t) return new r(
						e, i);
					if ("sparse" === t) return new n(e, i);
					throw new TypeError("Unknown matrix type " + JSON.stringify(t) +
						".")
				}
			}))),
			vr = Qe("matrixFromFunction", ["typed", "matrix", "isZero"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.isZero;
				return t("matrixFromFunction", {
					"Array | Matrix, function, string, string": function(e, t, r,
					n) {
						return i(e, t, r, n)
					},
					"Array | Matrix, function, string": function(e, t, r) {
						return i(e, t, r)
					},
					"Matrix, function": function(e, t) {
						return i(e, t, "dense")
					},
					"Array, function": function(e, t) {
						return i(e, t, "dense").toArray()
					},
					"Array | Matrix, string, function": function(e, t, r) {
						return i(e, r, t)
					},
					"Array | Matrix, string, string, function": function(e, t, r,
					n) {
						return i(e, n, t, r)
					}
				});

				function i(e, t, i, a) {
					var o;
					return (o = void 0 !== a ? r(i, a) : r(i)).resize(e), o.forEach((
						function(e, r) {
							var i = t(r);
							n(i) || o.set(r, i)
						})), o
				}
			}));

		function yr(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return gr(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return gr(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function gr(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		var xr = Qe("matrixFromRows", ["typed", "matrix", "flatten", "size"], (function(e) {
			var t = e.typed,
				r = e.matrix,
				n = e.flatten,
				i = e.size;
			return t("matrixFromRows", {
				"...Array": function(e) {
					return a(e)
				},
				"...Matrix": function(e) {
					return r(a(e.map((function(e) {
						return e.toArray()
					}))))
				}
			});

			function a(e) {
				if (0 === e.length) throw new TypeError(
					"At least one row is needed to construct a matrix.");
				var t, r = o(e[0]),
					i = [],
					a = yr(e);
				try {
					for (a.s(); !(t = a.n()).done;) {
						var s = t.value,
							u = o(s);
						if (u !== r) throw new TypeError(
							"The vectors had different length: " + (0 | r) +
							" ≠ " + (0 | u));
						i.push(n(s))
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				return i
			}

			function o(e) {
				var t = i(e);
				if (1 === t.length) return t[0];
				if (2 === t.length) {
					if (1 === t[0]) return t[1];
					if (1 === t[1]) return t[0];
					throw new TypeError(
						"At least one of the arguments is not a vector.")
				}
				throw new TypeError(
					"Only one- or two-dimensional vectors are supported.")
			}
		}));

		function br(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return wr(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return wr(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function wr(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		var Nr = Qe("matrixFromColumns", ["typed", "matrix", "flatten", "size"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.flatten,
					i = e.size;
				return t("matrixFromColumns", {
					"...Array": function(e) {
						return a(e)
					},
					"...Matrix": function(e) {
						return r(a(e.map((function(e) {
							return e.toArray()
						}))))
					}
				});

				function a(e) {
					if (0 === e.length) throw new TypeError(
						"At least one column is needed to construct a matrix.");
					for (var t = o(e[0]), r = [], i = 0; i < t; i++) r[i] = [];
					var a, s = br(e);
					try {
						for (s.s(); !(a = s.n()).done;) {
							var u = a.value,
								c = o(u);
							if (c !== t) throw new TypeError(
								"The vectors had different length: " + (0 | t) +
								" ≠ " + (0 | c));
							for (var f = n(u), l = 0; l < t; l++) r[l].push(f[l])
						}
					} catch (e) {
						s.e(e)
					} finally {
						s.f()
					}
					return r
				}

				function o(e) {
					var t = i(e);
					if (1 === t.length) return t[0];
					if (2 === t.length) {
						if (1 === t[0]) return t[1];
						if (1 === t[1]) return t[0];
						throw new TypeError(
							"At least one of the arguments is not a vector.")
					}
					throw new TypeError(
						"Only one- or two-dimensional vectors are supported.")
				}
			})),
			Mr = Qe("splitUnit", ["typed"], (function(e) {
				return (0, e.typed)("splitUnit", {
					"Unit, Array": function(e, t) {
						return e.splitUnit(t)
					}
				})
			})),
			Er = "number, number";

		function Sr(e) {
			return Math.abs(e)
		}

		function Ar(e, t) {
			return e + t
		}

		function Or(e, t) {
			return e * t
		}

		function Cr(e) {
			return -e
		}

		function _r(e) {
			return e
		}

		function Tr(e) {
			return Q(e)
		}

		function Ir(e) {
			return Math.ceil(e)
		}

		function kr(e) {
			return e * e * e
		}

		function zr(e) {
			return Math.exp(e)
		}

		function Rr(e) {
			return K(e)
		}

		function qr(e, t) {
			if (!Z(e) || !Z(t)) throw new Error(
				"Parameters in function gcd must be integer numbers");
			for (var r; 0 !== t;) r = e % t, e = t, t = r;
			return e < 0 ? -e : e
		}

		function Br(e, t) {
			if (!Z(e) || !Z(t)) throw new Error(
				"Parameters in function lcm must be integer numbers");
			if (0 === e || 0 === t) return 0;
			for (var r, n = e * t; 0 !== t;) t = e % (r = t), e = r;
			return Math.abs(n / e)
		}

		function Dr(e) {
			return Math.log(e)
		}

		function jr(e) {
			return J(e)
		}

		function Pr(e) {
			return Y(e)
		}

		function Fr(e, t) {
			if (t > 0) return e - t * Math.floor(e / t);
			if (0 === t) return e;
			throw new Error("Cannot calculate mod for a negative divisor")
		}

		function Ur(e, t) {
			var r = t < 0;
			if (r && (t = -t), 0 === t) throw new Error("Root must be non-zero");
			if (e < 0 && Math.abs(t) % 2 != 1) throw new Error(
				"Root must be odd when a is negative.");
			if (0 === e) return r ? 1 / 0 : 0;
			if (!isFinite(e)) return r ? 0 : e;
			var n = Math.pow(Math.abs(e), 1 / t);
			return n = e < 0 ? -n : n, r ? 1 / n : n
		}

		function Lr(e) {
			return W(e)
		}

		function $r(e) {
			return e * e
		}

		function Hr(e, t) {
			var r, n, i, a = 0,
				o = 1,
				s = 1,
				u = 0;
			if (!Z(e) || !Z(t)) throw new Error(
				"Parameters in function xgcd must be integer numbers");
			for (; t;) i = e - (n = Math.floor(e / t)) * t, r = a, a = o - n * a, o = r, r = s, s =
				u - n * s, u = r, e = t, t = i;
			return e < 0 ? [-e, -o, -u] : [e, e ? o : 0, u]
		}

		function Gr(e, t) {
			return e * e < 1 && t === 1 / 0 || e * e > 1 && t === -1 / 0 ? 0 : Math.pow(e, t)
		}

		function Vr(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			return parseFloat(ne(e, t))
		}
		Sr.signature = "number", Ar.signature = Er, Or.signature = Er, Cr.signature = "number", _r
			.signature = "number", Tr.signature = "number", Ir.signature = "number", kr.signature =
			"number", zr.signature = "number", Rr.signature = "number", qr.signature = Er, Br
			.signature = Er, Dr.signature = "number", jr.signature = "number", Pr.signature =
			"number", Fr.signature = Er, Ur.signature = Er, Lr.signature = "number", $r.signature =
			"number", Hr.signature = Er, Gr.signature = Er, Vr.signature = Er;
		var Zr = Qe("unaryMinus", ["typed"], (function(e) {
				return (0, e.typed)("unaryMinus", {
					number: Cr,
					Complex: function(e) {
						return e.neg()
					},
					BigNumber: function(e) {
						return e.neg()
					},
					Fraction: function(e) {
						return e.neg()
					},
					Unit: function(e) {
						var t = e.clone();
						return t.value = this(e.value), t
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			Wr = Qe("unaryPlus", ["typed", "config", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.BigNumber;
				return t("unaryPlus", {
					number: _r,
					Complex: function(e) {
						return e
					},
					BigNumber: function(e) {
						return e
					},
					Fraction: function(e) {
						return e
					},
					Unit: function(e) {
						return e.clone()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					"boolean | string": function(e) {
						return "BigNumber" === r.number ? new n(+e) : +e
					}
				})
			})),
			Yr = Qe("abs", ["typed"], (function(e) {
				return (0, e.typed)("abs", {
					number: Sr,
					Complex: function(e) {
						return e.abs()
					},
					BigNumber: function(e) {
						return e.abs()
					},
					Fraction: function(e) {
						return e.abs()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					Unit: function(e) {
						return e.abs()
					}
				})
			})),
			Jr = Qe("apply", ["typed", "isInteger"], (function(e) {
				var t = e.typed,
					r = e.isInteger;
				return t("apply", {
					"Array | Matrix, number | BigNumber, function": function(e, t,
						n) {
						if (!r(t)) throw new TypeError(
							"Integer number expected for dimension");
						var i = Array.isArray(e) ? Se(e) : e.size();
						if (t < 0 || t >= i.length) throw new Ee(t, i.length);
						return m(e) ? e.create(Xr(e.valueOf(), t, n)) : Xr(e, t,
							n)
					}
				})
			}));

		function Xr(e, t, r) {
			var n, i, a;
			if (t <= 0) {
				if (Array.isArray(e[0])) {
					for (a = function(e) {
							var t, r, n = e.length,
								i = e[0].length,
								a = [];
							for (r = 0; r < i; r++) {
								var o = [];
								for (t = 0; t < n; t++) o.push(e[t][r]);
								a.push(o)
							}
							return a
						}(e), i = [], n = 0; n < a.length; n++) i[n] = Xr(a[n], t - 1, r);
					return i
				}
				return r(e)
			}
			for (i = [], n = 0; n < e.length; n++) i[n] = Xr(e[n], t - 1, r);
			return i
		}
		var Qr = Qe("addScalar", ["typed"], (function(e) {
				return (0, e.typed)("addScalar", {
					"number, number": Ar,
					"Complex, Complex": function(e, t) {
						return e.add(t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.plus(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.add(t)
					},
					"Unit, Unit": function(e, t) {
						if (null === e.value || void 0 === e.value)
						throw new Error(
								"Parameter x contains a unit with undefined value"
								);
						if (null === t.value || void 0 === t.value)
						throw new Error(
								"Parameter y contains a unit with undefined value"
								);
						if (!e.equalBase(t)) throw new Error(
							"Units do not match");
						var r = e.clone();
						return r.value = this(r.value, t.value), r.fixPrefix = !
							1, r
					}
				})
			})),
			Kr = Qe("cbrt", ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex",
				"BigNumber", "Fraction"
			], (function(e) {
				var t = e.config,
					r = e.typed,
					n = e.isNegative,
					i = e.unaryMinus,
					a = e.matrix,
					o = e.Complex,
					f = e.BigNumber,
					l = e.Fraction;
				return r("cbrt", {
					number: Tr,
					Complex: p,
					"Complex, boolean": p,
					BigNumber: function(e) {
						return e.cbrt()
					},
					Unit: function(e) {
						if (e.value && u(e.value)) {
							var t = e.clone();
							return t.value = 1, (t = t.pow(1 / 3)).value = p(e
								.value), t
						}
						var r, a = n(e.value);
						a && (e.value = i(e.value)), r = s(e.value) ? new f(1)
							.div(3) : c(e.value) ? new l(1, 3) : 1 / 3;
						var o = e.pow(r);
						return a && (o.value = i(o.value)), o
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				});

				function p(e, r) {
					var n = e.arg() / 3,
						i = e.abs(),
						s = new o(Tr(i), 0).mul(new o(0, n).exp());
					if (r) {
						var u = [s, new o(Tr(i), 0).mul(new o(0, n + 2 * Math.PI / 3)
						.exp()), new o(Tr(i), 0).mul(new o(0, n - 2 * Math.PI / 3)
							.exp())
						];
						return "Array" === t.matrix ? u : a(u)
					}
					return s
				}
			})),
			en = r(56),
			tn = r.n(en),
			rn = Qe("algorithm11", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i, a) {
					var o = e._values,
						s = e._index,
						u = e._ptr,
						c = e._size,
						f = e._datatype;
					if (!o) throw new Error(
						"Cannot perform operation on Pattern Sparse Matrix and Scalar value"
						);
					var l, p = c[0],
						m = c[1],
						h = r,
						d = 0,
						v = i;
					"string" == typeof f && (l = f, h = t.find(r, [l, l]), d = t
						.convert(0, l), n = t.convert(n, l), v = t.find(i, [l, l]));
					for (var y = [], g = [], x = [], b = 0; b < m; b++) {
						x[b] = g.length;
						for (var w = u[b], N = u[b + 1], M = w; M < N; M++) {
							var E = s[M],
								S = a ? v(n, o[M]) : v(o[M], n);
							h(S, d) || (g.push(E), y.push(S))
						}
					}
					return x[m] = g.length, e.createSparseMatrix({
						values: y,
						index: g,
						ptr: x,
						size: [p, m],
						datatype: l
					})
				}
			})),
			nn = Qe("algorithm14", ["typed"], (function(e) {
				var t = e.typed;
				return function(e, r, n, i) {
					var a, o = e._data,
						s = e._size,
						u = e._datatype,
						c = n;
					"string" == typeof u && (a = u, r = t.convert(r, a), c = t.find(n, [
						a, a
					]));
					var f = s.length > 0 ? function e(t, r, n, i, a, o, s) {
						var u = [];
						if (r === n.length - 1)
							for (var c = 0; c < i; c++) u[c] = s ? t(o, a[c]) : t(a[
								c], o);
						else
							for (var f = 0; f < i; f++) u[f] = e(t, r + 1, n, n[r +
								1], a[f], o, s);
						return u
					}(c, 0, s, s[0], o, r, i) : [];
					return e.createDenseMatrix({
						data: f,
						size: He(s),
						datatype: a
					})
				}
			})),
			an = Qe("ceil", ["typed", "config", "round", "matrix", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.round,
					i = e.matrix,
					a = e.equalScalar,
					o = rn({
						typed: t,
						equalScalar: a
					}),
					s = nn({
						typed: t
					});
				return t("ceil", {
					number: function(e) {
						return ue(e, n(e), r.epsilon) ? n(e) : Ir(e)
					},
					"number, number": function(e, t) {
						if (ue(e, n(e, t), r.epsilon)) return n(e, t);
						var i = "".concat(e, "e").split("e"),
							a = tn()(i, 2),
							o = a[0],
							s = a[1],
							u = Math.ceil(Number("".concat(o, "e").concat(
								Number(s) + t))),
							c = "".concat(u, "e").split("e"),
							f = tn()(c, 2);
						return o = f[0], s = f[1], Number("".concat(o, "e")
							.concat(Number(s) - t))
					},
					Complex: function(e) {
						return e.ceil()
					},
					"Complex, number": function(e, t) {
						return e.ceil(t)
					},
					BigNumber: function(e) {
						return or(e, n(e), r.epsilon) ? n(e) : e.ceil()
					},
					"BigNumber, BigNumber": function(e, t) {
						return or(e, n(e, t), r.epsilon) ? n(e, t) : e
							.toDecimalPlaces(t.toNumber(), At.a.ROUND_CEIL)
					},
					Fraction: function(e) {
						return e.ceil()
					},
					"Fraction, number": function(e, t) {
						return e.ceil(t)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					"Array | Matrix, number": function(e, t) {
						var r = this;
						return Ht(e, (function(e) {
							return r(e, t)
						}), !0)
					},
					"SparseMatrix, number | BigNumber": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, number | BigNumber": function(e, t) {
						return s(e, t, this, !1)
					},
					"number | Complex | BigNumber, Array": function(e, t) {
						return s(i(t), e, this, !0).valueOf()
					}
				})
			})),
			on = Qe("cube", ["typed"], (function(e) {
				return (0, e.typed)("cube", {
					number: kr,
					Complex: function(e) {
						return e.mul(e).mul(e)
					},
					BigNumber: function(e) {
						return e.times(e).times(e)
					},
					Fraction: function(e) {
						return e.pow(3)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					Unit: function(e) {
						return e.pow(3)
					}
				})
			})),
			sn = Qe("exp", ["typed"], (function(e) {
				return (0, e.typed)("exp", {
					number: zr,
					Complex: function(e) {
						return e.exp()
					},
					BigNumber: function(e) {
						return e.exp()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			un = Qe("expm1", ["typed", "Complex"], (function(e) {
				var t = e.typed,
					r = e.Complex;
				return t("expm1", {
					number: Rr,
					Complex: function(e) {
						var t = Math.exp(e.re);
						return new r(t * Math.cos(e.im) - 1, t * Math.sin(e.im))
					},
					BigNumber: function(e) {
						return e.exp().minus(1)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			cn = Qe("fix", ["typed", "Complex", "matrix", "ceil", "floor"], (function(e) {
				var t = e.typed,
					r = e.Complex,
					n = e.matrix,
					i = e.ceil,
					a = e.floor,
					o = nn({
						typed: t
					});
				return t("fix", {
					number: function(e) {
						return e > 0 ? a(e) : i(e)
					},
					"number, number | BigNumber": function(e, t) {
						return e > 0 ? a(e, t) : i(e, t)
					},
					Complex: function(e) {
						return new r(e.re > 0 ? Math.floor(e.re) : Math.ceil(e
								.re), e.im > 0 ? Math.floor(e.im) : Math
							.ceil(e.im))
					},
					"Complex, number | BigNumber": function(e, t) {
						return new r(e.re > 0 ? a(e.re, t) : i(e.re, t), e.im >
							0 ? a(e.im, t) : i(e.im, t))
					},
					BigNumber: function(e) {
						return e.isNegative() ? i(e) : a(e)
					},
					"BigNumber, number | BigNumber": function(e, t) {
						return e.isNegative() ? i(e, t) : a(e, t)
					},
					Fraction: function(e) {
						return e.s < 0 ? e.ceil() : e.floor()
					},
					"Fraction, number | BigNumber": function(e, t) {
						return e.s < 0 ? e.ceil(t) : e.floor(t)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					"Array | Matrix, number | BigNumber": function(e, t) {
						var r = this;
						return Ht(e, (function(e) {
							return r(e, t)
						}), !0)
					},
					"number | Complex | BigNumber, Array": function(e, t) {
						return o(n(t), e, this, !0).valueOf()
					}
				})
			})),
			fn = Qe("floor", ["typed", "config", "round", "matrix", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.round,
					i = e.matrix,
					a = e.equalScalar,
					o = rn({
						typed: t,
						equalScalar: a
					}),
					s = nn({
						typed: t
					});
				return t("floor", {
					number: function(e) {
						return ue(e, n(e), r.epsilon) ? n(e) : Math.floor(e)
					},
					"number, number": function(e, t) {
						if (ue(e, n(e, t), r.epsilon)) return n(e, t);
						var i = "".concat(e, "e").split("e"),
							a = tn()(i, 2),
							o = a[0],
							s = a[1],
							u = Math.floor(Number("".concat(o, "e").concat(
								Number(s) + t))),
							c = "".concat(u, "e").split("e"),
							f = tn()(c, 2);
						return o = f[0], s = f[1], Number("".concat(o, "e")
							.concat(Number(s) - t))
					},
					Complex: function(e) {
						return e.floor()
					},
					"Complex, number": function(e, t) {
						return e.floor(t)
					},
					BigNumber: function(e) {
						return or(e, n(e), r.epsilon) ? n(e) : e.floor()
					},
					"BigNumber, BigNumber": function(e, t) {
						return or(e, n(e, t), r.epsilon) ? n(e, t) : e
							.toDecimalPlaces(t.toNumber(), At.a.ROUND_FLOOR)
					},
					Fraction: function(e) {
						return e.floor()
					},
					"Fraction, number": function(e, t) {
						return e.floor(t)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					"Array | Matrix, number": function(e, t) {
						var r = this;
						return Ht(e, (function(e) {
							return r(e, t)
						}), !0)
					},
					"SparseMatrix, number | BigNumber": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, number | BigNumber": function(e, t) {
						return s(e, t, this, !1)
					},
					"number | Complex | BigNumber, Array": function(e, t) {
						return s(i(t), e, this, !0).valueOf()
					}
				})
			})),
			ln = Qe("algorithm01", ["typed"], (function(e) {
				var t = e.typed;
				return function(e, r, n, i) {
					var a = e._data,
						o = e._size,
						s = e._datatype,
						u = r._values,
						c = r._index,
						f = r._ptr,
						l = r._size,
						p = r._datatype;
					if (o.length !== l.length) throw new Me(o.length, l.length);
					if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + o +
						") must match Matrix B (" + l + ")");
					if (!u) throw new Error(
						"Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"
						);
					var m, h, d = o[0],
						v = o[1],
						y = "string" == typeof s && s === p ? s : void 0,
						g = y ? t.find(n, [y, y]) : n,
						x = [];
					for (m = 0; m < d; m++) x[m] = [];
					var b = [],
						w = [];
					for (h = 0; h < v; h++) {
						for (var N = h + 1, M = f[h], E = f[h + 1], S = M; S < E; S++)
							b[m = c[S]] = i ? g(u[S], a[m][h]) : g(a[m][h], u[S]), w[
							m] = N;
						for (m = 0; m < d; m++) w[m] === N ? x[m][h] = b[m] : x[m][h] =
							a[m][h]
					}
					return e.createDenseMatrix({
						data: x,
						size: [d, v],
						datatype: y
					})
				}
			})),
			pn = Qe("algorithm04", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i) {
					var a = e._values,
						o = e._index,
						s = e._ptr,
						u = e._size,
						c = e._datatype,
						f = n._values,
						l = n._index,
						p = n._ptr,
						m = n._size,
						h = n._datatype;
					if (u.length !== m.length) throw new Me(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + u +
						") must match Matrix B (" + m + ")");
					var d, v = u[0],
						y = u[1],
						g = r,
						x = 0,
						b = i;
					"string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]),
						x = t.convert(0, d), b = t.find(i, [d, d]));
					var w, N, M, E, S, A = a && f ? [] : void 0,
						O = [],
						C = [],
						_ = a && f ? [] : void 0,
						T = a && f ? [] : void 0,
						I = [],
						k = [];
					for (N = 0; N < y; N++) {
						C[N] = O.length;
						var z = N + 1;
						for (E = s[N], S = s[N + 1], M = E; M < S; M++) w = o[M], O
							.push(w), I[w] = z, _ && (_[w] = a[M]);
						for (E = p[N], S = p[N + 1], M = E; M < S; M++)
							if (I[w = l[M]] === z) {
								if (_) {
									var R = b(_[w], f[M]);
									g(R, x) ? I[w] = null : _[w] = R
								}
							} else O.push(w), k[w] = z, T && (T[w] = f[M]);
						if (_ && T)
							for (M = C[N]; M < O.length;) I[w = O[M]] === z ? (A[M] = _[
									w], M++) : k[w] === z ? (A[M] = T[w], M++) : O
								.splice(M, 1)
					}
					return C[y] = O.length, e.createSparseMatrix({
						values: A,
						index: O,
						ptr: C,
						size: [v, y],
						datatype: d
					})
				}
			})),
			mn = Qe("algorithm10", ["typed", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.DenseMatrix;
				return function(e, n, i, a) {
					var o = e._values,
						s = e._index,
						u = e._ptr,
						c = e._size,
						f = e._datatype;
					if (!o) throw new Error(
						"Cannot perform operation on Pattern Sparse Matrix and Scalar value"
						);
					var l, p = c[0],
						m = c[1],
						h = i;
					"string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [
						l, l
					]));
					for (var d = [], v = [], y = [], g = 0; g < m; g++) {
						for (var x = g + 1, b = u[g], w = u[g + 1], N = b; N < w; N++) {
							var M = s[N];
							v[M] = o[N], y[M] = x
						}
						for (var E = 0; E < p; E++) 0 === g && (d[E] = []), y[E] === x ?
							d[E][g] = a ? h(n, v[E]) : h(v[E], n) : d[E][g] = n
					}
					return new r({
						data: d,
						size: [p, m],
						datatype: l
					})
				}
			})),
			hn = Qe("algorithm13", ["typed"], (function(e) {
				var t = e.typed;
				return function(e, r, n) {
					var i, a = e._data,
						o = e._size,
						s = e._datatype,
						u = r._data,
						c = r._size,
						f = r._datatype,
						l = [];
					if (o.length !== c.length) throw new Me(o.length, c.length);
					for (var p = 0; p < o.length; p++) {
						if (o[p] !== c[p]) throw new RangeError(
							"Dimension mismatch. Matrix A (" + o +
							") must match Matrix B (" + c + ")");
						l[p] = o[p]
					}
					var m = n;
					"string" == typeof s && s === f && (i = s, m = t.find(n, [i, i]));
					var h = l.length > 0 ? function e(t, r, n, i, a, o) {
						var s = [];
						if (r === n.length - 1)
							for (var u = 0; u < i; u++) s[u] = t(a[u], o[u]);
						else
							for (var c = 0; c < i; c++) s[c] = e(t, r + 1, n, n[r +
								1], a[c], o[c]);
						return s
					}(m, 0, l, l[0], a, u) : [];
					return e.createDenseMatrix({
						data: h,
						size: l,
						datatype: i
					})
				}
			})),
			dn = Qe("gcd", ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.BigNumber,
						a = e.DenseMatrix,
						o = ln({
							typed: t
						}),
						s = pn({
							typed: t,
							equalScalar: n
						}),
						u = mn({
							typed: t,
							DenseMatrix: a
						}),
						c = hn({
							typed: t
						}),
						f = nn({
							typed: t
						});
					return t("gcd", {
						"number, number": qr,
						"BigNumber, BigNumber": function(e, t) {
							if (!e.isInt() || !t.isInt()) throw new Error(
								"Parameters in function gcd must be integer numbers"
								);
							var r = new i(0);
							for (; !t.isZero();) {
								var n = e.mod(t);
								e = t, t = n
							}
							return e.lt(r) ? e.neg() : e
						},
						"Fraction, Fraction": function(e, t) {
							return e.gcd(t)
						},
						"SparseMatrix, SparseMatrix": function(e, t) {
							return s(e, t, this)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return o(t, e, this, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return o(e, t, this, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return c(e, t, this)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return u(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return f(e, t, this, !1)
						},
						"number | BigNumber, SparseMatrix": function(e, t) {
							return u(t, e, this, !0)
						},
						"number | BigNumber, DenseMatrix": function(e, t) {
							return f(t, e, this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return f(r(e), t, this, !1).valueOf()
						},
						"number | BigNumber, Array": function(e, t) {
							return f(r(t), e, this, !0).valueOf()
						},
						"Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(
							e, t, r) {
							for (var n = this(e, t), i = 0; i < r.length; i++) n =
								this(n, r[i]);
							return n
						}
					})
				})),
			vn = Qe("algorithm02", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i, a) {
					var o = e._data,
						s = e._size,
						u = e._datatype,
						c = n._values,
						f = n._index,
						l = n._ptr,
						p = n._size,
						m = n._datatype;
					if (s.length !== p.length) throw new Me(s.length, p.length);
					if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + s +
						") must match Matrix B (" + p + ")");
					if (!c) throw new Error(
						"Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"
						);
					var h, d = s[0],
						v = s[1],
						y = r,
						g = 0,
						x = i;
					"string" == typeof u && u === m && (h = u, y = t.find(r, [h, h]),
						g = t.convert(0, h), x = t.find(i, [h, h]));
					for (var b = [], w = [], N = [], M = 0; M < v; M++) {
						N[M] = w.length;
						for (var E = l[M], S = l[M + 1], A = E; A < S; A++) {
							var O = f[A],
								C = a ? x(c[A], o[O][M]) : x(o[O][M], c[A]);
							y(C, g) || (w.push(O), b.push(C))
						}
					}
					return N[v] = w.length, n.createSparseMatrix({
						values: b,
						index: w,
						ptr: N,
						size: [d, v],
						datatype: h
					})
				}
			})),
			yn = Qe("algorithm06", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i) {
					var a = e._values,
						o = e._size,
						s = e._datatype,
						u = n._values,
						c = n._size,
						f = n._datatype;
					if (o.length !== c.length) throw new Me(o.length, c.length);
					if (o[0] !== c[0] || o[1] !== c[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + o +
						") must match Matrix B (" + c + ")");
					var l, p = o[0],
						m = o[1],
						h = r,
						d = 0,
						v = i;
					"string" == typeof s && s === f && (l = s, h = t.find(r, [l, l]),
						d = t.convert(0, l), v = t.find(i, [l, l]));
					for (var y = a && u ? [] : void 0, g = [], x = [], b = y ? [] :
							void 0, w = [], N = [], M = 0; M < m; M++) {
						x[M] = g.length;
						var E = M + 1;
						if (Zt(e, M, w, b, N, E, g, v), Zt(n, M, w, b, N, E, g, v), b)
							for (var S = x[M]; S < g.length;) {
								var A = g[S];
								if (N[A] === E) {
									var O = b[A];
									h(O, d) ? g.splice(S, 1) : (y.push(O), S++)
								} else g.splice(S, 1)
							} else
								for (var C = x[M]; C < g.length;) {
									N[g[C]] !== E ? g.splice(C, 1) : C++
								}
					}
					return x[m] = g.length, e.createSparseMatrix({
						values: y,
						index: g,
						ptr: x,
						size: [p, m],
						datatype: l
					})
				}
			})),
			gn = Qe("lcm", ["typed", "matrix", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = vn({
						typed: t,
						equalScalar: n
					}),
					a = yn({
						typed: t,
						equalScalar: n
					}),
					o = rn({
						typed: t,
						equalScalar: n
					}),
					s = hn({
						typed: t
					}),
					u = nn({
						typed: t
					});
				return t("lcm", {
					"number, number": Br,
					"BigNumber, BigNumber": function(e, t) {
						if (!e.isInt() || !t.isInt()) throw new Error(
							"Parameters in function lcm must be integer numbers"
							);
						if (e.isZero()) return e;
						if (t.isZero()) return t;
						var r = e.times(t);
						for (; !t.isZero();) {
							var n = t;
							t = e.mod(n), e = n
						}
						return r.div(e).abs()
					},
					"Fraction, Fraction": function(e, t) {
						return e.lcm(t)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return i(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return i(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return s(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, number | BigNumber": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, number | BigNumber": function(e, t) {
						return u(e, t, this, !1)
					},
					"number | BigNumber, SparseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"number | BigNumber, DenseMatrix": function(e, t) {
						return u(t, e, this, !0)
					},
					"Array, number | BigNumber": function(e, t) {
						return u(r(e), t, this, !1).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return u(r(t), e, this, !0).valueOf()
					},
					"Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function(
						e, t, r) {
						for (var n = this(e, t), i = 0; i < r.length; i++) n =
							this(n, r[i]);
						return n
					}
				})
			})),
			xn = Qe("log10", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("log10", {
					number: function(e) {
						return e >= 0 || r.predictable ? jr(e) : new n(e, 0)
							.log().div(Math.LN10)
					},
					Complex: function(e) {
						return new n(e).log().div(Math.LN10)
					},
					BigNumber: function(e) {
						return !e.isNegative() || r.predictable ? e.log() :
							new n(e.toNumber(), 0).log().div(Math.LN10)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			bn = Qe("log2", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("log2", {
					number: function(e) {
						return e >= 0 || r.predictable ? Pr(e) : i(new n(e, 0))
					},
					Complex: i,
					BigNumber: function(e) {
						return !e.isNegative() || r.predictable ? e.log(2) : i(
							new n(e.toNumber(), 0))
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				});

				function i(e) {
					var t = Math.sqrt(e.re * e.re + e.im * e.im);
					return new n(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math
						.atan2(e.im, e.re) / Math.LN2)
				}
			})),
			wn = Qe("algorithm03", ["typed"], (function(e) {
				var t = e.typed;
				return function(e, r, n, i) {
					var a = e._data,
						o = e._size,
						s = e._datatype,
						u = r._values,
						c = r._index,
						f = r._ptr,
						l = r._size,
						p = r._datatype;
					if (o.length !== l.length) throw new Me(o.length, l.length);
					if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + o +
						") must match Matrix B (" + l + ")");
					if (!u) throw new Error(
						"Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"
						);
					var m, h = o[0],
						d = o[1],
						v = 0,
						y = n;
					"string" == typeof s && s === p && (m = s, v = t.convert(0, m), y =
						t.find(n, [m, m]));
					for (var g = [], x = 0; x < h; x++) g[x] = [];
					for (var b = [], w = [], N = 0; N < d; N++) {
						for (var M = N + 1, E = f[N], S = f[N + 1], A = E; A < S; A++) {
							var O = c[A];
							b[O] = i ? y(u[A], a[O][N]) : y(a[O][N], u[A]), w[O] = M
						}
						for (var C = 0; C < h; C++) w[C] === M ? g[C][N] = b[C] : g[C][
							N] = i ? y(v, a[C][N]) : y(a[C][N], v)
					}
					return e.createDenseMatrix({
						data: g,
						size: [h, d],
						datatype: m
					})
				}
			})),
			Nn = Qe("algorithm05", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i) {
					var a = e._values,
						o = e._index,
						s = e._ptr,
						u = e._size,
						c = e._datatype,
						f = n._values,
						l = n._index,
						p = n._ptr,
						m = n._size,
						h = n._datatype;
					if (u.length !== m.length) throw new Me(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + u +
						") must match Matrix B (" + m + ")");
					var d, v = u[0],
						y = u[1],
						g = r,
						x = 0,
						b = i;
					"string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]),
						x = t.convert(0, d), b = t.find(i, [d, d]));
					var w, N, M, E, S = a && f ? [] : void 0,
						A = [],
						O = [],
						C = S ? [] : void 0,
						_ = S ? [] : void 0,
						T = [],
						I = [];
					for (N = 0; N < y; N++) {
						O[N] = A.length;
						var k = N + 1;
						for (M = s[N], E = s[N + 1]; M < E; M++) w = o[M], A.push(w), T[
							w] = k, C && (C[w] = a[M]);
						for (M = p[N], E = p[N + 1]; M < E; M++) T[w = l[M]] !== k && A
							.push(w), I[w] = k, _ && (_[w] = f[M]);
						if (S)
							for (M = O[N]; M < A.length;) {
								var z = T[w = A[M]],
									R = I[w];
								if (z === k || R === k) {
									var q = b(z === k ? C[w] : x, R === k ? _[w] : x);
									g(q, x) ? A.splice(M, 1) : (S.push(q), M++)
								}
							}
					}
					return O[y] = A.length, e.createSparseMatrix({
						values: S,
						index: A,
						ptr: O,
						size: [v, y],
						datatype: d
					})
				}
			})),
			Mn = Qe("algorithm12", ["typed", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.DenseMatrix;
				return function(e, n, i, a) {
					var o = e._values,
						s = e._index,
						u = e._ptr,
						c = e._size,
						f = e._datatype;
					if (!o) throw new Error(
						"Cannot perform operation on Pattern Sparse Matrix and Scalar value"
						);
					var l, p = c[0],
						m = c[1],
						h = i;
					"string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [
						l, l
					]));
					for (var d = [], v = [], y = [], g = 0; g < m; g++) {
						for (var x = g + 1, b = u[g], w = u[g + 1], N = b; N < w; N++) {
							var M = s[N];
							v[M] = o[N], y[M] = x
						}
						for (var E = 0; E < p; E++) 0 === g && (d[E] = []), y[E] === x ?
							d[E][g] = a ? h(n, v[E]) : h(v[E], n) : d[E][g] = a ? h(n,
								0) : h(0, n)
					}
					return new r({
						data: d,
						size: [p, m],
						datatype: l
					})
				}
			})),
			En = Qe("mod", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.DenseMatrix,
					a = vn({
						typed: t,
						equalScalar: n
					}),
					o = wn({
						typed: t
					}),
					s = Nn({
						typed: t,
						equalScalar: n
					}),
					u = rn({
						typed: t,
						equalScalar: n
					}),
					c = Mn({
						typed: t,
						DenseMatrix: i
					}),
					f = hn({
						typed: t
					}),
					l = nn({
						typed: t
					});
				return t("mod", {
					"number, number": Fr,
					"BigNumber, BigNumber": function(e, t) {
						if (t.isNeg()) throw new Error(
							"Cannot calculate mod for a negative divisor"
							);
						return t.isZero() ? e : e.mod(t)
					},
					"Fraction, Fraction": function(e, t) {
						if (t.compare(0) < 0) throw new Error(
							"Cannot calculate mod for a negative divisor"
							);
						return e.compare(0) >= 0 ? e.mod(t) : e.mod(t).add(t)
							.mod(t)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return s(e, t, this, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return f(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return u(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return l(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return l(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return l(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(r(t), e, this, !0).valueOf()
					}
				})
			})),
			Sn = Qe("multiplyScalar", ["typed"], (function(e) {
				return (0, e.typed)("multiplyScalar", {
					"number, number": Or,
					"Complex, Complex": function(e, t) {
						return e.mul(t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.times(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.mul(t)
					},
					"number | Fraction | BigNumber | Complex, Unit": function(e,
					t) {
						var r = t.clone();
						return r.value = null === r.value ? r._normalize(e) :
							this(r.value, e), r
					},
					"Unit, number | Fraction | BigNumber | Complex": function(e,
					t) {
						var r = e.clone();
						return r.value = null === r.value ? r._normalize(t) :
							this(r.value, t), r
					},
					"Unit, Unit": function(e, t) {
						return e.multiply(t)
					}
				})
			})),
			An = Qe("multiply", ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar",
				"dot"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.addScalar,
					i = e.multiplyScalar,
					a = e.equalScalar,
					o = e.dot,
					s = rn({
						typed: t,
						equalScalar: a
					}),
					u = nn({
						typed: t
					});

				function c(e, t) {
					switch (e.length) {
						case 1:
							switch (t.length) {
								case 1:
									if (e[0] !== t[0]) throw new RangeError(
										"Dimension mismatch in multiplication. Vectors must have the same length"
										);
									break;
								case 2:
									if (e[0] !== t[0]) throw new RangeError(
										"Dimension mismatch in multiplication. Vector length (" +
										e[0] + ") must match Matrix rows (" + t[0] +
										")");
									break;
								default:
									throw new Error(
										"Can only multiply a 1 or 2 dimensional matrix (Matrix B has " +
										t.length + " dimensions)")
							}
							break;
						case 2:
							switch (t.length) {
								case 1:
									if (e[1] !== t[0]) throw new RangeError(
										"Dimension mismatch in multiplication. Matrix columns (" +
										e[1] + ") must match Vector length (" + t[
										0] + ")");
									break;
								case 2:
									if (e[1] !== t[0]) throw new RangeError(
										"Dimension mismatch in multiplication. Matrix A columns (" +
										e[1] + ") must match Matrix B rows (" + t[
										0] + ")");
									break;
								default:
									throw new Error(
										"Can only multiply a 1 or 2 dimensional matrix (Matrix B has " +
										t.length + " dimensions)")
							}
							break;
						default:
							throw new Error(
								"Can only multiply a 1 or 2 dimensional matrix (Matrix A has " +
								e.length + " dimensions)")
					}
				}

				function f(e, r) {
					if ("dense" !== r.storage()) throw new Error(
						"Support for SparseMatrix not implemented");
					return function(e, r) {
						var a, o = e._data,
							s = e._size,
							u = e._datatype,
							c = r._data,
							f = r._size,
							l = r._datatype,
							p = s[0],
							m = f[1],
							h = n,
							d = i;
						u && l && u === l && "string" == typeof u && (a = u, h = t.find(
							n, [a, a]), d = t.find(i, [a, a]));
						for (var v = [], y = 0; y < m; y++) {
							for (var g = d(o[0], c[0][y]), x = 1; x < p; x++) g = h(g,
								d(o[x], c[x][y]));
							v[y] = g
						}
						return e.createDenseMatrix({
							data: v,
							size: [m],
							datatype: a
						})
					}(e, r)
				}
				var l = t("_multiplyMatrixVector", {
						"DenseMatrix, any": function(e, r) {
							var a, o = e._data,
								s = e._size,
								u = e._datatype,
								c = r._data,
								f = r._datatype,
								l = s[0],
								p = s[1],
								m = n,
								h = i;
							u && f && u === f && "string" == typeof u && (a = u, m =
								t.find(n, [a, a]), h = t.find(i, [a, a]));
							for (var d = [], v = 0; v < l; v++) {
								for (var y = o[v], g = h(y[0], c[0]), x = 1; x <
									p; x++) g = m(g, h(y[x], c[x]));
								d[v] = g
							}
							return e.createDenseMatrix({
								data: d,
								size: [l],
								datatype: a
							})
						},
						"SparseMatrix, any": function(e, r) {
							var o = e._values,
								s = e._index,
								u = e._ptr,
								c = e._datatype;
							if (!o) throw new Error(
								"Cannot multiply Pattern only Matrix times Dense Matrix"
								);
							var f, l = r._data,
								p = r._datatype,
								m = e._size[0],
								h = r._size[0],
								d = [],
								v = [],
								y = [],
								g = n,
								x = i,
								b = a,
								w = 0;
							c && p && c === p && "string" == typeof c && (f = c, g =
								t.find(n, [f, f]), x = t.find(i, [f, f]), b = t
								.find(a, [f, f]), w = t.convert(0, f));
							var N = [],
								M = [];
							y[0] = 0;
							for (var E = 0; E < h; E++) {
								var S = l[E];
								if (!b(S, w))
									for (var A = u[E], O = u[E + 1], C = A; C <
										O; C++) {
										var _ = s[C];
										M[_] ? N[_] = g(N[_], x(S, o[C])) : (M[
											_] = !0, v.push(_), N[_] = x(S, o[
												C]))
									}
							}
							for (var T = v.length, I = 0; I < T; I++) {
								var k = v[I];
								d[I] = N[k]
							}
							return y[1] = v.length, e.createSparseMatrix({
								values: d,
								index: v,
								ptr: y,
								size: [m, 1],
								datatype: f
							})
						}
					}),
					p = t("_multiplyMatrixMatrix", {
						"DenseMatrix, DenseMatrix": function(e, r) {
							var a, o = e._data,
								s = e._size,
								u = e._datatype,
								c = r._data,
								f = r._size,
								l = r._datatype,
								p = s[0],
								m = s[1],
								h = f[1],
								d = n,
								v = i;
							u && l && u === l && "string" == typeof u && (a = u, d =
								t.find(n, [a, a]), v = t.find(i, [a, a]));
							for (var y = [], g = 0; g < p; g++) {
								var x = o[g];
								y[g] = [];
								for (var b = 0; b < h; b++) {
									for (var w = v(x[0], c[0][b]), N = 1; N <
										m; N++) w = d(w, v(x[N], c[N][b]));
									y[g][b] = w
								}
							}
							return e.createDenseMatrix({
								data: y,
								size: [p, h],
								datatype: a
							})
						},
						"DenseMatrix, SparseMatrix": function(e, r) {
							var o = e._data,
								s = e._size,
								u = e._datatype,
								c = r._values,
								f = r._index,
								l = r._ptr,
								p = r._size,
								m = r._datatype;
							if (!c) throw new Error(
								"Cannot multiply Dense Matrix times Pattern only Matrix"
								);
							var h, d = s[0],
								v = p[1],
								y = n,
								g = i,
								x = a,
								b = 0;
							u && m && u === m && "string" == typeof u && (h = u, y =
								t.find(n, [h, h]), g = t.find(i, [h, h]), x = t
								.find(a, [h, h]), b = t.convert(0, h));
							for (var w = [], N = [], M = [], E = r
									.createSparseMatrix({
										values: w,
										index: N,
										ptr: M,
										size: [d, v],
										datatype: h
									}), S = 0; S < v; S++) {
								M[S] = N.length;
								var A = l[S],
									O = l[S + 1];
								if (O > A)
									for (var C = 0, _ = 0; _ < d; _++) {
										for (var T = _ + 1, I = void 0, k = A; k <
											O; k++) {
											var z = f[k];
											C !== T ? (I = g(o[_][z], c[k]), C =
												T) : I = y(I, g(o[_][z], c[k]))
										}
										C !== T || x(I, b) || (N.push(_), w.push(I))
									}
							}
							return M[v] = N.length, E
						},
						"SparseMatrix, DenseMatrix": function(e, r) {
							var o = e._values,
								s = e._index,
								u = e._ptr,
								c = e._datatype;
							if (!o) throw new Error(
								"Cannot multiply Pattern only Matrix times Dense Matrix"
								);
							var f, l = r._data,
								p = r._datatype,
								m = e._size[0],
								h = r._size[0],
								d = r._size[1],
								v = n,
								y = i,
								g = a,
								x = 0;
							c && p && c === p && "string" == typeof c && (f = c, v =
								t.find(n, [f, f]), y = t.find(i, [f, f]), g = t
								.find(a, [f, f]), x = t.convert(0, f));
							for (var b = [], w = [], N = [], M = e
									.createSparseMatrix({
										values: b,
										index: w,
										ptr: N,
										size: [m, d],
										datatype: f
									}), E = [], S = [], A = 0; A < d; A++) {
								N[A] = w.length;
								for (var O = A + 1, C = 0; C < h; C++) {
									var _ = l[C][A];
									if (!g(_, x))
										for (var T = u[C], I = u[C + 1], k = T; k <
											I; k++) {
											var z = s[k];
											S[z] !== O ? (S[z] = O, w.push(z), E[
												z] = y(_, o[k])) : E[z] = v(E[
												z], y(_, o[k]))
										}
								}
								for (var R = N[A], q = w.length, B = R; B <
									q; B++) {
									var D = w[B];
									b[B] = E[D]
								}
							}
							return N[d] = w.length, M
						},
						"SparseMatrix, SparseMatrix": function(e, r) {
							var a, o = e._values,
								s = e._index,
								u = e._ptr,
								c = e._datatype,
								f = r._values,
								l = r._index,
								p = r._ptr,
								m = r._datatype,
								h = e._size[0],
								d = r._size[1],
								v = o && f,
								y = n,
								g = i;
							c && m && c === m && "string" == typeof c && (a = c, y =
								t.find(n, [a, a]), g = t.find(i, [a, a]));
							for (var x, b, w, N, M, E, S, A, O = v ? [] : void 0,
									C = [], _ = [], T = e.createSparseMatrix({
										values: O,
										index: C,
										ptr: _,
										size: [h, d],
										datatype: a
									}), I = v ? [] : void 0, k = [], z = 0; z <
								d; z++) {
								_[z] = C.length;
								var R = z + 1;
								for (M = p[z], E = p[z + 1], N = M; N < E; N++)
									if (A = l[N], v)
										for (b = u[A], w = u[A + 1], x = b; x <
											w; x++) S = s[x], k[S] !== R ? (k[S] =
												R, C.push(S), I[S] = g(f[N], o[x])
												) : I[S] = y(I[S], g(f[N], o[x]));
									else
										for (b = u[A], w = u[A + 1], x = b; x <
											w; x++) S = s[x], k[S] !== R && (k[S] =
											R, C.push(S));
								if (v)
									for (var q = _[z], B = C.length, D = q; D <
										B; D++) {
										var j = C[D];
										O[D] = I[j]
									}
							}
							return _[d] = C.length, T
						}
					});
				return t("multiply", Ve({
					"Array, Array": function(e, t) {
						c(Se(e), Se(t));
						var n = this(r(e), r(t));
						return m(n) ? n.valueOf() : n
					},
					"Matrix, Matrix": function(e, t) {
						var r = e.size(),
							n = t.size();
						return c(r, n), 1 === r.length ? 1 === n.length ?
							function(e, t, r) {
								if (0 === r) throw new Error(
									"Cannot multiply two empty vectors"
									);
								return o(e, t)
							}(e, t, r[0]) : f(e, t) : 1 === n.length ? l(e,
								t) : p(e, t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"Array, Matrix": function(e, t) {
						return this(r(e, t.storage()), t)
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, i, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return u(e, t, i, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, i, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return u(t, e, i, !0)
					},
					"Array, any": function(e, t) {
						return u(r(e), t, i, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return u(r(t), e, i, !0).valueOf()
					},
					"any, any": i,
					"any, any, ...any": function(e, t, r) {
						for (var n = this(e, t), i = 0; i < r.length; i++)
							n = this(n, r[i]);
						return n
					}
				}, i.signatures))
			})),
			On = Qe("nthRoot", ["typed", "matrix", "equalScalar", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.BigNumber,
					a = ln({
						typed: t
					}),
					o = vn({
						typed: t,
						equalScalar: n
					}),
					s = yn({
						typed: t,
						equalScalar: n
					}),
					u = rn({
						typed: t,
						equalScalar: n
					}),
					c = hn({
						typed: t
					}),
					f = nn({
						typed: t
					}),
					l =
					"Complex number not supported in function nthRoot. Use nthRoots instead.";
				return t("nthRoot", {
					number: function(e) {
						return Ur(e, 2)
					},
					"number, number": Ur,
					BigNumber: function(e) {
						return p(e, new i(2))
					},
					Complex: function(e) {
						throw new Error(l)
					},
					"Complex, number": function(e, t) {
						throw new Error(l)
					},
					"BigNumber, BigNumber": p,
					"Array | Matrix": function(e) {
						return this(e, 2)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						if (1 === t.density()) return s(e, t, this);
						throw new Error("Root must be non-zero")
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						if (1 === t.density()) return a(e, t, this, !1);
						throw new Error("Root must be non-zero")
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return c(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, number | BigNumber": function(e, t) {
						return u(e, t, this, !1)
					},
					"DenseMatrix, number | BigNumber": function(e, t) {
						return f(e, t, this, !1)
					},
					"number | BigNumber, SparseMatrix": function(e, t) {
						if (1 === t.density()) return u(t, e, this, !0);
						throw new Error("Root must be non-zero")
					},
					"number | BigNumber, DenseMatrix": function(e, t) {
						return f(t, e, this, !0)
					},
					"Array, number | BigNumber": function(e, t) {
						return this(r(e), t).valueOf()
					},
					"number | BigNumber, Array": function(e, t) {
						return this(e, r(t)).valueOf()
					}
				});

				function p(e, t) {
					var r = i.precision,
						n = i.clone({
							precision: r + 2
						}),
						a = new i(0),
						o = new n(1),
						s = t.isNegative();
					if (s && (t = t.neg()), t.isZero()) throw new Error(
						"Root must be non-zero");
					if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error(
						"Root must be odd when a is negative.");
					if (e.isZero()) return s ? new n(1 / 0) : 0;
					if (!e.isFinite()) return s ? a : e;
					var u = e.abs().pow(o.div(t));
					return u = e.isNeg() ? u.neg() : u, new i((s ? o.div(u) : u)
						.toPrecision(r))
				}
			})),
			Cn = Qe("sign", ["typed", "BigNumber", "Fraction", "complex"], (function(e) {
				var t = e.typed,
					r = e.BigNumber,
					n = e.complex,
					i = e.Fraction;
				return t("sign", {
					number: Lr,
					Complex: function(e) {
						return 0 === e.im ? n(Lr(e.re)) : e.sign()
					},
					BigNumber: function(e) {
						return new r(e.cmp(0))
					},
					Fraction: function(e) {
						return new i(e.s, 1)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					Unit: function(e) {
						return this(e.value)
					}
				})
			})),
			_n = Qe("sqrt", ["config", "typed", "Complex"], (function(e) {
				var t = e.config,
					r = e.typed,
					n = e.Complex;
				return r("sqrt", {
					number: i,
					Complex: function(e) {
						return e.sqrt()
					},
					BigNumber: function(e) {
						return !e.isNegative() || t.predictable ? e.sqrt() : i(e
							.toNumber())
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					Unit: function(e) {
						return e.pow(.5)
					}
				});

				function i(e) {
					return isNaN(e) ? NaN : e >= 0 || t.predictable ? Math.sqrt(e) : new n(
						e, 0).sqrt()
				}
			})),
			Tn = Qe("square", ["typed"], (function(e) {
				return (0, e.typed)("square", {
					number: $r,
					Complex: function(e) {
						return e.mul(e)
					},
					BigNumber: function(e) {
						return e.times(e)
					},
					Fraction: function(e) {
						return e.mul(e)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					},
					Unit: function(e) {
						return e.pow(2)
					}
				})
			})),
			In = Qe("subtract", ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.addScalar,
					a = e.unaryMinus,
					o = e.DenseMatrix,
					s = ln({
						typed: t
					}),
					u = wn({
						typed: t
					}),
					c = Nn({
						typed: t,
						equalScalar: n
					}),
					f = mn({
						typed: t,
						DenseMatrix: o
					}),
					l = hn({
						typed: t
					}),
					p = nn({
						typed: t
					});
				return t("subtract", {
					"number, number": function(e, t) {
						return e - t
					},
					"Complex, Complex": function(e, t) {
						return e.sub(t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.minus(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.sub(t)
					},
					"Unit, Unit": function(e, t) {
						if (null === e.value) throw new Error(
							"Parameter x contains a unit with undefined value"
							);
						if (null === t.value) throw new Error(
							"Parameter y contains a unit with undefined value"
							);
						if (!e.equalBase(t)) throw new Error(
							"Units do not match");
						var r = e.clone();
						return r.value = this(r.value, t.value), r.fixPrefix = !
							1, r
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return kn(e, t), c(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return kn(e, t), u(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return kn(e, t), s(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return kn(e, t), l(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return f(e, a(t), i)
					},
					"DenseMatrix, any": function(e, t) {
						return p(e, t, this)
					},
					"any, SparseMatrix": function(e, t) {
						return f(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return p(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return p(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return p(r(t), e, this, !0).valueOf()
					}
				})
			}));

		function kn(e, t) {
			var r = e.size(),
				n = t.size();
			if (r.length !== n.length) throw new Me(r.length, n.length)
		}
		var zn = Qe("xgcd", ["typed", "config", "matrix", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.BigNumber;
				return t("xgcd", {
					"number, number": function(e, t) {
						var i = Hr(e, t);
						return "Array" === r.matrix ? i : n(i)
					},
					"BigNumber, BigNumber": function(e, t) {
						var a, o, s, u, c = new i(0),
							f = new i(1),
							l = c,
							p = f,
							m = f,
							h = c;
						if (!e.isInt() || !t.isInt()) throw new Error(
							"Parameters in function xgcd must be integer numbers"
							);
						for (; !t.isZero();) o = e.div(t).floor(), s = e.mod(t),
							a = l, l = p.minus(o.times(l)), p = a, a = m, m = h
							.minus(o.times(m)), h = a, e = t, t = s;
						u = e.lt(c) ? [e.neg(), p.neg(), h.neg()] : [e, e
							.isZero() ? 0 : p, h
						];
						return "Array" === r.matrix ? u : n(u)
					}
				})
			})),
			Rn = Qe("invmod", ["typed", "config", "BigNumber", "xgcd", "equal", "smaller", "mod",
				"add", "isInteger"
			], (function(e) {
				var t = e.typed,
					r = (e.config, e.BigNumber),
					n = e.xgcd,
					i = e.equal,
					a = e.smaller,
					o = e.mod,
					s = e.add,
					u = e.isInteger;
				return t("invmod", {
					"number, number": c,
					"BigNumber, BigNumber": c
				});

				function c(e, t) {
					if (!u(e) || !u(t)) throw new Error(
						"Parameters in function invmod must be integer numbers");
					if (e = o(e, t), i(t, 0)) throw new Error("Divisor must be non zero");
					var c = n(e, t),
						f = c = c.valueOf(),
						l = tn()(f, 2),
						p = l[0],
						m = l[1];
					return i(p, r(1)) ? (m = o(m, t), a(m, r(0)) && (m = s(m, t)), m) : NaN
				}
			})),
			qn = Qe("algorithm09", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i) {
					var a = e._values,
						o = e._index,
						s = e._ptr,
						u = e._size,
						c = e._datatype,
						f = n._values,
						l = n._index,
						p = n._ptr,
						m = n._size,
						h = n._datatype;
					if (u.length !== m.length) throw new Me(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + u +
						") must match Matrix B (" + m + ")");
					var d, v = u[0],
						y = u[1],
						g = r,
						x = 0,
						b = i;
					"string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]),
						x = t.convert(0, d), b = t.find(i, [d, d]));
					var w, N, M, E, S, A = a && f ? [] : void 0,
						O = [],
						C = [],
						_ = A ? [] : void 0,
						T = [];
					for (N = 0; N < y; N++) {
						C[N] = O.length;
						var I = N + 1;
						if (_)
							for (E = p[N], S = p[N + 1], M = E; M < S; M++) T[w = l[
								M]] = I, _[w] = f[M];
						for (E = s[N], S = s[N + 1], M = E; M < S; M++)
							if (w = o[M], _) {
								var k = T[w] === I ? _[w] : x,
									z = b(a[M], k);
								g(z, x) || (O.push(w), A.push(z))
							} else O.push(w)
					}
					return C[y] = O.length, e.createSparseMatrix({
						values: A,
						index: O,
						ptr: C,
						size: [v, y],
						datatype: d
					})
				}
			})),
			Bn = Qe("dotMultiply", ["typed", "matrix", "equalScalar", "multiplyScalar"], (function(
				e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.multiplyScalar,
					a = vn({
						typed: t,
						equalScalar: n
					}),
					o = qn({
						typed: t,
						equalScalar: n
					}),
					s = rn({
						typed: t,
						equalScalar: n
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("dotMultiply", {
					"any, any": i,
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, i, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, i, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, i, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, i)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, i, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, i, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, i, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, i, !0)
					},
					"Array, any": function(e, t) {
						return c(r(e), t, i, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(r(t), e, i, !0).valueOf()
					}
				})
			}));

		function Dn(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error(
				"Integers expected in function bitAnd");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			if (e.isZero() || t.eq(-1) || e.eq(t)) return e;
			if (t.isZero() || e.eq(-1)) return t;
			if (!e.isFinite() || !t.isFinite()) {
				if (!e.isFinite() && !t.isFinite()) return e.isNegative() === t.isNegative() ? e :
					new r(0);
				if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new r(0) : t;
				if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new r(0) : e
			}
			return Fn(e, t, (function(e, t) {
				return e & t
			}))
		}

		function jn(e) {
			if (e.isFinite() && !e.isInteger()) throw new Error(
				"Integer expected in function bitNot");
			var t = e.constructor,
				r = t.precision;
			t.config({
				precision: 1e9
			});
			var n = e.plus(new t(1));
			return n.s = -n.s || null, t.config({
				precision: r
			}), n
		}

		function Pn(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error(
				"Integers expected in function bitOr");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			var n = new r(-1);
			return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e
			.isFinite() && t.isFinite() ? Fn(e, t, (function(e, t) {
					return e | t
				})) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t
				.isNegative() && !t.isFinite() ? n : e.isNegative() && t.isNegative() ? e
			.isFinite() ? e : t : e.isFinite() ? t : e
		}

		function Fn(e, t, r) {
			var n, i, a, o, s, u = e.constructor,
				c = +(e.s < 0),
				f = +(t.s < 0);
			if (c) {
				n = Un(jn(e));
				for (var l = 0; l < n.length; ++l) n[l] ^= 1
			} else n = Un(e);
			if (f) {
				i = Un(jn(t));
				for (var p = 0; p < i.length; ++p) i[p] ^= 1
			} else i = Un(t);
			n.length <= i.length ? (a = n, o = i, s = c) : (a = i, o = n, s = f);
			var m = a.length,
				h = o.length,
				d = 1 ^ r(c, f),
				v = new u(1 ^ d),
				y = new u(1),
				g = new u(2),
				x = u.precision;
			for (u.config({
					precision: 1e9
				}); m > 0;) r(a[--m], o[--h]) === d && (v = v.plus(y)), y = y.times(g);
			for (; h > 0;) r(s, o[--h]) === d && (v = v.plus(y)), y = y.times(g);
			return u.config({
				precision: x
			}), 0 === d && (v.s = -v.s), v
		}

		function Un(e) {
			for (var t = e.d, r = t[0] + "", n = 1; n < t.length; ++n) {
				for (var i = t[n] + "", a = 7 - i.length; a--;) i = "0" + i;
				r += i
			}
			for (var o = r.length;
				"0" === r.charAt(o);) o--;
			var s = e.e,
				u = r.slice(0, o + 1 || 1),
				c = u.length;
			if (s > 0)
				if (++s > c)
					for (s -= c; s--;) u += "0";
				else s < c && (u = u.slice(0, s) + "." + u.slice(s));
			for (var f = [0], l = 0; l < u.length;) {
				for (var p = f.length; p--;) f[p] *= 10;
				f[0] += parseInt(u.charAt(l++));
				for (var m = 0; m < f.length; ++m) f[m] > 1 && (null !== f[m + 1] && void 0 !== f[
					m + 1] || (f[m + 1] = 0), f[m + 1] += f[m] >> 1, f[m] &= 1)
			}
			return f.reverse()
		}

		function Ln(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error(
				"Integers expected in function bitXor");
			var r = e.constructor;
			if (e.isNaN() || t.isNaN()) return new r(NaN);
			if (e.isZero()) return t;
			if (t.isZero()) return e;
			if (e.eq(t)) return new r(0);
			var n = new r(-1);
			return e.eq(n) ? jn(t) : t.eq(n) ? jn(e) : e.isFinite() && t.isFinite() ? Fn(e, t, (
				function(e, t) {
					return e ^ t
				})) : e.isFinite() || t.isFinite() ? new r(e.isNegative() === t.isNegative() ?
				1 / 0 : -1 / 0) : n
		}

		function $n(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error(
				"Integers expected in function leftShift");
			var r = e.constructor;
			return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e
			.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math
					.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN)
		}

		function Hn(e, t) {
			if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error(
				"Integers expected in function rightArithShift");
			var r = e.constructor;
			return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e
			.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t
				.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : e.isNegative() ?
				new r(-1) : e.isFinite() ? new r(0) : new r(NaN)
		}
		var Gn = "number, number";

		function Vn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function bitAnd");
			return e & t
		}

		function Zn(e) {
			if (!Z(e)) throw new Error("Integer expected in function bitNot");
			return ~e
		}

		function Wn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function bitOr");
			return e | t
		}

		function Yn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function bitXor");
			return e ^ t
		}

		function Jn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function leftShift");
			return e << t
		}

		function Xn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function rightArithShift");
			return e >> t
		}

		function Qn(e, t) {
			if (!Z(e) || !Z(t)) throw new Error("Integers expected in function rightLogShift");
			return e >>> t
		}
		Vn.signature = Gn, Zn.signature = "number", Wn.signature = Gn, Yn.signature = Gn, Jn
			.signature = Gn, Xn.signature = Gn, Qn.signature = Gn;
		var Kn = Qe("bitAnd", ["typed", "matrix", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = vn({
						typed: t,
						equalScalar: n
					}),
					a = yn({
						typed: t,
						equalScalar: n
					}),
					o = rn({
						typed: t,
						equalScalar: n
					}),
					s = hn({
						typed: t
					}),
					u = nn({
						typed: t
					});
				return t("bitAnd", {
					"number, number": Vn,
					"BigNumber, BigNumber": Dn,
					"SparseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return i(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return i(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return s(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return u(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return u(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return u(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return u(r(t), e, this, !0).valueOf()
					}
				})
			})),
			ei = Qe("bitNot", ["typed"], (function(e) {
				return (0, e.typed)("bitNot", {
					number: Zn,
					BigNumber: jn,
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			ti = Qe("bitOr", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.DenseMatrix,
					a = ln({
						typed: t
					}),
					o = pn({
						typed: t,
						equalScalar: n
					}),
					s = mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("bitOr", {
					"number, number": Wn,
					"BigNumber, BigNumber": Pn,
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(r(t), e, this, !0).valueOf()
					}
				})
			})),
			ri = Qe("algorithm07", ["typed", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.DenseMatrix;
				return function(e, i, a) {
					var o = e._size,
						s = e._datatype,
						u = i._size,
						c = i._datatype;
					if (o.length !== u.length) throw new Me(o.length, u.length);
					if (o[0] !== u[0] || o[1] !== u[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + o +
						") must match Matrix B (" + u + ")");
					var f, l, p, m = o[0],
						h = o[1],
						d = 0,
						v = a;
					"string" == typeof s && s === c && (f = s, d = t.convert(0, f), v =
						t.find(a, [f, f]));
					var y = [];
					for (l = 0; l < m; l++) y[l] = [];
					var g = [],
						x = [],
						b = [],
						w = [];
					for (p = 0; p < h; p++) {
						var N = p + 1;
						for (n(e, p, b, g, N), n(i, p, w, x, N), l = 0; l < m; l++) {
							var M = b[l] === N ? g[l] : d,
								E = w[l] === N ? x[l] : d;
							y[l][p] = v(M, E)
						}
					}
					return new r({
						data: y,
						size: [m, h],
						datatype: f
					})
				};

				function n(e, t, r, n, i) {
					for (var a = e._values, o = e._index, s = e._ptr, u = s[t], c = s[t +
						1]; u < c; u++) {
						var f = o[u];
						r[f] = i, n[f] = a[u]
					}
				}
			})),
			ni = Qe("bitXor", ["typed", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.DenseMatrix,
					i = wn({
						typed: t
					}),
					a = ri({
						typed: t,
						DenseMatrix: n
					}),
					o = Mn({
						typed: t,
						DenseMatrix: n
					}),
					s = hn({
						typed: t
					}),
					u = nn({
						typed: t
					});
				return t("bitXor", {
					"number, number": Yn,
					"BigNumber, BigNumber": Ln,
					"SparseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return i(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return i(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return s(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return u(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return u(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return u(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return u(r(t), e, this, !0).valueOf()
					}
				})
			})),
			ii = Qe("arg", ["typed"], (function(e) {
				return (0, e.typed)("arg", {
					number: function(e) {
						return Math.atan2(0, e)
					},
					BigNumber: function(e) {
						return e.constructor.atan2(0, e)
					},
					Complex: function(e) {
						return e.arg()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			ai = Qe("conj", ["typed"], (function(e) {
				return (0, e.typed)("conj", {
					number: function(e) {
						return e
					},
					BigNumber: function(e) {
						return e
					},
					Complex: function(e) {
						return e.conjugate()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			oi = Qe("im", ["typed"], (function(e) {
				return (0, e.typed)("im", {
					number: function(e) {
						return 0
					},
					BigNumber: function(e) {
						return e.mul(0)
					},
					Fraction: function(e) {
						return e.mul(0)
					},
					Complex: function(e) {
						return e.im
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			si = Qe("re", ["typed"], (function(e) {
				return (0, e.typed)("re", {
					number: function(e) {
						return e
					},
					BigNumber: function(e) {
						return e
					},
					Fraction: function(e) {
						return e
					},
					Complex: function(e) {
						return e.re
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			}));

		function ui(e) {
			return !e
		}

		function ci(e, t) {
			return !(!e && !t)
		}

		function fi(e, t) {
			return !!e != !!t
		}

		function li(e, t) {
			return !(!e || !t)
		}
		ui.signature = "number", ci.signature = "number, number", fi.signature = "number, number",
			li.signature = "number, number";
		var pi = Qe("not", ["typed"], (function(e) {
				return (0, e.typed)("not", {
					number: ui,
					Complex: function(e) {
						return 0 === e.re && 0 === e.im
					},
					BigNumber: function(e) {
						return e.isZero() || e.isNaN()
					},
					Unit: function(e) {
						return null === e.value || this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			mi = Qe("or", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = Nn({
						typed: t,
						equalScalar: n
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("or", {
					"number, number": ci,
					"Complex, Complex": function(e, t) {
						return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t
							.im
					},
					"BigNumber, BigNumber": function(e, t) {
						return !e.isZero() && !e.isNaN() || !t.isZero() && !t
							.isNaN()
					},
					"Unit, Unit": function(e, t) {
						return this(e.value || 0, t.value || 0)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(r(t), e, this, !0).valueOf()
					}
				})
			})),
			hi = Qe("xor", ["typed", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.DenseMatrix,
					i = wn({
						typed: t
					}),
					a = ri({
						typed: t,
						DenseMatrix: n
					}),
					o = Mn({
						typed: t,
						DenseMatrix: n
					}),
					s = hn({
						typed: t
					}),
					u = nn({
						typed: t
					});
				return t("xor", {
					"number, number": fi,
					"Complex, Complex": function(e, t) {
						return (0 !== e.re || 0 !== e.im) != (0 !== t.re ||
							0 !== t.im)
					},
					"BigNumber, BigNumber": function(e, t) {
						return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t
							.isNaN())
					},
					"Unit, Unit": function(e, t) {
						return this(e.value || 0, t.value || 0)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return i(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return i(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return s(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return u(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return u(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return u(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return u(r(t), e, this, !0).valueOf()
					}
				})
			})),
			di = Qe("concat", ["typed", "matrix", "isInteger"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.isInteger;
				return t("concat", {
					"...Array | Matrix | number | BigNumber": function(e) {
						var t, i, a = e.length,
							u = -1,
							c = !1,
							f = [];
						for (t = 0; t < a; t++) {
							var l = e[t];
							if (m(l) && (c = !0), o(l) || s(l)) {
								if (t !== a - 1) throw new Error(
									"Dimension must be specified as last argument"
									);
								if (i = u, u = l.valueOf(), !n(u))
								throw new TypeError(
										"Integer number expected for dimension"
										);
								if (u < 0 || t > 0 && u > i) throw new Ee(u, i +
									1)
							} else {
								var p = He(l).valueOf(),
									h = Se(p);
								if (f[t] = p, i = u, u = h.length - 1, t > 0 &&
									u !== i) throw new Me(i + 1, u + 1)
							}
						}
						if (0 === f.length) throw new SyntaxError(
							"At least one matrix expected");
						for (var d = f.shift(); f.length;) d = vi(d, f.shift(),
							u, 0);
						return c ? r(d) : d
					},
					"...string": function(e) {
						return e.join("")
					}
				})
			}));

		function vi(e, t, r, n) {
			if (n < r) {
				if (e.length !== t.length) throw new Me(e.length, t.length);
				for (var i = [], a = 0; a < e.length; a++) i[a] = vi(e[a], t[a], r, n + 1);
				return i
			}
			return e.concat(t)
		}
		var yi = Qe("column", ["typed", "Index", "matrix", "range"], (function(e) {
				var t = e.typed,
					r = e.Index,
					n = e.matrix,
					i = e.range;
				return t("column", {
					"Matrix, number": a,
					"Array, number": function(e, t) {
						return a(n(He(e)), t).valueOf()
					}
				});

				function a(e, t) {
					if (2 !== e.size().length) throw new Error(
						"Only two dimensional matrix is supported");
					Oe(t, e.size()[1]);
					var n = i(0, e.size()[0]),
						a = new r(n, t);
					return e.subset(a)
				}
			})),
			gi = Qe("count", ["typed", "size", "prod"], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.prod;
				return t("count", {
					string: function(e) {
						return e.length
					},
					"Matrix | Array": function(e) {
						return n(r(e))
					}
				})
			})),
			xi = Qe("cross", ["typed", "matrix", "subtract", "multiply"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.subtract,
					i = e.multiply;
				return t("cross", {
					"Matrix, Matrix": function(e, t) {
						return r(a(e.toArray(), t.toArray()))
					},
					"Matrix, Array": function(e, t) {
						return r(a(e.toArray(), t))
					},
					"Array, Matrix": function(e, t) {
						return r(a(e, t.toArray()))
					},
					"Array, Array": a
				});

				function a(e, t) {
					var r = Math.max(Se(e).length, Se(t).length);
					e = ke(e), t = ke(t);
					var a = Se(e),
						o = Se(t);
					if (1 !== a.length || 1 !== o.length || 3 !== a[0] || 3 !== o[0])
					throw new RangeError("Vectors with length 3 expected (Size A = [" +
							a.join(", ") + "], B = [" + o.join(", ") + "])");
					var s = [n(i(e[1], t[2]), i(e[2], t[1])), n(i(e[2], t[0]), i(e[0], t[
						2])), n(i(e[0], t[1]), i(e[1], t[0]))];
					return r > 1 ? [s] : s
				}
			})),
			bi = Qe("diag", ["typed", "matrix", "DenseMatrix", "SparseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.DenseMatrix,
					i = e.SparseMatrix;
				return t("diag", {
					Array: function(e) {
						return a(e, 0, Se(e), null)
					},
					"Array, number": function(e, t) {
						return a(e, t, Se(e), null)
					},
					"Array, BigNumber": function(e, t) {
						return a(e, t.toNumber(), Se(e), null)
					},
					"Array, string": function(e, t) {
						return a(e, 0, Se(e), t)
					},
					"Array, number, string": function(e, t, r) {
						return a(e, t, Se(e), r)
					},
					"Array, BigNumber, string": function(e, t, r) {
						return a(e, t.toNumber(), Se(e), r)
					},
					Matrix: function(e) {
						return a(e, 0, e.size(), e.storage())
					},
					"Matrix, number": function(e, t) {
						return a(e, t, e.size(), e.storage())
					},
					"Matrix, BigNumber": function(e, t) {
						return a(e, t.toNumber(), e.size(), e.storage())
					},
					"Matrix, string": function(e, t) {
						return a(e, 0, e.size(), t)
					},
					"Matrix, number, string": function(e, t, r) {
						return a(e, t, e.size(), r)
					},
					"Matrix, BigNumber, string": function(e, t, r) {
						return a(e, t.toNumber(), e.size(), r)
					}
				});

				function a(e, t, a, o) {
					if (!Z(t)) throw new TypeError(
						"Second parameter in function diag must be an integer");
					var s = t > 0 ? t : 0,
						u = t < 0 ? -t : 0;
					switch (a.length) {
						case 1:
							return function(e, t, r, a, o, s) {
								var u = [a + o, a + s];
								if (r && "sparse" !== r && "dense" !== r)
								throw new TypeError("Unknown matrix type ".concat(r,
										'"'));
								var c = "sparse" === r ? i.diagonal(u, e, t) : n
									.diagonal(u, e, t);
								return null !== r ? c : c.valueOf()
							}(e, t, o, a[0], u, s);
						case 2:
							return function(e, t, n, i, a, o) {
								if (m(e)) {
									var s = e.diagonal(t);
									return null !== n ? n !== s.storage() ? r(s, n) :
										s : s.valueOf()
								}
								for (var u = Math.min(i[0] - a, i[1] - o), c = [], f =
									0; f < u; f++) c[f] = e[f + a][f + o];
								return null !== n ? r(c) : c
							}(e, t, o, a, u, s)
					}
					throw new RangeError("Matrix for function diag must be 2 dimensional")
				}
			}));

		function wi(e) {
			var t = 0,
				r = 1,
				n = Object.create(null),
				i = Object.create(null),
				a = 0,
				o = function(e) {
					var o = i[e];
					if (o && (delete n[o], delete i[e], --t, r === o)) {
						if (!t) return a = 0, void(r = 1);
						for (; !hasOwnProperty.call(n, ++r););
					}
				};
			return e = Math.abs(e), {
				hit: function(s) {
					var u = i[s],
						c = ++a;
					if (n[c] = s, i[s] = c, !u) {
						if (++t <= e) return;
						return s = n[r], o(s), s
					}
					if (delete n[u], r === u)
						for (; !hasOwnProperty.call(n, ++r););
				},
				delete: o,
				clear: function() {
					t = a = 0, r = 1, n = Object.create(null), i = Object.create(null)
				}
			}
		}

		function Ni(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				r = t.hasher,
				n = t.limit;
			return n = null == n ? Number.POSITIVE_INFINITY : n, r = null == r ? JSON.stringify : r,
				function t() {
					"object" !== a()(t.cache) && (t.cache = {
						values: new Map,
						lru: wi(n || Number.POSITIVE_INFINITY)
					});
					for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
					var s = r(i);
					if (t.cache.values.has(s)) return t.cache.lru.hit(s), t.cache.values.get(s);
					var u = e.apply(e, i);
					return t.cache.values.set(s, u), t.cache.values.delete(t.cache.lru.hit(s)), u
				}
		}

		function Mi(e) {
			return Object.keys(e.signatures || {}).reduce((function(e, t) {
				var r = (t.match(/,/g) || []).length + 1;
				return Math.max(e, r)
			}), -1)
		}
		var Ei = Qe("filter", ["typed"], (function(e) {
			return (0, e.typed)("filter", {
				"Array, function": Si,
				"Matrix, function": function(e, t) {
					return e.create(Si(e.toArray(), t))
				},
				"Array, RegExp": je,
				"Matrix, RegExp": function(e, t) {
					return e.create(je(e.toArray(), t))
				}
			})
		}));

		function Si(e, t) {
			var r = Mi(t);
			return De(e, (function(e, n, i) {
				return 1 === r ? t(e) : 2 === r ? t(e, [n]) : t(e, [n], i)
			}))
		}
		var Ai = Qe("flatten", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix;
				return t("flatten", {
					Array: function(e) {
						return Re(He(e))
					},
					Matrix: function(e) {
						var t = Re(He(e.toArray()));
						return r(t)
					}
				})
			})),
			Oi = Qe("forEach", ["typed"], (function(e) {
				return (0, e.typed)("forEach", {
					"Array, function": Ci,
					"Matrix, function": function(e, t) {
						return e.forEach(t)
					}
				})
			}));

		function Ci(e, t) {
			var r = Mi(t);
			! function n(i, a) {
				Array.isArray(i) ? Be(i, (function(e, t) {
					n(e, a.concat(t))
				})) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e)
			}(e, [])
		}
		var _i = Qe("getMatrixDataType", ["typed"], (function(e) {
				return (0, e.typed)("getMatrixDataType", {
					Array: function(e) {
						return Le(e, H)
					},
					Matrix: function(e) {
						return e.getDataType()
					}
				})
			})),
			Ti = Qe("identity", ["typed", "config", "matrix", "BigNumber", "DenseMatrix",
				"SparseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.BigNumber,
					a = e.DenseMatrix,
					o = e.SparseMatrix;
				return t("identity", {
					"": function() {
						return "Matrix" === r.matrix ? n([]) : []
					},
					string: function(e) {
						return n(e)
					},
					"number | BigNumber": function(e) {
						return c(e, e, "Matrix" === r.matrix ? "dense" : void 0)
					},
					"number | BigNumber, string": function(e, t) {
						return c(e, e, t)
					},
					"number | BigNumber, number | BigNumber": function(e, t) {
						return c(e, t, "Matrix" === r.matrix ? "dense" : void 0)
					},
					"number | BigNumber, number | BigNumber, string": function(e, t,
						r) {
						return c(e, t, r)
					},
					Array: function(e) {
						return u(e)
					},
					"Array, string": function(e, t) {
						return u(e, t)
					},
					Matrix: function(e) {
						return u(e.valueOf(), e.storage())
					},
					"Matrix, string": function(e, t) {
						return u(e.valueOf(), t)
					}
				});

				function u(e, t) {
					switch (e.length) {
						case 0:
							return t ? n(t) : [];
						case 1:
							return c(e[0], e[0], t);
						case 2:
							return c(e[0], e[1], t);
						default:
							throw new Error("Vector containing two values expected")
					}
				}

				function c(e, t, r) {
					var n = s(e) || s(t) ? i : null;
					if (s(e) && (e = e.toNumber()), s(t) && (t = t.toNumber()), !Z(e) || e <
						1) throw new Error(
						"Parameters in function identity must be positive integers");
					if (!Z(t) || t < 1) throw new Error(
						"Parameters in function identity must be positive integers");
					var u = n ? new i(1) : 1,
						c = n ? new n(0) : 0,
						f = [e, t];
					if (r) {
						if ("sparse" === r) return o.diagonal(f, u, 0, c);
						if ("dense" === r) return a.diagonal(f, u, 0, c);
						throw new TypeError('Unknown matrix type "'.concat(r, '"'))
					}
					for (var l = Ce([], f, c), p = e < t ? e : t, m = 0; m < p; m++) l[m][
						m] = u;
					return l
				}
			})),
			Ii = Qe("kron", ["typed", "matrix", "multiplyScalar"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.multiplyScalar;
				return t("kron", {
					"Matrix, Matrix": function(e, t) {
						return r(i(e.toArray(), t.toArray()))
					},
					"Matrix, Array": function(e, t) {
						return r(i(e.toArray(), t))
					},
					"Array, Matrix": function(e, t) {
						return r(i(e, t.toArray()))
					},
					"Array, Array": i
				});

				function i(e, t) {
					if (1 === Se(e).length && (e = [e]), 1 === Se(t).length && (t = [t]),
						Se(e).length > 2 || Se(t).length > 2) throw new RangeError(
						"Vectors with dimensions greater then 2 are not supported expected (Size x = " +
						JSON.stringify(e.length) + ", y = " + JSON.stringify(t
							.length) + ")");
					var r = [],
						i = [];
					return e.map((function(e) {
						return t.map((function(t) {
							return i = [], r.push(i), e.map((
								function(e) {
									return t.map((function(
										t) {
										return i
											.push(
												n(e,
													t)
												)
									}))
								}))
						}))
					})) && r
				}
			})),
			ki = Qe("map", ["typed"], (function(e) {
				return (0, e.typed)("map", {
					"Array, function": zi,
					"Matrix, function": function(e, t) {
						return e.map(t)
					}
				})
			}));

		function zi(e, t) {
			var r = Mi(t);
			return function n(i, a) {
				return Array.isArray(i) ? i.map((function(e, t) {
					return n(e, a.concat(t))
				})) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e)
			}(e, [])
		}
		var Ri = Qe("diff", ["typed", "matrix", "subtract", "number"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.subtract,
					i = e.number;
				return t("diff", {
					"Array | Matrix": function(e) {
						return m(e) ? r(o(e.toArray())) : o(e)
					},
					"Array | Matrix, number": function(e, t) {
						if (!Z(t)) throw new RangeError(
							"Dimension must be a whole number");
						return m(e) ? r(a(e.toArray(), t)) : a(e, t)
					},
					"Array | Matrix, BigNumber": function(e, t) {
						return this(e, i(t))
					}
				});

				function a(e, t) {
					if (m(e) && (e = e.toArray()), !Array.isArray(e)) throw RangeError(
						"Array/Matrix does not have that many dimensions");
					if (t > 0) {
						var r = [];
						return e.forEach((function(e) {
							r.push(a(e, t - 1))
						})), r
					}
					if (0 === t) return o(e);
					throw RangeError("Cannot have negative dimension")
				}

				function o(e) {
					var t = [],
						r = e.length;
					if (r < 2) return e;
					for (var n = 1; n < r; n++) t.push(s(e[n - 1], e[n]));
					return t
				}

				function s(e, t) {
					m(e) && (e = e.toArray()), m(t) && (t = t.toArray());
					var r = Array.isArray(e),
						i = Array.isArray(t);
					if (r && i) return function(e, t) {
						if (e.length !== t.length) throw RangeError(
							"Not all sub-arrays have the same length");
						for (var r = [], n = e.length, i = 0; i < n; i++) r.push(s(
							e[i], t[i]));
						return r
					}(e, t);
					if (!r && !i) return n(t, e);
					throw TypeError(
						"Cannot calculate difference between 1 array and 1 non-array")
				}
			})),
			qi = Qe("ones", ["typed", "config", "matrix", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.BigNumber;
				return t("ones", {
					"": function() {
						return "Array" === r.matrix ? a([]) : a([], "default")
					},
					"...number | BigNumber | string": function(e) {
						if ("string" == typeof e[e.length - 1]) {
							var t = e.pop();
							return a(e, t)
						}
						return "Array" === r.matrix ? a(e) : a(e, "default")
					},
					Array: a,
					Matrix: function(e) {
						var t = e.storage();
						return a(e.valueOf(), t)
					},
					"Array | Matrix, string": function(e, t) {
						return a(e.valueOf(), t)
					}
				});

				function a(e, t) {
					var r = function(e) {
						var t = !1;
						return e.forEach((function(e, r, n) {
							s(e) && (t = !0, n[r] = e.toNumber())
						})), t
					}(e) ? new i(1) : 1;
					if (function(e) {
							e.forEach((function(e) {
								if ("number" != typeof e || !Z(e) || e < 0)
									throw new Error(
										"Parameters in function ones must be positive integers"
										)
							}))
						}(e), t) {
						var a = n(t);
						return e.length > 0 ? a.resize(e, r) : a
					}
					var o = [];
					return e.length > 0 ? Ce(o, e, r) : o
				}
			}));

		function Bi() {
			throw new Error('No "bignumber" implementation available')
		}

		function Di() {
			throw new Error('No "fraction" implementation available')
		}

		function ji() {
			throw new Error('No "matrix" implementation available')
		}
		var Pi = Qe("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq",
				"larger", "largerEq"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.bignumber,
					a = e.smaller,
					o = e.smallerEq,
					s = e.larger,
					u = e.largerEq;
				return t("range", {
					string: f,
					"string, boolean": f,
					"number, number": function(e, t) {
						return c(l(e, t, 1))
					},
					"number, number, number": function(e, t, r) {
						return c(l(e, t, r))
					},
					"number, number, boolean": function(e, t, r) {
						return c(r ? p(e, t, 1) : l(e, t, 1))
					},
					"number, number, number, boolean": function(e, t, r, n) {
						return c(n ? p(e, t, r) : l(e, t, r))
					},
					"BigNumber, BigNumber": function(e, t) {
						return c(m(e, t, new(0, e.constructor)(1)))
					},
					"BigNumber, BigNumber, BigNumber": function(e, t, r) {
						return c(m(e, t, r))
					},
					"BigNumber, BigNumber, boolean": function(e, t, r) {
						var n = e.constructor;
						return c(r ? h(e, t, new n(1)) : m(e, t, new n(1)))
					},
					"BigNumber, BigNumber, BigNumber, boolean": function(e, t, r,
					n) {
						return c(n ? h(e, t, r) : m(e, t, r))
					}
				});

				function c(e) {
					return "Matrix" === r.matrix ? n ? n(e) : ji() : e
				}

				function f(e, t) {
					var n = function(e) {
						var t = e.split(":").map((function(e) {
							return Number(e)
						}));
						if (t.some((function(e) {
								return isNaN(e)
							}))) return null;
						switch (t.length) {
							case 2:
								return {
									start: t[0], end: t[1], step: 1
								};
							case 3:
								return {
									start: t[0], end: t[2], step: t[1]
								};
							default:
								return null
						}
					}(e);
					if (!n) throw new SyntaxError('String "' + e + '" is no valid range');
					return "BigNumber" === r.number ? (void 0 === i && Bi(), c((t ? h : m)(
						i(n.start), i(n.end), i(n.step)))) : c((t ? p : l)(n.start, n
						.end, n.step))
				}

				function l(e, t, r) {
					var n = [],
						i = e;
					if (r > 0)
						for (; a(i, t);) n.push(i), i += r;
					else if (r < 0)
						for (; s(i, t);) n.push(i), i += r;
					return n
				}

				function p(e, t, r) {
					var n = [],
						i = e;
					if (r > 0)
						for (; o(i, t);) n.push(i), i += r;
					else if (r < 0)
						for (; u(i, t);) n.push(i), i += r;
					return n
				}

				function m(e, t, r) {
					var n = i(0),
						o = [],
						u = e;
					if (r.gt(n))
						for (; a(u, t);) o.push(u), u = u.plus(r);
					else if (r.lt(n))
						for (; s(u, t);) o.push(u), u = u.plus(r);
					return o
				}

				function h(e, t, r) {
					var n = i(0),
						a = [],
						s = e;
					if (r.gt(n))
						for (; o(s, t);) a.push(s), s = s.plus(r);
					else if (r.lt(n))
						for (; u(s, t);) a.push(s), s = s.plus(r);
					return a
				}
			})),
			Fi = Qe("reshape", ["typed", "isInteger", "matrix"], (function(e) {
				var t = e.typed,
					r = e.isInteger;
				return t("reshape", {
					"Matrix, Array": function(e, t) {
						return e.reshape(t)
					},
					"Array, Array": function(e, t) {
						return t.forEach((function(e) {
							if (!r(e)) throw new TypeError(
								"Invalid size for dimension: " +
								e)
						})), _e(e, t)
					}
				})
			}));

		function Ui(e, t, r, n) {
			if (!(this instanceof Ui)) throw new SyntaxError(
				"Constructor must be called with the new operator");
			this.fn = e, this.count = t, this.min = r, this.max = n, this.message =
				"Wrong number of arguments in function " + e + " (" + t + " provided, " + r + (
					null != n ? "-" + n : "") + " expected)", this.stack = (new Error).stack
		}
		Ui.prototype = new Error, Ui.prototype.constructor = Error, Ui.prototype.name =
			"ArgumentsError", Ui.prototype.isArgumentsError = !0;
		var Li = Qe("resize", ["config", "matrix"], (function(e) {
				var t = e.config,
					r = e.matrix;
				return function(e, i, a) {
					if (2 !== arguments.length && 3 !== arguments.length) throw new Ui(
						"resize", arguments.length, 2, 3);
					if (m(i) && (i = i.valueOf()), s(i[0]) && (i = i.map((function(e) {
							return s(e) ? e.toNumber() : e
						}))), m(e)) return e.resize(i, a, !0);
					if ("string" == typeof e) return n(e, i, a);
					var o = !Array.isArray(e) && "Array" !== t.matrix;
					if (0 === i.length) {
						for (; Array.isArray(e);) e = e[0];
						return He(e)
					}
					Array.isArray(e) || (e = [e]);
					var u = Ce(e = He(e), i, a);
					return o ? r(u) : u
				};

				function n(e, t, r) {
					if (void 0 !== r) {
						if ("string" != typeof r || 1 !== r.length) throw new TypeError(
							"Single character expected as defaultValue")
					} else r = " ";
					if (1 !== t.length) throw new Me(t.length, 1);
					var n = t[0];
					if ("number" != typeof n || !Z(n)) throw new TypeError(
						"Invalid size, must contain positive integers (size: " + xe(
							t) + ")");
					if (e.length > n) return e.substring(0, n);
					if (e.length < n) {
						for (var i = e, a = 0, o = n - e.length; a < o; a++) i += r;
						return i
					}
					return e
				}
			})),
			$i = Qe("rotate", ["typed", "multiply", "rotationMatrix"], (function(e) {
				var t = e.typed,
					r = e.multiply,
					n = e.rotationMatrix;
				return t("rotate", {
					"Array , number | BigNumber | Complex | Unit": function(e, t) {
						return i(e, 2), r(n(t), e).toArray()
					},
					"Matrix , number | BigNumber | Complex | Unit": function(e, t) {
						return i(e, 2), r(n(t), e)
					},
					"Array, number | BigNumber | Complex | Unit, Array | Matrix": function(
						e, t, a) {
						return i(e, 3), r(n(t, a), e)
					},
					"Matrix, number | BigNumber | Complex | Unit, Array | Matrix": function(
						e, t, a) {
						return i(e, 3), r(n(t, a), e)
					}
				});

				function i(e, t) {
					var r = Array.isArray(e) ? Se(e) : e.size();
					if (r.length > 2) throw new RangeError("Vector must be of dimensions 1x"
						.concat(t));
					if (2 === r.length && 1 !== r[1]) throw new RangeError(
						"Vector must be of dimensions 1x".concat(t));
					if (r[0] !== t) throw new RangeError("Vector must be of dimensions 1x"
						.concat(t))
				}
			})),
			Hi = Qe("rotationMatrix", ["typed", "config", "multiplyScalar", "addScalar",
				"unaryMinus", "norm", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix",
				"cos", "sin"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.multiplyScalar,
					i = e.addScalar,
					a = e.unaryMinus,
					o = e.norm,
					u = e.BigNumber,
					c = e.matrix,
					f = e.DenseMatrix,
					l = e.SparseMatrix,
					p = e.cos,
					m = e.sin;
				return t("rotationMatrix", {
					"": function() {
						return "Matrix" === r.matrix ? c([]) : []
					},
					string: function(e) {
						return c(e)
					},
					"number | BigNumber | Complex | Unit": function(e) {
						return h(e, "Matrix" === r.matrix ? "dense" : void 0)
					},
					"number | BigNumber | Complex | Unit, string": function(e, t) {
						return h(e, t)
					},
					"number | BigNumber | Complex | Unit, Array": function(e, t) {
						var r = c(t);
						return d(r), g(e, r, void 0)
					},
					"number | BigNumber | Complex | Unit, Matrix": function(e, t) {
						d(t);
						var n = t.storage() || ("Matrix" === r.matrix ?
							"dense" : void 0);
						return g(e, t, n)
					},
					"number | BigNumber | Complex | Unit, Array, string": function(
						e, t, r) {
						var n = c(t);
						return d(n), g(e, n, r)
					},
					"number | BigNumber | Complex | Unit, Matrix, string": function(
						e, t, r) {
						return d(t), g(e, t, r)
					}
				});

				function h(e, t) {
					var r = s(e) ? new u(-1) : -1,
						i = p(e),
						a = m(e);
					return y([
						[i, n(r, a)],
						[a, i]
					], t)
				}

				function d(e) {
					var t = e.size();
					if (t.length < 1 || 3 !== t[0]) throw new RangeError(
						"Vector must be of dimensions 1x3")
				}

				function v(e) {
					return e.reduce((function(e, t) {
						return n(e, t)
					}))
				}

				function y(e, t) {
					if (t) {
						if ("sparse" === t) return new l(e);
						if ("dense" === t) return new f(e);
						throw new TypeError('Unknown matrix type "'.concat(t, '"'))
					}
					return e
				}

				function g(e, t, r) {
					var n = o(t);
					if (0 === n) throw new RangeError("Rotation around zero vector");
					var c = s(e) ? u : null,
						f = c ? new c(1) : 1,
						l = c ? new c(-1) : -1,
						h = c ? new c(t.get([0]) / n) : t.get([0]) / n,
						d = c ? new c(t.get([1]) / n) : t.get([1]) / n,
						g = c ? new c(t.get([2]) / n) : t.get([2]) / n,
						x = p(e),
						b = i(f, a(x)),
						w = m(e);
					return y([
						[i(x, v([h, h, b])), i(v([h, d, b]), v([l, g, w])), i(v([h,
							g, b
						]), v([d, w]))],
						[i(v([h, d, b]), v([g, w])), i(x, v([d, d, b])), i(v([d, g,
							b
						]), v([l, h, w]))],
						[i(v([h, g, b]), v([l, d, w])), i(v([d, g, b]), v([h, w])),
							i(x, v([g, g, b]))
						]
					], r)
				}
			})),
			Gi = Qe("row", ["typed", "Index", "matrix", "range"], (function(e) {
				var t = e.typed,
					r = e.Index,
					n = e.matrix,
					i = e.range;
				return t("row", {
					"Matrix, number": a,
					"Array, number": function(e, t) {
						return a(n(He(e)), t).valueOf()
					}
				});

				function a(e, t) {
					if (2 !== e.size().length) throw new Error(
						"Only two dimensional matrix is supported");
					Oe(t, e.size()[0]);
					var n = i(0, e.size()[1]),
						a = new r(t, n);
					return e.subset(a)
				}
			})),
			Vi = Qe("size", ["typed", "config", "?matrix"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix;
				return t("size", {
					Matrix: function(e) {
						return e.create(e.size())
					},
					Array: Se,
					string: function(e) {
						return "Array" === r.matrix ? [e.length] : n([e.length])
					},
					"number | Complex | BigNumber | Unit | boolean | null": function(
						e) {
						return "Array" === r.matrix ? [] : n ? n([]) : ji()
					}
				})
			})),
			Zi = Qe("squeeze", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix;
				return t("squeeze", {
					Array: function(e) {
						return ke(He(e))
					},
					Matrix: function(e) {
						var t = ke(e.toArray());
						return Array.isArray(t) ? r(t) : t
					},
					any: function(e) {
						return He(e)
					}
				})
			})),
			Wi = Qe("subset", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix;
				return t("subset", {
					"Array, Index": function(e, t) {
						var n = r(e).subset(t);
						return t.isScalar() ? n : n.valueOf()
					},
					"Matrix, Index": function(e, t) {
						return e.subset(t)
					},
					"Object, Index": Xi,
					"string, Index": Yi,
					"Array, Index, any": function(e, t, n) {
						return r(He(e)).subset(t, n, void 0).valueOf()
					},
					"Array, Index, any, any": function(e, t, n, i) {
						return r(He(e)).subset(t, n, i).valueOf()
					},
					"Matrix, Index, any": function(e, t, r) {
						return e.clone().subset(t, r)
					},
					"Matrix, Index, any, any": function(e, t, r, n) {
						return e.clone().subset(t, r, n)
					},
					"string, Index, string": Ji,
					"string, Index, string, string": Ji,
					"Object, Index, any": Qi
				})
			}));

		function Yi(e, t) {
			if (!g(t)) throw new TypeError("Index expected");
			if (1 !== t.size().length) throw new Me(t.size().length, 1);
			var r = e.length;
			Oe(t.min()[0], r), Oe(t.max()[0], r);
			var n = t.dimension(0),
				i = "";
			return n.forEach((function(t) {
				i += e.charAt(t)
			})), i
		}

		function Ji(e, t, r, n) {
			if (!t || !0 !== t.isIndex) throw new TypeError("Index expected");
			if (1 !== t.size().length) throw new Me(t.size().length, 1);
			if (void 0 !== n) {
				if ("string" != typeof n || 1 !== n.length) throw new TypeError(
					"Single character expected as defaultValue")
			} else n = " ";
			var i = t.dimension(0);
			if (i.size()[0] !== r.length) throw new Me(i.size()[0], r.length);
			var a = e.length;
			Oe(t.min()[0]), Oe(t.max()[0]);
			for (var o = [], s = 0; s < a; s++) o[s] = e.charAt(s);
			if (i.forEach((function(e, t) {
					o[e] = r.charAt(t[0])
				})), o.length > a)
				for (var u = a - 1, c = o.length; u < c; u++) o[u] || (o[u] = n);
			return o.join("")
		}

		function Xi(e, t) {
			if (1 !== t.size().length) throw new Me(t.size(), 1);
			var r = t.dimension(0);
			if ("string" != typeof r) throw new TypeError(
				"String expected as index to retrieve an object property");
			return at(e, r)
		}

		function Qi(e, t, r) {
			if (1 !== t.size().length) throw new Me(t.size(), 1);
			var n = t.dimension(0);
			if ("string" != typeof n) throw new TypeError(
				"String expected as index to retrieve an object property");
			var i = He(e);
			return ot(i, n, r), i
		}
		var Ki = Qe("transpose", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix;
				return t("transpose", {
					Array: function(e) {
						return this(r(e)).valueOf()
					},
					Matrix: function(e) {
						var t, r = e.size();
						switch (r.length) {
							case 1:
								t = e.clone();
								break;
							case 2:
								var n = r[0],
									i = r[1];
								if (0 === i) throw new RangeError(
									"Cannot transpose a 2D matrix with no columns (size: " +
									xe(r) + ")");
								switch (e.storage()) {
									case "dense":
										t = function(e, t, r) {
											for (var n, i = e._data, a = [],
													o = 0; o < r; o++) {
												n = a[o] = [];
												for (var s = 0; s < t; s++)
													n[s] = He(i[s][o])
											}
											return e.createDenseMatrix({
												data: a,
												size: [r, t],
												datatype: e
													._datatype
											})
										}(e, n, i);
										break;
									case "sparse":
										t = function(e, t, r) {
											for (var n, i, a, o = e._values,
													s = e._index, u = e
													._ptr, c = o ? [] :
													void 0, f = [], l = [],
													p = [], m = 0; m <
												t; m++) p[m] = 0;
											for (n = 0, i = s.length; n <
												i; n++) p[s[n]]++;
											for (var h = 0, d = 0; d <
												t; d++) l.push(h), h += p[
												d], p[d] = l[d];
											for (l.push(h), a = 0; a <
												r; a++)
												for (var v = u[a], y = u[a +
														1], g = v; g <
													y; g++) {
													var x = p[s[g]]++;
													f[x] = a, o && (c[x] =
														He(o[g]))
												}
											return e.createSparseMatrix({
												values: c,
												index: f,
												ptr: l,
												size: [r, t],
												datatype: e
													._datatype
											})
										}(e, n, i)
								}
								break;
							default:
								throw new RangeError(
									"Matrix must be a vector or two dimensional (size: " +
									xe(this._size) + ")")
						}
						return t
					},
					any: function(e) {
						return He(e)
					}
				})
			})),
			ea = Qe("ctranspose", ["typed", "transpose", "conj"], (function(e) {
				var t = e.typed,
					r = e.transpose,
					n = e.conj;
				return t("ctranspose", {
					any: function(e) {
						return n(r(e))
					}
				})
			})),
			ta = Qe("zeros", ["typed", "config", "matrix", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.BigNumber;
				return t("zeros", {
					"": function() {
						return "Array" === r.matrix ? a([]) : a([], "default")
					},
					"...number | BigNumber | string": function(e) {
						if ("string" == typeof e[e.length - 1]) {
							var t = e.pop();
							return a(e, t)
						}
						return "Array" === r.matrix ? a(e) : a(e, "default")
					},
					Array: a,
					Matrix: function(e) {
						var t = e.storage();
						return a(e.valueOf(), t)
					},
					"Array | Matrix, string": function(e, t) {
						return a(e.valueOf(), t)
					}
				});

				function a(e, t) {
					var r = function(e) {
						var t = !1;
						return e.forEach((function(e, r, n) {
							s(e) && (t = !0, n[r] = e.toNumber())
						})), t
					}(e) ? new i(0) : 0;
					if (function(e) {
							e.forEach((function(e) {
								if ("number" != typeof e || !Z(e) || e < 0)
									throw new Error(
										"Parameters in function zeros must be positive integers"
										)
							}))
						}(e), t) {
						var a = n(t);
						return e.length > 0 ? a.resize(e, r) : a
					}
					var o = [];
					return e.length > 0 ? Ce(o, e, r) : o
				}
			})),
			ra = Qe("erf", ["typed"], (function(e) {
				return (0, e.typed)("name", {
					number: function(e) {
						var t = Math.abs(e);
						return t >= sa ? W(e) : t <= na ? W(e) * function(e) {
							var t, r = e * e,
								n = aa[0][4] * r,
								i = r;
							for (t = 0; t < 3; t += 1) n = (n + aa[0][t]) *
								r, i = (i + oa[0][t]) * r;
							return e * (n + aa[0][3]) / (i + oa[0][3])
						}(t) : t <= 4 ? W(e) * (1 - function(e) {
							var t, r = aa[1][8] * e,
								n = e;
							for (t = 0; t < 7; t += 1) r = (r + aa[1][
								t]) * e, n = (n + oa[1][t]) * e;
							var i = (r + aa[1][7]) / (n + oa[1][7]),
								a = parseInt(16 * e) / 16,
								o = (e - a) * (e + a);
							return Math.exp(-a * a) * Math.exp(-o) * i
						}(t)) : W(e) * (1 - function(e) {
							var t, r = 1 / (e * e),
								n = aa[2][5] * r,
								i = r;
							for (t = 0; t < 4; t += 1) n = (n + aa[2][
								t]) * r, i = (i + oa[2][t]) * r;
							var a = r * (n + aa[2][4]) / (i + oa[2][4]);
							a = (ia - a) / e, r = parseInt(16 * e) / 16;
							var o = (e - r) * (e + r);
							return Math.exp(-r * r) * Math.exp(-o) * a
						}(t))
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			na = .46875,
			ia = .5641895835477563,
			aa = [
				[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694,
					.18577770618460315
				],
				[.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001,
					881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972,
					2.1531153547440383e-8
				],
				[.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275,
					.0006587491615298378, .016315387137302097
				]
			],
			oa = [
				[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171],
				[15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903,
					3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495
				],
				[2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132,
					.0023352049762686918
				]
			],
			sa = Math.pow(2, 53),
			ua = Qe("mode", ["typed", "isNaN", "isNumeric"], (function(e) {
				var t = e.typed,
					r = e.isNaN,
					n = e.isNumeric;
				return t("mode", {
					"Array | Matrix": i,
					"...": function(e) {
						return i(e)
					}
				});

				function i(e) {
					if (0 === (e = Re(e.valueOf())).length) throw new Error(
						"Cannot calculate mode of an empty array");
					for (var t = {}, i = [], a = 0, o = 0; o < e.length; o++) {
						var s = e[o];
						if (n(s) && r(s)) throw new Error(
							"Cannot calculate mode of an array containing NaN values"
							);
						s in t || (t[s] = 0), t[s]++, t[s] === a ? i.push(s) : t[s] > a && (
							a = t[s], i = [s])
					}
					return i
				}
			}));

		function ca(e, t, r) {
			var n;
			return -1 !== String(e).indexOf("Unexpected type") ? (n = arguments.length > 2 ?
				" (type: " + H(r) + ", value: " + JSON.stringify(r) + ")" : " (type: " + e.data
				.actual + ")", new TypeError("Cannot calculate " + t +
					", unexpected type of argument" + n)) : -1 !== String(e).indexOf(
				"complex numbers") ? (n = arguments.length > 2 ? " (type: " + H(r) +
				", value: " + JSON.stringify(r) + ")" : "", new TypeError("Cannot calculate " +
					t + ", no ordering relation is defined for complex numbers" + n)) : e
		}
		var fa = Qe("prod", ["typed", "config", "multiplyScalar", "numeric"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.multiplyScalar,
					i = e.numeric;
				return t("prod", {
					"Array | Matrix": a,
					"Array | Matrix, number | BigNumber": function(e, t) {
						throw new Error("prod(A, dim) is not yet supported")
					},
					"...": function(e) {
						return a(e)
					}
				});

				function a(e) {
					var t;
					if ($t(e, (function(e) {
							try {
								t = void 0 === t ? e : n(t, e)
							} catch (t) {
								throw ca(t, "prod", e)
							}
						})), "string" == typeof t && (t = i(t, r.number)), void 0 === t)
						throw new Error("Cannot calculate prod of an empty array");
					return t
				}
			})),
			la = Qe("format", ["typed"], (function(e) {
				return (0, e.typed)("format", {
					any: xe,
					"any, Object | function | number": xe
				})
			})),
			pa = Qe("bin", ["typed", "format"], (function(e) {
				var t = e.typed,
					r = e.format;
				return t("bin", {
					"number | BigNumber": function(e) {
						return r(e, {
							notation: "bin"
						})
					},
					"number | BigNumber, number": function(e, t) {
						return r(e, {
							notation: "bin",
							wordSize: t
						})
					}
				})
			})),
			ma = Qe("oct", ["typed", "format"], (function(e) {
				var t = e.typed,
					r = e.format;
				return t("oct", {
					"number | BigNumber": function(e) {
						return r(e, {
							notation: "oct"
						})
					},
					"number | BigNumber, number": function(e, t) {
						return r(e, {
							notation: "oct",
							wordSize: t
						})
					}
				})
			})),
			ha = Qe("hex", ["typed", "format"], (function(e) {
				var t = e.typed,
					r = e.format;
				return t("hex", {
					"number | BigNumber": function(e) {
						return r(e, {
							notation: "hex"
						})
					},
					"number | BigNumber, number": function(e, t) {
						return r(e, {
							notation: "hex",
							wordSize: t
						})
					}
				})
			})),
			da = Qe("print", ["typed"], (function(e) {
				return (0, e.typed)("print", {
					"string, Object | Array": va,
					"string, Object | Array, number | Object": va
				})
			}));

		function va(e, t, r) {
			return e.replace(/\$([\w.]+)/g, (function(e, n) {
				for (var i = n.split("."), a = t[i.shift()]; i.length && void 0 !==
					a;) {
					var o = i.shift();
					a = o ? a[o] : a + "."
				}
				return void 0 !== a ? l(a) ? a : xe(a, r) : e
			}))
		}
		var ya = Qe("to", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = hn({
						typed: t
					}),
					i = nn({
						typed: t
					});
				return t("to", {
					"Unit, Unit | string": function(e, t) {
						return e.to(t)
					},
					"Matrix, Matrix": function(e, t) {
						return n(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"Matrix, any": function(e, t) {
						return i(e, t, this, !1)
					},
					"any, Matrix": function(e, t) {
						return i(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return i(r(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return i(r(t), e, this, !0).valueOf()
					}
				})
			})),
			ga = Qe("isPrime", ["typed"], (function(e) {
				return (0, e.typed)("isPrime", {
					number: function(e) {
						if (0 * e != 0) return !1;
						if (e <= 3) return e > 1;
						if (e % 2 == 0 || e % 3 == 0) return !1;
						for (var t = 5; t * t <= e; t += 6)
							if (e % t == 0 || e % (t + 2) == 0) return !1;
						return !0
					},
					BigNumber: function(e) {
						if (0 * e.toNumber() != 0) return !1;
						if (e.lte(3)) return e.gt(1);
						if (e.mod(2).eq(0) || e.mod(3).eq(0)) return !1;
						if (e.lt(Math.pow(2, 32))) {
							for (var t = e.toNumber(), r = 5; r * r <= t; r +=
								6)
								if (t % r == 0 || t % (r + 2) == 0) return !1;
							return !0
						}

						function n(e, t, r) {
							for (var n = 1; !t.eq(0);) t.mod(2).eq(0) ? (t = t
								.div(2), e = e.mul(e).mod(r)) : (t = t.sub(
								1), n = e.mul(n).mod(r));
							return n
						}
						for (var i = e.constructor.clone({
								precision: 2 * e.toFixed(0).length
							}), a = 0, o = (e = new i(e)).sub(1); o.mod(2).eq(
							0);) o = o.div(2), a += 1;
						var s = null;
						if (e.lt("3317044064679887385961981")) s = [2, 3, 5, 7,
							11, 13, 17, 19, 23, 29, 31, 37, 41
						].filter((function(t) {
							return t < e
						}));
						else {
							var u = Math.min(e.toNumber() - 2, Math.floor(2 *
								Math.pow(e.toFixed(0).length * Math.log(
									10), 2)));
							s = [];
							for (var c = 2; c <= u; c += 1) s.push(u)
						}
						for (var f = 0; f < s.length; f += 1) {
							var l = s[f],
								p = n(e.sub(e).add(l), o, e);
							if (!p.eq(1))
								for (var m = 0, h = p; !h.eq(e.sub(1)); m += 1,
									h = h.mul(h).mod(e))
									if (m === a - 1) return !1
						}
						return !0
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			xa = Qe("numeric", ["number", "?bignumber", "?fraction"], (function(e) {
				var t = e.number,
					r = e.bignumber,
					n = e.fraction,
					i = {
						string: !0,
						number: !0,
						BigNumber: !0,
						Fraction: !0
					},
					a = {
						number: function(e) {
							return t(e)
						},
						BigNumber: r ? function(e) {
							return r(e)
						} : Bi,
						Fraction: n ? function(e) {
							return n(e)
						} : Di
					};
				return function(e, t) {
					var r = H(e);
					if (!(r in i)) throw new TypeError("Cannot convert " + e +
						' of type "' + r + '"; valid input types are ' + Object
						.keys(i).join(", "));
					if (!(t in a)) throw new TypeError("Cannot convert " + e +
						' to type "' + t + '"; valid output types are ' + Object
						.keys(a).join(", "));
					return t === r ? e : a[t](e)
				}
			})),
			ba = Qe("divideScalar", ["typed", "numeric"], (function(e) {
				var t = e.typed,
					r = e.numeric;
				return t("divideScalar", {
					"number, number": function(e, t) {
						return e / t
					},
					"Complex, Complex": function(e, t) {
						return e.div(t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.div(t)
					},
					"Fraction, Fraction": function(e, t) {
						return e.div(t)
					},
					"Unit, number | Fraction | BigNumber": function(e, t) {
						var n = e.clone(),
							i = r(1, H(t));
						return n.value = this(null === n.value ? n._normalize(
							i) : n.value, t), n
					},
					"number | Fraction | BigNumber, Unit": function(e, t) {
						var n = t.clone();
						n = n.pow(-1);
						var i = r(1, H(e));
						return n.value = this(e, null === t.value ? t
							._normalize(i) : t.value), n
					},
					"Unit, Unit": function(e, t) {
						return e.divide(t)
					}
				})
			})),
			wa = Qe("pow", ["typed", "config", "identity", "multiply", "matrix", "fraction",
				"number", "Complex"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.identity,
					i = e.multiply,
					a = e.matrix,
					o = e.number,
					s = e.fraction,
					u = e.Complex;
				return t("pow", {
					"number, number": c,
					"Complex, Complex": function(e, t) {
						return e.pow(t)
					},
					"BigNumber, BigNumber": function(e, t) {
						return t.isInteger() || e >= 0 || r.predictable ? e.pow(
							t) : new u(e.toNumber(), 0).pow(t.toNumber(), 0)
					},
					"Fraction, Fraction": function(e, t) {
						var n = e.pow(t);
						if (null != n) return n;
						if (r.predictable) throw new Error(
							"Result of pow is non-rational and cannot be expressed as a fraction"
							);
						return c(e.valueOf(), t.valueOf())
					},
					"Array, number": f,
					"Array, BigNumber": function(e, t) {
						return f(e, t.toNumber())
					},
					"Matrix, number": l,
					"Matrix, BigNumber": function(e, t) {
						return l(e, t.toNumber())
					},
					"Unit, number | BigNumber": function(e, t) {
						return e.pow(t)
					}
				});

				function c(e, t) {
					if (r.predictable && !Z(t) && e < 0) try {
						var n = s(t),
							i = o(n);
						if ((t === i || Math.abs((t - i) / t) < 1e-14) && n.d % 2 == 1)
							return (n.n % 2 == 0 ? 1 : -1) * Math.pow(-e, t)
					} catch (e) {}
					return r.predictable && (e < -1 && t === 1 / 0 || e > -1 && e < 0 &&
							t === -1 / 0) ? NaN : Z(t) || e >= 0 || r.predictable ? Gr(e,
						t) : e * e < 1 && t === 1 / 0 || e * e > 1 && t === -1 / 0 ? 0 :
						new u(e, 0).pow(t, 0)
				}

				function f(e, t) {
					if (!Z(t) || t < 0) throw new TypeError(
						"For A^b, b must be a positive integer (value is " + t + ")"
						);
					var r = Se(e);
					if (2 !== r.length) throw new Error(
						"For A^b, A must be 2 dimensional (A has " + r.length +
						" dimensions)");
					if (r[0] !== r[1]) throw new Error(
						"For A^b, A must be square (size is " + r[0] + "x" + r[1] +
						")");
					for (var a = n(r[0]).valueOf(), o = e; t >= 1;) 1 == (1 & t) && (a = i(
						o, a)), t >>= 1, o = i(o, o);
					return a
				}

				function l(e, t) {
					return a(f(e.valueOf(), t))
				}
			})),
			Na = (r(131), r(132), r(55)),
			Ma = r.n(Na);

		function Ea(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function Sa(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Ea(Object(r), !0).forEach((function(t) {
					Ma()(e, t, r[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
					.getOwnPropertyDescriptors(r)) : Ea(Object(r)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
			return e
		}
		var Aa = "Number of decimals in function round must be an integer",
			Oa = Qe("round", ["typed", "matrix", "equalScalar", "zeros", "BigNumber",
				"DenseMatrix"], (function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.zeros,
						a = e.BigNumber,
						o = e.DenseMatrix,
						s = rn({
							typed: t,
							equalScalar: n
						}),
						u = Mn({
							typed: t,
							DenseMatrix: o
						}),
						c = nn({
							typed: t
						});
					return t("round", Sa(Sa({}, Ca), {}, {
						Complex: function(e) {
							return e.round()
						},
						"Complex, number": function(e, t) {
							if (t % 1) throw new TypeError(Aa);
							return e.round(t)
						},
						"Complex, BigNumber": function(e, t) {
							if (!t.isInteger()) throw new TypeError(Aa);
							var r = t.toNumber();
							return e.round(r)
						},
						"number, BigNumber": function(e, t) {
							if (!t.isInteger()) throw new TypeError(Aa);
							return new a(e).toDecimalPlaces(t.toNumber())
						},
						BigNumber: function(e) {
							return e.toDecimalPlaces(0)
						},
						"BigNumber, BigNumber": function(e, t) {
							if (!t.isInteger()) throw new TypeError(Aa);
							return e.toDecimalPlaces(t.toNumber())
						},
						Fraction: function(e) {
							return e.round()
						},
						"Fraction, number": function(e, t) {
							if (t % 1) throw new TypeError(Aa);
							return e.round(t)
						},
						"Array | Matrix": function(e) {
							return Ht(e, this, !0)
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return s(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return c(e, t, this, !1)
						},
						"number | Complex | BigNumber, SparseMatrix": function(e,
						t) {
							return n(e, 0) ? i(t.size(), t.storage()) : u(t, e,
								this, !0)
						},
						"number | Complex | BigNumber, DenseMatrix": function(e,
						t) {
							return n(e, 0) ? i(t.size(), t.storage()) : c(t, e,
								this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return c(r(e), t, this, !1).valueOf()
						},
						"number | Complex | BigNumber, Array": function(e, t) {
							return c(r(t), e, this, !0).valueOf()
						}
					}))
				})),
			Ca = {
				number: Vr,
				"number, number": function(e, t) {
					if (!Z(t)) throw new TypeError(Aa);
					if (t < 0 || t > 15) throw new Error(
						"Number of decimals in function round must be in the range of 0-15"
						);
					return Vr(e, t)
				}
			},
			_a = Qe("log", ["config", "typed", "divideScalar", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.divideScalar,
					i = e.Complex;
				return t("log", {
					number: function(e) {
						return e >= 0 || r.predictable ? Dr(e) : new i(e, 0)
							.log()
					},
					Complex: function(e) {
						return e.log()
					},
					BigNumber: function(e) {
						return !e.isNegative() || r.predictable ? e.ln() :
							new i(e.toNumber(), 0).log()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					},
					"any, any": function(e, t) {
						return n(this(e), this(t))
					}
				})
			})),
			Ta = Qe("log1p", ["typed", "config", "divideScalar", "log", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.divideScalar,
					i = e.log,
					a = e.Complex;
				return t("log1p", {
					number: function(e) {
						return e >= -1 || r.predictable ? X(e) : o(new a(e, 0))
					},
					Complex: o,
					BigNumber: function(e) {
						var t = e.plus(1);
						return !t.isNegative() || r.predictable ? t.ln() : o(
							new a(e.toNumber(), 0))
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					},
					"any, any": function(e, t) {
						return n(this(e), i(t))
					}
				});

				function o(e) {
					var t = e.re + 1;
					return new a(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im,
						t))
				}
			})),
			Ia = Qe("nthRoots", ["config", "typed", "divideScalar", "Complex"], (function(e) {
				var t = e.typed,
					r = (e.config, e.divideScalar, e.Complex),
					n = [function(e) {
						return new r(e, 0)
					}, function(e) {
						return new r(0, e)
					}, function(e) {
						return new r(-e, 0)
					}, function(e) {
						return new r(0, -e)
					}];

				function i(e, t) {
					if (t < 0) throw new Error("Root must be greater than zero");
					if (0 === t) throw new Error("Root must be non-zero");
					if (t % 1 != 0) throw new Error("Root must be an integer");
					if (0 === e || 0 === e.abs()) return [new r(0, 0)];
					var i, a = "number" == typeof e;
					(a || 0 === e.re || 0 === e.im) && (i = a ? 2 * +(e < 0) : 0 === e.im ?
						2 * +(e.re < 0) : 2 * +(e.im < 0) + 1);
					for (var o = e.arg(), s = e.abs(), u = [], c = Math.pow(s, 1 / t), f =
						0; f < t; f++) {
						var l = (i + 4 * f) / t;
						l !== Math.round(l) ? u.push(new r({
							r: c,
							phi: (o + 2 * Math.PI * f) / t
						})) : u.push(n[l % 4](c))
					}
					return u
				}
				return t("nthRoots", {
					Complex: function(e) {
						return i(e, 2)
					},
					"Complex, number": i
				})
			})),
			ka = Qe("dotPow", ["typed", "equalScalar", "matrix", "pow", "DenseMatrix"], (function(
			e) {
				var t = e.typed,
					r = e.equalScalar,
					n = e.matrix,
					i = e.pow,
					a = e.DenseMatrix,
					o = wn({
						typed: t
					}),
					s = ri({
						typed: t,
						DenseMatrix: a
					}),
					u = rn({
						typed: t,
						equalScalar: r
					}),
					c = Mn({
						typed: t,
						DenseMatrix: a
					}),
					f = hn({
						typed: t
					}),
					l = nn({
						typed: t
					});
				return t("dotPow", {
					"any, any": i,
					"SparseMatrix, SparseMatrix": function(e, t) {
						return s(e, t, i, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return o(t, e, i, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, i, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return f(e, t, i)
					},
					"Array, Array": function(e, t) {
						return this(n(e), n(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(n(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, n(t))
					},
					"SparseMatrix, any": function(e, t) {
						return u(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return l(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return l(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return l(n(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return l(n(t), e, this, !0).valueOf()
					}
				})
			})),
			za = Qe("dotDivide", ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix"],
				(function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.divideScalar,
						a = e.DenseMatrix,
						o = vn({
							typed: t,
							equalScalar: n
						}),
						s = wn({
							typed: t
						}),
						u = ri({
							typed: t,
							DenseMatrix: a
						}),
						c = rn({
							typed: t,
							equalScalar: n
						}),
						f = Mn({
							typed: t,
							DenseMatrix: a
						}),
						l = hn({
							typed: t
						}),
						p = nn({
							typed: t
						});
					return t("dotDivide", {
						"any, any": i,
						"SparseMatrix, SparseMatrix": function(e, t) {
							return u(e, t, i, !1)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return o(t, e, i, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return s(e, t, i, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return l(e, t, i)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, any": function(e, t) {
							return c(e, t, i, !1)
						},
						"DenseMatrix, any": function(e, t) {
							return p(e, t, i, !1)
						},
						"any, SparseMatrix": function(e, t) {
							return f(t, e, i, !0)
						},
						"any, DenseMatrix": function(e, t) {
							return p(t, e, i, !0)
						},
						"Array, any": function(e, t) {
							return p(r(e), t, i, !1).valueOf()
						},
						"any, Array": function(e, t) {
							return p(r(t), e, i, !0).valueOf()
						}
					})
				}));

		function Ra(e) {
			var t = e.DenseMatrix;
			return function(e, r, n) {
				var i = e.size();
				if (2 !== i.length) throw new RangeError(
					"Matrix must be two dimensional (size: " + xe(i) + ")");
				var a = i[0];
				if (a !== i[1]) throw new RangeError("Matrix must be square (size: " + xe(i) +
					")");
				var o = [];
				if (m(r)) {
					var s = r.size(),
						u = r._data;
					if (1 === s.length) {
						if (s[0] !== a) throw new RangeError(
							"Dimension mismatch. Matrix columns must match vector length."
							);
						for (var c = 0; c < a; c++) o[c] = [u[c]];
						return new t({
							data: o,
							size: [a, 1],
							datatype: r._datatype
						})
					}
					if (2 === s.length) {
						if (s[0] !== a || 1 !== s[1]) throw new RangeError(
							"Dimension mismatch. Matrix columns must match vector length."
							);
						if (d(r)) {
							if (n) {
								o = [];
								for (var f = 0; f < a; f++) o[f] = [u[f][0]];
								return new t({
									data: o,
									size: [a, 1],
									datatype: r._datatype
								})
							}
							return r
						}
						if (v(r)) {
							for (var l = 0; l < a; l++) o[l] = [0];
							for (var h = r._values, y = r._index, g = r._ptr, x = g[1], b = g[
								0]; b < x; b++) {
								o[y[b]][0] = h[b]
							}
							return new t({
								data: o,
								size: [a, 1],
								datatype: r._datatype
							})
						}
					}
					throw new RangeError(
						"Dimension mismatch. The right side has to be either 1- or 2-dimensional vector."
						)
				}
				if (p(r)) {
					var w = Se(r);
					if (1 === w.length) {
						if (w[0] !== a) throw new RangeError(
							"Dimension mismatch. Matrix columns must match vector length."
							);
						for (var N = 0; N < a; N++) o[N] = [r[N]];
						return new t({
							data: o,
							size: [a, 1]
						})
					}
					if (2 === w.length) {
						if (w[0] !== a || 1 !== w[1]) throw new RangeError(
							"Dimension mismatch. Matrix columns must match vector length."
							);
						for (var M = 0; M < a; M++) o[M] = [r[M][0]];
						return new t({
							data: o,
							size: [a, 1]
						})
					}
					throw new RangeError(
						"Dimension mismatch. The right side has to be either 1- or 2-dimensional vector."
						)
				}
			}
		}
		var qa = Qe("lsolve", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract",
				"equalScalar", "DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divideScalar,
					i = e.multiplyScalar,
					a = e.subtract,
					o = e.equalScalar,
					s = e.DenseMatrix,
					u = Ra({
						DenseMatrix: s
					});
				return t("lsolve", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return function(e, t) {
							for (var r = (t = u(e, t, !0))._data, c = e
									._size[0], f = e._size[1], l = e
									._values, p = e._index, m = e._ptr,
									h = [], d = 0; d < f; d++) {
								var v = r[d][0] || 0;
								if (o(v, 0)) h[d] = [0];
								else {
									for (var y = 0, g = [], x = [], b = m[
											d], w = m[d + 1], N = b; N <
										w; N++) {
										var M = p[N];
										M === d ? y = l[N] : M > d && (g
											.push(l[N]), x.push(M))
									}
									if (o(y, 0)) throw new Error(
										"Linear system cannot be solved since matrix is singular"
										);
									for (var E = n(v, y), S = 0, A = x
											.length; S < A; S++) {
										var O = x[S];
										r[O] = [a(r[O][0] || 0, i(E, g[S]))]
									}
									h[d] = [E]
								}
							}
							return new s({
								data: h,
								size: [c, 1]
							})
						}(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return c(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						return c(r(e), t).valueOf()
					}
				});

				function c(e, t) {
					for (var r = (t = u(e, t, !0))._data, c = e._size[0], f = e._size[1],
							l = [], p = e._data, m = 0; m < f; m++) {
						var h = r[m][0] || 0,
							d = void 0;
						if (o(h, 0)) d = 0;
						else {
							var v = p[m][m];
							if (o(v, 0)) throw new Error(
								"Linear system cannot be solved since matrix is singular"
								);
							d = n(h, v);
							for (var y = m + 1; y < c; y++) r[y] = [a(r[y][0] || 0, i(d, p[
								y][m]))]
						}
						l[m] = [d]
					}
					return new s({
						data: l,
						size: [c, 1]
					})
				}
			})),
			Ba = Qe("usolve", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract",
				"equalScalar", "DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divideScalar,
					i = e.multiplyScalar,
					a = e.subtract,
					o = e.equalScalar,
					s = e.DenseMatrix,
					u = Ra({
						DenseMatrix: s
					});
				return t("usolve", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return function(e, t) {
							for (var r = (t = u(e, t, !0))._data, c = e
									._size[0], f = e._size[1], l = e
									._values, p = e._index, m = e._ptr,
									h = [], d = f - 1; d >= 0; d--) {
								var v = r[d][0] || 0;
								if (o(v, 0)) h[d] = [0];
								else {
									for (var y = 0, g = [], x = [], b = m[
											d], w = m[d + 1] - 1; w >=
										b; w--) {
										var N = p[w];
										N === d ? y = l[w] : N < d && (g
											.push(l[w]), x.push(N))
									}
									if (o(y, 0)) throw new Error(
										"Linear system cannot be solved since matrix is singular"
										);
									for (var M = n(v, y), E = 0, S = x
											.length; E < S; E++) {
										var A = x[E];
										r[A] = [a(r[A][0], i(M, g[E]))]
									}
									h[d] = [M]
								}
							}
							return new s({
								data: h,
								size: [c, 1]
							})
						}(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return c(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						return c(r(e), t).valueOf()
					}
				});

				function c(e, t) {
					for (var r = (t = u(e, t, !0))._data, c = e._size[0], f = e._size[1],
							l = [], p = e._data, m = f - 1; m >= 0; m--) {
						var h = r[m][0] || 0,
							d = void 0;
						if (o(h, 0)) d = 0;
						else {
							var v = p[m][m];
							if (o(v, 0)) throw new Error(
								"Linear system cannot be solved since matrix is singular"
								);
							d = n(h, v);
							for (var y = m - 1; y >= 0; y--) r[y] = [a(r[y][0] || 0, i(d, p[
								y][m]))]
						}
						l[m] = [d]
					}
					return new s({
						data: l,
						size: [c, 1]
					})
				}
			})),
			Da = r(25),
			ja = r.n(Da),
			Pa = Qe("lsolveAll", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract",
				"equalScalar", "DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divideScalar,
					i = e.multiplyScalar,
					a = e.subtract,
					o = e.equalScalar,
					s = e.DenseMatrix,
					u = Ra({
						DenseMatrix: s
					});
				return t("lsolveAll", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return function(e, t) {
							for (var r = [u(e, t, !0)._data.map((function(
									e) {
										return e[0]
									}))], c = e._size[0], f = e._size[1],
									l = e._values, p = e._index, m = e._ptr,
									h = 0; h < f; h++)
								for (var d = r.length, v = 0; v < d; v++) {
									for (var y = r[v], g = [], x = [], b =
											m[h], w = m[h + 1], N = 0, M =
											b; M < w; M++) {
										var E = p[M];
										E === h ? N = l[M] : E > h && (g
											.push(l[M]), x.push(E))
									}
									if (o(N, 0))
										if (o(y[h], 0)) {
											if (0 === v) {
												var S = ja()(y);
												S[h] = 1;
												for (var A = 0, O = x
													.length; A < O; A++) {
													var C = x[A];
													S[C] = a(S[C], g[A])
												}
												r.push(S)
											}
										} else {
											if (0 === v) return [];
											r.splice(v, 1), v -= 1, d -= 1
										}
									else {
										y[h] = n(y[h], N);
										for (var _ = 0, T = x.length; _ <
											T; _++) {
											var I = x[_];
											y[I] = a(y[I], i(y[h], g[_]))
										}
									}
								}
							return r.map((function(e) {
								return new s({
									data: e.map((
										function(
											e) {
											return [
												e]
										})),
									size: [c, 1]
								})
							}))
						}(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return c(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						return c(r(e), t).map((function(e) {
							return e.valueOf()
						}))
					}
				});

				function c(e, t) {
					for (var r = [u(e, t, !0)._data.map((function(e) {
							return e[0]
						}))], c = e._data, f = e._size[0], l = e._size[1], p = 0; p <
						l; p++)
						for (var m = r.length, h = 0; h < m; h++) {
							var d = r[h];
							if (o(c[p][p], 0))
								if (o(d[p], 0)) {
									if (0 === h) {
										var v = ja()(d);
										v[p] = 1;
										for (var y = p + 1; y < l; y++) v[y] = a(v[y], c[y][
											p
										]);
										r.push(v)
									}
								} else {
									if (0 === h) return [];
									r.splice(h, 1), h -= 1, m -= 1
								}
							else {
								d[p] = n(d[p], c[p][p]);
								for (var g = p + 1; g < l; g++) d[g] = a(d[g], i(d[p], c[g][
									p
								]))
							}
						}
					return r.map((function(e) {
						return new s({
							data: e.map((function(e) {
								return [e]
							})),
							size: [f, 1]
						})
					}))
				}
			})),
			Fa = Qe("usolveAll", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract",
				"equalScalar", "DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divideScalar,
					i = e.multiplyScalar,
					a = e.subtract,
					o = e.equalScalar,
					s = e.DenseMatrix,
					u = Ra({
						DenseMatrix: s
					});
				return t("usolveAll", {
					"SparseMatrix, Array | Matrix": function(e, t) {
						return function(e, t) {
							for (var r = [u(e, t, !0)._data.map((function(
									e) {
										return e[0]
									}))], c = e._size[0], f = e._size[1],
									l = e._values, p = e._index, m = e._ptr,
									h = f - 1; h >= 0; h--)
								for (var d = r.length, v = 0; v < d; v++) {
									for (var y = r[v], g = [], x = [], b =
											m[h], w = m[h + 1], N = 0, M =
											w - 1; M >= b; M--) {
										var E = p[M];
										E === h ? N = l[M] : E < h && (g
											.push(l[M]), x.push(E))
									}
									if (o(N, 0))
										if (o(y[h], 0)) {
											if (0 === v) {
												var S = ja()(y);
												S[h] = 1;
												for (var A = 0, O = x
													.length; A < O; A++) {
													var C = x[A];
													S[C] = a(S[C], g[A])
												}
												r.push(S)
											}
										} else {
											if (0 === v) return [];
											r.splice(v, 1), v -= 1, d -= 1
										}
									else {
										y[h] = n(y[h], N);
										for (var _ = 0, T = x.length; _ <
											T; _++) {
											var I = x[_];
											y[I] = a(y[I], i(y[h], g[_]))
										}
									}
								}
							return r.map((function(e) {
								return new s({
									data: e.map((
										function(
											e) {
											return [
												e]
										})),
									size: [c, 1]
								})
							}))
						}(e, t)
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						return c(e, t)
					},
					"Array, Array | Matrix": function(e, t) {
						return c(r(e), t).map((function(e) {
							return e.valueOf()
						}))
					}
				});

				function c(e, t) {
					for (var r = [u(e, t, !0)._data.map((function(e) {
							return e[0]
						}))], c = e._data, f = e._size[0], l = e._size[1] - 1; l >= 0; l--)
						for (var p = r.length, m = 0; m < p; m++) {
							var h = r[m];
							if (o(c[l][l], 0))
								if (o(h[l], 0)) {
									if (0 === m) {
										var d = ja()(h);
										d[l] = 1;
										for (var v = l - 1; v >= 0; v--) d[v] = a(d[v], c[v]
											[l]);
										r.push(d)
									}
								} else {
									if (0 === m) return [];
									r.splice(m, 1), m -= 1, p -= 1
								}
							else {
								h[l] = n(h[l], c[l][l]);
								for (var y = l - 1; y >= 0; y--) h[y] = a(h[y], i(h[l], c[y]
									[l]))
							}
						}
					return r.map((function(e) {
						return new s({
							data: e.map((function(e) {
								return [e]
							})),
							size: [f, 1]
						})
					}))
				}
			})),
			Ua = Qe("algorithm08", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return function(e, n, i) {
					var a = e._values,
						o = e._index,
						s = e._ptr,
						u = e._size,
						c = e._datatype,
						f = n._values,
						l = n._index,
						p = n._ptr,
						m = n._size,
						h = n._datatype;
					if (u.length !== m.length) throw new Me(u.length, m.length);
					if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError(
						"Dimension mismatch. Matrix A (" + u +
						") must match Matrix B (" + m + ")");
					if (!a || !f) throw new Error(
						"Cannot perform operation on Pattern Sparse Matrices");
					var d, v = u[0],
						y = u[1],
						g = r,
						x = 0,
						b = i;
					"string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]),
						x = t.convert(0, d), b = t.find(i, [d, d]));
					for (var w, N, M, E, S = [], A = [], O = [], C = [], _ = [], T =
						0; T < y; T++) {
						O[T] = A.length;
						var I = T + 1;
						for (N = s[T], M = s[T + 1], w = N; w < M; w++) _[E = o[w]] = I,
							C[E] = a[w], A.push(E);
						for (N = p[T], M = p[T + 1], w = N; w < M; w++) _[E = l[w]] ===
							I && (C[E] = b(C[E], f[w]));
						for (w = O[T]; w < A.length;) {
							var k = C[E = A[w]];
							g(k, x) ? A.splice(w, 1) : (S.push(k), w++)
						}
					}
					return O[y] = A.length, e.createSparseMatrix({
						values: S,
						index: A,
						ptr: O,
						size: [v, y],
						datatype: d
					})
				}
			})),
			La = Qe("leftShift", ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.zeros,
						a = e.DenseMatrix,
						o = ln({
							typed: t
						}),
						s = vn({
							typed: t,
							equalScalar: n
						}),
						u = Ua({
							typed: t,
							equalScalar: n
						}),
						c = mn({
							typed: t,
							DenseMatrix: a
						}),
						f = rn({
							typed: t,
							equalScalar: n
						}),
						l = hn({
							typed: t
						}),
						p = nn({
							typed: t
						});
					return t("leftShift", {
						"number, number": Jn,
						"BigNumber, BigNumber": $n,
						"SparseMatrix, SparseMatrix": function(e, t) {
							return u(e, t, this, !1)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return s(t, e, this, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return o(e, t, this, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return l(e, t, this)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : f(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : p(e, t, this, !1)
						},
						"number | BigNumber, SparseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : c(t, e,
								this, !0)
						},
						"number | BigNumber, DenseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : p(t, e,
								this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return this(r(e), t).valueOf()
						},
						"number | BigNumber, Array": function(e, t) {
							return this(e, r(t)).valueOf()
						}
					})
				})),
			$a = Qe("rightArithShift", ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.zeros,
						a = e.DenseMatrix,
						o = ln({
							typed: t
						}),
						s = vn({
							typed: t,
							equalScalar: n
						}),
						u = Ua({
							typed: t,
							equalScalar: n
						}),
						c = mn({
							typed: t,
							DenseMatrix: a
						}),
						f = rn({
							typed: t,
							equalScalar: n
						}),
						l = hn({
							typed: t
						}),
						p = nn({
							typed: t
						});
					return t("rightArithShift", {
						"number, number": Xn,
						"BigNumber, BigNumber": Hn,
						"SparseMatrix, SparseMatrix": function(e, t) {
							return u(e, t, this, !1)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return s(t, e, this, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return o(e, t, this, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return l(e, t, this)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : f(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : p(e, t, this, !1)
						},
						"number | BigNumber, SparseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : c(t, e,
								this, !0)
						},
						"number | BigNumber, DenseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : p(t, e,
								this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return this(r(e), t).valueOf()
						},
						"number | BigNumber, Array": function(e, t) {
							return this(e, r(t)).valueOf()
						}
					})
				})),
			Ha = Qe("rightLogShift", ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.zeros,
						a = e.DenseMatrix,
						o = ln({
							typed: t
						}),
						s = vn({
							typed: t,
							equalScalar: n
						}),
						u = Ua({
							typed: t,
							equalScalar: n
						}),
						c = mn({
							typed: t,
							DenseMatrix: a
						}),
						f = rn({
							typed: t,
							equalScalar: n
						}),
						l = hn({
							typed: t
						}),
						p = nn({
							typed: t
						});
					return t("rightLogShift", {
						"number, number": Qn,
						"SparseMatrix, SparseMatrix": function(e, t) {
							return u(e, t, this, !1)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return s(t, e, this, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return o(e, t, this, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return l(e, t, this)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : f(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return n(t, 0) ? e.clone() : p(e, t, this, !1)
						},
						"number | BigNumber, SparseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : c(t, e,
								this, !0)
						},
						"number | BigNumber, DenseMatrix": function(e, t) {
							return n(e, 0) ? i(t.size(), t.storage()) : p(t, e,
								this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return this(r(e), t).valueOf()
						},
						"number | BigNumber, Array": function(e, t) {
							return this(e, r(t)).valueOf()
						}
					})
				})),
			Ga = Qe("and", ["typed", "matrix", "equalScalar", "zeros", "not"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.zeros,
					a = e.not,
					o = vn({
						typed: t,
						equalScalar: n
					}),
					s = yn({
						typed: t,
						equalScalar: n
					}),
					u = rn({
						typed: t,
						equalScalar: n
					}),
					c = hn({
						typed: t
					}),
					f = nn({
						typed: t
					});
				return t("and", {
					"number, number": li,
					"Complex, Complex": function(e, t) {
						return !(0 === e.re && 0 === e.im || 0 === t.re && 0 ===
							t.im)
					},
					"BigNumber, BigNumber": function(e, t) {
						return !(e.isZero() || t.isZero() || e.isNaN() || t
							.isNaN())
					},
					"Unit, Unit": function(e, t) {
						return this(e.value || 0, t.value || 0)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return s(e, t, this, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return o(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return c(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return a(t) ? i(e.size(), e.storage()) : u(e, t, this, !
							1)
					},
					"DenseMatrix, any": function(e, t) {
						return a(t) ? i(e.size(), e.storage()) : f(e, t, this, !
							1)
					},
					"any, SparseMatrix": function(e, t) {
						return a(e) ? i(e.size(), e.storage()) : u(t, e, this, !
							0)
					},
					"any, DenseMatrix": function(e, t) {
						return a(e) ? i(e.size(), e.storage()) : f(t, e, this, !
							0)
					},
					"Array, any": function(e, t) {
						return this(r(e), t).valueOf()
					},
					"any, Array": function(e, t) {
						return this(e, r(t)).valueOf()
					}
				})
			})),
			Va = Qe("compare", ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.equalScalar,
					i = e.matrix,
					a = e.BigNumber,
					o = e.Fraction,
					s = e.DenseMatrix,
					u = wn({
						typed: t
					}),
					c = Nn({
						typed: t,
						equalScalar: n
					}),
					f = Mn({
						typed: t,
						DenseMatrix: s
					}),
					l = hn({
						typed: t
					}),
					p = nn({
						typed: t
					});
				return t("compare", {
					"boolean, boolean": function(e, t) {
						return e === t ? 0 : e > t ? 1 : -1
					},
					"number, number": function(e, t) {
						return ue(e, t, r.epsilon) ? 0 : e > t ? 1 : -1
					},
					"BigNumber, BigNumber": function(e, t) {
						return or(e, t, r.epsilon) ? new a(0) : new a(e.cmp(t))
					},
					"Fraction, Fraction": function(e, t) {
						return new o(e.compare(t))
					},
					"Complex, Complex": function() {
						throw new TypeError(
							"No ordering relation is defined for complex numbers"
							)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return c(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return u(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return u(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return l(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(i(e), i(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(i(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, i(t))
					},
					"SparseMatrix, any": function(e, t) {
						return f(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return p(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return f(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return p(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return p(i(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return p(i(t), e, this, !0).valueOf()
					}
				})
			})),
			Za = r(64),
			Wa = r.n(Za),
			Ya = Qe("compareNatural", ["typed", "compare"], (function(e) {
				var t = e.typed,
					r = e.compare,
					n = r.signatures["boolean,boolean"];
				return t("compareNatural", {
					"any, any": function(e, t) {
						var a, o = H(e),
							s = H(t);
						if (!("number" !== o && "BigNumber" !== o &&
								"Fraction" !== o || "number" !== s &&
								"BigNumber" !== s && "Fraction" !== s))
						return "0" !== (a = r(e, t)).toString() ? a > 0 ?
							1 : -1 : Wa()(o, s);
						if ("Array" === o || "Matrix" === o || "Array" === s ||
							"Matrix" === s) return 0 !== (a = function e(t, r,
							n) {
							if (v(r) && v(n)) return i(t, r.toJSON()
								.values, n.toJSON().values);
							if (v(r)) return e(t, r.toArray(), n);
							if (v(n)) return e(t, r, n.toArray());
							if (d(r)) return e(t, r.toJSON().data,
								n);
							if (d(n)) return e(t, r, n.toJSON()
								.data);
							if (!Array.isArray(r)) return e(t, [r],
								n);
							if (!Array.isArray(n)) return e(t, r, [
								n]);
							return i(t, r, n)
						}(this, e, t)) ? a : Wa()(o, s);
						if (o !== s) return Wa()(o, s);
						if ("Complex" === o) return function(e, t) {
							if (e.re > t.re) return 1;
							if (e.re < t.re) return -1;
							if (e.im > t.im) return 1;
							if (e.im < t.im) return -1;
							return 0
						}(e, t);
						if ("Unit" === o) return e.equalBase(t) ? this(e.value,
							t.value) : i(this, e.formatUnits(), t
							.formatUnits());
						if ("boolean" === o) return n(e, t);
						if ("string" === o) return Wa()(e, t);
						if ("Object" === o) return function(e, t, r) {
							var n = Object.keys(t),
								a = Object.keys(r);
							n.sort(Wa.a), a.sort(Wa.a);
							var o = i(e, n, a);
							if (0 !== o) return o;
							for (var s = 0; s < n.length; s++) {
								var u = e(t[n[s]], r[a[s]]);
								if (0 !== u) return u
							}
							return 0
						}(this, e, t);
						if ("null" === o) return 0;
						if ("undefined" === o) return 0;
						throw new TypeError('Unsupported type of value "' + o +
							'"')
					}
				});

				function i(e, t, r) {
					for (var n = 0, i = Math.min(t.length, r.length); n < i; n++) {
						var a = e(t[n], r[n]);
						if (0 !== a) return a
					}
					return t.length > r.length ? 1 : t.length < r.length ? -1 : 0
				}
			}));
		var Ja = Qe("compareText", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = hn({
						typed: t
					}),
					i = nn({
						typed: t
					});
				return t("compareText", {
					"any, any": Ne,
					"DenseMatrix, DenseMatrix": function(e, t) {
						return n(e, t, Ne)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"DenseMatrix, any": function(e, t) {
						return i(e, t, Ne, !1)
					},
					"any, DenseMatrix": function(e, t) {
						return i(t, e, Ne, !0)
					},
					"Array, any": function(e, t) {
						return i(r(e), t, Ne, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return i(r(t), e, Ne, !0).valueOf()
					}
				})
			})),
			Xa = Qe("equal", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.equalScalar,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = ri({
						typed: t,
						DenseMatrix: i
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("equal", {
					"any, any": function(e, t) {
						return null === e ? null === t : null === t ? null ===
							e : void 0 === e ? void 0 === t : void 0 === t ?
							void 0 === e : n(e, t)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, n)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, n, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, n, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, n)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, n, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, n, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, n, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, n, !0)
					},
					"Array, any": function(e, t) {
						return c(r(e), t, n, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(r(t), e, n, !0).valueOf()
					}
				})
			})),
			Qa = (Qe("equal", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return t("equal", {
					"any, any": function(e, t) {
						return null === e ? null === t : null === t ?
							null === e : void 0 === e ? void 0 === t :
							void 0 === t ? void 0 === e : r(e, t)
					}
				})
			})), Qe("equalText", ["typed", "compareText", "isZero"], (function(e) {
				var t = e.typed,
					r = e.compareText,
					n = e.isZero;
				return t("equalText", {
					"any, any": function(e, t) {
						return n(r(e, t))
					}
				})
			}))),
			Ka = Qe("smaller", ["typed", "config", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = ri({
						typed: t,
						DenseMatrix: i
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("smaller", {
					"boolean, boolean": function(e, t) {
						return e < t
					},
					"number, number": function(e, t) {
						return e < t && !ue(e, t, r.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.lt(t) && !or(e, t, r.epsilon)
					},
					"Fraction, Fraction": function(e, t) {
						return -1 === e.compare(t)
					},
					"Complex, Complex": function(e, t) {
						throw new TypeError(
							"No ordering relation is defined for complex numbers"
							)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(n(e), n(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(n(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, n(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(n(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(n(t), e, this, !0).valueOf()
					}
				})
			})),
			eo = Qe("smallerEq", ["typed", "config", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = ri({
						typed: t,
						DenseMatrix: i
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("smallerEq", {
					"boolean, boolean": function(e, t) {
						return e <= t
					},
					"number, number": function(e, t) {
						return e <= t || ue(e, t, r.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.lte(t) || or(e, t, r.epsilon)
					},
					"Fraction, Fraction": function(e, t) {
						return 1 !== e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError(
							"No ordering relation is defined for complex numbers"
							)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(n(e), n(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(n(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, n(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(n(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(n(t), e, this, !0).valueOf()
					}
				})
			})),
			to = Qe("larger", ["typed", "config", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = ri({
						typed: t,
						DenseMatrix: i
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("larger", {
					"boolean, boolean": function(e, t) {
						return e > t
					},
					"number, number": function(e, t) {
						return e > t && !ue(e, t, r.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.gt(t) && !or(e, t, r.epsilon)
					},
					"Fraction, Fraction": function(e, t) {
						return 1 === e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError(
							"No ordering relation is defined for complex numbers"
							)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(n(e), n(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(n(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, n(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(n(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(n(t), e, this, !0).valueOf()
					}
				})
			})),
			ro = Qe("largerEq", ["typed", "config", "matrix", "DenseMatrix"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.DenseMatrix,
					a = wn({
						typed: t
					}),
					o = ri({
						typed: t,
						DenseMatrix: i
					}),
					s = Mn({
						typed: t,
						DenseMatrix: i
					}),
					u = hn({
						typed: t
					}),
					c = nn({
						typed: t
					});
				return t("largerEq", {
					"boolean, boolean": function(e, t) {
						return e >= t
					},
					"number, number": function(e, t) {
						return e >= t || ue(e, t, r.epsilon)
					},
					"BigNumber, BigNumber": function(e, t) {
						return e.gte(t) || or(e, t, r.epsilon)
					},
					"Fraction, Fraction": function(e, t) {
						return -1 !== e.compare(t)
					},
					"Complex, Complex": function() {
						throw new TypeError(
							"No ordering relation is defined for complex numbers"
							)
					},
					"Unit, Unit": function(e, t) {
						if (!e.equalBase(t)) throw new Error(
							"Cannot compare units with different base");
						return this(e.value, t.value)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, this)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return a(t, e, this, !0)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return a(e, t, this, !1)
					},
					"DenseMatrix, DenseMatrix": function(e, t) {
						return u(e, t, this)
					},
					"Array, Array": function(e, t) {
						return this(n(e), n(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(n(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, n(t))
					},
					"SparseMatrix, any": function(e, t) {
						return s(e, t, this, !1)
					},
					"DenseMatrix, any": function(e, t) {
						return c(e, t, this, !1)
					},
					"any, SparseMatrix": function(e, t) {
						return s(t, e, this, !0)
					},
					"any, DenseMatrix": function(e, t) {
						return c(t, e, this, !0)
					},
					"Array, any": function(e, t) {
						return c(n(e), t, this, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return c(n(t), e, this, !0).valueOf()
					}
				})
			})),
			no = Qe("deepEqual", ["typed", "equal"], (function(e) {
				var t = e.typed,
					r = e.equal;
				return t("deepEqual", {
					"any, any": function(e, t) {
						return function e(t, n) {
							if (Array.isArray(t)) {
								if (Array.isArray(n)) {
									var i = t.length;
									if (i !== n.length) return !1;
									for (var a = 0; a < i; a++)
										if (!e(t[a], n[a])) return !1;
									return !0
								}
								return !1
							}
							return !Array.isArray(n) && r(t, n)
						}(e.valueOf(), t.valueOf())
					}
				})
			})),
			io = Qe("unequal", ["typed", "config", "equalScalar", "matrix", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = (e.config, e.equalScalar),
						n = e.matrix,
						i = e.DenseMatrix,
						a = wn({
							typed: t
						}),
						o = ri({
							typed: t,
							DenseMatrix: i
						}),
						s = Mn({
							typed: t,
							DenseMatrix: i
						}),
						u = hn({
							typed: t
						}),
						c = nn({
							typed: t
						});
					return t("unequal", {
						"any, any": function(e, t) {
							return null === e ? null !== t : null === t ? null !==
								e : void 0 === e ? void 0 !== t : void 0 === t ?
								void 0 !== e : f(e, t)
						},
						"SparseMatrix, SparseMatrix": function(e, t) {
							return o(e, t, f)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return a(t, e, f, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return a(e, t, f, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return u(e, t, f)
						},
						"Array, Array": function(e, t) {
							return this(n(e), n(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(n(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, n(t))
						},
						"SparseMatrix, any": function(e, t) {
							return s(e, t, f, !1)
						},
						"DenseMatrix, any": function(e, t) {
							return c(e, t, f, !1)
						},
						"any, SparseMatrix": function(e, t) {
							return s(t, e, f, !0)
						},
						"any, DenseMatrix": function(e, t) {
							return c(t, e, f, !0)
						},
						"Array, any": function(e, t) {
							return c(n(e), t, f, !1).valueOf()
						},
						"any, Array": function(e, t) {
							return c(n(t), e, f, !0).valueOf()
						}
					});

					function f(e, t) {
						return !r(e, t)
					}
				})),
			ao = (Qe("unequal", ["typed", "equalScalar"], (function(e) {
				var t = e.typed,
					r = e.equalScalar;
				return t("unequal", {
					"any, any": function(e, t) {
						return null === e ? null !== t : null === t ?
							null !== e : void 0 === e ? void 0 !== t :
							void 0 === t ? void 0 !== e : !r(e, t)
					}
				})
			})), Qe("partitionSelect", ["typed", "isNumeric", "isNaN", "compare"], (function(
			e) {
				var t = e.typed,
					r = e.isNumeric,
					n = e.isNaN,
					i = e.compare,
					a = i,
					o = function(e, t) {
						return -i(e, t)
					};
				return t("partitionSelect", {
					"Array | Matrix, number": function(e, t) {
						return s(e, t, a)
					},
					"Array | Matrix, number, string": function(e, t, r) {
						if ("asc" === r) return s(e, t, a);
						if ("desc" === r) return s(e, t, o);
						throw new Error(
							'Compare string must be "asc" or "desc"')
					},
					"Array | Matrix, number, function": s
				});

				function s(e, t, r) {
					if (!Z(t) || t < 0) throw new Error(
						"k must be a non-negative integer");
					if (m(e)) {
						if (e.size().length > 1) throw new Error(
							"Only one dimensional matrices supported");
						return u(e.valueOf(), t, r)
					}
					if (Array.isArray(e)) return u(e, t, r)
				}

				function u(e, t, i) {
					if (t >= e.length) throw new Error("k out of bounds");
					for (var a = 0; a < e.length; a++)
						if (r(e[a]) && n(e[a])) return e[a];
					for (var o = 0, s = e.length - 1; o < s;) {
						for (var u = o, c = s, f = e[Math.floor(Math.random() * (s - o +
								1)) + o]; u < c;)
							if (i(e[u], f) >= 0) {
								var l = e[c];
								e[c] = e[u], e[u] = l, --c
							} else ++u;
						i(e[u], f) > 0 && --u, t <= u ? s = u : o = u + 1
					}
					return e[t]
				}
			}))),
			oo = Qe("sort", ["typed", "matrix", "compare", "compareNatural"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.compare,
					i = e.compareNatural,
					a = n,
					o = function(e, t) {
						return -n(e, t)
					};
				return t("sort", {
					Array: function(e) {
						return u(e), e.sort(a)
					},
					Matrix: function(e) {
						return c(e), r(e.toArray().sort(a), e.storage())
					},
					"Array, function": function(e, t) {
						return u(e), e.sort(t)
					},
					"Matrix, function": function(e, t) {
						return c(e), r(e.toArray().sort(t), e.storage())
					},
					"Array, string": function(e, t) {
						return u(e), e.sort(s(t))
					},
					"Matrix, string": function(e, t) {
						return c(e), r(e.toArray().sort(s(t)), e.storage())
					}
				});

				function s(e) {
					if ("asc" === e) return a;
					if ("desc" === e) return o;
					if ("natural" === e) return i;
					throw new Error('String "asc", "desc", or "natural" expected')
				}

				function u(e) {
					if (1 !== Se(e).length) throw new Error(
						"One dimensional array expected")
				}

				function c(e) {
					if (1 !== e.size().length) throw new Error(
						"One dimensional matrix expected")
				}
			})),
			so = Qe("max", ["typed", "config", "numeric", "larger"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.numeric,
					i = e.larger;
				return t("max", {
					"Array | Matrix": o,
					"Array | Matrix, number | BigNumber": function(e, t) {
						return Gt(e, t.valueOf(), a)
					},
					"...": function(e) {
						if (Lt(e)) throw new TypeError(
							"Scalar values expected in function max");
						return o(e)
					}
				});

				function a(e, t) {
					try {
						return i(e, t) ? e : t
					} catch (e) {
						throw ca(e, "max", t)
					}
				}

				function o(e) {
					var t;
					if ($t(e, (function(e) {
							try {
								isNaN(e) && "number" == typeof e ? t = NaN : (
									void 0 === t || i(e, t)) && (t = e)
							} catch (t) {
								throw ca(t, "max", e)
							}
						})), void 0 === t) throw new Error(
						"Cannot calculate max of an empty array");
					return "string" == typeof t && (t = n(t, r.number)), t
				}
			})),
			uo = Qe("min", ["typed", "config", "numeric", "smaller"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.numeric,
					i = e.smaller;
				return t("min", {
					"Array | Matrix": o,
					"Array | Matrix, number | BigNumber": function(e, t) {
						return Gt(e, t.valueOf(), a)
					},
					"...": function(e) {
						if (Lt(e)) throw new TypeError(
							"Scalar values expected in function min");
						return o(e)
					}
				});

				function a(e, t) {
					try {
						return i(e, t) ? e : t
					} catch (e) {
						throw ca(e, "min", t)
					}
				}

				function o(e) {
					var t;
					if ($t(e, (function(e) {
							try {
								isNaN(e) && "number" == typeof e ? t = NaN : (
									void 0 === t || i(e, t)) && (t = e)
							} catch (t) {
								throw ca(t, "min", e)
							}
						})), void 0 === t) throw new Error(
						"Cannot calculate min of an empty array");
					return "string" == typeof t && (t = n(t, r.number)), t
				}
			})),
			co = Qe("ImmutableDenseMatrix", ["smaller", "DenseMatrix"], (function(e) {
				var t = e.smaller,
					r = e.DenseMatrix;

				function n(e, t) {
					if (!(this instanceof n)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (t && !l(t)) throw new Error("Invalid datatype: " + t);
					if (m(e) || p(e)) {
						var i = new r(e, t);
						this._data = i._data, this._size = i._size, this._datatype = i
							._datatype, this._min = null, this._max = null
					} else if (e && p(e.data) && p(e.size)) this._data = e.data, this
						._size = e.size, this._datatype = e.datatype, this._min = void 0 !==
						e.min ? e.min : null, this._max = void 0 !== e.max ? e.max : null;
					else {
						if (e) throw new TypeError("Unsupported type of data (" + H(e) +
							")");
						this._data = [], this._size = [0], this._datatype = t, this._min =
							null, this._max = null
					}
				}
				return n.prototype = new r, n.prototype.type = "ImmutableDenseMatrix", n
					.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function(
					e) {
						switch (arguments.length) {
							case 1:
								var t = r.prototype.subset.call(this, e);
								return m(t) ? new n({
									data: t._data,
									size: t._size,
									datatype: t._datatype
								}) : t;
							case 2:
							case 3:
								throw new Error(
									"Cannot invoke set subset on an Immutable Matrix instance"
									);
							default:
								throw new SyntaxError("Wrong number of arguments")
						}
					}, n.prototype.set = function() {
						throw new Error("Cannot invoke set on an Immutable Matrix instance")
					}, n.prototype.resize = function() {
						throw new Error(
							"Cannot invoke resize on an Immutable Matrix instance")
					}, n.prototype.reshape = function() {
						throw new Error(
							"Cannot invoke reshape on an Immutable Matrix instance")
					}, n.prototype.clone = function() {
						return new n({
							data: He(this._data),
							size: He(this._size),
							datatype: this._datatype
						})
					}, n.prototype.toJSON = function() {
						return {
							mathjs: "ImmutableDenseMatrix",
							data: this._data,
							size: this._size,
							datatype: this._datatype
						}
					}, n.fromJSON = function(e) {
						return new n(e)
					}, n.prototype.swapRows = function() {
						throw new Error(
							"Cannot invoke swapRows on an Immutable Matrix instance")
					}, n.prototype.min = function() {
						if (null === this._min) {
							var e = null;
							this.forEach((function(r) {
								(null === e || t(r, e)) && (e = r)
							})), this._min = null !== e ? e : void 0
						}
						return this._min
					}, n.prototype.max = function() {
						if (null === this._max) {
							var e = null;
							this.forEach((function(r) {
								(null === e || t(e, r)) && (e = r)
							})), this._max = null !== e ? e : void 0
						}
						return this._max
					}, n
			}), {
				isClass: !0
			}),
			fo = Qe("Index", ["ImmutableDenseMatrix"], (function(e) {
				var t = e.ImmutableDenseMatrix;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					this._dimensions = [], this._isScalar = !0;
					for (var t = 0, i = arguments.length; t < i; t++) {
						var a = arguments[t];
						if (y(a)) this._dimensions.push(a), this._isScalar = !1;
						else if (Array.isArray(a) || m(a)) {
							var o = n(a.valueOf());
							this._dimensions.push(o);
							var s = o.size();
							1 === s.length && 1 === s[0] || (this._isScalar = !1)
						} else if ("number" == typeof a) this._dimensions.push(n([a]));
						else {
							if ("string" != typeof a) throw new TypeError(
								"Dimension must be an Array, Matrix, number, string, or Range"
								);
							this._dimensions.push(a)
						}
					}
				}

				function n(e) {
					for (var r = 0, n = e.length; r < n; r++)
						if ("number" != typeof e[r] || !Z(e[r])) throw new TypeError(
							"Index parameters must be positive integer numbers");
					return new t(e)
				}
				return r.prototype.type = "Index", r.prototype.isIndex = !0, r.prototype
					.clone = function() {
						var e = new r;
						return e._dimensions = He(this._dimensions), e._isScalar = this
							._isScalar, e
					}, r.create = function(e) {
						var t = new r;
						return r.apply(t, e), t
					}, r.prototype.size = function() {
						for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
							var n = this._dimensions[t];
							e[t] = "string" == typeof n ? 1 : n.size()[0]
						}
						return e
					}, r.prototype.max = function() {
						for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
							var n = this._dimensions[t];
							e[t] = "string" == typeof n ? n : n.max()
						}
						return e
					}, r.prototype.min = function() {
						for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
							var n = this._dimensions[t];
							e[t] = "string" == typeof n ? n : n.min()
						}
						return e
					}, r.prototype.forEach = function(e) {
						for (var t = 0, r = this._dimensions.length; t < r; t++) e(this
							._dimensions[t], t, this)
					}, r.prototype.dimension = function(e) {
						return this._dimensions[e] || null
					}, r.prototype.isObjectProperty = function() {
						return 1 === this._dimensions.length && "string" == typeof this
							._dimensions[0]
					}, r.prototype.getObjectProperty = function() {
						return this.isObjectProperty() ? this._dimensions[0] : null
					}, r.prototype.isScalar = function() {
						return this._isScalar
					}, r.prototype.toArray = function() {
						for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
							var n = this._dimensions[t];
							e.push("string" == typeof n ? n : n.toArray())
						}
						return e
					}, r.prototype.valueOf = r.prototype.toArray, r.prototype.toString =
					function() {
						for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
							var n = this._dimensions[t];
							"string" == typeof n ? e.push(JSON.stringify(n)) : e.push(n
								.toString())
						}
						return "[" + e.join(", ") + "]"
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "Index",
							dimensions: this._dimensions
						}
					}, r.fromJSON = function(e) {
						return r.create(e.dimensions)
					}, r
			}), {
				isClass: !0
			}),
			lo = Qe("FibonacciHeap", ["smaller", "larger"], (function(e) {
				var t = e.smaller,
					r = e.larger,
					n = 1 / Math.log((1 + Math.sqrt(5)) / 2);

				function i() {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					this._minimum = null, this._size = 0
				}

				function a(e, t, r) {
					t.left.right = t.right, t.right.left = t.left, r.degree--, r.child ===
						t && (r.child = t.right), 0 === r.degree && (r.child = null), t
						.left = e, t.right = e.right, e.right = t, t.right.left = t, t
						.parent = null, t.mark = !1
				}
				i.prototype.type = "FibonacciHeap", i.prototype.isFibonacciHeap = !0, i
					.prototype.insert = function(e, r) {
						var n = {
							key: e,
							value: r,
							degree: 0
						};
						if (this._minimum) {
							var i = this._minimum;
							n.left = i, n.right = i.right, i.right = n, n.right.left = n, t(
								e, i.key) && (this._minimum = n)
						} else n.left = n, n.right = n, this._minimum = n;
						return this._size++, n
					}, i.prototype.size = function() {
						return this._size
					}, i.prototype.clear = function() {
						this._minimum = null, this._size = 0
					}, i.prototype.isEmpty = function() {
						return 0 === this._size
					}, i.prototype.extractMinimum = function() {
						var e = this._minimum;
						if (null === e) return e;
						for (var i = this._minimum, a = e.degree, s = e.child; a > 0;) {
							var u = s.right;
							s.left.right = s.right, s.right.left = s.left, s.left = i, s
								.right = i.right, i.right = s, s.right.left = s, s.parent =
								null, s = u, a--
						}
						return e.left.right = e.right, e.right.left = e.left, i = e === e
							.right ? null : function(e, i) {
								var a, s = Math.floor(Math.log(i) * n) + 1,
									u = new Array(s),
									c = 0,
									f = e;
								if (f)
									for (c++, f = f.right; f !== e;) c++, f = f.right;
								for (; c > 0;) {
									for (var l = f.degree, p = f.right; a = u[l];) {
										if (r(f.key, a.key)) {
											var m = a;
											a = f, f = m
										}
										o(a, f), u[l] = null, l++
									}
									u[l] = f, f = p, c--
								}
								e = null;
								for (var h = 0; h < s; h++)(a = u[h]) && (e ? (a.left
										.right = a.right, a.right.left = a.left, a
										.left = e, a.right = e.right, e.right = a, a
										.right.left = a, t(a.key, e.key) && (e = a)) :
									e = a);
								return e
							}(i = e.right, this._size), this._size--, this._minimum = i, e
					}, i.prototype.remove = function(e) {
						this._minimum = function(e, r, n) {
							r.key = n;
							var i = r.parent;
							i && t(r.key, i.key) && (a(e, r, i), function e(t, r) {
								var n = r.parent;
								if (!n) return;
								r.mark ? (a(t, r, n), e(n)) : r.mark = !0
							}(e, i));
							t(r.key, e.key) && (e = r);
							return e
						}(this._minimum, e, -1), this.extractMinimum()
					};
				var o = function(e, t) {
					e.left.right = e.right, e.right.left = e.left, e.parent = t, t
						.child ? (e.left = t.child, e.right = t.child.right, t.child
							.right = e, e.right.left = e) : (t.child = e, e.right = e, e
							.left = e), t.degree++, e.mark = !1
				};
				return i
			}), {
				isClass: !0
			}),
			po = Qe("Spa", ["addScalar", "equalScalar", "FibonacciHeap"], (function(e) {
				var t = e.addScalar,
					r = e.equalScalar,
					n = e.FibonacciHeap;

				function i() {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					this._values = [], this._heap = new n
				}
				return i.prototype.type = "Spa", i.prototype.isSpa = !0, i.prototype.set =
					function(e, t) {
						if (this._values[e]) this._values[e].value = t;
						else {
							var r = this._heap.insert(e, t);
							this._values[e] = r
						}
					}, i.prototype.get = function(e) {
						var t = this._values[e];
						return t ? t.value : 0
					}, i.prototype.accumulate = function(e, r) {
						var n = this._values[e];
						n ? n.value = t(n.value, r) : (n = this._heap.insert(e, r), this
							._values[e] = n)
					}, i.prototype.forEach = function(e, t, n) {
						var i = this._heap,
							a = this._values,
							o = [],
							s = i.extractMinimum();
						for (s && o.push(s); s && s.key <= t;) s.key >= e && (r(s.value,
								0) || n(s.key, s.value, this)), (s = i.extractMinimum()) &&
							o.push(s);
						for (var u = 0; u < o.length; u++) {
							var c = o[u];
							a[(s = i.insert(c.key, c.value)).key] = s
						}
					}, i.prototype.swap = function(e, t) {
						var r = this._values[e],
							n = this._values[t];
						if (!r && n) r = this._heap.insert(e, n.value), this._heap.remove(
							n), this._values[e] = r, this._values[t] = void 0;
						else if (r && !n) n = this._heap.insert(t, r.value), this._heap
							.remove(r), this._values[t] = n, this._values[e] = void 0;
						else if (r && n) {
							var i = r.value;
							r.value = n.value, n.value = i
						}
					}, i
			}), {
				isClass: !0
			}),
			mo = r(32),
			ho = r.n(mo),
			vo = Ni((function(e) {
				return new e(1).exp()
			}), {
				hasher: bo
			}),
			yo = Ni((function(e) {
				return new e(1).plus(new e(5).sqrt()).div(2)
			}), {
				hasher: bo
			}),
			go = Ni((function(e) {
				return e.acos(-1)
			}), {
				hasher: bo
			}),
			xo = Ni((function(e) {
				return go(e).times(2)
			}), {
				hasher: bo
			});

		function bo(e) {
			return e[0].precision
		}

		function wo(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function No(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2 ? wo(Object(r), !0).forEach((function(t) {
					Ma()(e, t, r[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
					.getOwnPropertyDescriptors(r)) : wo(Object(r)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
			return e
		}
		var Mo = Qe("Unit", ["?on", "config", "addScalar", "subtract", "multiplyScalar",
				"divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format",
				"number", "Complex", "BigNumber", "Fraction"
			], (function(e) {
				var t, r, n, i = e.on,
					o = e.config,
					s = e.addScalar,
					c = e.subtract,
					l = e.multiplyScalar,
					p = e.divideScalar,
					m = e.pow,
					h = e.abs,
					d = e.fix,
					v = e.round,
					y = e.equal,
					g = e.isNumeric,
					x = e.format,
					b = e.number,
					w = e.Complex,
					N = e.BigNumber,
					M = e.Fraction,
					E = b;

				function S(e, t) {
					if (!(this instanceof S)) throw new Error(
						"Constructor must be called with the new operator");
					if (null != e && !g(e) && !u(e)) throw new TypeError(
						"First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined"
						);
					if (void 0 !== t && ("string" != typeof t || "" === t))
					throw new TypeError(
							"Second parameter in Unit constructor must be a string");
					if (void 0 !== t) {
						var r = S.parse(t);
						this.units = r.units, this.dimensions = r.dimensions
					} else {
						this.units = [{
							unit: P,
							prefix: q.NONE,
							power: 0
						}], this.dimensions = [];
						for (var n = 0; n < B.length; n++) this.dimensions[n] = 0
					}
					this.value = null != e ? this._normalize(e) : null, this.fixPrefix = !1,
						this.skipAutomaticSimplification = !0
				}

				function A() {
					for (;
						" " === n || "\t" === n;) C()
				}

				function O(e) {
					return e >= "0" && e <= "9"
				}

				function C() {
					r++, n = t.charAt(r)
				}

				function _(e) {
					r = e, n = t.charAt(r)
				}

				function T() {
					var e = "",
						t = r;
					if ("+" === n ? C() : "-" === n && (e += n, C()), ! function(e) {
							return e >= "0" && e <= "9" || "." === e
						}(n)) return _(t), null;
					if ("." === n) {
						if (e += n, C(), !O(n)) return _(t), null
					} else {
						for (; O(n);) e += n, C();
						"." === n && (e += n, C())
					}
					for (; O(n);) e += n, C();
					if ("E" === n || "e" === n) {
						var i = "",
							a = r;
						if (i += n, C(), "+" !== n && "-" !== n || (i += n, C()), !O(n))
							return _(a), e;
						for (e += i; O(n);) e += n, C()
					}
					return e
				}

				function I() {
					for (var e = ""; O(n) || S.isValidAlpha(n);) e += n, C();
					var t = e.charAt(0);
					return S.isValidAlpha(t) ? e : null
				}

				function k(e) {
					return n === e ? (C(), e) : null
				}
				S.prototype.type = "Unit", S.prototype.isUnit = !0, S.parse = function(e,
				i) {
					if (i = i || {}, r = -1, n = "", "string" != typeof(t = e))
					throw new TypeError(
							"Invalid argument in Unit.parse, string expected");
					var a = new S;
					a.units = [];
					var s = 1,
						u = !1;
					C(), A();
					var c = T(),
						f = null;
					if (c) {
						if ("BigNumber" === o.number) f = new N(c);
						else if ("Fraction" === o.number) try {
							f = new M(c)
						} catch (e) {
							f = parseFloat(c)
						} else f = parseFloat(c);
						A(), k("*") ? (s = 1, u = !0) : k("/") && (s = -1, u = !0)
					}
					for (var l = [], p = 1;;) {
						for (A();
							"(" === n;) l.push(s), p *= s, s = 1, C(), A();
						var m = void 0;
						if (!n) break;
						var h = n;
						if (null === (m = I())) throw new SyntaxError('Unexpected "' +
							h + '" in "' + t + '" at index ' + r.toString());
						var d = z(m);
						if (null === d) throw new SyntaxError('Unit "' + m +
							'" not found.');
						var v = s * p;
						if (A(), k("^")) {
							A();
							var y = T();
							if (null === y) throw new SyntaxError('In "' + e +
								'", "^" must be followed by a floating-point number'
								);
							v *= y
						}
						a.units.push({
							unit: d.unit,
							prefix: d.prefix,
							power: v
						});
						for (var g = 0; g < B.length; g++) a.dimensions[g] += (d.unit
							.dimensions[g] || 0) * v;
						for (A();
							")" === n;) {
							if (0 === l.length) throw new SyntaxError(
								'Unmatched ")" in "' + t + '" at index ' + r
								.toString());
							p /= l.pop(), C(), A()
						}
						if (u = !1, k("*") ? (s = 1, u = !0) : k("/") ? (s = -1, u = !
							0) : s = 1, d.unit.base) {
							var x = d.unit.base.key;
							$.auto[x] = {
								unit: d.unit,
								prefix: d.prefix
							}
						}
					}
					if (A(), n) throw new SyntaxError('Could not parse: "' + e + '"');
					if (u) throw new SyntaxError('Trailing characters: "' + e + '"');
					if (0 !== l.length) throw new SyntaxError('Unmatched "(" in "' + t +
						'"');
					if (0 === a.units.length && !i.allowNoUnits) throw new SyntaxError(
						'"' + e + '" contains no units');
					return a.value = void 0 !== f ? a._normalize(f) : null, a
				}, S.prototype.clone = function() {
					var e = new S;
					e.fixPrefix = this.fixPrefix, e.skipAutomaticSimplification = this
						.skipAutomaticSimplification, e.value = He(this.value), e
						.dimensions = this.dimensions.slice(0), e.units = [];
					for (var t = 0; t < this.units.length; t++)
						for (var r in e.units[t] = {}, this.units[t]) Je(this.units[t],
							r) && (e.units[t][r] = this.units[t][r]);
					return e
				}, S.prototype._isDerived = function() {
					return 0 !== this.units.length && (this.units.length > 1 || Math
						.abs(this.units[0].power - 1) > 1e-15)
				}, S.prototype._normalize = function(e) {
					var t, r, n, i, a;
					if (null == e || 0 === this.units.length) return e;
					if (this._isDerived()) {
						var o = e;
						a = S._getNumberConverter(H(e));
						for (var u = 0; u < this.units.length; u++) t = a(this.units[u]
							.unit.value), i = a(this.units[u].prefix.value), n = a(
							this.units[u].power), o = l(o, m(l(t, i), n));
						return o
					}
					return t = (a = S._getNumberConverter(H(e)))(this.units[0].unit
						.value), r = a(this.units[0].unit.offset), i = a(this.units[
						0].prefix.value), l(s(e, r), l(t, i))
				}, S.prototype._denormalize = function(e, t) {
					var r, n, i, a, o;
					if (null == e || 0 === this.units.length) return e;
					if (this._isDerived()) {
						var s = e;
						o = S._getNumberConverter(H(e));
						for (var u = 0; u < this.units.length; u++) r = o(this.units[u]
							.unit.value), a = o(this.units[u].prefix.value), i = o(
							this.units[u].power), s = p(s, m(l(r, a), i));
						return s
					}
					return r = (o = S._getNumberConverter(H(e)))(this.units[0].unit
						.value), a = o(this.units[0].prefix.value), n = o(this
						.units[0].unit.offset), c(p(p(e, r), null == t ? a : t), n)
				};
				var z = Ni((function(e) {
					if (Je(F, e)) {
						var t = F[e];
						return {
							unit: t,
							prefix: t.prefixes[""]
						}
					}
					for (var r in F)
						if (Je(F, r) && ge(e, r)) {
							var n = F[r],
								i = e.length - r.length,
								a = e.substring(0, i),
								o = Je(n.prefixes, a) ? n.prefixes[a] : void 0;
							if (void 0 !== o) return {
								unit: n,
								prefix: o
							}
						} return null
				}), {
					hasher: function(e) {
						return e[0]
					},
					limit: 100
				});

				function R(e) {
					return e.equalBase(D.NONE) && null !== e.value && !o.predictable ? e
						.value : e
				}
				S.isValuelessUnit = function(e) {
						return null !== z(e)
					}, S.prototype.hasBase = function(e) {
						if ("string" == typeof e && (e = D[e]), !e) return !1;
						for (var t = 0; t < B.length; t++)
							if (Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] ||
								0)) > 1e-12) return !1;
						return !0
					}, S.prototype.equalBase = function(e) {
						for (var t = 0; t < B.length; t++)
							if (Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] ||
								0)) > 1e-12) return !1;
						return !0
					}, S.prototype.equals = function(e) {
						return this.equalBase(e) && y(this.value, e.value)
					}, S.prototype.multiply = function(e) {
						for (var t = this.clone(), r = 0; r < B.length; r++) t.dimensions[
							r] = (this.dimensions[r] || 0) + (e.dimensions[r] || 0);
						for (var n = 0; n < e.units.length; n++) {
							var i = No({}, e.units[n]);
							t.units.push(i)
						}
						if (null !== this.value || null !== e.value) {
							var a = null === this.value ? this._normalize(1) : this.value,
								o = null === e.value ? e._normalize(1) : e.value;
							t.value = l(a, o)
						} else t.value = null;
						return t.skipAutomaticSimplification = !1, R(t)
					}, S.prototype.divide = function(e) {
						for (var t = this.clone(), r = 0; r < B.length; r++) t.dimensions[
							r] = (this.dimensions[r] || 0) - (e.dimensions[r] || 0);
						for (var n = 0; n < e.units.length; n++) {
							var i = No(No({}, e.units[n]), {}, {
								power: -e.units[n].power
							});
							t.units.push(i)
						}
						if (null !== this.value || null !== e.value) {
							var a = null === this.value ? this._normalize(1) : this.value,
								o = null === e.value ? e._normalize(1) : e.value;
							t.value = p(a, o)
						} else t.value = null;
						return t.skipAutomaticSimplification = !1, R(t)
					}, S.prototype.pow = function(e) {
						for (var t = this.clone(), r = 0; r < B.length; r++) t.dimensions[
							r] = (this.dimensions[r] || 0) * e;
						for (var n = 0; n < t.units.length; n++) t.units[n].power *= e;
						return null !== t.value ? t.value = m(t.value, e) : t.value = null,
							t.skipAutomaticSimplification = !1, R(t)
					}, S.prototype.abs = function() {
						var e = this.clone();
						for (var t in e.value = null !== e.value ? h(e.value) : null, e
								.units) "VA" !== e.units[t].unit.name && "VAR" !== e.units[
							t].unit.name || (e.units[t].unit = F.W);
						return e
					}, S.prototype.to = function(e) {
						var t, r = null === this.value ? this._normalize(1) : this.value;
						if ("string" == typeof e) {
							if (t = S.parse(e), !this.equalBase(t)) throw new Error(
								"Units do not match ('".concat(t.toString(),
									"' != '").concat(this.toString(), "')"));
							if (null !== t.value) throw new Error(
								"Cannot convert to a unit with a value");
							return t.value = He(r), t.fixPrefix = !0, t
								.skipAutomaticSimplification = !0, t
						}
						if (f(e)) {
							if (!this.equalBase(e)) throw new Error("Units do not match ('"
								.concat(e.toString(), "' != '").concat(this
									.toString(), "')"));
							if (null !== e.value) throw new Error(
								"Cannot convert to a unit with a value");
							return (t = e.clone()).value = He(r), t.fixPrefix = !0, t
								.skipAutomaticSimplification = !0, t
						}
						throw new Error("String or Unit expected as parameter")
					}, S.prototype.toNumber = function(e) {
						return E(this.toNumeric(e))
					}, S.prototype.toNumeric = function(e) {
						var t;
						return (t = e ? this.to(e) : this.clone())._isDerived() || 0 === t
							.units.length ? t._denormalize(t.value) : t._denormalize(t
								.value, t.units[0].prefix.value)
					}, S.prototype.toString = function() {
						return this.format()
					}, S.prototype.toJSON = function() {
						return {
							mathjs: "Unit",
							value: this._denormalize(this.value),
							unit: this.formatUnits(),
							fixPrefix: this.fixPrefix
						}
					}, S.fromJSON = function(e) {
						var t = new S(e.value, e.unit);
						return t.fixPrefix = e.fixPrefix || !1, t
					}, S.prototype.valueOf = S.prototype.toString, S.prototype.simplify =
					function() {
						var e, t, r = this.clone(),
							n = [];
						for (var i in G)
							if (Je(G, i) && r.hasBase(D[i])) {
								e = i;
								break
							} if ("NONE" === e) r.units = [];
						else if (e && Je(G, e) && (t = G[e]), t) r.units = [{
							unit: t.unit,
							prefix: t.prefix,
							power: 1
						}];
						else {
							for (var a = !1, o = 0; o < B.length; o++) {
								var s = B[o];
								Math.abs(r.dimensions[o] || 0) > 1e-12 && (Je(G, s) ? n
									.push({
										unit: G[s].unit,
										prefix: G[s].prefix,
										power: r.dimensions[o] || 0
									}) : a = !0)
							}
							n.length < r.units.length && !a && (r.units = n)
						}
						return r
					}, S.prototype.toSI = function() {
						for (var e = this.clone(), t = [], r = 0; r < B.length; r++) {
							var n = B[r];
							if (Math.abs(e.dimensions[r] || 0) > 1e-12) {
								if (!Je($.si, n)) throw new Error(
									"Cannot express custom unit " + n +
									" in SI units");
								t.push({
									unit: $.si[n].unit,
									prefix: $.si[n].prefix,
									power: e.dimensions[r] || 0
								})
							}
						}
						return e.units = t, e.fixPrefix = !0, e
							.skipAutomaticSimplification = !0, e
					}, S.prototype.formatUnits = function() {
						for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units
							.length; i++) this.units[i].power > 0 ? (r++, e += " " + this
							.units[i].prefix.name + this.units[i].unit.name, Math.abs(
								this.units[i].power - 1) > 1e-15 && (e += "^" + this
								.units[i].power)) : this.units[i].power < 0 && n++;
						if (n > 0)
							for (var a = 0; a < this.units.length; a++) this.units[a]
								.power < 0 && (r > 0 ? (t += " " + this.units[a].prefix
									.name + this.units[a].unit.name, Math.abs(this
										.units[a].power + 1) > 1e-15 && (t += "^" + -
										this.units[a].power)) : (t += " " + this.units[
										a].prefix.name + this.units[a].unit.name, t +=
									"^" + this.units[a].power));
						e = e.substr(1), t = t.substr(1), r > 1 && n > 0 && (e = "(" + e +
							")"), n > 1 && r > 0 && (t = "(" + t + ")");
						var o = e;
						return r > 0 && n > 0 && (o += " / "), o += t
					}, S.prototype.format = function(e) {
						var t = this.skipAutomaticSimplification || null === this.value ?
							this.clone() : this.simplify(),
							r = !1;
						for (var n in void 0 !== t.value && null !== t.value && u(t
								.value) && (r = Math.abs(t.value.re) < 1e-14), t.units) Je(t
							.units, n) && t.units[n].unit && ("VA" === t.units[n].unit
							.name && r ? t.units[n].unit = F.VAR : "VAR" !== t.units[n]
							.unit.name || r || (t.units[n].unit = F.VA));
						1 !== t.units.length || t.fixPrefix || Math.abs(t.units[0].power -
							Math.round(t.units[0].power)) < 1e-14 && (t.units[0]
							.prefix = t._bestPrefix());
						var i = t._denormalize(t.value),
							a = null !== t.value ? x(i, e || {}) : "",
							o = t.formatUnits();
						return t.value && u(t.value) && (a = "(" + a + ")"), o.length > 0 &&
							a.length > 0 && (a += " "), a += o
					}, S.prototype._bestPrefix = function() {
						if (1 !== this.units.length) throw new Error(
							"Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"
							);
						if (Math.abs(this.units[0].power - Math.round(this.units[0]
							.power)) >= 1e-14) throw new Error(
							"Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"
							);
						var e = null !== this.value ? h(this.value) : 0,
							t = h(this.units[0].unit.value),
							r = this.units[0].prefix;
						if (0 === e) return r;
						var n = this.units[0].power,
							i = Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2;
						if (i > -2.200001 && i < 1.800001) return r;
						i = Math.abs(i);
						var a = this.units[0].unit.prefixes;
						for (var o in a)
							if (Je(a, o)) {
								var s = a[o];
								if (s.scientific) {
									var u = Math.abs(Math.log(e / Math.pow(s.value * t,
										n)) / Math.LN10 - 1.2);
									(u < i || u === i && s.name.length < r.name.length) && (
										r = s, i = u)
								}
							} return r
					}, S.prototype.splitUnit = function(e) {
						for (var t = this.clone(), r = [], n = 0; n < e.length && (t = t.to(
								e[n]), n !== e.length - 1); n++) {
							var i = t.toNumeric(),
								a = v(i),
								o = new S(y(a, i) ? a : d(t.toNumeric()), e[n].toString());
							r.push(o), t = c(t, o)
						}
						for (var u = 0, f = 0; f < r.length; f++) u = s(u, r[f].value);
						return y(u, this.value) && (t.value = 0), r.push(t), r
					};
				var q = {
					NONE: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						}
					},
					SHORT: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						da: {
							name: "da",
							value: 10,
							scientific: !1
						},
						h: {
							name: "h",
							value: 100,
							scientific: !1
						},
						k: {
							name: "k",
							value: 1e3,
							scientific: !0
						},
						M: {
							name: "M",
							value: 1e6,
							scientific: !0
						},
						G: {
							name: "G",
							value: 1e9,
							scientific: !0
						},
						T: {
							name: "T",
							value: 1e12,
							scientific: !0
						},
						P: {
							name: "P",
							value: 1e15,
							scientific: !0
						},
						E: {
							name: "E",
							value: 1e18,
							scientific: !0
						},
						Z: {
							name: "Z",
							value: 1e21,
							scientific: !0
						},
						Y: {
							name: "Y",
							value: 1e24,
							scientific: !0
						},
						d: {
							name: "d",
							value: .1,
							scientific: !1
						},
						c: {
							name: "c",
							value: .01,
							scientific: !1
						},
						m: {
							name: "m",
							value: .001,
							scientific: !0
						},
						u: {
							name: "u",
							value: 1e-6,
							scientific: !0
						},
						n: {
							name: "n",
							value: 1e-9,
							scientific: !0
						},
						p: {
							name: "p",
							value: 1e-12,
							scientific: !0
						},
						f: {
							name: "f",
							value: 1e-15,
							scientific: !0
						},
						a: {
							name: "a",
							value: 1e-18,
							scientific: !0
						},
						z: {
							name: "z",
							value: 1e-21,
							scientific: !0
						},
						y: {
							name: "y",
							value: 1e-24,
							scientific: !0
						}
					},
					LONG: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						deca: {
							name: "deca",
							value: 10,
							scientific: !1
						},
						hecto: {
							name: "hecto",
							value: 100,
							scientific: !1
						},
						kilo: {
							name: "kilo",
							value: 1e3,
							scientific: !0
						},
						mega: {
							name: "mega",
							value: 1e6,
							scientific: !0
						},
						giga: {
							name: "giga",
							value: 1e9,
							scientific: !0
						},
						tera: {
							name: "tera",
							value: 1e12,
							scientific: !0
						},
						peta: {
							name: "peta",
							value: 1e15,
							scientific: !0
						},
						exa: {
							name: "exa",
							value: 1e18,
							scientific: !0
						},
						zetta: {
							name: "zetta",
							value: 1e21,
							scientific: !0
						},
						yotta: {
							name: "yotta",
							value: 1e24,
							scientific: !0
						},
						deci: {
							name: "deci",
							value: .1,
							scientific: !1
						},
						centi: {
							name: "centi",
							value: .01,
							scientific: !1
						},
						milli: {
							name: "milli",
							value: .001,
							scientific: !0
						},
						micro: {
							name: "micro",
							value: 1e-6,
							scientific: !0
						},
						nano: {
							name: "nano",
							value: 1e-9,
							scientific: !0
						},
						pico: {
							name: "pico",
							value: 1e-12,
							scientific: !0
						},
						femto: {
							name: "femto",
							value: 1e-15,
							scientific: !0
						},
						atto: {
							name: "atto",
							value: 1e-18,
							scientific: !0
						},
						zepto: {
							name: "zepto",
							value: 1e-21,
							scientific: !0
						},
						yocto: {
							name: "yocto",
							value: 1e-24,
							scientific: !0
						}
					},
					SQUARED: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						da: {
							name: "da",
							value: 100,
							scientific: !1
						},
						h: {
							name: "h",
							value: 1e4,
							scientific: !1
						},
						k: {
							name: "k",
							value: 1e6,
							scientific: !0
						},
						M: {
							name: "M",
							value: 1e12,
							scientific: !0
						},
						G: {
							name: "G",
							value: 1e18,
							scientific: !0
						},
						T: {
							name: "T",
							value: 1e24,
							scientific: !0
						},
						P: {
							name: "P",
							value: 1e30,
							scientific: !0
						},
						E: {
							name: "E",
							value: 1e36,
							scientific: !0
						},
						Z: {
							name: "Z",
							value: 1e42,
							scientific: !0
						},
						Y: {
							name: "Y",
							value: 1e48,
							scientific: !0
						},
						d: {
							name: "d",
							value: .01,
							scientific: !1
						},
						c: {
							name: "c",
							value: 1e-4,
							scientific: !1
						},
						m: {
							name: "m",
							value: 1e-6,
							scientific: !0
						},
						u: {
							name: "u",
							value: 1e-12,
							scientific: !0
						},
						n: {
							name: "n",
							value: 1e-18,
							scientific: !0
						},
						p: {
							name: "p",
							value: 1e-24,
							scientific: !0
						},
						f: {
							name: "f",
							value: 1e-30,
							scientific: !0
						},
						a: {
							name: "a",
							value: 1e-36,
							scientific: !0
						},
						z: {
							name: "z",
							value: 1e-42,
							scientific: !0
						},
						y: {
							name: "y",
							value: 1e-48,
							scientific: !0
						}
					},
					CUBIC: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						da: {
							name: "da",
							value: 1e3,
							scientific: !1
						},
						h: {
							name: "h",
							value: 1e6,
							scientific: !1
						},
						k: {
							name: "k",
							value: 1e9,
							scientific: !0
						},
						M: {
							name: "M",
							value: 1e18,
							scientific: !0
						},
						G: {
							name: "G",
							value: 1e27,
							scientific: !0
						},
						T: {
							name: "T",
							value: 1e36,
							scientific: !0
						},
						P: {
							name: "P",
							value: 1e45,
							scientific: !0
						},
						E: {
							name: "E",
							value: 1e54,
							scientific: !0
						},
						Z: {
							name: "Z",
							value: 1e63,
							scientific: !0
						},
						Y: {
							name: "Y",
							value: 1e72,
							scientific: !0
						},
						d: {
							name: "d",
							value: .001,
							scientific: !1
						},
						c: {
							name: "c",
							value: 1e-6,
							scientific: !1
						},
						m: {
							name: "m",
							value: 1e-9,
							scientific: !0
						},
						u: {
							name: "u",
							value: 1e-18,
							scientific: !0
						},
						n: {
							name: "n",
							value: 1e-27,
							scientific: !0
						},
						p: {
							name: "p",
							value: 1e-36,
							scientific: !0
						},
						f: {
							name: "f",
							value: 1e-45,
							scientific: !0
						},
						a: {
							name: "a",
							value: 1e-54,
							scientific: !0
						},
						z: {
							name: "z",
							value: 1e-63,
							scientific: !0
						},
						y: {
							name: "y",
							value: 1e-72,
							scientific: !0
						}
					},
					BINARY_SHORT_SI: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						k: {
							name: "k",
							value: 1e3,
							scientific: !0
						},
						M: {
							name: "M",
							value: 1e6,
							scientific: !0
						},
						G: {
							name: "G",
							value: 1e9,
							scientific: !0
						},
						T: {
							name: "T",
							value: 1e12,
							scientific: !0
						},
						P: {
							name: "P",
							value: 1e15,
							scientific: !0
						},
						E: {
							name: "E",
							value: 1e18,
							scientific: !0
						},
						Z: {
							name: "Z",
							value: 1e21,
							scientific: !0
						},
						Y: {
							name: "Y",
							value: 1e24,
							scientific: !0
						}
					},
					BINARY_SHORT_IEC: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						Ki: {
							name: "Ki",
							value: 1024,
							scientific: !0
						},
						Mi: {
							name: "Mi",
							value: Math.pow(1024, 2),
							scientific: !0
						},
						Gi: {
							name: "Gi",
							value: Math.pow(1024, 3),
							scientific: !0
						},
						Ti: {
							name: "Ti",
							value: Math.pow(1024, 4),
							scientific: !0
						},
						Pi: {
							name: "Pi",
							value: Math.pow(1024, 5),
							scientific: !0
						},
						Ei: {
							name: "Ei",
							value: Math.pow(1024, 6),
							scientific: !0
						},
						Zi: {
							name: "Zi",
							value: Math.pow(1024, 7),
							scientific: !0
						},
						Yi: {
							name: "Yi",
							value: Math.pow(1024, 8),
							scientific: !0
						}
					},
					BINARY_LONG_SI: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						kilo: {
							name: "kilo",
							value: 1e3,
							scientific: !0
						},
						mega: {
							name: "mega",
							value: 1e6,
							scientific: !0
						},
						giga: {
							name: "giga",
							value: 1e9,
							scientific: !0
						},
						tera: {
							name: "tera",
							value: 1e12,
							scientific: !0
						},
						peta: {
							name: "peta",
							value: 1e15,
							scientific: !0
						},
						exa: {
							name: "exa",
							value: 1e18,
							scientific: !0
						},
						zetta: {
							name: "zetta",
							value: 1e21,
							scientific: !0
						},
						yotta: {
							name: "yotta",
							value: 1e24,
							scientific: !0
						}
					},
					BINARY_LONG_IEC: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						kibi: {
							name: "kibi",
							value: 1024,
							scientific: !0
						},
						mebi: {
							name: "mebi",
							value: Math.pow(1024, 2),
							scientific: !0
						},
						gibi: {
							name: "gibi",
							value: Math.pow(1024, 3),
							scientific: !0
						},
						tebi: {
							name: "tebi",
							value: Math.pow(1024, 4),
							scientific: !0
						},
						pebi: {
							name: "pebi",
							value: Math.pow(1024, 5),
							scientific: !0
						},
						exi: {
							name: "exi",
							value: Math.pow(1024, 6),
							scientific: !0
						},
						zebi: {
							name: "zebi",
							value: Math.pow(1024, 7),
							scientific: !0
						},
						yobi: {
							name: "yobi",
							value: Math.pow(1024, 8),
							scientific: !0
						}
					},
					BTU: {
						"": {
							name: "",
							value: 1,
							scientific: !0
						},
						MM: {
							name: "MM",
							value: 1e6,
							scientific: !0
						}
					}
				};
				q.SHORTLONG = ho()({}, q.SHORT, q.LONG), q.BINARY_SHORT = ho()({}, q
					.BINARY_SHORT_SI, q.BINARY_SHORT_IEC), q.BINARY_LONG = ho()({}, q
					.BINARY_LONG_SI, q.BINARY_LONG_IEC);
				var B = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE",
						"LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"
					],
					D = {
						NONE: {
							dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
						},
						MASS: {
							dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
						},
						LENGTH: {
							dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
						},
						TIME: {
							dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
						},
						CURRENT: {
							dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
						},
						TEMPERATURE: {
							dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
						},
						LUMINOUS_INTENSITY: {
							dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
						},
						AMOUNT_OF_SUBSTANCE: {
							dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
						},
						FORCE: {
							dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
						},
						SURFACE: {
							dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
						},
						VOLUME: {
							dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
						},
						ENERGY: {
							dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
						},
						POWER: {
							dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
						},
						PRESSURE: {
							dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
						},
						ELECTRIC_CHARGE: {
							dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
						},
						ELECTRIC_CAPACITANCE: {
							dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
						},
						ELECTRIC_POTENTIAL: {
							dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
						},
						ELECTRIC_RESISTANCE: {
							dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
						},
						ELECTRIC_INDUCTANCE: {
							dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
						},
						ELECTRIC_CONDUCTANCE: {
							dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
						},
						MAGNETIC_FLUX: {
							dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
						},
						MAGNETIC_FLUX_DENSITY: {
							dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
						},
						FREQUENCY: {
							dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
						},
						ANGLE: {
							dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
						},
						BIT: {
							dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
						}
					};
				for (var j in D) Je(D, j) && (D[j].key = j);
				var P = {
						name: "",
						base: {},
						value: 1,
						offset: 0,
						dimensions: B.map((function(e) {
							return 0
						}))
					},
					F = {
						meter: {
							name: "meter",
							base: D.LENGTH,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						inch: {
							name: "inch",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .0254,
							offset: 0
						},
						foot: {
							name: "foot",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .3048,
							offset: 0
						},
						yard: {
							name: "yard",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .9144,
							offset: 0
						},
						mile: {
							name: "mile",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 1609.344,
							offset: 0
						},
						link: {
							name: "link",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .201168,
							offset: 0
						},
						rod: {
							name: "rod",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 5.0292,
							offset: 0
						},
						chain: {
							name: "chain",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 20.1168,
							offset: 0
						},
						angstrom: {
							name: "angstrom",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 1e-10,
							offset: 0
						},
						m: {
							name: "m",
							base: D.LENGTH,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						in: {
							name: "in",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .0254,
							offset: 0
						},
						ft: {
							name: "ft",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .3048,
							offset: 0
						},
						yd: {
							name: "yd",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .9144,
							offset: 0
						},
						mi: {
							name: "mi",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 1609.344,
							offset: 0
						},
						li: {
							name: "li",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: .201168,
							offset: 0
						},
						rd: {
							name: "rd",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 5.02921,
							offset: 0
						},
						ch: {
							name: "ch",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 20.1168,
							offset: 0
						},
						mil: {
							name: "mil",
							base: D.LENGTH,
							prefixes: q.NONE,
							value: 254e-7,
							offset: 0
						},
						m2: {
							name: "m2",
							base: D.SURFACE,
							prefixes: q.SQUARED,
							value: 1,
							offset: 0
						},
						sqin: {
							name: "sqin",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 64516e-8,
							offset: 0
						},
						sqft: {
							name: "sqft",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: .09290304,
							offset: 0
						},
						sqyd: {
							name: "sqyd",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: .83612736,
							offset: 0
						},
						sqmi: {
							name: "sqmi",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 2589988.110336,
							offset: 0
						},
						sqrd: {
							name: "sqrd",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 25.29295,
							offset: 0
						},
						sqch: {
							name: "sqch",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 404.6873,
							offset: 0
						},
						sqmil: {
							name: "sqmil",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 6.4516e-10,
							offset: 0
						},
						acre: {
							name: "acre",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 4046.86,
							offset: 0
						},
						hectare: {
							name: "hectare",
							base: D.SURFACE,
							prefixes: q.NONE,
							value: 1e4,
							offset: 0
						},
						m3: {
							name: "m3",
							base: D.VOLUME,
							prefixes: q.CUBIC,
							value: 1,
							offset: 0
						},
						L: {
							name: "L",
							base: D.VOLUME,
							prefixes: q.SHORT,
							value: .001,
							offset: 0
						},
						l: {
							name: "l",
							base: D.VOLUME,
							prefixes: q.SHORT,
							value: .001,
							offset: 0
						},
						litre: {
							name: "litre",
							base: D.VOLUME,
							prefixes: q.LONG,
							value: .001,
							offset: 0
						},
						cuin: {
							name: "cuin",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 16387064e-12,
							offset: 0
						},
						cuft: {
							name: "cuft",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .028316846592,
							offset: 0
						},
						cuyd: {
							name: "cuyd",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .764554857984,
							offset: 0
						},
						teaspoon: {
							name: "teaspoon",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 5e-6,
							offset: 0
						},
						tablespoon: {
							name: "tablespoon",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 15e-6,
							offset: 0
						},
						drop: {
							name: "drop",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 5e-8,
							offset: 0
						},
						gtt: {
							name: "gtt",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 5e-8,
							offset: 0
						},
						minim: {
							name: "minim",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 6.161152e-8,
							offset: 0
						},
						fluiddram: {
							name: "fluiddram",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 36966911e-13,
							offset: 0
						},
						fluidounce: {
							name: "fluidounce",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 2957353e-11,
							offset: 0
						},
						gill: {
							name: "gill",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0001182941,
							offset: 0
						},
						cc: {
							name: "cc",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 1e-6,
							offset: 0
						},
						cup: {
							name: "cup",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0002365882,
							offset: 0
						},
						pint: {
							name: "pint",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0004731765,
							offset: 0
						},
						quart: {
							name: "quart",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0009463529,
							offset: 0
						},
						gallon: {
							name: "gallon",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .003785412,
							offset: 0
						},
						beerbarrel: {
							name: "beerbarrel",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .1173478,
							offset: 0
						},
						oilbarrel: {
							name: "oilbarrel",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .1589873,
							offset: 0
						},
						hogshead: {
							name: "hogshead",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .238481,
							offset: 0
						},
						fldr: {
							name: "fldr",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 36966911e-13,
							offset: 0
						},
						floz: {
							name: "floz",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: 2957353e-11,
							offset: 0
						},
						gi: {
							name: "gi",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0001182941,
							offset: 0
						},
						cp: {
							name: "cp",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0002365882,
							offset: 0
						},
						pt: {
							name: "pt",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0004731765,
							offset: 0
						},
						qt: {
							name: "qt",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .0009463529,
							offset: 0
						},
						gal: {
							name: "gal",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .003785412,
							offset: 0
						},
						bbl: {
							name: "bbl",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .1173478,
							offset: 0
						},
						obl: {
							name: "obl",
							base: D.VOLUME,
							prefixes: q.NONE,
							value: .1589873,
							offset: 0
						},
						g: {
							name: "g",
							base: D.MASS,
							prefixes: q.SHORT,
							value: .001,
							offset: 0
						},
						gram: {
							name: "gram",
							base: D.MASS,
							prefixes: q.LONG,
							value: .001,
							offset: 0
						},
						ton: {
							name: "ton",
							base: D.MASS,
							prefixes: q.SHORT,
							value: 907.18474,
							offset: 0
						},
						t: {
							name: "t",
							base: D.MASS,
							prefixes: q.SHORT,
							value: 1e3,
							offset: 0
						},
						tonne: {
							name: "tonne",
							base: D.MASS,
							prefixes: q.LONG,
							value: 1e3,
							offset: 0
						},
						grain: {
							name: "grain",
							base: D.MASS,
							prefixes: q.NONE,
							value: 6479891e-11,
							offset: 0
						},
						dram: {
							name: "dram",
							base: D.MASS,
							prefixes: q.NONE,
							value: .0017718451953125,
							offset: 0
						},
						ounce: {
							name: "ounce",
							base: D.MASS,
							prefixes: q.NONE,
							value: .028349523125,
							offset: 0
						},
						poundmass: {
							name: "poundmass",
							base: D.MASS,
							prefixes: q.NONE,
							value: .45359237,
							offset: 0
						},
						hundredweight: {
							name: "hundredweight",
							base: D.MASS,
							prefixes: q.NONE,
							value: 45.359237,
							offset: 0
						},
						stick: {
							name: "stick",
							base: D.MASS,
							prefixes: q.NONE,
							value: .115,
							offset: 0
						},
						stone: {
							name: "stone",
							base: D.MASS,
							prefixes: q.NONE,
							value: 6.35029318,
							offset: 0
						},
						gr: {
							name: "gr",
							base: D.MASS,
							prefixes: q.NONE,
							value: 6479891e-11,
							offset: 0
						},
						dr: {
							name: "dr",
							base: D.MASS,
							prefixes: q.NONE,
							value: .0017718451953125,
							offset: 0
						},
						oz: {
							name: "oz",
							base: D.MASS,
							prefixes: q.NONE,
							value: .028349523125,
							offset: 0
						},
						lbm: {
							name: "lbm",
							base: D.MASS,
							prefixes: q.NONE,
							value: .45359237,
							offset: 0
						},
						cwt: {
							name: "cwt",
							base: D.MASS,
							prefixes: q.NONE,
							value: 45.359237,
							offset: 0
						},
						s: {
							name: "s",
							base: D.TIME,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						min: {
							name: "min",
							base: D.TIME,
							prefixes: q.NONE,
							value: 60,
							offset: 0
						},
						h: {
							name: "h",
							base: D.TIME,
							prefixes: q.NONE,
							value: 3600,
							offset: 0
						},
						second: {
							name: "second",
							base: D.TIME,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						sec: {
							name: "sec",
							base: D.TIME,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						minute: {
							name: "minute",
							base: D.TIME,
							prefixes: q.NONE,
							value: 60,
							offset: 0
						},
						hour: {
							name: "hour",
							base: D.TIME,
							prefixes: q.NONE,
							value: 3600,
							offset: 0
						},
						day: {
							name: "day",
							base: D.TIME,
							prefixes: q.NONE,
							value: 86400,
							offset: 0
						},
						week: {
							name: "week",
							base: D.TIME,
							prefixes: q.NONE,
							value: 604800,
							offset: 0
						},
						month: {
							name: "month",
							base: D.TIME,
							prefixes: q.NONE,
							value: 2629800,
							offset: 0
						},
						year: {
							name: "year",
							base: D.TIME,
							prefixes: q.NONE,
							value: 31557600,
							offset: 0
						},
						decade: {
							name: "decade",
							base: D.TIME,
							prefixes: q.NONE,
							value: 315576e3,
							offset: 0
						},
						century: {
							name: "century",
							base: D.TIME,
							prefixes: q.NONE,
							value: 315576e4,
							offset: 0
						},
						millennium: {
							name: "millennium",
							base: D.TIME,
							prefixes: q.NONE,
							value: 315576e5,
							offset: 0
						},
						hertz: {
							name: "Hertz",
							base: D.FREQUENCY,
							prefixes: q.LONG,
							value: 1,
							offset: 0,
							reciprocal: !0
						},
						Hz: {
							name: "Hz",
							base: D.FREQUENCY,
							prefixes: q.SHORT,
							value: 1,
							offset: 0,
							reciprocal: !0
						},
						rad: {
							name: "rad",
							base: D.ANGLE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						radian: {
							name: "radian",
							base: D.ANGLE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						deg: {
							name: "deg",
							base: D.ANGLE,
							prefixes: q.SHORT,
							value: null,
							offset: 0
						},
						degree: {
							name: "degree",
							base: D.ANGLE,
							prefixes: q.LONG,
							value: null,
							offset: 0
						},
						grad: {
							name: "grad",
							base: D.ANGLE,
							prefixes: q.SHORT,
							value: null,
							offset: 0
						},
						gradian: {
							name: "gradian",
							base: D.ANGLE,
							prefixes: q.LONG,
							value: null,
							offset: 0
						},
						cycle: {
							name: "cycle",
							base: D.ANGLE,
							prefixes: q.NONE,
							value: null,
							offset: 0
						},
						arcsec: {
							name: "arcsec",
							base: D.ANGLE,
							prefixes: q.NONE,
							value: null,
							offset: 0
						},
						arcmin: {
							name: "arcmin",
							base: D.ANGLE,
							prefixes: q.NONE,
							value: null,
							offset: 0
						},
						A: {
							name: "A",
							base: D.CURRENT,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						ampere: {
							name: "ampere",
							base: D.CURRENT,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						K: {
							name: "K",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1,
							offset: 0
						},
						degC: {
							name: "degC",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1,
							offset: 273.15
						},
						degF: {
							name: "degF",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1 / 1.8,
							offset: 459.67
						},
						degR: {
							name: "degR",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1 / 1.8,
							offset: 0
						},
						kelvin: {
							name: "kelvin",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1,
							offset: 0
						},
						celsius: {
							name: "celsius",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1,
							offset: 273.15
						},
						fahrenheit: {
							name: "fahrenheit",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1 / 1.8,
							offset: 459.67
						},
						rankine: {
							name: "rankine",
							base: D.TEMPERATURE,
							prefixes: q.NONE,
							value: 1 / 1.8,
							offset: 0
						},
						mol: {
							name: "mol",
							base: D.AMOUNT_OF_SUBSTANCE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						mole: {
							name: "mole",
							base: D.AMOUNT_OF_SUBSTANCE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						cd: {
							name: "cd",
							base: D.LUMINOUS_INTENSITY,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						candela: {
							name: "candela",
							base: D.LUMINOUS_INTENSITY,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						N: {
							name: "N",
							base: D.FORCE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						newton: {
							name: "newton",
							base: D.FORCE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						dyn: {
							name: "dyn",
							base: D.FORCE,
							prefixes: q.SHORT,
							value: 1e-5,
							offset: 0
						},
						dyne: {
							name: "dyne",
							base: D.FORCE,
							prefixes: q.LONG,
							value: 1e-5,
							offset: 0
						},
						lbf: {
							name: "lbf",
							base: D.FORCE,
							prefixes: q.NONE,
							value: 4.4482216152605,
							offset: 0
						},
						poundforce: {
							name: "poundforce",
							base: D.FORCE,
							prefixes: q.NONE,
							value: 4.4482216152605,
							offset: 0
						},
						kip: {
							name: "kip",
							base: D.FORCE,
							prefixes: q.LONG,
							value: 4448.2216,
							offset: 0
						},
						kilogramforce: {
							name: "kilogramforce",
							base: D.FORCE,
							prefixes: q.NONE,
							value: 9.80665,
							offset: 0
						},
						J: {
							name: "J",
							base: D.ENERGY,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						joule: {
							name: "joule",
							base: D.ENERGY,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						erg: {
							name: "erg",
							base: D.ENERGY,
							prefixes: q.NONE,
							value: 1e-7,
							offset: 0
						},
						Wh: {
							name: "Wh",
							base: D.ENERGY,
							prefixes: q.SHORT,
							value: 3600,
							offset: 0
						},
						BTU: {
							name: "BTU",
							base: D.ENERGY,
							prefixes: q.BTU,
							value: 1055.05585262,
							offset: 0
						},
						eV: {
							name: "eV",
							base: D.ENERGY,
							prefixes: q.SHORT,
							value: 1602176565e-28,
							offset: 0
						},
						electronvolt: {
							name: "electronvolt",
							base: D.ENERGY,
							prefixes: q.LONG,
							value: 1602176565e-28,
							offset: 0
						},
						W: {
							name: "W",
							base: D.POWER,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						watt: {
							name: "watt",
							base: D.POWER,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						hp: {
							name: "hp",
							base: D.POWER,
							prefixes: q.NONE,
							value: 745.6998715386,
							offset: 0
						},
						VAR: {
							name: "VAR",
							base: D.POWER,
							prefixes: q.SHORT,
							value: w.I,
							offset: 0
						},
						VA: {
							name: "VA",
							base: D.POWER,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						Pa: {
							name: "Pa",
							base: D.PRESSURE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						psi: {
							name: "psi",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 6894.75729276459,
							offset: 0
						},
						atm: {
							name: "atm",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 101325,
							offset: 0
						},
						bar: {
							name: "bar",
							base: D.PRESSURE,
							prefixes: q.SHORTLONG,
							value: 1e5,
							offset: 0
						},
						torr: {
							name: "torr",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 133.322,
							offset: 0
						},
						mmHg: {
							name: "mmHg",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 133.322,
							offset: 0
						},
						mmH2O: {
							name: "mmH2O",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 9.80665,
							offset: 0
						},
						cmH2O: {
							name: "cmH2O",
							base: D.PRESSURE,
							prefixes: q.NONE,
							value: 98.0665,
							offset: 0
						},
						coulomb: {
							name: "coulomb",
							base: D.ELECTRIC_CHARGE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						C: {
							name: "C",
							base: D.ELECTRIC_CHARGE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						farad: {
							name: "farad",
							base: D.ELECTRIC_CAPACITANCE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						F: {
							name: "F",
							base: D.ELECTRIC_CAPACITANCE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						volt: {
							name: "volt",
							base: D.ELECTRIC_POTENTIAL,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						V: {
							name: "V",
							base: D.ELECTRIC_POTENTIAL,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						ohm: {
							name: "ohm",
							base: D.ELECTRIC_RESISTANCE,
							prefixes: q.SHORTLONG,
							value: 1,
							offset: 0
						},
						henry: {
							name: "henry",
							base: D.ELECTRIC_INDUCTANCE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						H: {
							name: "H",
							base: D.ELECTRIC_INDUCTANCE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						siemens: {
							name: "siemens",
							base: D.ELECTRIC_CONDUCTANCE,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						S: {
							name: "S",
							base: D.ELECTRIC_CONDUCTANCE,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						weber: {
							name: "weber",
							base: D.MAGNETIC_FLUX,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						Wb: {
							name: "Wb",
							base: D.MAGNETIC_FLUX,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						tesla: {
							name: "tesla",
							base: D.MAGNETIC_FLUX_DENSITY,
							prefixes: q.LONG,
							value: 1,
							offset: 0
						},
						T: {
							name: "T",
							base: D.MAGNETIC_FLUX_DENSITY,
							prefixes: q.SHORT,
							value: 1,
							offset: 0
						},
						b: {
							name: "b",
							base: D.BIT,
							prefixes: q.BINARY_SHORT,
							value: 1,
							offset: 0
						},
						bits: {
							name: "bits",
							base: D.BIT,
							prefixes: q.BINARY_LONG,
							value: 1,
							offset: 0
						},
						B: {
							name: "B",
							base: D.BIT,
							prefixes: q.BINARY_SHORT,
							value: 8,
							offset: 0
						},
						bytes: {
							name: "bytes",
							base: D.BIT,
							prefixes: q.BINARY_LONG,
							value: 8,
							offset: 0
						}
					},
					U = {
						meters: "meter",
						inches: "inch",
						feet: "foot",
						yards: "yard",
						miles: "mile",
						links: "link",
						rods: "rod",
						chains: "chain",
						angstroms: "angstrom",
						lt: "l",
						litres: "litre",
						liter: "litre",
						liters: "litre",
						teaspoons: "teaspoon",
						tablespoons: "tablespoon",
						minims: "minim",
						fluiddrams: "fluiddram",
						fluidounces: "fluidounce",
						gills: "gill",
						cups: "cup",
						pints: "pint",
						quarts: "quart",
						gallons: "gallon",
						beerbarrels: "beerbarrel",
						oilbarrels: "oilbarrel",
						hogsheads: "hogshead",
						gtts: "gtt",
						grams: "gram",
						tons: "ton",
						tonnes: "tonne",
						grains: "grain",
						drams: "dram",
						ounces: "ounce",
						poundmasses: "poundmass",
						hundredweights: "hundredweight",
						sticks: "stick",
						lb: "lbm",
						lbs: "lbm",
						kips: "kip",
						kgf: "kilogramforce",
						acres: "acre",
						hectares: "hectare",
						sqfeet: "sqft",
						sqyard: "sqyd",
						sqmile: "sqmi",
						sqmiles: "sqmi",
						mmhg: "mmHg",
						mmh2o: "mmH2O",
						cmh2o: "cmH2O",
						seconds: "second",
						secs: "second",
						minutes: "minute",
						mins: "minute",
						hours: "hour",
						hr: "hour",
						hrs: "hour",
						days: "day",
						weeks: "week",
						months: "month",
						years: "year",
						decades: "decade",
						centuries: "century",
						millennia: "millennium",
						hertz: "hertz",
						radians: "radian",
						degrees: "degree",
						gradians: "gradian",
						cycles: "cycle",
						arcsecond: "arcsec",
						arcseconds: "arcsec",
						arcminute: "arcmin",
						arcminutes: "arcmin",
						BTUs: "BTU",
						watts: "watt",
						joules: "joule",
						amperes: "ampere",
						coulombs: "coulomb",
						volts: "volt",
						ohms: "ohm",
						farads: "farad",
						webers: "weber",
						teslas: "tesla",
						electronvolts: "electronvolt",
						moles: "mole",
						bit: "bits",
						byte: "bytes"
					};

				function L(e) {
					if ("BigNumber" === e.number) {
						var t = go(N);
						F.rad.value = new N(1), F.deg.value = t.div(180), F.grad.value = t
							.div(200), F.cycle.value = t.times(2), F.arcsec.value = t.div(
								648e3), F.arcmin.value = t.div(10800)
					} else F.rad.value = 1, F.deg.value = Math.PI / 180, F.grad.value = Math
						.PI / 200, F.cycle.value = 2 * Math.PI, F.arcsec.value = Math.PI /
						648e3, F.arcmin.value = Math.PI / 10800;
					F.radian.value = F.rad.value, F.degree.value = F.deg.value, F.gradian
						.value = F.grad.value
				}
				L(o), i && i("config", (function(e, t) {
					e.number !== t.number && L(e)
				}));
				var $ = {
					si: {
						NONE: {
							unit: P,
							prefix: q.NONE[""]
						},
						LENGTH: {
							unit: F.m,
							prefix: q.SHORT[""]
						},
						MASS: {
							unit: F.g,
							prefix: q.SHORT.k
						},
						TIME: {
							unit: F.s,
							prefix: q.SHORT[""]
						},
						CURRENT: {
							unit: F.A,
							prefix: q.SHORT[""]
						},
						TEMPERATURE: {
							unit: F.K,
							prefix: q.SHORT[""]
						},
						LUMINOUS_INTENSITY: {
							unit: F.cd,
							prefix: q.SHORT[""]
						},
						AMOUNT_OF_SUBSTANCE: {
							unit: F.mol,
							prefix: q.SHORT[""]
						},
						ANGLE: {
							unit: F.rad,
							prefix: q.SHORT[""]
						},
						BIT: {
							unit: F.bits,
							prefix: q.SHORT[""]
						},
						FORCE: {
							unit: F.N,
							prefix: q.SHORT[""]
						},
						ENERGY: {
							unit: F.J,
							prefix: q.SHORT[""]
						},
						POWER: {
							unit: F.W,
							prefix: q.SHORT[""]
						},
						PRESSURE: {
							unit: F.Pa,
							prefix: q.SHORT[""]
						},
						ELECTRIC_CHARGE: {
							unit: F.C,
							prefix: q.SHORT[""]
						},
						ELECTRIC_CAPACITANCE: {
							unit: F.F,
							prefix: q.SHORT[""]
						},
						ELECTRIC_POTENTIAL: {
							unit: F.V,
							prefix: q.SHORT[""]
						},
						ELECTRIC_RESISTANCE: {
							unit: F.ohm,
							prefix: q.SHORT[""]
						},
						ELECTRIC_INDUCTANCE: {
							unit: F.H,
							prefix: q.SHORT[""]
						},
						ELECTRIC_CONDUCTANCE: {
							unit: F.S,
							prefix: q.SHORT[""]
						},
						MAGNETIC_FLUX: {
							unit: F.Wb,
							prefix: q.SHORT[""]
						},
						MAGNETIC_FLUX_DENSITY: {
							unit: F.T,
							prefix: q.SHORT[""]
						},
						FREQUENCY: {
							unit: F.Hz,
							prefix: q.SHORT[""]
						}
					}
				};
				$.cgs = JSON.parse(JSON.stringify($.si)), $.cgs.LENGTH = {
					unit: F.m,
					prefix: q.SHORT.c
				}, $.cgs.MASS = {
					unit: F.g,
					prefix: q.SHORT[""]
				}, $.cgs.FORCE = {
					unit: F.dyn,
					prefix: q.SHORT[""]
				}, $.cgs.ENERGY = {
					unit: F.erg,
					prefix: q.NONE[""]
				}, $.us = JSON.parse(JSON.stringify($.si)), $.us.LENGTH = {
					unit: F.ft,
					prefix: q.NONE[""]
				}, $.us.MASS = {
					unit: F.lbm,
					prefix: q.NONE[""]
				}, $.us.TEMPERATURE = {
					unit: F.degF,
					prefix: q.NONE[""]
				}, $.us.FORCE = {
					unit: F.lbf,
					prefix: q.NONE[""]
				}, $.us.ENERGY = {
					unit: F.BTU,
					prefix: q.BTU[""]
				}, $.us.POWER = {
					unit: F.hp,
					prefix: q.NONE[""]
				}, $.us.PRESSURE = {
					unit: F.psi,
					prefix: q.NONE[""]
				}, $.auto = JSON.parse(JSON.stringify($.si));
				var G = $.auto;
				for (var V in S.setUnitSystem = function(e) {
						if (!Je($, e)) throw new Error("Unit system " + e +
							" does not exist. Choices are: " + Object.keys($)
							.join(", "));
						G = $[e]
					}, S.getUnitSystem = function() {
						for (var e in $)
							if (Je($, e) && $[e] === G) return e
					}, S.typeConverters = {
						BigNumber: function(e) {
							return new N(e + "")
						},
						Fraction: function(e) {
							return new M(e)
						},
						Complex: function(e) {
							return e
						},
						number: function(e) {
							return e
						}
					}, S._getNumberConverter = function(e) {
						if (!S.typeConverters[e]) throw new TypeError(
							'Unsupported type "' + e + '"');
						return S.typeConverters[e]
					}, F)
					if (Je(F, V)) {
						var Z = F[V];
						Z.dimensions = Z.base.dimensions
					} for (var W in U)
					if (Je(U, W)) {
						var Y = F[U[W]],
							J = {};
						for (var X in Y) Je(Y, X) && (J[X] = Y[X]);
						J.name = W, F[W] = J
					} return S.isValidAlpha = function(e) {
						return /^[a-zA-Z]$/.test(e)
					}, S.createUnit = function(e, t) {
						if ("object" !== a()(e)) throw new TypeError(
							"createUnit expects first parameter to be of type 'Object'"
							);
						if (t && t.override)
							for (var r in e)
								if (Je(e, r) && S.deleteUnit(r), e[r].aliases)
									for (var n = 0; n < e[r].aliases.length; n++) S
										.deleteUnit(e[r].aliases[n]);
						var i;
						for (var o in e) Je(e, o) && (i = S.createUnitSingle(o, e[o]));
						return i
					}, S.createUnitSingle = function(e, t, r) {
						if (null == t && (t = {}), "string" != typeof e)
						throw new TypeError(
								"createUnitSingle expects first parameter to be of type 'string'"
								);
						if (Je(F, e)) throw new Error('Cannot create unit "' + e +
							'": a unit with that name already exists');
						! function(e) {
							for (var t = 0; t < e.length; t++) {
								if (n = e.charAt(t), 0 === t && !S.isValidAlpha(n))
								throw new Error(
										'Invalid unit name (must begin with alpha character): "' +
										e + '"');
								if (t > 0 && !S.isValidAlpha(n) && !O(n)) throw new Error(
									'Invalid unit name (only alphanumeric characters are allowed): "' +
									e + '"')
							}
						}(e);
						var i, o, s, u = null,
							c = [],
							f = 0;
						if (t && "Unit" === t.type) u = t.clone();
						else if ("string" == typeof t) "" !== t && (i = t);
						else {
							if ("object" !== a()(t)) throw new TypeError(
								'Cannot create unit "' + e + '" from "' + t
								.toString() +
								'": expecting "string" or "Unit" or "Object"');
							i = t.definition, o = t.prefixes, f = t.offset, s = t.baseName,
								t.aliases && (c = t.aliases.valueOf())
						}
						if (c)
							for (var l = 0; l < c.length; l++)
								if (Je(F, c[l])) throw new Error('Cannot create alias "' +
									c[l] + '": a unit with that name already exists'
									);
						if (i && "string" == typeof i && !u) try {
							u = S.parse(i, {
								allowNoUnits: !0
							})
						} catch (t) {
							throw t.message = 'Could not create unit "' + e +
								'" from "' + i + '": ' + t.message, t
						} else i && "Unit" === i.type && (u = i.clone());
						c = c || [], f = f || 0, o = o && o.toUpperCase && q[o
						.toUpperCase()] || q.NONE;
						var p = {};
						if (u) {
							p = {
								name: e,
								value: u.value,
								dimensions: u.dimensions.slice(0),
								prefixes: o,
								offset: f
							};
							var m = !1;
							for (var h in D)
								if (Je(D, h)) {
									for (var d = !0, v = 0; v < B.length; v++)
										if (Math.abs((p.dimensions[v] || 0) - (D[h]
												.dimensions[v] || 0)) > 1e-12) {
											d = !1;
											break
										} if (d) {
										m = !0, p.base = D[h];
										break
									}
								} if (!m) {
								s = s || e + "_STUFF";
								var y = {
									dimensions: u.dimensions.slice(0)
								};
								y.key = s, D[s] = y, G[s] = {
									unit: p,
									prefix: q.NONE[""]
								}, p.base = D[s]
							}
						} else {
							if (s = s || e + "_STUFF", B.indexOf(s) >= 0) throw new Error(
								'Cannot create new base unit "' + e +
								'": a base unit with that name already exists (and cannot be overridden)'
								);
							for (var g in B.push(s), D) Je(D, g) && (D[g].dimensions[B
								.length - 1] = 0);
							for (var x = {
									dimensions: []
								}, b = 0; b < B.length; b++) x.dimensions[b] = 0;
							x.dimensions[B.length - 1] = 1, x.key = s, D[s] = x, p = {
								name: e,
								value: 1,
								dimensions: D[s].dimensions.slice(0),
								prefixes: o,
								offset: f,
								base: D[s]
							}, G[s] = {
								unit: p,
								prefix: q.NONE[""]
							}
						}
						S.UNITS[e] = p;
						for (var w = 0; w < c.length; w++) {
							var N = c[w],
								M = {};
							for (var E in p) Je(p, E) && (M[E] = p[E]);
							M.name = N, S.UNITS[N] = M
						}
						return delete z.cache, new S(null, e)
					}, S.deleteUnit = function(e) {
						delete S.UNITS[e]
					}, S.PREFIXES = q, S.BASE_DIMENSIONS = B, S.BASE_UNITS = D, S
					.UNIT_SYSTEMS = $, S.UNITS = F, S
			}), {
				isClass: !0
			}),
			Eo = Qe("unit", ["typed", "Unit"], (function(e) {
				var t = e.typed,
					r = e.Unit;
				return t("unit", {
					Unit: function(e) {
						return e.clone()
					},
					string: function(e) {
						return r.isValuelessUnit(e) ? new r(null, e) : r.parse(
							e, {
								allowNoUnits: !0
							})
					},
					"number | BigNumber | Fraction | Complex, string": function(e,
						t) {
						return new r(e, t)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			So = Qe("sparse", ["typed", "SparseMatrix"], (function(e) {
				var t = e.typed,
					r = e.SparseMatrix;
				return t("sparse", {
					"": function() {
						return new r([])
					},
					string: function(e) {
						return new r([], e)
					},
					"Array | Matrix": function(e) {
						return new r(e)
					},
					"Array | Matrix, string": function(e, t) {
						return new r(e, t)
					}
				})
			})),
			Ao = Qe("createUnit", ["typed", "Unit"], (function(e) {
				var t = e.typed,
					r = e.Unit;
				return t("createUnit", {
					"Object, Object": function(e, t) {
						return r.createUnit(e, t)
					},
					Object: function(e) {
						return r.createUnit(e, {})
					},
					"string, Unit | string | Object, Object": function(e, t, n) {
						var i = {};
						return i[e] = t, r.createUnit(i, n)
					},
					"string, Unit | string | Object": function(e, t) {
						var n = {};
						return n[e] = t, r.createUnit(n, {})
					},
					string: function(e) {
						var t = {};
						return t[e] = {}, r.createUnit(t, {})
					}
				})
			})),
			Oo = Qe("acos", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("acos", {
					number: function(e) {
						return e >= -1 && e <= 1 || r.predictable ? Math.acos(
							e) : new n(e, 0).acos()
					},
					Complex: function(e) {
						return e.acos()
					},
					BigNumber: function(e) {
						return e.acos()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			}));

		function Co(e) {
			return ce(e)
		}

		function _o(e) {
			return Math.atan(1 / e)
		}

		function To(e) {
			return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0
		}

		function Io(e) {
			return Math.asin(1 / e)
		}

		function ko(e) {
			var t = 1 / e;
			return Math.log(t + Math.sqrt(t * t + 1))
		}

		function zo(e) {
			return Math.acos(1 / e)
		}

		function Ro(e) {
			var t = 1 / e,
				r = Math.sqrt(t * t - 1);
			return Math.log(r + t)
		}

		function qo(e) {
			return fe(e)
		}

		function Bo(e) {
			return le(e)
		}

		function Do(e) {
			return 1 / Math.tan(e)
		}

		function jo(e) {
			var t = Math.exp(2 * e);
			return (t + 1) / (t - 1)
		}

		function Po(e) {
			return 1 / Math.sin(e)
		}

		function Fo(e) {
			return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) *
				W(e)
		}

		function Uo(e) {
			return 1 / Math.cos(e)
		}

		function Lo(e) {
			return 2 / (Math.exp(e) + Math.exp(-e))
		}

		function $o(e) {
			return me(e)
		}
		Co.signature = "number", _o.signature = "number", To.signature = "number", Io.signature =
			"number", ko.signature = "number", zo.signature = "number", Ro.signature = "number", qo
			.signature = "number", Bo.signature = "number", Do.signature = "number", jo.signature =
			"number", Po.signature = "number", Fo.signature = "number", Uo.signature = "number", Lo
			.signature = "number", $o.signature = "number";
		var Ho = Qe("acosh", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("acosh", {
					number: function(e) {
						return e >= 1 || r.predictable ? Co(e) : e <= -1 ?
							new n(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) :
							new n(e, 0).acosh()
					},
					Complex: function(e) {
						return e.acosh()
					},
					BigNumber: function(e) {
						return e.acosh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Go = Qe("acot", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("acot", {
					number: _o,
					Complex: function(e) {
						return e.acot()
					},
					BigNumber: function(e) {
						return new r(1).div(e).atan()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Vo = Qe("acoth", ["typed", "config", "Complex", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex,
					i = e.BigNumber;
				return t("acoth", {
					number: function(e) {
						return e >= 1 || e <= -1 || r.predictable ? To(e) :
							new n(e, 0).acoth()
					},
					Complex: function(e) {
						return e.acoth()
					},
					BigNumber: function(e) {
						return new i(1).div(e).atanh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Zo = Qe("acsc", ["typed", "config", "Complex", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex,
					i = e.BigNumber;
				return t("acsc", {
					number: function(e) {
						return e <= -1 || e >= 1 || r.predictable ? Io(e) :
							new n(e, 0).acsc()
					},
					Complex: function(e) {
						return e.acsc()
					},
					BigNumber: function(e) {
						return new i(1).div(e).asin()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Wo = Qe("acsch", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("acsch", {
					number: ko,
					Complex: function(e) {
						return e.acsch()
					},
					BigNumber: function(e) {
						return new r(1).div(e).asinh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Yo = Qe("asec", ["typed", "config", "Complex", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex,
					i = e.BigNumber;
				return t("asec", {
					number: function(e) {
						return e <= -1 || e >= 1 || r.predictable ? zo(e) :
							new n(e, 0).asec()
					},
					Complex: function(e) {
						return e.asec()
					},
					BigNumber: function(e) {
						return new i(1).div(e).acos()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Jo = Qe("asech", ["typed", "config", "Complex", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex,
					i = e.BigNumber;
				return t("asech", {
					number: function(e) {
						if (e <= 1 && e >= -1 || r.predictable) {
							var t = 1 / e;
							if (t > 0 || r.predictable) return Ro(e);
							var i = Math.sqrt(t * t - 1);
							return new n(Math.log(i - t), Math.PI)
						}
						return new n(e, 0).asech()
					},
					Complex: function(e) {
						return e.asech()
					},
					BigNumber: function(e) {
						return new i(1).div(e).acosh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			Xo = Qe("asin", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("asin", {
					number: function(e) {
						return e >= -1 && e <= 1 || r.predictable ? Math.asin(
							e) : new n(e, 0).asin()
					},
					Complex: function(e) {
						return e.asin()
					},
					BigNumber: function(e) {
						return e.asin()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			Qo = Qe("asinh", ["typed"], (function(e) {
				return (0, e.typed)("asinh", {
					number: qo,
					Complex: function(e) {
						return e.asinh()
					},
					BigNumber: function(e) {
						return e.asinh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			Ko = Qe("atan", ["typed"], (function(e) {
				return (0, e.typed)("atan", {
					number: function(e) {
						return Math.atan(e)
					},
					Complex: function(e) {
						return e.atan()
					},
					BigNumber: function(e) {
						return e.atan()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			es = Qe("atan2", ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.equalScalar,
						i = e.BigNumber,
						a = e.DenseMatrix,
						o = vn({
							typed: t,
							equalScalar: n
						}),
						s = wn({
							typed: t
						}),
						u = qn({
							typed: t,
							equalScalar: n
						}),
						c = rn({
							typed: t,
							equalScalar: n
						}),
						f = Mn({
							typed: t,
							DenseMatrix: a
						}),
						l = hn({
							typed: t
						}),
						p = nn({
							typed: t
						});
					return t("atan2", {
						"number, number": Math.atan2,
						"BigNumber, BigNumber": function(e, t) {
							return i.atan2(e, t)
						},
						"SparseMatrix, SparseMatrix": function(e, t) {
							return u(e, t, this, !1)
						},
						"SparseMatrix, DenseMatrix": function(e, t) {
							return o(t, e, this, !0)
						},
						"DenseMatrix, SparseMatrix": function(e, t) {
							return s(e, t, this, !1)
						},
						"DenseMatrix, DenseMatrix": function(e, t) {
							return l(e, t, this)
						},
						"Array, Array": function(e, t) {
							return this(r(e), r(t)).valueOf()
						},
						"Array, Matrix": function(e, t) {
							return this(r(e), t)
						},
						"Matrix, Array": function(e, t) {
							return this(e, r(t))
						},
						"SparseMatrix, number | BigNumber": function(e, t) {
							return c(e, t, this, !1)
						},
						"DenseMatrix, number | BigNumber": function(e, t) {
							return p(e, t, this, !1)
						},
						"number | BigNumber, SparseMatrix": function(e, t) {
							return f(t, e, this, !0)
						},
						"number | BigNumber, DenseMatrix": function(e, t) {
							return p(t, e, this, !0)
						},
						"Array, number | BigNumber": function(e, t) {
							return p(r(e), t, this, !1).valueOf()
						},
						"number | BigNumber, Array": function(e, t) {
							return p(r(t), e, this, !0).valueOf()
						}
					})
				})),
			ts = Qe("atanh", ["typed", "config", "Complex"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.Complex;
				return t("atanh", {
					number: function(e) {
						return e <= 1 && e >= -1 || r.predictable ? Bo(e) :
							new n(e, 0).atanh()
					},
					Complex: function(e) {
						return e.atanh()
					},
					BigNumber: function(e) {
						return e.atanh()
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			rs = Qe("cos", ["typed"], (function(e) {
				return (0, e.typed)("cos", {
					number: Math.cos,
					Complex: function(e) {
						return e.cos()
					},
					BigNumber: function(e) {
						return e.cos()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function cos is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			ns = Qe("cosh", ["typed"], (function(e) {
				return (0, e.typed)("cosh", {
					number: pe,
					Complex: function(e) {
						return e.cosh()
					},
					BigNumber: function(e) {
						return e.cosh()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function cosh is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			is = Qe("cot", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("cot", {
					number: Do,
					Complex: function(e) {
						return e.cot()
					},
					BigNumber: function(e) {
						return new r(1).div(e.tan())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function cot is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			as = Qe("coth", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("coth", {
					number: jo,
					Complex: function(e) {
						return e.coth()
					},
					BigNumber: function(e) {
						return new r(1).div(e.tanh())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function coth is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			os = Qe("csc", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("csc", {
					number: Po,
					Complex: function(e) {
						return e.csc()
					},
					BigNumber: function(e) {
						return new r(1).div(e.sin())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function csc is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			ss = Qe("csch", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("csch", {
					number: Fo,
					Complex: function(e) {
						return e.csch()
					},
					BigNumber: function(e) {
						return new r(1).div(e.sinh())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function csch is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			us = Qe("sec", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("sec", {
					number: Uo,
					Complex: function(e) {
						return e.sec()
					},
					BigNumber: function(e) {
						return new r(1).div(e.cos())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function sec is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			cs = Qe("sech", ["typed", "BigNumber"], (function(e) {
				var t = e.typed,
					r = e.BigNumber;
				return t("sech", {
					number: Lo,
					Complex: function(e) {
						return e.sech()
					},
					BigNumber: function(e) {
						return new r(1).div(e.cosh())
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function sech is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			fs = Qe("sin", ["typed"], (function(e) {
				return (0, e.typed)("sin", {
					number: Math.sin,
					Complex: function(e) {
						return e.sin()
					},
					BigNumber: function(e) {
						return e.sin()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function sin is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			ls = Qe("sinh", ["typed"], (function(e) {
				return (0, e.typed)("sinh", {
					number: $o,
					Complex: function(e) {
						return e.sinh()
					},
					BigNumber: function(e) {
						return e.sinh()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function sinh is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			ps = Qe("tan", ["typed"], (function(e) {
				return (0, e.typed)("tan", {
					number: Math.tan,
					Complex: function(e) {
						return e.tan()
					},
					BigNumber: function(e) {
						return e.tan()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function tan is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			ms = Qe("tanh", ["typed"], (function(e) {
				return (0, e.typed)("tanh", {
					number: he,
					Complex: function(e) {
						return e.tanh()
					},
					BigNumber: function(e) {
						return e.tanh()
					},
					Unit: function(e) {
						if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE))
						throw new TypeError(
								"Unit in function tanh is no angle");
						return this(e.value)
					},
					"Array | Matrix": function(e) {
						return Ht(e, this, !0)
					}
				})
			})),
			hs = Qe("setCartesian", ["typed", "size", "subset", "compareNatural", "Index",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.subset,
					i = e.compareNatural,
					a = e.Index,
					o = e.DenseMatrix;
				return t("setCartesian", {
					"Array | Matrix, Array | Matrix": function(e, t) {
						var s = [];
						if (0 !== n(r(e), new a(0)) && 0 !== n(r(t), new a(
							0))) {
							var u = Re(Array.isArray(e) ? e : e.toArray()).sort(
									i),
								c = Re(Array.isArray(t) ? t : t.toArray()).sort(
									i);
							s = [];
							for (var f = 0; f < u.length; f++)
								for (var l = 0; l < c.length; l++) s.push([u[f],
									c[l]
								])
						}
						return Array.isArray(e) && Array.isArray(t) ? s : new o(
							s)
					}
				})
			})),
			ds = Qe("setDifference", ["typed", "size", "subset", "compareNatural", "Index",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.subset,
					i = e.compareNatural,
					a = e.Index,
					o = e.DenseMatrix;
				return t("setDifference", {
					"Array | Matrix, Array | Matrix": function(e, t) {
						var s;
						if (0 === n(r(e), new a(0))) s = [];
						else {
							if (0 === n(r(t), new a(0))) return Re(e.toArray());
							var u, c = Fe(Re(Array.isArray(e) ? e : e.toArray())
									.sort(i)),
								f = Fe(Re(Array.isArray(t) ? t : t.toArray())
									.sort(i));
							s = [];
							for (var l = 0; l < c.length; l++) {
								u = !1;
								for (var p = 0; p < f.length; p++)
									if (0 === i(c[l].value, f[p].value) && c[l]
										.identifier === f[p].identifier) {
										u = !0;
										break
									} u || s.push(c[l])
							}
						}
						return Array.isArray(e) && Array.isArray(t) ? Ue(s) :
							new o(Ue(s))
					}
				})
			})),
			vs = Qe("setDistinct", ["typed", "size", "subset", "compareNatural", "Index",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.subset,
					i = e.compareNatural,
					a = e.Index,
					o = e.DenseMatrix;
				return t("setDistinct", {
					"Array | Matrix": function(e) {
						var t;
						if (0 === n(r(e), new a(0))) t = [];
						else {
							var s = Re(Array.isArray(e) ? e : e.toArray()).sort(
								i);
							(t = []).push(s[0]);
							for (var u = 1; u < s.length; u++) 0 !== i(s[u], s[
								u - 1]) && t.push(s[u])
						}
						return Array.isArray(e) ? t : new o(t)
					}
				})
			})),
			ys = Qe("setIntersect", ["typed", "size", "subset", "compareNatural", "Index",
				"DenseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.subset,
					i = e.compareNatural,
					a = e.Index,
					o = e.DenseMatrix;
				return t("setIntersect", {
					"Array | Matrix, Array | Matrix": function(e, t) {
						var s;
						if (0 === n(r(e), new a(0)) || 0 === n(r(t), new a(0)))
							s = [];
						else {
							var u = Fe(Re(Array.isArray(e) ? e : e.toArray())
									.sort(i)),
								c = Fe(Re(Array.isArray(t) ? t : t.toArray())
									.sort(i));
							s = [];
							for (var f = 0; f < u.length; f++)
								for (var l = 0; l < c.length; l++)
									if (0 === i(u[f].value, c[l].value) && u[f]
										.identifier === c[l].identifier) {
										s.push(u[f]);
										break
									}
						}
						return Array.isArray(e) && Array.isArray(t) ? Ue(s) :
							new o(Ue(s))
					}
				})
			})),
			gs = Qe("setIsSubset", ["typed", "size", "subset", "compareNatural", "Index"], (
				function(e) {
					var t = e.typed,
						r = e.size,
						n = e.subset,
						i = e.compareNatural,
						a = e.Index;
					return t("setIsSubset", {
						"Array | Matrix, Array | Matrix": function(e, t) {
							if (0 === n(r(e), new a(0))) return !0;
							if (0 === n(r(t), new a(0))) return !1;
							for (var o, s = Fe(Re(Array.isArray(e) ? e : e
								.toArray()).sort(i)), u = Fe(Re(Array.isArray(
									t) ? t : t.toArray()).sort(i)), c = 0; c < s
								.length; c++) {
								o = !1;
								for (var f = 0; f < u.length; f++)
									if (0 === i(s[c].value, u[f].value) && s[c]
										.identifier === u[f].identifier) {
										o = !0;
										break
									} if (!1 === o) return !1
							}
							return !0
						}
					})
				})),
			xs = Qe("setMultiplicity", ["typed", "size", "subset", "compareNatural", "Index"], (
				function(e) {
					var t = e.typed,
						r = e.size,
						n = e.subset,
						i = e.compareNatural,
						a = e.Index;
					return t("setMultiplicity", {
						"number | BigNumber | Fraction | Complex, Array | Matrix": function(
							e, t) {
							if (0 === n(r(t), new a(0))) return 0;
							for (var o = Re(Array.isArray(t) ? t : t.toArray()), s =
									0, u = 0; u < o.length; u++) 0 === i(o[u], e) &&
								s++;
							return s
						}
					})
				})),
			bs = Qe("setPowerset", ["typed", "size", "subset", "compareNatural", "Index"], (
				function(e) {
					var t = e.typed,
						r = e.size,
						n = e.subset,
						i = e.compareNatural,
						a = e.Index;
					return t("setPowerset", {
						"Array | Matrix": function(e) {
							if (0 === n(r(e), new a(0))) return [];
							for (var t = Re(Array.isArray(e) ? e : e.toArray())
									.sort(i), s = [], u = 0; u.toString(2).length <=
								t.length;) s.push(o(t, u.toString(2).split("")
								.reverse())), u++;
							return function(e) {
								for (var t = [], r = e.length - 1; r > 0; r--)
									for (var n = 0; n < r; n++) e[n].length > e[
										n + 1].length && (t = e[n], e[n] =
										e[n + 1], e[n + 1] = t);
								return e
							}(s)
						}
					});

					function o(e, t) {
						for (var r = [], n = 0; n < t.length; n++) "1" === t[n] && r.push(e[n]);
						return r
					}
				})),
			ws = Qe("setSize", ["typed", "compareNatural"], (function(e) {
				var t = e.typed,
					r = e.compareNatural;
				return t("setSize", {
					"Array | Matrix": function(e) {
						return Array.isArray(e) ? Re(e).length : Re(e.toArray())
							.length
					},
					"Array | Matrix, boolean": function(e, t) {
						if (!1 === t || 0 === e.length) return Array.isArray(
							e) ? Re(e).length : Re(e.toArray()).length;
						for (var n = Re(Array.isArray(e) ? e : e.toArray())
								.sort(r), i = 1, a = 1; a < n.length; a++) 0 !==
							r(n[a], n[a - 1]) && i++;
						return i
					}
				})
			})),
			Ns = Qe("setSymDifference", ["typed", "size", "concat", "subset", "setDifference",
				"Index"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.concat,
					i = e.subset,
					a = e.setDifference,
					o = e.Index;
				return t("setSymDifference", {
					"Array | Matrix, Array | Matrix": function(e, t) {
						if (0 === i(r(e), new o(0))) return Re(t);
						if (0 === i(r(t), new o(0))) return Re(e);
						var s = Re(e),
							u = Re(t);
						return n(a(s, u), a(u, s))
					}
				})
			})),
			Ms = Qe("setUnion", ["typed", "size", "concat", "subset", "setIntersect",
				"setSymDifference", "Index"
			], (function(e) {
				var t = e.typed,
					r = e.size,
					n = e.concat,
					i = e.subset,
					a = e.setIntersect,
					o = e.setSymDifference,
					s = e.Index;
				return t("setUnion", {
					"Array | Matrix, Array | Matrix": function(e, t) {
						if (0 === i(r(e), new s(0))) return Re(t);
						if (0 === i(r(t), new s(0))) return Re(e);
						var u = Re(e),
							c = Re(t);
						return n(o(u, c), a(u, c))
					}
				})
			})),
			Es = Qe("add", ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix",
				"SparseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.addScalar,
					i = e.equalScalar,
					a = e.DenseMatrix,
					o = (e.SparseMatrix, ln({
						typed: t
					})),
					s = pn({
						typed: t,
						equalScalar: i
					}),
					u = mn({
						typed: t,
						DenseMatrix: a
					}),
					c = hn({
						typed: t
					}),
					f = nn({
						typed: t
					});
				return t("add", Ve({
					"DenseMatrix, DenseMatrix": function(e, t) {
						return c(e, t, n)
					},
					"DenseMatrix, SparseMatrix": function(e, t) {
						return o(e, t, n, !1)
					},
					"SparseMatrix, DenseMatrix": function(e, t) {
						return o(t, e, n, !0)
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						return s(e, t, n)
					},
					"Array, Array": function(e, t) {
						return this(r(e), r(t)).valueOf()
					},
					"Array, Matrix": function(e, t) {
						return this(r(e), t)
					},
					"Matrix, Array": function(e, t) {
						return this(e, r(t))
					},
					"DenseMatrix, any": function(e, t) {
						return f(e, t, n, !1)
					},
					"SparseMatrix, any": function(e, t) {
						return u(e, t, n, !1)
					},
					"any, DenseMatrix": function(e, t) {
						return f(t, e, n, !0)
					},
					"any, SparseMatrix": function(e, t) {
						return u(t, e, n, !0)
					},
					"Array, any": function(e, t) {
						return f(r(e), t, n, !1).valueOf()
					},
					"any, Array": function(e, t) {
						return f(r(t), e, n, !0).valueOf()
					},
					"any, any": n,
					"any, any, ...any": function(e, t, r) {
						for (var n = this(e, t), i = 0; i < r.length; i++)
							n = this(n, r[i]);
						return n
					}
				}, n.signatures))
			})),
			Ss = Qe("hypot", ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt",
				"smaller", "isPositive"
			], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.addScalar,
					i = e.divideScalar,
					a = e.multiplyScalar,
					o = e.sqrt,
					s = e.smaller,
					u = e.isPositive;
				return t("hypot", {
					"... number | BigNumber": function(e) {
						for (var t = 0, c = 0, f = 0; f < e.length; f++) {
							var l = r(e[f]);
							s(c, l) ? (t = a(t, a(i(c, l), i(c, l))), t = n(t,
								1), c = l) : t = n(t, u(l) ? a(i(l, c), i(l,
								c)) : l)
						}
						return a(c, o(t))
					},
					Array: function(e) {
						return this.apply(this, Re(e))
					},
					Matrix: function(e) {
						return this.apply(this, Re(e.toArray()))
					}
				})
			})),
			As = Qe("norm", ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply",
				"equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"
			], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.add,
					i = e.pow,
					a = e.conj,
					o = e.sqrt,
					s = e.multiply,
					u = e.equalScalar,
					c = e.larger,
					f = e.smaller,
					l = e.matrix,
					p = e.ctranspose,
					m = e.eigs;
				return t("norm", {
					number: Math.abs,
					Complex: function(e) {
						return e.abs()
					},
					BigNumber: function(e) {
						return e.abs()
					},
					boolean: function(e) {
						return Math.abs(e)
					},
					Array: function(e) {
						return v(l(e), 2)
					},
					Matrix: function(e) {
						return v(e, 2)
					},
					"number | Complex | BigNumber | boolean, number | BigNumber | string": function(
						e) {
						return this(e)
					},
					"Array, number | BigNumber | string": function(e, t) {
						return v(l(e), t)
					},
					"Matrix, number | BigNumber | string": function(e, t) {
						return v(e, t)
					}
				});

				function h(e, t) {
					if (t === Number.POSITIVE_INFINITY || "inf" === t) return function(e) {
						var t = 0;
						return e.forEach((function(e) {
							var n = r(e);
							c(n, t) && (t = n)
						}), !0), t
					}(e);
					if (t === Number.NEGATIVE_INFINITY || "-inf" === t) return function(e) {
						var t;
						return e.forEach((function(e) {
							var n = r(e);
							t && !f(n, t) || (t = n)
						}), !0), t || 0
					}(e);
					if ("fro" === t) return v(e, 2);
					if ("number" == typeof t && !isNaN(t)) {
						if (!u(t, 0)) {
							var a = 0;
							return e.forEach((function(e) {
								a = n(i(r(e), t), a)
							}), !0), i(a, 1 / t)
						}
						return Number.POSITIVE_INFINITY
					}
					throw new Error("Unsupported parameter value")
				}

				function d(e, t) {
					if (1 === t) return function(e) {
						var t = [],
							i = 0;
						return e.forEach((function(e, a) {
							var o = a[1],
								s = n(t[o] || 0, r(e));
							c(s, i) && (i = s), t[o] = s
						}), !0), i
					}(e);
					if (t === Number.POSITIVE_INFINITY || "inf" === t) return function(e) {
						var t = [],
							i = 0;
						return e.forEach((function(e, a) {
							var o = a[0],
								s = n(t[o] || 0, r(e));
							c(s, i) && (i = s), t[o] = s
						}), !0), i
					}(e);
					if ("fro" === t) return function(e) {
						var t = 0;
						return e.forEach((function(e, r) {
							t = n(t, s(e, a(e)))
						})), r(o(t))
					}(e);
					if (2 === t) return function(e) {
						var t = e.size();
						if (t[0] !== t[1]) throw new RangeError(
							"Invalid matrix dimensions");
						var n = p(e),
							i = s(n, e),
							a = m(i).values.toArray(),
							u = a[a.length - 1];
						return r(o(u))
					}(e);
					throw new Error("Unsupported parameter value " + t)
				}

				function v(e, t) {
					var r = e.size();
					if (1 === r.length) return h(e, t);
					if (2 === r.length) {
						if (r[0] && r[1]) return d(e, t);
						throw new RangeError("Invalid matrix dimensions")
					}
				}
			})),
			Os = Qe("dot", ["typed", "addScalar", "multiplyScalar", "conj", "size"], (function(e) {
				var t = e.typed,
					r = e.addScalar,
					n = e.multiplyScalar,
					i = e.conj,
					a = e.size;
				return t("dot", {
					"Array | DenseMatrix, Array | DenseMatrix": function(e, a) {
						var u = o(e, a),
							c = m(e) ? e._data : e,
							f = m(e) ? e._datatype : void 0,
							l = m(a) ? a._data : a,
							p = m(a) ? a._datatype : void 0,
							h = 2 === s(e).length,
							d = 2 === s(a).length,
							v = r,
							y = n;
						if (f && p && f === p && "string" == typeof f) {
							var g = f;
							v = t.find(r, [g, g]), y = t.find(n, [g, g])
						}
						if (!h && !d) {
							for (var x = y(i(c[0]), l[0]), b = 1; b < u; b++)
								x = v(x, y(i(c[b]), l[b]));
							return x
						}
						if (!h && d) {
							for (var w = y(i(c[0]), l[0][0]), N = 1; N < u; N++)
								w = v(w, y(i(c[N]), l[N][0]));
							return w
						}
						if (h && !d) {
							for (var M = y(i(c[0][0]), l[0]), E = 1; E < u; E++)
								M = v(M, y(i(c[E][0]), l[E]));
							return M
						}
						if (h && d) {
							for (var S = y(i(c[0][0]), l[0][0]), A = 1; A <
								u; A++) S = v(S, y(i(c[A][0]), l[A][0]));
							return S
						}
					},
					"SparseMatrix, SparseMatrix": function(e, t) {
						o(e, t);
						var i = e._index,
							a = e._values,
							s = t._index,
							u = t._values,
							c = 0,
							f = r,
							l = n,
							p = 0,
							m = 0;
						for (; p < i.length && m < s.length;) {
							var h = i[p],
								d = s[m];
							h < d ? p++ : h > d ? m++ : h === d && (c = f(c, l(
								a[p], u[m])), p++, m++)
						}
						return c
					}
				});

				function o(e, t) {
					var r, n, i = s(e),
						a = s(t);
					if (1 === i.length) r = i[0];
					else {
						if (2 !== i.length || 1 !== i[1]) throw new RangeError(
							"Expected a column vector, instead got a matrix of size (" +
							i.join(", ") + ")");
						r = i[0]
					}
					if (1 === a.length) n = a[0];
					else {
						if (2 !== a.length || 1 !== a[1]) throw new RangeError(
							"Expected a column vector, instead got a matrix of size (" +
							a.join(", ") + ")");
						n = a[0]
					}
					if (r !== n) throw new RangeError("Vectors must have equal length (" +
						r + " != " + n + ")");
					if (0 === r) throw new RangeError(
						"Cannot calculate the dot product of empty vectors");
					return r
				}

				function s(e) {
					return m(e) ? e.size() : a(e)
				}
			})),
			Cs = Qe("trace", ["typed", "matrix", "add"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.add;
				return t("trace", {
					Array: function(e) {
						return i(r(e))
					},
					SparseMatrix: function(e) {
						var t = e._values,
							r = e._index,
							i = e._ptr,
							a = e._size,
							o = a[0],
							s = a[1];
						if (o === s) {
							var u = 0;
							if (t.length > 0)
								for (var c = 0; c < s; c++)
									for (var f = i[c], l = i[c + 1], p = f; p <
										l; p++) {
										var m = r[p];
										if (m === c) {
											u = n(u, t[p]);
											break
										}
										if (m > c) break
									}
							return u
						}
						throw new RangeError("Matrix must be square (size: " +
							xe(a) + ")")
					},
					DenseMatrix: i,
					any: He
				});

				function i(e) {
					var t = e._size,
						r = e._data;
					switch (t.length) {
						case 1:
							if (1 === t[0]) return He(r[0]);
							throw new RangeError("Matrix must be square (size: " + xe(t) +
								")");
						case 2:
							var i = t[0];
							if (i === t[1]) {
								for (var a = 0, o = 0; o < i; o++) a = n(a, r[o][o]);
								return a
							}
							throw new RangeError("Matrix must be square (size: " + xe(t) +
								")");
						default:
							throw new RangeError("Matrix must be two dimensional (size: " +
								xe(t) + ")")
					}
				}
			})),
			_s = Qe("index", ["typed", "Index"], (function(e) {
				var t = e.typed,
					r = e.Index;
				return t("index", {
					"...number | string | BigNumber | Range | Array | Matrix": function(
						e) {
						var t = e.map((function(e) {
								return s(e) ? e.toNumber() : Array
									.isArray(e) || m(e) ? e.map((
										function(e) {
											return s(e) ? e
												.toNumber() : e
										})) : e
							})),
							n = new r;
						return r.apply(n, t), n
					}
				})
			})),
			Ts = (r(183), new Set(["end"])),
			Is = Qe("Node", ["mathWithTransform"], (function(e) {
				var t = e.mathWithTransform;

				function r() {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator")
				}
				return r.prototype.evaluate = function(e) {
						return this.compile().evaluate(e)
					}, r.prototype.type = "Node", r.prototype.isNode = !0, r.prototype
					.comment = "", r.prototype.compile = function() {
						var e = this._compile(t, {}),
							r = {};
						return {
							evaluate: function(t) {
								var n = vt(t);
								return function(e) {
									for (var t = 0, r = ja()(Ts); t < r
										.length; t++) {
										var n = r[t];
										if (e.has(n)) throw new Error(
											'Scope contains an illegal symbol, "' +
											n + '" is a reserved keyword')
									}
								}(n), e(n, r, null)
							}
						}
					}, r.prototype._compile = function(e, t) {
						throw new Error("Method _compile should be implemented by type " +
							this.type)
					}, r.prototype.forEach = function(e) {
						throw new Error("Cannot run forEach on a Node interface")
					}, r.prototype.map = function(e) {
						throw new Error("Cannot run map on a Node interface")
					}, r.prototype._ifNode = function(e) {
						if (!D(e)) throw new TypeError(
							"Callback function must return a Node");
						return e
					}, r.prototype.traverse = function(e) {
						e(this, null, null),
							function e(t, r) {
								t.forEach((function(t, n, i) {
									r(t, n, i), e(t, r)
								}))
							}(this, e)
					}, r.prototype.transform = function(e) {
						return function t(r, n, i) {
							var a = e(r, n, i);
							return a !== r ? a : r.map(t)
						}(this, null, null)
					}, r.prototype.filter = function(e) {
						var t = [];
						return this.traverse((function(r, n, i) {
							e(r, n, i) && t.push(r)
						})), t
					}, r.prototype.clone = function() {
						throw new Error("Cannot clone a Node interface")
					}, r.prototype.cloneDeep = function() {
						return this.map((function(e) {
							return e.cloneDeep()
						}))
					}, r.prototype.equals = function(e) {
						return !!e && Ze(this, e)
					}, r.prototype.toString = function(e) {
						var t = this._getCustomString(e);
						return void 0 !== t ? t : this._toString(e)
					}, r.prototype.toJSON = function() {
						throw new Error(
							"Cannot serialize object: toJSON not implemented by " + this
							.type)
					}, r.prototype.toHTML = function(e) {
						var t = this._getCustomString(e);
						return void 0 !== t ? t : this.toHTML(e)
					}, r.prototype._toString = function() {
						throw new Error("_toString not implemented for " + this.type)
					}, r.prototype.toTex = function(e) {
						var t = this._getCustomString(e);
						return void 0 !== t ? t : this._toTex(e)
					}, r.prototype._toTex = function(e) {
						throw new Error("_toTex not implemented for " + this.type)
					}, r.prototype._getCustomString = function(e) {
						if (e && "object" === a()(e)) switch (a()(e.handler)) {
							case "object":
							case "undefined":
								return;
							case "function":
								return e.handler(this, e);
							default:
								throw new TypeError(
									"Object or function expected as callback")
						}
					}, r.prototype.getIdentifier = function() {
						return this.type
					}, r.prototype.getContent = function() {
						return this
					}, r
			}), {
				isClass: !0,
				isNode: !0
			});

		function ks(e) {
			return e && e.isIndexError ? new Ee(e.index + 1, e.min + 1, void 0 !== e.max ? e.max +
				1 : void 0) : e
		}

		function zs(e) {
			var t = e.subset;
			return function(e, r) {
				try {
					if (Array.isArray(e)) return t(e, r);
					if (e && "function" == typeof e.subset) return e.subset(r);
					if ("string" == typeof e) return t(e, r);
					if ("object" === a()(e)) {
						if (!r.isObjectProperty()) throw new TypeError(
							"Cannot apply a numeric index as object property");
						return at(e, r.getObjectProperty())
					}
					throw new TypeError("Cannot apply index: unsupported type of object")
				} catch (e) {
					throw ks(e)
				}
			}
		}
		var Rs = Qe("AccessorNode", ["subset", "Node"], (function(e) {
				var t = e.subset,
					r = e.Node,
					n = zs({
						subset: t
					});

				function i(e, t) {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!D(e)) throw new TypeError('Node expected for parameter "object"');
					if (!B(t)) throw new TypeError(
						'IndexNode expected for parameter "index"');
					this.object = e || null, this.index = t, Object.defineProperty(this,
						"name", {
							get: function() {
								return this.index ? this.index.isObjectProperty() ?
									this.index.getObjectProperty() : "" : this
									.object.name || ""
							}.bind(this),
							set: function() {
								throw new Error(
									"Cannot assign a new name, name is read-only"
									)
							}
						})
				}

				function a(e) {
					return !(C(e) || _(e) || z(e) || q(e) || j(e) || F(e) || L(e))
				}
				return i.prototype = new r, i.prototype.type = "AccessorNode", i.prototype
					.isAccessorNode = !0, i.prototype._compile = function(e, t) {
						var r = this.object._compile(e, t),
							i = this.index._compile(e, t);
						if (this.index.isObjectProperty()) {
							var a = this.index.getObjectProperty();
							return function(e, t, n) {
								return at(r(e, t, n), a)
							}
						}
						return function(e, t, a) {
							var o = r(e, t, a),
								s = i(e, t, o);
							return n(o, s)
						}
					}, i.prototype.forEach = function(e) {
						e(this.object, "object", this), e(this.index, "index", this)
					}, i.prototype.map = function(e) {
						return new i(this._ifNode(e(this.object, "object", this)), this
							._ifNode(e(this.index, "index", this)))
					}, i.prototype.clone = function() {
						return new i(this.object, this.index)
					}, i.prototype._toString = function(e) {
						var t = this.object.toString(e);
						return a(this.object) && (t = "(" + t + ")"), t + this.index
							.toString(e)
					}, i.prototype.toHTML = function(e) {
						var t = this.object.toHTML(e);
						return a(this.object) && (t =
							'<span class="math-parenthesis math-round-parenthesis">(</span>' +
							t +
							'<span class="math-parenthesis math-round-parenthesis">)</span>'
							), t + this.index.toHTML(e)
					}, i.prototype._toTex = function(e) {
						var t = this.object.toTex(e);
						return a(this.object) && (t = "\\left(' + object + '\\right)"), t +
							this.index.toTex(e)
					}, i.prototype.toJSON = function() {
						return {
							mathjs: "AccessorNode",
							object: this.object,
							index: this.index
						}
					}, i.fromJSON = function(e) {
						return new i(e.object, e.index)
					}, i
			}), {
				isClass: !0,
				isNode: !0
			}),
			qs = Qe("ArrayNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (this.items = e || [], !Array.isArray(this.items) || !this.items
						.every(D)) throw new TypeError("Array containing Nodes expected")
				}
				return r.prototype = new t, r.prototype.type = "ArrayNode", r.prototype
					.isArrayNode = !0, r.prototype._compile = function(e, t) {
						var r = qe(this.items, (function(r) {
							return r._compile(e, t)
						}));
						if ("Array" !== e.config.matrix) {
							var n = e.matrix;
							return function(e, t, i) {
								return n(qe(r, (function(r) {
									return r(e, t, i)
								})))
							}
						}
						return function(e, t, n) {
							return qe(r, (function(r) {
								return r(e, t, n)
							}))
						}
					}, r.prototype.forEach = function(e) {
						for (var t = 0; t < this.items.length; t++) {
							e(this.items[t], "items[" + t + "]", this)
						}
					}, r.prototype.map = function(e) {
						for (var t = [], n = 0; n < this.items.length; n++) t[n] = this
							._ifNode(e(this.items[n], "items[" + n + "]", this));
						return new r(t)
					}, r.prototype.clone = function() {
						return new r(this.items.slice(0))
					}, r.prototype._toString = function(e) {
						return "[" + this.items.map((function(t) {
							return t.toString(e)
						})).join(", ") + "]"
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "ArrayNode",
							items: this.items
						}
					}, r.fromJSON = function(e) {
						return new r(e.items)
					}, r.prototype.toHTML = function(e) {
						return '<span class="math-parenthesis math-square-parenthesis">[</span>' +
							this.items.map((function(t) {
								return t.toHTML(e)
							})).join('<span class="math-separator">,</span>') +
							'<span class="math-parenthesis math-square-parenthesis">]</span>'
					}, r.prototype._toTex = function(e) {
						return function t(r, n) {
							var i = r.some(_) && !r.every(_),
								a = n || i,
								o = a ? "&" : "\\\\",
								s = r.map((function(r) {
									return r.items ? t(r.items, !n) : r.toTex(e)
								})).join(o);
							return i || !a || a && !n ? "\\begin{bmatrix}" + s +
								"\\end{bmatrix}" : s
						}(this.items, !1)
					}, r
			}), {
				isClass: !0,
				isNode: !0
			});
		var Bs = [{
			AssignmentNode: {},
			FunctionAssignmentNode: {}
		}, {
			ConditionalNode: {
				latexLeftParens: !1,
				latexRightParens: !1,
				latexParens: !1
			}
		}, {
			"OperatorNode:or": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:xor": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:and": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitOr": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitXor": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:bitAnd": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:equal": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:unequal": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:smaller": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:larger": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:smallerEq": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:largerEq": {
				associativity: "left",
				associativeWith: []
			},
			RelationalNode: {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:leftShift": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:rightArithShift": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:rightLogShift": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:to": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			RangeNode: {}
		}, {
			"OperatorNode:add": {
				associativity: "left",
				associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
			},
			"OperatorNode:subtract": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:multiply": {
				associativity: "left",
				associativeWith: ["OperatorNode:multiply", "OperatorNode:divide",
					"Operator:dotMultiply", "Operator:dotDivide"
				]
			},
			"OperatorNode:divide": {
				associativity: "left",
				associativeWith: [],
				latexLeftParens: !1,
				latexRightParens: !1,
				latexParens: !1
			},
			"OperatorNode:dotMultiply": {
				associativity: "left",
				associativeWith: ["OperatorNode:multiply", "OperatorNode:divide",
					"OperatorNode:dotMultiply", "OperatorNode:doDivide"
				]
			},
			"OperatorNode:dotDivide": {
				associativity: "left",
				associativeWith: []
			},
			"OperatorNode:mod": {
				associativity: "left",
				associativeWith: []
			}
		}, {
			"OperatorNode:unaryPlus": {
				associativity: "right"
			},
			"OperatorNode:unaryMinus": {
				associativity: "right"
			},
			"OperatorNode:bitNot": {
				associativity: "right"
			},
			"OperatorNode:not": {
				associativity: "right"
			}
		}, {
			"OperatorNode:pow": {
				associativity: "right",
				associativeWith: [],
				latexRightParens: !1
			},
			"OperatorNode:dotPow": {
				associativity: "right",
				associativeWith: []
			}
		}, {
			"OperatorNode:factorial": {
				associativity: "left"
			}
		}, {
			"OperatorNode:transpose": {
				associativity: "left"
			}
		}];

		function Ds(e, t) {
			var r = e;
			"keep" !== t && (r = e.getContent());
			for (var n = r.getIdentifier(), i = 0; i < Bs.length; i++)
				if (n in Bs[i]) return i;
			return null
		}

		function js(e, t) {
			var r = e;
			"keep" !== t && (r = e.getContent());
			var n = r.getIdentifier(),
				i = Ds(r, t);
			if (null === i) return null;
			var a = Bs[i][n];
			if (Je(a, "associativity")) {
				if ("left" === a.associativity) return "left";
				if ("right" === a.associativity) return "right";
				throw Error("'" + n + "' has the invalid associativity '" + a.associativity + "'.")
			}
			return null
		}

		function Ps(e, t, r) {
			var n = "keep" !== r ? e.getContent() : e,
				i = "keep" !== r ? e.getContent() : t,
				a = n.getIdentifier(),
				o = i.getIdentifier(),
				s = Ds(n, r);
			if (null === s) return null;
			var u = Bs[s][a];
			if (Je(u, "associativeWith") && u.associativeWith instanceof Array) {
				for (var c = 0; c < u.associativeWith.length; c++)
					if (u.associativeWith[c] === o) return !0;
				return !1
			}
			return null
		}
		var Fs = Qe("AssignmentNode", ["subset", "?matrix", "Node"], (function(e) {
				var t = e.subset,
					r = e.matrix,
					n = e.Node,
					i = zs({
						subset: t
					}),
					o = function(e) {
						var t = e.subset,
							r = e.matrix;
						return function(e, n, i) {
							try {
								if (Array.isArray(e)) return r(e).subset(n, i)
							.valueOf();
								if (e && "function" == typeof e.subset) return e.subset(
									n, i);
								if ("string" == typeof e) return t(e, n, i);
								if ("object" === a()(e)) {
									if (!n.isObjectProperty()) throw TypeError(
										"Cannot apply a numeric index as object property"
										);
									return ot(e, n.getObjectProperty(), i), e
								}
								throw new TypeError(
									"Cannot apply index: unsupported type of object"
									)
							} catch (e) {
								throw ks(e)
							}
						}
					}({
						subset: t,
						matrix: r
					});

				function s(e, t, r) {
					if (!(this instanceof s)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (this.object = e, this.index = r ? t : null, this.value = r || t, !L(
							e) && !C(e)) throw new TypeError(
						'SymbolNode or AccessorNode expected as "object"');
					if (L(e) && "end" === e.name) throw new Error(
						'Cannot assign to symbol "end"');
					if (this.index && !B(this.index)) throw new TypeError(
						'IndexNode expected as "index"');
					if (!D(this.value)) throw new TypeError('Node expected as "value"');
					Object.defineProperty(this, "name", {
						get: function() {
							return this.index ? this.index.isObjectProperty() ?
								this.index.getObjectProperty() : "" : this
								.object.name || ""
						}.bind(this),
						set: function() {
							throw new Error(
								"Cannot assign a new name, name is read-only"
								)
						}
					})
				}

				function u(e, t) {
					t || (t = "keep");
					var r = Ds(e, t),
						n = Ds(e.value, t);
					return "all" === t || null !== n && n <= r
				}
				return s.prototype = new n, s.prototype.type = "AssignmentNode", s.prototype
					.isAssignmentNode = !0, s.prototype._compile = function(e, t) {
						var r = this.object._compile(e, t),
							n = this.index ? this.index._compile(e, t) : null,
							a = this.value._compile(e, t),
							s = this.object.name;
						if (this.index) {
							if (this.index.isObjectProperty()) {
								var u = this.index.getObjectProperty();
								return function(e, t, n) {
									var i = r(e, t, n),
										o = a(e, t, n);
									return ot(i, u, o), o
								}
							}
							if (L(this.object)) return function(e, t, i) {
								var u = r(e, t, i),
									c = a(e, t, i),
									f = n(e, t, u);
								return e.set(s, o(u, f, c)), c
							};
							var c = this.object.object._compile(e, t);
							if (this.object.index.isObjectProperty()) {
								var f = this.object.index.getObjectProperty();
								return function(e, t, r) {
									var i = c(e, t, r),
										s = at(i, f),
										u = n(e, t, s),
										l = a(e, t, r);
									return ot(i, f, o(s, u, l)), l
								}
							}
							var l = this.object.index._compile(e, t);
							return function(e, t, r) {
								var s = c(e, t, r),
									u = l(e, t, s),
									f = i(s, u),
									p = n(e, t, f),
									m = a(e, t, r);
								return o(s, u, o(f, p, m)), m
							}
						}
						if (!L(this.object)) throw new TypeError(
							"SymbolNode expected as object");
						return function(e, t, r) {
							var n = a(e, t, r);
							return e.set(s, n), n
						}
					}, s.prototype.forEach = function(e) {
						e(this.object, "object", this), this.index && e(this.index, "index",
							this), e(this.value, "value", this)
					}, s.prototype.map = function(e) {
						return new s(this._ifNode(e(this.object, "object", this)), this
							.index ? this._ifNode(e(this.index, "index", this)) : null,
							this._ifNode(e(this.value, "value", this)))
					}, s.prototype.clone = function() {
						return new s(this.object, this.index, this.value)
					}, s.prototype._toString = function(e) {
						var t = this.object.toString(e),
							r = this.index ? this.index.toString(e) : "",
							n = this.value.toString(e);
						return u(this, e && e.parenthesis) && (n = "(" + n + ")"), t + r +
							" = " + n
					}, s.prototype.toJSON = function() {
						return {
							mathjs: "AssignmentNode",
							object: this.object,
							index: this.index,
							value: this.value
						}
					}, s.fromJSON = function(e) {
						return new s(e.object, e.index, e.value)
					}, s.prototype.toHTML = function(e) {
						var t = this.object.toHTML(e),
							r = this.index ? this.index.toHTML(e) : "",
							n = this.value.toHTML(e);
						return u(this, e && e.parenthesis) && (n =
								'<span class="math-paranthesis math-round-parenthesis">(</span>' +
								n +
								'<span class="math-paranthesis math-round-parenthesis">)</span>'
								), t + r +
							'<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' +
							n
					}, s.prototype._toTex = function(e) {
						var t = this.object.toTex(e),
							r = this.index ? this.index.toTex(e) : "",
							n = this.value.toTex(e);
						return u(this, e && e.parenthesis) && (n = "\\left(".concat(n,
							"\\right)")), t + r + ":=" + n
					}, s
			}), {
				isClass: !0,
				isNode: !0
			}),
			Us = Qe("BlockNode", ["ResultSet", "Node"], (function(e) {
				var t = e.ResultSet,
					r = e.Node;

				function n(e) {
					if (!(this instanceof n)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!Array.isArray(e)) throw new Error("Array expected");
					this.blocks = e.map((function(e) {
						var t = e && e.node,
							r = !e || void 0 === e.visible || e.visible;
						if (!D(t)) throw new TypeError(
							'Property "node" must be a Node');
						if ("boolean" != typeof r) throw new TypeError(
							'Property "visible" must be a boolean');
						return {
							node: t,
							visible: r
						}
					}))
				}
				return n.prototype = new r, n.prototype.type = "BlockNode", n.prototype
					.isBlockNode = !0, n.prototype._compile = function(e, r) {
						var n = qe(this.blocks, (function(t) {
							return {
								evaluate: t.node._compile(e, r),
								visible: t.visible
							}
						}));
						return function(e, r, i) {
							var a = [];
							return Be(n, (function(t) {
								var n = t.evaluate(e, r, i);
								t.visible && a.push(n)
							})), new t(a)
						}
					}, n.prototype.forEach = function(e) {
						for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node,
							"blocks[" + t + "].node", this)
					}, n.prototype.map = function(e) {
						for (var t = [], r = 0; r < this.blocks.length; r++) {
							var i = this.blocks[r],
								a = this._ifNode(e(i.node, "blocks[" + r + "].node", this));
							t[r] = {
								node: a,
								visible: i.visible
							}
						}
						return new n(t)
					}, n.prototype.clone = function() {
						return new n(this.blocks.map((function(e) {
							return {
								node: e.node,
								visible: e.visible
							}
						})))
					}, n.prototype._toString = function(e) {
						return this.blocks.map((function(t) {
							return t.node.toString(e) + (t.visible ? "" : ";")
						})).join("\n")
					}, n.prototype.toJSON = function() {
						return {
							mathjs: "BlockNode",
							blocks: this.blocks
						}
					}, n.fromJSON = function(e) {
						return new n(e.blocks)
					}, n.prototype.toHTML = function(e) {
						return this.blocks.map((function(t) {
							return t.node.toHTML(e) + (t.visible ? "" :
								'<span class="math-separator">;</span>')
						})).join('<span class="math-separator"><br /></span>')
					}, n.prototype._toTex = function(e) {
						return this.blocks.map((function(t) {
							return t.node.toTex(e) + (t.visible ? "" : ";")
						})).join("\\;\\;\n")
					}, n
			}), {
				isClass: !0,
				isNode: !0
			}),
			Ls = Qe("ConditionalNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e, t, n) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!D(e)) throw new TypeError("Parameter condition must be a Node");
					if (!D(t)) throw new TypeError("Parameter trueExpr must be a Node");
					if (!D(n)) throw new TypeError("Parameter falseExpr must be a Node");
					this.condition = e, this.trueExpr = t, this.falseExpr = n
				}
				return r.prototype = new t, r.prototype.type = "ConditionalNode", r
					.prototype.isConditionalNode = !0, r.prototype._compile = function(e,
					t) {
						var r = this.condition._compile(e, t),
							n = this.trueExpr._compile(e, t),
							i = this.falseExpr._compile(e, t);
						return function(e, t, a) {
							return function(e) {
								if ("number" == typeof e || "boolean" == typeof e ||
									"string" == typeof e) return !!e;
								if (e) {
									if (s(e)) return !e.isZero();
									if (u(e)) return !(!e.re && !e.im);
									if (f(e)) return !!e.value
								}
								if (null == e) return !1;
								throw new TypeError(
									'Unsupported type of condition "' + H(e) +
									'"')
							}(r(e, t, a)) ? n(e, t, a) : i(e, t, a)
						}
					}, r.prototype.forEach = function(e) {
						e(this.condition, "condition", this), e(this.trueExpr, "trueExpr",
							this), e(this.falseExpr, "falseExpr", this)
					}, r.prototype.map = function(e) {
						return new r(this._ifNode(e(this.condition, "condition", this)),
							this._ifNode(e(this.trueExpr, "trueExpr", this)), this
							._ifNode(e(this.falseExpr, "falseExpr", this)))
					}, r.prototype.clone = function() {
						return new r(this.condition, this.trueExpr, this.falseExpr)
					}, r.prototype._toString = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = Ds(this, t),
							n = this.condition.toString(e),
							i = Ds(this.condition, t);
						("all" === t || "OperatorNode" === this.condition.type || null !==
							i && i <= r) && (n = "(" + n + ")");
						var a = this.trueExpr.toString(e),
							o = Ds(this.trueExpr, t);
						("all" === t || "OperatorNode" === this.trueExpr.type || null !==
							o && o <= r) && (a = "(" + a + ")");
						var s = this.falseExpr.toString(e),
							u = Ds(this.falseExpr, t);
						return ("all" === t || "OperatorNode" === this.falseExpr.type ||
								null !== u && u <= r) && (s = "(" + s + ")"), n + " ? " +
							a + " : " + s
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "ConditionalNode",
							condition: this.condition,
							trueExpr: this.trueExpr,
							falseExpr: this.falseExpr
						}
					}, r.fromJSON = function(e) {
						return new r(e.condition, e.trueExpr, e.falseExpr)
					}, r.prototype.toHTML = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = Ds(this, t),
							n = this.condition.toHTML(e),
							i = Ds(this.condition, t);
						("all" === t || "OperatorNode" === this.condition.type || null !==
							i && i <= r) && (n =
							'<span class="math-parenthesis math-round-parenthesis">(</span>' +
							n +
							'<span class="math-parenthesis math-round-parenthesis">)</span>'
							);
						var a = this.trueExpr.toHTML(e),
							o = Ds(this.trueExpr, t);
						("all" === t || "OperatorNode" === this.trueExpr.type || null !==
							o && o <= r) && (a =
							'<span class="math-parenthesis math-round-parenthesis">(</span>' +
							a +
							'<span class="math-parenthesis math-round-parenthesis">)</span>'
							);
						var s = this.falseExpr.toHTML(e),
							u = Ds(this.falseExpr, t);
						return ("all" === t || "OperatorNode" === this.falseExpr.type ||
								null !== u && u <= r) && (s =
								'<span class="math-parenthesis math-round-parenthesis">(</span>' +
								s +
								'<span class="math-parenthesis math-round-parenthesis">)</span>'
								), n +
							'<span class="math-operator math-conditional-operator">?</span>' +
							a +
							'<span class="math-operator math-conditional-operator">:</span>' +
							s
					}, r.prototype._toTex = function(e) {
						return "\\begin{cases} {" + this.trueExpr.toTex(e) +
							"}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) +
							"}\\\\{" + this.falseExpr.toTex(e) +
							"}, &\\quad{\\text{otherwise}}\\end{cases}"
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			$s = r(187),
			Hs = r.n($s),
			Gs = {
				Alpha: "A",
				alpha: "\\alpha",
				Beta: "B",
				beta: "\\beta",
				Gamma: "\\Gamma",
				gamma: "\\gamma",
				Delta: "\\Delta",
				delta: "\\delta",
				Epsilon: "E",
				epsilon: "\\epsilon",
				varepsilon: "\\varepsilon",
				Zeta: "Z",
				zeta: "\\zeta",
				Eta: "H",
				eta: "\\eta",
				Theta: "\\Theta",
				theta: "\\theta",
				vartheta: "\\vartheta",
				Iota: "I",
				iota: "\\iota",
				Kappa: "K",
				kappa: "\\kappa",
				varkappa: "\\varkappa",
				Lambda: "\\Lambda",
				lambda: "\\lambda",
				Mu: "M",
				mu: "\\mu",
				Nu: "N",
				nu: "\\nu",
				Xi: "\\Xi",
				xi: "\\xi",
				Omicron: "O",
				omicron: "o",
				Pi: "\\Pi",
				pi: "\\pi",
				varpi: "\\varpi",
				Rho: "P",
				rho: "\\rho",
				varrho: "\\varrho",
				Sigma: "\\Sigma",
				sigma: "\\sigma",
				varsigma: "\\varsigma",
				Tau: "T",
				tau: "\\tau",
				Upsilon: "\\Upsilon",
				upsilon: "\\upsilon",
				Phi: "\\Phi",
				phi: "\\phi",
				varphi: "\\varphi",
				Chi: "X",
				chi: "\\chi",
				Psi: "\\Psi",
				psi: "\\psi",
				Omega: "\\Omega",
				omega: "\\omega",
				true: "\\mathrm{True}",
				false: "\\mathrm{False}",
				i: "i",
				inf: "\\infty",
				Inf: "\\infty",
				infinity: "\\infty",
				Infinity: "\\infty",
				oo: "\\infty",
				lim: "\\lim",
				undefined: "\\mathbf{?}"
			},
			Vs = {
				transpose: "^\\top",
				ctranspose: "^H",
				factorial: "!",
				pow: "^",
				dotPow: ".^\\wedge",
				unaryPlus: "+",
				unaryMinus: "-",
				bitNot: "\\~",
				not: "\\neg",
				multiply: "\\cdot",
				divide: "\\frac",
				dotMultiply: ".\\cdot",
				dotDivide: ".:",
				mod: "\\mod",
				add: "+",
				subtract: "-",
				to: "\\rightarrow",
				leftShift: "<<",
				rightArithShift: ">>",
				rightLogShift: ">>>",
				equal: "=",
				unequal: "\\neq",
				smaller: "<",
				larger: ">",
				smallerEq: "\\leq",
				largerEq: "\\geq",
				bitAnd: "\\&",
				bitXor: "\\underline{|}",
				bitOr: "|",
				and: "\\wedge",
				xor: "\\veebar",
				or: "\\vee"
			},
			Zs = {
				abs: {
					1: "\\left|${args[0]}\\right|"
				},
				add: {
					2: "\\left(${args[0]}".concat(Vs.add, "${args[1]}\\right)")
				},
				cbrt: {
					1: "\\sqrt[3]{${args[0]}}"
				},
				ceil: {
					1: "\\left\\lceil${args[0]}\\right\\rceil"
				},
				cube: {
					1: "\\left(${args[0]}\\right)^3"
				},
				divide: {
					2: "\\frac{${args[0]}}{${args[1]}}"
				},
				dotDivide: {
					2: "\\left(${args[0]}".concat(Vs.dotDivide, "${args[1]}\\right)")
				},
				dotMultiply: {
					2: "\\left(${args[0]}".concat(Vs.dotMultiply, "${args[1]}\\right)")
				},
				dotPow: {
					2: "\\left(${args[0]}".concat(Vs.dotPow, "${args[1]}\\right)")
				},
				exp: {
					1: "\\exp\\left(${args[0]}\\right)"
				},
				expm1: "\\left(e".concat(Vs.pow, "{${args[0]}}-1\\right)"),
				fix: {
					1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
				},
				floor: {
					1: "\\left\\lfloor${args[0]}\\right\\rfloor"
				},
				gcd: "\\gcd\\left(${args}\\right)",
				hypot: "\\hypot\\left(${args}\\right)",
				log: {
					1: "\\ln\\left(${args[0]}\\right)",
					2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
				},
				log10: {
					1: "\\log_{10}\\left(${args[0]}\\right)"
				},
				log1p: {
					1: "\\ln\\left(${args[0]}+1\\right)",
					2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
				},
				log2: "\\log_{2}\\left(${args[0]}\\right)",
				mod: {
					2: "\\left(${args[0]}".concat(Vs.mod, "${args[1]}\\right)")
				},
				multiply: {
					2: "\\left(${args[0]}".concat(Vs.multiply, "${args[1]}\\right)")
				},
				norm: {
					1: "\\left\\|${args[0]}\\right\\|",
					2: void 0
				},
				nthRoot: {
					2: "\\sqrt[${args[1]}]{${args[0]}}"
				},
				nthRoots: {
					2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
				},
				pow: {
					2: "\\left(${args[0]}\\right)".concat(Vs.pow, "{${args[1]}}")
				},
				round: {
					1: "\\left\\lfloor${args[0]}\\right\\rceil",
					2: void 0
				},
				sign: {
					1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
				},
				sqrt: {
					1: "\\sqrt{${args[0]}}"
				},
				square: {
					1: "\\left(${args[0]}\\right)^2"
				},
				subtract: {
					2: "\\left(${args[0]}".concat(Vs.subtract, "${args[1]}\\right)")
				},
				unaryMinus: {
					1: "".concat(Vs.unaryMinus, "\\left(${args[0]}\\right)")
				},
				unaryPlus: {
					1: "".concat(Vs.unaryPlus, "\\left(${args[0]}\\right)")
				},
				bitAnd: {
					2: "\\left(${args[0]}".concat(Vs.bitAnd, "${args[1]}\\right)")
				},
				bitNot: {
					1: Vs.bitNot + "\\left(${args[0]}\\right)"
				},
				bitOr: {
					2: "\\left(${args[0]}".concat(Vs.bitOr, "${args[1]}\\right)")
				},
				bitXor: {
					2: "\\left(${args[0]}".concat(Vs.bitXor, "${args[1]}\\right)")
				},
				leftShift: {
					2: "\\left(${args[0]}".concat(Vs.leftShift, "${args[1]}\\right)")
				},
				rightArithShift: {
					2: "\\left(${args[0]}".concat(Vs.rightArithShift, "${args[1]}\\right)")
				},
				rightLogShift: {
					2: "\\left(${args[0]}".concat(Vs.rightLogShift, "${args[1]}\\right)")
				},
				bellNumbers: {
					1: "\\mathrm{B}_{${args[0]}}"
				},
				catalan: {
					1: "\\mathrm{C}_{${args[0]}}"
				},
				stirlingS2: {
					2: "\\mathrm{S}\\left(${args}\\right)"
				},
				arg: {
					1: "\\arg\\left(${args[0]}\\right)"
				},
				conj: {
					1: "\\left(${args[0]}\\right)^*"
				},
				im: {
					1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
				},
				re: {
					1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
				},
				and: {
					2: "\\left(${args[0]}".concat(Vs.and, "${args[1]}\\right)")
				},
				not: {
					1: Vs.not + "\\left(${args[0]}\\right)"
				},
				or: {
					2: "\\left(${args[0]}".concat(Vs.or, "${args[1]}\\right)")
				},
				xor: {
					2: "\\left(${args[0]}".concat(Vs.xor, "${args[1]}\\right)")
				},
				cross: {
					2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
				},
				ctranspose: {
					1: "\\left(${args[0]}\\right)".concat(Vs.ctranspose)
				},
				det: {
					1: "\\det\\left(${args[0]}\\right)"
				},
				dot: {
					2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
				},
				expm: {
					1: "\\exp\\left(${args[0]}\\right)"
				},
				inv: {
					1: "\\left(${args[0]}\\right)^{-1}"
				},
				sqrtm: {
					1: "{${args[0]}}".concat(Vs.pow, "{\\frac{1}{2}}")
				},
				trace: {
					1: "\\mathrm{tr}\\left(${args[0]}\\right)"
				},
				transpose: {
					1: "\\left(${args[0]}\\right)".concat(Vs.transpose)
				},
				combinations: {
					2: "\\binom{${args[0]}}{${args[1]}}"
				},
				combinationsWithRep: {
					2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"
				},
				factorial: {
					1: "\\left(${args[0]}\\right)".concat(Vs.factorial)
				},
				gamma: {
					1: "\\Gamma\\left(${args[0]}\\right)"
				},
				equal: {
					2: "\\left(${args[0]}".concat(Vs.equal, "${args[1]}\\right)")
				},
				larger: {
					2: "\\left(${args[0]}".concat(Vs.larger, "${args[1]}\\right)")
				},
				largerEq: {
					2: "\\left(${args[0]}".concat(Vs.largerEq, "${args[1]}\\right)")
				},
				smaller: {
					2: "\\left(${args[0]}".concat(Vs.smaller, "${args[1]}\\right)")
				},
				smallerEq: {
					2: "\\left(${args[0]}".concat(Vs.smallerEq, "${args[1]}\\right)")
				},
				unequal: {
					2: "\\left(${args[0]}".concat(Vs.unequal, "${args[1]}\\right)")
				},
				erf: {
					1: "erf\\left(${args[0]}\\right)"
				},
				max: "\\max\\left(${args}\\right)",
				min: "\\min\\left(${args}\\right)",
				variance: "\\mathrm{Var}\\left(${args}\\right)",
				acos: {
					1: "\\cos^{-1}\\left(${args[0]}\\right)"
				},
				acosh: {
					1: "\\cosh^{-1}\\left(${args[0]}\\right)"
				},
				acot: {
					1: "\\cot^{-1}\\left(${args[0]}\\right)"
				},
				acoth: {
					1: "\\coth^{-1}\\left(${args[0]}\\right)"
				},
				acsc: {
					1: "\\csc^{-1}\\left(${args[0]}\\right)"
				},
				acsch: {
					1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
				},
				asec: {
					1: "\\sec^{-1}\\left(${args[0]}\\right)"
				},
				asech: {
					1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
				},
				asin: {
					1: "\\sin^{-1}\\left(${args[0]}\\right)"
				},
				asinh: {
					1: "\\sinh^{-1}\\left(${args[0]}\\right)"
				},
				atan: {
					1: "\\tan^{-1}\\left(${args[0]}\\right)"
				},
				atan2: {
					2: "\\mathrm{atan2}\\left(${args}\\right)"
				},
				atanh: {
					1: "\\tanh^{-1}\\left(${args[0]}\\right)"
				},
				cos: {
					1: "\\cos\\left(${args[0]}\\right)"
				},
				cosh: {
					1: "\\cosh\\left(${args[0]}\\right)"
				},
				cot: {
					1: "\\cot\\left(${args[0]}\\right)"
				},
				coth: {
					1: "\\coth\\left(${args[0]}\\right)"
				},
				csc: {
					1: "\\csc\\left(${args[0]}\\right)"
				},
				csch: {
					1: "\\mathrm{csch}\\left(${args[0]}\\right)"
				},
				sec: {
					1: "\\sec\\left(${args[0]}\\right)"
				},
				sech: {
					1: "\\mathrm{sech}\\left(${args[0]}\\right)"
				},
				sin: {
					1: "\\sin\\left(${args[0]}\\right)"
				},
				sinh: {
					1: "\\sinh\\left(${args[0]}\\right)"
				},
				tan: {
					1: "\\tan\\left(${args[0]}\\right)"
				},
				tanh: {
					1: "\\tanh\\left(${args[0]}\\right)"
				},
				to: {
					2: "\\left(${args[0]}".concat(Vs.to, "${args[1]}\\right)")
				},
				numeric: function(e, t) {
					return e.args[0].toTex()
				},
				number: {
					0: "0",
					1: "\\left(${args[0]}\\right)",
					2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
				},
				string: {
					0: '\\mathtt{""}',
					1: "\\mathrm{string}\\left(${args[0]}\\right)"
				},
				bignumber: {
					0: "0",
					1: "\\left(${args[0]}\\right)"
				},
				complex: {
					0: "0",
					1: "\\left(${args[0]}\\right)",
					2: "\\left(\\left(${args[0]}\\right)+".concat(Gs.i,
						"\\cdot\\left(${args[1]}\\right)\\right)")
				},
				matrix: {
					0: "\\begin{bmatrix}\\end{bmatrix}",
					1: "\\left(${args[0]}\\right)",
					2: "\\left(${args[0]}\\right)"
				},
				sparse: {
					0: "\\begin{bsparse}\\end{bsparse}",
					1: "\\left(${args[0]}\\right)"
				},
				unit: {
					1: "\\left(${args[0]}\\right)",
					2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
				}
			},
			Ws = {
				deg: "^\\circ"
			};

		function Ys(e) {
			return Hs()(e, {
				preserveFormatting: !0
			})
		}

		function Js(e, t) {
			return (t = void 0 !== t && t) ? Je(Ws, e) ? Ws[e] : "\\mathrm{" + Ys(e) + "}" : Je(Gs,
				e) ? Gs[e] : Ys(e)
		}
		var Xs = Qe("ConstantNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					this.value = e
				}
				return r.prototype = new t, r.prototype.type = "ConstantNode", r.prototype
					.isConstantNode = !0, r.prototype._compile = function(e, t) {
						var r = this.value;
						return function() {
							return r
						}
					}, r.prototype.forEach = function(e) {}, r.prototype.map = function(e) {
						return this.clone()
					}, r.prototype.clone = function() {
						return new r(this.value)
					}, r.prototype._toString = function(e) {
						return xe(this.value, e)
					}, r.prototype.toHTML = function(e) {
						var t = this._toString(e);
						switch (H(this.value)) {
							case "number":
							case "BigNumber":
							case "Fraction":
								return '<span class="math-number">' + t + "</span>";
							case "string":
								return '<span class="math-string">' + t + "</span>";
							case "boolean":
								return '<span class="math-boolean">' + t + "</span>";
							case "null":
								return '<span class="math-null-symbol">' + t + "</span>";
							case "undefined":
								return '<span class="math-undefined">' + t + "</span>";
							default:
								return '<span class="math-symbol">' + t + "</span>"
						}
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "ConstantNode",
							value: this.value
						}
					}, r.fromJSON = function(e) {
						return new r(e.value)
					}, r.prototype._toTex = function(e) {
						var t = this._toString(e);
						switch (H(this.value)) {
							case "string":
								return "\\mathtt{" + Ys(t) + "}";
							case "number":
							case "BigNumber":
								if (!isFinite(this.value)) return this.value.valueOf() < 0 ?
									"-\\infty" : "\\infty";
								var r = t.toLowerCase().indexOf("e");
								return -1 !== r ? t.substring(0, r) + "\\cdot10^{" + t
									.substring(r + 1) + "}" : t;
							case "Fraction":
								return this.value.toLatex();
							default:
								return t
						}
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			Qs = Qe("FunctionAssignmentNode", ["typed", "Node"], (function(e) {
				var t = e.typed,
					r = e.Node;

				function n(e, t, r) {
					if (!(this instanceof n)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if ("string" != typeof e) throw new TypeError(
						'String expected for parameter "name"');
					if (!Array.isArray(t)) throw new TypeError(
						'Array containing strings or objects expected for parameter "params"'
						);
					if (!D(r)) throw new TypeError('Node expected for parameter "expr"');
					if (Ts.has(e)) throw new Error('Illegal function name, "' + e +
						'" is a reserved keyword');
					this.name = e, this.params = t.map((function(e) {
						return e && e.name || e
					})), this.types = t.map((function(e) {
						return e && e.type || "any"
					})), this.expr = r
				}

				function i(e, t) {
					var r = Ds(e, t),
						n = Ds(e.expr, t);
					return "all" === t || null !== n && n <= r
				}
				return n.prototype = new r, n.prototype.type = "FunctionAssignmentNode", n
					.prototype.isFunctionAssignmentNode = !0, n.prototype._compile =
					function(e, r) {
						var n = Object.create(r);
						Be(this.params, (function(e) {
							n[e] = !0
						}));
						var i = this.expr._compile(e, n),
							a = this.name,
							o = this.params,
							s = Pe(this.types, ","),
							u = a + "(" + Pe(this.params, ", ") + ")";
						return function(e, r, n) {
							var c = {};
							c[s] = function() {
								for (var t = Object.create(r), a = 0; a < o
									.length; a++) t[o[a]] = arguments[a];
								return i(e, t, n)
							};
							var f = t(a, c);
							return f.syntax = u, e.set(a, f), f
						}
					}, n.prototype.forEach = function(e) {
						e(this.expr, "expr", this)
					}, n.prototype.map = function(e) {
						var t = this._ifNode(e(this.expr, "expr", this));
						return new n(this.name, this.params.slice(0), t)
					}, n.prototype.clone = function() {
						return new n(this.name, this.params.slice(0), this.expr)
					}, n.prototype._toString = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = this.expr.toString(e);
						return i(this, t) && (r = "(" + r + ")"), this.name + "(" + this
							.params.join(", ") + ") = " + r
					}, n.prototype.toJSON = function() {
						var e = this.types;
						return {
							mathjs: "FunctionAssignmentNode",
							name: this.name,
							params: this.params.map((function(t, r) {
								return {
									name: t,
									type: e[r]
								}
							})),
							expr: this.expr
						}
					}, n.fromJSON = function(e) {
						return new n(e.name, e.params, e.expr)
					}, n.prototype.toHTML = function(e) {
						for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = [],
								n = 0; n < this.params.length; n++) r.push(
							'<span class="math-symbol math-parameter">' + we(this
								.params[n]) + "</span>");
						var a = this.expr.toHTML(e);
						return i(this, t) && (a =
								'<span class="math-parenthesis math-round-parenthesis">(</span>' +
								a +
								'<span class="math-parenthesis math-round-parenthesis">)</span>'
								), '<span class="math-function">' + we(this.name) +
							'</span><span class="math-parenthesis math-round-parenthesis">(</span>' +
							r.join('<span class="math-separator">,</span>') +
							'<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' +
							a
					}, n.prototype._toTex = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = this.expr.toTex(e);
						return i(this, t) && (r = "\\left(".concat(r, "\\right)")),
							"\\mathrm{" + this.name + "}\\left(" + this.params.map(Js).join(
								",") + "\\right):=" + r
					}, n
			}), {
				isClass: !0,
				isNode: !0
			}),
			Ks = Qe("IndexNode", ["Range", "Node", "size"], (function(e) {
				var t = e.Range,
					r = e.Node,
					n = e.size;

				function i(e, t) {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (this.dimensions = e, this.dotNotation = t || !1, !Array.isArray(
						e) || !e.every(D)) throw new TypeError(
						'Array containing Nodes expected for parameter "dimensions"'
						);
					if (this.dotNotation && !this.isObjectProperty()) throw new Error(
						"dotNotation only applicable for object properties")
				}

				function a(e, r, n) {
					return new t(s(e) ? e.toNumber() : e, s(r) ? r.toNumber() : r, s(n) ? n
						.toNumber() : n)
				}
				return i.prototype = new r, i.prototype.type = "IndexNode", i.prototype
					.isIndexNode = !0, i.prototype._compile = function(e, t) {
						var r = qe(this.dimensions, (function(r, i) {
								if (U(r)) {
									if (r.needsEnd()) {
										var o = Object.create(t);
										o.end = !0;
										var s = r.start._compile(e, o),
											u = r.end._compile(e, o),
											c = r.step ? r.step._compile(e, o) :
											function() {
												return 1
											};
										return function(e, t, r) {
											var o = n(r).valueOf(),
												f = Object.create(t);
											return f.end = o[i], a(s(e, f, r),
												u(e, f, r), c(e, f, r))
										}
									}
									var f = r.start._compile(e, t),
										l = r.end._compile(e, t),
										p = r.step ? r.step._compile(e, t) :
										function() {
											return 1
										};
									return function(e, t, r) {
										return a(f(e, t, r), l(e, t, r), p(e, t,
											r))
									}
								}
								if (L(r) && "end" === r.name) {
									var m = Object.create(t);
									m.end = !0;
									var h = r._compile(e, m);
									return function(e, t, r) {
										var a = n(r).valueOf(),
											o = Object.create(t);
										return o.end = a[i], h(e, o, r)
									}
								}
								var d = r._compile(e, t);
								return function(e, t, r) {
									return d(e, t, r)
								}
							})),
							i = at(e, "index");
						return function(e, t, n) {
							var a = qe(r, (function(r) {
								return r(e, t, n)
							}));
							return i.apply(void 0, ja()(a))
						}
					}, i.prototype.forEach = function(e) {
						for (var t = 0; t < this.dimensions.length; t++) e(this.dimensions[
							t], "dimensions[" + t + "]", this)
					}, i.prototype.map = function(e) {
						for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this
							._ifNode(e(this.dimensions[r], "dimensions[" + r + "]", this));
						return new i(t, this.dotNotation)
					}, i.prototype.clone = function() {
						return new i(this.dimensions.slice(0), this.dotNotation)
					}, i.prototype.isObjectProperty = function() {
						return 1 === this.dimensions.length && z(this.dimensions[0]) &&
							"string" == typeof this.dimensions[0].value
					}, i.prototype.getObjectProperty = function() {
						return this.isObjectProperty() ? this.dimensions[0].value : null
					}, i.prototype._toString = function(e) {
						return this.dotNotation ? "." + this.getObjectProperty() : "[" +
							this.dimensions.join(", ") + "]"
					}, i.prototype.toJSON = function() {
						return {
							mathjs: "IndexNode",
							dimensions: this.dimensions,
							dotNotation: this.dotNotation
						}
					}, i.fromJSON = function(e) {
						return new i(e.dimensions, e.dotNotation)
					}, i.prototype.toHTML = function(e) {
						for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this
							.dimensions[r].toHTML();
						return this.dotNotation ?
							'<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' +
							we(this.getObjectProperty()) + "</span>" :
							'<span class="math-parenthesis math-square-parenthesis">[</span>' +
							t.join('<span class="math-separator">,</span>') +
							'<span class="math-parenthesis math-square-parenthesis">]</span>'
					}, i.prototype._toTex = function(e) {
						var t = this.dimensions.map((function(t) {
							return t.toTex(e)
						}));
						return this.dotNotation ? "." + this.getObjectProperty() : "_{" + t
							.join(",") + "}"
					}, i
			}), {
				isClass: !0,
				isNode: !0
			}),
			eu = Qe("ObjectNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (this.properties = e || {}, e && ("object" !== a()(e) || !Object
							.keys(e).every((function(t) {
								return D(e[t])
							})))) throw new TypeError("Object containing Nodes expected")
				}
				return r.prototype = new t, r.prototype.type = "ObjectNode", r.prototype
					.isObjectNode = !0, r.prototype._compile = function(e, t) {
						var r = {};
						for (var n in this.properties)
							if (Je(this.properties, n)) {
								var i = be(n),
									a = JSON.parse(i);
								if (!st(this.properties, a)) throw new Error(
									'No access to property "' + a + '"');
								r[a] = this.properties[n]._compile(e, t)
							} return function(e, t, n) {
							var i = {};
							for (var a in r) Je(r, a) && (i[a] = r[a](e, t, n));
							return i
						}
					}, r.prototype.forEach = function(e) {
						for (var t in this.properties) Je(this.properties, t) && e(this
							.properties[t], "properties[" + be(t) + "]", this)
					}, r.prototype.map = function(e) {
						var t = {};
						for (var n in this.properties) Je(this.properties, n) && (t[n] =
							this._ifNode(e(this.properties[n], "properties[" + be(n) +
								"]", this)));
						return new r(t)
					}, r.prototype.clone = function() {
						var e = {};
						for (var t in this.properties) Je(this.properties, t) && (e[t] =
							this.properties[t]);
						return new r(e)
					}, r.prototype._toString = function(e) {
						var t = [];
						for (var r in this.properties) Je(this.properties, r) && t.push(be(
							r) + ": " + this.properties[r].toString(e));
						return "{" + t.join(", ") + "}"
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "ObjectNode",
							properties: this.properties
						}
					}, r.fromJSON = function(e) {
						return new r(e.properties)
					}, r.prototype.toHTML = function(e) {
						var t = [];
						for (var r in this.properties) Je(this.properties, r) && t.push(
							'<span class="math-symbol math-property">' + we(r) +
							'</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' +
							this.properties[r].toHTML(e));
						return '<span class="math-parenthesis math-curly-parenthesis">{</span>' +
							t.join('<span class="math-separator">,</span>') +
							'<span class="math-parenthesis math-curly-parenthesis">}</span>'
					}, r.prototype._toTex = function(e) {
						var t = [];
						for (var r in this.properties) Je(this.properties, r) && t.push(
							"\\mathbf{" + r + ":} & " + this.properties[r].toTex(e) +
							"\\\\");
						return "\\left\\{\\begin{array}{ll}".concat(t.join("\n"),
							"\\end{array}\\right\\}")
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			tu = Qe("OperatorNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e, t, n, i, a) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if ("string" != typeof e) throw new TypeError(
						'string expected for parameter "op"');
					if ("string" != typeof t) throw new TypeError(
						'string expected for parameter "fn"');
					if (!Array.isArray(n) || !n.every(D)) throw new TypeError(
						'Array containing Nodes expected for parameter "args"');
					this.implicit = !0 === i, this.isPercentage = !0 === a, this.op = e,
						this.fn = t, this.args = n || []
				}

				function n(e, t, r, n, i) {
					var a, o = Ds(e, t),
						s = js(e, t);
					if ("all" === t || n.length > 2 && "OperatorNode:add" !== e
						.getIdentifier() && "OperatorNode:multiply" !== e.getIdentifier())
						return n.map((function(e) {
							switch (e.getContent().type) {
								case "ArrayNode":
								case "ConstantNode":
								case "SymbolNode":
								case "ParenthesisNode":
									return !1;
								default:
									return !0
							}
						}));
					switch (n.length) {
						case 0:
							a = [];
							break;
						case 1:
							var u = Ds(n[0], t);
							if (i && null !== u) {
								var c, f;
								if ("keep" === t ? (c = n[0].getIdentifier(), f = e
										.getIdentifier()) : (c = n[0].getContent()
										.getIdentifier(), f = e.getContent().getIdentifier()
										), !1 === Bs[o][f].latexLeftParens) {
									a = [!1];
									break
								}
								if (!1 === Bs[u][c].latexParens) {
									a = [!1];
									break
								}
							}
							if (null === u) {
								a = [!1];
								break
							}
							if (u <= o) {
								a = [!0];
								break
							}
							a = [!1];
							break;
						case 2:
							var l, p, m = Ds(n[0], t),
								h = Ps(e, n[0], t);
							l = null !== m && (m === o && "right" === s && !h || m < o);
							var d, v, y, g = Ds(n[1], t),
								x = Ps(e, n[1], t);
							if (p = null !== g && (g === o && "left" === s && !x || g < o),
								i) "keep" === t ? (d = e.getIdentifier(), v = e.args[0]
								.getIdentifier(), y = e.args[1].getIdentifier()) : (d =
								e.getContent().getIdentifier(), v = e.args[0]
								.getContent().getIdentifier(), y = e.args[1]
								.getContent().getIdentifier()), null !== m && (!1 ===
								Bs[o][d].latexLeftParens && (l = !1), !1 === Bs[m][v]
								.latexParens && (l = !1)), null !== g && (!1 === Bs[o][
									d].latexRightParens && (p = !1), !1 === Bs[g][y]
								.latexParens && (p = !1));
							a = [l, p];
							break;
						default:
							"OperatorNode:add" !== e.getIdentifier() &&
								"OperatorNode:multiply" !== e.getIdentifier() || (a = n.map(
									(function(r) {
										var n = Ds(r, t),
											i = Ps(e, r, t),
											a = js(r, t);
										return null !== n && (o === n && s === a &&
											!i || n < o)
									})))
					}
					return n.length >= 2 && "OperatorNode:multiply" === e.getIdentifier() &&
						e.implicit && "auto" === t && "hide" === r && (a = n.map((function(
							e, t) {
							var r = "ParenthesisNode" === e.getIdentifier();
							return !(!a[t] && !r)
						}))), a
				}
				return r.prototype = new t, r.prototype.type = "OperatorNode", r.prototype
					.isOperatorNode = !0, r.prototype._compile = function(e, t) {
						if ("string" != typeof this.fn || !ut(e, this.fn)) throw e[this
							.fn] ? new Error('No access to function "' + this.fn +
							'"') : new Error("Function " + this.fn +
								' missing in provided namespace "math"');
						var r = at(e, this.fn),
							n = qe(this.args, (function(r) {
								return r._compile(e, t)
							}));
						if (1 === n.length) {
							var i = n[0];
							return function(e, t, n) {
								return r(i(e, t, n))
							}
						}
						if (2 === n.length) {
							var a = n[0],
								o = n[1];
							return function(e, t, n) {
								return r(a(e, t, n), o(e, t, n))
							}
						}
						return function(e, t, i) {
							return r.apply(null, qe(n, (function(r) {
								return r(e, t, i)
							})))
						}
					}, r.prototype.forEach = function(e) {
						for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" +
							t + "]", this)
					}, r.prototype.map = function(e) {
						for (var t = [], n = 0; n < this.args.length; n++) t[n] = this
							._ifNode(e(this.args[n], "args[" + n + "]", this));
						return new r(this.op, this.fn, t, this.implicit, this.isPercentage)
					}, r.prototype.clone = function() {
						return new r(this.op, this.fn, this.args.slice(0), this.implicit,
							this.isPercentage)
					}, r.prototype.isUnary = function() {
						return 1 === this.args.length
					}, r.prototype.isBinary = function() {
						return 2 === this.args.length
					}, r.prototype._toString = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = e && e.implicit ? e.implicit : "hide",
							i = this.args,
							a = n(this, t, r, i, !1);
						if (1 === i.length) {
							var o = js(this, t),
								s = i[0].toString(e);
							a[0] && (s = "(" + s + ")");
							var u = /[a-zA-Z]+/.test(this.op);
							return "right" === o ? this.op + (u ? " " : "") + s : "left" ===
								o ? s + (u ? " " : "") + this.op : s + this.op
						}
						if (2 === i.length) {
							var c = i[0].toString(e),
								f = i[1].toString(e);
							return a[0] && (c = "(" + c + ")"), a[1] && (f = "(" + f + ")"),
								this.implicit && "OperatorNode:multiply" === this
								.getIdentifier() && "hide" === r ? c + " " + f : c + " " +
								this.op + " " + f
						}
						if (i.length > 2 && ("OperatorNode:add" === this.getIdentifier() ||
								"OperatorNode:multiply" === this.getIdentifier())) {
							var l = i.map((function(t, r) {
								return t = t.toString(e), a[r] && (t = "(" + t +
									")"), t
							}));
							return this.implicit && "OperatorNode:multiply" === this
								.getIdentifier() && "hide" === r ? l.join(" ") : l.join(
									" " + this.op + " ")
						}
						return this.fn + "(" + this.args.join(", ") + ")"
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "OperatorNode",
							op: this.op,
							fn: this.fn,
							args: this.args,
							implicit: this.implicit,
							isPercentage: this.isPercentage
						}
					}, r.fromJSON = function(e) {
						return new r(e.op, e.fn, e.args, e.implicit, e.isPercentage)
					}, r.prototype.toHTML = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = e && e.implicit ? e.implicit : "hide",
							i = this.args,
							a = n(this, t, r, i, !1);
						if (1 === i.length) {
							var o = js(this, t),
								s = i[0].toHTML(e);
							return a[0] && (s =
									'<span class="math-parenthesis math-round-parenthesis">(</span>' +
									s +
									'<span class="math-parenthesis math-round-parenthesis">)</span>'
									), "right" === o ?
								'<span class="math-operator math-unary-operator math-lefthand-unary-operator">' +
								we(this.op) + "</span>" + s : s +
								'<span class="math-operator math-unary-operator math-righthand-unary-operator">' +
								we(this.op) + "</span>"
						}
						if (2 === i.length) {
							var u = i[0].toHTML(e),
								c = i[1].toHTML(e);
							return a[0] && (u =
									'<span class="math-parenthesis math-round-parenthesis">(</span>' +
									u +
									'<span class="math-parenthesis math-round-parenthesis">)</span>'
									), a[1] && (c =
									'<span class="math-parenthesis math-round-parenthesis">(</span>' +
									c +
									'<span class="math-parenthesis math-round-parenthesis">)</span>'
									), this.implicit && "OperatorNode:multiply" === this
								.getIdentifier() && "hide" === r ? u +
								'<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' +
								c : u +
								'<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
								we(this.op) + "</span>" + c
						}
						var f = i.map((function(t, r) {
							return t = t.toHTML(e), a[r] && (t =
								'<span class="math-parenthesis math-round-parenthesis">(</span>' +
								t +
								'<span class="math-parenthesis math-round-parenthesis">)</span>'
								), t
						}));
						return i.length > 2 && ("OperatorNode:add" === this
							.getIdentifier() || "OperatorNode:multiply" === this
								.getIdentifier()) ? this.implicit &&
							"OperatorNode:multiply" === this.getIdentifier() && "hide" ===
							r ? f.join(
								'<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>'
								) : f.join(
								'<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
								we(this.op) + "</span>") : '<span class="math-function">' +
							we(this.fn) +
							'</span><span class="math-paranthesis math-round-parenthesis">(</span>' +
							f.join('<span class="math-separator">,</span>') +
							'<span class="math-paranthesis math-round-parenthesis">)</span>'
					}, r.prototype._toTex = function(e) {
						var t = e && e.parenthesis ? e.parenthesis : "keep",
							r = e && e.implicit ? e.implicit : "hide",
							i = this.args,
							a = n(this, t, r, i, !0),
							o = Vs[this.fn];
						if (o = void 0 === o ? this.op : o, 1 === i.length) {
							var s = js(this, t),
								u = i[0].toTex(e);
							return a[0] && (u = "\\left(".concat(u, "\\right)")),
								"right" === s ? o + u : u + o
						}
						if (2 === i.length) {
							var c = i[0],
								f = c.toTex(e);
							a[0] && (f = "\\left(".concat(f, "\\right)"));
							var l, p = i[1].toTex(e);
							switch (a[1] && (p = "\\left(".concat(p, "\\right)")), l =
								"keep" === t ? c.getIdentifier() : c.getContent()
								.getIdentifier(), this.getIdentifier()) {
								case "OperatorNode:divide":
									return o + "{" + f + "}{" + p + "}";
								case "OperatorNode:pow":
									switch (f = "{" + f + "}", p = "{" + p + "}", l) {
										case "ConditionalNode":
										case "OperatorNode:divide":
											f = "\\left(".concat(f, "\\right)")
									}
									break;
								case "OperatorNode:multiply":
									if (this.implicit && "hide" === r) return f + "~" + p
							}
							return f + o + p
						}
						if (i.length > 2 && ("OperatorNode:add" === this.getIdentifier() ||
								"OperatorNode:multiply" === this.getIdentifier())) {
							var m = i.map((function(t, r) {
								return t = t.toTex(e), a[r] && (t = "\\left("
									.concat(t, "\\right)")), t
							}));
							return "OperatorNode:multiply" === this.getIdentifier() && this
								.implicit ? m.join("~") : m.join(o)
						}
						return "\\mathrm{" + this.fn + "}\\left(" + i.map((function(t) {
							return t.toTex(e)
						})).join(",") + "\\right)"
					}, r.prototype.getIdentifier = function() {
						return this.type + ":" + this.fn
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			ru = Qe("ParenthesisNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!D(e)) throw new TypeError('Node expected for parameter "content"');
					this.content = e
				}
				return r.prototype = new t, r.prototype.type = "ParenthesisNode", r
					.prototype.isParenthesisNode = !0, r.prototype._compile = function(e,
					t) {
						return this.content._compile(e, t)
					}, r.prototype.getContent = function() {
						return this.content.getContent()
					}, r.prototype.forEach = function(e) {
						e(this.content, "content", this)
					}, r.prototype.map = function(e) {
						return new r(e(this.content, "content", this))
					}, r.prototype.clone = function() {
						return new r(this.content)
					}, r.prototype._toString = function(e) {
						return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ?
							"(" + this.content.toString(e) + ")" : this.content.toString(e)
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "ParenthesisNode",
							content: this.content
						}
					}, r.fromJSON = function(e) {
						return new r(e.content)
					}, r.prototype.toHTML = function(e) {
						return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ?
							'<span class="math-parenthesis math-round-parenthesis">(</span>' +
							this.content.toHTML(e) +
							'<span class="math-parenthesis math-round-parenthesis">)</span>' :
							this.content.toHTML(e)
					}, r.prototype._toTex = function(e) {
						return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ?
							"\\left(".concat(this.content.toTex(e), "\\right)") : this
							.content.toTex(e)
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			nu = Qe("RangeNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e, t, n) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!D(e)) throw new TypeError("Node expected");
					if (!D(t)) throw new TypeError("Node expected");
					if (n && !D(n)) throw new TypeError("Node expected");
					if (arguments.length > 3) throw new Error("Too many arguments");
					this.start = e, this.end = t, this.step = n || null
				}

				function n(e, t) {
					var r = Ds(e, t),
						n = {},
						i = Ds(e.start, t);
					if (n.start = null !== i && i <= r || "all" === t, e.step) {
						var a = Ds(e.step, t);
						n.step = null !== a && a <= r || "all" === t
					}
					var o = Ds(e.end, t);
					return n.end = null !== o && o <= r || "all" === t, n
				}
				return r.prototype = new t, r.prototype.type = "RangeNode", r.prototype
					.isRangeNode = !0, r.prototype.needsEnd = function() {
						return this.filter((function(e) {
							return L(e) && "end" === e.name
						})).length > 0
					}, r.prototype._compile = function(e, t) {
						var r = e.range,
							n = this.start._compile(e, t),
							i = this.end._compile(e, t);
						if (this.step) {
							var a = this.step._compile(e, t);
							return function(e, t, o) {
								return r(n(e, t, o), i(e, t, o), a(e, t, o))
							}
						}
						return function(e, t, a) {
							return r(n(e, t, a), i(e, t, a))
						}
					}, r.prototype.forEach = function(e) {
						e(this.start, "start", this), e(this.end, "end", this), this.step &&
							e(this.step, "step", this)
					}, r.prototype.map = function(e) {
						return new r(this._ifNode(e(this.start, "start", this)), this
							._ifNode(e(this.end, "end", this)), this.step && this
							._ifNode(e(this.step, "step", this)))
					}, r.prototype.clone = function() {
						return new r(this.start, this.end, this.step && this.step)
					}, r.prototype._toString = function(e) {
						var t, r = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
							i = this.start.toString(e);
						if (r.start && (i = "(" + i + ")"), t = i, this.step) {
							var a = this.step.toString(e);
							r.step && (a = "(" + a + ")"), t += ":" + a
						}
						var o = this.end.toString(e);
						return r.end && (o = "(" + o + ")"), t += ":" + o
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "RangeNode",
							start: this.start,
							end: this.end,
							step: this.step
						}
					}, r.fromJSON = function(e) {
						return new r(e.start, e.end, e.step)
					}, r.prototype.toHTML = function(e) {
						var t, r = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
							i = this.start.toHTML(e);
						if (r.start && (i =
								'<span class="math-parenthesis math-round-parenthesis">(</span>' +
								i +
								'<span class="math-parenthesis math-round-parenthesis">)</span>'
								), t = i, this.step) {
							var a = this.step.toHTML(e);
							r.step && (a =
									'<span class="math-parenthesis math-round-parenthesis">(</span>' +
									a +
									'<span class="math-parenthesis math-round-parenthesis">)</span>'
									), t +=
								'<span class="math-operator math-range-operator">:</span>' +
								a
						}
						var o = this.end.toHTML(e);
						return r.end && (o =
								'<span class="math-parenthesis math-round-parenthesis">(</span>' +
								o +
								'<span class="math-parenthesis math-round-parenthesis">)</span>'
								), t +=
							'<span class="math-operator math-range-operator">:</span>' + o
					}, r.prototype._toTex = function(e) {
						var t = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
							r = this.start.toTex(e);
						if (t.start && (r = "\\left(".concat(r, "\\right)")), this.step) {
							var i = this.step.toTex(e);
							t.step && (i = "\\left(".concat(i, "\\right)")), r += ":" + i
						}
						var a = this.end.toTex(e);
						return t.end && (a = "\\left(".concat(a, "\\right)")), r += ":" + a
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			iu = Qe("RelationalNode", ["Node"], (function(e) {
				var t = e.Node;

				function r(e, t) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!Array.isArray(e)) throw new TypeError(
						"Parameter conditionals must be an array");
					if (!Array.isArray(t)) throw new TypeError(
						"Parameter params must be an array");
					if (e.length !== t.length - 1) throw new TypeError(
						"Parameter params must contain exactly one more element than parameter conditionals"
						);
					this.conditionals = e, this.params = t
				}
				return r.prototype = new t, r.prototype.type = "RelationalNode", r.prototype
					.isRelationalNode = !0, r.prototype._compile = function(e, t) {
						var r = this,
							n = this.params.map((function(r) {
								return r._compile(e, t)
							}));
						return function(t, i, a) {
							for (var o, s = n[0](t, i, a), u = 0; u < r.conditionals
								.length; u++) {
								if (o = s, s = n[u + 1](t, i, a), !at(e, r.conditionals[
										u])(o, s)) return !1
							}
							return !0
						}
					}, r.prototype.forEach = function(e) {
						var t = this;
						this.params.forEach((function(r, n) {
							return e(r, "params[" + n + "]", t)
						}), this)
					}, r.prototype.map = function(e) {
						var t = this;
						return new r(this.conditionals.slice(), this.params.map((function(r,
							n) {
							return t._ifNode(e(r, "params[" + n + "]", t))
						}), this))
					}, r.prototype.clone = function() {
						return new r(this.conditionals, this.params)
					}, r.prototype._toString = function(e) {
						for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = Ds(
								this, t), n = this.params.map((function(n, i) {
								var a = Ds(n, t);
								return "all" === t || null !== a && a <= r ?
									"(" + n.toString(e) + ")" : n.toString(e)
							})), i = {
								equal: "==",
								unequal: "!=",
								smaller: "<",
								larger: ">",
								smallerEq: "<=",
								largerEq: ">="
							}, a = n[0], o = 0; o < this.conditionals.length; o++) a +=
							" " + i[this.conditionals[o]] + " " + n[o + 1];
						return a
					}, r.prototype.toJSON = function() {
						return {
							mathjs: "RelationalNode",
							conditionals: this.conditionals,
							params: this.params
						}
					}, r.fromJSON = function(e) {
						return new r(e.conditionals, e.params)
					}, r.prototype.toHTML = function(e) {
						for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = Ds(
								this, t), n = this.params.map((function(n, i) {
								var a = Ds(n, t);
								return "all" === t || null !== a && a <= r ?
									'<span class="math-parenthesis math-round-parenthesis">(</span>' +
									n.toHTML(e) +
									'<span class="math-parenthesis math-round-parenthesis">)</span>' :
									n.toHTML(e)
							})), i = {
								equal: "==",
								unequal: "!=",
								smaller: "<",
								larger: ">",
								smallerEq: "<=",
								largerEq: ">="
							}, a = n[0], o = 0; o < this.conditionals.length; o++) a +=
							'<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
							we(i[this.conditionals[o]]) + "</span>" + n[o + 1];
						return a
					}, r.prototype._toTex = function(e) {
						for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = Ds(
								this, t), n = this.params.map((function(n, i) {
								var a = Ds(n, t);
								return "all" === t || null !== a && a <= r ?
									"\\left(" + n.toTex(e) + "\right)" : n
									.toTex(e)
							})), i = n[0], a = 0; a < this.conditionals.length; a++) i +=
							Vs[this.conditionals[a]] + n[a + 1];
						return i
					}, r
			}), {
				isClass: !0,
				isNode: !0
			}),
			au = Qe("SymbolNode", ["math", "?Unit", "Node"], (function(e) {
				var t = e.math,
					r = e.Unit,
					n = e.Node;

				function i(e) {
					return !!r && r.isValuelessUnit(e)
				}

				function a(e) {
					if (!(this instanceof a)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if ("string" != typeof e) throw new TypeError(
						'String expected for parameter "name"');
					this.name = e
				}
				return a.prototype = new n, a.prototype.type = "SymbolNode", a.prototype
					.isSymbolNode = !0, a.prototype._compile = function(e, t) {
						var n = this.name;
						if (!0 === t[n]) return function(e, t, r) {
							return t[n]
						};
						if (n in e) return function(t, r, i) {
							return t.has(n) ? t.get(n) : at(e, n)
						};
						var o = i(n);
						return function(e, t, i) {
							return e.has(n) ? e.get(n) : o ? new r(null, n) : a
								.onUndefinedSymbol(n)
						}
					}, a.prototype.forEach = function(e) {}, a.prototype.map = function(e) {
						return this.clone()
					}, a.onUndefinedSymbol = function(e) {
						throw new Error("Undefined symbol " + e)
					}, a.prototype.clone = function() {
						return new a(this.name)
					}, a.prototype._toString = function(e) {
						return this.name
					}, a.prototype.toHTML = function(e) {
						var t = we(this.name);
						return "true" === t || "false" === t ?
							'<span class="math-symbol math-boolean">' + t + "</span>" :
							"i" === t ? '<span class="math-symbol math-imaginary-symbol">' +
							t + "</span>" : "Infinity" === t ?
							'<span class="math-symbol math-infinity-symbol">' + t +
							"</span>" : "NaN" === t ?
							'<span class="math-symbol math-nan-symbol">' + t + "</span>" :
							"null" === t ? '<span class="math-symbol math-null-symbol">' +
							t + "</span>" : "undefined" === t ?
							'<span class="math-symbol math-undefined-symbol">' + t +
							"</span>" : '<span class="math-symbol">' + t + "</span>"
					}, a.prototype.toJSON = function() {
						return {
							mathjs: "SymbolNode",
							name: this.name
						}
					}, a.fromJSON = function(e) {
						return new a(e.name)
					}, a.prototype._toTex = function(e) {
						var r = !1;
						void 0 === t[this.name] && i(this.name) && (r = !0);
						var n = Js(this.name, r);
						return "\\" === n[0] ? n : " " + n
					}, a
			}), {
				isClass: !0,
				isNode: !0
			});

		function ou(e) {
			for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[
				n - 1] = arguments[n];
			return "function" == typeof e.createSubScope ? gt.apply(void 0, [e.createSubScope()]
				.concat(r)) : gt.apply(void 0, [dt(), e].concat(r))
		}
		var su = Qe("FunctionNode", ["math", "Node", "SymbolNode"], (function(e) {
				var t = e.math,
					r = e.Node,
					n = e.SymbolNode;

				function i(e, t) {
					if (!(this instanceof i)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if ("string" == typeof e && (e = new n(e)), !D(e)) throw new TypeError(
						'Node expected as parameter "fn"');
					if (!Array.isArray(t) || !t.every(D)) throw new TypeError(
						'Array containing Nodes expected for parameter "args"');
					this.fn = e, this.args = t || [], Object.defineProperty(this, "name", {
						get: function() {
							return this.fn.name || ""
						}.bind(this),
						set: function() {
							throw new Error(
								"Cannot assign a new name, name is read-only"
								)
						}
					})
				}
				i.prototype = new r, i.prototype.type = "FunctionNode", i.prototype
					.isFunctionNode = !0, i.prototype._compile = function(e, t) {
						if (!(this instanceof i)) throw new TypeError(
							"No valid FunctionNode");
						var r = this.args.map((function(r) {
							return r._compile(e, t)
						}));
						if (!L(this.fn)) {
							if (C(this.fn) && B(this.fn.index) && this.fn.index
								.isObjectProperty()) {
								var n = this.fn.object._compile(e, t),
									a = this.fn.index.getObjectProperty(),
									o = this.args;
								return function(t, i, s) {
									var u = n(t, i, s);
									if (function(e, t) {
											if (!ut(e, t)) throw new Error(
												'No access to method "' + t +
												'"')
										}(u, a), u[a] && u[a].rawArgs) return u[a](o, e,
										ou(t, i), t);
									var c = r.map((function(e) {
										return e(t, i, s)
									}));
									return u[a].apply(u, c)
								}
							}
							var s = this.fn._compile(e, t),
								u = this.args;
							return function(t, n, i) {
								var a = s(t, n, i);
								if (a && a.rawArgs) return a(u, e, ou(t, n), t);
								var o = r.map((function(e) {
									return e(t, n, i)
								}));
								return a.apply(a, o)
							}
						}
						var c = this.fn.name,
							f = c in e ? at(e, c) : void 0,
							l = "function" == typeof f && !0 === f.rawArgs,
							p = function(t) {
								return t.has(c) ? t.get(c) : c in e ? at(e, c) : i
									.onUndefinedFunction(c)
							};
						if (l) {
							var m = this.args;
							return function(t, r, n) {
								return p(t)(m, e, ou(t, r), t)
							}
						}
						switch (r.length) {
							case 0:
								return function(e, t, r) {
									return p(e)()
								};
							case 1:
								return function(e, t, n) {
									return p(e)((0, r[0])(e, t, n))
								};
							case 2:
								return function(e, t, n) {
									var i = p(e),
										a = r[0],
										o = r[1];
									return i(a(e, t, n), o(e, t, n))
								};
							default:
								return function(e, t, n) {
									var i = p(e),
										a = r.map((function(r) {
											return r(e, t, n)
										}));
									return i.apply(void 0, ja()(a))
								}
						}
					}, i.prototype.forEach = function(e) {
						e(this.fn, "fn", this);
						for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" +
							t + "]", this)
					}, i.prototype.map = function(e) {
						for (var t = this._ifNode(e(this.fn, "fn", this)), r = [], n =
							0; n < this.args.length; n++) r[n] = this._ifNode(e(this.args[
							n], "args[" + n + "]", this));
						return new i(t, r)
					}, i.prototype.clone = function() {
						return new i(this.fn, this.args.slice(0))
					}, i.onUndefinedFunction = function(e) {
						throw new Error("Undefined function " + e)
					};
				var o = i.prototype.toString;

				function s(e, t, r) {
					for (var n, i = "", o =
							/\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, s =
							0; null !== (n = o.exec(e));)
						if (i += e.substring(s, n.index), s = n.index, "$$" === n[0]) i +=
							"$", s++;
						else {
							s += n[0].length;
							var u = t[n[1]];
							if (!u) throw new ReferenceError("Template: Property " + n[1] +
								" does not exist.");
							if (void 0 === n[2]) switch (a()(u)) {
								case "string":
									i += u;
									break;
								case "object":
									if (D(u)) i += u.toTex(r);
									else {
										if (!Array.isArray(u)) throw new TypeError(
											"Template: " + n[1] +
											" has to be a Node, String or array of Nodes"
											);
										i += u.map((function(e, t) {
											if (D(e)) return e.toTex(r);
											throw new TypeError(
												"Template: " + n[1] +
												"[" + t +
												"] is not a Node.")
										})).join(",")
									}
									break;
								default:
									throw new TypeError("Template: " + n[1] +
										" has to be a Node, String or array of Nodes"
										)
							} else {
								if (!D(u[n[2]] && u[n[2]])) throw new TypeError(
									"Template: " + n[1] + "[" + n[2] +
									"] is not a Node.");
								i += u[n[2]].toTex(r)
							}
						} return i += e.slice(s)
				}
				i.prototype.toString = function(e) {
					var t, r = this.fn.toString(e);
					return e && "object" === a()(e.handler) && Je(e.handler, r) && (t =
						e.handler[r](this, e)), void 0 !== t ? t : o.call(this, e)
				}, i.prototype._toString = function(e) {
					var t = this.args.map((function(t) {
						return t.toString(e)
					}));
					return (R(this.fn) ? "(" + this.fn.toString(e) + ")" : this.fn
						.toString(e)) + "(" + t.join(", ") + ")"
				}, i.prototype.toJSON = function() {
					return {
						mathjs: "FunctionNode",
						fn: this.fn,
						args: this.args
					}
				}, i.fromJSON = function(e) {
					return new i(e.fn, e.args)
				}, i.prototype.toHTML = function(e) {
					var t = this.args.map((function(t) {
						return t.toHTML(e)
					}));
					return '<span class="math-function">' + we(this.fn) +
						'</span><span class="math-paranthesis math-round-parenthesis">(</span>' +
						t.join('<span class="math-separator">,</span>') +
						'<span class="math-paranthesis math-round-parenthesis">)</span>'
				};
				var u = i.prototype.toTex;
				return i.prototype.toTex = function(e) {
					var t;
					return e && "object" === a()(e.handler) && Je(e.handler, this
						.name) && (t = e.handler[this.name](this, e)), void 0 !== t ?
						t : u.call(this, e)
				}, i.prototype._toTex = function(e) {
					var r, n, i = this.args.map((function(t) {
						return t.toTex(e)
					}));
					switch (Zs[this.name] && (r = Zs[this.name]), !t[this.name] ||
						"function" != typeof t[this.name].toTex && "object" !== a()(t[
							this.name].toTex) && "string" != typeof t[this.name]
						.toTex || (r = t[this.name].toTex), a()(r)) {
						case "function":
							n = r(this, e);
							break;
						case "string":
							n = s(r, this, e);
							break;
						case "object":
							switch (a()(r[i.length])) {
								case "function":
									n = r[i.length](this, e);
									break;
								case "string":
									n = s(r[i.length], this, e)
							}
					}
					return void 0 !== n ? n : s(
						"\\mathrm{${name}}\\left(${args}\\right)", this, e)
				}, i.prototype.getIdentifier = function() {
					return this.type + ":" + this.name
				}, i
			}), {
				isClass: !0,
				isNode: !0
			}),
			uu = Qe("parse", ["typed", "numeric", "config", "AccessorNode", "ArrayNode",
				"AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode",
				"FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode",
				"OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"
			], (function(e) {
				var t = e.typed,
					r = e.numeric,
					n = e.config,
					i = e.AccessorNode,
					a = e.ArrayNode,
					o = e.AssignmentNode,
					s = e.BlockNode,
					u = e.ConditionalNode,
					c = e.ConstantNode,
					f = e.FunctionAssignmentNode,
					l = e.FunctionNode,
					p = e.IndexNode,
					m = e.ObjectNode,
					h = e.OperatorNode,
					d = e.ParenthesisNode,
					v = e.RangeNode,
					y = e.RelationalNode,
					g = e.SymbolNode,
					x = t("parse", {
						string: function(e) {
							return H(e, {})
						},
						"Array | Matrix": function(e) {
							return b(e, {})
						},
						"string, Object": function(e, t) {
							return H(e, void 0 !== t.nodes ? t.nodes : {})
						},
						"Array | Matrix, Object": b
					});

				function b(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
						{},
						r = void 0 !== t.nodes ? t.nodes : {};
					return Ht(e, (function(e) {
						if ("string" != typeof e) throw new TypeError(
							"String expected");
						return H(e, r)
					}))
				}
				var w = 0,
					N = 1,
					M = 2,
					E = 3,
					S = 4,
					A = {
						",": !0,
						"(": !0,
						")": !0,
						"[": !0,
						"]": !0,
						"{": !0,
						"}": !0,
						'"': !0,
						"'": !0,
						";": !0,
						"+": !0,
						"-": !0,
						"*": !0,
						".*": !0,
						"/": !0,
						"./": !0,
						"%": !0,
						"^": !0,
						".^": !0,
						"~": !0,
						"!": !0,
						"&": !0,
						"|": !0,
						"^|": !0,
						"=": !0,
						":": !0,
						"?": !0,
						"==": !0,
						"!=": !0,
						"<": !0,
						">": !0,
						"<=": !0,
						">=": !0,
						"<<": !0,
						">>": !0,
						">>>": !0
					},
					O = {
						mod: !0,
						to: !0,
						in: !0,
						and: !0,
						xor: !0,
						or: !0,
						not: !0
					},
					_ = {
						true: !0,
						false: !1,
						null: null,
						undefined: void 0
					},
					T = ["NaN", "Infinity"];

				function I(e, t) {
					return e.expression.substr(e.index, t)
				}

				function k(e) {
					return I(e, 1)
				}

				function R(e) {
					e.index++
				}

				function B(e) {
					return e.expression.charAt(e.index - 1)
				}

				function D(e) {
					return e.expression.charAt(e.index + 1)
				}

				function j(e) {
					for (e.tokenType = w, e.token = "", e.comment = ""; x.isWhitespace(k(e),
							e.nestingLevel);) R(e);
					if ("#" === k(e))
						for (;
							"\n" !== k(e) && "" !== k(e);) e.comment += k(e), R(e);
					if ("" !== k(e)) {
						if ("\n" === k(e) && !e.nestingLevel) return e.tokenType = N, e
							.token = k(e), void R(e);
						var t = k(e),
							r = I(e, 2),
							n = I(e, 3);
						if (3 === n.length && A[n]) return e.tokenType = N, e.token = n, R(
							e), R(e), void R(e);
						if (2 === r.length && A[r]) return e.tokenType = N, e.token = r, R(
							e), void R(e);
						if (A[t]) return e.tokenType = N, e.token = t, void R(e);
						if (x.isDigitDot(t)) {
							e.tokenType = M;
							var i = I(e, 2);
							if ("0b" === i || "0o" === i || "0x" === i) {
								for (e.token += k(e), R(e), e.token += k(e), R(e); x
									.isHexDigit(k(e));) e.token += k(e), R(e);
								if ("." === k(e))
									for (e.token += ".", R(e); x.isHexDigit(k(e));) e
										.token += k(e), R(e);
								else if ("i" === k(e))
									for (e.token += "i", R(e); x.isDigit(k(e));) e.token +=
										k(e), R(e);
								return
							}
							if ("." === k(e)) {
								if (e.token += k(e), R(e), !x.isDigit(k(e))) return void(e
									.tokenType = N)
							} else {
								for (; x.isDigit(k(e));) e.token += k(e), R(e);
								x.isDecimalMark(k(e), D(e)) && (e.token += k(e), R(e))
							}
							for (; x.isDigit(k(e));) e.token += k(e), R(e);
							if ("E" === k(e) || "e" === k(e))
								if (x.isDigit(D(e)) || "-" === D(e) || "+" === D(e)) {
									if (e.token += k(e), R(e), "+" !== k(e) && "-" !== k(
										e) || (e.token += k(e), R(e)), !x.isDigit(k(e)))
										throw pe(e, 'Digit expected, got "' + k(e) + '"');
									for (; x.isDigit(k(e));) e.token += k(e), R(e);
									if (x.isDecimalMark(k(e), D(e))) throw pe(e,
										'Digit expected, got "' + k(e) + '"')
								} else if ("." === D(e)) throw R(e), pe(e,
								'Digit expected, got "' + k(e) + '"')
						} else {
							if (!x.isAlpha(k(e), B(e), D(e))) {
								for (e.tokenType = S;
									"" !== k(e);) e.token += k(e), R(e);
								throw pe(e, 'Syntax error in part "' + e.token + '"')
							}
							for (; x.isAlpha(k(e), B(e), D(e)) || x.isDigit(k(e));) e
								.token += k(e), R(e);
							Je(O, e.token) ? e.tokenType = N : e.tokenType = E
						}
					} else e.tokenType = N
				}

				function F(e) {
					do {
						j(e)
					} while ("\n" === e.token)
				}

				function U(e) {
					e.nestingLevel++
				}

				function $(e) {
					e.nestingLevel--
				}

				function H(e, t) {
					var r = {
						extraNodes: {},
						expression: "",
						comment: "",
						index: 0,
						token: "",
						tokenType: w,
						nestingLevel: 0,
						conditionalLevel: null
					};
					ho()(r, {
						expression: e,
						extraNodes: t
					}), j(r);
					var n = function(e) {
						var t, r, n = [];
						"" !== e.token && "\n" !== e.token && ";" !== e.token && ((t =
							G(e)).comment = e.comment);
						for (;
							"\n" === e.token || ";" === e.token;) 0 === n.length && t &&
							(r = ";" !== e.token, n.push({
								node: t,
								visible: r
							})), j(e), "\n" !== e.token && ";" !== e.token && "" !== e
							.token && ((t = G(e)).comment = e.comment, r = ";" !== e
								.token, n.push({
									node: t,
									visible: r
								}));
						return n.length > 0 ? new s(n) : (t || ((t = new c(void 0))
							.comment = e.comment), t)
					}(r);
					if ("" !== r.token) throw r.tokenType === N ? me(r,
						"Unexpected operator " + r.token) : pe(r,
						'Unexpected part "' + r.token + '"');
					return n
				}

				function G(e) {
					var t, r, n, i, a = function(e) {
						var t = function(e) {
							var t = V(e);
							for (;
								"or" === e.token;) F(e), t = new h("or", "or", [t,
								V(e)
							]);
							return t
						}(e);
						for (;
							"?" === e.token;) {
							var r = e.conditionalLevel;
							e.conditionalLevel = e.nestingLevel, F(e);
							var n = t,
								i = G(e);
							if (":" !== e.token) throw pe(e,
								"False part of conditional expression expected");
							e.conditionalLevel = null, F(e);
							var a = G(e);
							t = new u(n, i, a), e.conditionalLevel = r
						}
						return t
					}(e);
					if ("=" === e.token) {
						if (L(a)) return t = a.name, F(e), n = G(e), new o(new g(t), n);
						if (C(a)) return F(e), n = G(e), new o(a.object, a.index, n);
						if (q(a) && L(a.fn) && (i = !0, r = [], t = a.name, a.args.forEach((
								function(e, t) {
									L(e) ? r[t] = e.name : i = !1
								})), i)) return F(e), n = G(e), new f(t, r, n);
						throw pe(e, "Invalid left hand side of assignment operator =")
					}
					return a
				}

				function V(e) {
					for (var t = Z(e);
						"xor" === e.token;) F(e), t = new h("xor", "xor", [t, Z(e)]);
					return t
				}

				function Z(e) {
					for (var t = W(e);
						"and" === e.token;) F(e), t = new h("and", "and", [t, W(e)]);
					return t
				}

				function W(e) {
					for (var t = Y(e);
						"|" === e.token;) F(e), t = new h("|", "bitOr", [t, Y(e)]);
					return t
				}

				function Y(e) {
					for (var t = J(e);
						"^|" === e.token;) F(e), t = new h("^|", "bitXor", [t, J(e)]);
					return t
				}

				function J(e) {
					for (var t = X(e);
						"&" === e.token;) F(e), t = new h("&", "bitAnd", [t, X(e)]);
					return t
				}

				function X(e) {
					for (var t = [Q(e)], r = [], n = {
							"==": "equal",
							"!=": "unequal",
							"<": "smaller",
							">": "larger",
							"<=": "smallerEq",
							">=": "largerEq"
						}; Je(n, e.token);) {
						var i = {
							name: e.token,
							fn: n[e.token]
						};
						r.push(i), F(e), t.push(Q(e))
					}
					return 1 === t.length ? t[0] : 2 === t.length ? new h(r[0].name, r[0]
						.fn, t) : new y(r.map((function(e) {
						return e.fn
					})), t)
				}

				function Q(e) {
					var t, r, n, i;
					t = K(e);
					for (var a = {
							"<<": "leftShift",
							">>": "rightArithShift",
							">>>": "rightLogShift"
						}; Je(a, e.token);) n = a[r = e.token], F(e), i = [t, K(e)], t =
						new h(r, n, i);
					return t
				}

				function K(e) {
					var t, r, n, i;
					t = ee(e);
					for (var a = {
							to: "to",
							in: "to"
						}; Je(a, e.token);) n = a[r = e.token], F(e), "in" === r && "" === e
						.token ? t = new h("*", "multiply", [t, new g("in")], !0) : (i = [t,
							ee(e)
						], t = new h(r, n, i));
					return t
				}

				function ee(e) {
					var t, r = [];
					if (t = ":" === e.token ? new c(1) : te(e), ":" === e.token && e
						.conditionalLevel !== e.nestingLevel) {
						for (r.push(t);
							":" === e.token && r.length < 3;) F(e), ")" === e.token ||
							"]" === e.token || "," === e.token || "" === e.token ? r.push(
								new g("end")) : r.push(te(e));
						t = 3 === r.length ? new v(r[0], r[2], r[1]) : new v(r[0], r[1])
					}
					return t
				}

				function te(e) {
					var t, r, n, i;
					t = re(e);
					for (var a = {
							"+": "add",
							"-": "subtract"
						}; Je(a, e.token);) {
						n = a[r = e.token], F(e);
						var o = re(e);
						i = o.isPercentage ? [t, new h("*", "multiply", [t, o])] : [t, o],
							t = new h(r, n, i)
					}
					return t
				}

				function re(e) {
					var t, r, n, i;
					r = t = ne(e);
					for (var a = {
							"*": "multiply",
							".*": "dotMultiply",
							"/": "divide",
							"./": "dotDivide"
						}; Je(a, e.token);) i = a[n = e.token], F(e), r = ne(e), t = new h(
						n, i, [t, r]);
					return t
				}

				function ne(e) {
					var t, r;
					for (r = t = ie(e); e.tokenType === E || "in" === e.token && z(t) || !(e
							.tokenType !== M || z(r) || P(r) && "!" !== r.op) || "(" === e
						.token;) r = ie(e), t = new h("*", "multiply", [t, r], !0);
					return t
				}

				function ie(e) {
					for (var t = ae(e), r = t, n = [];
						"/" === e.token && z(r);) {
						if (n.push(ho()({}, e)), F(e), e.tokenType !== M) {
							ho()(e, n.pop());
							break
						}
						if (n.push(ho()({}, e)), F(e), e.tokenType !== E && "(" !== e
							.token) {
							n.pop(), ho()(e, n.pop());
							break
						}
						ho()(e, n.pop()), n.pop(), r = ae(e), t = new h("/", "divide", [t,
							r])
					}
					return t
				}

				function ae(e) {
					var t, r, n, i;
					t = oe(e);
					for (var a = {
							"%": "mod",
							mod: "mod"
						}; Je(a, e.token);) n = a[r = e.token], F(e), "%" === r && e
						.tokenType === N && "(" !== e.token ? t = new h("/", "divide", [t,
							new c(100)
						], !1, !0) : (i = [t, oe(e)], t = new h(r, n, i));
					return t
				}

				function oe(e) {
					var t, i, o, s = {
						"-": "unaryMinus",
						"+": "unaryPlus",
						"~": "bitNot",
						not: "not"
					};
					return Je(s, e.token) ? (o = s[e.token], t = e.token, F(e), i = [oe(e)],
						new h(t, o, i)) : function(e) {
						var t, i, o, s;
						t = function(e) {
							var t, i, o;
							t = function(e) {
								var t = [];
								if (e.tokenType === E && Je(e.extraNodes, e
										.token)) {
									var i = e.extraNodes[e.token];
									if (j(e), "(" === e.token) {
										if (t = [], U(e), j(e), ")" !== e.token)
											for (t.push(G(e));
												"," === e.token;) j(e), t.push(
												G(e));
										if (")" !== e.token) throw pe(e,
											"Parenthesis ) expected");
										$(e), j(e)
									}
									return new i(t)
								}
								return function(e) {
									var t, i;
									if (e.tokenType === E || e.tokenType ===
										N && e.token in O) return i = e
										.token, j(e), t = Je(_, i) ?
										new c(_[i]) : -1 !== T.indexOf(
											i) ? new c(r(i, "number")) :
										new g(i), t = se(e, t);
									return function(e) {
										var t, i;
										if ('"' === e.token) return i =
											ue(e), t = new c(i), t =
											se(e, t);
										return function(e) {
											var t, i;
											if ("'" === e.token)
												return i = ce(e),
													t = new c(i),
													t = se(e, t);
											return function(e) {
												var t, i, o, s;
												if ("[" === e
													.token) {
													if (U(e), j(
															e),
														"]" !==
														e.token
														) {
														var u =
															fe(
																e);
														if (";" ===
															e
															.token
															) {
															for (
																o =
																1,
																i = [
																	u
																];
																";" ===
																e
																.token;
																)
																j(
																	e),
																i[
																	o] =
																fe(
																	e),
																o++;
															if ("]" !==
																e
																.token
																)
																throw pe(
																	e,
																	"End of matrix ] expected"
																	);
															$(e),
																j(
																	e),
																s =
																i[
																	0]
																.items
																.length;
															for (
																var f =
																	1; f <
																o; f++
																)
																if (i[
																		f]
																	.items
																	.length !==
																	s
																	)
																	throw me(
																		e,
																		"Column dimensions mismatch (" +
																		i[
																			f]
																		.items
																		.length +
																		" !== " +
																		s +
																		")"
																		);
															t = new a(
																i
																)
														} else {
															if ("]" !==
																e
																.token
																)
																throw pe(
																	e,
																	"End of matrix ] expected"
																	);
															$(e),
																j(
																	e),
																t =
																u
														}
													} else $(e),
														j(e),
														t =
														new a(
														[]);
													return se(e,
														t)
												}
												return function(
													e) {
													if ("{" ===
														e
														.token
														) {
														var
														t;
														U(
														e);
														var
														i = {};
														do {
															if (j(
																	e),
																"}" !==
																e
																.token
																) {
																if ('"' ===
																	e
																	.token
																	)
																	t =
																	ue(
																		e);
																else if (
																	"'" ===
																	e
																	.token
																	)
																	t =
																	ce(
																		e);
																else {
																	if (!
																		(e.tokenType ===
																			E ||
																			e
																			.tokenType ===
																			N &&
																			e
																			.token in
																			O
																			)
																		)
																		throw pe(
																			e,
																			"Symbol or string expected as object key"
																			);
																	t = e
																		.token,
																		j(
																			e)
																}
																if (":" !==
																	e
																	.token
																	)
																	throw pe(
																		e,
																		"Colon : expected after object key"
																		);
																j(e),
																	i[
																		t] =
																	G(
																		e)
															}
														} while (
															"," ===
															e
															.token
															);
														if ("}" !==
															e
															.token
															)
															throw pe(
																e,
																"Comma , or bracket } expected after object value"
																);
														$(e),
															j(
																e);
														var a =
															new m(
																i
																);
														return a =
															se(e,
																a
																)
													}
													return function(
														e
														) {
														var
														t;
														if (e
															.tokenType ===
															M
															)
															return t =
																e
																.token,
																j(
																	e),
																new c(
																	r(t, n
																		.number
																		)
																	);
														return function(
																e
																) {
																var
																t;
																if ("(" ===
																	e
																	.token
																	) {
																	if (U(
																			e),
																		j(
																			e),
																		t =
																		G(
																			e),
																		")" !==
																		e
																		.token
																		)
																		throw pe(
																			e,
																			"Parenthesis ) expected"
																			);
																	return $(
																			e
																			),
																		j(
																			e),
																		t =
																		new d(
																			t
																			),
																		t =
																		se(e,
																			t
																			)
																}
																return function(
																		e
																		) {
																		throw "" ===
																			e
																			.token ?
																			pe(e,
																				"Unexpected end of expression"
																				) :
																			pe(e,
																				"Value expected"
																				)
																	}
																	(
																		e)
															}
															(
																e)
													}(e)
												}(e)
											}(e)
										}(e)
									}(e)
								}(e)
							}(e);
							var s = {
								"!": "factorial",
								"'": "ctranspose"
							};
							for (; Je(s, e.token);) i = e.token, o = s[i], j(e), t =
								new h(i, o, [t]), t = se(e, t);
							return t
						}(e), ("^" === e.token || ".^" === e.token) && (i = e.token,
							o = "^" === i ? "pow" : "dotPow", F(e), s = [t, oe(e)],
							t = new h(i, o, s));
						return t
					}(e)
				}

				function se(e, t, r) {
					for (var n; !("(" !== e.token && "[" !== e.token && "." !== e.token ||
							r && -1 === r.indexOf(e.token));)
						if (n = [], "(" === e.token) {
							if (!L(t) && !C(t)) return t;
							if (U(e), j(e), ")" !== e.token)
								for (n.push(G(e));
									"," === e.token;) j(e), n.push(G(e));
							if (")" !== e.token) throw pe(e, "Parenthesis ) expected");
							$(e), j(e), t = new l(t, n)
						} else if ("[" === e.token) {
						if (U(e), j(e), "]" !== e.token)
							for (n.push(G(e));
								"," === e.token;) j(e), n.push(G(e));
						if ("]" !== e.token) throw pe(e, "Parenthesis ] expected");
						$(e), j(e), t = new i(t, new p(n))
					} else {
						if (j(e), e.tokenType !== E) throw pe(e,
							"Property name expected after dot");
						n.push(new c(e.token)), j(e);
						t = new i(t, new p(n, !0))
					}
					return t
				}

				function ue(e) {
					for (var t = "";
						"" !== k(e) && '"' !== k(e);) "\\" === k(e) && (t += k(e), R(e)),
						t += k(e), R(e);
					if (j(e), '"' !== e.token) throw pe(e, 'End of string " expected');
					return j(e), JSON.parse('"' + t + '"')
				}

				function ce(e) {
					for (var t = "";
						"" !== k(e) && "'" !== k(e);) "\\" === k(e) && (t += k(e), R(e)),
						t += k(e), R(e);
					if (j(e), "'" !== e.token) throw pe(e, "End of string ' expected");
					return j(e), JSON.parse('"' + t + '"')
				}

				function fe(e) {
					for (var t = [G(e)], r = 1;
						"," === e.token;) j(e), t[r] = G(e), r++;
					return new a(t)
				}

				function le(e) {
					return e.index - e.token.length + 1
				}

				function pe(e, t) {
					var r = le(e),
						n = new SyntaxError(t + " (char " + r + ")");
					return n.char = r, n
				}

				function me(e, t) {
					var r = le(e),
						n = new SyntaxError(t + " (char " + r + ")");
					return n.char = r, n
				}
				return x.isAlpha = function(e, t, r) {
					return x.isValidLatinOrGreek(e) || x.isValidMathSymbol(e, r) || x
						.isValidMathSymbol(t, e)
				}, x.isValidLatinOrGreek = function(e) {
					return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e)
				}, x.isValidMathSymbol = function(e, t) {
					return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) &&
						/^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/
						.test(t)
				}, x.isWhitespace = function(e, t) {
					return " " === e || "\t" === e || "\n" === e && t > 0
				}, x.isDecimalMark = function(e, t) {
					return "." === e && "/" !== t && "*" !== t && "^" !== t
				}, x.isDigitDot = function(e) {
					return e >= "0" && e <= "9" || "." === e
				}, x.isDigit = function(e) {
					return e >= "0" && e <= "9"
				}, x.isHexDigit = function(e) {
					return e >= "0" && e <= "9" || e >= "a" && e <= "f" || e >= "A" &&
						e <= "F"
				}, x
			})),
			cu = Qe("compile", ["typed", "parse"], (function(e) {
				var t = e.typed,
					r = e.parse;
				return t("compile", {
					string: function(e) {
						return r(e).compile()
					},
					"Array | Matrix": function(e) {
						return Ht(e, (function(e) {
							return r(e).compile()
						}))
					}
				})
			})),
			fu = Qe("evaluate", ["typed", "parse"], (function(e) {
				var t = e.typed,
					r = e.parse;
				return t("evaluate", {
					string: function(e) {
						var t = dt();
						return r(e).compile().evaluate(t)
					},
					"string, Map | Object": function(e, t) {
						return r(e).compile().evaluate(t)
					},
					"Array | Matrix": function(e) {
						var t = dt();
						return Ht(e, (function(e) {
							return r(e).compile().evaluate(t)
						}))
					},
					"Array | Matrix, Map | Object": function(e, t) {
						return Ht(e, (function(e) {
							return r(e).compile().evaluate(t)
						}))
					}
				})
			})),
			lu = Qe("Parser", ["evaluate"], (function(e) {
				var t = e.evaluate;

				function r() {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					Object.defineProperty(this, "scope", {
						value: dt(),
						writable: !1
					})
				}
				return r.prototype.type = "Parser", r.prototype.isParser = !0, r.prototype
					.evaluate = function(e) {
						return t(e, this.scope)
					}, r.prototype.get = function(e) {
						if (this.scope.has(e)) return this.scope.get(e)
					}, r.prototype.getAll = function() {
						return function(e) {
							if (e instanceof ht) return e.wrappedObject;
							var t, r = {},
								n = pt(e.keys());
							try {
								for (n.s(); !(t = n.n()).done;) {
									var i = t.value;
									ot(r, i, e.get(i))
								}
							} catch (e) {
								n.e(e)
							} finally {
								n.f()
							}
							return r
						}(this.scope)
					}, r.prototype.getAllAsMap = function() {
						return this.scope
					}, r.prototype.set = function(e, t) {
						return this.scope.set(e, t), t
					}, r.prototype.remove = function(e) {
						this.scope.delete(e)
					}, r.prototype.clear = function() {
						this.scope.clear()
					}, r
			}), {
				isClass: !0
			}),
			pu = Qe("parser", ["typed", "Parser"], (function(e) {
				var t = e.typed,
					r = e.Parser;
				return t("parser", {
					"": function() {
						return new r
					}
				})
			})),
			mu = Qe("lup", ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar",
				"subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix",
				"SparseMatrix", "Spa"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.abs,
					i = e.addScalar,
					a = e.divideScalar,
					o = e.multiplyScalar,
					s = e.subtract,
					u = e.larger,
					c = e.equalScalar,
					f = e.unaryMinus,
					l = e.DenseMatrix,
					p = e.SparseMatrix,
					m = e.Spa;
				return t("lup", {
					DenseMatrix: function(e) {
						return h(e)
					},
					SparseMatrix: function(e) {
						return d(e)
					},
					Array: function(e) {
						var t = h(r(e));
						return {
							L: t.L.valueOf(),
							U: t.U.valueOf(),
							p: t.p
						}
					}
				});

				function h(e) {
					var t, r, f, p = e._size[0],
						m = e._size[1],
						h = Math.min(p, m),
						d = He(e._data),
						v = [],
						y = [p, h],
						g = [],
						x = [h, m],
						b = [];
					for (t = 0; t < p; t++) b[t] = t;
					for (r = 0; r < m; r++) {
						if (r > 0)
							for (t = 0; t < p; t++) {
								var w = Math.min(t, r),
									N = 0;
								for (f = 0; f < w; f++) N = i(N, o(d[t][f], d[f][r]));
								d[t][r] = s(d[t][r], N)
							}
						var M = r,
							E = 0,
							S = 0;
						for (t = r; t < p; t++) {
							var A = d[t][r],
								O = n(A);
							u(O, E) && (M = t, E = O, S = A)
						}
						if (r !== M && (b[r] = [b[M], b[M] = b[r]][0], l._swapRows(r, M,
							d)), r < p)
							for (t = r + 1; t < p; t++) {
								var C = d[t][r];
								c(C, 0) || (d[t][r] = a(d[t][r], S))
							}
					}
					for (r = 0; r < m; r++)
						for (t = 0; t < p; t++) 0 === r && (t < m && (g[t] = []), v[
						t] = []), t < r ? (t < m && (g[t][r] = d[t][r]), r < p && (v[t][r] =
								0)) : t !== r ? (t < m && (g[t][r] = 0), r < p && (v[t][r] =
								d[t][r])) : (t < m && (g[t][r] = d[t][r]), r < p && (v[t][
								r] = 1));
					var _ = new l({
							data: v,
							size: y
						}),
						T = new l({
							data: g,
							size: x
						}),
						I = [];
					for (t = 0, h = b.length; t < h; t++) I[b[t]] = t;
					return {
						L: _,
						U: T,
						p: I,
						toString: function() {
							return "L: " + this.L.toString() + "\nU: " + this.U
								.toString() + "\nP: " + this.p
						}
					}
				}

				function d(e) {
					var t, r, i, s = e._size[0],
						l = e._size[1],
						h = Math.min(s, l),
						d = e._values,
						v = e._index,
						y = e._ptr,
						g = [],
						x = [],
						b = [],
						w = [s, h],
						N = [],
						M = [],
						E = [],
						S = [h, l],
						A = [],
						O = [];
					for (t = 0; t < s; t++) A[t] = t, O[t] = t;
					var C = function() {
						var e = new m;
						r < s && (b.push(g.length), g.push(1), x.push(r)), E.push(N
							.length);
						var l = y[r],
							h = y[r + 1];
						for (i = l; i < h; i++) t = v[i], e.set(A[t], d[i]);
						r > 0 && e.forEach(0, r - 1, (function(t, r) {
							p._forEachRow(t, g, x, b, (function(n, i) {
								n > t && e.accumulate(n, f(o(i,
									r)))
							}))
						}));
						var C, _, T, I, k = r,
							z = e.get(r),
							R = n(z);
						e.forEach(r + 1, s - 1, (function(e, t) {
							var r = n(t);
							u(r, R) && (k = e, R = r, z = t)
						})), r !== k && (p._swapRows(r, k, w[1], g, x, b), p
							._swapRows(r, k, S[1], N, M, E), e.swap(r, k), _ = k,
							T = O[C = r], I = O[_], A[T] = _, A[I] = C, O[C] = I, O[
								_] = T), e.forEach(0, s - 1, (function(e, t) {
							e <= r ? (N.push(t), M.push(e)) : (t = a(t, z),
								c(t, 0) || (g.push(t), x.push(e)))
						}))
					};
					for (r = 0; r < l; r++) C();
					return E.push(N.length), b.push(g.length), {
						L: new p({
							values: g,
							index: x,
							ptr: b,
							size: w
						}),
						U: new p({
							values: N,
							index: M,
							ptr: E,
							size: S
						}),
						p: A,
						toString: function() {
							return "L: " + this.L.toString() + "\nU: " + this.U
								.toString() + "\nP: " + this.p
						}
					}
				}
			})),
			hu = Qe("qr", ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign",
				"sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar",
				"subtract", "complex"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.zeros,
					i = e.identity,
					a = e.isZero,
					o = e.equal,
					s = e.sign,
					u = e.sqrt,
					c = e.conj,
					f = e.unaryMinus,
					l = e.addScalar,
					p = e.divideScalar,
					m = e.multiplyScalar,
					h = e.subtract,
					d = e.complex;
				return ho()(t("qr", {
					DenseMatrix: function(e) {
						return y(e)
					},
					SparseMatrix: function(e) {
						return function(e) {
							throw new Error(
								"qr not implemented for sparse matrices yet"
								)
						}()
					},
					Array: function(e) {
						var t = y(r(e));
						return {
							Q: t.Q.valueOf(),
							R: t.R.valueOf()
						}
					}
				}), {
					_denseQRimpl: v
				});

				function v(e) {
					var t, r, d, v = e._size[0],
						y = e._size[1],
						g = i([v], "dense"),
						x = g._data,
						b = e.clone(),
						w = b._data,
						N = n([v], "");
					for (d = 0; d < Math.min(y, v); ++d) {
						var M = w[d][d],
							E = f(o(M, 0) ? 1 : s(M)),
							S = c(E),
							A = 0;
						for (t = d; t < v; t++) A = l(A, m(w[t][d], c(w[t][d])));
						var O = m(E, u(A));
						if (!a(O)) {
							var C = h(M, O);
							for (N[d] = 1, t = d + 1; t < v; t++) N[t] = p(w[t][d], C);
							var _ = f(c(p(C, O))),
								T = void 0;
							for (r = d; r < y; r++) {
								for (T = 0, t = d; t < v; t++) T = l(T, m(c(N[t]), w[t][
								r]));
								for (T = m(T, _), t = d; t < v; t++) w[t][r] = m(h(w[t][r],
									m(N[t], T)), S)
							}
							for (t = 0; t < v; t++) {
								for (T = 0, r = d; r < v; r++) T = l(T, m(x[t][r], N[r]));
								for (T = m(T, _), r = d; r < v; ++r) x[t][r] = p(h(x[t][r],
									m(T, c(N[r]))), S)
							}
						}
					}
					return {
						Q: g,
						R: b,
						toString: function() {
							return "Q: " + this.Q.toString() + "\nR: " + this.R
								.toString()
						}
					}
				}

				function y(e) {
					var t = v(e),
						r = t.R._data;
					if (e._data.length > 0)
						for (var n = "Complex" === r[0][0].type ? d(0) : 0, i = 0; i < r
							.length; ++i)
							for (var a = 0; a < i && a < (r[0] || []).length; ++a) r[i][a] =
								n;
					return t
				}
			}));

		function du(e, t, r, n, i, a, o) {
			var s = 0;
			for (r[o] = e; s >= 0;) {
				var u = r[o + s],
					c = r[n + u]; - 1 === c ? (s--, a[t++] = u) : (r[n + u] = r[i + c], r[o + ++s] =
					c)
			}
			return t
		}

		function vu(e) {
			return -e - 2
		}
		var yu = Qe("csAmd", ["add", "multiply", "transpose"], (function(e) {
			var t = e.add,
				r = e.multiply,
				n = e.transpose;
			return function(e, o) {
				if (!o || e <= 0 || e > 3) return null;
				var s = o._size,
					u = s[0],
					c = s[1],
					f = 0,
					l = Math.max(16, 10 * Math.sqrt(c)),
					p = function(e, i, a, o, s) {
						var u = n(i);
						if (1 === e && o === a) return t(i, u);
						if (2 === e) {
							for (var c = u._index, f = u._ptr, l = 0, p = 0; p <
								a; p++) {
								var m = f[p];
								if (f[p] = l, !(f[p + 1] - m > s))
									for (var h = f[p + 1]; m < h; m++) c[l++] = c[m]
							}
							return f[a] = l, i = n(u), r(u, i)
						}
						return r(u, i)
					}(e, o, u, c, l = Math.min(c - 2, l));
				! function(e, t, r) {
					for (var n = e._values, i = e._index, a = e._ptr, o = e._size[
							1], s = 0, u = 0; u < o; u++) {
						var c = a[u];
						for (a[u] = s; c < a[u + 1]; c++) t(i[c], u, n ? n[c] : 1,
							r) && (i[s] = i[c], n && (n[s] = n[c]), s++)
					}
					a[o] = s, i.splice(s, i.length - s), n && n.splice(s, n.length -
						s)
				}(p, a, null);
				for (var m, h, d, v, y, g, x, b, w, N, M, E, S, A, O, C, _ = p
						._index, T = p._ptr, I = T[c], k = [], z = [], R = c + 1,
						q = 2 * (c + 1), B = 3 * (c + 1), D = 4 * (c + 1), j = 5 * (
							c + 1), P = 6 * (c + 1), F = 7 * (c + 1), U = k, L =
						function(e, t, r, n, a, o, s, u, c, f, l, p) {
							for (var m = 0; m < e; m++) r[n + m] = t[m + 1] - t[m];
							r[n + e] = 0;
							for (var h = 0; h <= e; h++) r[a + h] = -1, o[h] = -1,
								r[s + h] = -1, r[u + h] = -1, r[c + h] = 1, r[f +
								h] = 1, r[l + h] = 0, r[p + h] = r[n + h];
							var d = i(0, 0, r, f, e);
							return r[l + e] = -2, t[e] = -1, r[f + e] = 0, d
						}(c, T, z, 0, B, U, q, F, R, P, D, j), $ = function(e, t, r,
							n, i, a, o, s, u, c, f) {
							for (var l = 0, p = 0; p < e; p++) {
								var m = r[n + p];
								if (0 === m) r[i + p] = -2, l++, t[p] = -1, r[a +
									p] = 0;
								else if (m > o) r[s + p] = 0, r[i + p] = -1, l++, t[
									p] = vu(e), r[s + e]++;
								else {
									var h = r[u + m]; - 1 !== h && (c[h] = p), r[f +
										p] = r[u + m], r[u + m] = p
								}
							}
							return l
						}(c, T, z, j, D, P, l, R, B, U, q), H = 0; $ < c;) {
					for (d = -1; H < c && -1 === (d = z[B + H]); H++); - 1 !== z[q +
						d] && (U[z[q + d]] = -1), z[B + H] = z[q + d];
					var G = z[D + d],
						V = z[R + d];
					$ += V;
					var Z = 0;
					z[R + d] = -V;
					var W = T[d],
						Y = 0 === G ? W : I,
						J = Y;
					for (v = 1; v <= G + 1; v++) {
						for (v > G ? (g = d, x = W, b = z[0 + d] - G) : (x = T[g =
								_[W++]], b = z[0 + g]), y = 1; y <= b; y++)(w = z[
							R + (m = _[x++])]) <= 0 || (Z += w, z[R + m] = -w,
							_[J++] = m, -1 !== z[q + m] && (U[z[q + m]] = U[m]),
							-1 !== U[m] ? z[q + U[m]] = z[q + m] : z[B + z[j +
								m]] = z[q + m]);
						g !== d && (T[g] = vu(d), z[P + g] = 0)
					}
					for (0 !== G && (I = J), z[j + d] = Z, T[d] = Y, z[0 + d] = J -
						Y, z[D + d] = -2, L = i(L, f, z, P, c), N = Y; N < J; N++)
						if (!((M = z[D + (m = _[N])]) <= 0)) {
							var X = L - (w = -z[R + m]);
							for (W = T[m], E = T[m] + M - 1; W <= E; W++) z[P + (g =
									_[W])] >= L ? z[P + g] -= w : 0 !== z[P + g] &&
								(z[P + g] = z[j + g] + X)
						} for (N = Y; N < J; N++) {
						for (S = (E = T[m = _[N]]) + z[D + m] - 1, A = E, O = 0, C =
							0, W = E; W <= S; W++)
							if (0 !== z[P + (g = _[W])]) {
								var Q = z[P + g] - L;
								Q > 0 ? (C += Q, _[A++] = g, O += g) : (T[g] = vu(
									d), z[P + g] = 0)
							} z[D + m] = A - E + 1;
						var K = A,
							ee = E + z[0 + m];
						for (W = S + 1; W < ee; W++) {
							var te = z[R + (h = _[W])];
							te <= 0 || (C += te, _[A++] = h, O += h)
						}
						0 === C ? (T[m] = vu(d), Z -= w = -z[R + m], V += w, $ += w,
							z[R + m] = 0, z[D + m] = -1) : (z[j + m] = Math.min(
								z[j + m], C), _[A] = _[K], _[K] = _[E], _[E] =
							d, z[0 + m] = A - E + 1, O = (O < 0 ? -O : O) % c,
							z[q + m] = z[F + O], z[F + O] = m, U[m] = O)
					}
					for (z[j + d] = Z, L = i(L + (f = Math.max(f, Z)), f, z, P, c),
						N = Y; N < J; N++)
						if (!(z[R + (m = _[N])] >= 0))
							for (m = z[F + (O = U[m])], z[F + O] = -1; - 1 !== m &&
								-1 !== z[q + m]; m = z[q + m], L++) {
								for (b = z[0 + m], M = z[D + m], W = T[m] + 1; W <=
									T[m] + b - 1; W++) z[P + _[W]] = L;
								var re = m;
								for (h = z[q + m]; - 1 !== h;) {
									var ne = z[0 + h] === b && z[D + h] === M;
									for (W = T[h] + 1; ne && W <= T[h] + b - 1; W++)
										z[P + _[W]] !== L && (ne = 0);
									ne ? (T[h] = vu(m), z[R + m] += z[R + h], z[R +
											h] = 0, z[D + h] = -1, h = z[q + h],
										z[q + re] = h) : (re = h, h = z[q + h])
								}
							}
					for (W = Y, N = Y; N < J; N++)(w = -z[R + (m = _[N])]) <= 0 || (
						z[R + m] = w, C = z[j + m] + Z - w, -1 !== z[B + (C =
							Math.min(C, c - $ - w))] && (U[z[B + C]] = m), z[q +
							m] = z[B + C], U[m] = -1, z[B + C] = m, H = Math
						.min(H, C), z[j + m] = C, _[W++] = m);
					z[R + d] = V, 0 == (z[0 + d] = W - Y) && (T[d] = -1, z[P + d] =
						0), 0 !== G && (I = W)
				}
				for (m = 0; m < c; m++) T[m] = vu(T[m]);
				for (h = 0; h <= c; h++) z[B + h] = -1;
				for (h = c; h >= 0; h--) z[R + h] > 0 || (z[q + h] = z[B + T[h]], z[
					B + T[h]] = h);
				for (g = c; g >= 0; g--) z[R + g] <= 0 || -1 !== T[g] && (z[q + g] =
					z[B + T[g]], z[B + T[g]] = g);
				for (d = 0, m = 0; m <= c; m++) - 1 === T[m] && (d = du(m, d, z, B,
					q, k, P));
				return k.splice(k.length - 1, 1), k
			};

			function i(e, t, r, n, i) {
				if (e < 2 || e + t < 0) {
					for (var a = 0; a < i; a++) 0 !== r[n + a] && (r[n + a] = 1);
					e = 2
				}
				return e
			}

			function a(e, t) {
				return e !== t
			}
		}));

		function gu(e, t, r, n, i, a, o) {
			var s, u, c, f = 0;
			if (e <= t || r[n + t] <= r[i + e]) return -1;
			r[i + e] = r[n + t];
			var l = r[a + e];
			if (r[a + e] = t, -1 === l) f = 1, c = e;
			else {
				for (f = 2, c = l; c !== r[o + c]; c = r[o + c]);
				for (s = l; s !== c; s = u) u = r[o + s], r[o + s] = c
			}
			return {
				jleaf: f,
				q: c
			}
		}
		var xu = Qe("csCounts", ["transpose"], (function(e) {
				var t = e.transpose;
				return function(e, r, n, i) {
					if (!e || !r || !n) return null;
					var a, o, s, u, c, f, l, p = e._size,
						m = p[0],
						h = p[1],
						d = 4 * h + (i ? h + m + 1 : 0),
						v = [],
						y = h,
						g = 2 * h,
						x = 3 * h,
						b = 4 * h,
						w = 5 * h + 1;
					for (s = 0; s < d; s++) v[s] = -1;
					var N = [],
						M = t(e),
						E = M._index,
						S = M._ptr;
					for (s = 0; s < h; s++)
						for (N[o = n[s]] = -1 === v[x + o] ? 1 : 0; - 1 !== o && -1 ===
							v[x + o]; o = r[o]) v[x + o] = s;
					if (i) {
						for (s = 0; s < h; s++) v[n[s]] = s;
						for (a = 0; a < m; a++) {
							for (s = h, f = S[a], l = S[a + 1], c = f; c < l; c++) s =
								Math.min(s, v[E[c]]);
							v[w + a] = v[b + s], v[b + s] = a
						}
					}
					for (a = 0; a < h; a++) v[0 + a] = a;
					for (s = 0; s < h; s++) {
						for (-1 !== r[o = n[s]] && N[r[o]]--, u = i ? v[b + s] : o; -
							1 !== u; u = i ? v[w + u] : -1)
							for (c = S[u]; c < S[u + 1]; c++) {
								var A = gu(a = E[c], o, v, x, y, g, 0);
								A.jleaf >= 1 && N[o]++, 2 === A.jleaf && N[A.q]--
							} - 1 !== r[o] && (v[0 + o] = r[o])
					}
					for (o = 0; o < h; o++) - 1 !== r[o] && (N[r[o]] += N[o]);
					return N
				}
			})),
			bu = Qe("csSqr", ["add", "multiply", "transpose"], (function(e) {
				var t = e.add,
					r = e.multiply,
					n = e.transpose,
					i = yu({
						add: t,
						multiply: r,
						transpose: n
					}),
					a = xu({
						transpose: n
					});
				return function(e, t, r) {
					var n, o = t._ptr,
						s = t._size[1],
						u = {};
					if (u.q = i(e, t), e && !u.q) return null;
					if (r) {
						var c = e ? function(e, t, r, n) {
							for (var i = e._values, a = e._index, o = e._ptr, s = e
									._size, u = e._datatype, c = s[0], f = s[1], l =
									n && e._values ? [] : null, p = [], m = [], h =
									0, d = 0; d < f; d++) {
								m[d] = h;
								for (var v = r ? r[d] : d, y = o[v], g = o[v + 1],
										x = y; x < g; x++) {
									var b = t ? t[a[x]] : a[x];
									p[h] = b, l && (l[h] = i[x]), h++
								}
							}
							return m[f] = h, e.createSparseMatrix({
								values: l,
								index: p,
								ptr: m,
								size: [c, f],
								datatype: u
							})
						}(t, null, u.q, 0) : t;
						u.parent = function(e, t) {
							if (!e) return null;
							var r, n, i = e._index,
								a = e._ptr,
								o = e._size,
								s = o[0],
								u = o[1],
								c = [],
								f = [],
								l = u;
							if (t)
								for (r = 0; r < s; r++) f[l + r] = -1;
							for (var p = 0; p < u; p++) {
								c[p] = -1, f[0 + p] = -1;
								for (var m = a[p], h = a[p + 1], d = m; d <
									h; d++) {
									var v = i[d];
									for (r = t ? f[l + v] : v; - 1 !== r && r <
										p; r = n) n = f[0 + r], f[0 + r] = p, -1 ===
										n && (c[r] = p);
									t && (f[l + v] = p)
								}
							}
							return c
						}(c, 1);
						var f = function(e, t) {
							if (!e) return null;
							var r, n = 0,
								i = [],
								a = [],
								o = t,
								s = 2 * t;
							for (r = 0; r < t; r++) a[0 + r] = -1;
							for (r = t - 1; r >= 0; r--) - 1 !== e[r] && (a[o + r] =
								a[0 + e[r]], a[0 + e[r]] = r);
							for (r = 0; r < t; r++) - 1 === e[r] && (n = du(r, n, a,
								0, o, i, s));
							return i
						}(u.parent, s);
						if (u.cp = a(c, u.parent, f, 1), c && u.parent && u.cp &&
							function(e, t) {
								var r = e._ptr,
									n = e._index,
									i = e._size,
									a = i[0],
									o = i[1];
								t.pinv = [], t.leftmost = [];
								var s, u, c, f, l, p = t.parent,
									m = t.pinv,
									h = t.leftmost,
									d = [],
									v = a,
									y = a + o,
									g = a + 2 * o;
								for (u = 0; u < o; u++) d[v + u] = -1, d[y + u] = -1, d[
									g + u] = 0;
								for (s = 0; s < a; s++) h[s] = -1;
								for (u = o - 1; u >= 0; u--)
									for (f = r[u], l = r[u + 1], c = f; c < l; c++) h[n[
										c]] = u;
								for (s = a - 1; s >= 0; s--) m[s] = -1, -1 !== (u = h[
									s]) && (0 == d[g + u]++ && (d[y + u] = s), d[0 +
									s] = d[v + u], d[v + u] = s);
								for (t.lnz = 0, t.m2 = a, u = 0; u < o; u++)
									if (s = d[v + u], t.lnz++, s < 0 && (s = t.m2++), m[
											s] = u, !(--g[u] <= 0)) {
										t.lnz += d[g + u];
										var x = p[u]; - 1 !== x && (0 === d[g + x] && (
												d[y + x] = d[y + u]), d[0 + d[y +
												u]] = d[v + x], d[v + x] = d[0 + s],
											d[g + x] += d[g + u])
									} for (s = 0; s < a; s++) m[s] < 0 && (m[s] = u++);
								return !0
							}(c, u))
							for (u.unz = 0, n = 0; n < s; n++) u.unz += u.cp[n]
					} else u.unz = 4 * o[s] + s, u.lnz = u.unz;
					return u
				}
			}));

		function wu(e, t) {
			return e[t] < 0
		}

		function Nu(e, t) {
			e[t] = vu(e[t])
		}

		function Mu(e) {
			return e < 0 ? vu(e) : e
		}

		function Eu(e, t, r, n, i) {
			var a, o, s, u = t._index,
				c = t._ptr,
				f = t._size[1],
				l = 0;
			for (n[0] = e; l >= 0;) {
				e = n[l];
				var p = i ? i[e] : e;
				wu(c, e) || (Nu(c, e), n[f + l] = p < 0 ? 0 : Mu(c[p]));
				var m = 1;
				for (o = n[f + l], s = p < 0 ? 0 : Mu(c[p + 1]); o < s; o++)
					if (!wu(c, a = u[o])) {
						n[f + l] = o, n[++l] = a, m = 0;
						break
					} m && (l--, n[--r] = e)
			}
			return r
		}
		var Su = Qe("csSpsolve", ["divideScalar", "multiply", "subtract"], (function(e) {
				var t = e.divideScalar,
					r = e.multiply,
					n = e.subtract;
				return function(e, i, a, o, s, u, c) {
					var f, l, p, m, h = e._values,
						d = e._index,
						v = e._ptr,
						y = e._size[1],
						g = i._values,
						x = i._index,
						b = i._ptr,
						w = function(e, t, r, n, i) {
							var a, o, s, u = e._ptr,
								c = e._size,
								f = t._index,
								l = t._ptr,
								p = c[1],
								m = p;
							for (o = l[r], s = l[r + 1], a = o; a < s; a++) {
								var h = f[a];
								wu(u, h) || (m = Eu(h, e, m, n, i))
							}
							for (a = m; a < p; a++) Nu(u, n[a]);
							return m
						}(e, i, a, o, u);
					for (f = w; f < y; f++) s[o[f]] = 0;
					for (l = b[a], p = b[a + 1], f = l; f < p; f++) s[x[f]] = g[f];
					for (var N = w; N < y; N++) {
						var M = o[N],
							E = u ? u[M] : M;
						if (!(E < 0))
							for (l = v[E], p = v[E + 1], s[M] = t(s[M], h[c ? l : p -
									1]), f = c ? l + 1 : l, m = c ? p : p - 1; f <
								m; f++) {
								var S = d[f];
								s[S] = n(s[S], r(h[f], s[M]))
							}
					}
					return w
				}
			})),
			Au = Qe("csLu", ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq",
				"SparseMatrix"
			], (function(e) {
				var t = e.abs,
					r = e.divideScalar,
					n = e.multiply,
					i = e.subtract,
					a = e.larger,
					o = e.largerEq,
					s = e.SparseMatrix,
					u = Su({
						divideScalar: r,
						multiply: n,
						subtract: i
					});
				return function(e, i, c) {
					if (!e) return null;
					var f, l = e._size[1],
						p = 100,
						m = 100;
					i && (f = i.q, p = i.lnz || p, m = i.unz || m);
					var h, d, v = [],
						y = [],
						g = [],
						x = new s({
							values: v,
							index: y,
							ptr: g,
							size: [l, l]
						}),
						b = [],
						w = [],
						N = [],
						M = new s({
							values: b,
							index: w,
							ptr: N,
							size: [l, l]
						}),
						E = [],
						S = [],
						A = [];
					for (h = 0; h < l; h++) S[h] = 0, E[h] = -1, g[h + 1] = 0;
					p = 0, m = 0;
					for (var O = 0; O < l; O++) {
						g[O] = p, N[O] = m;
						var C = f ? f[O] : O,
							_ = u(x, e, C, A, S, E, 1),
							T = -1,
							I = -1;
						for (d = _; d < l; d++)
							if (E[h = A[d]] < 0) {
								var k = t(S[h]);
								a(k, I) && (I = k, T = h)
							} else w[m] = E[h], b[m++] = S[h];
						if (-1 === T || I <= 0) return null;
						E[C] < 0 && o(t(S[C]), n(I, c)) && (T = C);
						var z = S[T];
						for (w[m] = O, b[m++] = z, E[T] = O, y[p] = T, v[p++] = 1, d =
							_; d < l; d++) E[h = A[d]] < 0 && (y[p] = h, v[p++] = r(S[
							h], z)), S[h] = 0
					}
					for (g[l] = p, N[l] = m, d = 0; d < p; d++) y[d] = E[y[d]];
					return v.splice(p, v.length - p), y.splice(p, y.length - p), b
						.splice(m, b.length - m), w.splice(m, w.length - m), {
							L: x,
							U: M,
							pinv: E
						}
				}
			})),
			Ou = Qe("slu", ["typed", "abs", "add", "multiply", "transpose", "divideScalar",
				"subtract", "larger", "largerEq", "SparseMatrix"
			], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.add,
					i = e.multiply,
					a = e.transpose,
					o = e.divideScalar,
					s = e.subtract,
					u = e.larger,
					c = e.largerEq,
					f = e.SparseMatrix,
					l = bu({
						add: n,
						multiply: i,
						transpose: a
					}),
					p = Au({
						abs: r,
						divideScalar: o,
						multiply: i,
						subtract: s,
						larger: u,
						largerEq: c,
						SparseMatrix: f
					});
				return t("slu", {
					"SparseMatrix, number, number": function(e, t, r) {
						if (!Z(t) || t < 0 || t > 3) throw new Error(
							"Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]"
							);
						if (r < 0 || r > 1) throw new Error(
							"Partial pivoting threshold must be a number from 0 to 1"
							);
						var n = l(t, e, !1),
							i = p(e, n, r);
						return {
							L: i.L,
							U: i.U,
							p: i.pinv,
							q: n.q,
							toString: function() {
								return "L: " + this.L.toString() + "\nU: " +
									this.U.toString() + "\np: " + this.p
									.toString() + (this.q ? "\nq: " + this.q
										.toString() : "") + "\n"
							}
						}
					}
				})
			}));

		function Cu(e, t) {
			var r, n = t.length,
				i = [];
			if (e)
				for (r = 0; r < n; r++) i[e[r]] = t[r];
			else
				for (r = 0; r < n; r++) i[r] = t[r];
			return i
		}
		var _u = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"],
			Tu = Qe("lusolve", _u, (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.lup,
					i = e.slu,
					a = e.usolve,
					o = e.lsolve,
					s = Ra({
						DenseMatrix: e.DenseMatrix
					});
				return t("lusolve", {
					"Array, Array | Matrix": function(e, t) {
						e = r(e);
						var i = n(e);
						return c(i.L, i.U, i.p, null, t).valueOf()
					},
					"DenseMatrix, Array | Matrix": function(e, t) {
						var r = n(e);
						return c(r.L, r.U, r.p, null, t)
					},
					"SparseMatrix, Array | Matrix": function(e, t) {
						var r = n(e);
						return c(r.L, r.U, r.p, null, t)
					},
					"SparseMatrix, Array | Matrix, number, number": function(e, t,
						r, n) {
						var a = i(e, r, n);
						return c(a.L, a.U, a.p, a.q, t)
					},
					"Object, Array | Matrix": function(e, t) {
						return c(e.L, e.U, e.p, e.q, t)
					}
				});

				function u(e) {
					if (m(e)) return e;
					if (p(e)) return r(e);
					throw new TypeError("Invalid Matrix LU decomposition")
				}

				function c(e, t, r, n, i) {
					e = u(e), t = u(t), r && ((i = s(e, i, !0))._data = Cu(r, i._data));
					var c = o(e, i),
						f = a(t, c);
					return n && (f._data = Cu(n, f._data)), f
				}
			})),
			Iu = ["parse"],
			ku = Qe("Help", Iu, (function(e) {
				var t = e.parse;

				function r(e) {
					if (!(this instanceof r)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					if (!e) throw new Error('Argument "doc" missing');
					this.doc = e
				}
				return r.prototype.type = "Help", r.prototype.isHelp = !0, r.prototype
					.toString = function() {
						var e = this.doc || {},
							r = "\n";
						if (e.name && (r += "Name: " + e.name + "\n\n"), e.category && (r +=
								"Category: " + e.category + "\n\n"), e.description && (r +=
								"Description:\n    " + e.description + "\n\n"), e.syntax &&
							(r += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e
							.examples) {
							r += "Examples:\n";
							for (var n = {}, i = 0; i < e.examples.length; i++) {
								var a = e.examples[i];
								r += "    " + a + "\n";
								var o = void 0;
								try {
									o = t(a).compile().evaluate(n)
								} catch (e) {
									o = e
								}
								void 0 === o || w(o) || (r += "        " + xe(o, {
									precision: 14
								}) + "\n")
							}
							r += "\n"
						}
						return e.mayThrow && e.mayThrow.length && (r += "Throws: " + e
								.mayThrow.join(", ") + "\n\n"), e.seealso && e.seealso
							.length && (r += "See also: " + e.seealso.join(", ") + "\n"), r
					}, r.prototype.toJSON = function() {
						var e = He(this.doc);
						return e.mathjs = "Help", e
					}, r.fromJSON = function(e) {
						var t = {};
						return Object.keys(e).filter((function(e) {
							return "mathjs" !== e
						})).forEach((function(r) {
							t[r] = e[r]
						})), new r(t)
					}, r.prototype.valueOf = r.prototype.toString, r
			}), {
				isClass: !0
			}),
			zu = ["?on", "math"],
			Ru = Qe("Chain", zu, (function(e) {
				var t = e.on,
					r = e.math;

				function n(e) {
					if (!(this instanceof n)) throw new SyntaxError(
						"Constructor must be called with the new operator");
					$(e) ? this.value = e.value : this.value = e
				}

				function i(e, t) {
					Ye(n.prototype, e, (function() {
						var e = t();
						if ("function" == typeof e) return a(e)
					}))
				}

				function a(e) {
					return function() {
						for (var t = [this.value], r = 0; r < arguments.length; r++) t[
							r + 1] = arguments[r];
						return new n(e.apply(e, t))
					}
				}
				n.prototype.type = "Chain", n.prototype.isChain = !0, n.prototype.done =
					function() {
						return this.value
					}, n.prototype.valueOf = function() {
						return this.value
					}, n.prototype.toString = function() {
						return xe(this.value)
					}, n.prototype.toJSON = function() {
						return {
							mathjs: "Chain",
							value: this.value
						}
					}, n.fromJSON = function(e) {
						return new n(e.value)
					}, n.createProxy = function(e, t) {
						if ("string" == typeof e) u = e, "function" == typeof(c = t) && (n
							.prototype[u] = a(c));
						else {
							var r = function(t) {
								Je(e, t) && void 0 === o[t] && i(t, (function() {
									return e[t]
								}))
							};
							for (var s in e) r(s)
						}
						var u, c
					};
				var o = {
					expression: !0,
					docs: !0,
					type: !0,
					classes: !0,
					json: !0,
					error: !0,
					isChain: !0
				};
				return n.createProxy(r), t && t("import", (function(e, t, r) {
					r || i(e, t)
				})), n
			}), {
				isClass: !0
			}),
			qu = {
				name: "pi",
				category: "Constants",
				syntax: ["pi"],
				description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
				examples: ["pi", "sin(pi/2)"],
				seealso: ["tau"]
			},
			Bu = {
				name: "e",
				category: "Constants",
				syntax: ["e"],
				description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
				examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
				seealso: ["exp"]
			},
			Du = {
				bignumber: {
					name: "bignumber",
					category: "Construction",
					syntax: ["bignumber(x)"],
					description: "Create a big number from a number or string.",
					examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")',
						'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"
					],
					seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
				},
				boolean: {
					name: "boolean",
					category: "Construction",
					syntax: ["x", "boolean(x)"],
					description: "Convert a string or number into a boolean.",
					examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")',
						'boolean("false")', "boolean([1, 0, 1, 1])"
					],
					seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
				},
				complex: {
					name: "complex",
					category: "Construction",
					syntax: ["complex()", "complex(re, im)", "complex(string)"],
					description: "Create a complex number.",
					examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
					seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
				},
				createUnit: {
					name: "createUnit",
					category: "Construction",
					syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
					description: "Create a user-defined unit and register it with the Unit type.",
					examples: ['createUnit("foo")',
						'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})',
						'createUnit("mph", "1 mile/hour")'
					],
					seealso: ["unit", "splitUnit"]
				},
				fraction: {
					name: "fraction",
					category: "Construction",
					syntax: ["fraction(num)", "fraction(num,den)"],
					description: "Create a fraction from a number or from a numerator and denominator.",
					examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"],
					seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string",
						"unit"]
				},
				index: {
					name: "index",
					category: "Construction",
					syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]",
						"[start1:end1, start2:end2, ...]",
						"[start1:step1:end1, start2:step2:end2, ...]"
					],
					description: "Create an index to get or replace a subset of a matrix",
					examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]",
						"A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"
					],
					seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range",
						"string", "unit"
					]
				},
				matrix: {
					name: "matrix",
					category: "Construction",
					syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")',
						"matrix([...])"
					],
					description: "Create a matrix.",
					examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()",
						"matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")',
						'matrix([3, 4; 5, 6], "sparse", "number")'
					],
					seealso: ["bignumber", "boolean", "complex", "index", "number", "string",
						"unit", "sparse"
					]
				},
				number: {
					name: "number",
					category: "Construction",
					syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
					description: "Create a number or convert a string or boolean into a number.",
					examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)",
						"number([true, false, true, true])", 'number(unit("52cm"), "m")'
					],
					seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix",
						"string", "unit"
					]
				},
				sparse: {
					name: "sparse",
					category: "Construction",
					syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])",
						'sparse([a1, b1, ...; a1, b2, ...], "number")'
					],
					description: "Create a sparse matrix.",
					examples: ["sparse()", "sparse([3, 4; 5, 6])",
						'sparse([3, 0; 5, 0], "number")'],
					seealso: ["bignumber", "boolean", "complex", "index", "number", "string",
						"unit", "matrix"
					]
				},
				splitUnit: {
					name: "splitUnit",
					category: "Construction",
					syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
					description: "Split a unit in an array of units whose sum is equal to the original unit.",
					examples: ['splitUnit(1 m, ["feet", "inch"])'],
					seealso: ["unit", "createUnit"]
				},
				string: {
					name: "string",
					category: "Construction",
					syntax: ['"text"', "string(x)"],
					description: "Create a string or convert a value to a string",
					examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
					seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number",
						"unit"]
				},
				unit: {
					name: "unit",
					category: "Construction",
					syntax: ["value unit", "unit(value, unit)", "unit(string)"],
					description: "Create a unit.",
					examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
					seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number",
						"string"
					]
				},
				e: Bu,
				E: Bu,
				false: {
					name: "false",
					category: "Constants",
					syntax: ["false"],
					description: "Boolean value false",
					examples: ["false"],
					seealso: ["true"]
				},
				i: {
					name: "i",
					category: "Constants",
					syntax: ["i"],
					description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
					examples: ["i", "i * i", "sqrt(-1)"],
					seealso: []
				},
				Infinity: {
					name: "Infinity",
					category: "Constants",
					syntax: ["Infinity"],
					description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
					examples: ["Infinity", "1 / 0"],
					seealso: []
				},
				LN2: {
					name: "LN2",
					category: "Constants",
					syntax: ["LN2"],
					description: "Returns the natural logarithm of 2, approximately equal to 0.693",
					examples: ["LN2", "log(2)"],
					seealso: []
				},
				LN10: {
					name: "LN10",
					category: "Constants",
					syntax: ["LN10"],
					description: "Returns the natural logarithm of 10, approximately equal to 2.302",
					examples: ["LN10", "log(10)"],
					seealso: []
				},
				LOG2E: {
					name: "LOG2E",
					category: "Constants",
					syntax: ["LOG2E"],
					description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
					examples: ["LOG2E", "log(e, 2)"],
					seealso: []
				},
				LOG10E: {
					name: "LOG10E",
					category: "Constants",
					syntax: ["LOG10E"],
					description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
					examples: ["LOG10E", "log(e, 10)"],
					seealso: []
				},
				NaN: {
					name: "NaN",
					category: "Constants",
					syntax: ["NaN"],
					description: "Not a number",
					examples: ["NaN", "0 / 0"],
					seealso: []
				},
				null: {
					name: "null",
					category: "Constants",
					syntax: ["null"],
					description: "Value null",
					examples: ["null"],
					seealso: ["true", "false"]
				},
				pi: qu,
				PI: qu,
				phi: {
					name: "phi",
					category: "Constants",
					syntax: ["phi"],
					description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
					examples: ["phi"],
					seealso: []
				},
				SQRT1_2: {
					name: "SQRT1_2",
					category: "Constants",
					syntax: ["SQRT1_2"],
					description: "Returns the square root of 1/2, approximately equal to 0.707",
					examples: ["SQRT1_2", "sqrt(1/2)"],
					seealso: []
				},
				SQRT2: {
					name: "SQRT2",
					category: "Constants",
					syntax: ["SQRT2"],
					description: "Returns the square root of 2, approximately equal to 1.414",
					examples: ["SQRT2", "sqrt(2)"],
					seealso: []
				},
				tau: {
					name: "tau",
					category: "Constants",
					syntax: ["tau"],
					description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
					examples: ["tau", "2 * pi"],
					seealso: ["pi"]
				},
				true: {
					name: "true",
					category: "Constants",
					syntax: ["true"],
					description: "Boolean value true",
					examples: ["true"],
					seealso: ["false"]
				},
				version: {
					name: "version",
					category: "Constants",
					syntax: ["version"],
					description: "A string with the version number of math.js",
					examples: ["version"],
					seealso: []
				},
				speedOfLight: {
					description: "Speed of light in vacuum",
					examples: ["speedOfLight"]
				},
				gravitationConstant: {
					description: "Newtonian constant of gravitation",
					examples: ["gravitationConstant"]
				},
				planckConstant: {
					description: "Planck constant",
					examples: ["planckConstant"]
				},
				reducedPlanckConstant: {
					description: "Reduced Planck constant",
					examples: ["reducedPlanckConstant"]
				},
				magneticConstant: {
					description: "Magnetic constant (vacuum permeability)",
					examples: ["magneticConstant"]
				},
				electricConstant: {
					description: "Electric constant (vacuum permeability)",
					examples: ["electricConstant"]
				},
				vacuumImpedance: {
					description: "Characteristic impedance of vacuum",
					examples: ["vacuumImpedance"]
				},
				coulomb: {
					description: "Coulomb's constant",
					examples: ["coulomb"]
				},
				elementaryCharge: {
					description: "Elementary charge",
					examples: ["elementaryCharge"]
				},
				bohrMagneton: {
					description: "Borh magneton",
					examples: ["bohrMagneton"]
				},
				conductanceQuantum: {
					description: "Conductance quantum",
					examples: ["conductanceQuantum"]
				},
				inverseConductanceQuantum: {
					description: "Inverse conductance quantum",
					examples: ["inverseConductanceQuantum"]
				},
				magneticFluxQuantum: {
					description: "Magnetic flux quantum",
					examples: ["magneticFluxQuantum"]
				},
				nuclearMagneton: {
					description: "Nuclear magneton",
					examples: ["nuclearMagneton"]
				},
				klitzing: {
					description: "Von Klitzing constant",
					examples: ["klitzing"]
				},
				bohrRadius: {
					description: "Borh radius",
					examples: ["bohrRadius"]
				},
				classicalElectronRadius: {
					description: "Classical electron radius",
					examples: ["classicalElectronRadius"]
				},
				electronMass: {
					description: "Electron mass",
					examples: ["electronMass"]
				},
				fermiCoupling: {
					description: "Fermi coupling constant",
					examples: ["fermiCoupling"]
				},
				fineStructure: {
					description: "Fine-structure constant",
					examples: ["fineStructure"]
				},
				hartreeEnergy: {
					description: "Hartree energy",
					examples: ["hartreeEnergy"]
				},
				protonMass: {
					description: "Proton mass",
					examples: ["protonMass"]
				},
				deuteronMass: {
					description: "Deuteron Mass",
					examples: ["deuteronMass"]
				},
				neutronMass: {
					description: "Neutron mass",
					examples: ["neutronMass"]
				},
				quantumOfCirculation: {
					description: "Quantum of circulation",
					examples: ["quantumOfCirculation"]
				},
				rydberg: {
					description: "Rydberg constant",
					examples: ["rydberg"]
				},
				thomsonCrossSection: {
					description: "Thomson cross section",
					examples: ["thomsonCrossSection"]
				},
				weakMixingAngle: {
					description: "Weak mixing angle",
					examples: ["weakMixingAngle"]
				},
				efimovFactor: {
					description: "Efimov factor",
					examples: ["efimovFactor"]
				},
				atomicMass: {
					description: "Atomic mass constant",
					examples: ["atomicMass"]
				},
				avogadro: {
					description: "Avogadro's number",
					examples: ["avogadro"]
				},
				boltzmann: {
					description: "Boltzmann constant",
					examples: ["boltzmann"]
				},
				faraday: {
					description: "Faraday constant",
					examples: ["faraday"]
				},
				firstRadiation: {
					description: "First radiation constant",
					examples: ["firstRadiation"]
				},
				loschmidt: {
					description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
					examples: ["loschmidt"]
				},
				gasConstant: {
					description: "Gas constant",
					examples: ["gasConstant"]
				},
				molarPlanckConstant: {
					description: "Molar Planck constant",
					examples: ["molarPlanckConstant"]
				},
				molarVolume: {
					description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
					examples: ["molarVolume"]
				},
				sackurTetrode: {
					description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
					examples: ["sackurTetrode"]
				},
				secondRadiation: {
					description: "Second radiation constant",
					examples: ["secondRadiation"]
				},
				stefanBoltzmann: {
					description: "Stefan-Boltzmann constant",
					examples: ["stefanBoltzmann"]
				},
				wienDisplacement: {
					description: "Wien displacement law constant",
					examples: ["wienDisplacement"]
				},
				molarMass: {
					description: "Molar mass constant",
					examples: ["molarMass"]
				},
				molarMassC12: {
					description: "Molar mass constant of carbon-12",
					examples: ["molarMassC12"]
				},
				gravity: {
					description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
					examples: ["gravity"]
				},
				planckLength: {
					description: "Planck length",
					examples: ["planckLength"]
				},
				planckMass: {
					description: "Planck mass",
					examples: ["planckMass"]
				},
				planckTime: {
					description: "Planck time",
					examples: ["planckTime"]
				},
				planckCharge: {
					description: "Planck charge",
					examples: ["planckCharge"]
				},
				planckTemperature: {
					description: "Planck temperature",
					examples: ["planckTemperature"]
				},
				derivative: {
					name: "derivative",
					category: "Algebra",
					syntax: ["derivative(expr, variable)",
						"derivative(expr, variable, {simplify: boolean})"
					],
					description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
					examples: ['derivative("2x^3", "x")',
						'derivative("2x^3", "x", {simplify: false})',
						'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")',
						'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)",
						"df.evaluate({x: 3})"
					],
					seealso: ["simplify", "parse", "evaluate"]
				},
				lsolve: {
					name: "lsolve",
					category: "Algebra",
					syntax: ["x=lsolve(L, b)"],
					description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
					examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
					seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"]
				},
				lsolveAll: {
					name: "lsolveAll",
					category: "Algebra",
					syntax: ["x=lsolveAll(L, b)"],
					description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
					examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
					seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"]
				},
				lup: {
					name: "lup",
					category: "Algebra",
					syntax: ["lup(m)"],
					description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
					examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))",
						"lup(sparse([[2, 1], [1, 4]]))"
					],
					seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
				},
				lusolve: {
					name: "lusolve",
					category: "Algebra",
					syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
					description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
					examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
					seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
				},
				leafCount: {
					name: "leafCount",
					category: "Algebra",
					syntax: ["leafCount(expr)"],
					description: "Computes the number of leaves in the parse tree of the given expression",
					examples: ['leafCount("e^(i*pi)-1")',
						'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'
					],
					seealso: ["simplify"]
				},
				simplify: {
					name: "simplify",
					category: "Algebra",
					syntax: ["simplify(expr)", "simplify(expr, rules)"],
					description: "Simplify an expression tree.",
					examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")',
						'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)",
						"simplified.evaluate({x: 2})"
					],
					seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize",
						"resolve"
					]
				},
				resolve: {
					name: "resolve",
					category: "Algebra",
					syntax: ["resolve(node, scope)"],
					description: "Recursively substitute variables in an expression tree.",
					examples: ['resolve(parse("1 + x"), { x: 7 })',
						'resolve(parse("size(text)"), { text: "Hello World" })',
						'resolve(parse("x + y"), { x: parse("3z") })',
						'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'
					],
					seealso: ["simplify", "evaluate"],
					mayThrow: ["ReferenceError"]
				},
				simplifyCore: {
					name: "simplifyCore",
					category: "Algebra",
					syntax: ["simplifyCore(node)"],
					description: "Perform simple one-pass simplifications on an expression tree.",
					examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'],
					seealso: ["simplify", "evaluate"]
				},
				rationalize: {
					name: "rationalize",
					category: "Algebra",
					syntax: ["rationalize(expr)", "rationalize(expr, scope)",
						"rationalize(expr, scope, detailed)"
					],
					description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
					examples: ['rationalize("2x/y - y/(x+1)")',
						'rationalize("2x/y - y/(x+1)", true)'
					],
					seealso: ["simplify"]
				},
				slu: {
					name: "slu",
					category: "Algebra",
					syntax: ["slu(A, order, threshold)"],
					description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
					examples: [
						"slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"
					],
					seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
				},
				usolve: {
					name: "usolve",
					category: "Algebra",
					syntax: ["x=usolve(U, b)"],
					description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
					examples: [
						"x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"
					],
					seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"]
				},
				usolveAll: {
					name: "usolveAll",
					category: "Algebra",
					syntax: ["x=usolve(U, b)"],
					description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
					examples: [
						"x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"
					],
					seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"]
				},
				qr: {
					name: "qr",
					category: "Algebra",
					syntax: ["qr(A)"],
					description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
					examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
					seealso: ["lup", "slu", "matrix"]
				},
				abs: {
					name: "abs",
					category: "Arithmetic",
					syntax: ["abs(x)"],
					description: "Compute the absolute value.",
					examples: ["abs(3.5)", "abs(-4.2)"],
					seealso: ["sign"]
				},
				add: {
					name: "add",
					category: "Operators",
					syntax: ["x + y", "add(x, y)"],
					description: "Add two values.",
					examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch",
						'"2.3" + "4"'],
					seealso: ["subtract"]
				},
				cbrt: {
					name: "cbrt",
					category: "Arithmetic",
					syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
					description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
					examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)",
						"cbrt(8i, true)", "cbrt(27 m^3)"
					],
					seealso: ["square", "sqrt", "cube", "multiply"]
				},
				ceil: {
					name: "ceil",
					category: "Arithmetic",
					syntax: ["ceil(x)"],
					description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
					examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
					seealso: ["floor", "fix", "round"]
				},
				cube: {
					name: "cube",
					category: "Arithmetic",
					syntax: ["cube(x)"],
					description: "Compute the cube of a value. The cube of x is x * x * x.",
					examples: ["cube(2)", "2^3", "2 * 2 * 2"],
					seealso: ["multiply", "square", "pow"]
				},
				divide: {
					name: "divide",
					category: "Operators",
					syntax: ["x / y", "divide(x, y)"],
					description: "Divide two values.",
					examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2",
						"18 km / 4.5"
					],
					seealso: ["multiply"]
				},
				dotDivide: {
					name: "dotDivide",
					category: "Operators",
					syntax: ["x ./ y", "dotDivide(x, y)"],
					description: "Divide two values element wise.",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
					seealso: ["multiply", "dotMultiply", "divide"]
				},
				dotMultiply: {
					name: "dotMultiply",
					category: "Operators",
					syntax: ["x .* y", "dotMultiply(x, y)"],
					description: "Multiply two values element wise.",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
					seealso: ["multiply", "divide", "dotDivide"]
				},
				dotPow: {
					name: "dotPow",
					category: "Operators",
					syntax: ["x .^ y", "dotPow(x, y)"],
					description: "Calculates the power of x to y element wise.",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
					seealso: ["pow"]
				},
				exp: {
					name: "exp",
					category: "Arithmetic",
					syntax: ["exp(x)"],
					description: "Calculate the exponent of a value.",
					examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4",
						"(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"
					],
					seealso: ["expm", "expm1", "pow", "log"]
				},
				expm: {
					name: "expm",
					category: "Arithmetic",
					syntax: ["exp(x)"],
					description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
					examples: ["expm([[0,2],[0,0]])"],
					seealso: ["exp"]
				},
				expm1: {
					name: "expm1",
					category: "Arithmetic",
					syntax: ["expm1(x)"],
					description: "Calculate the value of subtracting 1 from the exponential value.",
					examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
					seealso: ["exp", "pow", "log"]
				},
				fix: {
					name: "fix",
					category: "Arithmetic",
					syntax: ["fix(x)"],
					description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
					examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
					seealso: ["ceil", "floor", "round"]
				},
				floor: {
					name: "floor",
					category: "Arithmetic",
					syntax: ["floor(x)"],
					description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
					examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
					seealso: ["ceil", "fix", "round"]
				},
				gcd: {
					name: "gcd",
					category: "Arithmetic",
					syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
					description: "Compute the greatest common divisor.",
					examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
					seealso: ["lcm", "xgcd"]
				},
				hypot: {
					name: "hypot",
					category: "Arithmetic",
					syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
					description: "Calculate the hypotenusa of a list with values. ",
					examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
					seealso: ["abs", "norm"]
				},
				lcm: {
					name: "lcm",
					category: "Arithmetic",
					syntax: ["lcm(x, y)"],
					description: "Compute the least common multiple.",
					examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
					seealso: ["gcd"]
				},
				log: {
					name: "log",
					category: "Arithmetic",
					syntax: ["log(x)", "log(x, base)"],
					description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
					examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)",
						"log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"
					],
					seealso: ["exp", "log1p", "log2", "log10"]
				},
				log2: {
					name: "log2",
					category: "Arithmetic",
					syntax: ["log2(x)"],
					description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
					examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
					seealso: ["exp", "log1p", "log", "log10"]
				},
				log1p: {
					name: "log1p",
					category: "Arithmetic",
					syntax: ["log1p(x)", "log1p(x, base)"],
					description: "Calculate the logarithm of a `value+1`",
					examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)",
						"log1p(9999) / log(10)"
					],
					seealso: ["exp", "log", "log2", "log10"]
				},
				log10: {
					name: "log10",
					category: "Arithmetic",
					syntax: ["log10(x)"],
					description: "Compute the 10-base logarithm of a value.",
					examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)",
						"log(10000, 10)"
					],
					seealso: ["exp", "log"]
				},
				mod: {
					name: "mod",
					category: "Operators",
					syntax: ["x % y", "x mod y", "mod(x, y)"],
					description: "Calculates the modulus, the remainder of an integer division.",
					examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)",
						"isOdd(3)"
					],
					seealso: ["divide"]
				},
				multiply: {
					name: "multiply",
					category: "Operators",
					syntax: ["x * y", "multiply(x, y)"],
					description: "multiply two values.",
					examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)",
						"3 * 2.1 km"],
					seealso: ["divide"]
				},
				norm: {
					name: "norm",
					category: "Arithmetic",
					syntax: ["norm(x)", "norm(x, p)"],
					description: "Calculate the norm of a number, vector or matrix.",
					examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)",
						"norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)",
						"norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)",
						'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")'
					]
				},
				nthRoot: {
					name: "nthRoot",
					category: "Arithmetic",
					syntax: ["nthRoot(a)", "nthRoot(a, root)"],
					description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
					examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
					seealso: ["nthRoots", "pow", "sqrt"]
				},
				nthRoots: {
					name: "nthRoots",
					category: "Arithmetic",
					syntax: ["nthRoots(A)", "nthRoots(A, root)"],
					description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
					examples: ["nthRoots(1)", "nthRoots(1, 3)"],
					seealso: ["sqrt", "pow", "nthRoot"]
				},
				pow: {
					name: "pow",
					category: "Operators",
					syntax: ["x ^ y", "pow(x, y)"],
					description: "Calculates the power of x to y, x^y.",
					examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)"],
					seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
				},
				round: {
					name: "round",
					category: "Arithmetic",
					syntax: ["round(x)", "round(x, n)"],
					description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
					examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)",
						"round(pi, 3)", "round(123.45678, 2)"
					],
					seealso: ["ceil", "floor", "fix"]
				},
				sign: {
					name: "sign",
					category: "Arithmetic",
					syntax: ["sign(x)"],
					description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
					examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
					seealso: ["abs"]
				},
				sqrt: {
					name: "sqrt",
					category: "Arithmetic",
					syntax: ["sqrt(x)"],
					description: "Compute the square root value. If x = y * y, then y is the square root of x.",
					examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
					seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
				},
				sqrtm: {
					name: "sqrtm",
					category: "Arithmetic",
					syntax: ["sqrtm(x)"],
					description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
					examples: ["sqrtm([[1, 2], [3, 4]])"],
					seealso: ["sqrt", "abs", "square", "multiply"]
				},
				square: {
					name: "square",
					category: "Arithmetic",
					syntax: ["square(x)"],
					description: "Compute the square of a value. The square of x is x * x.",
					examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
					seealso: ["multiply", "pow", "sqrt", "cube"]
				},
				subtract: {
					name: "subtract",
					category: "Operators",
					syntax: ["x - y", "subtract(x, y)"],
					description: "subtract two values.",
					examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
					seealso: ["add"]
				},
				unaryMinus: {
					name: "unaryMinus",
					category: "Operators",
					syntax: ["-x", "unaryMinus(x)"],
					description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
					examples: ["-4.5", "-(-5.6)", '-"22"'],
					seealso: ["add", "subtract", "unaryPlus"]
				},
				unaryPlus: {
					name: "unaryPlus",
					category: "Operators",
					syntax: ["+x", "unaryPlus(x)"],
					description: "Converts booleans and strings to numbers.",
					examples: ["+true", '+"2"'],
					seealso: ["add", "subtract", "unaryMinus"]
				},
				xgcd: {
					name: "xgcd",
					category: "Arithmetic",
					syntax: ["xgcd(a, b)"],
					description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
					examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
					seealso: ["gcd", "lcm"]
				},
				invmod: {
					name: "invmod",
					category: "Arithmetic",
					syntax: ["invmod(a, b)"],
					description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax ≣ 1 (mod b)",
					examples: ["invmod(8, 12)=NaN", "invmod(7, 13)=2",
						"math.invmod(15151, 15122)=10429"
					],
					seealso: ["gcd", "xgcd"]
				},
				bitAnd: {
					name: "bitAnd",
					category: "Bitwise",
					syntax: ["x & y", "bitAnd(x, y)"],
					description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
					examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
					seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift",
						"rightLogShift"
					]
				},
				bitNot: {
					name: "bitNot",
					category: "Bitwise",
					syntax: ["~x", "bitNot(x)"],
					description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
					examples: ["~1", "~2", "bitNot([2, -3, 4])"],
					seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift",
						"rightLogShift"
					]
				},
				bitOr: {
					name: "bitOr",
					category: "Bitwise",
					syntax: ["x | y", "bitOr(x, y)"],
					description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
					examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
					seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift",
						"rightLogShift"
					]
				},
				bitXor: {
					name: "bitXor",
					category: "Bitwise",
					syntax: ["bitXor(x, y)"],
					description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
					examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
					seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift",
						"rightLogShift"
					]
				},
				leftShift: {
					name: "leftShift",
					category: "Bitwise",
					syntax: ["x << y", "leftShift(x, y)"],
					description: "Bitwise left logical shift of a value x by y number of bits.",
					examples: ["4 << 1", "8 >> 1"],
					seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift",
						"rightLogShift"
					]
				},
				rightArithShift: {
					name: "rightArithShift",
					category: "Bitwise",
					syntax: ["x >> y", "rightArithShift(x, y)"],
					description: "Bitwise right arithmetic shift of a value x by y number of bits.",
					examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
					seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
				},
				rightLogShift: {
					name: "rightLogShift",
					category: "Bitwise",
					syntax: ["x >>> y", "rightLogShift(x, y)"],
					description: "Bitwise right logical shift of a value x by y number of bits.",
					examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
					seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
				},
				bellNumbers: {
					name: "bellNumbers",
					category: "Combinatorics",
					syntax: ["bellNumbers(n)"],
					description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
					examples: ["bellNumbers(3)", "bellNumbers(8)"],
					seealso: ["stirlingS2"]
				},
				catalan: {
					name: "catalan",
					category: "Combinatorics",
					syntax: ["catalan(n)"],
					description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
					examples: ["catalan(3)", "catalan(8)"],
					seealso: ["bellNumbers"]
				},
				composition: {
					name: "composition",
					category: "Combinatorics",
					syntax: ["composition(n, k)"],
					description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
					examples: ["composition(5, 3)"],
					seealso: ["combinations"]
				},
				stirlingS2: {
					name: "stirlingS2",
					category: "Combinatorics",
					syntax: ["stirlingS2(n, k)"],
					description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
					examples: ["stirlingS2(5, 3)"],
					seealso: ["bellNumbers"]
				},
				config: {
					name: "config",
					category: "Core",
					syntax: ["config()", "config(options)"],
					description: "Get configuration or change configuration.",
					examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})',
						"1/3 + 1/4"],
					seealso: []
				},
				import: {
					name: "import",
					category: "Core",
					syntax: ["import(functions)", "import(functions, options)"],
					description: "Import functions or constants from an object.",
					examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)",
						"myConstant"],
					seealso: []
				},
				typed: {
					name: "typed",
					category: "Core",
					syntax: ["typed(signatures)", "typed(name, signatures)"],
					description: "Create a typed function.",
					examples: ['double = typed({ "number": f(x)=x+x })', "double(2)",
						'double("hello")'
					],
					seealso: []
				},
				arg: {
					name: "arg",
					category: "Complex",
					syntax: ["arg(x)"],
					description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
					examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
					seealso: ["re", "im", "conj", "abs"]
				},
				conj: {
					name: "conj",
					category: "Complex",
					syntax: ["conj(x)"],
					description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
					examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
					seealso: ["re", "im", "abs", "arg"]
				},
				re: {
					name: "re",
					category: "Complex",
					syntax: ["re(x)"],
					description: "Get the real part of a complex number.",
					examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
					seealso: ["im", "conj", "abs", "arg"]
				},
				im: {
					name: "im",
					category: "Complex",
					syntax: ["im(x)"],
					description: "Get the imaginary part of a complex number.",
					examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
					seealso: ["re", "conj", "abs", "arg"]
				},
				evaluate: {
					name: "evaluate",
					category: "Expression",
					syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"],
					description: "Evaluate an expression or an array with expressions.",
					examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'],
					seealso: []
				},
				help: {
					name: "help",
					category: "Expression",
					syntax: ["help(object)", "help(string)"],
					description: "Display documentation on a function or data type.",
					examples: ["help(sqrt)", 'help("complex")'],
					seealso: []
				},
				distance: {
					name: "distance",
					category: "Geometry",
					syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"],
					description: "Calculates the Euclidean distance between two points.",
					examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
					seealso: []
				},
				intersect: {
					name: "intersect",
					category: "Geometry",
					syntax: ["intersect(expr1, expr2, expr3, expr4)",
						"intersect(expr1, expr2, expr3)"
					],
					description: "Computes the intersection point of lines and/or planes.",
					examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])",
						"intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"
					],
					seealso: []
				},
				and: {
					name: "and",
					category: "Logical",
					syntax: ["x and y", "and(x, y)"],
					description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
					examples: ["true and false", "true and true", "2 and 4"],
					seealso: ["not", "or", "xor"]
				},
				not: {
					name: "not",
					category: "Logical",
					syntax: ["not x", "not(x)"],
					description: "Logical not. Flips the boolean value of given argument.",
					examples: ["not true", "not false", "not 2", "not 0"],
					seealso: ["and", "or", "xor"]
				},
				or: {
					name: "or",
					category: "Logical",
					syntax: ["x or y", "or(x, y)"],
					description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
					examples: ["true or false", "false or false", "0 or 4"],
					seealso: ["not", "and", "xor"]
				},
				xor: {
					name: "xor",
					category: "Logical",
					syntax: ["x xor y", "xor(x, y)"],
					description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
					examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
					seealso: ["not", "and", "or"]
				},
				concat: {
					name: "concat",
					category: "Matrix",
					syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
					description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
					examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)",
						"concat(A, B, 1)", "concat(A, B, 2)"
					],
					seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze",
						"subset", "trace", "transpose", "zeros"
					]
				},
				count: {
					name: "count",
					category: "Matrix",
					syntax: ["count(x)"],
					description: "Count the number of elements of a matrix, array or string.",
					examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)",
						'count("hello world")'
					],
					seealso: ["size"]
				},
				cross: {
					name: "cross",
					category: "Matrix",
					syntax: ["cross(A, B)"],
					description: "Calculate the cross product for two vectors in three dimensional space.",
					examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])",
						"cross([2, 3, 4],  [5, 6, 7])"
					],
					seealso: ["multiply", "dot"]
				},
				column: {
					name: "column",
					category: "Matrix",
					syntax: ["column(x, index)"],
					description: "Return a column from a matrix or array.",
					examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
					seealso: ["row", "matrixFromColumns"]
				},
				ctranspose: {
					name: "ctranspose",
					category: "Matrix",
					syntax: ["x'", "ctranspose(x)"],
					description: "Complex Conjugate and Transpose a matrix",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "trace", "zeros"
					]
				},
				det: {
					name: "det",
					category: "Matrix",
					syntax: ["det(x)"],
					description: "Calculate the determinant of a matrix",
					examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
					seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "trace", "transpose", "zeros"
					]
				},
				diag: {
					name: "diag",
					category: "Matrix",
					syntax: ["diag(x)", "diag(x, k)"],
					description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
					examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]",
						"diag(a)"
					],
					seealso: ["concat", "det", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "trace", "transpose", "zeros"
					]
				},
				diff: {
					name: "diff",
					category: "Matrix",
					syntax: ["diff(arr)", "diff(arr, dim)"],
					description: [
						"Create a new matrix or array with the difference of the passed matrix or array.",
						"Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference",
						"If no dimension parameter is passed it is assumed as dimension 0",
						"Dimension is zero-based in javascript and one-based in the parser",
						"Arrays must be 'rectangular' meaning arrays like [1, 2]",
						"If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"
					],
					examples: ["diff([1, 2, 4, 7, 0])", "diff([1, 2, 4, 7, 0], 0)",
						"diff(matrix([1, 2, 4, 7, 0]))", "diff([[1, 2], [3, 4]])",
						"diff([[1, 2], [3, 4]], 0)", "diff([[1, 2], [3, 4]], 1)",
						"diff([[1, 2], [3, 4]], bignumber(1))",
						"diff(matrix([[1, 2], [3, 4]]), 1)", "diff([[1, 2], matrix([3, 4])], 1)"
					],
					seealso: ["subtract", "partitionSelect"]
				},
				dot: {
					name: "dot",
					category: "Matrix",
					syntax: ["dot(A, B)", "A * B"],
					description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
					examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
					seealso: ["multiply", "cross"]
				},
				getMatrixDataType: {
					name: "getMatrixDataType",
					category: "Matrix",
					syntax: ["getMatrixDataType(x)"],
					description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
					examples: ["getMatrixDataType([1, 2, 3])",
						"getMatrixDataType([[5 cm], [2 inch]])",
						'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"
					],
					seealso: ["matrix", "sparse", "typeOf"]
				},
				identity: {
					name: "identity",
					category: "Matrix",
					syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
					description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
					examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]",
						"identity(size(a))"
					],
					seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze",
						"subset", "trace", "transpose", "zeros"
					]
				},
				filter: {
					name: "filter",
					category: "Matrix",
					syntax: ["filter(x, test)"],
					description: "Filter items in a matrix.",
					examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)",
						"filter([6, -2, 0, 1, 0], x != 0)"
					],
					seealso: ["sort", "map", "forEach"]
				},
				flatten: {
					name: "flatten",
					category: "Matrix",
					syntax: ["flatten(x)"],
					description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
					seealso: ["concat", "resize", "size", "squeeze"]
				},
				forEach: {
					name: "forEach",
					category: "Matrix",
					syntax: ["forEach(x, callback)"],
					description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
					examples: [],
					seealso: ["map", "sort", "filter"]
				},
				inv: {
					name: "inv",
					category: "Matrix",
					syntax: ["inv(x)"],
					description: "Calculate the inverse of a matrix",
					examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
					seealso: ["concat", "det", "diag", "identity", "ones", "range", "size",
						"squeeze", "subset", "trace", "transpose", "zeros"
					]
				},
				eigs: {
					name: "eigs",
					category: "Matrix",
					syntax: ["eigs(x)"],
					description: "Calculate the eigenvalues and eigenvectors of a real symmetric matrix",
					examples: ["eigs([[5, 2.3], [2.3, 1]])"],
					seealso: ["inv"]
				},
				kron: {
					name: "kron",
					category: "Matrix",
					syntax: ["kron(x, y)"],
					description: "Calculates the kronecker product of 2 matrices or vectors.",
					examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
					seealso: ["multiply", "dot", "cross"]
				},
				matrixFromFunction: {
					name: "matrixFromFunction",
					category: "Matrix",
					syntax: ["math.matrixFromFunction(size, fn)",
						"math.matrixFromFunction(size, fn, format)",
						"math.matrixFromFunction(size, fn, format, datatype)",
						"math.matrixFromFunction(size, format, fn)",
						"math.matrixFromFunction(size, format, datatype, fn)"
					],
					description: "Create a matrix by evaluating a generating function at each index.",
					examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)",
						"g(I) = I[1] - I[2] == 1 ? 4 : 0",
						'matrixFromFunction([100, 100], "sparse", g)',
						"matrixFromFunction([5], random)"
					],
					seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"]
				},
				matrixFromRows: {
					name: "matrixFromRows",
					category: "Matrix",
					syntax: ["math.matrixFromRows(...arr)", "math.matrixFromRows(row1, row2)",
						"math.matrixFromRows(row1, row2, row3)"
					],
					description: "Create a dense matrix from vectors as individual rows.",
					examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"],
					seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"]
				},
				matrixFromColumns: {
					name: "matrixFromColumns",
					category: "Matrix",
					syntax: ["math.matrixFromColumns(...arr)", "math.matrixFromColumns(row1, row2)",
						"math.matrixFromColumns(row1, row2, row3)"
					],
					description: "Create a dense matrix from vectors as individual columns.",
					examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"],
					seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"]
				},
				map: {
					name: "map",
					category: "Matrix",
					syntax: ["map(x, callback)"],
					description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
					examples: ["map([1, 2, 3], square)"],
					seealso: ["filter", "forEach"]
				},
				ones: {
					name: "ones",
					category: "Matrix",
					syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])",
						"ones([m, n])", "ones([m, n, p, ...])"
					],
					description: "Create a matrix containing ones.",
					examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5",
						"a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"
					],
					seealso: ["concat", "det", "diag", "identity", "inv", "range", "size",
						"squeeze", "subset", "trace", "transpose", "zeros"
					]
				},
				partitionSelect: {
					name: "partitionSelect",
					category: "Matrix",
					syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
					description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
					examples: ["partitionSelect([5, 10, 1], 2)",
						'partitionSelect(["C", "B", "A", "D"], 1)'
					],
					seealso: ["sort"]
				},
				range: {
					name: "range",
					category: "Type",
					syntax: ["start:end", "start:step:end", "range(start, end)",
						"range(start, end, step)", "range(string)"
					],
					description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
					examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")',
						"a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"
					],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze",
						"subset", "trace", "transpose", "zeros"
					]
				},
				resize: {
					name: "resize",
					category: "Matrix",
					syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
					description: "Resize a matrix.",
					examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])",
						"resize([1,2,3], [5], -1)", "resize(2, [2, 3])",
						'resize("hello", [8], "!")'
					],
					seealso: ["size", "subset", "squeeze", "reshape"]
				},
				reshape: {
					name: "reshape",
					category: "Matrix",
					syntax: ["reshape(x, sizes)"],
					description: "Reshape a multi dimensional array to fit the specified dimensions.",
					examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])",
						"reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])"
					],
					seealso: ["size", "squeeze", "resize"]
				},
				rotate: {
					name: "rotate",
					category: "Matrix",
					syntax: ["rotate(w, theta)", "rotate(w, theta, v)"],
					description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
					examples: ["rotate([1, 0], math.pi / 2)",
						'rotate(matrix([1, 0]), unit("35deg"))',
						'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])',
						'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'
					],
					seealso: ["matrix", "rotationMatrix"]
				},
				rotationMatrix: {
					name: "rotationMatrix",
					category: "Matrix",
					syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)",
						"rotationMatrix(theta, v, format)"
					],
					description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
					examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])',
						'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'
					],
					seealso: ["cos", "sin"]
				},
				row: {
					name: "row",
					category: "Matrix",
					syntax: ["row(x, index)"],
					description: "Return a row from a matrix or array.",
					examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
					seealso: ["column", "matrixFromRows"]
				},
				size: {
					name: "size",
					category: "Matrix",
					syntax: ["size(x)"],
					description: "Calculate the size of a matrix.",
					examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]",
						"size(a)", "size(1:6)"
					],
					seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range",
						"squeeze", "subset", "trace", "transpose", "zeros"
					]
				},
				sort: {
					name: "sort",
					category: "Matrix",
					syntax: ["sort(x)", "sort(x, compare)"],
					description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
					examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])',
						"sortByLength(a, b) = size(a)[1] - size(b)[1]",
						'sort(["Langdon", "Tom", "Sara"], sortByLength)',
						'sort(["10", "1", "2"], "natural")'
					],
					seealso: ["map", "filter", "forEach"]
				},
				squeeze: {
					name: "squeeze",
					category: "Matrix",
					syntax: ["squeeze(x)"],
					description: "Remove inner and outer singleton dimensions from a matrix.",
					examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)",
						"size(squeeze(b))"
					],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"subset", "trace", "transpose", "zeros"
					]
				},
				subset: {
					name: "subset",
					category: "Matrix",
					syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])",
						"subset(value, [index], replacement)"
					],
					description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
					examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]",
						"e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"
					],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "trace", "transpose", "zeros"
					]
				},
				trace: {
					name: "trace",
					category: "Matrix",
					syntax: ["trace(A)"],
					description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
					examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "transpose", "zeros"
					]
				},
				transpose: {
					name: "transpose",
					category: "Matrix",
					syntax: ["x'", "transpose(x)"],
					description: "Transpose a matrix",
					examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "trace", "zeros"
					]
				},
				zeros: {
					name: "zeros",
					category: "Matrix",
					syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])",
						"zeros([m, n])", "zeros([m, n, p, ...])"
					],
					description: "Create a matrix containing zeros.",
					examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]",
						"zeros(size(a))"],
					seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size",
						"squeeze", "subset", "trace", "transpose"
					]
				},
				combinations: {
					name: "combinations",
					category: "Probability",
					syntax: ["combinations(n, k)"],
					description: "Compute the number of combinations of n items taken k at a time",
					examples: ["combinations(7, 5)"],
					seealso: ["combinationsWithRep", "permutations", "factorial"]
				},
				combinationsWithRep: {
					name: "combinationsWithRep",
					category: "Probability",
					syntax: ["combinationsWithRep(n, k)"],
					description: "Compute the number of combinations of n items taken k at a time with replacements.",
					examples: ["combinationsWithRep(7, 5)"],
					seealso: ["combinations", "permutations", "factorial"]
				},
				factorial: {
					name: "factorial",
					category: "Probability",
					syntax: ["n!", "factorial(n)"],
					description: "Compute the factorial of a value",
					examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
					seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"]
				},
				gamma: {
					name: "gamma",
					category: "Probability",
					syntax: ["gamma(n)"],
					description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
					examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
					seealso: ["factorial"]
				},
				kldivergence: {
					name: "kldivergence",
					category: "Probability",
					syntax: ["kldivergence(x, y)"],
					description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
					examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
					seealso: []
				},
				multinomial: {
					name: "multinomial",
					category: "Probability",
					syntax: ["multinomial(A)"],
					description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
					examples: ["multinomial([1, 2, 1])"],
					seealso: ["combinations", "factorial"]
				},
				permutations: {
					name: "permutations",
					category: "Probability",
					syntax: ["permutations(n)", "permutations(n, k)"],
					description: "Compute the number of permutations of n items taken k at a time",
					examples: ["permutations(5)", "permutations(5, 3)"],
					seealso: ["combinations", "combinationsWithRep", "factorial"]
				},
				pickRandom: {
					name: "pickRandom",
					category: "Probability",
					syntax: ["pickRandom(array)", "pickRandom(array, number)",
						"pickRandom(array, weights)", "pickRandom(array, number, weights)",
						"pickRandom(array, weights, number)"
					],
					description: "Pick a random entry from a given array.",
					examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])",
						"pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])",
						"pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])",
						"pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"
					],
					seealso: ["random", "randomInt"]
				},
				random: {
					name: "random",
					category: "Probability",
					syntax: ["random()", "random(max)", "random(min, max)", "random(size)",
						"random(size, max)", "random(size, min, max)"
					],
					description: "Return a random number.",
					examples: ["random()", "random(10, 20)", "random([2, 3])"],
					seealso: ["pickRandom", "randomInt"]
				},
				randomInt: {
					name: "randomInt",
					category: "Probability",
					syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)",
						"randomInt(size, max)", "randomInt(size, min, max)"
					],
					description: "Return a random integer number",
					examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
					seealso: ["pickRandom", "random"]
				},
				compare: {
					name: "compare",
					category: "Relational",
					syntax: ["compare(x, y)"],
					description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
					examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)",
						"compare(5cm, 40mm)", "compare(2, [1, 2, 3])"
					],
					seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq",
						"compareNatural", "compareText"
					]
				},
				compareNatural: {
					name: "compareNatural",
					category: "Relational",
					syntax: ["compareNatural(x, y)"],
					description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
					examples: ["compareNatural(2, 3)", "compareNatural(3, 2)",
						"compareNatural(2, 2)", "compareNatural(5cm, 40mm)",
						'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)",
						"compareNatural([1, 2, 4], [1, 2, 3])",
						"compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])",
						"compareNatural({a: 2}, {a: 4})"
					],
					seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare",
						"compareText"
					]
				},
				compareText: {
					name: "compareText",
					category: "Relational",
					syntax: ["compareText(x, y)"],
					description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
					examples: ['compareText("B", "A")', 'compareText("A", "B")',
						'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")',
						"compare(2, 10)", 'compareNatural("2", "10")',
						'compareText("B", ["A", "B", "C"])'
					],
					seealso: ["compare", "compareNatural"]
				},
				deepEqual: {
					name: "deepEqual",
					category: "Relational",
					syntax: ["deepEqual(x, y)"],
					description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
					examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
					seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq",
						"compare"
					]
				},
				equal: {
					name: "equal",
					category: "Relational",
					syntax: ["x == y", "equal(x, y)"],
					description: "Check equality of two values. Returns true if the values are equal, and false if not.",
					examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b",
						"50cm == 0.5m"
					],
					seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare",
						"deepEqual", "equalText"
					]
				},
				equalText: {
					name: "equalText",
					category: "Relational",
					syntax: ["equalText(x, y)"],
					description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
					examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")',
						'equal("2e3", "2000")', 'equalText("2e3", "2000")',
						'equalText("B", ["A", "B", "C"])'
					],
					seealso: ["compare", "compareNatural", "compareText", "equal"]
				},
				larger: {
					name: "larger",
					category: "Relational",
					syntax: ["x > y", "larger(x, y)"],
					description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
					examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)",
						"5 cm > 2 inch"
					],
					seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
				},
				largerEq: {
					name: "largerEq",
					category: "Relational",
					syntax: ["x >= y", "largerEq(x, y)"],
					description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
					examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
					seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
				},
				smaller: {
					name: "smaller",
					category: "Relational",
					syntax: ["x < y", "smaller(x, y)"],
					description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
					examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)",
						"5 cm < 2 inch"
					],
					seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
				},
				smallerEq: {
					name: "smallerEq",
					category: "Relational",
					syntax: ["x <= y", "smallerEq(x, y)"],
					description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
					examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
					seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
				},
				unequal: {
					name: "unequal",
					category: "Relational",
					syntax: ["x != y", "unequal(x, y)"],
					description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
					examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b",
						"50cm != 0.5m", "5 cm != 2 inch"
					],
					seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare",
						"deepEqual"
					]
				},
				setCartesian: {
					name: "setCartesian",
					category: "Set",
					syntax: ["setCartesian(set1, set2)"],
					description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.",
					examples: ["setCartesian([1, 2], [3, 4])"],
					seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
				},
				setDifference: {
					name: "setDifference",
					category: "Set",
					syntax: ["setDifference(set1, set2)"],
					description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
					examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])",
						"setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"
					],
					seealso: ["setUnion", "setIntersect", "setSymDifference"]
				},
				setDistinct: {
					name: "setDistinct",
					category: "Set",
					syntax: ["setDistinct(set)"],
					description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
					examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
					seealso: ["setMultiplicity"]
				},
				setIntersect: {
					name: "setIntersect",
					category: "Set",
					syntax: ["setIntersect(set1, set2)"],
					description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
					examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])",
						"setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"
					],
					seealso: ["setUnion", "setDifference"]
				},
				setIsSubset: {
					name: "setIsSubset",
					category: "Set",
					syntax: ["setIsSubset(set1, set2)"],
					description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
					examples: ["setIsSubset([1, 2], [3, 4, 5, 6])",
						"setIsSubset([3, 4], [3, 4, 5, 6])"
					],
					seealso: ["setUnion", "setIntersect", "setDifference"]
				},
				setMultiplicity: {
					name: "setMultiplicity",
					category: "Set",
					syntax: ["setMultiplicity(element, set)"],
					description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
					examples: ["setMultiplicity(1, [1, 2, 2, 4])",
						"setMultiplicity(2, [1, 2, 2, 4])"
					],
					seealso: ["setDistinct", "setSize"]
				},
				setPowerset: {
					name: "setPowerset",
					category: "Set",
					syntax: ["setPowerset(set)"],
					description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
					examples: ["setPowerset([1, 2, 3])"],
					seealso: ["setCartesian"]
				},
				setSize: {
					name: "setSize",
					category: "Set",
					syntax: ["setSize(set)", "setSize(set, unique)"],
					description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
					examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
					seealso: ["setUnion", "setIntersect", "setDifference"]
				},
				setSymDifference: {
					name: "setSymDifference",
					category: "Set",
					syntax: ["setSymDifference(set1, set2)"],
					description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
					examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])",
						"setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"
					],
					seealso: ["setUnion", "setIntersect", "setDifference"]
				},
				setUnion: {
					name: "setUnion",
					category: "Set",
					syntax: ["setUnion(set1, set2)"],
					description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
					examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])",
						"setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"
					],
					seealso: ["setIntersect", "setDifference"]
				},
				erf: {
					name: "erf",
					category: "Special",
					syntax: ["erf(x)"],
					description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
					examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
					seealso: []
				},
				mad: {
					name: "mad",
					category: "Statistics",
					syntax: ["mad(a, b, c, ...)", "mad(A)"],
					description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
					examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
					seealso: ["mean", "median", "std", "abs"]
				},
				max: {
					name: "max",
					category: "Statistics",
					syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
					description: "Compute the maximum value of a list of values.",
					examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])",
						"max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)",
						"max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"
					],
					seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
				},
				mean: {
					name: "mean",
					category: "Statistics",
					syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
					description: "Compute the arithmetic mean of a list of values.",
					examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])",
						"mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)",
						"mean([1.0, 2.7, 3.2, 4.0])"
					],
					seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
				},
				median: {
					name: "median",
					category: "Statistics",
					syntax: ["median(a, b, c, ...)", "median(A)"],
					description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
					examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
					seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
				},
				min: {
					name: "min",
					category: "Statistics",
					syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
					description: "Compute the minimum value of a list of values.",
					examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])",
						"min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)",
						"min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"
					],
					seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
				},
				mode: {
					name: "mode",
					category: "Statistics",
					syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
					description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
					examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])",
						"mode(1, 4, 6, 1, 6)"
					],
					seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
				},
				prod: {
					name: "prod",
					category: "Statistics",
					syntax: ["prod(a, b, c, ...)", "prod(A)"],
					description: "Compute the product of all values.",
					examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
					seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
				},
				quantileSeq: {
					name: "quantileSeq",
					category: "Statistics",
					syntax: ["quantileSeq(A, prob[, sorted])",
						"quantileSeq(A, [prob1, prob2, ...][, sorted])",
						"quantileSeq(A, N[, sorted])"
					],
					description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
					examples: ["quantileSeq([3, -1, 5, 7], 0.5)",
						"quantileSeq([3, -1, 5, 7], [1/3, 2/3])",
						"quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"
					],
					seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
				},
				std: {
					name: "std",
					category: "Statistics",
					syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
					description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
					examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])",
						'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")',
						"std([1, 2, 3; 4, 5, 6])"
					],
					seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"]
				},
				sum: {
					name: "sum",
					category: "Statistics",
					syntax: ["sum(a, b, c, ...)", "sum(A)"],
					description: "Compute the sum of all values.",
					examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
					seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
				},
				variance: {
					name: "variance",
					category: "Statistics",
					syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, normalization)"],
					description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
					examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])",
						'variance([2, 4, 6, 8], "uncorrected")',
						'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"
					],
					seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
				},
				acos: {
					name: "acos",
					category: "Trigonometry",
					syntax: ["acos(x)"],
					description: "Compute the inverse cosine of a value in radians.",
					examples: ["acos(0.5)", "acos(cos(2.3))"],
					seealso: ["cos", "atan", "asin"]
				},
				acosh: {
					name: "acosh",
					category: "Trigonometry",
					syntax: ["acosh(x)"],
					description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
					examples: ["acosh(1.5)"],
					seealso: ["cosh", "asinh", "atanh"]
				},
				acot: {
					name: "acot",
					category: "Trigonometry",
					syntax: ["acot(x)"],
					description: "Calculate the inverse cotangent of a value.",
					examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
					seealso: ["cot", "atan"]
				},
				acoth: {
					name: "acoth",
					category: "Trigonometry",
					syntax: ["acoth(x)"],
					description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
					examples: ["acoth(2)", "acoth(0.5)"],
					seealso: ["acsch", "asech"]
				},
				acsc: {
					name: "acsc",
					category: "Trigonometry",
					syntax: ["acsc(x)"],
					description: "Calculate the inverse cotangent of a value.",
					examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
					seealso: ["csc", "asin", "asec"]
				},
				acsch: {
					name: "acsch",
					category: "Trigonometry",
					syntax: ["acsch(x)"],
					description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
					examples: ["acsch(0.5)"],
					seealso: ["asech", "acoth"]
				},
				asec: {
					name: "asec",
					category: "Trigonometry",
					syntax: ["asec(x)"],
					description: "Calculate the inverse secant of a value.",
					examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
					seealso: ["acos", "acot", "acsc"]
				},
				asech: {
					name: "asech",
					category: "Trigonometry",
					syntax: ["asech(x)"],
					description: "Calculate the inverse secant of a value.",
					examples: ["asech(0.5)"],
					seealso: ["acsch", "acoth"]
				},
				asin: {
					name: "asin",
					category: "Trigonometry",
					syntax: ["asin(x)"],
					description: "Compute the inverse sine of a value in radians.",
					examples: ["asin(0.5)", "asin(sin(0.5))"],
					seealso: ["sin", "acos", "atan"]
				},
				asinh: {
					name: "asinh",
					category: "Trigonometry",
					syntax: ["asinh(x)"],
					description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
					examples: ["asinh(0.5)"],
					seealso: ["acosh", "atanh"]
				},
				atan: {
					name: "atan",
					category: "Trigonometry",
					syntax: ["atan(x)"],
					description: "Compute the inverse tangent of a value in radians.",
					examples: ["atan(0.5)", "atan(tan(0.5))"],
					seealso: ["tan", "acos", "asin"]
				},
				atanh: {
					name: "atanh",
					category: "Trigonometry",
					syntax: ["atanh(x)"],
					description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
					examples: ["atanh(0.5)"],
					seealso: ["acosh", "asinh"]
				},
				atan2: {
					name: "atan2",
					category: "Trigonometry",
					syntax: ["atan2(y, x)"],
					description: "Computes the principal value of the arc tangent of y/x in radians.",
					examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)",
						"y = sin(angle)", "atan2(y, x)"
					],
					seealso: ["sin", "cos", "tan"]
				},
				cos: {
					name: "cos",
					category: "Trigonometry",
					syntax: ["cos(x)"],
					description: "Compute the cosine of x in radians.",
					examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)",
						"sin(0.2)^2 + cos(0.2)^2"
					],
					seealso: ["acos", "sin", "tan"]
				},
				cosh: {
					name: "cosh",
					category: "Trigonometry",
					syntax: ["cosh(x)"],
					description: "Compute the hyperbolic cosine of x in radians.",
					examples: ["cosh(0.5)"],
					seealso: ["sinh", "tanh", "coth"]
				},
				cot: {
					name: "cot",
					category: "Trigonometry",
					syntax: ["cot(x)"],
					description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
					examples: ["cot(2)", "1 / tan(2)"],
					seealso: ["sec", "csc", "tan"]
				},
				coth: {
					name: "coth",
					category: "Trigonometry",
					syntax: ["coth(x)"],
					description: "Compute the hyperbolic cotangent of x in radians.",
					examples: ["coth(2)", "1 / tanh(2)"],
					seealso: ["sech", "csch", "tanh"]
				},
				csc: {
					name: "csc",
					category: "Trigonometry",
					syntax: ["csc(x)"],
					description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
					examples: ["csc(2)", "1 / sin(2)"],
					seealso: ["sec", "cot", "sin"]
				},
				csch: {
					name: "csch",
					category: "Trigonometry",
					syntax: ["csch(x)"],
					description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
					examples: ["csch(2)", "1 / sinh(2)"],
					seealso: ["sech", "coth", "sinh"]
				},
				sec: {
					name: "sec",
					category: "Trigonometry",
					syntax: ["sec(x)"],
					description: "Compute the secant of x in radians. Defined as 1/cos(x)",
					examples: ["sec(2)", "1 / cos(2)"],
					seealso: ["cot", "csc", "cos"]
				},
				sech: {
					name: "sech",
					category: "Trigonometry",
					syntax: ["sech(x)"],
					description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
					examples: ["sech(2)", "1 / cosh(2)"],
					seealso: ["coth", "csch", "cosh"]
				},
				sin: {
					name: "sin",
					category: "Trigonometry",
					syntax: ["sin(x)"],
					description: "Compute the sine of x in radians.",
					examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)",
						"sin(0.2)^2 + cos(0.2)^2"
					],
					seealso: ["asin", "cos", "tan"]
				},
				sinh: {
					name: "sinh",
					category: "Trigonometry",
					syntax: ["sinh(x)"],
					description: "Compute the hyperbolic sine of x in radians.",
					examples: ["sinh(0.5)"],
					seealso: ["cosh", "tanh"]
				},
				tan: {
					name: "tan",
					category: "Trigonometry",
					syntax: ["tan(x)"],
					description: "Compute the tangent of x in radians.",
					examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
					seealso: ["atan", "sin", "cos"]
				},
				tanh: {
					name: "tanh",
					category: "Trigonometry",
					syntax: ["tanh(x)"],
					description: "Compute the hyperbolic tangent of x in radians.",
					examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
					seealso: ["sinh", "cosh"]
				},
				to: {
					name: "to",
					category: "Units",
					syntax: ["x to unit", "to(x, unit)"],
					description: "Change the unit of a value.",
					examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
					seealso: []
				},
				clone: {
					name: "clone",
					category: "Utils",
					syntax: ["clone(x)"],
					description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
					examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)",
						"clone([1, 2; 3, 4])", 'clone("hello world")'
					],
					seealso: []
				},
				format: {
					name: "format",
					category: "Utils",
					syntax: ["format(value)", "format(value, precision)"],
					description: "Format a value of any type as string.",
					examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
					seealso: ["print"]
				},
				bin: {
					name: "bin",
					category: "Utils",
					syntax: ["bin(value)"],
					description: "Format a number as binary",
					examples: ["bin(2)"],
					seealso: ["oct", "hex"]
				},
				oct: {
					name: "oct",
					category: "Utils",
					syntax: ["oct(value)"],
					description: "Format a number as octal",
					examples: ["oct(56)"],
					seealso: ["bin", "hex"]
				},
				hex: {
					name: "hex",
					category: "Utils",
					syntax: ["hex(value)"],
					description: "Format a number as hexadecimal",
					examples: ["hex(240)"],
					seealso: ["bin", "oct"]
				},
				isNaN: {
					name: "isNaN",
					category: "Utils",
					syntax: ["isNaN(x)"],
					description: "Test whether a value is NaN (not a number)",
					examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
					seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
				},
				isInteger: {
					name: "isInteger",
					category: "Utils",
					syntax: ["isInteger(x)"],
					description: "Test whether a value is an integer number.",
					examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
					seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
				},
				isNegative: {
					name: "isNegative",
					category: "Utils",
					syntax: ["isNegative(x)"],
					description: "Test whether a value is negative: smaller than zero.",
					examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)",
						"isNegative([3, 0.5, -2])"
					],
					seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
				},
				isNumeric: {
					name: "isNumeric",
					category: "Utils",
					syntax: ["isNumeric(x)"],
					description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
					examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")',
						"isNumeric(0)", "isNumeric(bignumber(500))",
						"isNumeric(fraction(0.125))", "isNumeric(2 + 3i)",
						'isNumeric([2.3, "foo", false])'
					],
					seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN",
						"hasNumericValue"
					]
				},
				hasNumericValue: {
					name: "hasNumericValue",
					category: "Utils",
					syntax: ["hasNumericValue(x)"],
					description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
					examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")',
						"hasNumericValue(0)", "hasNumericValue(bignumber(500))",
						"hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)",
						'hasNumericValue([2.3, "foo", false])'
					],
					seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN",
						"isNumeric"
					]
				},
				isPositive: {
					name: "isPositive",
					category: "Utils",
					syntax: ["isPositive(x)"],
					description: "Test whether a value is positive: larger than zero.",
					examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)",
						"isPositive([3, 0.5, -2])"
					],
					seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
				},
				isPrime: {
					name: "isPrime",
					category: "Utils",
					syntax: ["isPrime(x)"],
					description: "Test whether a value is prime: has no divisors other than itself and one.",
					examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
					seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
				},
				isZero: {
					name: "isZero",
					category: "Utils",
					syntax: ["isZero(x)"],
					description: "Test whether a value is zero.",
					examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
					seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
				},
				print: {
					name: "print",
					category: "Utils",
					syntax: ["print(template, values)", "print(template, values, precision)"],
					description: "Interpolate values into a string template.",
					examples: ['print("Lucy is $age years old", {age: 5})',
						'print("The value of pi is $pi", {pi: pi}, 3)',
						'print("Hello, $user.name!", {user: {name: "John"}})',
						'print("Values: $0, $1, $2", [6, 9, 4])'
					],
					seealso: ["format"]
				},
				typeOf: {
					name: "typeOf",
					category: "Utils",
					syntax: ["typeOf(x)"],
					description: "Get the type of a variable.",
					examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)",
						'typeOf("hello world")'
					],
					seealso: ["getMatrixDataType"]
				},
				numeric: {
					name: "numeric",
					category: "Utils",
					syntax: ["numeric(x)"],
					description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
					examples: ['numeric("4")', 'numeric("4", "number")',
						'numeric("4", "BigNumber")', 'numeric("4", "Fraction)',
						'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'
					],
					seealso: ["number", "fraction", "bignumber", "string", "format"]
				}
			},
			ju = Qe("help", ["typed", "mathWithTransform", "Help"], (function(e) {
				var t = e.typed,
					r = e.mathWithTransform,
					n = e.Help;
				return t("help", {
					any: function(e) {
						var t, i = e;
						if ("string" != typeof e)
							for (t in r)
								if (Je(r, t) && e === r[t]) {
									i = t;
									break
								} var a = at(Du, i);
						if (!a) {
							var o = "function" == typeof i ? i.name : i;
							throw new Error('No documentation found on "' + o +
								'"')
						}
						return new n(a)
					}
				})
			})),
			Pu = Qe("chain", ["typed", "Chain"], (function(e) {
				var t = e.typed,
					r = e.Chain;
				return t("chain", {
					"": function() {
						return new r
					},
					any: function(e) {
						return new r(e)
					}
				})
			})),
			Fu = Qe("det", ["typed", "matrix", "subtract", "multiply", "unaryMinus", "lup"], (
				function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.subtract,
						i = e.multiply,
						a = e.unaryMinus,
						o = e.lup;
					return t("det", {
						any: function(e) {
							return He(e)
						},
						"Array | Matrix": function(e) {
							var t;
							switch ((t = m(e) ? e.size() : Array.isArray(e) ? (e =
								r(e)).size() : []).length) {
								case 0:
									return He(e);
								case 1:
									if (1 === t[0]) return He(e.valueOf()[0]);
									throw new RangeError(
										"Matrix must be square (size: " + xe(
										t) + ")");
								case 2:
									var s = t[0],
										u = t[1];
									if (s === u) return function(e, t, r) {
										if (1 === t) return He(e[0][0]);
										if (2 === t) return n(i(e[0][0], e[
											1][1]), i(e[1][0],
											e[0][1]));
										for (var s = o(e), u = s.U[0][0],
												c = 1; c < t; c++) u = i(u,
											s.U[c][c]);
										for (var f = 0, l = 0, p = [];;) {
											for (; p[l];) l++;
											if (l >= t) break;
											for (var m = l, h = 0; !p[s.p[
													m]];) p[s.p[m]] = !0,
												m = s.p[m], h++;
											h % 2 == 0 && f++
										}
										return f % 2 == 0 ? u : a(u)
									}(e.clone().valueOf(), s);
									throw new RangeError(
										"Matrix must be square (size: " + xe(
										t) + ")");
								default:
									throw new RangeError(
										"Matrix must be two dimensional (size: " +
										xe(t) + ")")
							}
						}
					})
				})),
			Uu = Qe("inv", ["typed", "matrix", "divideScalar", "addScalar", "multiply",
				"unaryMinus", "det", "identity", "abs"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divideScalar,
					i = e.addScalar,
					a = e.multiply,
					o = e.unaryMinus,
					s = e.det,
					u = e.identity,
					c = e.abs;
				return t("inv", {
					"Array | Matrix": function(e) {
						var t = m(e) ? e.size() : Se(e);
						switch (t.length) {
							case 1:
								if (1 === t[0]) return m(e) ? r([n(1, e
								.valueOf()[0])]) : [n(1, e[0])];
								throw new RangeError(
									"Matrix must be square (size: " + xe(
									t) + ")");
							case 2:
								var i = t[0],
									a = t[1];
								if (i === a) return m(e) ? r(f(e.valueOf(), i,
									a), e.storage()) : f(e, i, a);
								throw new RangeError(
									"Matrix must be square (size: " + xe(
									t) + ")");
							default:
								throw new RangeError(
									"Matrix must be two dimensional (size: " +
									xe(t) + ")")
						}
					},
					any: function(e) {
						return n(1, e)
					}
				});

				function f(e, t, r) {
					var f, l, p, m, h;
					if (1 === t) {
						if (0 === (m = e[0][0])) throw Error(
							"Cannot calculate inverse, determinant is zero");
						return [
							[n(1, m)]
						]
					}
					if (2 === t) {
						var d = s(e);
						if (0 === d) throw Error(
							"Cannot calculate inverse, determinant is zero");
						return [
							[n(e[1][1], d), n(o(e[0][1]), d)],
							[n(o(e[1][0]), d), n(e[0][0], d)]
						]
					}
					var v = e.concat();
					for (f = 0; f < t; f++) v[f] = v[f].concat();
					for (var y = u(t).valueOf(), g = 0; g < r; g++) {
						var x = c(v[g][g]),
							b = g;
						for (f = g + 1; f < t;) c(v[f][g]) > x && (x = c(v[f][g]), b = f),
							f++;
						if (0 === x) throw Error(
							"Cannot calculate inverse, determinant is zero");
						(f = b) !== g && (h = v[g], v[g] = v[f], v[f] = h, h = y[g], y[g] =
							y[f], y[f] = h);
						var w = v[g],
							N = y[g];
						for (f = 0; f < t; f++) {
							var M = v[f],
								E = y[f];
							if (f !== g) {
								if (0 !== M[g]) {
									for (p = n(o(M[g]), w[g]), l = g; l < r; l++) M[l] = i(
										M[l], a(p, w[l]));
									for (l = 0; l < r; l++) E[l] = i(E[l], a(p, N[l]))
								}
							} else {
								for (p = w[g], l = g; l < r; l++) M[l] = n(M[l], p);
								for (l = 0; l < r; l++) E[l] = n(E[l], p)
							}
						}
					}
					return y
				}
			}));
		r(243);

		function Lu(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return $u(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return $u(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function $u(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}

		function Hu(e) {
			var t = e.addScalar,
				r = e.subtract,
				n = e.flatten,
				i = e.multiply,
				a = e.multiplyScalar,
				o = e.divideScalar,
				s = e.sqrt,
				u = e.abs,
				c = e.bignumber,
				f = e.diag,
				l = e.inv,
				p = e.qr,
				m = e.usolve,
				h = e.usolveAll,
				d = e.equal,
				v = e.complex,
				y = e.larger,
				g = e.smaller,
				x = e.matrixFromColumns,
				b = e.dot;

			function w(e, t, n, i, a, o, s, f) {
				var l = "BigNumber" === f,
					p = "Complex" === f,
					m = l ? c(0) : p ? v(0) : 0,
					h = l ? c(1) : p ? v(1) : 1;
				if (g(u(n), s)) return [
					[h, m],
					[m, h]
				];
				if (y(u(r(a, o)), s)) return [
					[r(a, i), r(o, i)],
					[n, n]
				];
				var d = r(e, a),
					x = r(t, a),
					b = r(n, a),
					w = r(i, a);
				return g(u(x), s) ? [
					[d, h],
					[b, m]
				] : [
					[x, m],
					[w, h]
				]
			}

			function N(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n;
					(n = e[r]).push.apply(n, ja()(Array(t - e[r].length).fill(0)))
				}
				for (var i = e.length; i < t; i++) e.push(Array(t).fill(0)), e[i][i] = 1;
				return e
			}

			function M(e, t, r) {
				for (var n = 0; n < e.length; n++)
					if (r(e[n], t)) return n;
				return -1
			}

			function E(e, t, r, n, i) {
				for (var a, o = "BigNumber" === i ? c(1e3) : 1e3, s = 0; a = S(t, r, i), a = m(e,
					a), !y(O(a), o);)
					if (++s >= 5) return null;
				for (s = 0;;) {
					var u = m(e, a);
					if (g(O(A(a, [u])), n)) break;
					if (++s >= 10) return null;
					a = C(u)
				}
				return a
			}

			function S(e, t, r) {
				var n = "BigNumber" === r,
					i = "Complex" === r,
					a = Array(e).fill(0).map((function(e) {
						return 2 * Math.random() - 1
					}));
				return n && (a = a.map((function(e) {
					return c(e)
				}))), i && (a = a.map((function(e) {
					return v(e)
				}))), C(a = A(a, t), r)
			}

			function A(e, t) {
				var n, a = Lu(t);
				try {
					for (a.s(); !(n = a.n()).done;) {
						var s = n.value;
						e = r(e, i(o(b(s, e), b(s, s)), s))
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				return e
			}

			function O(e) {
				return u(s(b(e, e)))
			}

			function C(e, t) {
				var r = "Complex" === t,
					n = "BigNumber" === t ? c(1) : r ? v(1) : 1;
				return i(o(n, O(e)), e)
			}
			return function(e, m, b, S, A) {
				void 0 === A && (A = !0);
				var O = function(e, r, n, i, s) {
					var l, p = "BigNumber" === i,
						m = "Complex" === i,
						h = p ? c(0) : m ? v(0) : 0,
						x = p ? c(1) : m ? v(1) : 1,
						b = p ? c(10) : 2,
						w = a(b, b);
					s && (l = Array(r).fill(x));
					var N = !1;
					for (; !N;) {
						N = !0;
						for (var M = 0; M < r; M++) {
							for (var E = h, S = h, A = 0; A < r; A++)
								if (M !== A) {
									var O = u(e[M][A]);
									E = t(E, O), S = t(S, O)
								} if (!d(E, 0) && !d(S, 0)) {
								for (var C = x, _ = E, T = o(S, b), I = a(S, b); g(_, T);)
									_ = a(_, w), C = a(C, b);
								for (; y(_, I);) _ = o(_, w), C = o(C, b);
								if (g(o(t(_, S), C), a(t(E, S), .95))) {
									N = !1;
									for (var k = o(1, C), z = 0; z < r; z++) M !== z && (e[
										M][z] = a(e[M][z], C), e[z][M] = a(e[z][M],
										k));
									s && (l[M] = a(l[M], C))
								}
							}
						}
					}
					return f(l)
				}(e, m, 0, S, A);
				! function(e, n, i, s, f, l) {
					var p = "BigNumber" === s,
						m = "Complex" === s,
						h = p ? c(0) : m ? v(0) : 0;
					p && (i = c(i));
					for (var d = 0; d < n - 2; d++) {
						for (var y = 0, x = h, b = d + 1; b < n; b++) {
							var w = e[b][d];
							g(u(x), u(w)) && (x = w, y = b)
						}
						if (!g(u(x), i)) {
							if (y !== d + 1) {
								var N = e[y];
								e[y] = e[d + 1], e[d + 1] = N;
								for (var M = 0; M < n; M++) {
									var E = e[M][y];
									e[M][y] = e[M][d + 1], e[M][d + 1] = E
								}
								if (f) {
									var S = l[y];
									l[y] = l[d + 1], l[d + 1] = S
								}
							}
							for (var A = d + 2; A < n; A++) {
								var O = o(e[A][d], x);
								if (0 !== O) {
									for (var C = 0; C < n; C++) e[A][C] = r(e[A][C], a(O, e[d +
										1][C]));
									for (var _ = 0; _ < n; _++) e[_][d + 1] = t(e[_][d + 1], a(
										O, e[_][A]));
									if (f)
										for (var T = 0; T < n; T++) l[A][T] = r(l[A][T], a(O, l[
											d + 1][T]))
								}
							}
						}
					}
				}(e, m, b, S, A, O);
				var C, _ = function(e, n, o, l, m) {
						var h = "BigNumber" === l,
							d = "Complex" === l,
							y = h ? c(1) : d ? v(1) : 1;
						h && (o = c(o));
						var x = He(e),
							b = [],
							M = n,
							E = [],
							S = m ? f(Array(n).fill(y)) : void 0,
							A = m ? f(Array(M).fill(y)) : void 0,
							O = 0;
						for (; O <= 100;) {
							O += 1;
							for (var C = 0; C < M; C++) x[C][C] = r(x[C][C], 0);
							var _ = p(x),
								T = _.Q,
								I = _.R;
							x = i(I, T);
							for (var k = 0; k < M; k++) x[k][k] = t(x[k][k], 0);
							if (m && (A = i(A, T)), 1 === M || g(u(x[M - 1][M - 2]), o)) {
								O = 0, b.push(x[M - 1][M - 1]), m && (E.unshift([
									[1]
								]), N(A, n), S = i(S, A), M > 1 && (A = f(Array(M - 1)
									.fill(y)))), M -= 1, x.pop();
								for (var z = 0; z < M; z++) x[z].pop()
							} else if (2 === M || g(u(x[M - 2][M - 3]), o)) {
								O = 0;
								var R = (B = x[M - 2][M - 2], D = x[M - 2][M - 1], j = x[M - 1][
										M - 2
									], P = x[M - 1][M - 1], F = void 0, U = void 0, L =
									void 0, $ = void 0, F = t(B, P), U = r(a(B, P), a(D,
									j)), L = a(F, .5), $ = a(s(r(a(F, F), a(4, U))), .5), [
										t(L, $), r(L, $)
									]);
								b.push.apply(b, ja()(R)), m && (E.unshift(w(x[M - 2][M - 2], x[
									M - 2][M - 1], x[M - 1][M - 2], x[M - 1][M -
									1
								], R[0], R[1], o, l)), N(A, n), S = i(S, A), M > 2 && (
									A = f(Array(M - 2).fill(y)))), M -= 2, x.pop(), x.pop();
								for (var q = 0; q < M; q++) x[q].pop(), x[q].pop()
							}
							if (0 === M) break
						}
						var B, D, j, P, F, U, L, $;
						if (b.sort((function(e, t) {
								return +r(u(e), u(t))
							})), O > 100) {
							var H = Error(
								"The eigenvalues failed to converge. Only found these eigenvalues: " +
								b.join(", "));
							throw H.values = b, H.vectors = [], H
						}
						var G = m ? i(S, function(e, t) {
							for (var r = [], n = 0; n < t; n++) r[n] = Array(t).fill(0);
							var i, a = 0,
								o = Lu(e);
							try {
								for (o.s(); !(i = o.n()).done;) {
									for (var s = i.value, u = s.length, c = 0; c <
										u; c++)
										for (var f = 0; f < u; f++) r[a + c][a + f] = s[
											c][f];
									a += u
								}
							} catch (e) {
								o.e(e)
							} finally {
								o.f()
							}
							return r
						}(E, n)) : void 0;
						return {
							values: b,
							C: G
						}
					}(e, m, b, S, A),
					T = _.values,
					I = _.C;
				return I = i(l(O), I), A && (C = function(e, t, a, o, s, u) {
					var p, m = l(a),
						y = i(m, e, a),
						g = "BigNumber" === u,
						x = "Complex" === u,
						b = g ? c(0) : x ? v(0) : 0,
						w = g ? c(1) : x ? v(1) : 1,
						N = [],
						S = [],
						A = Lu(o);
					try {
						for (A.s(); !(p = A.n()).done;) {
							var O = p.value,
								C = M(N, O, d); - 1 === C ? (N.push(O), S.push(1)) : S[
								C] += 1
						}
					} catch (P) {
						A.e(P)
					} finally {
						A.f()
					}
					for (var _ = [], T = N.length, I = Array(t).fill(b), k = f(Array(t)
							.fill(w)), z = [], R = 0; R < T; R++) {
						var q = N[R],
							B = r(y, i(q, k)),
							D = h(B, I);
						for ((D = D.map((function(e) {
								return i(a, e)
							}))).shift(); D.length < S[R];) {
							var j = E(B, t, D, s, u);
							if (null == j) {
								z.push(q);
								break
							}
							D.push(j)
						}
						_.push.apply(_, ja()(D.map((function(e) {
							return n(e)
						}))))
					}
					if (0 !== z.length) {
						var P = new Error(
							"Failed to find eigenvectors for the following eigenvalues: " +
							z.join(", "));
						throw P.values = o, P.vectors = _, P
					}
					return _
				}(e, m, I, T, b, S), C = x.apply(void 0, ja()(C))), {
					values: T,
					vectors: C
				}
			}
		}
		var Gu = Qe("eigs", ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs",
				"atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber",
				"multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt",
				"diag", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns",
				"dot"
			], (function(e) {
				var t = e.config,
					r = e.typed,
					n = e.matrix,
					i = e.addScalar,
					a = e.subtract,
					f = e.equal,
					l = e.abs,
					p = e.atan,
					m = e.cos,
					h = e.sin,
					d = e.multiplyScalar,
					v = e.divideScalar,
					y = e.inv,
					g = e.bignumber,
					x = e.multiply,
					b = e.add,
					w = e.larger,
					N = e.column,
					M = e.flatten,
					E = e.number,
					S = e.complex,
					A = e.sqrt,
					O = e.diag,
					C = e.qr,
					_ = e.usolve,
					T = e.usolveAll,
					I = e.im,
					k = e.re,
					z = e.smaller,
					R = e.matrixFromColumns,
					q = e.dot,
					B = function(e) {
						var t = e.config,
							r = e.addScalar,
							n = e.subtract,
							i = e.abs,
							a = e.atan,
							o = e.cos,
							s = e.sin,
							u = e.multiplyScalar,
							c = e.inv,
							f = e.bignumber,
							l = e.multiply,
							p = e.add;

						function m(e, t) {
							for (var r, n = e.length, i = Math.abs(t / n), a = new Array(n),
									o = 0; o < n; o++) a[o] = E(n, 0), a[o][o] = 1;
							for (var s = w(e); Math.abs(s[1]) >= Math.abs(i);) {
								var u = s[0][0],
									c = s[0][1];
								e = b(e, r = d(e[u][u], e[c][c], e[u][c]), u, c), a = y(a,
									r, u, c), s = w(e)
							}
							for (var f = E(n, 0), l = 0; l < n; l++) f[l] = e[l][l];
							return M(He(f), He(a))
						}

						function h(e, t) {
							for (var r, n = e.length, a = i(t / n), o = new Array(n), s =
								0; s < n; s++) o[s] = E(n, 0), o[s][s] = 1;
							for (var u = N(e); i(u[1]) >= i(a);) {
								var c = u[0][0],
									f = u[0][1];
								e = x(e, r = v(e[c][c], e[f][f], e[c][f]), c, f), o = g(o,
									r, c, f), u = N(e)
							}
							for (var l = E(n, 0), p = 0; p < n; p++) l[p] = e[p][p];
							return M(He(l), He(o))
						}

						function d(e, r, n) {
							var i = r - e;
							return Math.abs(i) <= t.epsilon ? Math.PI / 4 : .5 * Math.atan(
								2 * n / (r - e))
						}

						function v(e, r, o) {
							var s = n(r, e);
							return i(s) <= t.epsilon ? f(-1).acos().div(4) : u(.5, a(l(2, o,
								c(s))))
						}

						function y(e, t, r, n) {
							for (var i = e.length, a = Math.cos(t), o = Math.sin(t), s = E(
									i, 0), u = E(i, 0), c = 0; c < i; c++) s[c] = a * e[c][
								r] - o * e[c][n], u[c] = o * e[c][r] + a * e[c][n];
							for (var f = 0; f < i; f++) e[f][r] = s[f], e[f][n] = u[f];
							return e
						}

						function g(e, t, i, a) {
							for (var c = e.length, l = o(t), p = s(t), m = E(c, f(0)), h =
									E(c, f(0)), d = 0; d < c; d++) m[d] = n(u(l, e[d][i]),
								u(p, e[d][a])), h[d] = r(u(p, e[d][i]), u(l, e[d][a]));
							for (var v = 0; v < c; v++) e[v][i] = m[v], e[v][a] = h[v];
							return e
						}

						function x(e, t, i, a) {
							for (var c = e.length, m = f(o(t)), h = f(s(t)), d = u(m, m),
									v = u(h, h), y = E(c, f(0)), g = E(c, f(0)), x = l(f(2),
										m, h, e[i][a]), b = r(n(u(d, e[i][i]), x), u(v, e[a]
										[a])), w = p(u(v, e[i][i]), x, u(d, e[a][a])), N =
									0; N < c; N++) y[N] = n(u(m, e[i][N]), u(h, e[a][N])),
								g[N] = r(u(h, e[i][N]), u(m, e[a][N]));
							e[i][i] = b, e[a][a] = w, e[i][a] = f(0), e[a][i] = f(0);
							for (var M = 0; M < c; M++) M !== i && M !== a && (e[i][M] = y[
								M], e[M][i] = y[M], e[a][M] = g[M], e[M][a] = g[M]);
							return e
						}

						function b(e, t, r, n) {
							for (var i = e.length, a = Math.cos(t), o = Math.sin(t), s = a *
									a, u = o * o, c = E(i, 0), f = E(i, 0), l = s * e[r][
									r] - 2 * a * o * e[r][n] + u * e[n][n], p = u * e[r][
									r] + 2 * a * o * e[r][n] + s * e[n][n], m = 0; m <
								i; m++) c[m] = a * e[r][m] - o * e[n][m], f[m] = o * e[r][
								m] + a * e[n][m];
							e[r][r] = l, e[n][n] = p, e[r][n] = 0, e[n][r] = 0;
							for (var h = 0; h < i; h++) h !== r && h !== n && (e[r][h] = c[
								h], e[h][r] = c[h], e[n][h] = f[h], e[h][n] = f[h]);
							return e
						}

						function w(e) {
							for (var t = e.length, r = 0, n = [0, 1], i = 0; i < t; i++)
								for (var a = i + 1; a < t; a++) Math.abs(r) < Math.abs(e[i][
									a
								]) && (r = Math.abs(e[i][a]), n = [i, a]);
							return [n, r]
						}

						function N(e) {
							for (var t = e.length, r = 0, n = [0, 1], a = 0; a < t; a++)
								for (var o = a + 1; o < t; o++) i(r) < i(e[a][o]) && (r = i(
									e[a][o]), n = [a, o]);
							return [n, r]
						}

						function M(e, t) {
							for (var r = e.length, n = Array(r), a = Array(r), o = 0; o <
								r; o++) a[o] = Array(r);
							for (var s = 0; s < r; s++) {
								for (var u = 0, c = e[0], f = 0; f < e.length; f++) i(e[
									f]) < i(c) && (c = e[u = f]);
								n[s] = e.splice(u, 1)[0];
								for (var l = 0; l < r; l++) a[l][s] = t[l][u], t[l].splice(
									u, 1)
							}
							return {
								values: n,
								vectors: a
							}
						}

						function E(e, t) {
							for (var r = new Array(e), n = 0; n < e; n++) r[n] = t;
							return r
						}
						return function(e, r) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ?
								arguments[2] : t.epsilon,
								i = arguments.length > 3 ? arguments[3] : void 0;
							if ("number" === i) return m(e, n);
							if ("BigNumber" === i) return h(e, n);
							throw TypeError("Unsupported data type: " + i)
						}
					}({
						config: t,
						addScalar: i,
						subtract: a,
						column: N,
						flatten: M,
						equal: f,
						abs: l,
						atan: p,
						cos: m,
						sin: h,
						multiplyScalar: d,
						inv: y,
						bignumber: g,
						complex: S,
						multiply: x,
						add: b
					}),
					D = Hu({
						config: t,
						addScalar: i,
						subtract: a,
						multiply: x,
						multiplyScalar: d,
						flatten: M,
						divideScalar: v,
						sqrt: A,
						abs: l,
						bignumber: g,
						diag: O,
						qr: C,
						inv: y,
						usolve: _,
						usolveAll: T,
						equal: f,
						complex: S,
						larger: w,
						smaller: z,
						matrixFromColumns: R,
						dot: q
					});
				return r("eigs", {
					Array: function(e) {
						return j(n(e))
					},
					"Array, number|BigNumber": function(e, t) {
						return j(n(e), t)
					},
					Matrix: function(e) {
						var t = j(e),
							r = t.values,
							i = t.vectors;
						return {
							values: n(r),
							vectors: n(i)
						}
					},
					"Matrix, number|BigNumber": function(e, t) {
						var r = j(e, t),
							i = r.values,
							a = r.vectors;
						return {
							values: n(i),
							vectors: n(a)
						}
					}
				});

				function j(e, r) {
					void 0 === r && (r = t.epsilon);
					var n = e.size();
					if (2 !== n.length || n[0] !== n[1]) throw new RangeError(
						"Matrix must be square (size: " + xe(n) + ")");
					var i = e.toArray(),
						o = n[0];
					if (function(e, t, r) {
							for (var n = 0; n < t; n++)
								for (var i = 0; i < t; i++)
									if (w(g(l(I(e[n][i]))), r)) return !1;
							return !0
						}(i, o, r) && (function(e, t) {
							for (var r = 0; r < t; r++)
								for (var n = 0; n < t; n++) e[r][n] = k(e[r][n])
						}(i, o), function(e, t, r) {
							for (var n = 0; n < t; n++)
								for (var i = n; i < t; i++)
									if (w(g(l(a(e[n][i], e[i][n]))), r)) return !1;
							return !0
						}(i, o, r))) {
						var s = P(e, i, o);
						return B(i, o, r, s)
					}
					var u = P(e, i, o);
					return D(i, o, r, u)
				}

				function P(e, t, r) {
					var n = e.datatype();
					if ("number" === n || "BigNumber" === n || "Complex" === n) return n;
					for (var i = !1, a = !1, f = !1, l = 0; l < r; l++)
						for (var p = 0; p < r; p++) {
							var m = t[l][p];
							if (o(m) || c(m)) i = !0;
							else if (s(m)) a = !0;
							else {
								if (!u(m)) throw TypeError("Unsupported type in Matrix: " +
									H(m));
								f = !0
							}
						}
					if (a && f && console.warn(
							"Complex BigNumbers not supported, this operation will lose precission."
							), f) {
						for (var h = 0; h < r; h++)
							for (var d = 0; d < r; d++) t[h][d] = S(t[h][d]);
						return "Complex"
					}
					if (a) {
						for (var v = 0; v < r; v++)
							for (var y = 0; y < r; y++) t[v][y] = g(t[v][y]);
						return "BigNumber"
					}
					if (i) {
						for (var x = 0; x < r; x++)
							for (var b = 0; b < r; b++) t[x][b] = E(t[x][b]);
						return "number"
					}
					throw TypeError("Matrix contains unsupported types only.")
				}
			})),
			Vu = Qe("expm", ["typed", "abs", "add", "identity", "inv", "multiply"], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.add,
					i = e.identity,
					a = e.inv,
					o = e.multiply;
				return t("expm", {
					Matrix: function(e) {
						var t = e.size();
						if (2 !== t.length || t[0] !== t[1])
						throw new RangeError(
								"Matrix must be square (size: " + xe(t) +
								")");
						for (var u = t[0], c = function(e, t) {
									for (var r = 0; r < 30; r++)
										for (var n = 0; n <= r; n++) {
											var i = r - n;
											if (s(e, n, i) < t) return {
												q: n,
												j: i
											}
										}
									throw new Error(
										"Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)"
										)
								}(function(e) {
									for (var t = e.size()[0], n = 0, i =
										0; i < t; i++) {
										for (var a = 0, o = 0; o < t; o++)
											a += r(e.get([i, o]));
										n = Math.max(a, n)
									}
									return n
								}(e), 1e-15), f = c.q, l = c.j, p = o(e, Math
									.pow(2, -l)), m = i(u), h = i(u), d = 1, y =
								p, g = -1, x = 1; x <= f; x++) x > 1 && (y = o(
							y, p), g = -g), m = n(m, o(d = d * (f - x + 1) /
							((2 * f - x + 1) * x), y)), h = n(h, o(d * g,
							y));
						for (var b = o(a(h), m), w = 0; w < l; w++) b = o(b, b);
						return v(e) ? e.createSparseMatrix(b) : b
					}
				});

				function s(e, t, r) {
					for (var n = 1, i = 2; i <= t; i++) n *= i;
					for (var a = n, o = t + 1; o <= 2 * t; o++) a *= o;
					var s = a * (2 * t + 1);
					return 8 * Math.pow(e / Math.pow(2, r), 2 * t) * n * n / (a * s)
				}
			})),
			Zu = Qe("sqrtm", ["typed", "abs", "add", "multiply", "sqrt", "subtract", "inv", "size",
				"max", "identity"
			], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.add,
					i = e.multiply,
					a = e.sqrt,
					o = e.subtract,
					s = e.inv,
					u = e.size,
					c = e.max,
					f = e.identity;

				function l(e) {
					var t, a = 0,
						l = e,
						p = f(u(e));
					do {
						var m = l;
						if (l = i(.5, n(m, s(p))), p = i(.5, n(p, s(m))), (t = c(r(o(l,
								m)))) > 1e-6 && ++a > 1e3) throw new Error(
							"computing square root of matrix: iterative method could not converge"
							)
					} while (t > 1e-6);
					return l
				}
				return t("sqrtm", {
					"Array | Matrix": function(e) {
						var t = m(e) ? e.size() : Se(e);
						switch (t.length) {
							case 1:
								if (1 === t[0]) return a(e);
								throw new RangeError(
									"Matrix must be square (size: " + xe(
									t) + ")");
							case 2:
								if (t[0] === t[1]) return l(e);
								throw new RangeError(
									"Matrix must be square (size: " + xe(
									t) + ")");
							default:
								throw new RangeError(
									"Matrix must be at most two dimensional (size: " +
									xe(t) + ")")
						}
					}
				})
			})),
			Wu = Qe("divide", ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"],
				(function(e) {
					var t = e.typed,
						r = e.matrix,
						n = e.multiply,
						i = e.equalScalar,
						a = e.divideScalar,
						o = e.inv,
						s = rn({
							typed: t,
							equalScalar: i
						}),
						u = nn({
							typed: t
						});
					return t("divide", Ve({
						"Array | Matrix, Array | Matrix": function(e, t) {
							return n(e, o(t))
						},
						"DenseMatrix, any": function(e, t) {
							return u(e, t, a, !1)
						},
						"SparseMatrix, any": function(e, t) {
							return s(e, t, a, !1)
						},
						"Array, any": function(e, t) {
							return u(r(e), t, a, !1).valueOf()
						},
						"any, Array | Matrix": function(e, t) {
							return n(e, o(t))
						}
					}, a.signatures))
				})),
			Yu = Qe("distance", ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar",
				"unaryMinus", "sqrt", "abs"
			], (function(e) {
				var t = e.typed,
					r = e.addScalar,
					n = e.subtract,
					i = e.multiplyScalar,
					a = e.divideScalar,
					o = e.unaryMinus,
					u = e.sqrt,
					c = e.abs;
				return t("distance", {
					"Array, Array, Array": function(e, t, r) {
						if (2 === e.length && 2 === t.length && 2 === r
							.length) {
							if (!l(e)) throw new TypeError(
								"Array with 2 numbers or BigNumbers expected for first argument"
								);
							if (!l(t)) throw new TypeError(
								"Array with 2 numbers or BigNumbers expected for second argument"
								);
							if (!l(r)) throw new TypeError(
								"Array with 2 numbers or BigNumbers expected for third argument"
								);
							var s = a(n(r[1], r[0]), n(t[1], t[0])),
								u = i(i(s, s), t[0]),
								c = o(i(s, t[0])),
								f = e[1];
							return v(e[0], e[1], u, c, f)
						}
						throw new TypeError("Invalid Arguments: Try again")
					},
					"Object, Object, Object": function(e, t, r) {
						if (2 === Object.keys(e).length && 2 === Object.keys(t)
							.length && 2 === Object.keys(r).length) {
							if (!l(e)) throw new TypeError(
								"Values of pointX and pointY should be numbers or BigNumbers"
								);
							if (!l(t)) throw new TypeError(
								"Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers"
								);
							if (!l(r)) throw new TypeError(
								"Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers"
								);
							if ("pointX" in e && "pointY" in e &&
								"lineOnePtX" in t && "lineOnePtY" in t &&
								"lineTwoPtX" in r && "lineTwoPtY" in r) {
								var s = a(n(r.lineTwoPtY, r.lineTwoPtX), n(t
										.lineOnePtY, t.lineOnePtX)),
									u = i(i(s, s), t.lineOnePtX),
									c = o(i(s, t.lineOnePtX)),
									f = e.pointX;
								return v(e.pointX, e.pointY, u, c, f)
							}
							throw new TypeError("Key names do not match")
						}
						throw new TypeError("Invalid Arguments: Try again")
					},
					"Array, Array": function(e, t) {
						if (2 === e.length && 3 === t.length) {
							if (!l(e)) throw new TypeError(
								"Array with 2 numbers or BigNumbers expected for first argument"
								);
							if (!p(t)) throw new TypeError(
								"Array with 3 numbers or BigNumbers expected for second argument"
								);
							return v(e[0], e[1], t[0], t[1], t[2])
						}
						if (3 === e.length && 6 === t.length) {
							if (!p(e)) throw new TypeError(
								"Array with 3 numbers or BigNumbers expected for first argument"
								);
							if (!h(t)) throw new TypeError(
								"Array with 6 numbers or BigNumbers expected for second argument"
								);
							return y(e[0], e[1], e[2], t[0], t[1], t[2], t[3],
								t[4], t[5])
						}
						if (e.length === t.length && e.length > 0) {
							if (!m(e)) throw new TypeError(
								"All values of an array should be numbers or BigNumbers"
								);
							if (!m(t)) throw new TypeError(
								"All values of an array should be numbers or BigNumbers"
								);
							return g(e, t)
						}
						throw new TypeError("Invalid Arguments: Try again")
					},
					"Object, Object": function(e, t) {
						if (2 === Object.keys(e).length && 3 === Object.keys(t)
							.length) {
							if (!l(e)) throw new TypeError(
								"Values of pointX and pointY should be numbers or BigNumbers"
								);
							if (!p(t)) throw new TypeError(
								"Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers"
								);
							if ("pointX" in e && "pointY" in e &&
								"xCoeffLine" in t && "yCoeffLine" in t &&
								"constant" in t) return v(e.pointX, e.pointY, t
								.xCoeffLine, t.yCoeffLine, t.constant);
							throw new TypeError("Key names do not match")
						}
						if (3 === Object.keys(e).length && 6 === Object.keys(t)
							.length) {
							if (!p(e)) throw new TypeError(
								"Values of pointX, pointY and pointZ should be numbers or BigNumbers"
								);
							if (!h(t)) throw new TypeError(
								"Values of x0, y0, z0, a, b and c should be numbers or BigNumbers"
								);
							if ("pointX" in e && "pointY" in e && "x0" in t &&
								"y0" in t && "z0" in t && "a" in t && "b" in
								t && "c" in t) return y(e.pointX, e.pointY, e
								.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c
								);
							throw new TypeError("Key names do not match")
						}
						if (2 === Object.keys(e).length && 2 === Object.keys(t)
							.length) {
							if (!l(e)) throw new TypeError(
								"Values of pointOneX and pointOneY should be numbers or BigNumbers"
								);
							if (!l(t)) throw new TypeError(
								"Values of pointTwoX and pointTwoY should be numbers or BigNumbers"
								);
							if ("pointOneX" in e && "pointOneY" in e &&
								"pointTwoX" in t && "pointTwoY" in t) return g([
								e.pointOneX, e.pointOneY
							], [t.pointTwoX, t.pointTwoY]);
							throw new TypeError("Key names do not match")
						}
						if (3 === Object.keys(e).length && 3 === Object.keys(t)
							.length) {
							if (!p(e)) throw new TypeError(
								"Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers"
								);
							if (!p(t)) throw new TypeError(
								"Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers"
								);
							if ("pointOneX" in e && "pointOneY" in e &&
								"pointOneZ" in e && "pointTwoX" in t &&
								"pointTwoY" in t && "pointTwoZ" in t) return g([
								e.pointOneX, e.pointOneY, e
								.pointOneZ
							], [t.pointTwoX, t.pointTwoY, t
								.pointTwoZ
							]);
							throw new TypeError("Key names do not match")
						}
						throw new TypeError("Invalid Arguments: Try again")
					},
					Array: function(e) {
						if (! function(e) {
								if (2 === e[0].length && f(e[0][0]) && f(e[0][
										1])) {
									if (e.some((function(e) {
											return 2 !== e.length || !f(
												e[0]) || !f(e[1])
										}))) return !1
								} else {
									if (!(3 === e[0].length && f(e[0][0]) && f(
											e[0][1]) && f(e[0][2]))) return !1;
									if (e.some((function(e) {
											return 3 !== e.length || !f(
													e[0]) || !f(e[1]) ||
												!f(e[2])
										}))) return !1
								}
								return !0
							}(e)) throw new TypeError(
							"Incorrect array format entered for pairwise distance calculation"
							);
						return function(e) {
							for (var t = [], r = [], n = [], i = 0; i < e
								.length - 1; i++)
								for (var a = i + 1; a < e.length; a++) 2 ===
									e[0].length ? (r = [e[i][0], e[i][1]],
										n = [e[a][0], e[a][1]]) : 3 === e[0]
									.length && (r = [e[i][0], e[i][1], e[i][
										2
									]], n = [e[a][0], e[a][1], e[a][2]]), t
									.push(g(r, n));
							return t
						}(e)
					}
				});

				function f(e) {
					return "number" == typeof e || s(e)
				}

				function l(e) {
					return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1])
				}

				function p(e) {
					return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1]) && f(e[
						2])
				}

				function m(e) {
					return Array.isArray(e) || (e = d(e)), e.every(f)
				}

				function h(e) {
					return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1]) && f(e[
						2]) && f(e[3]) && f(e[4]) && f(e[5])
				}

				function d(e) {
					for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[
						t[n]]);
					return r
				}

				function v(e, t, n, o, s) {
					var f = c(r(r(i(n, e), i(o, t)), s)),
						l = u(r(i(n, n), i(o, o)));
					return a(f, l)
				}

				function y(e, t, o, s, c, f, l, p, m) {
					var h = [n(i(n(c, t), m), i(n(f, o), p)), n(i(n(f, o), l), i(n(s, e),
						m)), n(i(n(s, e), p), i(n(c, t), l))];
					h = u(r(r(i(h[0], h[0]), i(h[1], h[1])), i(h[2], h[2])));
					var d = u(r(r(i(l, l), i(p, p)), i(m, m)));
					return a(h, d)
				}

				function g(e, t) {
					for (var a = e.length, o = 0, s = 0, c = 0; c < a; c++) s = n(e[c], t[
						c]), o = r(i(s, s), o);
					return u(o)
				}
			})),
			Ju = Qe("intersect", ["typed", "config", "abs", "add", "addScalar", "matrix",
				"multiply", "multiplyScalar", "divideScalar", "subtract", "smaller",
				"equalScalar", "flatten", "isZero", "isNumeric"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.abs,
					i = e.add,
					a = e.addScalar,
					o = e.matrix,
					s = e.multiply,
					u = e.multiplyScalar,
					c = e.divideScalar,
					f = e.subtract,
					l = e.smaller,
					p = e.equalScalar,
					m = e.flatten,
					h = e.isZero,
					d = e.isNumeric;
				return t("intersect", {
					"Array, Array, Array": v,
					"Array, Array, Array, Array": y,
					"Matrix, Matrix, Matrix": function(e, t, r) {
						var n = v(e.valueOf(), t.valueOf(), r.valueOf());
						return null === n ? null : o(n)
					},
					"Matrix, Matrix, Matrix, Matrix": function(e, t, r, n) {
						var i = y(e.valueOf(), t.valueOf(), r.valueOf(), n
							.valueOf());
						return null === i ? null : o(i)
					}
				});

				function v(e, t, r) {
					if (e = g(e), t = g(t), r = g(r), !b(e)) throw new TypeError(
						"Array with 3 numbers or BigNumbers expected for first argument"
						);
					if (!b(t)) throw new TypeError(
						"Array with 3 numbers or BigNumbers expected for second argument"
						);
					if (! function(e) {
							return 4 === e.length && d(e[0]) && d(e[1]) && d(e[2]) && d(e[
								3])
						}(r)) throw new TypeError(
						"Array with 4 numbers expected as third argument");
					return function(e, t, r, n, i, o, s, l, p, m) {
						var h = u(e, s),
							d = u(n, s),
							v = u(t, l),
							y = u(i, l),
							g = u(r, p),
							x = u(o, p),
							b = f(f(f(m, h), v), g),
							w = f(f(f(a(a(d, y), x), h), v), g),
							N = c(b, w),
							M = a(e, u(N, f(n, e))),
							E = a(t, u(N, f(i, t))),
							S = a(r, u(N, f(o, r)));
						return [M, E, S]
					}(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2], r[3])
				}

				function y(e, t, o, m) {
					if (e = g(e), t = g(t), o = g(o), m = g(m), 2 === e.length) {
						if (!x(e)) throw new TypeError(
							"Array with 2 numbers or BigNumbers expected for first argument"
							);
						if (!x(t)) throw new TypeError(
							"Array with 2 numbers or BigNumbers expected for second argument"
							);
						if (!x(o)) throw new TypeError(
							"Array with 2 numbers or BigNumbers expected for third argument"
							);
						if (!x(m)) throw new TypeError(
							"Array with 2 numbers or BigNumbers expected for fourth argument"
							);
						return function(e, t, o, p) {
							var m = e,
								d = o,
								v = f(m, t),
								y = f(d, p),
								g = f(u(v[0], y[1]), u(y[0], v[1]));
							if (h(g)) return null;
							if (l(n(g), r.epsilon)) return null;
							var x = u(y[0], m[1]),
								b = u(y[1], m[0]),
								w = u(y[0], d[1]),
								N = u(y[1], d[0]),
								M = c(a(f(f(x, b), w), N), g);
							return i(s(v, M), m)
						}(e, t, o, m)
					}
					if (3 === e.length) {
						if (!b(e)) throw new TypeError(
							"Array with 3 numbers or BigNumbers expected for first argument"
							);
						if (!b(t)) throw new TypeError(
							"Array with 3 numbers or BigNumbers expected for second argument"
							);
						if (!b(o)) throw new TypeError(
							"Array with 3 numbers or BigNumbers expected for third argument"
							);
						if (!b(m)) throw new TypeError(
							"Array with 3 numbers or BigNumbers expected for fourth argument"
							);
						return function(e, t, r, n, i, o, s, l, m, d, v, y) {
							var g = w(e, s, d, s, t, l, v, l, r, m, y, m),
								x = w(d, s, n, e, v, l, i, t, y, m, o, r),
								b = w(e, s, n, e, t, l, i, t, r, m, o, r),
								N = w(d, s, d, s, v, l, v, l, y, m, y, m),
								M = w(n, e, n, e, i, t, i, t, o, r, o, r),
								E = f(u(g, x), u(b, N)),
								S = f(u(M, N), u(x, x));
							if (h(S)) return null;
							var A = c(E, S),
								O = c(a(g, u(A, x)), N),
								C = a(e, u(A, f(n, e))),
								_ = a(t, u(A, f(i, t))),
								T = a(r, u(A, f(o, r))),
								I = a(s, u(O, f(d, s))),
								k = a(l, u(O, f(v, l))),
								z = a(m, u(O, f(y, m)));
							return p(C, I) && p(_, k) && p(T, z) ? [C, _, T] : null
						}(e[0], e[1], e[2], t[0], t[1], t[2], o[0], o[1], o[2], m[0], m[
							1], m[2])
					}
					throw new TypeError(
						"Arrays with two or thee dimensional points expected")
				}

				function g(e) {
					return 1 === e.length ? e[0] : e.length > 1 && Array.isArray(e[0]) && e
						.every((function(e) {
							return Array.isArray(e) && 1 === e.length
						})) ? m(e) : e
				}

				function x(e) {
					return 2 === e.length && d(e[0]) && d(e[1])
				}

				function b(e) {
					return 3 === e.length && d(e[0]) && d(e[1]) && d(e[2])
				}

				function w(e, t, r, n, i, o, s, c, l, p, m, h) {
					var d = u(f(e, t), f(r, n)),
						v = u(f(i, o), f(s, c)),
						y = u(f(l, p), f(m, h));
					return a(a(d, v), y)
				}
			})),
			Xu = Qe("sum", ["typed", "config", "add", "numeric"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.add,
					i = e.numeric;
				return t("sum", {
					"Array | Matrix": a,
					"Array | Matrix, number | BigNumber": function(e, t) {
						try {
							return Gt(e, t, n)
						} catch (e) {
							throw ca(e, "sum")
						}
					},
					"...": function(e) {
						if (Lt(e)) throw new TypeError(
							"Scalar values expected in function sum");
						return a(e)
					}
				});

				function a(e) {
					var t;
					return $t(e, (function(e) {
						try {
							t = void 0 === t ? e : n(t, e)
						} catch (t) {
							throw ca(t, "sum", e)
						}
					})), void 0 === t && (t = i(0, r.number)), "string" == typeof t && (
						t = i(t, r.number)), t
				}
			})),
			Qu = Qe("mean", ["typed", "add", "divide"], (function(e) {
				var t = e.typed,
					r = e.add,
					n = e.divide;
				return t("mean", {
					"Array | Matrix": i,
					"Array | Matrix, number | BigNumber": function(e, t) {
						try {
							var i = Gt(e, t, r),
								a = Array.isArray(e) ? Se(e) : e.size();
							return n(i, a[t])
						} catch (e) {
							throw ca(e, "mean")
						}
					},
					"...": function(e) {
						if (Lt(e)) throw new TypeError(
							"Scalar values expected in function mean");
						return i(e)
					}
				});

				function i(e) {
					var t, i = 0;
					if ($t(e, (function(e) {
							try {
								t = void 0 === t ? e : r(t, e), i++
							} catch (t) {
								throw ca(t, "mean", e)
							}
						})), 0 === i) throw new Error(
						"Cannot calculate the mean of an empty array");
					return n(t, i)
				}
			})),
			Ku = Qe("median", ["typed", "add", "divide", "compare", "partitionSelect"], (function(
			e) {
				var t = e.typed,
					r = e.add,
					n = e.divide,
					i = e.compare,
					a = e.partitionSelect;

				function o(e) {
					try {
						var t = (e = Re(e.valueOf())).length;
						if (0 === t) throw new Error(
							"Cannot calculate median of an empty array");
						if (t % 2 == 0) {
							for (var r = t / 2 - 1, n = a(e, r + 1), o = e[r], c = 0; c <
								r; ++c) i(e[c], o) > 0 && (o = e[c]);
							return u(o, n)
						}
						var f = a(e, (t - 1) / 2);
						return s(f)
					} catch (e) {
						throw ca(e, "median")
					}
				}
				var s = t({
						"number | BigNumber | Complex | Unit": function(e) {
							return e
						}
					}),
					u = t({
						"number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function(
							e, t) {
							return n(r(e, t), 2)
						}
					});
				return t("median", {
					"Array | Matrix": o,
					"Array | Matrix, number | BigNumber": function(e, t) {
						throw new Error("median(A, dim) is not yet supported")
					},
					"...": function(e) {
						if (Lt(e)) throw new TypeError(
							"Scalar values expected in function median");
						return o(e)
					}
				})
			})),
			ec = Qe("mad", ["typed", "abs", "map", "median", "subtract"], (function(e) {
				var t = e.typed,
					r = e.abs,
					n = e.map,
					i = e.median,
					a = e.subtract;
				return t("mad", {
					"Array | Matrix": o,
					"...": function(e) {
						return o(e)
					}
				});

				function o(e) {
					if (0 === (e = Re(e.valueOf())).length) throw new Error(
						"Cannot calculate median absolute deviation (mad) of an empty array"
						);
					try {
						var t = i(e);
						return i(n(e, (function(e) {
							return r(a(e, t))
						})))
					} catch (e) {
						throw e instanceof TypeError && -1 !== e.message.indexOf("median") ?
							new TypeError(e.message.replace("median", "mad")) : ca(e, "mad")
					}
				}
			})),
			tc = Qe("variance", ["typed", "add", "subtract", "multiply", "divide", "apply",
				"isNaN"], (function(e) {
					var t = e.typed,
						r = e.add,
						n = e.subtract,
						i = e.multiply,
						a = e.divide,
						o = e.apply,
						u = e.isNaN;
					return t("variance", {
						"Array | Matrix": function(e) {
							return c(e, "unbiased")
						},
						"Array | Matrix, string": c,
						"Array | Matrix, number | BigNumber": function(e, t) {
							return f(e, t, "unbiased")
						},
						"Array | Matrix, number | BigNumber, string": f,
						"...": function(e) {
							return c(e, "unbiased")
						}
					});

					function c(e, t) {
						var o, c = 0;
						if (0 === e.length) throw new SyntaxError(
							"Function variance requires one or more parameters (0 provided)"
							);
						if ($t(e, (function(e) {
								try {
									o = void 0 === o ? e : r(o, e), c++
								} catch (t) {
									throw ca(t, "variance", e)
								}
							})), 0 === c) throw new Error(
							"Cannot calculate variance of an empty array");
						var f = a(o, c);
						if (o = void 0, $t(e, (function(e) {
								var t = n(e, f);
								o = void 0 === o ? i(t, t) : r(o, i(t, t))
							})), u(o)) return o;
						switch (t) {
							case "uncorrected":
								return a(o, c);
							case "biased":
								return a(o, c + 1);
							case "unbiased":
								var l = s(o) ? o.mul(0) : 0;
								return 1 === c ? l : a(o, c - 1);
							default:
								throw new Error('Unknown normalization "' + t +
									'". Choose "unbiased" (default), "uncorrected", or "biased".'
									)
						}
					}

					function f(e, t, r) {
						try {
							if (0 === e.length) throw new SyntaxError(
								"Function variance requires one or more parameters (0 provided)"
								);
							return o(e, t, (function(e) {
								return c(e, r)
							}))
						} catch (e) {
							throw ca(e, "variance")
						}
					}
				})),
			rc = Qe("quantileSeq", ["typed", "add", "multiply", "partitionSelect", "compare"], (
				function(e) {
					var t = e.typed,
						r = e.add,
						n = e.multiply,
						i = e.partitionSelect,
						a = e.compare;

					function u(e, t, s) {
						var u = Re(e),
							f = u.length;
						if (0 === f) throw new Error(
							"Cannot calculate quantile of an empty sequence");
						if (o(t)) {
							var l = t * (f - 1),
								p = l % 1;
							if (0 === p) {
								var m = s ? u[l] : i(u, l);
								return c(m), m
							}
							var h, d, v = Math.floor(l);
							if (s) h = u[v], d = u[v + 1];
							else {
								d = i(u, v + 1), h = u[v];
								for (var y = 0; y < v; ++y) a(u[y], h) > 0 && (h = u[y])
							}
							return c(h), c(d), r(n(h, 1 - p), n(d, p))
						}
						var g = t.times(f - 1);
						if (g.isInteger()) {
							g = g.toNumber();
							var x = s ? u[g] : i(u, g);
							return c(x), x
						}
						var b, w, N = g.floor(),
							M = g.minus(N),
							E = N.toNumber();
						if (s) b = u[E], w = u[E + 1];
						else {
							w = i(u, E + 1), b = u[E];
							for (var S = 0; S < E; ++S) a(u[S], b) > 0 && (b = u[S])
						}
						c(b), c(w);
						var A = new M.constructor(1);
						return r(n(b, A.minus(M)), n(w, M))
					}
					var c = t({
						"number | BigNumber | Unit": function(e) {
							return e
						}
					});
					return function(e, t, r) {
						var n, i, a;
						if (arguments.length < 2 || arguments.length > 3)
						throw new SyntaxError(
								"Function quantileSeq requires two or three parameters");
						if (h(e)) {
							if ("boolean" == typeof(r = r || !1)) {
								if (i = e.valueOf(), o(t)) {
									if (t < 0) throw new Error(
										"N/prob must be non-negative");
									if (t <= 1) return u(i, t, r);
									if (t > 1) {
										if (!Z(t)) throw new Error(
											"N must be a positive integer");
										var c = t + 1;
										n = new Array(t);
										for (var f = 0; f < t;) n[f] = u(i, ++f / c, r);
										return n
									}
								}
								if (s(t)) {
									var l = t.constructor;
									if (t.isNegative()) throw new Error(
										"N/prob must be non-negative");
									if (a = new l(1), t.lte(a)) return new l(u(i, t, r));
									if (t.gt(a)) {
										if (!t.isInteger()) throw new Error(
											"N must be a positive integer");
										var p = t.toNumber();
										if (p > 4294967295) throw new Error(
											"N must be less than or equal to 2^32-1, as that is the maximum length of an Array"
											);
										var m = new l(p + 1);
										n = new Array(p);
										for (var d = 0; d < p;) n[d] = new l(u(i, new l(++d)
											.div(m), r));
										return n
									}
								}
								if (Array.isArray(t)) {
									n = new Array(t.length);
									for (var v = 0; v < n.length; ++v) {
										var y = t[v];
										if (o(y)) {
											if (y < 0 || y > 1) throw new Error(
												"Probability must be between 0 and 1, inclusive"
												)
										} else {
											if (!s(y)) throw new TypeError(
												"Unexpected type of argument in function quantileSeq"
												);
											if (a = new y.constructor(1), y.isNegative() ||
												y.gt(a)) throw new Error(
												"Probability must be between 0 and 1, inclusive"
												)
										}
										n[v] = u(i, y, r)
									}
									return n
								}
								throw new TypeError(
									"Unexpected type of argument in function quantileSeq"
									)
							}
							throw new TypeError(
								"Unexpected type of argument in function quantileSeq")
						}
						throw new TypeError(
							"Unexpected type of argument in function quantileSeq")
					}
				})),
			nc = Qe("std", ["typed", "sqrt", "variance"], (function(e) {
				var t = e.typed,
					r = e.sqrt,
					n = e.variance;
				return t("std", {
					"Array | Matrix": i,
					"Array | Matrix, string": i,
					"Array | Matrix, number | BigNumber": i,
					"Array | Matrix, number | BigNumber, string": i,
					"...": function(e) {
						return i(e)
					}
				});

				function i(e, t) {
					if (0 === e.length) throw new SyntaxError(
						"Function std requires one or more parameters (0 provided)");
					try {
						return r(n.apply(null, arguments))
					} catch (e) {
						throw e instanceof TypeError && -1 !== e.message.indexOf(
							" variance") ? new TypeError(e.message.replace(" variance",
							" std")) : e
					}
				}
			}));

		function ic(e, t) {
			if (t < e) return 1;
			if (t === e) return t;
			var r = t + e >> 1;
			return ic(e, r) * ic(r + 1, t)
		}

		function ac(e, t) {
			if (!Z(e) || e < 0) throw new TypeError(
				"Positive integer value expected in function combinations");
			if (!Z(t) || t < 0) throw new TypeError(
				"Positive integer value expected in function combinations");
			if (t > e) throw new TypeError("k must be less than or equal to n");
			for (var r = e - t, n = 1, i = 2, a = t < r ? t : r, o = t < r ? r + 1 : t + 1; o <=
				e; ++o)
				for (n *= o; i <= a && n % i == 0;) n /= i, ++i;
			return i <= a && (n /= ic(i, a)), n
		}
		ac.signature = "number, number";
		var oc = Qe("combinations", ["typed"], (function(e) {
			return (0, e.typed)("combinations", {
				"number, number": ac,
				"BigNumber, BigNumber": function(e, t) {
					var r, n, i = e.constructor,
						a = e.minus(t),
						o = new i(1);
					if (!sc(e) || !sc(t)) throw new TypeError(
						"Positive integer value expected in function combinations"
						);
					if (t.gt(e)) throw new TypeError(
						"k must be less than n in function combinations"
						);
					if (r = o, t.lt(a))
						for (n = o; n.lte(a); n = n.plus(o)) r = r.times(t
							.plus(n)).dividedBy(n);
					else
						for (n = o; n.lte(t); n = n.plus(o)) r = r.times(a
							.plus(n)).dividedBy(n);
					return r
				}
			})
		}));

		function sc(e) {
			return e.isInteger() && e.gte(0)
		}
		var uc = Qe("combinationsWithRep", ["typed"], (function(e) {
			return (0, e.typed)("combinationsWithRep", {
				"number, number": function(e, t) {
					if (!Z(e) || e < 0) throw new TypeError(
						"Positive integer value expected in function combinationsWithRep"
						);
					if (!Z(t) || t < 0) throw new TypeError(
						"Positive integer value expected in function combinationsWithRep"
						);
					if (e < 1) throw new TypeError(
						"k must be less than or equal to n + k - 1");
					return t < e - 1 ? ic(e, e + t - 1) / ic(1, t) : ic(t +
						1, e + t - 1) / ic(1, e - 1)
				},
				"BigNumber, BigNumber": function(e, t) {
					var r, n, i = new(0, e.constructor)(1),
						a = e.minus(i);
					if (!cc(e) || !cc(t)) throw new TypeError(
						"Positive integer value expected in function combinationsWithRep"
						);
					if (e.lt(i)) throw new TypeError(
						"k must be less than or equal to n + k - 1 in function combinationsWithRep"
						);
					if (r = i, t.lt(a))
						for (n = i; n.lte(a); n = n.plus(i)) r = r.times(t
							.plus(n)).dividedBy(n);
					else
						for (n = i; n.lte(t); n = n.plus(i)) r = r.times(a
							.plus(n)).dividedBy(n);
					return r
				}
			})
		}));

		function cc(e) {
			return e.isInteger() && e.gte(0)
		}

		function fc(e) {
			var t;
			if (Z(e)) return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : e > 171 ? 1 / 0 : ic(1, e - 1);
			if (e < .5) return Math.PI / (Math.sin(Math.PI * e) * fc(1 - e));
			if (e >= 171.35) return 1 / 0;
			if (e > 85) {
				var r = e * e,
					n = r * e,
					i = n * e,
					a = i * e;
				return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) +
					1 / (288 * r) - 139 / (51840 * n) - 571 / (2488320 * i) + 163879 / (
						209018880 * a) + 5246819 / (75246796800 * a * e))
			}--e, t = pc[0];
			for (var o = 1; o < pc.length; ++o) t += pc[o] / (e + o);
			var s = e + lc + .5;
			return Math.sqrt(2 * Math.PI) * Math.pow(s, e + .5) * Math.exp(-s) * t
		}
		fc.signature = "number";
		var lc = 4.7421875,
			pc = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -
				.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -
				9837447530487956e-20, .0001580887032249125, -.00021026444172410488,
				.00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -
				26190838401581408e-21, 36899182659531625e-22
			],
			mc = Qe("gamma", ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], (
				function(e) {
					var t = e.typed,
						r = e.config,
						n = (e.multiplyScalar, e.pow, e.BigNumber),
						i = e.Complex;
					return t("gamma", {
						number: fc,
						Complex: function(e) {
							if (0 === e.im) return this(e.re);
							if (e.re < .5) {
								var t = new i(1 - e.re, -e.im),
									r = new i(Math.PI * e.re, Math.PI * e.im);
								return new i(Math.PI).div(r.sin()).div(this(t))
							}
							e = new i(e.re - 1, e.im);
							for (var n = new i(pc[0], 0), a = 1; a < pc.length; ++
								a) {
								var o = new i(pc[a], 0);
								n = n.add(o.div(e.add(a)))
							}
							var s = new i(e.re + lc + .5, e.im),
								u = Math.sqrt(2 * Math.PI),
								c = s.pow(e.add(.5)),
								f = s.neg().exp();
							return n.mul(u).mul(c).mul(f)
						},
						BigNumber: function(e) {
							if (e.isInteger()) return e.isNegative() || e.isZero() ?
								new n(1 / 0) : function e(t) {
									if (t < 8) return new n([1, 1, 2, 6, 24,
										120, 720, 5040
									][t]);
									var i = r.precision + (0 | Math.log(t
											.toNumber())),
										a = n.clone({
											precision: i
										});
									if (t % 2 == 1) return t.times(e(new n(t -
										1)));
									var o = t,
										s = new a(t),
										u = t.toNumber();
									for (; o > 2;) u += o -= 2, s = s.times(u);
									return new n(s.toPrecision(n.precision))
								}(e.minus(1));
							if (!e.isFinite()) return new n(e.isNegative() ? NaN :
								1 / 0);
							throw new Error("Integer BigNumber expected")
						},
						"Array | Matrix": function(e) {
							return Ht(e, this)
						}
					})
				})),
			hc = Qe("factorial", ["typed", "gamma"], (function(e) {
				var t = e.typed,
					r = e.gamma;
				return t("factorial", {
					number: function(e) {
						if (e < 0) throw new Error(
						"Value must be non-negative");
						return r(e + 1)
					},
					BigNumber: function(e) {
						if (e.isNegative()) throw new Error(
							"Value must be non-negative");
						return r(e.plus(1))
					},
					"Array | Matrix": function(e) {
						return Ht(e, this)
					}
				})
			})),
			dc = Qe("kldivergence", ["typed", "matrix", "divide", "sum", "multiply", "dotDivide",
				"log", "isNumeric"
			], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.divide,
					i = e.sum,
					a = e.multiply,
					o = e.dotDivide,
					s = e.log,
					u = e.isNumeric;
				return t("kldivergence", {
					"Array, Array": function(e, t) {
						return c(r(e), r(t))
					},
					"Matrix, Array": function(e, t) {
						return c(e, r(t))
					},
					"Array, Matrix": function(e, t) {
						return c(r(e), t)
					},
					"Matrix, Matrix": function(e, t) {
						return c(e, t)
					}
				});

				function c(e, t) {
					var r = t.size().length,
						c = e.size().length;
					if (r > 1) throw new Error("first object must be one dimensional");
					if (c > 1) throw new Error("second object must be one dimensional");
					if (r !== c) throw new Error("Length of two vectors must be equal");
					if (0 === i(e)) throw new Error(
						"Sum of elements in first object must be non zero");
					if (0 === i(t)) throw new Error(
						"Sum of elements in second object must be non zero");
					var f = n(e, i(e)),
						l = n(t, i(t)),
						p = i(a(f, s(o(f, l))));
					return u(p) ? p : Number.NaN
				}
			})),
			vc = Qe("multinomial", ["typed", "add", "divide", "multiply", "factorial", "isInteger",
				"isPositive"
			], (function(e) {
				var t = e.typed,
					r = e.add,
					n = e.divide,
					i = e.multiply,
					a = e.factorial,
					o = e.isInteger,
					s = e.isPositive;
				return t("multinomial", {
					"Array | Matrix": function(e) {
						var t = 0,
							u = 1;
						return $t(e, (function(e) {
							if (!o(e) || !s(e)) throw new TypeError(
								"Positive integer value expected in function multinomial"
								);
							t = r(t, e), u = i(u, a(e))
						})), n(a(t), u)
					}
				})
			})),
			yc = Qe("permutations", ["typed", "factorial"], (function(e) {
				return (0, e.typed)("permutations", {
					"number | BigNumber": e.factorial,
					"number, number": function(e, t) {
						if (!Z(e) || e < 0) throw new TypeError(
							"Positive integer value expected in function permutations"
							);
						if (!Z(t) || t < 0) throw new TypeError(
							"Positive integer value expected in function permutations"
							);
						if (t > e) throw new TypeError(
							"second argument k must be less than or equal to first argument n"
							);
						return ic(e - t + 1, e)
					},
					"BigNumber, BigNumber": function(e, t) {
						var r, n;
						if (!gc(e) || !gc(t)) throw new TypeError(
							"Positive integer value expected in function permutations"
							);
						if (t.gt(e)) throw new TypeError(
							"second argument k must be less than or equal to first argument n"
							);
						for (r = e.mul(0).add(1), n = e.minus(t).plus(1); n.lte(
								e); n = n.plus(1)) r = r.times(n);
						return r
					}
				})
			}));

		function gc(e) {
			return e.isInteger() && e.gte(0)
		}
		var xc = r(134),
			bc = r.n(xc),
			wc = bc()(Date.now());

		function Nc(e) {
			var t, r;
			return t = null === (r = e) ? wc : bc()(String(r)),
				function() {
					return t()
				}
		}
		var Mc = Qe("pickRandom", ["typed", "config", "?on"], (function(e) {
			var t = e.typed,
				r = e.config,
				n = e.on,
				i = Nc(r.randomSeed);
			return n && n("config", (function(e, t) {
				e.randomSeed !== t.randomSeed && (i = Nc(e.randomSeed))
			})), t("pickRandom", {
				"Array | Matrix": function(e) {
					return a(e, {})
				},
				"Array | Matrix, Object": function(e, t) {
					return a(e, t)
				},
				"Array | Matrix, number": function(e, t) {
					return a(e, {
						number: t
					})
				},
				"Array | Matrix, Array | Matrix": function(e, t) {
					return a(e, {
						weights: t
					})
				},
				"Array | Matrix, Array | Matrix, number": function(e, t, r) {
					return a(e, {
						number: r,
						weights: t
					})
				},
				"Array | Matrix, number, Array | Matrix": function(e, t, r) {
					return a(e, {
						number: t,
						weights: r
					})
				}
			});

			function a(e, t) {
				var r = t.number,
					n = t.weights,
					a = t.elementWise,
					s = void 0 === a || a,
					u = void 0 === r;
				u && (r = 1);
				var c = m(e) ? e.create : m(n) ? n.create : null;
				e = e.valueOf(), n && (n = n.valueOf()), !0 === s && (e = Re(e), n = Re(
					n));
				var f = 0;
				if (void 0 !== n) {
					if (n.length !== e.length) throw new Error(
						"Weights must have the same length as possibles");
					for (var l = 0, p = n.length; l < p; l++) {
						if (!o(n[l]) || n[l] < 0) throw new Error(
							"Weights must be an array of positive numbers");
						f += n[l]
					}
				}
				for (var h, d = e.length, v = []; v.length < r;) {
					if (void 0 === n) h = e[Math.floor(i() * d)];
					else
						for (var y = i() * f, g = 0, x = e.length; g < x; g++)
							if ((y -= n[g]) < 0) {
								h = e[g];
								break
							} v.push(h)
				}
				return u ? v[0] : c ? c(v) : v
			}
		}));

		function Ec(e, t) {
			var r = [];
			if ((e = e.slice(0)).length > 1)
				for (var n = 0, i = e.shift(); n < i; n++) r.push(Ec(e, t));
			else
				for (var a = 0, o = e.shift(); a < o; a++) r.push(t());
			return r
		}
		var Sc = Qe("random", ["typed", "config", "?on"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.on,
					i = Nc(r.randomSeed);
				return n && n("config", (function(e, t) {
					e.randomSeed !== t.randomSeed && (i = Nc(e.randomSeed))
				})), t("random", {
					"": function() {
						return o(0, 1)
					},
					number: function(e) {
						return o(0, e)
					},
					"number, number": function(e, t) {
						return o(e, t)
					},
					"Array | Matrix": function(e) {
						return a(e, 0, 1)
					},
					"Array | Matrix, number": function(e, t) {
						return a(e, 0, t)
					},
					"Array | Matrix, number, number": function(e, t, r) {
						return a(e, t, r)
					}
				});

				function a(e, t, r) {
					var n = Ec(e.valueOf(), (function() {
						return o(t, r)
					}));
					return m(e) ? e.create(n) : n
				}

				function o(e, t) {
					return e + i() * (t - e)
				}
			})),
			Ac = Qe("randomInt", ["typed", "config", "?on"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.on,
					i = Nc(r.randomSeed);
				return n && n("config", (function(e, t) {
					e.randomSeed !== t.randomSeed && (i = Nc(e.randomSeed))
				})), t("randomInt", {
					"": function() {
						return o(0, 1)
					},
					number: function(e) {
						return o(0, e)
					},
					"number, number": function(e, t) {
						return o(e, t)
					},
					"Array | Matrix": function(e) {
						return a(e, 0, 1)
					},
					"Array | Matrix, number": function(e, t) {
						return a(e, 0, t)
					},
					"Array | Matrix, number, number": function(e, t, r) {
						return a(e, t, r)
					}
				});

				function a(e, t, r) {
					var n = Ec(e.valueOf(), (function() {
						return o(t, r)
					}));
					return m(e) ? e.create(n) : n
				}

				function o(e, t) {
					return Math.floor(e + i() * (t - e))
				}
			})),
			Oc = Qe("stirlingS2", ["typed", "addScalar", "subtract", "multiplyScalar",
				"divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger",
				"larger"
			], (function(e) {
				var t = e.typed,
					r = e.addScalar,
					n = e.subtract,
					i = e.multiplyScalar,
					a = e.divideScalar,
					o = e.pow,
					s = e.factorial,
					u = e.combinations,
					c = e.isNegative,
					f = e.isInteger,
					l = e.larger;
				return t("stirlingS2", {
					"number | BigNumber, number | BigNumber": function(e, t) {
						if (!f(e) || c(e) || !f(t) || c(t)) throw new TypeError(
							"Non-negative integer value expected in function stirlingS2"
							);
						if (l(t, e)) throw new TypeError(
							"k must be less than or equal to n in function stirlingS2"
							);
						for (var p = s(t), m = 0, h = 0; h <= t; h++) {
							var d = o(-1, n(t, h)),
								v = u(t, h),
								y = o(h, e);
							m = r(m, i(i(v, y), d))
						}
						return a(m, p)
					}
				})
			})),
			Cc = Qe("bellNumbers", ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"],
				(function(e) {
					var t = e.typed,
						r = e.addScalar,
						n = e.isNegative,
						i = e.isInteger,
						a = e.stirlingS2;
					return t("bellNumbers", {
						"number | BigNumber": function(e) {
							if (!i(e) || n(e)) throw new TypeError(
								"Non-negative integer value expected in function bellNumbers"
								);
							for (var t = 0, o = 0; o <= e; o++) t = r(t, a(e, o));
							return t
						}
					})
				})),
			_c = Qe("catalan", ["typed", "addScalar", "divideScalar", "multiplyScalar",
				"combinations", "isNegative", "isInteger"
			], (function(e) {
				var t = e.typed,
					r = e.addScalar,
					n = e.divideScalar,
					i = e.multiplyScalar,
					a = e.combinations,
					o = e.isNegative,
					s = e.isInteger;
				return t("catalan", {
					"number | BigNumber": function(e) {
						if (!s(e) || o(e)) throw new TypeError(
							"Non-negative integer value expected in function catalan"
							);
						return n(a(i(e, 2), e), r(e, 1))
					}
				})
			})),
			Tc = Qe("composition", ["typed", "addScalar", "combinations", "isNegative",
				"isPositive", "isInteger", "larger"
			], (function(e) {
				var t = e.typed,
					r = e.addScalar,
					n = e.combinations,
					i = e.isPositive,
					a = (e.isNegative, e.isInteger),
					o = e.larger;
				return t("composition", {
					"number | BigNumber, number | BigNumber": function(e, t) {
						if (!(a(e) && i(e) && a(t) && i(t)))
						throw new TypeError(
								"Positive integer value expected in function composition"
								);
						if (o(t, e)) throw new TypeError(
							"k must be less than or equal to n in function composition"
							);
						return n(r(e, -1), r(t, -1))
					}
				})
			})),
			Ic = Qe("leafCount", ["parse", "typed"], (function(e) {
				var t = e.parse;
				return (0, e.typed)("leafCount", {
					string: function(e) {
						return this(t(e))
					},
					Node: function(e) {
						return function e(t) {
							var r = 0;
							return t.forEach((function(t) {
								r += e(t)
							})), r || 1
						}(e)
					}
				})
			}));
		r(253);

		function kc(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function zc(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2 ? kc(Object(r), !0).forEach((function(t) {
					Ma()(e, t, r[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
					.getOwnPropertyDescriptors(r)) : kc(Object(r)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
			return e
		}
		var Rc = Qe("simplifyUtil", ["FunctionNode", "OperatorNode", "SymbolNode"], (function(e) {
			var t = e.FunctionNode,
				r = e.OperatorNode,
				n = e.SymbolNode,
				i = !0,
				a = !1,
				o = {
					add: {
						trivial: i,
						total: i,
						commutative: i,
						associative: i
					},
					unaryPlus: {
						trivial: i,
						total: i,
						commutative: i,
						associative: i
					},
					subtract: {
						trivial: a,
						total: i,
						commutative: a,
						associative: a
					},
					multiply: {
						trivial: i,
						total: i,
						commutative: i,
						associative: i
					},
					divide: {
						trivial: a,
						total: i,
						commutative: a,
						associative: a
					},
					paren: {
						trivial: i,
						total: i,
						commutative: i,
						associative: a
					},
					defaultF: {
						trivial: a,
						total: i,
						commutative: a,
						associative: a
					}
				};

			function s(e, t) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
					o,
					n = "defaultF";
				if ("string" == typeof e ? n = e : P(e) ? n = e.fn.toString() : q(e) ?
					n = e.name : F(e) && (n = "paren"), Je(r, n)) {
					var i = r[n];
					if (Je(i, t)) return i[t];
					if (Je(o, n)) return o[n][t]
				}
				if (Je(r, "defaultF")) {
					var a = r.defaultF;
					return Je(a, t) ? a[t] : o.defaultF[t]
				}
				if (Je(o, n)) {
					var s = o[n];
					if (Je(s, t)) return s[t]
				}
				return o.defaultF[t]
			}

			function u(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
					o;
				return s(e, "associative", t)
			}

			function c(e, t) {
				var r, n = [];
				return u(e, t) ? (r = e.op, function e(t) {
					for (var i = 0; i < t.args.length; i++) {
						var a = t.args[i];
						P(a) && r === a.op ? e(a) : n.push(a)
					}
				}(e), n) : e.args
			}

			function f(e) {
				return P(e) ? function(t) {
					try {
						return new r(e.op, e.fn, t, e.implicit)
					} catch (e) {
						return console.error(e), []
					}
				} : function(r) {
					return new t(new n(e.name), r)
				}
			}
			return {
				createMakeNodeFunction: f,
				hasProperty: s,
				isCommutative: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ?
						arguments[1] : o;
					return s(e, "commutative", t)
				},
				isAssociative: u,
				mergeContext: function(e, t) {
					var r = zc({}, e);
					for (var n in t) Je(e, n) ? r[n] = zc(zc({}, t[n]), e[n]) : r[
						n] = t[n];
					return r
				},
				flatten: function e(t, r) {
					if (!t.args || 0 === t.args.length) return t;
					t.args = c(t, r);
					for (var n = 0; n < t.args.length; n++) e(t.args[n], r)
				},
				allChildren: c,
				unflattenr: function e(t, r) {
					if (t.args && 0 !== t.args.length) {
						for (var n = f(t), i = t.args.length, a = 0; a < i; a++) e(t
							.args[a], r);
						if (i > 2 && u(t, r)) {
							for (var o = t.args.pop(); t.args.length > 0;) o = n([t
								.args.pop(), o
							]);
							t.args = o.args
						}
					}
				},
				unflattenl: function e(t, r) {
					if (t.args && 0 !== t.args.length) {
						for (var n = f(t), i = t.args.length, a = 0; a < i; a++) e(t
							.args[a], r);
						if (i > 2 && u(t, r)) {
							for (var o = t.args.shift(); t.args.length > 0;) o = n([
								o, t.args.shift()
							]);
							t.args = o.args
						}
					}
				},
				defaultContext: o,
				realContext: {
					divide: {
						total: a
					},
					log: {
						total: a
					}
				},
				positiveContext: {
					subtract: {
						total: a
					},
					abs: {
						trivial: i
					},
					log: {
						total: i
					}
				}
			}
		}));

		function qc(e, t) {
			var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (!r) {
				if (Array.isArray(e) || (r = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Bc(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
							.test(r)) return Bc(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					r && (e = r);
					var n = 0,
						i = function() {};
					return {
						s: i,
						n: function() {
							return n >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[n++]
							}
						},
						e: function(e) {
							throw e
						},
						f: i
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}
			var a, o = !0,
				s = !1;
			return {
				s: function() {
					r = r.call(e)
				},
				n: function() {
					var e = r.next();
					return o = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						o || null == r.return || r.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function Bc(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		var Dc = Qe("simplifyConstant", ["typed", "config", "mathWithTransform", "matrix",
				"?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode",
				"FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.mathWithTransform,
					i = e.matrix,
					o = e.fraction,
					s = e.bignumber,
					u = e.AccessorNode,
					f = e.ArrayNode,
					l = e.ConstantNode,
					p = e.FunctionNode,
					h = e.IndexNode,
					d = e.ObjectNode,
					v = e.OperatorNode,
					y = e.SymbolNode,
					g = Rc({
						FunctionNode: p,
						OperatorNode: v,
						SymbolNode: y
					}),
					x = g.isCommutative,
					b = g.isAssociative,
					w = g.allChildren,
					N = g.createMakeNodeFunction;

				function M(e, t) {
					return O(function e(t, r) {
						switch (t.type) {
							case "SymbolNode":
								return t;
							case "ConstantNode":
								switch (a()(t.value)) {
									case "number":
										return T(t.value, r);
									case "string":
										return t.value;
									default:
										if (!isNaN(t.value)) return T(t.value, r)
								}
								return t;
							case "FunctionNode":
								if (n[t.name] && n[t.name].rawArgs) return t;
								if (-1 === ["add", "multiply"].indexOf(t.name)) {
									var o = t.args.map((function(t) {
										return e(t, r)
									}));
									if (!o.some(D)) try {
										return S(t.name, o, r)
									} catch (e) {}
									if ("size" === t.name && 1 === o.length && _(o[
											0])) {
										for (var s = [], c = o[0]; _(c);) s.push(c
											.items.length), c = c.items[0];
										return i(s)
									}
									return new p(t.name, o.map(O))
								}
								case "OperatorNode":
									var v, y, g = t.fn.toString(),
										E = N(t);
									if (P(t) && t.isUnary()) v = [e(t.args[0], r)],
										y = D(v[0]) ? E(v) : S(g, v, r);
									else if (b(t, r.context))
										if (v = (v = w(t, r.context)).map((function(
												t) {
												return e(t, r)
											})), x(g, r.context)) {
											for (var A = [], C = [], I = 0; I < v
												.length; I++) D(v[I]) ? C.push(v[
												I]) : A.push(v[I]);
											A.length > 1 ? (y = k(g, A, E, r), C
													.unshift(y), y = k(g, C, E, r)
													) : y = k(g, v, E, r)
										} else y = k(g, v, E, r);
									else v = t.args.map((function(t) {
										return e(t, r)
									})), y = k(g, v, E, r);
									return y;
								case "ParenthesisNode":
									return e(t.content, r);
								case "AccessorNode":
									return function(e, t, r) {
										if (!B(t)) return new u(O(e), O(t));
										if (_(e) || m(e)) {
											for (var n = Array.from(t
													.dimensions); n.length > 0;)
												if (z(n[0]) && "string" !=
													typeof n[0].value) {
													var a = T(n.shift().value,
														r);
													_(e) ? e = e.items[a - 1] :
														(e = e.valueOf()[a -
														1]) instanceof Array &&
														(e = i(e))
												} else {
													if (!(n.length > 1 && z(n[
																1]) &&
															"string" !=
															typeof n[1].value))
														break;
													var o, s = T(n[1].value, r),
														c = [],
														p = _(e) ? e.items : e
														.valueOf(),
														d = qc(p);
													try {
														for (d.s(); !(o = d.n())
															.done;) {
															var v = o.value;
															if (_(v)) c.push(v
																.items[s -
																	1]);
															else {
																if (!m(e))
															break;
																c.push(v[s - 1])
															}
														}
													} catch (e) {
														d.e(e)
													} finally {
														d.f()
													}
													if (c.length !== p.length)
														break;
													e = _(e) ? new f(c) : i(c),
														n.splice(1, 1)
												} return n.length === t
												.dimensions.length ? new u(O(e),
													t) : n.length > 0 ? (t =
													new h(n), new u(O(e), t)) :
												e
										}
										if (j(e) && 1 === t.dimensions.length &&
											z(t.dimensions[0])) {
											var y = t.dimensions[0].value;
											return y in e.properties ? e
												.properties[y] : new l
										}
										return new u(O(e), t)
									}(e(t.object, r), e(t.index, r), r);
								case "ArrayNode":
									var R = t.items.map((function(t) {
										return e(t, r)
									}));
									return R.some(D) ? new f(R.map(O)) : i(R);
								case "IndexNode":
									return new h(t.dimensions.map((function(e) {
										return M(e, r)
									})));
								case "ObjectNode":
									var q = {};
									for (var F in t.properties) q[F] = M(t
										.properties[F], r);
									return new d(q);
								case "AssignmentNode":
								case "BlockNode":
								case "FunctionAssignmentNode":
								case "RangeNode":
								case "ConditionalNode":
								default:
									throw new Error(
										"Unimplemented node type in simplifyConstant: "
										.concat(t.type))
						}
					}(e, t))
				}

				function E(e) {
					return c(e) ? e.valueOf() : e instanceof Array ? e.map(E) : m(e) ? i(E(e
						.valueOf())) : e
				}

				function S(e, t, r) {
					try {
						return n[e].apply(null, t)
					} catch (i) {
						return t = t.map(E), T(n[e].apply(null, t), r)
					}
				}
				var A = t({
					Fraction: function(e) {
						var t, r = e.s * e.n;
						t = r < 0 ? new v("-", "unaryMinus", [new l(-r)]) :
							new l(r);
						if (1 === e.d) return t;
						return new v("/", "divide", [t, new l(e.d)])
					},
					number: function(e) {
						return e < 0 ? I(new l(-e)) : new l(e)
					},
					BigNumber: function(e) {
						return e < 0 ? I(new l(-e)) : new l(e)
					},
					Complex: function(e) {
						throw new Error("Cannot convert Complex number to Node")
					},
					string: function(e) {
						return new l(e)
					},
					Matrix: function(e) {
						return new f(e.valueOf().map((function(e) {
							return A(e)
						})))
					}
				});

				function O(e) {
					return D(e) ? e : A(e)
				}

				function C(e, t) {
					if (t && !1 !== t.exactFractions && isFinite(e) && o) {
						var r = o(e),
							n = t && "number" == typeof t.fractionsLimit ? t
							.fractionsLimit : 1 / 0;
						if (r.valueOf() === e && r.n < n && r.d < n) return r
					}
					return e
				}
				var T = t({
					"string, Object": function(e, t) {
						return "BigNumber" === r.number ? (void 0 === s && Bi(),
							s(e)) : "Fraction" === r.number ? (void 0 ===
							o && Di(), o(e)) : C(parseFloat(e), t)
					},
					"Fraction, Object": function(e, t) {
						return e
					},
					"BigNumber, Object": function(e, t) {
						return e
					},
					"number, Object": function(e, t) {
						return C(e, t)
					},
					"Complex, Object": function(e, t) {
						return 0 !== e.im ? e : C(e.re, t)
					},
					"Matrix, Object": function(e, t) {
						return i(C(e.valueOf()))
					},
					"Array, Object": function(e, t) {
						return e.map(C)
					}
				});

				function I(e) {
					return new v("-", "unaryMinus", [e])
				}

				function k(e, t, r, n) {
					return t.reduce((function(t, i) {
						if (D(t) || D(i)) D(t) ? D(i) || (i = A(i)) : t = A(t);
						else {
							try {
								return S(e, [t, i], n)
							} catch (e) {}
							t = A(t), i = A(i)
						}
						return r([t, i])
					}))
				}
				return M
			})),
			jc = Qe("simplify", ["config", "typed", "parse", "add", "subtract", "multiply",
				"divide", "pow", "isZero", "equal", "resolve", "simplifyCore", "?fraction",
				"?bignumber", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode",
				"ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode",
				"ParenthesisNode", "SymbolNode"
			], (function(e) {
				var t = e.config,
					r = e.typed,
					n = e.parse,
					i = (e.add, e.subtract, e.multiply, e.divide, e.pow, e.isZero, e.equal),
					o = e.resolve,
					s = e.simplifyCore,
					u = e.fraction,
					c = e.bignumber,
					f = e.mathWithTransform,
					l = e.matrix,
					p = e.AccessorNode,
					m = e.ArrayNode,
					h = e.ConstantNode,
					d = e.FunctionNode,
					v = e.IndexNode,
					y = e.ObjectNode,
					g = e.OperatorNode,
					x = e.ParenthesisNode,
					b = e.SymbolNode,
					w = Dc({
						typed: r,
						config: t,
						mathWithTransform: f,
						matrix: l,
						fraction: u,
						bignumber: c,
						AccessorNode: p,
						ArrayNode: m,
						ConstantNode: h,
						FunctionNode: d,
						IndexNode: v,
						ObjectNode: y,
						OperatorNode: g,
						SymbolNode: b
					}),
					N = Rc({
						FunctionNode: d,
						OperatorNode: g,
						SymbolNode: b
					}),
					M = N.hasProperty,
					E = N.isCommutative,
					S = N.isAssociative,
					A = N.mergeContext,
					O = N.flatten,
					C = N.unflattenr,
					_ = N.unflattenl,
					T = N.createMakeNodeFunction,
					I = N.defaultContext,
					k = N.realContext,
					R = N.positiveContext,
					q = r("simplify", {
						string: function(e) {
							return this(n(e), this.rules, dt(), {})
						},
						"string, Map | Object": function(e, t) {
							return this(n(e), this.rules, t, {})
						},
						"string, Map | Object, Object": function(e, t, r) {
							return this(n(e), this.rules, t, r)
						},
						"string, Array": function(e, t) {
							return this(n(e), t, dt(), {})
						},
						"string, Array, Map | Object": function(e, t, r) {
							return this(n(e), t, r, {})
						},
						"string, Array, Map | Object, Object": function(e, t, r, i) {
							return this(n(e), t, r, i)
						},
						"Node, Map | Object": function(e, t) {
							return this(e, this.rules, t, {})
						},
						"Node, Map | Object, Object": function(e, t, r) {
							return this(e, this.rules, t, r)
						},
						Node: function(e) {
							return this(e, this.rules, dt(), {})
						},
						"Node, Array": function(e, t) {
							return this(e, t, dt(), {})
						},
						"Node, Array, Map | Object": function(e, t, r) {
							return this(e, t, r, {})
						},
						"Node, Array, Object, Object": function(e, t, r, n) {
							return this(e, t, vt(r), n)
						},
						"Node, Array, Map, Object": function(e, t, r, n) {
							var i = n.consoleDebug;
							t = function(e, t) {
								for (var r = [], n = 0; n < e.length; n++) {
									var i = e[n],
										o = void 0,
										s = a()(i);
									switch (s) {
										case "string":
											i = {
												s: i
											};
										case "object":
											o = j(i, t);
											break;
										case "function":
											o = i;
											break;
										default:
											throw TypeError(
												"Unsupported type of rule: " +
												s)
									}
									r.push(o)
								}
								return r
							}(t, n.context);
							for (var s = o(e, r), u = {}, c = (s = B(s)).toString({
									parenthesis: "all"
								}); !u[c];) {
								u[c] = !0, P = 0;
								var f = c;
								i && console.log("Working on: ", c);
								for (var l = 0; l < t.length; l++) {
									var p = "";
									if ("function" == typeof t[l] ? (s = t[l](s, n),
											i && (p = t[l].name)) : (O(s, n
											.context), s = L(s, t[l], n.context),
											i && (p = "".concat(t[l].l.toString(),
												" -> ").concat(t[l].r
											.toString()))), i) {
										var m = s.toString({
											parenthesis: "all"
										});
										m !== f && (console.log("Applying", p,
											"produced", m), f = m)
									}
									_(s, n.context)
								}
								c = s.toString({
									parenthesis: "all"
								})
							}
							return s
						}
					});

				function B(e) {
					return e.transform((function(e, t, r) {
						return F(e) ? B(e.content) : e
					}))
				}
				q.defaultContext = I, q.realContext = k, q.positiveContext = R;
				var D = {
					true: !0,
					false: !0,
					e: !0,
					i: !0,
					Infinity: !0,
					LN2: !0,
					LN10: !0,
					LOG2E: !0,
					LOG10E: !0,
					NaN: !0,
					phi: !0,
					pi: !0,
					SQRT1_2: !0,
					SQRT2: !0,
					tau: !0
				};

				function j(e, t) {
					var r = {};
					if (e.s) {
						var i = e.s.split("->");
						if (2 !== i.length) throw SyntaxError("Could not parse rule: " + e
							.s);
						r.l = i[0], r.r = i[1]
					} else r.l = e.l, r.r = e.r;
					r.l = B(n(r.l)), r.r = B(n(r.r));
					for (var a = 0, o = ["imposeContext", "repeat", "assuming"]; a < o
						.length; a++) {
						var s = o[a];
						s in e && (r[s] = e[s])
					}
					if (e.evaluate && (r.evaluate = n(e.evaluate)), S(r.l, t)) {
						var u = T(r.l),
							c = new b("_p" + P++);
						r.expanded = {}, r.expanded.l = u([r.l.clone(), c]), O(r.expanded.l,
							t), C(r.expanded.l, t), r.expanded.r = u([r.r, c])
					}
					return r
				}
				q.rules = [s, {
					l: "log(e)",
					r: "1"
				}, {
					s: "n-n1 -> n+-n1",
					assuming: {
						subtract: {
							total: !0
						}
					}
				}, {
					s: "-(c*v) -> v * (-c)",
					assuming: {
						multiply: {
							commutative: !0
						},
						subtract: {
							total: !0
						}
					}
				}, {
					s: "-(c*v) -> (-c) * v",
					assuming: {
						multiply: {
							commutative: !1
						},
						subtract: {
							total: !0
						}
					}
				}, {
					s: "-(v*c) -> v * (-c)",
					assuming: {
						multiply: {
							commutative: !1
						},
						subtract: {
							total: !0
						}
					}
				}, {
					l: "-(n1/n2)",
					r: "-n1/n2"
				}, {
					l: "-v",
					r: "v * (-1)"
				}, {
					l: "(n1 + n2)*(-1)",
					r: "n1*(-1) + n2*(-1)",
					repeat: !0
				}, {
					l: "n/n1^n2",
					r: "n*n1^-n2"
				}, {
					l: "n/n1",
					r: "n*n1^-1"
				}, {
					s: "(n1*n2)^n3 -> n1^n3 * n2^n3",
					assuming: {
						multiply: {
							commutative: !0
						}
					}
				}, {
					s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, {
					l: " v   * ( v   * n1 + n2)",
					r: "v^2       * n1 +  v   * n2"
				}, {
					s: " v   * (v^n4 * n1 + n2)   ->  v^(1+n4)  * n1 +  v   * n2",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, {
					s: "v^n3 * ( v   * n1 + n2)   ->  v^(n3+1)  * n1 + v^n3 * n2",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, {
					s: "v^n3 * (v^n4 * n1 + n2)   ->  v^(n3+n4) * n1 + v^n3 * n2",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, {
					l: "n*n",
					r: "n^2"
				}, {
					s: "n * n^n1 -> n^(n1+1)",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, {
					s: "n^n1 * n^n2 -> n^(n1+n2)",
					assuming: {
						divide: {
							total: !0
						}
					}
				}, w, {
					s: "n+n -> 2*n",
					assuming: {
						add: {
							total: !0
						}
					}
				}, {
					l: "n+-n",
					r: "0"
				}, {
					l: "v*n + v",
					r: "v*(n+1)"
				}, {
					l: "n3*n1 + n3*n2",
					r: "n3*(n1+n2)"
				}, {
					l: "n3^(-n4)*n1 +   n3  * n2",
					r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)"
				}, {
					l: "n3^(-n4)*n1 + n3^n5 * n2",
					r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)"
				}, {
					s: "n*v + v -> (n+1)*v",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					s: "n1*n3 + n2*n3 -> (n1+n2)*n3",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					l: "n*c + c",
					r: "(n+1)*c"
				}, {
					s: "c*n + c -> c*(n+1)",
					assuming: {
						multiply: {
							commutative: !1
						}
					}
				}, w, {
					s: "(-n)*n1 -> -(n*n1)",
					assuming: {
						subtract: {
							total: !0
						}
					}
				}, {
					s: "n1*(-n) -> -(n1*n)",
					assuming: {
						subtract: {
							total: !0
						},
						multiply: {
							commutative: !1
						}
					}
				}, {
					s: "c+v -> v+c",
					assuming: {
						add: {
							commutative: !0
						}
					},
					imposeContext: {
						add: {
							commutative: !1
						}
					}
				}, {
					s: "v*c -> c*v",
					assuming: {
						multiply: {
							commutative: !0
						}
					},
					imposeContext: {
						multiply: {
							commutative: !1
						}
					}
				}, {
					l: "n+-n1",
					r: "n-n1"
				}, {
					s: "n*(n1^-1) -> n/n1",
					assuming: {
						multiply: {
							commutative: !0
						}
					}
				}, {
					s: "n*n1^-n2 -> n/n1^n2",
					assuming: {
						multiply: {
							commutative: !0
						}
					}
				}, {
					s: "n^-1 -> 1/n",
					assuming: {
						multiply: {
							commutative: !0
						}
					}
				}, {
					l: "n^1",
					r: "n"
				}, {
					s: "n*(n1/n2) -> (n*n1)/n2",
					assuming: {
						multiply: {
							associative: !0
						}
					}
				}, {
					s: "n-(n1+n2) -> n-n1-n2",
					assuming: {
						addition: {
							associative: !0,
							commutative: !0
						}
					}
				}, {
					l: "1*n",
					r: "n",
					imposeContext: {
						multiply: {
							commutative: !0
						}
					}
				}, {
					s: "n1/(n2/n3) -> (n1*n3)/n2",
					assuming: {
						multiply: {
							associative: !0
						}
					}
				}, {
					l: "n1/(-n2)",
					r: "-n1/n2"
				}];
				var P = 0;

				function U(e, t, r) {
					var n = e;
					if (e)
						for (var i = 0; i < e.length; ++i) {
							var a = L(e[i], t, r);
							a !== e[i] && (n === e && (n = e.slice()), n[i] = a)
						}
					return n
				}

				function L(e, t, r) {
					if (t.assuming)
						for (var n in t.assuming)
							for (var i in t.assuming[n])
								if (M(n, i, r) !== t.assuming[n][i]) return e;
					var a = A(t.imposeContext, r),
						o = e;
					if (o instanceof g || o instanceof d) {
						var s = U(o.args, t, r);
						s !== o.args && ((o = o.clone()).args = s)
					} else if (o instanceof x) {
						if (o.content) {
							var u = L(o.content, t, r);
							u !== o.content && (o = new x(u))
						}
					} else if (o instanceof m) {
						var c = U(o.items, t, r);
						c !== o.items && (o = new m(c))
					} else if (o instanceof p) {
						var f = o.object;
						o.object && (f = L(o.object, t, r));
						var l = o.index;
						o.index && (l = L(o.index, t, r)), f === o.object && l === o
							.index || (o = new p(f, l))
					} else if (o instanceof v) {
						var h = U(o.dimensions, t, r);
						h !== o.dimensions && (o = new v(h))
					} else if (o instanceof y) {
						var b = !1,
							w = {};
						for (var N in o.properties) w[N] = L(o.properties[N], t, r), w[
							N] !== o.properties[N] && (b = !0);
						b && (o = new y(w))
					}
					var E = t.r,
						S = G(t.l, o, a)[0];
					if (!S && t.expanded && (E = t.expanded.r, S = G(t.expanded.l, o, a)[
						0]), S) {
						var O = o.implicit;
						o = E.clone(), O && "implicit" in E && (o.implicit = !0), o = o
							.transform((function(e) {
								return e.isSymbolNode && Je(S.placeholders, e
									.name) ? S.placeholders[e.name].clone() : e
							}))
					}
					return t.repeat && o !== e && (o = L(o, t, r)), o
				}

				function $(e, t) {
					var r = {
						placeholders: {}
					};
					if (!e.placeholders && !t.placeholders) return r;
					if (!e.placeholders) return t;
					if (!t.placeholders) return e;
					for (var n in e.placeholders)
						if (Je(e.placeholders, n) && (r.placeholders[n] = e.placeholders[n],
								Je(t.placeholders, n) && !V(e.placeholders[n], t
									.placeholders[n]))) return null;
					for (var i in t.placeholders) Je(t.placeholders, i) && (r.placeholders[
						i] = t.placeholders[i]);
					return r
				}

				function H(e, t) {
					var r, n = [];
					if (0 === e.length || 0 === t.length) return n;
					for (var i = 0; i < e.length; i++)
						for (var a = 0; a < t.length; a++)(r = $(e[i], t[a])) && n.push(r);
					return n
				}

				function G(e, t, r, n) {
					var a = [{
						placeholders: {}
					}];
					if (e instanceof g && t instanceof g || e instanceof d &&
						t instanceof d) {
						if (e instanceof g) {
							if (e.op !== t.op || e.fn !== t.fn) return []
						} else if (e instanceof d && e.name !== t.name) return [];
						if (!(1 === t.args.length && 1 === e.args.length || !S(t, r) && t
								.args.length === e.args.length || n)) {
							if (t.args.length >= 2 && 2 === e.args.length) {
								for (var o = function(e, t) {
										var r, n, i = [],
											a = T(e);
										if (E(e, t))
											for (var o = 0; o < e.args.length; o++)(n =
													e.args.slice(0)).splice(o, 1), r =
												1 === n.length ? n[0] : a(n), i.push(a([
													e.args[o], r
												]));
										else
											for (var s = 1; s < e.args.length; s++) {
												var u = e.args[0];
												s > 1 && (u = a(e.args.slice(0, s))),
													r = 1 === (n = e.args.slice(s))
													.length ? n[0] : a(n), i.push(a([u,
														r
													]))
											}
										return i
									}(t, r), s = [], u = 0; u < o.length; u++) {
									var c = G(e, o[u], r, !0);
									s = s.concat(c)
								}
								return s
							}
							if (e.args.length > 2) throw Error(
								"Unexpected non-binary associative function: " + e
								.toString());
							return []
						}
						for (var f = [], l = 0; l < e.args.length; l++) {
							var p = G(e.args[l], t.args[l], r);
							if (0 === p.length) break;
							f.push(p)
						}
						if (f.length !== e.args.length) {
							if (!E(t, r) || 1 === e.args.length) return [];
							if (e.args.length > 2) throw new Error(
								"permuting >2 commutative non-associative rule arguments not yet implemented"
								);
							var m = G(e.args[0], t.args[1], r);
							if (0 === m.length) return [];
							var v = G(e.args[1], t.args[0], r);
							if (0 === v.length) return [];
							f = [m, v]
						}
						a = function(e) {
							if (0 === e.length) return e;
							for (var t = e.reduce(H), r = [], n = {}, i = 0; i < t
								.length; i++) {
								var a = JSON.stringify(t[i]);
								n[a] || (n[a] = !0, r.push(t[i]))
							}
							return r
						}(f)
					} else if (e instanceof b) {
						if (0 === e.name.length) throw new Error(
							"Symbol in rule has 0 length...!?");
						if (D[e.name]) {
							if (e.name !== t.name) return []
						} else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2)) a[
							0].placeholders[e.name] = t;
						else if ("v" === e.name[0]) {
							if (z(t)) return [];
							a[0].placeholders[e.name] = t
						} else {
							if ("c" !== e.name[0]) throw new Error(
								"Invalid symbol in rule: " + e.name);
							if (!(t instanceof h)) return [];
							a[0].placeholders[e.name] = t
						}
					} else {
						if (!(e instanceof h)) return [];
						if (!i(e.value, t.value)) return []
					}
					return a
				}

				function V(e, t) {
					if (e instanceof h && t instanceof h) {
						if (!i(e.value, t.value)) return !1
					} else if (e instanceof b && t instanceof b) {
						if (e.name !== t.name) return !1
					} else {
						if (!(e instanceof g && t instanceof g || e instanceof d &&
								t instanceof d)) return !1;
						if (e instanceof g) {
							if (e.op !== t.op || e.fn !== t.fn) return !1
						} else if (e instanceof d && e.name !== t.name) return !1;
						if (e.args.length !== t.args.length) return !1;
						for (var r = 0; r < e.args.length; r++)
							if (!V(e.args[r], t.args[r])) return !1
					}
					return !0
				}
				return q
			})),
			Pc = Qe("simplifyCore", ["equal", "isZero", "add", "subtract", "multiply", "divide",
				"pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode",
				"ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"
			], (function(e) {
				var t = e.equal,
					r = e.isZero,
					n = e.add,
					i = e.subtract,
					a = e.multiply,
					o = e.divide,
					s = e.pow,
					u = e.AccessorNode,
					c = e.ArrayNode,
					f = e.ConstantNode,
					l = e.FunctionNode,
					p = e.IndexNode,
					m = e.ObjectNode,
					h = e.OperatorNode,
					d = (e.ParenthesisNode, e.SymbolNode),
					v = new f(0),
					y = new f(1),
					g = Rc({
						FunctionNode: l,
						OperatorNode: h,
						SymbolNode: d
					}),
					x = g.hasProperty,
					b = g.isCommutative;
				return function e(d, g) {
					var w = g ? g.context : void 0;
					if (x(d, "trivial", w)) {
						if (q(d) && 1 === d.args.length) return e(d.args[0], g);
						var N = !1,
							M = 0;
						if (d.forEach((function(t) {
								1 === ++M && (N = e(t, g))
							})), 1 === M) return N
					}
					if (P(d) && d.isUnary()) {
						var E = e(d.args[0], g);
						if ("-" === d.op) {
							if (P(E)) {
								if (E.isUnary() && "-" === E.op) return E.args[0];
								if (E.isBinary() && "subtract" === E.fn) return new h(
									"-", "subtract", [E.args[1], E.args[0]])
							}
							return new h(d.op, d.fn, [E])
						}
					} else if (P(d) && d.isBinary()) {
						var S = e(d.args[0], g),
							A = e(d.args[1], g);
						if ("+" === d.op) {
							if (z(S)) {
								if (r(S.value)) return A;
								if (z(A)) return new f(n(S.value, A.value))
							}
							return z(A) && r(A.value) ? S : P(A) && A.isUnary() &&
								"-" === A.op ? new h("-", "subtract", [S, A.args[0]]) :
								new h(d.op, d.fn, A ? [S, A] : [S])
						}
						if ("-" === d.op) {
							if (z(S) && A) {
								if (z(A)) return new f(i(S.value, A.value));
								if (r(S.value)) return new h("-", "unaryMinus", [A])
							}
							if ("subtract" === d.fn) return z(A) && r(A.value) ? S : P(
								A) && A.isUnary() && "-" === A.op ? e(new h("+",
								"add", [S, A.args[0]]), g) : new h(d.op, d.fn, [
								S, A
							])
						} else {
							if ("*" === d.op) {
								if (z(S)) {
									if (r(S.value)) return v;
									if (t(S.value, 1)) return A;
									if (z(A)) return new f(a(S.value, A.value))
								}
								if (z(A)) {
									if (r(A.value)) return v;
									if (t(A.value, 1)) return S;
									if (P(S) && S.isBinary() && S.op === d.op && b(d,
										w)) {
										var O = S.args[0];
										if (z(O)) {
											var T = new f(a(O.value, A.value));
											return new h(d.op, d.fn, [T, S.args[1]], d
												.implicit)
										}
									}
									return b(d, w) ? new h(d.op, d.fn, [A, S], d
										.implicit) : new h(d.op, d.fn, [S, A], d
										.implicit)
								}
								return new h(d.op, d.fn, [S, A], d.implicit)
							}
							if ("/" === d.op) {
								if (z(S)) {
									if (r(S.value)) return v;
									if (z(A) && (t(A.value, 1) || t(A.value, 2) || t(A
											.value, 4))) return new f(o(S.value, A
										.value))
								}
								return new h(d.op, d.fn, [S, A])
							}
							if ("^" === d.op) {
								if (z(A)) {
									if (r(A.value)) return y;
									if (t(A.value, 1)) return S;
									if (z(S)) return new f(s(S.value, A.value));
									if (P(S) && S.isBinary() && "^" === S.op) {
										var I = S.args[1];
										if (z(I)) return new h(d.op, d.fn, [S.args[0],
											new f(a(I.value, A.value))
										])
									}
								}
								return new h(d.op, d.fn, [S, A])
							}
						}
					} else {
						if (q(d)) return new l(e(d.fn), d.args.map((function(t) {
							return e(t, g)
						})));
						if (_(d)) return new c(d.items.map((function(t) {
							return e(t, g)
						})));
						if (C(d)) return new u(e(d.object, g), e(d.index, g));
						if (B(d)) return new p(d.dimensions.map((function(t) {
							return e(t, g)
						})));
						if (j(d)) {
							var k = {};
							for (var R in d.properties) k[R] = e(d.properties[R], g);
							return new m(k)
						}
					}
					return d
				}
			})),
			Fc = Qe("resolve", ["parse", "ConstantNode", "FunctionNode", "OperatorNode",
				"ParenthesisNode"
			], (function(e) {
				var t = e.parse,
					r = e.ConstantNode,
					n = e.FunctionNode,
					i = e.OperatorNode,
					a = e.ParenthesisNode;
				return function e(o, s) {
					var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[
						2] : new Set;
					if (!s) return o;
					if (yt(s) || (s = vt(s)), L(o)) {
						if (u.has(o.name)) {
							var c = Array.from(u).join(", ");
							throw new ReferenceError(
								"recursive loop of variable definitions among {"
								.concat(c, "}"))
						}
						var f = s.get(o.name);
						if (D(f)) {
							var l = new Set(u);
							return l.add(o.name), e(f, s, l)
						}
						return "number" == typeof f ? t(String(f)) : void 0 !== f ?
							new r(f) : o
					}
					if (P(o)) {
						var p = o.args.map((function(t) {
							return e(t, s, u)
						}));
						return new i(o.op, o.fn, p, o.implicit)
					}
					if (F(o)) return new a(e(o.content, s, u));
					if (q(o)) {
						var m = o.args.map((function(t) {
							return e(t, s, u)
						}));
						return new n(o.name, m)
					}
					return o.map((function(t) {
						return e(t, s, u)
					}))
				}
			})),
			Uc = Qe("derivative", ["typed", "config", "parse", "simplify", "equal", "isZero",
				"numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode",
				"SymbolNode"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.parse,
					i = e.simplify,
					a = e.equal,
					o = e.isZero,
					s = e.numeric,
					u = e.ConstantNode,
					c = e.FunctionNode,
					f = e.OperatorNode,
					l = e.ParenthesisNode,
					p = e.SymbolNode,
					m = t("derivative", {
						"Node, SymbolNode, Object": function(e, t, r) {
							var n = {};
							d(n, e, t.name);
							var a = v(e, n);
							return r.simplify ? i(a) : a
						},
						"Node, SymbolNode": function(e, t) {
							return this(e, t, {
								simplify: !0
							})
						},
						"string, SymbolNode": function(e, t) {
							return this(n(e), t)
						},
						"string, SymbolNode, Object": function(e, t, r) {
							return this(n(e), t, r)
						},
						"string, string": function(e, t) {
							return this(n(e), n(t))
						},
						"string, string, Object": function(e, t, r) {
							return this(n(e), n(t), r)
						},
						"Node, string": function(e, t) {
							return this(e, n(t))
						},
						"Node, string, Object": function(e, t, r) {
							return this(e, n(t), r)
						}
					});
				m._simplify = !0, m.toTex = function(e) {
					return h.apply(null, e.args)
				};
				var h = t("_derivTex", {
						"Node, SymbolNode": function(e, t) {
							return z(e) && "string" === H(e.value) ? h(n(e.value)
								.toString(), t.toString(), 1) : h(e.toString(),
								t.toString(), 1)
						},
						"Node, ConstantNode": function(e, t) {
							if ("string" === H(t.value)) return h(e, n(t.value));
							throw new Error(
								"The second parameter to 'derivative' is a non-string constant"
								)
						},
						"Node, SymbolNode, ConstantNode": function(e, t, r) {
							return h(e.toString(), t.name, r.value)
						},
						"string, string, number": function(e, t, r) {
							return (1 === r ? "{d\\over d" + t + "}" : "{d^{" + r +
									"}\\over d" + t + "^{" + r + "}}") + "\\left["
								.concat(e, "\\right]")
						}
					}),
					d = t("constTag", {
						"Object, ConstantNode, string": function(e, t) {
							return e[t] = !0, !0
						},
						"Object, SymbolNode, string": function(e, t, r) {
							return t.name !== r && (e[t] = !0, !0)
						},
						"Object, ParenthesisNode, string": function(e, t, r) {
							return d(e, t.content, r)
						},
						"Object, FunctionAssignmentNode, string": function(e, t, r) {
							return -1 === t.params.indexOf(r) ? (e[t] = !0, !0) : d(
								e, t.expr, r)
						},
						"Object, FunctionNode | OperatorNode, string": function(e, t,
						r) {
							if (t.args.length > 0) {
								for (var n = d(e, t.args[0], r), i = 1; i < t.args
									.length; ++i) n = d(e, t.args[i], r) && n;
								if (n) return e[t] = !0, !0
							}
							return !1
						}
					}),
					v = t("_derivative", {
						"ConstantNode, Object": function(e) {
							return y(0)
						},
						"SymbolNode, Object": function(e, t) {
							return void 0 !== t[e] ? y(0) : y(1)
						},
						"ParenthesisNode, Object": function(e, t) {
							return new l(v(e.content, t))
						},
						"FunctionAssignmentNode, Object": function(e, t) {
							return void 0 !== t[e] ? y(0) : v(e.expr, t)
						},
						"FunctionNode, Object": function(e, t) {
							if (1 !== e.args.length && function(e) {
									if (("log" === e.name || "nthRoot" === e.name ||
											"pow" === e.name) && 2 === e.args
										.length) return;
									for (var t = 0; t < e.args.length; ++t) e.args[
										t] = y(0);
									throw e.compile().evaluate(), new Error(
										"Expected TypeError, but none found")
								}(e), void 0 !== t[e]) return y(0);
							var r, n, i, a, o = e.args[0],
								s = !1,
								u = !1;
							switch (e.name) {
								case "cbrt":
									s = !0, n = new f("*", "multiply", [y(3), new f(
										"^", "pow", [o, new f("/",
											"divide", [y(2), y(3)])])]);
									break;
								case "sqrt":
								case "nthRoot":
									if (1 === e.args.length) s = !0, n = new f("*",
										"multiply", [y(2), new c("sqrt", [o])]);
									else if (2 === e.args.length) return t[r =
										new f("/", "divide", [y(1), e.args[
											1]])] = t[e.args[1]], v(new f(
										"^", "pow", [o, r]), t);
									break;
								case "log10":
									r = y(10);
								case "log":
									if (r || 1 !== e.args.length) {
										if (1 === e.args.length && r || 2 === e.args
											.length && void 0 !== t[e.args[1]]) n =
											new f("*", "multiply", [o.clone(),
												new c("log", [r || e.args[1]])
											]), s = !0;
										else if (2 === e.args.length) return v(
											new f("/", "divide", [new c(
												"log", [o]), new c(
												"log", [e.args[1]])]), t)
									} else n = o.clone(), s = !0;
									break;
								case "pow":
									return t[r] = t[e.args[1]], v(new f("^", "pow",
										[o, e.args[1]]), t);
								case "exp":
									n = new c("exp", [o.clone()]);
									break;
								case "sin":
									n = new c("cos", [o.clone()]);
									break;
								case "cos":
									n = new f("-", "unaryMinus", [new c("sin", [o
										.clone()
									])]);
									break;
								case "tan":
									n = new f("^", "pow", [new c("sec", [o
									.clone()]), y(2)
									]);
									break;
								case "sec":
									n = new f("*", "multiply", [e, new c("tan", [o
										.clone()
									])]);
									break;
								case "csc":
									u = !0, n = new f("*", "multiply", [e, new c(
										"cot", [o.clone()])]);
									break;
								case "cot":
									u = !0, n = new f("^", "pow", [new c("csc", [o
										.clone()
									]), y(2)]);
									break;
								case "asin":
									s = !0, n = new c("sqrt", [new f("-",
										"subtract", [y(1), new f("^",
											"pow", [o.clone(), y(2)]
											)])]);
									break;
								case "acos":
									s = !0, u = !0, n = new c("sqrt", [new f("-",
										"subtract", [y(1), new f("^",
											"pow", [o.clone(), y(2)]
											)])]);
									break;
								case "atan":
									s = !0, n = new f("+", "add", [new f("^", "pow",
										[o.clone(), y(2)]), y(1)]);
									break;
								case "asec":
									s = !0, n = new f("*", "multiply", [new c("abs",
										[o.clone()]), new c("sqrt", [
										new f("-", "subtract", [
											new f("^", "pow", [o
												.clone(), y(
													2)
											]), y(1)
										])
									])]);
									break;
								case "acsc":
									s = !0, u = !0, n = new f("*", "multiply", [
										new c("abs", [o.clone()]), new c(
											"sqrt", [new f("-", "subtract",
												[new f("^", "pow", [o
													.clone(), y(
														2)
												]), y(1)])])
									]);
									break;
								case "acot":
									s = !0, u = !0, n = new f("+", "add", [new f(
											"^", "pow", [o.clone(), y(2)]),
										y(1)
									]);
									break;
								case "sinh":
									n = new c("cosh", [o.clone()]);
									break;
								case "cosh":
									n = new c("sinh", [o.clone()]);
									break;
								case "tanh":
									n = new f("^", "pow", [new c("sech", [o
									.clone()]), y(2)]);
									break;
								case "sech":
									u = !0, n = new f("*", "multiply", [e, new c(
										"tanh", [o.clone()])]);
									break;
								case "csch":
									u = !0, n = new f("*", "multiply", [e, new c(
										"coth", [o.clone()])]);
									break;
								case "coth":
									u = !0, n = new f("^", "pow", [new c("csch", [o
										.clone()
									]), y(2)]);
									break;
								case "asinh":
									s = !0, n = new c("sqrt", [new f("+", "add", [
										new f("^", "pow", [o
										.clone(), y(2)
										]), y(1)
									])]);
									break;
								case "acosh":
									s = !0, n = new c("sqrt", [new f("-",
										"subtract", [new f("^", "pow", [
											o.clone(), y(2)
										]), y(1)])]);
									break;
								case "atanh":
									s = !0, n = new f("-", "subtract", [y(1), new f(
										"^", "pow", [o.clone(), y(2)])]);
									break;
								case "asech":
									s = !0, u = !0, n = new f("*", "multiply", [o
										.clone(), new c("sqrt", [new f("-",
											"subtract", [y(1),
												new f("^", "pow", [o
													.clone(), y(
														2)
												])
											])])
									]);
									break;
								case "acsch":
									s = !0, u = !0, n = new f("*", "multiply", [
										new c("abs", [o.clone()]), new c(
											"sqrt", [new f("+", "add", [
												new f("^", "pow", [o
													.clone(), y(
														2)
												]), y(1)
											])])
									]);
									break;
								case "acoth":
									s = !0, u = !0, n = new f("-", "subtract", [y(
										1), new f("^", "pow", [o.clone(), y(
											2)])
									]);
									break;
								case "abs":
									n = new f("/", "divide", [new c(new p("abs"), [o
										.clone()
									]), o.clone()]);
									break;
								case "gamma":
								default:
									throw new Error('Function "' + e.name +
										'" is not supported by derivative, or a wrong number of arguments is passed'
										)
							}
							s ? (i = "/", a = "divide") : (i = "*", a = "multiply");
							var l = v(o, t);
							return u && (l = new f("-", "unaryMinus", [l])), new f(
								i, a, [l, n])
						},
						"OperatorNode, Object": function(e, t) {
							if (void 0 !== t[e]) return y(0);
							if ("+" === e.op) return new f(e.op, e.fn, e.args.map((
								function(e) {
									return v(e, t)
								})));
							if ("-" === e.op) {
								if (e.isUnary()) return new f(e.op, e.fn, [v(e.args[
									0], t)]);
								if (e.isBinary()) return new f(e.op, e.fn, [v(e
									.args[0], t), v(e.args[1], t)])
							}
							if ("*" === e.op) {
								var r = e.args.filter((function(e) {
									return void 0 !== t[e]
								}));
								if (r.length > 0) {
									var n = e.args.filter((function(e) {
											return void 0 === t[e]
										})),
										i = 1 === n.length ? n[0] : new f("*",
											"multiply", n),
										s = r.concat(v(i, t));
									return new f("*", "multiply", s)
								}
								return new f("+", "add", e.args.map((function(r) {
									return new f("*", "multiply", e
										.args.map((function(e) {
											return e ===
												r ? v(e,
													t) :
												e
												.clone()
										})))
								})))
							}
							if ("/" === e.op && e.isBinary()) {
								var u = e.args[0],
									l = e.args[1];
								return void 0 !== t[l] ? new f("/", "divide", [v(u,
									t), l]) : void 0 !== t[u] ? new f("*",
									"multiply", [new f("-", "unaryMinus", [u]),
										new f("/", "divide", [v(l, t), new f(
											"^", "pow", [l.clone(), y(
												2)])])
									]) : new f("/", "divide", [new f("-",
									"subtract", [new f("*", "multiply",
											[v(u, t), l.clone()]),
										new f("*", "multiply", [u
										.clone(), v(l, t)])
									]), new f("^", "pow", [l.clone(), y(
									2)])])
							}
							if ("^" === e.op && e.isBinary()) {
								var p = e.args[0],
									m = e.args[1];
								if (void 0 !== t[p]) return z(p) && (o(p.value) ||
									a(p.value, 1)) ? y(0) : new f("*",
									"multiply", [e, new f("*", "multiply", [
										new c("log", [p.clone()]),
										v(m.clone(), t)
									])]);
								if (void 0 !== t[m]) {
									if (z(m)) {
										if (o(m.value)) return y(0);
										if (a(m.value, 1)) return v(p, t)
									}
									var h = new f("^", "pow", [p.clone(), new f("-",
										"subtract", [m, y(1)])]);
									return new f("*", "multiply", [m.clone(), new f(
										"*", "multiply", [v(p, t), h])])
								}
								return new f("*", "multiply", [new f("^", "pow", [p
									.clone(), m.clone()
								]), new f("+", "add", [new f("*",
									"multiply", [v(p, t), new f(
										"/", "divide", [m
											.clone(), p
											.clone()
										])]), new f("*",
									"multiply", [v(m, t), new c(
										"log", [p.clone()])])])])
							}
							throw new Error('Operator "' + e.op +
								'" is not supported by derivative, or a wrong number of arguments is passed'
								)
						}
					});

				function y(e, t) {
					return new u(s(e, t || r.number))
				}
				return m
			})),
			Lc = Qe("rationalize", ["config", "typed", "equal", "isZero", "add", "subtract",
				"multiply", "divide", "pow", "parse", "simplifyCore", "simplify", "?bignumber",
				"?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode",
				"ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode",
				"SymbolNode", "ParenthesisNode"
			], (function(e) {
				var t = e.config,
					r = e.typed,
					n = (e.equal, e.isZero, e.add, e.subtract, e.multiply, e.divide, e.pow,
						e.parse),
					i = e.simplifyCore,
					a = e.simplify,
					o = e.fraction,
					s = e.bignumber,
					u = e.mathWithTransform,
					c = e.matrix,
					f = e.AccessorNode,
					l = e.ArrayNode,
					p = e.ConstantNode,
					m = e.FunctionNode,
					h = e.IndexNode,
					d = e.ObjectNode,
					v = e.OperatorNode,
					y = e.SymbolNode,
					g = (e.ParenthesisNode, Dc({
						typed: r,
						config: t,
						mathWithTransform: u,
						matrix: c,
						fraction: o,
						bignumber: s,
						AccessorNode: f,
						ArrayNode: l,
						ConstantNode: p,
						FunctionNode: m,
						IndexNode: h,
						ObjectNode: d,
						OperatorNode: v,
						SymbolNode: y
					}));
				return r("rationalize", {
					string: function(e) {
						return this(n(e), {}, !1)
					},
					"string, boolean": function(e, t) {
						return this(n(e), {}, t)
					},
					"string, Object": function(e, t) {
						return this(n(e), t, !1)
					},
					"string, Object, boolean": function(e, t, r) {
						return this(n(e), t, r)
					},
					Node: function(e) {
						return this(e, {}, !1)
					},
					"Node, boolean": function(e, t) {
						return this(e, {}, t)
					},
					"Node, Object": function(e, t) {
						return this(e, t, !1)
					},
					"Node, Object, boolean": function(e, t, r) {
						var n = function() {
								var e = [i, {
										l: "n+n",
										r: "2*n"
									}, {
										l: "n+-n",
										r: "0"
									}, g, {
										l: "n*(n1^-1)",
										r: "n/n1"
									}, {
										l: "n*n1^-n2",
										r: "n/n1^n2"
									}, {
										l: "n1^-1",
										r: "1/n1"
									}, {
										l: "n*(n1/n2)",
										r: "(n*n1)/n2"
									}, {
										l: "1*n",
										r: "n"
									}],
									t = [{
										l: "(-n1)/(-n2)",
										r: "n1/n2"
									}, {
										l: "(-n1)*(-n2)",
										r: "n1*n2"
									}, {
										l: "n1--n2",
										r: "n1+n2"
									}, {
										l: "n1-n2",
										r: "n1+(-n2)"
									}, {
										l: "(n1+n2)*n3",
										r: "(n1*n3 + n2*n3)"
									}, {
										l: "n1*(n2+n3)",
										r: "(n1*n2+n1*n3)"
									}, {
										l: "c1*n + c2*n",
										r: "(c1+c2)*n"
									}, {
										l: "c1*n + n",
										r: "(c1+1)*n"
									}, {
										l: "c1*n - c2*n",
										r: "(c1-c2)*n"
									}, {
										l: "c1*n - n",
										r: "(c1-1)*n"
									}, {
										l: "v/c",
										r: "(1/c)*v"
									}, {
										l: "v/-c",
										r: "-(1/c)*v"
									}, {
										l: "-v*-c",
										r: "c*v"
									}, {
										l: "-v*c",
										r: "-c*v"
									}, {
										l: "v*-c",
										r: "-c*v"
									}, {
										l: "v*c",
										r: "c*v"
									}, {
										l: "-(-n1*n2)",
										r: "(n1*n2)"
									}, {
										l: "-(n1*n2)",
										r: "(-n1*n2)"
									}, {
										l: "-(-n1+n2)",
										r: "(n1-n2)"
									}, {
										l: "-(n1+n2)",
										r: "(-n1-n2)"
									}, {
										l: "(n1^n2)^n3",
										r: "(n1^(n2*n3))"
									}, {
										l: "-(-n1/n2)",
										r: "(n1/n2)"
									}, {
										l: "-(n1/n2)",
										r: "(-n1/n2)"
									}],
									r = [{
										l: "(n1/(n2/n3))",
										r: "((n1*n3)/n2)"
									}, {
										l: "(n1/n2/n3)",
										r: "(n1/(n2*n3))"
									}],
									n = {};
								return n.firstRules = e.concat(t, r), n
									.distrDivRules = [{
										l: "(n1/n2 + n3/n4)",
										r: "((n1*n4 + n3*n2)/(n2*n4))"
									}, {
										l: "(n1/n2 + n3)",
										r: "((n1 + n3*n2)/n2)"
									}, {
										l: "(n1 + n2/n3)",
										r: "((n1*n3 + n2)/n3)"
									}], n.sucDivRules = r, n.firstRulesAgain = e
									.concat(t), n.finalRules = [i, {
										l: "n*-n",
										r: "-n^2"
									}, {
										l: "n*n",
										r: "n^2"
									}, g, {
										l: "n*-n^n1",
										r: "-n^(n1+1)"
									}, {
										l: "n*n^n1",
										r: "n^(n1+1)"
									}, {
										l: "n^n1*-n^n2",
										r: "-n^(n1+n2)"
									}, {
										l: "n^n1*n^n2",
										r: "n^(n1+n2)"
									}, {
										l: "n^n1*-n",
										r: "-n^(n1+1)"
									}, {
										l: "n^n1*n",
										r: "n^(n1+1)"
									}, {
										l: "n^n1/-n",
										r: "-n^(n1-1)"
									}, {
										l: "n^n1/n",
										r: "n^(n1-1)"
									}, {
										l: "n/-n^n1",
										r: "-n^(1-n1)"
									}, {
										l: "n/n^n1",
										r: "n^(1-n1)"
									}, {
										l: "n^n1/-n^n2",
										r: "n^(n1-n2)"
									}, {
										l: "n^n1/n^n2",
										r: "n^(n1-n2)"
									}, {
										l: "n1+(-n2*n3)",
										r: "n1-n2*n3"
									}, {
										l: "v*(-c)",
										r: "-c*v"
									}, {
										l: "n1+-n2",
										r: "n1-n2"
									}, {
										l: "v*c",
										r: "c*v"
									}, {
										l: "(n1^n2)^n3",
										r: "(n1^(n2*n3))"
									}], n
							}(),
							o = function(e, t, r, n) {
								var i = [],
									o = a(e, n, t, {
										exactFractions: !1
									}),
									s = "+-*" + ((r = !!r) ? "/" : "");
								! function e(t) {
									var r = t.type;
									if ("FunctionNode" === r) throw new Error(
										"There is an unsolved function call"
										);
									if ("OperatorNode" === r)
										if ("^" === t.op) {
											if ("ConstantNode" !== t.args[1]
												.type || !Z(parseFloat(t.args[1]
													.value))) throw new Error(
												"There is a non-integer exponent"
												);
											e(t.args[0])
										} else {
											if (-1 === s.indexOf(t.op))
											throw new Error("Operator " + t
													.op +
													" invalid in polynomial expression"
													);
											for (var n = 0; n < t.args
												.length; n++) e(t.args[n])
										}
									else if ("SymbolNode" === r) {
										var a = t.name; - 1 === i.indexOf(a) &&
											i.push(a)
									} else if ("ParenthesisNode" === r) e(t
										.content);
									else if ("ConstantNode" !== r)
									throw new Error("type " + r +
											" is not allowed in polynomial expression"
											)
								}(o);
								var u = {};
								return u.expression = o, u.variables = i, u
							}(e, t, !0, n.firstRules),
							s = o.variables.length,
							u = {
								exactFractions: !1
							},
							c = {
								exactFractions: !0
							};
						if (e = o.expression, s >= 1) {
							var f, l;
							e = function e(t, r, n) {
								var i = t.type,
									a = arguments.length > 1;
								if ("OperatorNode" === i && t.isBinary()) {
									var o, s = !1;
									if ("^" === t.op && (
											"ParenthesisNode" !== t.args[0]
											.type && "OperatorNode" !== t
											.args[0].type ||
											"ConstantNode" !== t.args[1]
											.type || (o = parseFloat(t.args[
													1].value), s = o >= 2 &&
												Z(o))), s) {
										if (o > 2) {
											var u = t.args[0],
												c = new v("^", "pow", [t
													.args[0]
												.cloneDeep(), new p(o -
														1)
												]);
											t = new v("*", "multiply", [u,
												c])
										} else t = new v("*", "multiply", [t
											.args[0], t.args[0]
											.cloneDeep()
										]);
										a && ("content" === n ? r.content =
											t : r.args[n] = t)
									}
								}
								if ("ParenthesisNode" === i) e(t.content, t,
									"content");
								else if ("ConstantNode" !== i &&
									"SymbolNode" !== i)
									for (var f = 0; f < t.args.length; f++)
										e(t.args[f], t, f);
								if (!a) return t
							}(e);
							var m, h = !0,
								d = !1;
							for (e = a(e, n.firstRules, {}, u); l = h ? n
								.distrDivRules : n.sucDivRules, h = !h, (m = (
									e = a(e, l, {}, c)).toString()) !== f;)
								d = !0, f = m;
							d && (e = a(e, n.firstRulesAgain, {}, u)), e = a(e,
								n.finalRules, {}, u)
						}
						var y = [],
							b = {};
						return "OperatorNode" === e.type && e.isBinary() &&
							"/" === e.op ? (1 === s && (e.args[0] = x(e.args[0],
								y), e.args[1] = x(e.args[1])), r && (b
								.numerator = e.args[0], b.denominator = e
								.args[1])) : (1 === s && (e = x(e, y)), r && (b
								.numerator = e, b.denominator = null)), r ? (b
								.coefficients = y, b.variables = o.variables, b
								.expression = e, b) : e
					}
				});

				function x(e, t) {
					void 0 === t && (t = []), t[0] = 0;
					var r = {
							cte: 1,
							oper: "+",
							fire: ""
						},
						n = 0,
						i = "";
					! function e(r, a, o) {
						var s = r.type;
						if ("FunctionNode" === s) throw new Error(
							"There is an unsolved function call");
						if ("OperatorNode" === s) {
							if (-1 === "+-*^".indexOf(r.op)) throw new Error("Operator " + r
								.op + " invalid");
							if (null !== a) {
								if (("unaryMinus" === r.fn || "pow" === r.fn) && "add" !== a
									.fn && "subtract" !== a.fn && "multiply" !== a.fn)
								throw new Error("Invalid " + r.op + " placing");
								if (("subtract" === r.fn || "add" === r.fn || "multiply" ===
										r.fn) && "add" !== a.fn && "subtract" !== a.fn)
									throw new Error("Invalid " + r.op + " placing");
								if (("subtract" === r.fn || "add" === r.fn ||
										"unaryMinus" === r.fn) && 0 !== o.noFil)
								throw new Error("Invalid " + r.op + " placing")
							}
							"^" !== r.op && "*" !== r.op || (o.fire = r.op);
							for (var u = 0; u < r.args.length; u++) "unaryMinus" === r.fn &&
								(o.oper = "-"), "+" !== r.op && "subtract" !== r.fn || (o
									.fire = "", o.cte = 1, o.oper = 0 === u ? "+" : r.op), o
								.noFil = u, e(r.args[u], r, o)
						} else if ("SymbolNode" === s) {
							if (r.name !== i && "" !== i) throw new Error(
								"There is more than one variable");
							if (i = r.name, null === a) return void(t[1] = 1);
							if ("^" === a.op && 0 !== o.noFil) throw new Error(
								"In power the variable should be the first parameter"
								);
							if ("*" === a.op && 1 !== o.noFil) throw new Error(
								"In multiply the variable should be the second parameter"
								);
							"" !== o.fire && "*" !== o.fire || (n < 1 && (t[1] = 0), t[1] +=
								o.cte * ("+" === o.oper ? 1 : -1), n = Math.max(1, n))
						} else {
							if ("ConstantNode" !== s) throw new Error("Type " + s +
								" is not allowed");
							var c = parseFloat(r.value);
							if (null === a) return void(t[0] = c);
							if ("^" === a.op) {
								if (1 !== o.noFil) throw new Error(
									"Constant cannot be powered");
								if (!Z(c) || c <= 0) throw new Error(
									"Non-integer exponent is not allowed");
								for (var f = n + 1; f < c; f++) t[f] = 0;
								return c > n && (t[c] = 0), t[c] += o.cte * ("+" === o
									.oper ? 1 : -1), void(n = Math.max(c, n))
							}
							o.cte = c, "" === o.fire && (t[0] += o.cte * ("+" === o.oper ?
								1 : -1))
						}
					}(e, null, r);
					for (var a, o = !0, s = n = t.length - 1; s >= 0; s--)
						if (0 !== t[s]) {
							var u = new p(o ? t[s] : Math.abs(t[s])),
								c = t[s] < 0 ? "-" : "+";
							if (s > 0) {
								var f = new y(i);
								if (s > 1) {
									var l = new p(s);
									f = new v("^", "pow", [f, l])
								}
								u = -1 === t[s] && o ? new v("-", "unaryMinus", [f]) : 1 ===
									Math.abs(t[s]) ? f : new v("*", "multiply", [u, f])
							}
							a = o ? u : "+" === c ? new v("+", "add", [a, u]) : new v("-",
								"subtract", [a, u]), o = !1
						} return o ? new p(0) : a
				}
			})),
			$c = Qe("reviver", ["classes"], (function(e) {
				var t = e.classes;
				return function(e, r) {
					var n = t[r && r.mathjs];
					return n && "function" == typeof n.fromJSON ? n.fromJSON(r) : r
				}
			})),
			Hc = Qe("replacer", [], (function() {
				return function(e, t) {
					return "number" != typeof t || isFinite(t) && !isNaN(t) ? t : {
						mathjs: "number",
						value: String(t)
					}
				}
			})),
			Gc = Math.PI,
			Vc = 2 * Math.PI,
			Zc = Math.E,
			Wc = Qe("true", [], (function() {
				return !0
			})),
			Yc = Qe("false", [], (function() {
				return !1
			})),
			Jc = Qe("null", [], (function() {
				return null
			})),
			Xc = hf("Infinity", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(1 / 0) : 1 / 0
			})),
			Qc = hf("NaN", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(NaN) : NaN
			})),
			Kc = hf("pi", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? go(r) : Gc
			})),
			ef = hf("tau", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? xo(r) : Vc
			})),
			tf = hf("e", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? vo(r) : Zc
			})),
			rf = hf("phi", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? yo(r) : 1.618033988749895
			})),
			nf = hf("LN2", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(2).ln() : Math.LN2
			})),
			af = hf("LN10", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(10).ln() : Math.LN10
			})),
			of = hf("LOG2E", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(1).div(new r(2).ln()) : Math.LOG2E
			})),
			sf = hf("LOG10E", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(1).div(new r(10).ln()) : Math.LOG10E
			})),
			uf = hf("SQRT1_2", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r("0.5").sqrt() : Math.SQRT1_2
			})),
			cf = hf("SQRT2", ["config", "?BigNumber"], (function(e) {
				var t = e.config,
					r = e.BigNumber;
				return "BigNumber" === t.number ? new r(2).sqrt() : Math.SQRT2
			})),
			ff = hf("i", ["Complex"], (function(e) {
				return e.Complex.I
			})),
			lf = Qe("PI", ["pi"], (function(e) {
				return e.pi
			})),
			pf = Qe("E", ["e"], (function(e) {
				return e.e
			})),
			mf = Qe("version", [], (function() {
				return "10.2.0"
			}));

		function hf(e, t, r) {
			return Qe(e, t, r, {
				recreateOnConfigChange: !0
			})
		}
		var df = ll("speedOfLight", "299792458", "m s^-1"),
			vf = ll("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"),
			yf = ll("planckConstant", "6.62607015e-34", "J s"),
			gf = ll("reducedPlanckConstant", "1.0545718176461565e-34", "J s"),
			xf = ll("magneticConstant", "1.25663706212e-6", "N A^-2"),
			bf = ll("electricConstant", "8.8541878128e-12", "F m^-1"),
			wf = ll("vacuumImpedance", "376.730313667", "ohm"),
			Nf = ll("coulomb", "8.987551792261171e9", "N m^2 C^-2"),
			Mf = ll("elementaryCharge", "1.602176634e-19", "C"),
			Ef = ll("bohrMagneton", "9.2740100783e-24", "J T^-1"),
			Sf = ll("conductanceQuantum", "7.748091729863649e-5", "S"),
			Af = ll("inverseConductanceQuantum", "12906.403729652257", "ohm"),
			Of = ll("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"),
			Cf = ll("nuclearMagneton", "5.0507837461e-27", "J T^-1"),
			_f = ll("klitzing", "25812.807459304513", "ohm"),
			Tf = ll("bohrRadius", "5.29177210903e-11", "m"),
			If = ll("classicalElectronRadius", "2.8179403262e-15", "m"),
			kf = ll("electronMass", "9.1093837015e-31", "kg"),
			zf = ll("fermiCoupling", "1.1663787e-5", "GeV^-2"),
			Rf = pl("fineStructure", .0072973525693),
			qf = ll("hartreeEnergy", "4.3597447222071e-18", "J"),
			Bf = ll("protonMass", "1.67262192369e-27", "kg"),
			Df = ll("deuteronMass", "3.3435830926e-27", "kg"),
			jf = ll("neutronMass", "1.6749271613e-27", "kg"),
			Pf = ll("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"),
			Ff = ll("rydberg", "10973731.568160", "m^-1"),
			Uf = ll("thomsonCrossSection", "6.6524587321e-29", "m^2"),
			Lf = pl("weakMixingAngle", .2229),
			$f = pl("efimovFactor", 22.7),
			Hf = ll("atomicMass", "1.66053906660e-27", "kg"),
			Gf = ll("avogadro", "6.02214076e23", "mol^-1"),
			Vf = ll("boltzmann", "1.380649e-23", "J K^-1"),
			Zf = ll("faraday", "96485.33212331001", "C mol^-1"),
			Wf = ll("firstRadiation", "3.7417718521927573e-16", "W m^2"),
			Yf = ll("loschmidt", "2.686780111798444e25", "m^-3"),
			Jf = ll("gasConstant", "8.31446261815324", "J K^-1 mol^-1"),
			Xf = ll("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"),
			Qf = ll("molarVolume", "0.022413969545014137", "m^3 mol^-1"),
			Kf = pl("sackurTetrode", -1.16487052358),
			el = ll("secondRadiation", "0.014387768775039337", "m K"),
			tl = ll("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"),
			rl = ll("wienDisplacement", "2.897771955e-3", "m K"),
			nl = ll("molarMass", "0.99999999965e-3", "kg mol^-1"),
			il = ll("molarMassC12", "11.9999999958e-3", "kg mol^-1"),
			al = ll("gravity", "9.80665", "m s^-2"),
			ol = ll("planckLength", "1.616255e-35", "m"),
			sl = ll("planckMass", "2.176435e-8", "kg"),
			ul = ll("planckTime", "5.391245e-44", "s"),
			cl = ll("planckCharge", "1.87554603778e-18", "C"),
			fl = ll("planckTemperature", "1.416785e+32", "K");

		function ll(e, t, r) {
			return Qe(e, ["config", "Unit", "BigNumber"], (function(e) {
				var n = e.config,
					i = e.Unit,
					a = e.BigNumber,
					o = new i("BigNumber" === n.number ? new a(t) : parseFloat(t), r);
				return o.fixPrefix = !0, o
			}))
		}

		function pl(e, t) {
			return Qe(e, ["config", "BigNumber"], (function(e) {
				var r = e.config,
					n = e.BigNumber;
				return "BigNumber" === r.number ? new n(t) : t
			}))
		}
		var ml = Qe("apply", ["typed", "isInteger"], (function(e) {
				var t = e.typed,
					r = e.isInteger,
					n = Jr({
						typed: t,
						isInteger: r
					});
				return t("apply", {
					"...any": function(e) {
						var t = e[1];
						o(t) ? e[1] = t - 1 : s(t) && (e[1] = t.minus(1));
						try {
							return n.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			hl = Qe("column", ["typed", "Index", "matrix", "range"], (function(e) {
				var t = e.typed,
					r = e.Index,
					n = e.matrix,
					i = e.range,
					a = yi({
						typed: t,
						Index: r,
						matrix: n,
						range: i
					});
				return t("column", {
					"...any": function(e) {
						var t = e.length - 1,
							r = e[t];
						o(r) && (e[t] = r - 1);
						try {
							return a.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			});

		function dl(e, t, r) {
			var n = e.filter((function(e) {
				return L(e) && !(e.name in t) && !r.has(e.name)
			}))[0];
			if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"');
			var i = n.name,
				a = ou(r),
				o = e.compile();
			return function(e) {
				return a.set(i, e), o.evaluate(a)
			}
		}
		var vl = Qe("filter", ["typed"], (function(e) {
			var t = e.typed;

			function r(e, t, r) {
				var i, a;
				return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = L(e[1]) ||
					R(e[1]) ? e[1].compile().evaluate(r) : dl(e[1], t, r)), n(i, a)
			}
			r.rawArgs = !0;
			var n = t("filter", {
				"Array, function": yl,
				"Matrix, function": function(e, t) {
					return e.create(yl(e.toArray(), t))
				},
				"Array, RegExp": je,
				"Matrix, RegExp": function(e, t) {
					return e.create(je(e.toArray(), t))
				}
			});
			return r
		}), {
			isTransformFunction: !0
		});

		function yl(e, t) {
			var r = Mi(t);
			return De(e, (function(e, n, i) {
				return 1 === r ? t(e) : 2 === r ? t(e, [n + 1]) : t(e, [n + 1], i)
			}))
		}
		var gl = Qe("forEach", ["typed"], (function(e) {
				var t = e.typed;

				function r(e, t, r) {
					var i, a;
					return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = L(e[1]) ||
						R(e[1]) ? e[1].compile().evaluate(r) : dl(e[1], t, r)), n(i, a)
				}
				r.rawArgs = !0;
				var n = t("forEach", {
					"Array | Matrix, function": function(e, t) {
						var r = Mi(t);
						! function n(i, a) {
							Array.isArray(i) ? Be(i, (function(e, t) {
								n(e, a.concat(t + 1))
							})) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i,
								a, e)
						}(e.valueOf(), [])
					}
				});
				return r
			}), {
				isTransformFunction: !0
			}),
			xl = Qe("index", ["Index"], (function(e) {
				var t = e.Index;
				return function() {
					for (var e = [], r = 0, n = arguments.length; r < n; r++) {
						var i = arguments[r];
						if (y(i)) i.start--, i.end -= i.step > 0 ? 0 : 2;
						else if (i && !0 === i.isSet) i = i.map((function(e) {
							return e - 1
						}));
						else if (p(i) || m(i)) i = i.map((function(e) {
							return e - 1
						}));
						else if (o(i)) i--;
						else if (s(i)) i = i.toNumber() - 1;
						else if ("string" != typeof i) throw new TypeError(
							"Dimension must be an Array, Matrix, number, string, or Range"
							);
						e[r] = i
					}
					var a = new t;
					return t.apply(a, e), a
				}
			}), {
				isTransformFunction: !0
			}),
			bl = Qe("map", ["typed"], (function(e) {
				var t = e.typed;

				function r(e, t, r) {
					var i, a;
					return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = L(e[1]) ||
						R(e[1]) ? e[1].compile().evaluate(r) : dl(e[1], t, r)), n(i, a)
				}
				r.rawArgs = !0;
				var n = t("map", {
					"Array, function": function(e, t) {
						return wl(e, t, e)
					},
					"Matrix, function": function(e, t) {
						return e.create(wl(e.valueOf(), t, e))
					}
				});
				return r
			}), {
				isTransformFunction: !0
			});

		function wl(e, t, r) {
			var n = Mi(t);
			return function e(i, a) {
				return Array.isArray(i) ? qe(i, (function(t, r) {
					return e(t, a.concat(r + 1))
				})) : 1 === n ? t(i) : 2 === n ? t(i, a) : t(i, a, r)
			}(e, [])
		}

		function Nl(e) {
			if (2 === e.length && h(e[0])) {
				var t = (e = e.slice())[1];
				o(t) ? e[1] = t - 1 : s(t) && (e[1] = t.minus(1))
			}
			return e
		}
		var Ml = Qe("max", ["typed", "config", "numeric", "larger"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.numeric,
					i = e.larger,
					a = so({
						typed: t,
						config: r,
						numeric: n,
						larger: i
					});
				return t("max", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return a.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			El = Qe("mean", ["typed", "add", "divide"], (function(e) {
				var t = e.typed,
					r = e.add,
					n = e.divide,
					i = Qu({
						typed: t,
						add: r,
						divide: n
					});
				return t("mean", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return i.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Sl = Qe("min", ["typed", "config", "numeric", "smaller"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.numeric,
					i = e.smaller,
					a = uo({
						typed: t,
						config: r,
						numeric: n,
						smaller: i
					});
				return t("min", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return a.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Al = Qe("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq",
				"larger", "largerEq"
			], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.matrix,
					i = e.bignumber,
					a = e.smaller,
					o = e.smallerEq,
					s = e.larger,
					u = e.largerEq,
					c = Pi({
						typed: t,
						config: r,
						matrix: n,
						bignumber: i,
						smaller: a,
						smallerEq: o,
						larger: s,
						largerEq: u
					});
				return t("range", {
					"...any": function(e) {
						return "boolean" != typeof e[e.length - 1] && e.push(!
							0), c.apply(null, e)
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Ol = Qe("row", ["typed", "Index", "matrix", "range"], (function(e) {
				var t = e.typed,
					r = e.Index,
					n = e.matrix,
					i = e.range,
					a = Gi({
						typed: t,
						Index: r,
						matrix: n,
						range: i
					});
				return t("row", {
					"...any": function(e) {
						var t = e.length - 1,
							r = e[t];
						o(r) && (e[t] = r - 1);
						try {
							return a.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Cl = Qe("subset", ["typed", "matrix"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = Wi({
						typed: t,
						matrix: r
					});
				return t("subset", {
					"...any": function(e) {
						try {
							return n.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			_l = Qe("concat", ["typed", "matrix", "isInteger"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.isInteger,
					i = di({
						typed: t,
						matrix: r,
						isInteger: n
					});
				return t("concat", {
					"...any": function(e) {
						var t = e.length - 1,
							r = e[t];
						o(r) ? e[t] = r - 1 : s(r) && (e[t] = r.minus(1));
						try {
							return i.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Tl = Qe("diff", ["typed", "matrix", "subtract", "number", "bignumber"], (function(e) {
				var t = e.typed,
					r = e.matrix,
					n = e.subtract,
					i = e.number,
					a = e.bignumber,
					o = Ri({
						typed: t,
						matrix: r,
						subtract: n,
						number: i,
						bignumber: a
					});
				return t("diff", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return o.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			Il = Qe("std", ["typed", "sqrt", "variance"], (function(e) {
				var t = e.typed,
					r = e.sqrt,
					n = e.variance,
					i = nc({
						typed: t,
						sqrt: r,
						variance: n
					});
				return t("std", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return i.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			kl = Qe("sum", ["typed", "config", "add", "numeric"], (function(e) {
				var t = e.typed,
					r = e.config,
					n = e.add,
					i = e.numeric,
					a = Xu({
						typed: t,
						config: r,
						add: n,
						numeric: i
					});
				return t("sum", {
					"...any": function(e) {
						e = Nl(e);
						try {
							return a.apply(null, e)
						} catch (e) {
							throw ks(e)
						}
					}
				})
			}), {
				isTransformFunction: !0
			}),
			zl = Qe("variance", ["typed", "add", "subtract", "multiply", "divide", "apply",
				"isNaN"], (function(e) {
					var t = e.typed,
						r = e.add,
						n = e.subtract,
						i = e.multiply,
						a = e.divide,
						o = e.apply,
						s = e.isNaN,
						u = tc({
							typed: t,
							add: r,
							subtract: n,
							multiply: i,
							divide: a,
							apply: o,
							isNaN: s
						});
					return t("variance", {
						"...any": function(e) {
							e = Nl(e);
							try {
								return u.apply(null, e)
							} catch (e) {
								throw ks(e)
							}
						}
					})
				}), {
					isTransformFunction: !0
				}),
			Rl = r(184),
			ql = r.n(Rl);

		function Bl(e, t, r, n) {
			function i(t, i, a) {
				var s;
				if (a.wrap && "function" == typeof i && (i = function(e) {
						var t = function() {
							for (var t = [], n = 0, i = arguments.length; n < i; n++) {
								var a = arguments[n];
								t[n] = a && a.valueOf()
							}
							return e.apply(r, t)
						};
						e.transform && (t.transform = e.transform);
						return t
					}(i)), "function" == typeof(s = i) && "string" == typeof s.signature && (i = e(
						t, Ma()({}, i.signature, i))), d(r[t]) && d(i)) return i = a.override ? e(t,
					i.signatures) : e(r[t], i), r[t] = i, delete n[t], o(t, i), void r.emit(
					"import", t, (function() {
						return i
					}));
				if (void 0 === r[t] || a.override) return r[t] = i, delete n[t], o(t, i), void r
					.emit("import", t, (function() {
						return i
					}));
				if (!a.silent) throw new Error('Cannot import "' + t + '": already exists')
			}

			function o(e, t) {
				t && "function" == typeof t.transform ? (r.expression.transform[e] = t.transform, v(
					e) && (r.expression.mathWithTransform[e] = t.transform)) : (delete r
					.expression.transform[e], v(e) && (r.expression.mathWithTransform[e] = t))
			}

			function l(e) {
				delete r.expression.transform[e], v(e) ? r.expression.mathWithTransform[e] = r[e] :
					delete r.expression.mathWithTransform[e]
			}

			function p(t, i) {
				var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.fn;
				if ($e(a, ".")) throw new Error(
					"Factory name should not contain a nested path. Name: " + JSON
					.stringify(a));
				var o = g(t) ? r.expression.transform : r,
					s = a in r.expression.transform,
					u = Je(o, a) ? o[a] : void 0,
					c = function() {
						var n = {};
						t.dependencies.map(et).forEach((function(e) {
							if ($e(e, ".")) throw new Error(
								"Factory dependency should not contain a nested path. Name: " +
								JSON.stringify(e));
							"math" === e ? n.math = r : "mathWithTransform" === e ? n
								.mathWithTransform = r.expression.mathWithTransform :
								"classes" === e ? n.classes = r : n[e] = r[e]
						}));
						var o = t(n);
						if (o && "function" == typeof o.transform) throw new Error(
							'Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"'
							);
						if (void 0 === u || i.override) return o;
						if (d(u) && d(o)) return e(u, o);
						if (i.silent) return u;
						throw new Error('Cannot import "' + a + '": already exists')
					};
				t.meta && !1 === t.meta.lazy ? (o[a] = c(), u && s ? l(a) : (g(t) || y(t)) && Ye(r
					.expression.mathWithTransform, a, (function() {
						return o[a]
					}))) : (Ye(o, a, c), u && s ? l(a) : (g(t) || y(t)) && Ye(r.expression
					.mathWithTransform, a, (function() {
						return o[a]
					}))), n[a] = t, r.emit("import", a, c)
			}

			function h(e) {
				return "function" == typeof e || "number" == typeof e || "string" == typeof e ||
					"boolean" == typeof e || null === e || f(e) || u(e) || s(e) || c(e) || m(e) ||
					Array.isArray(e)
			}

			function d(e) {
				return "function" == typeof e && "object" === a()(e.signatures)
			}

			function v(e) {
				return !Je(x, e)
			}

			function y(e) {
				return !(-1 !== e.fn.indexOf(".") || Je(x, e.fn) || e.meta && e.meta.isClass)
			}

			function g(e) {
				return void 0 !== e && void 0 !== e.meta && !0 === e.meta.isTransformFunction || !1
			}
			var x = {
				expression: !0,
				type: !0,
				docs: !0,
				error: !0,
				json: !0,
				chain: !0
			};
			return function(e, t) {
				var r = arguments.length;
				if (1 !== r && 2 !== r) throw new Ui("import", r, 1, 2);

				function n(e, r, i) {
					if (Array.isArray(r)) r.forEach((function(t) {
						return n(e, t)
					}));
					else if ("object" === a()(r))
						for (var o in r) Je(r, o) && n(e, r[o], o);
					else if (Ke(r) || void 0 !== i) {
						var s = Ke(r) ? g(r) ? r.fn + ".transform" : r.fn : i;
						if (Je(e, s) && e[s] !== r && !t.silent) throw new Error(
							'Cannot import "' + s + '" twice');
						e[s] = r
					} else if (!t.silent) throw new TypeError(
						"Factory, Object, or Array expected")
				}
				t || (t = {});
				var o = {};
				for (var s in n(o, e), o)
					if (Je(o, s)) {
						var u = o[s];
						if (Ke(u)) p(u, t);
						else if (h(u)) i(s, u, t);
						else if (!t.silent) throw new TypeError(
							"Factory, Object, or Array expected")
					}
			}
		}
		var Dl = {
				epsilon: 1e-12,
				matrix: "Matrix",
				number: "number",
				precision: 64,
				predictable: !1,
				randomSeed: null
			},
			jl = ["Matrix", "Array"],
			Pl = ["number", "BigNumber", "Fraction"];

		function Fl(e, t) {
			function r(r) {
				if (r) {
					var n = Ge(e, He);
					Ul(r, "matrix", jl), Ul(r, "number", Pl),
						function e(t, r) {
							if (Array.isArray(r)) throw new TypeError(
								"Arrays are not supported by deepExtend");
							for (var n in r)
								if (Je(r, n) && !(n in Object.prototype) && !(n in Function
										.prototype))
									if (r[n] && r[n].constructor === Object) void 0 === t[n] && (t[
										n] = {}), t[n] && t[n].constructor === Object ? e(t[n],
										r[n]) : t[n] = r[n];
									else {
										if (Array.isArray(r[n])) throw new TypeError(
											"Arrays are not supported by deepExtend");
										t[n] = r[n]
									} return t
						}(e, r);
					var i = Ge(e, He),
						a = Ge(r, He);
					return t("config", i, n, a), i
				}
				return Ge(e, He)
			}
			return r.MATRIX_OPTIONS = jl, r.NUMBER_OPTIONS = Pl, Object.keys(Dl).forEach((function(
				t) {
				Object.defineProperty(r, t, {
					get: function() {
						return e[t]
					},
					enumerable: !0,
					configurable: !0
				})
			})), r
		}

		function Ul(e, t, r) {
			var n, i;
			void 0 !== e[t] && (n = r, i = e[t], -1 === n.indexOf(i)) && console.warn(
				'Warning: Unknown value "' + e[t] + '" for configuration option "' + t +
				'". Available options: ' + r.map((function(e) {
					return JSON.stringify(e)
				})).join(", ") + ".")
		}
		t.default = function e(t, r) {
			var n = ho()({}, Dl, r);
			if ("function" != typeof Object.create) throw new Error(
				"ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility."
				);
			var i, a, H = (i = {
					isNumber: o,
					isComplex: u,
					isBigNumber: s,
					isFraction: c,
					isUnit: f,
					isString: l,
					isArray: p,
					isMatrix: m,
					isCollection: h,
					isDenseMatrix: d,
					isSparseMatrix: v,
					isRange: y,
					isIndex: g,
					isBoolean: x,
					isResultSet: b,
					isHelp: w,
					isFunction: N,
					isDate: M,
					isRegExp: E,
					isObject: S,
					isNull: A,
					isUndefined: O,
					isAccessorNode: C,
					isArrayNode: _,
					isAssignmentNode: T,
					isBlockNode: I,
					isConditionalNode: k,
					isConstantNode: z,
					isFunctionAssignmentNode: R,
					isFunctionNode: q,
					isIndexNode: B,
					isNode: D,
					isObjectNode: j,
					isOperatorNode: P,
					isParenthesisNode: F,
					isRangeNode: U,
					isSymbolNode: L,
					isChain: $
				}, a = new ql.a, i.on = a.on.bind(a), i.off = a.off.bind(a), i.once = a.once
				.bind(a), i.emit = a.emit.bind(a), i);
			H.config = Fl(n, H.emit), H.expression = {
				transform: {},
				mathWithTransform: {
					config: H.config
				}
			};
			var G = {},
				V = Bl((function() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
						t[r] = arguments[r];
					return H.typed.apply(H.typed, t)
				}), 0, H, G);
			return H.import = V, H.on("config", (function() {
					Xe(G).forEach((function(e) {
						e && e.meta && e.meta.recreateOnConfigChange && V(
						e, {
							override: !0
						})
					}))
				})), H.create = e.bind(null, t), H.factory = Qe, H.import(Xe(We(t))), H
				.ArgumentsError = Ui, H.DimensionError = Me, H.IndexError = Ee, H
		}(n)
	}]).default
}));
//# sourceMappingURL=math.js.map
