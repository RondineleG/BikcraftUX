/*! http://responsiveslides.com v1.55 by @viljamis */
(function(c, K, C) {
    c.fn.responsiveSlides = function(m) {
        var a = c.extend({ auto: !0, speed: 500, timeout: 4E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !0, prevText: "Previous", nextText: "Next", maxwidth: "", navContainer: "", manualControls: "", namespace: "rslides", before: c.noop, after: c.noop }, m);
        return this.each(function() {
            C++;
            var f = c(this),
                u, t, v, n, q, r, p = 0,
                e = f.children(),
                D = e.length,
                h = parseFloat(a.speed),
                E = parseFloat(a.timeout),
                w = parseFloat(a.maxwidth),
                g = a.namespace,
                d = g + C,
                F = g + "_nav " + d + "_nav",
                x = g + "_here",
                k = d + "_on",
                y = d + "_s",
                l = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
                z = { "float": "left", position: "relative", opacity: 1, zIndex: 2 },
                A = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 },
                G = function() { var b = (document.body || document.documentElement).style,
                        a = "transition"; if ("string" === typeof b[a]) return !0;
                    u = ["Moz", "Webkit", "Khtml", "O", "ms"]; var a = a.charAt(0).toUpperCase() + a.substr(1),
                        c; for (c = 0; c < u.length; c++)
                        if ("string" === typeof b[u[c] + a]) return !0;
                    return !1 }(),
                B = function(b) {
                    a.before(b);
                    G ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z),
                        p = b, setTimeout(function() { a.after(b) }, h)) : e.stop().fadeOut(h, function() { c(this).removeClass(k).css(A).css("opacity", 1) }).eq(b).fadeIn(h, function() { c(this).addClass(k).css(z);
                        a.after(b);
                        p = b })
                };
            a.random && (e.sort(function() { return Math.round(Math.random()) - .5 }), f.empty().append(e));
            e.each(function(a) { this.id = y + a });
            f.addClass(g + " " + d);
            m && m.maxwidth && f.css("max-width", w);
            e.hide().css(A).eq(0).addClass(k).css(z).show();
            G && e.show().css({
                "-webkit-transition": "opacity " + h + "ms ease-in-out",
                "-moz-transition": "opacity " +
                    h + "ms ease-in-out",
                "-o-transition": "opacity " + h + "ms ease-in-out",
                transition: "opacity " + h + "ms ease-in-out"
            });
            if (1 < e.length) {
                if (E < h + 100) return;
                if (a.pager && !a.manualControls) { var H = [];
                    e.each(function(a) { a += 1;
                        H += "<li><a href='#' class='" + y + a + "'>" + a + "</a></li>" });
                    l.append(H);
                    m.navContainer ? c(a.navContainer).append(l) : f.after(l) }
                a.manualControls && (l = c(a.manualControls), l.addClass(g + "_tabs " + d + "_tabs"));
                (a.pager || a.manualControls) && l.find("li").each(function(a) { c(this).addClass(y + (a + 1)) });
                if (a.pager || a.manualControls) r =
                    l.find("a"), t = function(a) { r.closest("li").removeClass(x).eq(a).addClass(x) };
                a.auto && (v = function() { q = setInterval(function() { e.stop(!0, !0); var b = p + 1 < D ? p + 1 : 0;
                        (a.pager || a.manualControls) && t(b);
                        B(b) }, E) }, v());
                n = function() { a.auto && (clearInterval(q), v()) };
                a.pause && f.hover(function() { clearInterval(q) }, function() { n() });
                if (a.pager || a.manualControls) r.bind("click", function(b) { b.preventDefault();
                        a.pauseControls || n();
                        b = r.index(this);
                        p === b || c("." + k).queue("fx").length || (t(b), B(b)) }).eq(0).closest("li").addClass(x),
                    a.pauseControls && r.hover(function() { clearInterval(q) }, function() { n() });
                if (a.nav) {
                    g = "<a href='#' class='" + F + " prev'>" + a.prevText + "</a><a href='#' class='" + F + " next'>" + a.nextText + "</a>";
                    m.navContainer ? c(a.navContainer).append(g) : f.after(g);
                    var d = c("." + d + "_nav"),
                        I = d.filter(".prev");
                    d.bind("click", function(b) { b.preventDefault();
                        b = c("." + k); if (!b.queue("fx").length) { var d = e.index(b);
                            b = d - 1;
                            d = d + 1 < D ? p + 1 : 0;
                            B(c(this)[0] === I[0] ? b : d);
                            (a.pager || a.manualControls) && t(c(this)[0] === I[0] ? b : d);
                            a.pauseControls || n() } });
                    a.pauseControls && d.hover(function() { clearInterval(q) }, function() { n() })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && m.maxwidth) { var J = function() { f.css("width", "100%");
                    f.width() > w && f.css("width", w) };
                J();
                c(K).bind("resize", function() { J() }) }
        })
    }
})(jQuery, this, 0);

