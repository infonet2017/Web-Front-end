(function() {
	var aa = "function" == typeof Object.create ? Object.create : function(a) {
	  var b = function() {};
	  b.prototype = a;
	  return new b
	 },
	 ba;
	if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
	else {
	 var ca;
	 a: {
	  var da = {
		a: !0
	   },
	   ea = {};
	  try {
	   ea.__proto__ = da;
	   ca = ea.a;
	   break a
	  } catch (a) {}
	  ca = !1
	 }
	 ba = ca ? function(a, b) {
	  a.__proto__ = b;
	  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
	  return a
	 } : null
	}
	for (var fa = ba, ha = function(a, b) {
	   a.prototype = aa(b.prototype);
	   a.prototype.constructor = a;
	   if (fa) fa(a, b);
	   else
		for (var c in b)
		 if ("prototype" != c)
		  if (Object.defineProperties) {
		   var d = Object.getOwnPropertyDescriptor(b, c);
		   d && Object.defineProperty(a, c, d)
		  } else a[c] = b[c];
	   a.Ba = b.prototype
	  },
	  ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
	   a != Array.prototype && a != Object.prototype && (a[b] = c.value)
	  },
	  ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
	  ka = ["Number", "isNaN"],
	  la = 0; la < ka.length - 1; la++) {
	 var ma = ka[la];
	 ma in ja || (ja[ma] = {});
	 ja = ja[ma]
	}
	var na = ka[ka.length - 1],
	 oa = ja[na],
	 pa = oa ? oa : function(a) {
	  return "number" === typeof a && isNaN(a)
	 };
	pa != oa && null != pa && ia(ja, na, {
	 configurable: !0,
	 writable: !0,
	 value: pa
	});
	var l = this,
	 qa = function(a) {
	  return "string" == typeof a
	 },
	 ra = function(a) {
	  return "number" == typeof a
	 },
	 sa = function() {},
	 q = function(a) {
	  var b = typeof a;
	  if ("object" == b)
	   if (a) {
		if (a instanceof Array) return "array";
		if (a instanceof Object) return b;
		var c = Object.prototype.toString.call(a);
		if ("[object Window]" == c) return "object";
		if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
		if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
	   } else return "null";
	  else if ("function" == b && "undefined" == typeof a.call) return "object";
	  return b
	 },
	 ta = function(a) {
	  var b = typeof a;
	  return "object" == b && null != a || "function" == b
	 },
	 ua = function(a, b, c) {
	  return a.call.apply(a.bind, arguments)
	 },
	 va = function(a, b, c) {
	  if (!a) throw Error();
	  if (2 < arguments.length) {
	   var d = Array.prototype.slice.call(arguments, 2);
	   return function() {
		var c = Array.prototype.slice.call(arguments);
		Array.prototype.unshift.apply(c, d);
		return a.apply(b, c)
	   }
	  }
	  return function() {
	   return a.apply(b, arguments)
	  }
	 },
	 wa = function(a, b, c) {
	  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa = ua : wa = va;
	  return wa.apply(null, arguments)
	 },
	 xa = function(a, b) {
	  var c = Array.prototype.slice.call(arguments, 1);
	  return function() {
	   var b = c.slice();
	   b.push.apply(b, arguments);
	   return a.apply(this, b)
	  }
	 },
	 t = function(a) {
	  var b = ya;
  
	  function c() {}
	  c.prototype = b.prototype;
	  a.Ba = b.prototype;
	  a.prototype = new c;
	  a.prototype.constructor = a;
	  a.Ca = function(a, c, f) {
	   for (var d = Array(arguments.length - 2),
		 e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
	   return b.prototype[c].apply(a, d)
	  }
	 };
	var za = (new Date).getTime();
	var Aa = document,
	 u = window;
	var Ba = {
	  "120x90": !0,
	  "160x90": !0,
	  "180x90": !0,
	  "200x90": !0,
	  "468x15": !0,
	  "728x15": !0
	 },
	 Ca = function(a, b) {
	  if (15 == b) {
	   if (728 <= a) return 728;
	   if (468 <= a) return 468
	  } else if (90 == b) {
	   if (200 <= a)
		return 200;
	   if (180 <= a)
		return 180;
	   if (160 <= a)
		return 160;
	   if (120 <= a)
		return 120
	  }
	  return null
	 };
	var Da = function(a, b) {
	  a = parseInt(a, 10);
	  return isNaN(a) ? b : a
	 },
	 Ea = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
	 Fa = function(a, b) {
	  return a ? (a = a.match(Ea)) ? a[0] : b : b
	 };
	var Ga = Da("468", 0);
	var Ha = function(a) {
	  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	 },
	 Pa = function(a) {
	  if (!Ia.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ja, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ka, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(La, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ma, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Na, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Oa, "&#0;"));
	  return a
	 },
	 Ja = /&/g,
	 Ka = /</g,
	 La = />/g,
	 Ma = /"/g,
	 Na = /'/g,
	 Oa = /\x00/g,
	 Ia = /[\x00&<>"']/,
	 Qa = {
	  "\x00": "\\0",
	  "\b": "\\b",
	  "\f": "\\f",
	  "\n": "\\n",
	  "\r": "\\r",
	  "\t": "\\t",
	  "\x0B": "\\x0B",
	  '"': '\\"',
	  "\\": "\\\\",
	  "<": "<"
	 },
	 Ra = {
	  "'": "\\'"
	 },
	 Sa = function(a) {
	  return String(a).replace(/\-([a-z])/g, function(a, c) {
	   return c.toUpperCase()
	  })
	 };
	var Ta = function(a, b) {
	  for (var c = a.length, d = qa(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
	 },
	 Ua = function(a) {
	  return Array.prototype.concat.apply([], arguments)
	 };
	var Va = function(a, b) {
	 for (var c in a)
	  if (b.call(void 0, a[c], c, a))
	   return c
	};
	var Xa = function() {
	 this.j = "";
	 this.l = Wa
	};
	Xa.prototype.ea = !0;
	Xa.prototype.O = function() {
	 return this.j
	};
	var Ya = function(a) {
	  if (a instanceof Xa && a.constructor === Xa && a.l === Wa) return a.j;
	  q(a);
	  return "type_error:TrustedResourceUrl"
	 },
	 Wa = {};
	var $a = function() {
	 this.P = "";
	 this.sa = Za
	};
	$a.prototype.ea = !0;
	$a.prototype.O = function() {
	 return this.P
	};
	var ab = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
	 Za = {},
	 bb = function(a) {
	  var b = new $a;
	  b.P = a;
	  return b
	 };
	bb("about:blank");
	var cb;
	a: {
	 var db = l.navigator;
	 if (db) {
	  var eb = db.userAgent;
	  if (eb) {
	   cb = eb;
	   break a
	  }
	 }
	 cb = ""
	}
	var v = function(a) {
	 return -1 != cb.indexOf(a)
	};
	var gb = function(a) {
	  fb();
	  var b = new Xa;
	  b.j = a;
	  return b
	 },
	 fb = sa;
	var hb = function(a) {
	 hb[" "](a);
	 return a
	};
	hb[" "] = sa;
	var w = function(a) {
	  try {
	   var b;
	   if (b = !!a && null != a.location.href) a: {
		try {
		 hb(a.foo);
		 b = !0;
		 break a
		} catch (c) {}
		b = !1
	   }
	   return b
	  } catch (c) {
	   return !1
	  }
	 },
	 ib = function(a, b) {
	  var c = [l.top],
	   d = [],
	   e = 0;
	  b = b || 1024;
	  for (var f; f = c[e++];) {
	   a && !w(f) || d.push(f);
	   try {
		if (f.frames)
		 for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h])
	   } catch (k) {}
	  }
	  return d
	 },
	 jb = function(a, b) {
	  var c = a.createElement("script");
	  b = gb(b);
	  c.src = Ya(b);
	  (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
	 },
	 z = function(a, b) {
	  return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
	 },
	 kb = function(a) {
	  try {
	   var b = new Uint32Array(1);
	   a.crypto.getRandomValues(b);
	   return b[0] / 65536 / 65536
	  } catch (c) {
	   return Math.random()
	  }
	 },
	 lb = function(a, b) {
	  for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
	 },
	 mb = function(a) {
	  var b = a.length;
	  if (0 == b)
	   return 0;
	  for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
	  return 0 < c ? c : 4294967296 + c
	 },
	 nb = /^([0-9.]+)px$/,
	 ob = /^(-?[0-9.]{1,30})$/,
	 pb = function(a) {
	  return ob.test(a) && (a = Number(a), !isNaN(a)) ? a : null
	 },
	 qb = function(a, b) {
	  return b ? !/^false$/.test(a) : /^true$/.test(a)
	 },
	 rb = function(a) {
	  return (a = nb.exec(a)) ? +a[1] : null
	 };
	var sb = function() {
	  return "r20171025"
	 },
	 tb = qb("false", !1),
	 ub = qb("false", !1),
	 vb = qb("true", !1),
	 wb = vb || !ub;
	var xb = v("Opera"),
	 yb = -1 != cb.toLowerCase().indexOf("webkit") && !v("Edge");
	var zb = function() {
	 var a = sa;
	 return function() {
	  if (a) {
	   var b = a;
	   a = null;
	   b()
	  }
	 }
	};
	var Ab = function(a, b, c) {
	  a.addEventListener ? a.addEventListener(b, c, void 0) : a.attachEvent && a.attachEvent("on" + b, c)
	 },
	 Bb = function(a, b, c) {
	  a.removeEventListener ? a.removeEventListener(b, c, void 0) : a.detachEvent && a.detachEvent("on" + b, c)
	 };
	var Cb = function(a) {
	  a = a || l;
	  var b = a.context;
	  if (!b) try {
	   b = a.parent.context
	  } catch (c) {}
	  try {
	   if (b && "pageViewId" in b && "canonicalUrl" in b)
		return b
	  } catch (c) {}
	  return null
	 },
	 Db = function(a) {
	  a = a || Cb();
	  if (!a) return null;
	  a = a.master;
	  return w(a) ? a : null
	 };
	var Eb = function(a, b) {
	 l.google_image_requests || (l.google_image_requests = []);
	 var c = l.document.createElement("img");
	 if (b) {
	  var d = function(a) {
	   b(a);
	   Bb(c, "load", d);
	   Bb(c, "error", d)
	  };
	  Ab(c, "load", d);
	  Ab(c, "error", d)
	 }
	 c.src = a;
	 l.google_image_requests.push(c)
	};
	var Fb = Object.prototype.hasOwnProperty,
	 Gb = function(a, b) {
	  for (var c in a) Fb.call(a, c) && b.call(void 0, a[c], c, a)
	 },
	 Hb = function(a) {
	  return !(!a || !a.call) && "function" === typeof a
	 },
	 Ib = function(a, b) {
	  for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
	 },
	 Jb = function(a, b) {
	  if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
	  for (var c = 0; c < a.length; c++)
	   if (a[c] === b) return !0;
	  return !1
	 },
	 Kb = function(a) {
	  a = Db(Cb(a)) || a;
	  a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
	 },
	 Lb = !!window.google_async_iframe_id,
	 Mb = Lb && window.parent || window,
	 Nb = function() {
	  if (Lb && !w(Mb)) {
	   var a = "." + Aa.domain;
	   try {
		for (; 2 < a.split(".").length && !w(Mb);) Aa.domain = a = a.substr(a.indexOf(".") + 1), Mb = window.parent
	   } catch (b) {}
	   w(Mb) || (Mb = window)
	  }
	  return Mb
	 },
	 Ob = /(^| )adsbygoogle($| )/,
	 Pb = function(a) {
	  a = tb && a.google_top_window || a.top;
	  return w(a) ? a : null
	 };
	var A = function(a, b) {
	  a = a.google_ad_modifications;
	  return Jb(a ? a.eids || [] : [], b)
	 },
	 B = function(a, b) {
	  a = a.google_ad_modifications;
	  return Jb(a ? a.loeids || [] : [], b)
	 },
	 Qb = function(a, b, c) {
	  if (!a) return null;
	  for (var d = 0; d < a.length; ++d)
	   if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
		return a[d];
	  return null
	 };
	var Rb = {
	 overlays: 1,
	 interstitials: 2,
	 vignettes: 2,
	 inserts: 3,
	 immersives: 4,
	 list_view: 5,
	 full_page: 6
	};
	var Sb = function(a) {
	 for (var b = [], c = 0, d = 0; d < a.length; d++) {
	  var e = a.charCodeAt(d);
	  255 < e && (b[c++] = e & 255, e >>= 8);
	  b[c++] = e
	 }
	 return b
	};
	var Tb = v("Safari") && !((v("Chrome") || v("CriOS")) && !v("Edge") || v("Coast") || v("Opera") || v("Edge") || v("Silk") || v("Android")) && !(v("iPhone") && !v("iPod") && !v("iPad") || v("iPad") || v("iPod"));
	var Ub = null,
	 Vb = null,
	 Wb = v("Gecko") && !(-1 != cb.toLowerCase().indexOf("webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge") || yb && !Tb || xb || "function" == typeof l.btoa,
	 Xb = function(a, b) {
	  if (!Ub) {
	   Ub = {};
	   Vb = {};
	   for (var c = 0; 65 > c; c++) Ub[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Vb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
	  }
	  b = b ? Vb : Ub;
	  c = [];
	  for (var d = 0; d < a.length; d += 3) {
	   var e = a[d],
		f = d + 1 < a.length,
		g = f ? a[d + 1] : 0,
		h = d + 2 < a.length,
		k = h ? a[d + 2] : 0,
		m = e >> 2;
	   e = (e & 3) << 4 | g >> 4;
	   g = (g & 15) << 2 | k >> 6;
	   k &= 63;
	   h || (k = 64, f || (g = 64));
	   c.push(b[m], b[e], b[g], b[k])
	  }
	  return c.join("")
	 };
	var ya = function() {},
	 Yb = "function" == typeof Uint8Array,
	 $b = function(a, b, c) {
	  a.j = null;
	  b || (b = []);
	  a.C = void 0;
	  a.s = -1;
	  a.l = b;
	  a: {
	   if (a.l.length) {
		b = a.l.length - 1;
		var d = a.l[b];
		if (d && "object" == typeof d && "array" != q(d) && !(Yb && d instanceof Uint8Array)) {
		 a.v = b - a.s;
		 a.o = d;
		 break a
		}
	   }
	   a.v = Number.MAX_VALUE
	  }
	  a.w = {};
	  if (c)
	   for (b = 0; b < c.length; b++)
		if (d = c[b], d < a.v) d += a.s, a.l[d] = a.l[d] || Zb;
		else {
		 var e = a.v + a.s;
		 a.l[e] || (a.o = a.l[e] = {});
		 a.o[d] = a.o[d] || Zb
		}
	 },
	 Zb = [],
	 C = function(a, b) {
	  if (b < a.v) {
	   b += a.s;
	   var c = a.l[b];
	   return c === Zb ? a.l[b] = [] : c
	  }
	  if (a.o) return c = a.o[b], c === Zb ? a.o[b] = [] : c
	 },
	 ac = function(a, b) {
	  if (b < a.v) {
	   b += a.s;
	   var c = a.l[b];
	   return c === Zb ? a.l[b] = [] : c
	  }
	  c = a.o[b];
	  return c === Zb ? a.o[b] = [] : c
	 },
	 bc = function(a, b, c) {
	  a.j || (a.j = {});
	  if (!a.j[c]) {
	   var d = C(a, c);
	   d && (a.j[c] = new b(d))
	  }
	  return a.j[c]
	 },
	 cc = function(a, b, c) {
	  a.j || (a.j = {});
	  if (!a.j[c]) {
	   for (var d = ac(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
	   a.j[c] = e
	  }
	  b = a.j[c];
	  b == Zb && (b = a.j[c] = []);
	  return b
	 },
	 dc = function(a) {
	  if (a.j)
	   for (var b in a.j) {
		var c = a.j[b];
		if ("array" == q(c))
		 for (var d = 0; d < c.length; d++) c[d] && dc(c[d]);
		else c && dc(c)
	   }
	 };
	ya.prototype.toString = function() {
	 dc(this);
	 return this.l.toString()
	};
	var fc = function(a) {
	 $b(this, a, ec)
	};
	t(fc);
	var ec = [4],
	 gc = function(a) {
	  $b(this, a, null)
	 };
	t(gc);
	var hc = function(a) {
	 $b(this, a, null)
	};
	t(hc);
	var jc = function(a) {
	 $b(this, a, ic)
	};
	t(jc);
	var ic = [6, 7, 9, 10];
	var lc = function(a) {
	 $b(this, a, kc)
	};
	t(lc);
	var kc = [1, 2, 5, 7],
	 mc = function(a) {
	  $b(this, a, null)
	 };
	t(mc);
	var oc = function(a) {
	 $b(this, a, nc)
	};
	t(oc);
	var nc = [2];
	var pc = function(a, b, c) {
	 c = void 0 === c ? {} : c;
	 this.error = a;
	 this.context = b.context;
	 this.line = b.line || -1;
	 this.msg = b.message || "";
	 this.file = b.file || "";
	 this.id = b.id || "jserror";
	 this.meta = c
	};
	var qc = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
	 rc = function(a, b) {
	  this.j = a;
	  this.l = b
	 },
	 sc = function(a, b, c) {
	  this.url = a;
	  this.j = b;
	  this.fa = !!c;
	  this.depth = ra(void 0) ? void 0 : null
	 };
	var tc = function(a, b, c, d, e) {
	  this.w = c || 4E3;
	  this.o = a || "&";
	  this.C = b || ",$";
	  this.s = void 0 !== d ? d : "trn";
	  this.M = e || null;
	  this.v = !1;
	  this.l = {};
	  this.D = 0;
	  this.j = []
	 },
	 uc = function(a, b) {
	  var c = {};
	  c[a] = b;
	  return [c]
	 },
	 wc = function(a, b, c, d, e) {
	  var f = [];
	  lb(a, function(a, h) {
	   (a = vc(a, b, c, d, e)) && f.push(h + "=" + a)
	  });
	  return f.join(b)
	 },
	 vc = function(a, b, c, d, e) {
	  if (null == a) return "";
	  b = b || "&";
	  c = c || ",$";
	  "string" == typeof c && (c = c.split(""));
	  if (a instanceof Array) {
	   if (d = d || 0, d < c.length) {
		for (var f = [], g = 0; g < a.length; g++) f.push(vc(a[g], b, c, d + 1, e));
		return f.join(c[d])
	   }
	  } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(wc(a, b, c, d, e + 1)) : "...";
	  return encodeURIComponent(String(a))
	 },
	 xc = function(a, b, c, d) {
	  a.j.push(b);
	  a.l[b] = uc(c, d)
	 },
	 zc = function(a, b, c, d) {
	  b = b + "//" + c + d;
	  var e = yc(a) - d.length - 0;
	  if (0 > e) return "";
	  a.j.sort(function(a, b) {
	   return a - b
	  });
	  d = null;
	  c = "";
	  for (var f = 0; f < a.j.length; f++)
	   for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
		if (!e) {
		 d = null == d ? g : d;
		 break
		}
		var m = wc(h[k], a.o, a.C);
		if (m) {
		 m = c + m;
		 if (e >= m.length) {
		  e -= m.length;
		  b += m;
		  c = a.o;
		  break
		 } else a.v && (c = e, m[c - 1] == a.o && --c, b += m.substr(0, c), c = a.o, e = 0);
		 d = null == d ? g : d
		}
	   }
	  f = "";
	  a.s && null != d && (f = c + a.s + "=" + (a.M || d));
	  return b + f + ""
	 },
	 yc = function(a) {
	  if (!a.s) return a.w;
	  var b = 1,
	   c;
	  for (c in a.l) b = c.length > b ? c.length : b;
	  return a.w - a.s.length - b - a.o.length - 1
	 };
	var Ac = function(a, b, c, d, e, f) {
	 if ((d ? a.v : Math.random()) < (e || a.j)) try {
	  if (c instanceof tc) var g = c;
	  else g = new tc, lb(c, function(a, b) {
	   var c = g,
		d = c.D++;
	   a = uc(b, a);
	   c.j.push(d);
	   c.l[d] = a
	  });
	  var h = zc(g, a.s, a.l, a.o + b + "&");
	  h && ("undefined" === typeof f ? Eb(h, void 0) : Eb(h, f))
	 } catch (k) {}
	};
	var Bc = function(a, b) {
	 this.start = a < b ? a : b;
	 this.j = a < b ? b : a
	};
	var Cc = function(a, b) {
	  this.j = b >= a ? new Bc(a, b) : null
	 },
	 Dc = function(a) {
	  try {
	   var b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
	  } catch (c) {
	   return null
	  }
	  if (0 <= b && 1E3 > b) return b;
	  b = Math.floor(1E3 * kb(a));
	  try {
	   return a.localStorage.setItem("google_experiment_mod", "" + b), b
	  } catch (c) {
	   return null
	  }
	 };
	var Ec = !1,
	 Fc = null,
	 Gc = function() {
	  if (null === Fc) {
	   Fc = "";
	   try {
		var a = l.top.location.hash;
		if (a) {
		 var b = a.match(/\bdeid=([\d,]+)/);
		 Fc = b ? b[1] : ""
		}
	   } catch (c) {}
	  }
	  return Fc
	 },
	 Hc = function(a, b) {
	  var c;
	  c = (c = Gc()) ? (c = c.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? c[0] : null : null;
	  if (c) a = c;
	  else if (Ec) a = null;
	  else a: {
	   if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
		c = kb(l);
		a = a[Math.floor(c * a.length)];
		break a
	   }
	   a = null
	  }
	  return a
	 };
	var Ic = function() {
	  var a = l.performance;
	  return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
	 },
	 Jc = function() {
	  var a = l.performance;
	  return a && a.now ? a.now() : null
	 };
	var Kc = function(a, b, c) {
	 this.label = a;
	 this.type = b;
	 this.value = c;
	 this.duration = 0;
	 this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
	 this.slotId = void 0
	};
	var Lc = l.performance,
	 Mc = !!(Lc && Lc.mark && Lc.measure && Lc.clearMarks),
	 Nc = function(a) {
	  var b = !1,
	   c;
	  return function() {
	   b || (c = a(), b = !0);
	   return c
	  }
	 }(function() {
	  var a;
	  if (a = Mc) a = Gc(), a = !!a.indexOf && 0 <= a.indexOf("1337");
	  return a
	 }),
	 Oc = function(a, b) {
	  this.events = [];
	  this.l = b || l;
	  var c = null;
	  b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
	  this.j = Nc() || (null != c ? c : Math.random() < a)
	 },
	 Pc = function(a) {
	  a && Nc() && (Lc.clearMarks("goog_" + a.uniqueId + "_start"), Lc.clearMarks("goog_" + a.uniqueId + "_end"))
	 };
	Oc.prototype.start = function(a, b) {
	 if (!this.j) return null;
	 var c = Jc() || Ic();
	 a = new Kc(a, b, c);
	 b = "goog_" + a.uniqueId + "_start";
	 Nc() && Lc.mark(b);
	 return a
	};
	var Qc = function(a, b, c, d) {
	  this.w = a;
	  this.D = b;
	  this.s = c;
	  this.o = null;
	  this.C = this.j;
	  this.l = void 0 === d ? null : d;
	  this.v = !1
	 },
	 Tc = function(a, b, c, d, e) {
	  try {
	   if (a.l && a.l.j) {
		var f = a.l.start(b.toString(), 3);
		var g = c();
		var h = a.l;
		c = f;
		if (h.j && ra(c.value)) {
		 var k = Jc() || Ic();
		 c.duration = k - c.value;
		 var m = "goog_" + c.uniqueId + "_end";
		 Nc() && Lc.mark(m);
		 h.j && h.events.push(c)
		}
	   } else g = c()
	  } catch (n) {
	   h = a.s;
	   try {
		Pc(f), h = (e || a.C).call(a, b, new Rc(Sc(n), n.fileName, n.lineNumber), void 0, d)
	   } catch (x) {
		a.j(217, x)
	   }
	   if (!h) throw n;
	  }
	  return g
	 },
	 Uc = function(a, b) {
	  var c = E;
	  return function(d) {
	   for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
	   return Tc(c, a, function() {
		return b.apply(void 0, e)
	   }, void 0, void 0)
	  }
	 };
	Qc.prototype.j = function(a, b, c, d, e) {
	 e = e || this.D;
	 try {
	  var f = new tc;
	  f.v = !0;
	  xc(f, 1, "context", a);
	  b.error && b.meta && b.id || (b = new Rc(Sc(b), b.fileName, b.lineNumber));
	  b.msg && xc(f, 2, "msg", b.msg.substring(0, 512));
	  b.file && xc(f, 3, "file", b.file);
	  0 < b.line && xc(f, 4, "line", b.line);
	  var g = b.meta || {};
	  if (this.o) try {
	   this.o(g)
	  } catch (M) {}
	  if (d) try {
	   d(g)
	  } catch (M) {}
	  b = [g];
	  f.j.push(5);
	  f.l[5] = b;
	  g = l;
	  b = [];
	  var h = null;
	  do {
	   d = g;
	   if (w(d)) {
		var k = d.location.href;
		h = d.document && d.document.referrer || null
	   } else k = h, h = null;
	   b.push(new sc(k || "", d));
	   try {
		g = d.parent
	   } catch (M) {
		g = null
	   }
	  } while (g && d != g);
	  k = 0;
	  for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
	  d = l;
	  if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
	   for (k = 1; k < b.length; ++k) {
		var n = b[k];
		n.url || (n.url = d.location.ancestorOrigins[k - 1] || "", n.fa = !0)
	   }
	  var x = new sc(l.location.href, l, !1);
	  m = null;
	  var r = b.length - 1;
	  for (n = r; 0 <= n; --n) {
	   var p = b[n];
	   !m && qc.test(p.url) && (m = p);
	   if (p.url && !p.fa) {
		x = p;
		break
	   }
	  }
	  p = null;
	  var y = b.length && b[r].url;
	  0 != x.depth && y && (p = b[r]);
	  var D = new rc(x, p);
	  D.l && xc(f, 6, "top", D.l.url || "");
	  xc(f, 7, "url", D.j.url || "");
	  Ac(this.w, e, f, this.v, c)
	 } catch (M) {
	  try {
	   Ac(this.w, e, {
		context: "ecmserr",
		rctx: a,
		msg: Sc(M),
		url: D.j.url
	   }, this.v, c)
	  } catch (sf) {}
	 }
	 return this.s
	};
	var Sc = function(a) {
	  var b = a.toString();
	  a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
	  a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
	  if (a.stack) {
	   a = a.stack;
	   var c = b;
	   try {
		-1 == a.indexOf(c) && (a = c + "\n" + a);
		for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
		b = a.replace(/\n */g, "\n")
	   } catch (e) {
		b = c
	   }
	  }
	  return b
	 },
	 Rc = function(a, b, c) {
	  pc.call(this, Error(a), {
	   message: a,
	   file: void 0 === b ? "" : b,
	   line: void 0 === c ? -1 : c
	  })
	 };
	ha(Rc, pc);
	var Vc, E, Wc = Nb(),
	 Xc = new Oc(1, Wc),
	 Yc = function(a) {
	  null != a && (Wc.google_measure_js_timing = a);
	  Wc.google_measure_js_timing || (Xc.j = !1, Xc.events != Xc.l.google_js_reporting_queue && (Nc() && Ta(Xc.events, Pc), Xc.events.length = 0))
	 };
	Vc = new function() {
	 var a = void 0 === a ? u : a;
	 this.s = "http:" === a.location.protocol ? "http:" : "https:";
	 this.l = "pagead2.googlesyndication.com";
	 this.o = "/pagead/gen_204?id=";
	 this.j = .01;
	 this.v = Math.random()
	};
	E = new Qc(Vc, "jserror", !0, Xc);
	"complete" == Wc.document.readyState ? Yc() : Xc.j && Ab(Wc, "load", function() {
	 Yc()
	});
	var ad = function() {
	  var a = [Zc, $c];
	  E.o = function(b) {
	   Ta(a, function(a) {
		a(b)
	   })
	  }
	 },
	 bd = function(a, b, c, d) {
	  return Tc(E, a, c, d, b)
	 },
	 cd = function(a, b) {
	  return Uc(a, b)
	 },
	 dd = E.j;
	var ed = function(a, b) {
	 a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
	 Ac(Vc, "ama", b, !0, .01, void 0)
	};
	var fd = function(a) {
	 $b(this, a, null)
	};
	t(fd);
	var gd = null,
	 hd = function() {
	  if (!gd) {
	   for (var a = l, b = a, c = 0; a && a != a.parent;)
		if (a = a.parent, c++, w(a)) b = a;
		else break;
	   gd = b
	  }
	  return gd
	 };
	var F = function(a) {
	 a = a.document;
	 return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
	};
	var id = function(a, b) {
	 Array.prototype.slice.call(a).forEach(b, void 0)
	};
	var jd = function(a, b, c, d) {
	 this.s = a;
	 this.l = b;
	 this.o = c;
	 this.j = d
	};
	jd.prototype.toString = function() {
	 return JSON.stringify({
	  nativeQuery: this.s,
	  occurrenceIndex: this.l,
	  paragraphIndex: this.o,
	  ignoreMode: this.j
	 })
	};
	var kd = function(a, b) {
	  if (null == a.j) return b;
	  switch (a.j) {
	   case 1:
		return b.slice(1);
	   case 2:
		return b.slice(0, b.length - 1);
	   case 3:
		return b.slice(1, b.length - 1);
	   case 0:
		return b;
	   default:
		throw Error("Unknown ignore mode: " + a.j);
	  }
	 },
	 md = function(a) {
	  var b = [];
	  id(a.getElementsByTagName("p"), function(a) {
	   100 <= ld(a) && b.push(a)
	  });
	  return b
	 },
	 ld = function(a) {
	  if (3 == a.nodeType)
	   return a.length;
	  if (1 != a.nodeType || "SCRIPT" == a.tagName)
	   return 0;
	  var b = 0;
	  id(a.childNodes, function(a) {
	   b += ld(a)
	  });
	  return b
	 },
	 nd = function(a) {
	  return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
	 };
	var od = function(a) {
	 var b = ["adsbygoogle-placeholder"];
	 a = a.className ? a.className.split(/\s+/) : [];
	 for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
	 for (d = 0; d < b.length; ++d)
	  if (!c[b[d]]) return !1;
	 return !0
	};
	var pd = function(a, b) {
	 for (var c = 0; c < b.length; c++) {
	  var d = b[c],
	   e = Sa(d.Da);
	  a[e] = d.value
	 }
	};
	var qd = {
	  1: 1,
	  2: 2,
	  3: 3,
	  0: 0
	 },
	 rd = function(a) {
	  return null != a ? qd[a] : a
	 },
	 sd = {
	  1: 0,
	  2: 1,
	  3: 2,
	  4: 3
	 };
	var td = function(a, b) {
	  if (!a)
	   return !1;
	  a = z(a, b);
	  if (!a)
	   return !1;
	  a = a.cssFloat || a.styleFloat;
	  return "left" == a || "right" == a
	 },
	 ud = function(a) {
	  for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
	  return a ? a : null
	 },
	 vd = function(a) {
	  return !!a.nextSibling || !!a.parentNode && vd(a.parentNode)
	 };
	var xd = function(a, b) {
	  var c = wd;
	  this.j = l;
	  this.v = a;
	  this.s = b;
	  this.o = c || null;
	  this.l = !1
	 },
	 zd = function(a, b) {
	  if (a.l) return !0;
	  try {
	   var c = a.j.localStorage.getItem("google_ama_settings");
	   var d = c ? new fd(c ? JSON.parse(c) : null) : null
	  } catch (g) {
	   d = null
	  }
	  if (c = null !== d) d = C(d, 2), c = null == d ? !1 : d;
	  if (c) return a = a.j.google_ama_state = a.j.google_ama_state || {}, a.eatf = !0;
	  c = cc(a.s, jc, 1);
	  for (d = 0; d < c.length; d++) {
	   var e = c[d];
	   if (1 == C(e, 8)) {
		var f = bc(e, hc, 4);
		if (f && 2 == C(f, 1) && yd(a, e, b))
		 return a.l = !0, a = a.j.google_ama_state = a.j.google_ama_state || {}, a.placement = d, !0
	   }
	  }
	  return !1
	 },
	 yd = function(a, b, c) {
	  if (1 != C(b, 8))
	   return !1;
	  var d = bc(b, fc, 1);
	  if (!d) return !1;
	  var e = C(d, 7);
	  if (C(d, 1) || C(d, 3) || 0 < ac(d, 4).length) {
	   var f = C(d, 3),
		g = C(d, 1),
		h = ac(d, 4);
	   e = C(d, 2);
	   var k = C(d, 5);
	   d = rd(C(d, 6));
	   var m = "";
	   g && (m += g);
	   f && (m += "#" + nd(f));
	   if (h)
		for (f = 0; f < h.length; f++) m += "." + nd(h[f]);
	   e = (h = m) ? new jd(h, e, k, d) : null
	  } else e = e ? new jd(e, C(d, 2), C(d, 5), rd(C(d, 6))) : null;
	  if (!e)
	   return !1;
	  k = [];
	  try {
	   k = a.j.document.querySelectorAll(e.s)
	  } catch (p) {}
	  if (k.length) {
	   h = k.length;
	   if (0 < h) {
		d = Array(h);
		for (f = 0; f < h; f++) d[f] = k[f];
		k = d
	   } else k = [];
	   k = kd(e, k);
	   ra(e.l) && (h = e.l, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
	   if (ra(e.o)) {
		h = [];
		for (d = 0; d < k.length; d++) f = md(k[d]), g = e.o, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
		k = h
	   }
	   e = k
	  } else e = [];
	  if (0 == e.length) return !1;
	  e = e[0];
	  k = C(b, 2);
	  k = sd[k];
	  k = void 0 !== k ? k : null;
	  if (!(h = null == k)) {
	   a: {
		h = a.j;
		switch (k) {
		 case 0:
		  h = td(ud(e), h);
		  break a;
		 case 3:
		  h = td(e, h);
		  break a;
		 case 2:
		  d = e.lastChild;
		  h = td(d ? 1 == d.nodeType ? d : ud(d) : null, h);
		  break a
		}
		h = !1
	   }
	   if (c = !h && !(!c && 2 == k && !vd(e))) c = 1 == k || 2 == k ? e : e.parentNode,
	   c = !(c && (1 != c.nodeType || "INS" != c.tagName || !od(c)) && 0 >= c.offsetWidth);
	   h = !c
	  }
	  if (h) return !1;
	  b = bc(b, gc, 3);
	  h = {};
	  b && (h.ma = C(b, 1), h.$ = C(b, 2), h.ua = !!C(b, 3));
	  var n;
	  b = a.j;
	  c = a.o;
	  d = a.v;
	  f = b.document;
	  a = f.createElement("div");
	  g = a.style;
	  g.textAlign = "center";
	  g.width = "100%";
	  g.height = "auto";
	  g.clear = h.ua ? "both" : "none";
	  h.wa && pd(g, h.wa);
	  f = f.createElement("ins");
	  g = f.style;
	  g.display = "block";
	  g.margin = "auto";
	  g.backgroundColor = "transparent";
	  h.ma && (g.marginTop = h.ma);
	  h.$ && (g.marginBottom = h.$);
	  h.ta && pd(g, h.ta);
	  a.appendChild(f);
	  f.setAttribute("data-ad-format", "auto");
	  h = [];
	  if (g = c && c.j) a.className = g.join(" ");
	  f.className = "adsbygoogle";
	  f.setAttribute("data-ad-client", d);
	  h.length && f.setAttribute("data-ad-channel", h.join("+"));
	  a: {
	   try {
		switch (k) {
		 case 0:
		  e.parentNode && e.parentNode.insertBefore(a, e);
		  break;
		 case 3:
		  var x = e.parentNode;
		  if (x) {
		   var r = e.nextSibling;
		   if (r && r.parentNode != x)
			for (; r && 8 == r.nodeType;) r = r.nextSibling;
		   x.insertBefore(a, r)
		  }
		  break;
		 case 1:
		  e.insertBefore(a, e.firstChild);
		  break;
		 case 2:
		  e.appendChild(a)
		}
		if (1 != e.nodeType ? 0 : "INS" == e.tagName && od(e)) e.style.display = "block";
		f.setAttribute("data-adsbygoogle-status", "reserved");
		x = {
		 element: f
		};
		(n = c && c.l) && (x.params = n);
		(b.adsbygoogle = b.adsbygoogle || []).push(x)
	   } catch (p) {
		a && a.parentNode && a.parentNode.removeChild(a);
		n = !1;
		break a
	   }
	   n = !0
	  }
	  return n ? !0 : !1
	 };
	var Bd = function() {
	  this.l = new Ad(this);
	  this.j = 0
	 },
	 Cd = function(a) {
	  if (0 != a.j) throw Error("Already resolved/rejected.");
	 },
	 Ad = function(a) {
	  this.j = a
	 },
	 Dd = function(a) {
	  switch (a.j.j) {
	   case 0:
		break;
	   case 1:
		a.T && a.T(a.j.s);
		break;
	   case 2:
		a.la && a.la(a.j.o);
		break;
	   default:
		throw Error("Unhandled deferred state.");
	  }
	 };
	var Ed = function(a) {
	  this.exception = a
	 },
	 Fd = function(a, b, c, d) {
	  this.l = a;
	  this.o = b;
	  this.v = c;
	  this.j = d
	 };
	Fd.prototype.start = function() {
	 this.s()
	};
	Fd.prototype.s = function() {
	 try {
	  switch (this.l.document.readyState) {
	   case "complete":
	   case "interactive":
		zd(this.o, !0);
		Gd(this);
		break;
	   default:
		zd(this.o, !1) ? Gd(this) : this.l.setTimeout(wa(this.s, this), this.v)
	  }
	 } catch (a) {
	  Gd(this, a)
	 }
	};
	var Gd = function(a, b) {
	 try {
	  var c = a.j,
	   d = new Ed(b);
	  Cd(c);
	  c.j = 1;
	  c.s = d;
	  Dd(c.l)
	 } catch (e) {
	  a = a.j, b = e, Cd(a), a.j = 2, a.o = b, Dd(a.l)
	 }
	};
	var Hd = function(a) {
	  ed(a, {
	   atf: 1
	  })
	 },
	 Id = function(a, b) {
	  (a.google_ama_state = a.google_ama_state || {}).exception = b;
	  ed(a, {
	   atf: 0
	  })
	 };
	var Jd = function() {
	 this.wasPlaTagProcessed = !1;
	 this.wasReactiveAdConfigReceived = {};
	 this.adCount = {};
	 this.wasReactiveAdVisible = {};
	 this.stateForType = {};
	 this.reactiveTypeEnabledByReactiveTag = {};
	 this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
	 this.reactiveTypeDisabledByPublisher = {};
	 this.debugCard = null;
	 this.messageValidationEnabled = this.debugCardRequested = !1;
	 this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
	};
	var $c = function(a) {
	  try {
	   var b = l.google_ad_modifications;
	   if (null != b) {
		var c = Ua(b.eids, b.loeids);
		null != c && 0 < c.length && (a.eid = c.join(","))
	   }
	  } catch (d) {}
	 },
	 Zc = function(a) {
	  a.shv = sb()
	 };
	E.s = !tb;
	var Kd = {
	 1: "0.1",
	 5: "1.0",
	 6: "0",
	 7: "0",
	 9: "400",
	 10: "100",
	 11: "0.10",
	 12: "0.05",
	 13: "0.001",
	 14: "320",
	 15: "20",
	 19: "0.01",
	 22: "0.01",
	 23: "0.2",
	 24: "0.05",
	 26: "0.1",
	 27: "0.001",
	 28: "0.001",
	 29: "0.01",
	 32: "0.02",
	 34: "0.001",
	 37: "0.0",
	 39: "0.15",
	 40: "0.15",
	 41: "0.0",
	 42: "0.001",
	 43: "0.1",
	 47: "0.01",
	 48: "0.2",
	 49: "0.2",
	 51: "0.05",
	 52: "0.02",
	 54: "800",
	 55: "40",
	 56: "0.001",
	 57: "0.001",
	 58: "0.02",
	 59: "0.01",
	 60: "0.001",
	 65: "0.02",
	 66: "0.0",
	 67: "0.04",
	 70: "0.6",
	 71: "700",
	 72: "10",
	 74: "0.1",
	 75: "true",
	 76: "0.04",
	 77: "true",
	 78: "0.1",
	 79: "1200",
	 80: "2",
	 81: "0.02",
	 82: "3",
	 83: "1.0",
	 84: "0",
	 85: "2",
	 86: "0.004",
	 87: "0.002",
	 88: "0.0"
	};
	var Ld = null,
	 Md = function() {
	  this.j = Kd
	 },
	 G = function(a, b) {
	  a = parseFloat(a.j[b]);
	  return isNaN(a) ? 0 : a
	 },
	 Nd = function() {
	  Ld || (Ld = new Md);
	  return Ld
	 };
	var Od = {
	  m: "368226200",
	  u: "368226201"
	 },
	 d = {
	  m: "368226210",
	  u: "368226211"
	 },
	 Qd = {
	  m: "38893301",
	  J: "38893302",
	  K: "38893303"
	 },
	 Rd = {
	  m: "38893311",
	  J: "38893312",
	  K: "38893313"
	 },
	 Sd = {
	  m: "10583695",
	  u: "10583696"
	 },
	 Td = {
	  m: "10573695",
	  u: "10573696"
	 },
	 Ud = {
	  m: "10593695",
	  u: "10593696"
	 },
	 Vd = {
	  m: "4089040",
	  V: "4089042"
	 },
	 Wd = {
	  A: "20040067",
	  m: "20040068",
	  U: "1337"
	 },
	 Xd = {
	  m: "21060548",
	  A: "21060549"
	 },
	 Yd = {
	  m: "21060623",
	  A: "21060624"
	 },
	 Zd = {
	  m: "62710010",
	  VIEWPORT: "62710011"
	 },
	 $d = {
	  m: "62710013",
	  VIEWPORT: "62710014"
	 },
	 ae = {
	  m: "201222021",
	  B: "201222022"
	 },
	 be = {
	  m: "201222031",
	  B: "201222032"
	 },
	 ce = {
	  m: "20040000",
	  u: "0040001"
	 },
	 H = {
	  m: "21060866",
	  u: "21060867",
	  L: "21060868",
	  pa: "21060869",
	  I: "21060870"
	 },
	 de = {
	  m: "21060550",
	  u: "21060551"
	 },
	 ee = {
	  m: "156549041",
	  G: "156549042",
	  H: "156549043",
	  F: "156549044"
	 },
	 fe = {
	  m: "156549051",
	  G: "156549052",
	  H: "156549053",
	  F: "156549054"
	 },
	 ge = {
	  m: "21060518",
	  u: "21060519"
	 },
	 e = {
	  m: "21060830",
	  Y: "21060831",
	  N: "21060832",
	  X: "21060843",
	  W: "21061122"
	 },
	 ie = {
	  m: "191880151",
	  u: "191880152"
	 };
	Ec = !1;
	var je = new Cc(0, 99),
	 ke = new Cc(300, 399),
	 le = new Cc(400, 599),
	 me = new Cc(700, 799),
	 ne = new Cc(800, 899);
	var pe = function(a) {
	  var b = Nd(),
	   c = oe(a, me, G(b, 71), G(b, 72), ["153762914", "153762975"]),
	   d = "";
	  "153762914" == c ? d = "153762530" : "153762975" == c && (d = "153762841");
	  if (c) return {
	   ga: c,
	   ia: d
	  };
	  c = oe(a, me, G(b, 71) + G(b, 72), G(b, 80), ["164692081", "165767636"]);
	  "164692081" == c ? d = "166717794" : "165767636" == c && (d = "169062368");
	  return {
	   ga: c || "",
	   ia: d
	  }
	 },
	 qe = function(a) {
	  var b = a.google_ad_modifications = a.google_ad_modifications || {};
	  if (!b.plle) {
	   b.plle = !0;
	   var c = b.eids = b.eids || [];
	   b = b.loeids = b.loeids || [];
	   var d, e = Nd();
	   var f = pe(a);
	   I(b, f.ga);
	   I(c, f.ia);
	   f = Pd;
	   var g = oe(a, je, G(e, 84), G(e, 85), [f.m, f.u]);
	   I(b, g);
	   var h = Od;
	   g == f.m ? d = h.m : g == f.u ? d = h.u : d = "";
	   I(c, d);
	   f = Sd;
	   I(c, J(a, G(e, 5), [f.m, f.u]));
	   f = Td;
	   I(c, J(a, G(e, 6), [f.m, f.u]));
	   f = Ud;
	   I(c, J(a, G(e, 7), [f.m, f.u]));
	   f = Vd;
	   I(c, oe(a, le, G(e, 9), G(e, 10), [f.m, f.V]));
	   Aa.body || (f = ce, I(b, J(a, G(e, 1), [f.m, f.u])));
	   Ha("") && I(b, "");
	   f = Zd;
	   g = J(a, G(e, 11), [f.m, f.VIEWPORT]);
	   f = Va(f, function(a) {
		return a == g
	   });
	   f = $d[f];
	   I(c, g);
	   I(c, f);
	   f = H;
	   f = J(a, G(e, 12), [f.m, f.u, f.L, f.pa, f.I]);
	   I(c, f);
	   f || (f = de, f = J(a, G(e, 58), [f.m, f.u]), I(c, f));
	   f || (f = ge, g = J(a, G(e, 56), [f.m, f.u]), I(c, g));
	   f = Wd;
	   g = J(a, G(e, 13), [f.A, f.m]);
	   I(c, g);
	   I(c, Hc([f.U], 0));
	   f = Xd;
	   g = J(a, G(e, 60), [f.A, f.m]);
	   I(c, g);
	   g == Xd.A && (f = Yd, g = J(a, G(e, 66), [f.A, f.m]), I(c, g));
	   f = be;
	   g = oe(a, ke, G(e, 14), G(e, 15), [f.m, f.B]);
	   I(b, g);
	   h = ae;
	   g == f.m ? d = h.m : g == f.B ? d = h.B : d = "";
	   I(c, d);
	   f = fe;
	   g = oe(a, ne, G(e, 54), G(e, 55), [f.m, f.G, f.H, f.F]);
	   I(b, g);
	   h = ee;
	   g == f.m ? d = h.m : g == f.G ? d = h.G : g == f.H ? d = h.H : g == f.F ? d = h.F : d = "";
	   I(c, d);
	   f = Rd;
	   g = J(a, G(e, 70), [f.m, f.J, f.K]);
	   I(b, g);
	   h = Qd;
	   switch (g) {
		case f.m:
		 d = h.m;
		 break;
		case f.J:
		 d = h.J;
		 break;
		case f.K:
		 d = h.K;
		 break;
		default:
		 h = ""
	   }
	   I(c, d);
	   if (qb(e.j[77], !1) || tb) f = he, g = J(a, G(e, 76), [f.m, f.Y, f.N, f.X]), I(c, g), g || (g = J(a, G(e, 83), [f.W]), I(c, g));
	   f = ie;
	   g = J(a, G(e, 88), [f.m, f.u]);
	   I(c, g)
	  }
	 },
	 I = function(a, b) {
	  b && a.push(b)
	 },
	 re = function(a, b) {
	  a = (a = (a = a.location && a.location.hash) && a.match(/google_plle=([\d,]+)/)) && a[1];
	  return !!a && -1 != a.indexOf(b)
	 },
	 J = function(a, b, c) {
	  for (var d = 0; d < c.length; d++)
	   if (re(a, c[d]))
		return c[d];
	  return Hc(c, b)
	 },
	 oe = function(a, b, c, d, e) {
	  for (var f = 0; f < e.length; f++)
	   if (re(a, e[f]))
		return e[f];
	  f = new Bc(c, c + d - 1);
	  (d = 0 >= d || d % e.length) || (b = b.j, d = !(b.start <= f.start && b.j >= f.j));
	  d ? c = null : (a = Dc(a), c = null !== a && f.start <= a && f.j >= a ? e[(a - c) % e.length] : null);
	  return c
	 };
	var se = function(a) {
	 if (!a) return "";
	 (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
	 return a
	};
	var te = function(a, b, c) {
	 var d = void 0 === d ? "" : d;
	 var e = ["<iframe"],
	  f;
	 for (f in a) a.hasOwnProperty(f) && Ib(e, f + "=" + a[f]);
	 e.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
	 e.push("></iframe>");
	 height: "+c+"
	 px;
	 margin: 0;
	 padding: 0;
	 position: relative;
	 visibility: visible;
	 width: "+b+"
	 px;
	 background - color;
	 transparent;
	 /*return['<ins id="'; a+"_expand";
	 "style="display:inline-table;',b,void 0===d?"":d,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',e.join(" "),"</ins></ins>"].join("")};*/
	 var ue = null;
	 var K = function(a, b) {
	  this.s = a;
	  this.o = b
	 };
	 K.prototype.minWidth = function() {
	  return this.s
	 };
	 K.prototype.height = function() {
	  return this.o
	 };
	 K.prototype.j = function(a) {
	  return 300 < a && 300 < this.o ? this.s : Math.min(1200, Math.round(a))
	 };
	 K.prototype.l = function(a) {
	  return this.j(a) + "x" + this.height()
	 };
	 var ve = {
	   rectangle: 1,
	   horizontal: 2,
	   vertical: 4
	  },
	  L = function(a, b, c) {
	   K.call(this, a, b);
	   this.Aa = c
	  };
	 ha(L, K);
	 var we = function(a) {
	   return function(b) {
		return !!(b.Aa & a)
	   }
	  },
	  xe = function(a, b) {
	   K.call(this, a, b)
	  };
	 ha(xe, K);
	 xe.prototype.j = function() {
	  return this.minWidth()
	 };
	 var N = [new L(970, 90, 2), new L(728, 90, 2), new L(468, 60, 2), new L(336, 280, 1), new L(320, 100, 2), new L(320, 50, 2), new L(300, 600, 4), new L(300, 250, 1), new L(250, 250, 1), new L(234, 60, 2), new L(200, 200, 1), new L(180, 150, 1), new L(160, 600, 4), new L(125, 125, 1), new L(120, 600, 4), new L(120, 240, 4)],
	  ye = [N[6], N[12], N[3], N[0], N[7], N[14], N[1], N[8], N[10], N[4], N[15], N[2], N[11], N[5], N[13], N[9]],
	  ze = new L(120, 120, 1),
	  Ae = new L(120, 50, 2);
  
	 function Be(a, b) {
	  for (var c = ["width", "height"], d = 0; d < c.length; d++) {
	   var e = "google_ad_" + c[d];
	   if (!b.hasOwnProperty(e)) {
		var f = rb(a[c[d]]);
		f = null === f ? null : Math.round(f);
		null != f && (b[e] = f)
	   }
	  }
	 }
	 var Ce = function(a, b) {
	   try {
		var c = b.document.documentElement.getBoundingClientRect(),
		 d = a.getBoundingClientRect();
		var e = {
		 x: d.left - c.left,
		 y: d.top - c.top
		}
	   } catch (f) {
		e = null
	   }
	   return (a = e) ? a.y : 0
	  },
	  De = function(a, b) {
	   do {
		var c = z(a, b);
		if (c && "fixed" == c.position) return !1
	   } while (a = a.parentElement);
	   return !0
	  },
	  Ee = function(a) {
	   var b = 0,
		c;
	   for (c in ve) - 1 != a.indexOf(c) && (b |= ve[c]);
	   return b
	  },
	  Fe = function(a, b) {
	   for (var c = F(b).clientWidth, d = 0; 100 > d && a; d++) {
		var e = z(a, b);
		if (e && "hidden" == e.overflowX && (e = rb(e.width)) && e < c) return !0;
		a = a.parentElement
	   }
	   return !1
	  },
	  Ge = function(a, b, c, d, e) {
	   e = e || {};
	   if ((tb && a.google_top_window || a.top) != a) return e.google_fwr_non_expansion_reason = 3, !1;
	   if (!(488 > F(a).clientWidth)) return e.google_fwr_non_expansion_reason = 4, !1;
	   if (!(a.innerHeight >= a.innerWidth)) return e.google_fwr_non_expansion_reason = 5, !1;
	   var f = F(a).clientWidth;
	   return !f || (f - c) / f > d ? (e.google_fwr_non_expansion_reason = 6, !1) : Fe(b.parentElement, a) ? (e.google_fwr_non_expansion_reason = 7, !1) : !0
	  },
	  He = function(a) {
	   for (var b = 0, c = 0; 100 > c && a; c++) b += a.offsetLeft + a.clientLeft - a.scrollLeft, a = a.offsetParent;
	   return b
	  },
	  Ie = function(a, b, c) {
	   return {
		ha: rb(a.paddingLeft) || 0,
		direction: a.direction,
		ba: b - c
	   }
	  },
	  Je = function(a, b, c, d, e, f) {
	   if (a = z(c, a)) {
		var g = Ie(a, e, d);
		d = g.direction;
		a = g.ha;
		g = g.ba;
		f.google_ad_resize ? c = -1 * (g + a) + "px" : (c = He(c) + a, c = "rtl" == d ? -1 * (g - c) + "px" : -1 * c + "px");
		"rtl" == d ? b.style.marginRight = c : b.style.marginLeft = c;
		b.style.width = e + "px";
		b.style.zIndex = 30
	   }
	  };
	 var Ke = function(a, b, c) {
	   if (a.style) {
		var d = rb(a.style[c]);
		if (d) return d
	   }
	   if (a = z(a, b))
		if (c = rb(a[c]))
		 return c;
	   return null
	  },
	  Le = function(a) {
	   return function(b) {
		return b.minWidth() <= a
	   }
	  },
	  Oe = function(a, b, c) {
	   var d = a && Me(c, b),
		e = Ne(b);
	   return function(a) {
		return !(d && a.height() >= e)
	   }
	  },
	  Me = function(a, b) {
	   return Ce(a, b) < F(b).clientHeight - 100
	  },
	  Pe = function(a, b) {
	   var c = Infinity;
	   do {
		var d = Ke(b, a, "height");
		d && (c = Math.min(c, d));
		(d = Ke(b, a, "maxHeight")) && (c = Math.min(c, d))
	   } while ((b = b.parentElement) && "HTML" != b.tagName);
	   return c
	  },
	  Qe = function(a, b) {
	   var c = Ke(b, a, "height");
	   if (c) return c;
	   var d = b.style.height;
	   b.style.height = "inherit";
	   c = Ke(b, a, "height");
	   b.style.height = d;
	   if (c)
		return c;
	   c = Infinity;
	   do(d = b.style && rb(b.style.height)) && (c = Math.min(c, d)), (d = Ke(b, a, "maxHeight")) && (c = Math.min(c, d));
	   while ((b = b.parentElement) && "HTML" != b.tagName);
	   return c
	  },
	  Ne = function(a) {
	   var b = a.google_unique_id;
	   return B(a, be.B) && 0 == ("number" === typeof b ? b : 0) ? 2 * F(a).clientHeight / 3 : 250
	  };
	 var Re = /^(\d+)x(\d+)(|_[a-z]*)$/,
	  Se = function(a) {
	   return B(a, "165767636")
	  };
	 var O = function(a) {
	   this.s = [];
	   this.l = a || window;
	   this.j = 0;
	   this.o = null;
	   this.D = 0
	  },
	  Te;
	 O.prototype.M = function(a, b) {
	  0 != this.j || 0 != this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.C(new Ue(a, window)))
	 };
	 O.prototype.v = function(a, b) {
	  this.s.push(new Ue(a, b || this.l));
	  Ve(this)
	 };
	 O.prototype.oa = function(a) {
	  this.j = 1;
	  if (a) {
	   var b = cd(188, wa(this.w, this, !0));
	   this.o = this.l.setTimeout(b, a)
	  }
	 };
	 O.prototype.w = function(a) {
	  a && ++this.D;
	  1 == this.j && (null != this.o && (this.l.clearTimeout(this.o), this.o = null), this.j = 0);
	  Ve(this)
	 };
	 O.prototype.qa = function() {
	  return !(!window || !Array)
	 };
	 O.prototype.na = function() {
	  return this.D
	 };
	 var Ve = function(a) {
	  var b = cd(189, wa(a.ra, a));
	  a.l.setTimeout(b, 0)
	 };
	 O.prototype.ra = function() {
	  if (0 == this.j && this.s.length) {
	   var a = this.s.shift();
	   this.j = 2;
	   var b = cd(190, wa(this.C, this, a));
	   a.j.setTimeout(b, 0);
	   Ve(this)
	  }
	 };
	 O.prototype.C = function(a) {
	  this.j = 0;
	  a.l()
	 };
	 var We = function(a) {
	   try {
		return a.sz()
	   } catch (b) {
		return !1
	   }
	  },
	  Xe = function(a) {
	   return !!a && ("object" === typeof a || "function" === typeof a) && We(a) && Hb(a.nq) && Hb(a.nqa) && Hb(a.al) && Hb(a.rl)
	  },
	  Ye = function() {
	   if (Te && We(Te)) return Te;
	   var a = hd(),
		b = a.google_jobrunner;
	   return Xe(b) ? Te = b : a.google_jobrunner = Te = new O(a)
	  },
	  Ze = function(a, b) {
	   Ye().nq(a, b)
	  },
	  $e = function(a, b) {
	   Ye().nqa(a, b)
	  };
	 O.prototype.nq = O.prototype.M;
	 O.prototype.nqa = O.prototype.v;
	 O.prototype.al = O.prototype.oa;
	 O.prototype.rl = O.prototype.w;
	 O.prototype.sz = O.prototype.qa;
	 O.prototype.tc = O.prototype.na;
	 var Ue = function(a, b) {
	  this.l = a;
	  this.j = b
	 };
	 var af = function(a) {
	   return function(b) {
		for (var c = a.length - 1; 0 <= c; --c)
		 if (!a[c](b)) return !1;
		return !0
	   }
	  },
	  bf = function(a, b, c) {
	   for (var d = a.length, e = null, f = 0; f < d; ++f) {
		var g = a[f];
		if (b(g)) {
		 if (!c || c(g))
		  return g;
		 null === e && (e = g)
		}
	   }
	   return e
	  };
	 var cf = function(a, b) {
	  this.va = a;
	  this.R = b
	 };
	 var P = function(a) {
	  a = void 0 === a ? "" : a;
	  var b = Error.call(this);
	  this.message = b.message;
	  "stack" in b && (this.stack = b.stack);
	  this.name = "TagError";
	  this.message = a ? "adsbygoogle.push() error: " + a : "";
	  Error.captureStackTrace ? Error.captureStackTrace(this, P) : this.stack = Error().stack || ""
	 };
	 ha(P, Error);
	 var df = function(a) {
	  return 0 == (a.error && a.meta && a.id ? a.msg || Sc(a.error) : Sc(a)).indexOf("TagError")
	 };
	 var ef = function() {
	  return !(v("iPad") || v("Android") && !v("Mobile") || v("Silk")) && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
	 };
	 var hf = function(a, b, c, d, e) {
	   16 == e.google_reactive_ad_format && (d.height = "");
	   var f = a;
	   a = bd(247, dd, function() {
		var f = a;
		var h = ff(f, b, c, d, e);
		if (h != f) {
		 var k = d.parentElement;
		 k && (e.gfwroml = d.style.marginLeft, e.gfwromr = d.style.marginRight, e.gfwrow = d.style.width, e.gfwroz = d.style.zIndex, Je(c, d, k, f, h, e), f = h)
		}
		return f
	   });
	   return gf(a, b, c, d, e, f != a)
	  },
	  ff = function(a, b, c, d, e) {
	   e.google_full_width_responsive_allowed = !1;
	   if ("false" == e.google_full_width_responsive && !jf(c))
		return e.google_fwr_non_expansion_reason = 1, a;
	   if (!("auto" == b || 0 < (Ee(b) & 3) && (jf(c) || B(c, Pd.u) || B(c, Pd.m))) && 1 != e.google_ad_resize) return e.google_fwr_non_expansion_reason = 2, a;
	   if (!Ge(c, d, a, .3, e))
		return a;
	   var f = F(c).clientWidth,
		g = f - a;
	   if (!f || 5 > g) return e.google_fwr_non_expansion_reason = f ? -10 > g ? 11 : 0 > g ? 14 : 0 == g ? 13 : 12 : 10, a;
	   if (!kf(d, c, e))
		return e.google_fwr_non_expansion_reason = 9, a;
	   e.google_full_width_responsive_allowed = !0;
	   return "auto" == b || 0 < (Ee(b) & 3) && (jf(c) || B(c, Pd.u)) ? f : (e.google_fwr_non_expansion_reason = 15, a)
	  },
	  gf = function(a, b, c, d, e, f) {
	   var g = "auto" == b ? .25 >= a / Math.min(1200, F(c).clientWidth) ? 4 : 3 : Ee(b);
	   e.google_responsive_formats = g;
	   var h = ef() && !Me(d, c) && kf(d, c, e),
		k = ef() && Me(d, c) && (B(c, be.B) || B(c, be.m)) && kf(d, c, e) && B(c, be.B),
		m = (h ? ye : N).slice(0);
	   m = Ua(m, lf(c));
	   var n = 488 > F(c).clientWidth;
	   n = [Le(a), mf(n), Oe(n, c, d), we(g)];
	   var x = [];
	   if (h || k) {
		var r = h ? Pe(c, d) : Qe(c, d);
		x.push(function(a) {
		 return a.height() <= r
		})
	   }
	   var p = bf(m, af(n), af(x));
	   if (!p) throw new P("No slot size for availableWidth=" + a);
	   p = bd(248, dd, function() {
		a: {
		 var b = p;
		 if (f) {
		  if (e.gfwrnh) {
		   var g = rb(e.gfwrnh);
		   if (g) {
			b = new xe(a, g);
			break a
		   }
		  }
		  if (Me(d, c)) b = new xe(a, b.height());
		  else {
		   b = a / 1.2;
		   g = Pe(c, d);
		   g = Math.min(b, g);
		   if (g < .5 * b || 100 > g) g = b;
		   b = new xe(a, Math.floor(g))
		  }
		 }
		}
		return b
	   });
	   return new cf(nf(b, g), p)
	  },
	  kf = function(a, b, c) {
	   var d = c.google_safe_for_responsive_override;
	   return null != d ? d : c.google_safe_for_responsive_override = De(a, b)
	  },
	  nf = function(a, b) {
	   if ("auto" == a) return 1;
	   switch (b) {
		case 2:
		 return 2;
		case 1:
		 return 3;
		case 4:
		 return 4;
		case 3:
		 return 5;
		case 6:
		 return 6;
		case 5:
		 return 7;
		case 7:
		 return 8
	   }
	   throw Error("bad mask");
	  },
	  mf = function(a) {
	   return function(b) {
		return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
	   }
	  },
	  jf = function(a) {
	   return a.location && "#google_full_width_responsive_preview" == a.location.hash
	  },
	  lf = function(a) {
	   var b = [],
		c = B(a, fe.F);
	   (B(a, fe.G) || c) && b.push(ze);
	   (B(a, fe.H) || c) && b.push(Ae);
	   return b
	  };
	 var of = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
	  Q = {},
	  pf = (Q.image_stacked = 1 / 1.91, Q.image_sidebyside = 1 / 3.82, Q.mobile_banner_image_sidebyside = 1 / 3.82, Q.pub_control_image_stacked = 1 / 1.91, Q.pub_control_image_sidebyside = 1 / 3.82, Q.pub_control_image_card_stacked = 1 / 1.91, Q.pub_control_image_card_sidebyside = 1 / 3.74, Q.pub_control_text = 0, Q.pub_control_text_card = 0, Q),
	  R = {},
	  qf = (R.image_stacked = 80, R.image_sidebyside = 0, R.mobile_banner_image_sidebyside = 0, R.pub_control_image_stacked = 80, R.pub_control_image_sidebyside = 0, R.pub_control_image_card_stacked = 85, R.pub_control_image_card_sidebyside = 0, R.pub_control_text = 80, R.pub_control_text_card = 80, R),
	  rf = {},
	  tf = (rf.pub_control_image_stacked = 100, rf.pub_control_image_sidebyside = 200, rf.pub_control_image_card_stacked = 150, rf.pub_control_image_card_sidebyside = 250, rf.pub_control_text = 100, rf.pub_control_text_card = 150, rf),
	  S = function(a, b) {
	   K.call(this, a, b)
	  };
	 ha(S, K);
	 S.prototype.j = function(a) {
	  return Math.min(1200, Math.round(a))
	 };
	 var uf = function(a) {
	  var b = 0;
	  Gb(of, function(c) {
	   null != a[c] && ++b
	  });
	  if (0 === b) return !1;
	  if (b === of.length) return !0;
	  throw new P("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
	 };
  
	 function T(a) {
	  return new cf(9, a)
	 }
  
	 function vf(a) {
	  return 1200 <= a ? new S(1200, 600) : 850 <= a ? new S(a, Math.floor(.5 * a)) : 550 <= a ? new S(a, Math.floor(.6 * a)) : 468 <= a ? new S(a, Math.floor(.7 * a)) : new S(a, Math.floor(3.44 * a))
	 }
  
	 function wf(a) {
	  return a.google_content_recommendation_ui_type && a.google_content_recommendation_columns_num && a.google_content_recommendation_rows_num
	 }
	 var Af = function(a, b) {
	   xf(a, b);
	   if (wf(b))
		return yf(a, b);
	   if (a < Ga) {
		if (ef()) return U(b, "mobile_banner_image_sidebyside", 1, 12), T(zf(a, b));
		U(b, "image_sidebyside", 1, 13);
		return T(vf(a))
	   }
	   U(b, "image_stacked", 4, 2);
	   return T(vf(a))
	  },
	  yf = function(a, b) {
	   xf(a, b);
	   var c = b.google_content_recommendation_ui_type.split(","),
		d = b.google_content_recommendation_columns_num.split(","),
		e = b.google_content_recommendation_rows_num.split(",");
	   a: {
		if (c.length == d.length && d.length == e.length) {
		 if (1 == c.length) {
		  var f = 0;
		  break a
		 }
		 if (2 == c.length) {
		  f = a < Ga ? 0 : 1;
		  break a
		 }
		 throw new P("The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + c.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'));
		}
		if (c.length != d.length) throw new P('The parameter length of data-matched-content-ui-type does not match data-matched-content-columns-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
		throw new P('The parameter length of data-matched-content-columns-num does not match data-matched-content-rows-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
	   }
	   c = c[f];
	   c = 0 == c.lastIndexOf("pub_control_", 0) ? c : "pub_control_" + c;
	   d = +d[f];
	   for (var g = tf[c], h = d; a / h < g && 1 < h;) h--;
	   h !== d && l.console && l.console.warn("adsbygoogle warning: data-matched-content-columns-num " + d + " is too large. We override it to " + h + ".");
	   d = h;
	   e = +e[f];
	   U(b, c, d, e);
	   if (Number.isNaN(d) || 0 === d) throw new P("Wrong value for data-matched-content-columns-num");
	   if (Number.isNaN(e) || 0 === e) throw new P("Wrong value for data-matched-content-rows-num");
	   b = Math.floor(((a - 8 * d - 8) / d * pf[c] + qf[c]) * e + 8 * e + 8);
	   if (1500 < a) throw new P("Calculated slot width is too large: " + a);
	   if (1500 < b) throw new P("Calculated slot height is too large: " + b);
	   return T(new S(a, b))
	  };
  
	 function zf(a, b) {
	  var c = +b.google_content_recommendation_columns_num;
	  c = (a - 8 * c - 8) / c;
	  var d = b.google_content_recommendation_ui_type;
	  b = b.google_content_recommendation_rows_num - 1;
	  return new S(a, Math.floor(c / 1.91 + 70) + Math.floor((c * pf[d] + qf[d]) * b + 8 * b + 8))
	 }
  
	 function xf(a, b) {
	  if (0 >= a) throw new P("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
	 }
  
	 function U(a, b, c, d) {
	  a.google_content_recommendation_ui_type = b;
	  a.google_content_recommendation_columns_num = c;
	  a.google_content_recommendation_rows_num = d
	 };
	 var Bf = {
	   "image-top": function(a) {
		return 600 >= a ? 284 + .414 * (a - 250) : 429
	   },
	   "image-middle": function(a) {
		return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
	   },
	   "image-side": function(a) {
		return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
	   },
	   "text-only": function(a) {
		return 500 >= a ? 187 - .228 * (a - 250) : 130
	   },
	   "in-article": function(a) {
		return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
	   }
	  },
	  Cf = function(a, b) {
	   K.call(this, a, b)
	  };
	 ha(Cf, K);
	 Cf.prototype.j = function() {
	  return Math.min(1200, this.minWidth())
	 };
	 var V = function(a, b) {
	  K.call(this, a, b)
	 };
	 ha(V, K);
	 V.prototype.j = function() {
	  return this.minWidth()
	 };
	 V.prototype.l = function(a) {
	  return K.prototype.l.call(this, a) + "_0ads_al"
	 };
	 var Df = [new V(728, 15), new V(468, 15), new V(200, 90), new V(180, 90), new V(160, 90), new V(120, 90)];
	 var Ef = function(a, b) {
	   var c = b.google_ad_format;
	   if ("autorelaxed" == c) return A(a, Sd.u) ? 6 : A(a, Td.u) ? 7 : A(a, Ud.u) ? 14 : uf(b) ? 9 : 5;
	   if ("auto" == c || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(c))
		return 1;
	   if ("link" == c) return 4;
	   if ("fluid" == c) return 8
	  },
	  Ff = function(a, b, c, d, e) {
	   var f = d.google_ad_height || Ke(c, e, "height");
	   switch (a) {
		case 5:
		 return xf(b, d), b < Ga ? ef() ? (U(d, "mobile_banner_image_sidebyside", 1, 12), e = T(zf(b, d))) : (U(d, "image_sidebyside", 1, 13), e = T(vf(b))) : (U(d, "image_stacked", 4, 2), e = T(vf(b))), e;
		case 6:
		 return Af(b, d);
		case 7:
		 return xf(b, d), wf(d) ? e = yf(b, d) : b < Ga ? (U(d, "image_sidebyside", 1, 13), e = T(zf(b, d))) : (U(d, "image_stacked", 4, 2), e = T(vf(b))), e;
		case 14:
		 return xf(b, d), wf(d) ? e = yf(b, d) : (b < Ga ? U(d, "image_sidebyside", 1, 11) : U(d, "image_stacked", 4, 2), e = T(vf(b))), e;
		case 9:
		 return yf(b, d);
		case 4:
		 d = Qe(e, c);
		 e = A(e, Vd.V) ? 250 : 190;
		 c = 90;
		 e = void 0 === e ? 130 : e;
		 c = void 0 === c ? 30 : c;
		 a = bf(Df, Le(b));
		 if (!a) throw new P("No link unit size for width=" + b + "px");
		 b = Math.min(b, 1200);
		 a = a.height();
		 d = Math.max(a, d);
		 b = (new cf(10, new V(b, Math.min(d, 15 == a ? c : e)))).R;
		 e = b.minWidth();
		 b = b.height();
		 15 <= f && (b = f);
		 return new cf(10, new V(e, b));
		case 8:
		 a: {
		  a = b;b = d.google_ad_layout || "image-top";
		  if ("in-article" == b && "false" != d.google_full_width_responsive && (B(e, Rd.J) || B(e, Rd.K) || B(e, Rd.m)) && Ge(e, c, a, .2, d)) {
		   var g = F(e).clientWidth;
		   if (g && (d.google_full_width_responsive_allowed = !0, !B(e, Rd.m))) {
			var h = c.parentElement;
			h && (Je(e, c, h, a, g, d), a = g)
		   }
		  }
		  if (250 > a) throw new P("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);e = Math.min(1200, Math.floor(a));
		  if (f && "in-article" != b) {
		   f = Math.ceil(f);
		   if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
		   e = new cf(11, new K(e, f))
		  } else {
		   if ("in-article" != b && (f = d.google_ad_layout_key)) {
			f = "" + f;
			b = Math.pow(10, 3);
			if (c = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length) {
			 a = [];
			 for (g = 0; g < c; g++) a.push(parseInt(d[g], 36) / b);
			 b = a
			} else b = null;
			if (!b) throw new P("Invalid data-ad-layout-key value: " + f);
			f = (e + -725) / 1E3;
			d = 0;
			c = 1;
			a = b.length;
			for (g = 0; g < a; g++) d += b[g] * c, c *= f;
			f = Math.ceil(1E3 * d - -725 + 10);
			if (isNaN(f)) throw new P("Invalid height: height=" + f);
			if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
			if (1200 < f) throw new P("Fluid responsive ads must be at most 1200px tall: height=" + f);
			e = new cf(11, new K(e, f));
			break a
		   }
		   f = Bf[b];
		   if (!f) throw new P("Invalid data-ad-layout value: " + b);
		   f = Math.ceil(f(e));
		   e = new cf(11, "in-article" == b ? new Cf(e, f) : new K(e, f))
		  }
		 }
		 return e
	   }
	  };
	 var Gf = function(a, b) {
	  var c = Pb(b);
	  if (c) {
	   c = F(c).clientWidth;
	   var d = z(a, b) || {},
		e = d.direction;
	   if ("0px" === d.width && "none" != d.cssFloat) return -1;
	   if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
	   if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
	  }
	  return -1
	 };
	 var Hf = function(a, b, c) {
	  c || (c = wb ? "https" : "http");
	  l.location && "https:" == l.location.protocol && "http" == c && (c = "https");
	  return [c, "://", a, b].join("")
	 };
	 var Jf = function(a) {
	  var b = this;
	  this.j = a;
	  a.google_iframe_oncopy || (a.google_iframe_oncopy = {
	   handlers: {},
	   upd: function(a, d) {
		var c = If("rx", a);
		a: {
		 if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
		  a = a[1];
		  break a
		 }
		 a = ""
		}
		a = (new Date).getTime() - a;
		c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
		b.set(d, c);
		return c
	   }
	  });
	  this.l = a.google_iframe_oncopy
	 };
	 Jf.prototype.set = function(a, b) {
	  var c = this;
	  this.l.handlers[a] = b;
	  this.j.addEventListener && this.j.addEventListener("load", function() {
	   var b = c.j.document.getElementById(a);
	   try {
		var e = b.contentWindow.document;
		if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
	   } catch (f) {}
	  }, !1)
	 };
	 var If = function(a, b) {
	   var c = new RegExp("\\b" + a + "=(\\d+)"),
		d = c.exec(b);
	   d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
	   return b
	  },
	  Kf = Pa("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;
	   try {
		d = w.document
	   } catch (e) {}
	   if (h && d && (!d.body || !d.body.firstChild)) {
		if (h.call) {
		 setTimeout(h, 0)
		} else if (h.match) {
		 try {
		  h = s.upd(h, i)
		 } catch (e) {}
		 w.location.replace(h)
		}
	   }
	   ");var Lf={'"
	   ':'\\
	   "',"\\
	   ":"\\\\
	   "," / ":"\\ / ","\
	   b ":"\\
	   b ","\
	   f ":"\\
	   f ","\
	   n ":"\\
	   n ","\
	   r ":"\\
	   r ","\
	   t ":"\\
	   t ","\
	   x0B ":"\\
	   u000b "},Mf=/\uffff/.test("\
	   uffff ")?/[\\"\
	   x00 - \x1f\ x7f - \uffff] / g: /[\\"\x00-\x1f\x7f-\xff]/g,
	  Nf = function() {},
	  Pf = function(a, b, c) {
	   switch (typeof b) {
		case "string":
		 Of(b, c);
		 break;
		case "number":
		 c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
		 break;
		case "boolean":
		 c.push(String(b));
		 break;
		case "undefined":
		 c.push("null");
		 break;
		case "object":
		 if (null == b) {
		  c.push("null");
		  break
		 }
		 if (b instanceof Array || void 0 != b.length && b.splice) {
		  var d = b.length;
		  c.push("[");
		  for (var e = "", f = 0; f < d; f++) c.push(e), Pf(a, b[f], c), e = ",";
		  c.push("]");
		  break
		 }
		 c.push("{");
		 d = "";
		 for (e in b) b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), Of(e, c), c.push(":"), Pf(a, f, c), d = ","));
		 c.push("}");
		 break;
		case "function":
		 break;
		default:
		 throw Error("Unknown type: " + typeof b);
	   }
	  },
	  Of = function(a, b) {
	   b.push('"');
	   b.push(a.replace(Mf, function(a) {
		if (a in Lf) return Lf[a];
		var b = a.charCodeAt(0),
		 c = "\\u";
		16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
		return Lf[a] = c + b.toString(16)
	   }));
	   b.push('"')
	  };
	 var Qf = {},
	  Rf = (Qf.google_ad_modifications = !0, Qf.google_analytics_domain_name = !0, Qf.google_analytics_uacct = !0, Qf),
	  Sf = function(a) {
	   try {
		if (l.JSON && l.JSON.stringify && l.encodeURIComponent) {
		 var b = function() {
		  return this
		 };
		 if (Object.prototype.hasOwnProperty("toJSON")) {
		  var c = Object.prototype.toJSON;
		  Object.prototype.toJSON = b
		 }
		 if (Array.prototype.hasOwnProperty("toJSON")) {
		  var d = Array.prototype.toJSON;
		  Array.prototype.toJSON = b
		 }
		 var e = l.encodeURIComponent(l.JSON.stringify(a));
		 try {
		  var f = Wb ? l.btoa(e) : Xb(Sb(e), void 0)
		 } catch (g) {
		  f = "#" + Xb(Sb(e), !0)
		 }
		 c && (Object.prototype.toJSON = c);
		 d && (Array.prototype.toJSON = d);
		 return f
		}
	   } catch (g) {
		E.j(237, g, void 0, void 0)
	   }
	   return ""
	  },
	  Tf = function(a) {
	   a.google_page_url && (a.google_page_url = String(a.google_page_url));
	   var b = [];
	   Gb(a, function(a, d) {
		if (null != a) {
		 try {
		  var c = [];
		  Pf(new Nf, a, c);
		  var f = c.join("")
		 } catch (g) {}
		 f && (f = f.replace(/\//g, "\\$&"), Ib(b, d, "=", f, ";"))
		}
	   });
	   return b.join("")
	  };
	 var Wf = function() {
	   var a = l;
	   this.l = a = void 0 === a ? l : a;
	   this.v = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
	   this.j = 2;
	   this.o = [];
	   this.s = !1;
	   a: {
		a = ib(!1, 50);
		b: {
		 try {
		  var b = l.parent;
		  if (b && b != l) {
		   var c = b;
		   break b
		  }
		 } catch (g) {}
		 c = null
		}
		c && a.unshift(c);a.unshift(l);
		var d;
		for (c = 0; c < a.length; ++c) t
		ry {
		 var e = a[c],
		  f = Uf(e);
		 if (f) {
		  this.j = Vf(f);
		  if (2 != this.j)
		   break a;
		  !d && w(e) && (d = e)
		 }
		} catch (g) {}
		this.l = d || this.l
	   }
	  },
	  Yf = function(a) {
	   if (2 != Xf(a)) {
		for (var b = 1 == Xf(a), c = 0; c < a.o.length; c++) try {
		 a.o[c](b)
		} catch (d) {}
		a.o = []
	   }
	  },
	  Zf = function(a) {
	   var b = Uf(a.l);
	   b && 2 == a.j && (a.j = Vf(b))
	  },
	  Xf = function(a) {
	   Zf(a);
	   return a.j
	  },
	  ag = function(a) {
	   var b = $f;
	   b.o.push(a);
	   if (2 != b.j) Yf(b);
	   else if (b.s || (Ab(b.l, "message", function(a) {
		 var c = Uf(b.l);
		 if (c && a.source == c && 2 == b.j) {
		  switch (a.data) {
		   case "3p_cookie_yes":
			b.j = 1;
			break;
		   case "3p_cookie_no":
			b.j = 0
		  }
		  Yf(b)
		 }
		}), b.s = !0), Uf(b.l)) Yf(b);
	   else {
		a = b.l.document.createElement("iframe");
		a.src = b.v;
		a.name = "detect_3p_cookie";
		a.style.visibility = "hidden";
		a.style.height = "0";
		a.onload = function() {
		 Zf(b);
		 Yf(b)
		};
		try {
		 b.l.document.body.appendChild(a)
		} catch (c) {}
	   }
	  },
	  bg = function(a, b) {
	   try {
		return !!a.frames[b]
	   } catch (c) {
		return !1
	   }
	  },
	  Uf = function(a) {
	   return a.frames[hb("detect_3p_cookie")] || null
	  },
	  Vf = function(a) {
	   return bg(a, "3p_cookie_yes") ? 1 : bg(a, "3p_cookie_no") ? 0 : 2
	  };
	 var cg = function(a, b) {
	  var c = "script";
	  c = void 0 === c ? "" : c;
	  var d = a.createElement("link");
	  d.rel = "preload";
	  b instanceof Xa ? b = Ya(b) : b instanceof $a ? b instanceof $a && b.constructor === $a && b.sa === Za ? b = b.P : (q(b), b = "type_error:SafeUrl") : (b instanceof $a || (b = b.ea ? b.O() : String(b), ab.test(b) || (b = "about:invalid#zClosurez"), b = bb(b)), b = b.O());
	  d.href = b;
	  c && (d.as = c);
	  (a = a.getElementsByTagName("head")[0]) && a.appendChild(d)
	 };
	 var dg = /^\.google\.(com?\.)?[a-z]{2,3}$/,
	  eg = /\.(cn|com\.bi|do|sl)$/,
	  fg = function(a) {
	   return dg.test(a) && !eg.test(a)
	  },
	  gg = l,
	  $f, hg = function(a) {
	   a = "https://" + ("adservice" + a + "/adsid/integrator.js");
	   var b = ["domain=" + encodeURIComponent(l.location.hostname)];
	   W[3] >= +new Date && b.push("adsid=" + encodeURIComponent(W[1]));
	   return a + "?" + b.join("&")
	  },
	  W, X, ig = function() {
	   gg = l;
	   W = gg.googleToken = gg.googleToken || {};
	   var a = +new Date;
	   W[1] && W[3] > a && 0 < W[2] || (W[1] = "", W[2] = -1, W[3] = -1, W[4] = "", W[6] = "");
	   X = gg.googleIMState = gg.googleIMState || {};
	   fg(X[1]) || (X[1] = ".google.com");
	   "array" == q(X[5]) || (X[5] = []);
	   "boolean" == typeof X[6] || (X[6] = !1);
	   "array" == q(X[7]) || (X[7] = []);
	   ra(X[8]) || (X[8] = 0)
	  },
	  Y = {
	   da: function() {
		return 0 < X[8]
	   },
	   xa: function() {
		X[8]++
	   },
	   ya: function() {
		0 < X[8] && X[8]--
	   },
	   za: function() {
		X[8] = 0
	   },
	   Ea: function() {
		return !1
	   },
	   ca: function() {
		return X[5]
	   },
	   aa: function(a) {
		try {
		 a()
		} catch (b) {
		 l.setTimeout(function() {
		  throw b;
		 }, 0)
		}
	   },
	   ja: function() {
		if (!Y.da()) {
		 var a = l.document,
		  b = function(b) {
		   var c = hg(b);
		   cg(a, c);
		   b = a.createElement("script");
		   b.type = "text/javascript";
		   b.onerror = function() {
			return l.processGoogleToken({}, 2)
		   };
		   c = gb(c);
		   b.src = Ya(c);
		   try {
			(a.head || a.body || a.documentElement).appendChild(b), Y.xa()
		   } catch (g) {}
		  },
		  c = X[1];
		 b(c);
		 ".google.com" != c && b(".google.com");
		 b = {};
		 var d = (b.newToken = "FBT", b);
		 l.setTimeout(function() {
		  return l.processGoogleToken(d, 1)
		 }, 1E3)
		}
	   }
	  },
	  jg = function(a) {
	   ig();
	   var b = gg.googleToken[5] || 0;
	   a && (0 != b || W[3] >= +new Date ? Y.aa(a) : (Y.ca().push(a), Y.ja()));
	   W[3] >= +new Date && W[2] >= +new Date || Y.ja()
	  },
	  kg = function(a) {
	   l.processGoogleToken = l.processGoogleToken || function(a, c) {
		var b = a;
		b = void 0 === b ? {} : b;
		c = void 0 === c ? 0 : c;
		a = b.newToken || "";
		var e = parseInt(b.freshLifetimeSecs || "", 10) || 3600,
		 f = parseInt(b.validLifetimeSecs || "", 10) || 86400,
		 g = b["1p_jar"] || "";
		b = b.pucrd || "";
		ig();
		1 == c ? Y.za() : Y.ya();
		var h = gg.googleToken = gg.googleToken || {},
		 k = !(W[3] >= +new Date) && 0 != c;
		if (0 == c && a && qa(a) && 0 < e && 0 < f && qa(g) || k) k = +new Date, e = k + 1E3 * e, f = k + 1E3 * f, 1E-5 > Math.random() && Eb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), h[5] = c, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = b, ig();
		if (a || !Y.da()) {
		 c = Y.ca();
		 for (a = 0; a < c.length; a++) Y.aa(c[a]);
		 c.length = 0
		}
	   };
	   jg(a)
	  },
	  lg = function(a) {
	   $f = $f || new Wf;
	   ag(function(b) {
		b && a()
	   })
	  };
	 var Z = hb("script"),
	  og = function() {
	   var a = A(u, H.I);
	   (A(u, H.u) || A(u, H.L) || a) && !u.google_sa_queue && (u.google_sa_queue = [], u.google_sl_win = u, u.google_sailm = !0, u.google_process_slots = function() {
		return mg(u)
	   }, a = a ? ng() : ng("/show_ads_impl_single_load.js"), jb(u.document, a))
	  },
	  mg = cd(215, function(a) {
	   var b = a.google_sa_queue,
		c = b.shift();
	   "function" == q(c) && bd(216, dd, c);
	   b.length && a.setTimeout(xa(mg, a), 0)
	  }),
	  pg = function(a) {
	   return ["<", Z, ' src="', ng(void 0 === a ? "/show_ads_impl.js" : a), '"></', Z, ">"].join("")
	  },
	  ng = function(a) {
	   a = void 0 === a ? "/show_ads_impl.js" : a;
	   var b = vb ? "https" : "http";
	   a: {
		if (tb) try {
		 var c = u.google_cafe_host || u.top.google_cafe_host;
		 if (c) {
		  var d = c;
		  break a
		 }
		} catch (e) {}
		d = Fa("", "pagead2.googlesyndication.com")
	   }
	   return Hf(d, ["/pagead/js/", sb(), "/r20170110", a, ""].join(""), b)
	  },
	  qg = function(a, b, c, d) {
	   return function() {
		var e = !1;
		d && Ye().al(3E4);
		try {
		 var f = a.document.getElementById(b).contentWindow;
		 if (w(f)) {
		  var g = a.document.getElementById(b).contentWindow,
		   h = g.document;
		  h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), g.google_async_iframe_close = !0, h.write(c))
		 } else {
		  var k = a.document.getElementById(b).contentWindow;
		  f = c;
		  f = String(f);
		  g = ['"'];
		  for (h = 0; h < f.length; h++) {
		   var m = f.charAt(h),
			n = m.charCodeAt(0),
			x = h + 1,
			r;
		   if (!(r = Qa[m])) {
			if (31 < n && 127 > n) var p = m;
			else {
			 var y = void 0,
			  D = m;
			 if (D in Ra) p = Ra[D];
			 else if (D in Qa) p = Ra[D] = Qa[D];
			 else {
			  var M = D.charCodeAt(0);
			  if (31 < M && 127 > M) y = D;
			  else {
			   if (256 > M) {
				if (y = "\\x", 16 > M || 256 < M) y += "0"
			   } else y = "\\u", 4096 > M && (y += "0");
			   y += M.toString(16).toUpperCase()
			  }
			  p = Ra[D] = y
			 }
			}
			r = p
		   }
		   g[x] = r
		  }
		  g.push('"');
		  k.location.replace("javascript:" + g.join(""))
		 }
		 e = !0
		} catch (sf) {
		 k = hd().google_jobrunner, Xe(k) && k.rl()
		}
		e && (e = If("google_async_rrc", c), (new Jf(a)).set(b, qg(a, b, e, !1)))
	   }
	  },
	  rg = function(a) {
	   var b = ["<iframe"];
	   Gb(a, function(a, d) {
		null != a && b.push(" " + d + '="' + Pa(a) + '"')
	   });
	   b.push("></iframe>");
	   return b.join("")
	  },
	  tg = function(a, b, c) {
	   sg(a, b, c, function(a, b, f) {
		a = a.document;
		for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
		b.id = d;
		b.name = d;
		d = Number(f.google_ad_width);
		e = Number(f.google_ad_height);
		16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = te(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = te(b, d, e), c.innerHTML = f);
		return b.id
	   })
	  },
	  sg = function(a, b, c, d) {
	   var e = {},
		f = b.google_ad_height;
	   e.width = '"' + b.google_ad_width + '"';
	   e.height = '"' + f + '"';
	   e.frameborder = '"0"';
	   e.marginwidth = '"0"';
	   e.marginheight = '"0"';
	   e.vspace = '"0"';
	   e.hspace = '"0"';
	   e.allowtransparency = '"true"';
	   e.scrolling = '"no"';
	   e.allowfullscreen = '"true"';
	   e.onload = '"' + Kf + '"';
	   d = d(a, e, b);
	   f = b.google_ad_output;
	   (e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
	   f = !b.google_ad_slot || b.google_override_format || !Ba[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
	   e && f ? e = e.toLowerCase() : e = "";
	   b.google_ad_format = e;
	   if (!ra(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
		e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
		f = [];
		for (var g = 0, h = c; h && 25 > g; h = h.parentNode, ++g) f.push(9 !== h.nodeType && h.id || "");
		(f = f.join()) && e.push(f);
		b.google_ad_unit_key = mb(e.join(":")).toString();
		e = [];
		for (f = 0; c && 25 > f; ++f) {
		 g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
		 a: {
		  if (c && c.nodeName && c.parentElement) {
		   h = c.nodeName.toString().toLowerCase();
		   for (var k = c.parentElement.childNodes, m = 0, n = 0; n < k.length; ++n) {
			var x = k[n];
			if (x.nodeName && x.nodeName.toString().toLowerCase() === h) {
			 if (c === x) {
			  h = "." + m;
			  break a
			 }++m
			}
		   }
		  }
		  h = ""
		 }
		 e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
		 c = c.parentElement
		}
		c = e.join() + ":";
		e = a;
		f = [];
		if (e) try {
		 var r = e.parent;
		 for (g = 0; r && r !== e && 25 > g; ++g) {
		  var p = r.frames;
		  for (h = 0; h < p.length; ++h)
		   if (e === p[h]) {
			f.push(h);
			break
		   }
		  e = r;
		  r = e.parent
		 }
		} catch (D) {}
		b.google_ad_dom_fingerprint = mb(c + f.join()).toString()
	   }
	   r = Tf(b);
	   p = Sf(b);
	   var y;
	   b = b.google_ad_client;
	   if (!ue) b: {
		c = ib();
		for (e = 0; e < c.length; e++) try {
		 if (y = c[e].frames.google_esf) {
		  ue = y;
		  break b
		 }
		} catch (D) {}
		ue = null
	   }
	   ue ? y = "" : (y = {
		style: "display:none"
	   }, /[^a-z0-9-]/.test(b) ? y = "" : (y["data-ad-client"] = se(b), y.id = "google_esf", y.name = "google_esf", y.src = Hf(Fa("", "googleads.g.doubleclick.net"), ["/pagead/html/", sb(), "/r20170110/zrt_lookup.html#"].join("")), y = rg(y)));
	   b = y;
	   y = A(a, H.u) || A(a, H.L) || A(a, H.I);
	   c = A(a, H.I) || A(a, de.u);
	   e = za;
	   f = (new Date).getTime();
	   a.google_t12n_vars = Kd;
	   g = a;
	   g = Db(Cb(g)) || g;
	   g = g.google_unique_id;
	   A(a, de.u) ? (h = "<" + Z + ">window.google_process_slots=function(){window.google_sa_impl({iframeWin: window, pubWin: window.parent});" + ("};</" + Z + ">"), k = pg(), h += k) : h = A(a, H.m) ? pg("/show_ads_impl.js?" + H.m) : A(a, H.u) || A(a, H.L) ? "<" + Z + ">window.parent.google_sa_impl.call(" + ("this, window, document, location);</" + Z + ">") : A(a, H.I) ? "<" + Z + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent});</" + Z + ">" : A(a, ge.u) ? pg("/show_ads_impl_le.js") : A(a, ge.m) ? pg("/show_ads_impl_le_c.js") : pg();
	   r = ["<!doctype html><html><body>", b, "<" + Z + ">", r, "google_sailm=" + c + ";", y ? "google_sl_win=window.parent;" : "", "google_unique_id=" + ("number" === typeof g ? g : 0) + ";", 'google_async_iframe_id="' + d + '";', "google_start_time=" + e + ";", p ? 'google_pub_vars="' + p + '";' : "", "google_bpp=" + (f > e ? f - e : 1) + ";", "google_async_rrc=0;google_iframe_start_time=new Date().getTime();", "</" + Z + ">", h, "</body></html>"].join("");
	   b = a.document.getElementById(d) ? Ze : $e;
	   d = qg(a, d, r, !0);
	   y ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : b(d)
	  },
	  ug = function(a, b) {
	   var c = navigator;
	   a && b && c && (a = a.document, b = se(b), /[^a-z0-9-]/.test(b) || ((c = Ha("r20160913")) && (c += "/"), jb(a, Hf("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
	  };
	 var vg = function(a, b, c) {
	  for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
	   var g = d[f];
	   if (/data-/.test(g.name)) {
		var h = Ha(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
		if (!b.hasOwnProperty(h)) {
		 g = g.value;
		 var k = {};
		 k = (k.google_reactive_ad_format = Da, k.google_allow_expandable_ads = qb, k);
		 g = k.hasOwnProperty(h) ? k[h](g, null) : g;
		 null === g || (b[h] = g)
		}
	   }
	  }
	  if ((A(c, Zd.m) || A(c, Zd.VIEWPORT) && c.document && c.document.body) && !Ef(c, b) && (e = parseInt(a.style.width, 10), f = Gf(a, c), 0 < f && e > f))
	   if (d = parseInt(a.style.height, 10), e = !!Ba[e + "x" + d], A(c, Zd.VIEWPORT)) {
		h = f;
		if (e)
		 if (g = Ca(f, d)) h = g, b.google_ad_format = g + "x" + d + "_0ads_al";
		 else throw Error("TSS=" + f);
		b.google_ad_resize = 1;
		b.google_ad_width = h;
		e || (b.google_ad_format = null, b.google_override_format = !0);
		f = h;
		a.style.width = f + "px";
		d = hf(f, "auto", c, a, b).R;
		b.google_responsive_formats = null;
		d.minWidth() > f && !e && (b.google_ad_width = d.minWidth(), a.style.width = d.minWidth() + "px")
	   } else A(c, Zd.m) && (b.google_ad_resize = 0);
	  d = b.google_reactive_ad_format;
	  if (!b.google_enable_content_recommendations || 1 != d && 2 != d)
	   if (e = Ef(c, b)) d = a.offsetWidth || (b.google_ad_resize ? parseInt(a.style.width, 10) : 0), c = (e = Ff(e, d, a, b, c)) ? e : hf(d, b.google_ad_format, c, a, b), e = c.R, b.google_ad_width = e.j(d), f = b.google_ad_height = e.height(), a.style.height = f + "px", b.google_full_width_responsive_allowed && (b.gfwrnh = b.google_ad_height + "px"), b.google_ad_resizable = !0, b.google_ad_format = e.l(d), b.google_override_format = 1, b.google_responsive_auto_format = c.va, b.google_loader_features_used = 128;
	   else {
		if (!ob.test(b.google_ad_width) && !nb.test(a.style.width) || !ob.test(b.google_ad_height) && !nb.test(a.style.height)) {
		 if (d = z(a, c)) a.style.width = d.width, a.style.height = d.height, Be(d, b);
		 b.google_ad_width || (b.google_ad_width = a.offsetWidth);
		 b.google_ad_height || (b.google_ad_height = a.offsetHeight);
		 b.google_loader_features_used = 256;
		 b.google_responsive_auto_format = 12
		} else Be(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
		B(c, "153762914") || B(c, "153762975") || B(c, "164692081") || Se(c) ? (b.google_resizing_allowed = !1, d = !0) : d = !1;
		if (d && (e = a.parentElement)) {
		 d = b.google_ad_format;
		 if (f = Re.test(d) || !d) {
		  f = Pb(c);
		  if (!(h = null == f)) {
		   if (!(f = !(488 > F(f).clientWidth) || !(f.innerHeight >= f.innerWidth) || Fe(e, c))) a: {
			f = e;g = h = !1;
			for (k = 0; 100 > k && f; k++) {
			 var m = z(f, c);
			 m && -1 != m.display.indexOf("table") && (h = !0);
			 m = f.style;
			 if ("auto" == m.margin || "auto" == m.marginLeft || "auto" == m.marginRight) g = !0;
			 if (h && g) {
			  f = !0;
			  break a
			 }
			 f = f.parentElement
			}
			f = !1
		   }
		   h = f
		  }
		  f = (h ? !1 : !0) && De(a, c)
		 }
		 if (f && (f = a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, h = F(c).clientWidth) && (g = z(e, c)) && (m = Ie(g, h, f), k = m.ha, g = m.direction, m = m.ba, !(5 > m || .4 < m / h))) {
		  b.google_resizing_allowed = !0;
		  e = -1 * (He(e) + k) + "px";
		  if (B(c, "153762975") || Se(c)) "rtl" == g ? a.style.marginRight = e : a.style.marginLeft = e, a.style.width = h + "px", a.style.zIndex = 2147483647;
		  e = "";
		  g = parseInt(a.offsetHeight || a.style.height || b.google_ad_height, 10);
		  d && (d = d.match(Re), e = d[3], g = parseInt(d[2], 10));
		  Se(c) && 1.15 < f / g && (Ce(a, c) < F(c).clientHeight || (g = Math.round(5 * h / 6)));
		  if (B(c, "153762975") || Se(c)) b.google_ad_format = h + "x" + g + e, b.google_ad_width = h, b.google_ad_height = g, a.style.height = g + "px";
		  b.google_resizing_width = h;
		  b.google_resizing_height = g
		 }
		}
	   } else b.google_ad_width = F(c).clientWidth, b.google_ad_height = 50, a.style.display = "none"
	 };
	 var wd = new function() {
	  this.j = ["google-auto-placed"];
	  this.l = {
	   google_tag_origin: "qs"
	  }
	 };
	 var wg = !1,
	  xg = 0,
	  yg = !1,
	  zg = !1,
	  Ag = function(a) {
	   return Ob.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
	  },
	  Cg = function(a, b) {
	   var c = window;
	   a.setAttribute("data-adsbygoogle-status", "done");
	   Bg(a, b, c)
	  },
	  Bg = function(a, b, c) {
	   var d = Nb();
	   d.google_spfd || (d.google_spfd = vg);
	   vg(a, b, c);
	   if (!Dg(a, b, c)) {
		if (b.google_reactive_ads_config) {
		 if (wg) throw new P("Only one 'enable_page_level_ads' allowed per page.");
		 wg = !0
		} else b.google_ama || Kb(c);
		yg || (yg = !0, ug(c, b.google_ad_client));
		Gb(Rf, function(a, d) {
		 b[d] = b[d] || c[d]
		});
		b.google_loader_used = "aa";
		b.google_reactive_tag_first = 1 === xg;
		if ((d = b.google_ad_output) && "html" != d && "js" != d) throw new P("No support for google_ad_output=" + d);
		bd(164, dd, function() {
		 tg(c, b, a)
		})
	   }
	  },
	  Dg = function(a, b, c) {
	   var d = b.google_reactive_ads_config;
	   if (d) {
		var e = d.page_level_pubvars;
		var f = (ta(e) ? e : {}).google_tag_origin
	   }
	   if (b.google_ama || "js" === b.google_ad_output) return !1;
	   var g = b.google_ad_slot;
	   e = c.google_ad_modifications;
	   !e || Qb(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = Qb(e.ad_blacklist, g)) ? {
		Z: !0,
		ka: g.space_collapsing || f
	   } : e.remove_ads_by_default ? {
		Z: !0,
		ka: f
	   } : null);
	   if (e && e.Z && "on" != b.google_adtest) return "slot" == e.ka && (null !== pb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== pb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
	   if ((e = z(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
	   a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
	   return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (l.console && l.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
	  },
	  Eg = function(a) {
	   for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
		var e = d;
		if (Ag(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
	   }
	   return null
	  },
	  Gg = function(a) {
	   if (!zg) {
		zg = !0;
		try {
		 var b = l.localStorage.getItem("google_ama_config")
		} catch (D) {
		 b = null
		}
		try {
		 var c = b ? new lc(b ? JSON.parse(b) : null) : null
		} catch (D) {
		 c = null
		}
		if (b = c)
		 if (c = bc(b, mc, 3), !c || C(c, 1) <= +new Date) try {
		  l.localStorage.removeItem("google_ama_config")
		 } catch (D) {
		  ed(l, {
		   lserr: 1
		  })
		 } else {
		  try {
		   a: {
			var d = ac(b, 5);
			if (0 < d.length) var e = d;
			else {
			 c: {
			  var f = l.location.pathname,
			   g = cc(b, oc, 7);d = {};
			  for (c = 0; c < g.length; ++c) {
			   var h = C(g[c], 1);
			   ra(h) && !d[h] && (d[h] = g[c])
			  }
			  for (var k = f.replace(/(^\/)|(\/$)/g, "");;) {
			   var m = mb(k);
			   if (d[m]) {
				var n = d[m];
				break c
			   }
			   if (!k) {
				n = null;
				break c
			   }
			   k = k.substring(0, k.lastIndexOf("/"))
			  }
			 }
			 e = n ? ac(n, 2) : []
			}
			for (n = 0; n < e.length; n++)
			 if (1 == e[n]) {
			  var x = !0;
			  break a
			 }
			x = !1
		   }
		   if (x) {
			var r = new Bd;
			(new Fd(l, new xd(a, b), 100, r)).start();
			var p = r.l;
			var y = xa(Id, l);
			if (p.T) throw Error("Then functions already set.");
			p.T = xa(Hd, l);
			p.la = y;
			Dd(p)
		   }
		  } catch (D) {
		   ed(l, {
			atf: -1
		   })
		  }
		  x = Fg();
		  l.document.documentElement.appendChild(x);
		  p = {};
		  a = (p.google_ama = !0, p.google_ad_client = a, p);
		  Cg(x, a)
		 }
	   }
	  },
	  Fg = function() {
	   var a = document.createElement("ins");
	   a.className = "adsbygoogle";
	   a.style.display = "none";
	   return a
	  },
	  Hg = function(a, b) {
	   var c = {};
	   Gb(Rb, function(b, d) {
		!1 === a.enable_page_level_ads ? c[d] = !1 : a.hasOwnProperty(d) && (c[d] = a[d])
	   });
	   ta(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
	   var d = Fg();
	   b ? Aa.body.appendChild(d) : Aa.documentElement.appendChild(d);
	   b = {};
	   b = (b.google_reactive_ads_config = c, b.google_ad_client = a.google_ad_client, b);
	   Cg(d, b)
	  },
	  Ig = function(a) {
	   var b = Pb(window);
	   if (!b) throw new P("Page-level tag does not work inside iframes.");
	   b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new Jd);
	   b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
	   b = B(u, ce.u);
	   var c = !b;
	   Aa.body || b ? Hg(a, c) : Ab(Aa, "DOMContentLoaded", cd(191, function() {
		Hg(a, c)
	   }))
	  },
	  Jg = function(a, b, c, d) {
	   return df(b) ? (E.v = !0, E.j(a, b, .1, d, "puberror"), !1) : E.j(a, b, c, d)
	  },
	  Kg = function(a, b, c, d) {
	   return df(b) ? !1 : E.j(a, b, c, d)
	  },
	  Mg = function(a) {
	   var b = {};
	   bd(165, Jg, function() {
		Lg(a, b)
	   }, function(c) {
		c.client = c.client || b.google_ad_client || a.google_ad_client;
		c.slotname = c.slotname || b.google_ad_slot;
		c.tag_origin = c.tag_origin || b.google_tag_origin
	   })
	  },
	  Lg = function(a, b) {
	   za = (new Date).getTime();
	   a: {
		if (void 0 != a.enable_page_level_ads) {
		 if (qa(a.google_ad_client)) {
		  var c = !0;
		  break a
		 }
		 throw new P("'google_ad_client' is missing from the tag config.");
		}
		c = !1
	   }
	   if (c) 0 === xg && (xg = 1), Gg(a.google_ad_client), Ig(a);
	   else {
		0 === xg && (xg = 2);
		c = a.element;
		(a = a.params) && Gb(a, function(a, c) {
		 b[c] = a
		});
		if ("js" === b.google_ad_output) {
		 l.google_ad_request_done_fns = l.google_ad_request_done_fns || [];
		 l.google_radlink_request_done_fns = l.google_radlink_request_done_fns || [];
		 if (b.google_ad_request_done) {
		  if ("function" != q(b.google_ad_request_done)) throw new P("google_ad_request_done parameter must be a function.");
		  l.google_ad_request_done_fns.push(b.google_ad_request_done);
		  delete b.google_ad_request_done;
		  b.google_ad_request_done_index = l.google_ad_request_done_fns.length - 1
		 } else throw new P("google_ad_request_done parameter must be specified.");
		 if (b.google_radlink_request_done) {
		  if ("function" != q(b.google_radlink_request_done)) throw new P("google_radlink_request_done parameter must be a function.");
		  l.google_radlink_request_done_fns.push(b.google_radlink_request_done);
		  delete b.google_radlink_request_done;
		  b.google_radlink_request_done_index = l.google_radlink_request_done_fns.length - 1
		 }
		 a = Fg();
		 l.document.documentElement.appendChild(a);
		 c = a
		}
		if (c) {
		 if (!Ag(c) && (c.id ? c = Eg(c.id) : c = null, !c)) throw new P("'element' has already been filled.");
		 if (!("innerHTML" in c)) throw new P("'element' is not a good DOM element.");
		} else if (c = Eg(), !c) throw new P("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
		Cg(c, b)
	   }
	  },
	  Og = function() {
	   ad();
	   bd(166, Kg, Ng)
	  },
	  Ng = function() {
	   var a = Db(Cb(u)) || u;
	   qe(a);
	   Yc(A(u, Yd.A) || A(u, Wd.A) || A(u, Wd.U));
	   og();
	   if (A(u, he.Y) || A(u, he.N) || A(u, he.X) || A(u, he.W)) ig(), fg(".google.com.ar") && (X[1] = ".google.com.ar"), A(u, he.N) ? (a = zb(), lg(a), kg(a)) : kg(null);
	   if ((a = window.adsbygoogle) && a.shift) try {
		for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Mg(b), --c
	   } catch (d) {
		throw window.setTimeout(Og, 0), d;
	   }
	   if (!a || !a.loaded) {
		window.adsbygoogle = {
		 push: Mg,
		 loaded: !0
		};
		a && Pg(a.onload);
		try {
		 Object.defineProperty(window.adsbygoogle, "onload", {
		  set: Pg
		 })
		} catch (d) {}
	   }
	  },
	  Pg = function(a) {
	   Hb(a) && window.setTimeout(a, 0)
	  };
	 Og();
	}).call(this);