/*Visibility 1.2.1 “Discoverer 6, again”*/
! function(e) { "use strict"; var i = -1,
        t = { onVisible: function(e) { var i = t.isSupported(); if (!i || !t.hidden()) return e(), i; var n = t.change(function() { t.hidden() || (t.unbind(n), e()) }); return n }, change: function(e) { if (!t.isSupported()) return !1;
                i += 1; var n = i; return t._callbacks[n] = e, t._listen(), n }, unbind: function(e) { delete t._callbacks[e] }, afterPrerendering: function(e) { var i = t.isSupported(),
                    n = "prerender"; if (!i || n != t.state()) return e(), i; var r = t.change(function(i, d) { n != d && (t.unbind(r), e()) }); return r }, hidden: function() { return !(!t._doc.hidden && !t._doc.webkitHidden) }, state: function() { return t._doc.visibilityState || t._doc.webkitVisibilityState || "visible" }, isSupported: function() { return !(!t._doc.visibilityState && !t._doc.webkitVisibilityState) }, _doc: document || {}, _callbacks: {}, _change: function(e) { var i = t.state(); for (var n in t._callbacks) t._callbacks[n].call(t._doc, e, i) }, _listen: function() { if (!t._init) { var e = "visibilitychange";
                    t._doc.webkitVisibilityState && (e = "webkit" + e); var i = function() { t._change.apply(t, arguments) };
                    t._doc.addEventListener ? t._doc.addEventListener(e, i) : t._doc.attachEvent(e, i), t._init = !0 } } }; "undefined" != typeof module && module.exports ? module.exports = t : e.Visibility = t }(this),
function(e) { "use strict"; var i = -1,
        t = function(t) { return t.every = function(e, n, r) { t._time(), r || (r = n, n = null), i += 1; var d = i; return t._timers[d] = { visible: e, hidden: n, callback: r }, t._run(d, !1), t.isSupported() && t._listen(), d }, t.stop = function(e) { return t._timers[e] ? (t._stop(e), delete t._timers[e], !0) : !1 }, t._timers = {}, t._time = function() { t._timed || (t._timed = !0, t._wasHidden = t.hidden(), t.change(function() { t._stopRun(), t._wasHidden = t.hidden() })) }, t._run = function(i, n) { var r, d = t._timers[i]; if (t.hidden()) { if (null === d.hidden) return;
                    r = d.hidden } else r = d.visible; var a = function() { d.last = new Date, d.callback.call(e) }; if (n) { var o = new Date,
                        u = o - d.last;
                    r > u ? d.delay = setTimeout(function() { a(), d.id = setInterval(a, r) }, r - u) : (a(), d.id = setInterval(a, r)) } else d.id = setInterval(a, r) }, t._stop = function(e) { var i = t._timers[e];
                clearInterval(i.id), clearTimeout(i.delay), delete i.id, delete i.delay }, t._stopRun = function() { var e = t.hidden(),
                    i = t._wasHidden; if (e && !i || !e && i)
                    for (var n in t._timers) t._stop(n), t._run(n, !e) }, t }; "undefined" != typeof module && module.exports ? module.exports = t(require("./visibility.core")) : t(e.Visibility) }(window);

/*Menu Hamburger*/
(function($, window) {
    $.fn.origamiMenu = function(options) {

        // Opções	
        var settings = $.extend({
            breakpoint: 768,
            top: 50,
            color: 'white',
            background: 'black'
        }, options);

        var mobileWidth = settings.breakpoint,
            color = settings.color,
            background = settings.background,
            hambugerActive = false,
            hamburger = '<a id="origamid-icon"></a>',
            menu = $(this);

        var styles = '<style>\
                        #origamid-menu { background-color: ' + background + '; top: ' + settings.top + 'px; }\
                        #origamid-menu li { border-color: ' + color + '; }\
                        #origamid-menu li:last-of-type { border-color: ' + color + '; }\
                        #origamid-menu li a { color: ' + color + '; }\
                        #origamid-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
                        #origamid-icon::before { background:' + color + '; }\
                        #origamid-icon::after { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
                        #origamid-icon.active::before, #origamid-icon.active::after { background:' + color + '; }\
                    </style>';

        var menuFunction = function() {
            var width = $(window).width();
            if (width < mobileWidth) {
                menu.attr('id', 'origamid-menu');
                if (!hambugerActive) {
                    hambugerActive = true;
                    menu.before(hamburger);
                    $('#origamid-menu').append(styles);
                } else {
                    return false;
                }

            } else if (width > mobileWidth) {
                hambugerActive = false;
                $('#origamid-icon').remove();
                $('#origamid-menu style').remove();
                menu.attr('id', '');
            }

            $('#origamid-icon').on('click touchstart', function(e) {
                e.preventDefault();
                $('#origamid-icon').toggleClass('active');
                menu.toggleClass('active');
            });
        }

        menuFunction();
        $(window).resize(menuFunction);
    };
}(jQuery, window));

/*! pace 1.0.2 */
(function() { var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() { this.constructor = a } for (var d in b) Y.call(b, d) && (a[d] = b[d]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a },
        $ = [].indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1 }; for (u = { catchupTime: 100, initialRate: .03, minTime: 250, ghostTime: 100, maxProgressPerFrame: 20, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, C = function() { var a; return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) { return setTimeout(a, 50) }, t = function(a) { return clearTimeout(a) }), G = function(a) { var b, c; return b = C(), (c = function() { var d; return d = C() - b, d >= 33 ? (b = C(), a(d, function() { return E(c) })) : setTimeout(c, 33 - d) })() }, F = function() { var a, b, c; return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b] }, v = function() { var a, b, c, d, e, f, g; for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b }, q = function(a) { var b, c, d, e, f; for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++; return c / b }, x = function(a, b) { var c, d, e; if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) { if (c = e.getAttribute("data-pace-" + a), !b) return c; try { return JSON.parse(c) } catch (f) { return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0 } } }, g = function() {
            function a() {} return a.prototype.on = function(a, b, c, d) { var e; return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d }) }, a.prototype.once = function(a, b, c) { return this.on(a, b, c, !0) }, a.prototype.off = function(a, b) { var c, d, e; if (null != (null != (d = this.bindings) ? d[a] : void 0)) { if (null == b) return delete this.bindings[a]; for (c = 0, e = []; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++); return e } }, a.prototype.trigger = function() { var a, b, c, d, e, f, g, h, i; if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) { for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++); return i } }, a }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() { return V = b.__super__.constructor.apply(this, arguments) } return Z(b, a), b }(Error), b = function() {
        function a() { this.progress = 0 } return a.prototype.getElement = function() { var a; if (null == this.el) { if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el) } return this.el }, a.prototype.finish = function() { var a; return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done" }, a.prototype.update = function(a) { return this.progress = a, this.render() }, a.prototype.destroy = function() { try { this.getElement().parentNode.removeChild(this.getElement()) } catch (a) { i = a } return this.el = void 0 }, a.prototype.render = function() { var a, b, c, d, e, f, g; if (null == document.querySelector(D.target)) return !1; for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d; return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress }, a.prototype.done = function() { return this.progress >= 100 }, a }(), h = function() {
        function a() { this.bindings = {} } return a.prototype.trigger = function(a, b) { var c, d, e, f, g; if (null != this.bindings[a]) { for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b)); return g } }, a.prototype.on = function(a, b) { var c; return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b) }, a }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) { var c, d, e;
        e = []; for (d in b.prototype) try { null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, { get: function() { return b.prototype[d] }, configurable: !0, enumerable: !0 })) : e.push(a[d] = b.prototype[d]) : e.push(void 0) } catch (f) { c = f }
        return e }, A = [], j.ignore = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c }, j.track = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c }, J = function(a) { var b; if (null == a && (a = "GET"), "track" === A[0]) return "force"; if (!A.length && D.ajax) { if ("socket" === a && D.ajax.trackWebSockets) return !0; if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0 } return !1 }, k = function(a) {
        function b() { var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) { var b; return b = a.open, a.open = function(d, e, f) { return J(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments) } }, window.XMLHttpRequest = function(b) { var c; return c = new P(b), a(c), c }; try { w(window.XMLHttpRequest, P) } catch (d) {} if (null != O) { window.XDomainRequest = function() { var b; return b = new O, a(b), b }; try { w(window.XDomainRequest, O) } catch (d) {} } if (null != N && D.ajax.trackWebSockets) { window.WebSocket = function(a, b) { var d; return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d }; try { w(window.WebSocket, N) } catch (d) {} } } return Z(b, a), b }(h), R = null, y = function() { return null == R && (R = new k), R }, I = function(a) { var b, c, d, e; for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) { if (-1 !== a.indexOf(b)) return !0 } else if (b.test(a)) return !0; return !1 }, y().on("request", function(b) { var c, d, e, f, g; return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() { var b, c, g, h, i, k; if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) { for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) { if (K = i[c], K instanceof a) { K.watch.apply(K, d); break }
                    k.push(void 0) } return k } }, c)) }), a = function() {
        function a() { var a = this;
            this.elements = [], y().on("request", function() { return a.watch.apply(a, arguments) }) } return a.prototype.watch = function(a) { var b, c, d, e; return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c)) }, a }(), o = function() {
        function a(a) { var b, c, d, e, f, g, h = this; if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) { return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2 }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() { return h.progress = 100 }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() { var b; return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0 } } return a }(), n = function() {
        function a(a) { var b, c, d, e, f = this; for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() { return f.progress = 100 }, !1) } return a }(), d = function() {
        function a(a) { var b, c, d, f; for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b)) } return a }(), e = function() {
        function a(a) { this.selector = a, this.progress = 0, this.check() } return a.prototype.check = function() { var a = this; return document.querySelector(this.selector) ? this.done() : setTimeout(function() { return a.check() }, D.elements.checkInterval) }, a.prototype.done = function() { return this.progress = 100 }, a }(), c = function() {
        function a() { var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() { return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0 } } return a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a }(), f = function() {
        function a() { var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() { var g; return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3)) }, 50) } return a }(), m = function() {
        function a(a) { this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress")) } return a.prototype.tick = function(a, b) { var c; return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress }, a }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() { return D.restartOnPushState ? j.restart() : void 0 }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() { return z(), T.apply(window.history, arguments) }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() { return z(), W.apply(window.history, arguments) }), l = { ajax: a, elements: d, document: c, eventLag: f }, (B = function() { var a, c, d, e, f, g, h, i; for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a])); for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D)); return j.bar = r = new b, H = [], M = new m })(), j.stop = function() { return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B() }, j.restart = function() { return j.trigger("restart"), j.stop(), j.start() }, j.go = function() { var a; return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) { var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w; for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b)); return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() { return r.finish(), j.running = !1, j.trigger("hide") }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c() }) }, j.start = function(a) { v(D, a), j.running = !0; try { r.render() } catch (b) { i = b } return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50) }, "function" == typeof define && define.amd ? define(["pace"], function() { return j }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start() }).call(this);