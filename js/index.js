(function(t) {
    function s(s) {
        for (var e, n, c = s[0], r = s[1], A = s[2], l = 0, f = []; l < c.length; l++) n = c[l], Object.prototype.hasOwnProperty.call(o, n) && o[n] && f.push(o[n][0]), o[n] = 0;
        for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        p && p(s);
        while (f.length) f.shift()();
        return i.push.apply(i, A || []), a()
    }

    function a() {
        for (var t, s = 0; s < i.length; s++) {
            for (var a = i[s], e = !0, c = 1; c < a.length; c++) {
                var r = a[c];
                0 !== o[r] && (e = !1)
            }
            e && (i.splice(s--, 1), t = n(n.s = a[0]))
        }
        return t
    }
    var e = {},
        o = {
            index: 0
        },
        i = [];

    function n(s) {
        if (e[s]) return e[s].exports;
        var a = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = e, n.d = function(t, s, a) {
        n.o(t, s) || Object.defineProperty(t, s, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, s) {
        if (1 & s && (t = n(t)), 8 & s) return t;
        if (4 & s && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & s && "string" != typeof t)
            for (var e in t) n.d(a, e, function(s) {
                return t[s]
            }.bind(null, e));
        return a
    }, n.n = function(t) {
        var s = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(s, "a", s), s
    }, n.o = function(t, s) {
        return Object.prototype.hasOwnProperty.call(t, s)
    }, n.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = c.push.bind(c);
    c.push = s, c = c.slice();
    for (var A = 0; A < c.length; A++) s(c[A]);
    var p = r;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(t, s, a) {
        t.exports = a("b635")
    },
    "0112": function(t, s, a) {
        t.exports = a.p + "img/comm_12.11ac572d.jpg"
    },
    "025a": function(t, s, a) {
        t.exports = a.p + "img/other_1plus2.ce7904bf.jpg"
    },
    "0495": function(t, s, a) {},
    "062a": function(t, s, a) {
        t.exports = a.p + "img/wrong@2x.88be6226.png"
    },
    "09bf": function(t, s, a) {
        t.exports = a.p + "img/xhy.red-150x150.15ef8581.png"
    },
    "0d0b": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABF1BMVEUAAADdAxGyBA7uAxOVAgyGAAaHAADpAxPQAxGCAAnMAxHKAxG3Aw+jAw2FAAfjAxLWAxGtBA6qBA6MAAmEAAnrAxPnAxLYAxHGAxC+AxCcAw2cAw2SAgyKAAmEAAr2BBT////9/v3+///1AxTyBBLyBhb+8vHxWmP+/Pv//P363N/0AxP///7uGCXzl5321dbuHSvxGSb/8vT88PHyen/xAxPzlp3uHSnzCBj2AxL9/v/87/H98fD309nzUFzzChj5293319nzLz79+/350NT0Z3HvTVfzGSbvChf/8vX0o6n0XWjxKTT69/n45Ob6x8j2io/0hInzV2H0r7H1panymZ/1i4/pcXfuRU/lLjjwGirwGCTzECMz/ypOAAAAH3RSTlMA+9X+hSgL/vYa8/LdtCL9+czHRh3+/fnt5qKffFM04TLibQAAAvRJREFUaN7tmglT2kAYhhe5RATPqj2/3Syi7W5LDaISoQoixbO19/X/f0c3QJOYYEE2X6ZMeWYYMmxmnnm/F8hMNsRDYn42FocQiMdm5xNkAPmlBxAq6aW8T5HKrUHorOVSXkdmA1B4mHEdK4uAxOIK6ZNcBzQWk/0+soBIttdLDlDJdYeVBlTS9sBmAJkZQlYrgExllSQAnQT+tOx5zQE6cyQG6MRIBdCpEIiAqWQqcfgHJcIGXDAkon1xcfGBgwOGpFBijNU64ICSpC6lLB6BA4akUjIkxZYU6pTSKJJY+EmkNDQkvHAHgtuN947jdSZZsSOEs3JPyc3xi0G0foJiq7d4fMUoO+mfuFu9v+QVo4M43AHF6Ul31WLq7c9576swhsS4UyJOTyzq54u4v2TPlrA7JdRGUoUh9ZJY5aKf6964asViTbGtRKxomuaZad6I8Tp5/nozgOiu9o47DSmp2emv8HEklpLALfwDEQ0m6dkBB+BCyccaV0ACAYlBlUQAdB1jFa8k1eH/XeYBuOgn4QFJw9CVqOL3b3109EZx5JWUdJMExsUvt6Ws/bgl0UyyF5RsMSrLO97iv6lo7c2QJJyDKDSPmf2L556TBFSBg14nrkS0v368YqqBspL40JY4g3nHJKOKw7cQQLP4fY/EoMzwJekdVnU7ca6Tn1qt1jXzJRGXzWbzkoeVhNuvXeZLUqkzg5kH2p14GSgx9CRWQCJ9kkLJorS4qTuuYRLDkegX70pU8QEJfhKpX/zwJEoymZ1MoER1ojEuzeKVBPMrzNvn5+eff6F24lwjEZO4IHSCLLEGJ5m4cXWL/77z8q80qH4Stj0Mpl88ZXQI+klGQ6+T0bDKGteT5taIhHFTjQsYncm90TmVTCX/gSSKjbNItgAj2cyMZls2Aeg8iWKrPBXNpj9JxgGVeJIolgCVZWKTmQVEsinS5VkM0FhPkj5P04DEwgpxyGcBhY088fJ4AUJn4RHxkVkO+yGy5QxxwX8c7jcEkM5xrJIfkwAAAABJRU5ErkJggg=="
    },
    "0eda": function(t, s, a) {
        t.exports = a.p + "img/other_samsung3.1171dfda.jpg"
    },
    "0f90": function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    "126a": function(t, s, a) {
        t.exports = a.p + "img/comm_16.60d7fe8f.jpg"
    },
    "130e": function(t, s, a) {
        t.exports = a.p + "img/other_oppo1.3f4a9eb5.jpg"
    },
    "147b": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg9.516a6055.jpg"
    },
    "16b8": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg2.ff3a380e.jpg"
    },
    "1a80": function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    "1c78": function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    "1eb2": function(t, s, a) {
        t.exports = a.p + "img/other_xiaomi3.bf98c309.jpg"
    },
    "1f3b": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAnFBMVEUAAAADj9wDj90Lld8nnf8Dj90Dj9wEjt0EjtwEj9wEj94EkN8GkN4Gk90Djtz////5/P7k8/vu9/wNk93z+f0on+G74fWm1/MZmN/b7/pkuulWs+cUld7C5Peb0vGOzO9ywOtqvOozpOMsoOL1+/2Iye5ctuhDq+Xp9fzY7fnJ5/c6puT7/f7U7Pmt2/O03fR5w+yUz/CCx+0Kkd3GCLtyAAAADnRSTlMA85YYBvPj2ce/gkcuLektsxEAAAJmSURBVGje7NDJDQMxDENRSpb3hP2XGyQIZsFczZtfA8QnTjG9V+MCVrvPwFNy41LmCXcxMpfLI24ZjRLtEvMqFCnvo6NQpvxbolGoBb4GpcbvrEypnAA4xRwIo5gFJuUmnHKOTrmOSrkKo5yB1Nsje+SwR/bIR6OWjFoyaslItERKUgaFTwtLREX4xZD5NLEEwCy55CAIBFHwBq+GURREERQ1QPzf/24uNMJImh2JtZxa1KS7N8BdHZNEGmCjjkkiSUSUqGOSiFrfqs+/n/DRn4dDubhCuvmsqBpDSvG2rvhQ1dt4LOJhqR9K8NKc1JZ6OALcYySSAqfQrz2kEmDLnAG5HcmAswJyIJMAU64Arrvv634JrMyIFkChHi2wkARYcuYHPz+An5mR2ME8UUcDLn5HLFkC0VMBNZRmRAeC9ZbAi71yS2EYBKLoDiakKn3QkqI0sTTksf/NVZOBi8gg6U9/PD8BL+QQrxlfxBIhnBt+I4g7OMsS1e71othWsUQK46KlFBsiWYLuUSxLpDAeX0UpKmykKEm7t+PWOiR5+KPEcb1crINECA9sF+i43u38dwSJEMavux0oHt1/QrE+FguJFD7DypsKRzijjzPkQlN49ASJFN41n/Pyzwj2y1Z7vgwhkcKlCZxdcaykmBMPbUO5xPgsnA4MSDBslrHHim40Ma7lEKxjedTnmLPXj4HAohcM+K7dQ2DXa3Jp/f36ZaqkSqqkSqrk264dEgAAwDAM8+/69GQ0qDMwAU0nnfx1MkfCGUmAJGaSLEsCM0nlIvoTviAgBiElAscI5iPAkqBXEJERDncP8ChRZuEZgwAAAABJRU5ErkJggg=="
    },
    2172: function(t, s, a) {
        t.exports = a.p + "img/other_realme2.0977d88c.jpg"
    },
    2271: function(t, s, a) {
        t.exports = a.p + "img/other_realme3.d1542227.jpg"
    },
    2561: function(t, s, a) {
        t.exports = a.p + "img/text2@3x.1507e037.png"
    },
    "2ae6": function(t, s, a) {
        t.exports = a.p + "img/step3.0fef892a.png"
    },
    "2c7d": function(t, s, a) {
        t.exports = a.p + "img/bgg2@3x.b21740df.png"
    },
    "2d12": function(t, s, a) {
        t.exports = a.p + "img/text3@3x.5d73de85.png"
    },
    "2e45": function(t, s, a) {
        t.exports = a.p + "img/step2.53d4d5af.png"
    },
    "36b6": function(t, s, a) {
        "use strict";
        a("8ec7")
    },
    "36c8": function(t, s, a) {
        t.exports = a.p + "img/vivo_06.a81d1a4e.jpg"
    },
    3741: function(t, s, a) {
        t.exports = a.p + "img/other_oppo3.daa39a2b.jpg"
    },
    3815: function(t, s, a) {
        t.exports = a.p + "img/goDownload@2x.16131185.png"
    },
    "38b7": function(t, s, a) {
        var e = {
            "./brand_0.png": "4685",
            "./brand_1.png": "8c43",
            "./brand_2.png": "70b4",
            "./brand_3.png": "aebb",
            "./brand_4.png": "1f3b",
            "./brand_5.png": "8f0c",
            "./brand_6.png": "0d0b",
            "./brand_7.png": "f743",
            "./brand_8.png": "f250"
        };

        function o(t) {
            var s = i(t);
            return a(s)
        }

        function i(t) {
            if (!a.o(e, t)) {
                var s = new Error("Cannot find module '" + t + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            return e[t]
        }
        o.keys = function() {
            return Object.keys(e)
        }, o.resolve = i, t.exports = o, o.id = "38b7"
    },
    "39c6": function(t, s, a) {
        t.exports = a.p + "img/other_iQOO3.5040b839.jpg"
    },
    "3d82": function(t, s, a) {
        t.exports = a.p + "img/other_06.e3a2a90a.jpg"
    },
    "40c6": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg6.ba7e50e1.jpg"
    },
    4114: function(t, s, a) {
        t.exports = a.p + "img/other_iQOO1.e4af15ee.jpg"
    },
    4685: function(t, s, a) {
        t.exports = a.p + "img/brand_0.cee62363.png"
    },
    "488e": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg3.3cc3984d.jpg"
    },
    "4b94": function(t, s, a) {
        t.exports = a.p + "img/title_text@x.779fca2d.png"
    },
    "4c1a": function(t, s, a) {
        t.exports = a.p + "img/other_GalaxyS20Ultra5G.7c89777c.png"
    },
    "4e8f": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMA+ojs5MlqWiUcFQrcTdO+eC8P1/axloEG8Lqhf0KI46WSAAAAoUlEQVRIx+3KSQrDMBBE0fY8SB4Vxxl1/2OmhQkFCoqaQHb6u6IepVI/tmizyHFhbdHKMVfKeMv4lAl5WzJ+Do53IpwNRI7rGO8OzDU2yjt94Dc3fQTbhgh8DPPeALvqb7wfgcGrNYxrIhFfK2A0O64EGHzyuXJ4xkb7J1cTsF/O1+3i450ozDdw2njnFOzM9x0zAw7xK1ZeBDDAg1KpP/UC8GUPsXIIu/gAAAAASUVORK5CYII="
    },
    5510: function(t, s, a) {},
    "55da": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg7.0fc659e9.jpg"
    },
    5999: function(t, s, a) {
        t.exports = a.p + "img/comm_10.2b3b7853.jpg"
    },
    "5ded": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAMAAABf788oAAAASFBMVEUAAABmZmZmZmZnZ2dmZmZlZWVtbW1nZ2dmZmZmZmZmZmZmZmZkZGRgYGBmZmZra2tmZmZmZmZlZWVlZWVmZmZnZ2dmZmZmZmZpsm60AAAAF3RSTlMA+dHIvbALpJaEcEw6EPITwmliW1VD3shLdxAAAABuSURBVBjTZdFHEsQgDETREeCIsSf/+9/U21Y1u6cqCYVHesd/Sv4FT3UPyiX+QB3iF7RZvEMquMGiXmFVL7CpJ9iFc4O3eFTiK74K0TW/cB5CDXiKF/VvvTFv3Yfz8X1BvkJdco70oA4/VD7l2W4r0QaWz87CFAAAAABJRU5ErkJggg=="
    },
    "60f2": function(t, s, a) {
        t.exports = a.p + "img/huawei_03.b8b16e59.jpg"
    },
    "64ae": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJcWoAAAAMXRSTlMAIYfk/Lqb+d8YFezHC8CsVDEDoI11W0LzlX9gNx7w6LCkaWcnEdbT0Lena05ML9QlS6Cl0QAAAWVJREFUSMft1llrg0AUhuEvVTPuGpeo0exrs7Xn//+5aiQDoY6OECgUn4s53rzghXIGgzcI3AleaRP5OjzhRaQEkJf6KDmm4aC0V+/owbdNf2wvmJoezxszzNDLFyOOsV2f9KrTCyuWb2f0y0q+bWDLtT4RLfMZcd7ULs9Qpt1TaQ0wHs/hVyORiNdUWlwi4rTNqRpKd2uS0LUz3ohjT+KthfTOWCExoyuOow+RyGjJXDcHjJHQHEg8O3Ia2oxKW9gkhl11HhpiqjCcxa0F7zFFMWEsjhW4rbHaHmtDPMR/EPf4tt8fL6mkYdX2S25F8f1IZJv4bIkDhESLHE2SAmiNHWCXOBDTxHHqoIMnjpfoUojjGJ38A1OppjL1+chUZQYZplHURWIaRr1BLqYRQJLzXMyATpUb5I3qeMLj6f+Pv+u44Ps67xHv63jE4xt6CPkdZEslJegTB5llZXiI9XQ1x+AdfgCX8t4333IfygAAAABJRU5ErkJggg=="
    },
    "679a": function(t, s, a) {
        t.exports = a.p + "img/release_risk_bg5.393ead4c.jpg"
    },
    "6a74": function(t, s, a) {
        t.exports = a.p + "img/fixlogo.d2f3dd91.png"
    },
    "6ec9": function(t, s, a) {
        t.exports = a.p + "img/bgg1@3x.5fa39f0b.png"
    },
    "701a": function(t, s, a) {
        t.exports = a.p + "img/fix.1ba277e7.png"
    },
    "70b4": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABDlBMVEUAAAD/agD/agD/aQD/aQD/agD/awD/awD/agD/agD/agD/awD/agD/agD/WwD/agD/awD/agD/awD/agD/agD/agD/agD/aQD/aAD/bQD/aQD/agD/agD/agD/agD/agD/aQD/ZgD/awH/////agD+///+//79agH9bwv8+vX8eBv9+PP99vH7llH5qnP8xZz6sX/98ej9eyH8zKz8hTT9bAX8pmb81bz7m1n87uP8gSz71Lv6cBH+bQf8pW38+/f98+38/vz8bgn6aAD62sH7oGD6kUf7fif88+388+z7gzD6zq77wJf4vI77o2f8dRb66tv70rf5yab5rHX5p234pWz7lEz7jT362sD5tIXVZmDVAAAAInRSTlMAjpgUDvLh+HTs2ciITwX3xSb5zryjfVorHBHRsGVjSi4LQCr75wAAAnVJREFUaN7t2mlzmkAYwPE14n3nTno/wq54pRi1UdNaaD3qmaQ52u//RSKwBiY6CTPyMBmH3xvfLPMf9sEXuhCb1MFeOAMuyIT3DlJkjdNACFwVCpw+S6SjMXBdLJomNsI+oHgvWI1cHJDEc4QLojR4JcjnkQVEWXMuUUAVNTYrBKhC+obtALIdQoRdQBYRSArQpZB3i+9XAtAlSBjQhUkE0EUIeMCP+JEnfsSP+JHXI6zYr7zsvn7JmO0CbXBfMfRrTiPaXaskv6hUvpoORCtSnPALlL8FZxGmVcv515Wr+t3wyJmUN5S+OoxAwVGEqjc1xvAinDwp4kfU1q0mYkeo2hkx/Ehr1mCbRqSu0lqhyCqVzAjtTuebRii9Hl2uGkxLNM8XnLc3j5zXRFil3ZapmZE69c23a32EFW9UHvlWFxEifEHJiiBtFzR6iuR+hDH+wczIhZJ3PcLYL44xrIhY/P/vt2Hcb1gRdwcvtq9VqlOV2Xe0O2l3+MP08wd+hHoS+eNuxCCh34kVsc9kWwY/3JbBb9FMtmfwQy++8UP/6XprX0Y3H2GtWqZU0lkRSW/Y7oQaDWpFDLTsPHKnyHJ3QT4rGpHBWDa1emakciWbxiOmR+YTuatz/psRWLvXNMweCkak0G+aegNzQe2iaerPjYj2sFwwajiNMJFjIuhEG3OFuMT4BUuMvaU/C/yIH/EjfsSPLHhycObJEaAnh5neHMumAN0nIqBPfjftzaE/OckAqkyQLAQAVZLohHeAKPGFGE7CgCYeJNznECCJ5ciTYBZQ7AeJ3UeMV68+kGeEpNsvkSUFssbxUfQwGXBB8jB6dEwsj/ufSYt5tFDjAAAAAElFTkSuQmCC"
    },
    "70f7": function(t, s, a) {
        t.exports = a.p + "img/tips_3.dfda28e9.png"
    },
    7107: function(t, s, a) {
        t.exports = a.p + "img/text1@3x.fefe3ef5.png"
    },
    7143: function(t, s, a) {
        t.exports = a.p + "img/release_risk_bg2.e136dc4f.jpg"
    },
    "762e": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAOpQTFRFAAAA/79A/99g/9VV/99g/9lZ/+lk/99g/+Ne/+Rb/9tb/+Zj/99g/9xc/+Vi/99g/+Jd/+Ri/99g/+Zf/+Jd/+hh/+Vf/+Nh/+Rf/+Fi/+Zh/+Jh/+Rj/+Rf/+Vh/+Jh/+Nf/+Rh/+Ni/+Rh/+Ji/+Ng/+Ng/+Rh/+Jh/+Ni/+Ng/+Rh/+Ni/+Ng/+Nh/+Ri/+Ji/+Nh/+Ri/+Ji/+Nh/+Ri/+Ji/+Nh/+Ji/+Ni/+Nh/+Ji/+Nh/+Ni/+Ji/+Jh/+Nh/+Ni/+Ji/+Ni/+Jh/+Ni/+Jh/+Ni/+Nh/+Jh/+Ni/+Nh/+Ni/+NibJvZAgAAAE10Uk5TAAQIDBAUFxgbHBwfICQnKCwvMDM0Nzs/Q0RHR0tLT09bX2Nna293e3t/f4OHh4uPj5OXl5ufn6Onr7/Dx8vLy8/T09vf4+fr7+/z9/uyzaIrAAABkklEQVR42u3SX1sSQRTH8R/DJJmSQRYkgVEQWbSxrWLYvzVXUtnf+387zjJe7LMLe2bv1IfPzTnPufjezOCeGnrImQzhrjav505XWyjh8xQZ068oQ/9/DmC3NxgdDXq7AJqXGqV8nO0Hl7wTTRqzIcppMeMVylB+zKxAwdnTP1zh1zM42om4UuRYUCHXCBVcBDSOK++Y0ld+Mnw4eMnEIapMqeKQideQnTHxuxMwJXjzk4kziJostA/JmIU8SEIWCiGoxCwUV1CsTsEOiu2Fgj2s0/K8Bpy0xpMOcjwan1CNBBpHK1/jLRPxC02BbtrZygR8ex7JgZGdfiYwtedvcmBi58kmsAlsAo81MLbnoRwY2PklE6gvaNxsyYHadTIWDWR0zX3ehhxAZ05e95CjO20FlwBUu62xmlOgWJUCBcE/FvoLyQGLxAcQdSOuddGFC631Dy5910Zg91OzQpD/2TBSf3cTeFiBgEteKnCMMj5wqQ+jb/f3KENd0DhXSPZzGpFCKduzm8VJze5PTs2+jfvqFof2ES30vP1HAAAAAElFTkSuQmCC"
    },
    "76c3": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg4.1e1f277d.jpg"
    },
    7832: function(t, s, a) {
        t.exports = a.p + "img/vivo_03.c2278235.jpg"
    },
    "79dc": function(t, s, a) {
        t.exports = a.p + "img/bg1@3x.3e417a89.png"
    },
    "7b70": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMAcyYiAwkZNC8TVk4dFjduEAbwuGlSSTvbysIN66aeYl1aLCjVlPjSva6CPyr047ONid6YK5+tQQAAAghJREFUWMPt091awjAMBmCk2xAYDGEKMnTgHyjI7+7/2gQSCJ1tWIknPg/fCU3avmzdVrrmDzKcDAb9VO48Zfs8yR3Mp8z5zI7pSJxOdpLJ5c4k09K/1OnD/rcoGsPo0ZM4fbhHlESOSPIec89qgZIvc+hNGPuXOIvtWCL5Y+N38YxPMSnsvJFjknqJsyOSWug8myY3KDUKOD1yDHmH2flZqbEmh5VC3gnnsG4DJSMNFOsMYNU7t2gJa9qqkCOSFDpLrRvU47geaK0VSq9mp9yG+ZXevdlH3/MFK79nTo6j9ILOV97hpdu8c/sBMzda9xUMiP7vEaz/qBR30nJ5uB+8mKRMkypGZ7bfPvS2wxEjNanVxFaknxo5B0k/kRi3dY/3xTijQ1mzSnR3+L3HjMNLayyhSvXTJ4eThrAXq47NqVGDpMpvaYJFa9HujewOL9V67U5V69gdyj1KBVMhRyKRY5eaxZ17KAQSOZbUi0lNcnip6+AIJHDquW4SqjBxkrpGp1XepXXaegDJ2SFJv6aps6Ms1zS1n89DrlvdEYmX7H6qmmR9C+yOvx34FskARYxjlSIDFKTx1OJYpGmchqUiIYekRsk9DXAodyCJHJQUSO7OHdXuEjmKHE0KHJwAHZFEjikeSA6OB2OBRI5IIoeXQgdHeE3o8Am3q85+YSoEh5dUtXTNv88PWk5rC/OZKnIAAAAASUVORK5CYII="
    },
    "7cc7": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAB4FBMVEUAAAD/TkH/jT//VEH/hz//VUH/hT//hj//V0H/gz//ZUD/WEH/akD/dED/ZkD/bkD/Z0D/YED/gT//ckD/eED/ZkD/c0D/fz//dED/bkD/hz//eUD/gT//XED/bkD/bkD/W0H/fT//Y0D/gT//cED/akD/Z0D/WUH/aUD/WUH/dUD/bUD/b0D/gT//bkD/bkD/c0D/aUD/eUD/T0H/iz//aED/TkH/d0D/jT//e0D/WkH/VEH/T0H/jD//aED/bkD/Z0D/ij//YED/VEH/ZkD/YED/hz//gD//cUD/YUD/WEH/V0H/WUH/c0D/X0D/c0D/ckD/eUD/Y0D/UUH/hj//VUH/ekD/YkD/hj//TkH/aED/dUD/bkD/e0D/hD//TkH/jT//dkD/gj//c0D/aUD/V0H/hT//fD//T0H/jD//bkD/jD//VkH/U0H/bkD/dkD/VUH/hj//ekD/jD//ckD/jT//T0H/jD//UUH/ij//ZED/UEH/iz//hT//ZED/TkH/V0H/T0H/jD//TkH/jT//TkH/jT//UkH/iT//T0H/iz//jD//VEH/hj//WUH/X0D/gT//eUD/hz//XEH/V0H/fED/gz//fj//c0D/bUD/aUD/dkD/ZkD/ZED/YkD/cEDr8qblAAAAh3RSTlMA7u79/clXyVcwJDAFMDAT+vr6qnp6JCT68+6qqnpyRPv68O61tKuqqJSUlHp6PR/9/fr5+fPx8fHv7u7q6ubl38yrlJSUlJSKbCX8+fPu5d/S0s7IxsbGxru6tqyUlHh4a19OTk1NKhcXEQfu7uzn4+Pev7u2q6uQkIh7e29hXlVDQzU1AQHMZ6SFAAAB70lEQVRYw+3X11MaQQDHcRIk1YRymnBqEiQQSKI0pQtIF+y9995777333v9V90BHYGRnz/LgzH5fd+YzO3cvv2XgXrCFGqspBvQbpNdrtZmZJEmq1WqhMCvLYDB0GI2dKazqeRhR05+8srK3uXm0s3N8uLt7fnJyfXp6dnZxebW9vb+1dbCxsbycVFoNI6zJa/eEStudnW2xWMxms5B7T6wm5cMI03oA0RcbVfuTyhMtTQ0gVlNghC6QKKqVt7Gp2uSe4kBCAyPeBhF17Eh/7Kkg4g0ykZtWL/tFJWsYy3scoc8tLxeJRGKxuCxPSIeA/lR0IoLH48XHBxFcrkAgSGeiEr1xiaAoqgRQNNUPKkkPE42IKHgX5niGhUqUNIU5bixEJd6Hu8UHFiYwgQlMYAITmHh1xDOMA+vkd1/ffH26y+v15CMSezEFcaBYEEEQFRV/QDabTSKRsIxMenNNpeLzFWCuKTkcDhfMtYyMdOYjRqOC7CKVkNGIQOQQadLUJxH8gfrmhjIOHUIXShByhlwaSmho3UIki5SJad3CFEIofN9CCQjkJ82gDmHGa0phRN0wwvNuaBpGtM5NjLpcrqoqt9tdWfkP9B/kcDicTudfkN1uHxmfbYERS+2tzR/v+uLvq7/Pt3lb2hcZuIe7AagKBku5GN51AAAAAElFTkSuQmCC"
    },
    "7d4b": function(t, s, a) {
        t.exports = a.p + "img/ic_launcher@3x.50a3c9e0.png"
    },
    "7d90": function(t, s, a) {
        t.exports = a.p + "img/other_03.bfb6d18e.jpg"
    },
    "7e7d": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMArTwX889NJffllFtILwXXxbiimnp0YSnt39PIwry3gH1YULGeinBmNB0QpDg2FAn/UOsUAAABUklEQVRIx+3W226CQBCA4VlAREBQUVBAUKzHnub9n64pm9irmaFjmt74XRmSP2Fnya7w9AeK5cJVplODiIWu3eG3q6p96duNqm2xl6nWi5ajiUe23WraN7RUGxXaNgL9W59BZY2I1e+GNfZzf9r/mpeLrn8SR3nsyqW7K+1nkXUJ9Jww7Z94xhfalYd3kyx39scR/tiOmTRpkBf43HRF54Ro5ygLPoj1koW8ahdlhv4WRSk5aU+OCyp25PYAlKUcx8xhJfE+AdSbPAJSJcb1I5/mjI5rMZ7Q8QFFYzLO5HhFHwP4wHvHKFtS8S1A2TtVz1AWFMxFLNcRcVzjIE1Mvrd6aj5auv2a8Bl/Ze5RlgIlleML8xdEsgDaUWjXCTBKPnaAc2XbFnj+sMtG3q/N3JjKI4ZFjHxmZxPaBbpRbU/tEwzShc1rfoO7S2vMyYWnf/UFSW/r85yKeBgAAAAASUVORK5CYII="
    },
    "7f32": function(t, s, a) {
        "use strict";
        a("8d0c")
    },
    8244: function(t, s, a) {
        t.exports = a.p + "img/release_risk_bg3.bc86b3af.jpg"
    },
    "82be": function(t, s, a) {
        "use strict";
        a("f802")
    },
    8676: function(t, s, a) {
        t.exports = a.p + "img/other_xiaomi1.2263f559.jpg"
    },
    "89d2": function(t, s, a) {
        t.exports = a.p + "img/other_samsung2.84ced830.jpg"
    },
    "8c43": function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    "8d0c": function(t, s, a) {},
    "8e36": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABKCAYAAAD9u9cgAAAAAXNSR0IArs4c6QAAA1RJREFUaEPtWzFoFEEU/f/uihQWdrEQDGhhEbCxiKCQgGCEFAopIgRMIdzNpgqksLDYQlCwiRzM5CCFpUWCERUVBGOlYIqAgo2ChYWXxogp5JLsk4m3clnnMsbsPz2Y7W7n7fv/vzcz1/zP1OaZnZ09kSTJOBGdJqJ+Zj7QDpv3ewCbzPwZwDKAh41GY2FqamrNFYezL40xfQAMMw/nndjf8gGwyV9bXV2txXG82cqzowBjzDkimieijqm9l6IAPANwcXJycj397lcBzeQXiahnL6T/ALucJMlQWsR2AXbbENG7Lkg+1euuUuqS/bFdgNb6HjNfcKkJ4AkzL9pDla4DmCEiW3Ruj+UsFApLlhBAyV4cACrMfKhNXoNRFL1ge9sAWHGA1gGMRVH0yHHQnxPRYG7Z/yQaVUottHLGcdzT29triGjCEWtJKTXExpgbRHTVARhWSj11Jam1vszMd3Is4FOhUOgvl8tfXZzGmAdENOJYO2wLeE1EJ1sX7baJouj8bgkaY8oA7P/Efm+sj8VicbpcLn9oF69Wqx1NkuR9dh3ABGutvzDzwcxiRSlVy1HhfVMZY97Yc5EhumkdQJbdHuhKpXJ/31FzJHBtI2ae6ZoCXDdlKCDHHeKlCg54JRIGBAeEBfbSBwe8EgkDggPCAnvpgwNeiYQBwQFhgb30wQGvRMKA4ICwwF764IBXImFAcEBYYC99cMArkTAgOCAssJc+OOCVSBgQHBAW2EsfHPBKJAwIDggL7KUPDnglEgYEB4QF9tIHB7wSCQOCA8ICe+mDA16JhAHBAWGBvfTBAa9EwoDggLDAXvrggFciYUDbpj+t9TfHbEBXtF0y83XbtfiSiAZaBfyTxldhwXfQV6vV46VSyTanZ59x2/h6i5mnsysARlx9051MPI2ltX7sGsjY2trq27X5u9mQ7eyf7kQhzebvKhFdcQj8KoqiU2n7vbNC+5Gr/b4TyQMYADDKzMdc8dIdsl3A3NzckY2Njbc5NHJ3ojYbY+cAhH3TTSMo9Xr9TBzH323eriGg/3aOxg4BFYvF0dY5g9/GsOx2ajQaM+1GUjq1RzLX+pq98+v1+u1dx7BaP2qOpowR0VkAxxwzBmK1pINwRLTSnN+Zbzfd8QO26ulWRdoqwgAAAABJRU5ErkJggg=="
    },
    "8ec7": function(t, s, a) {},
    "8f0c": function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAA8FBMVEUAAAAAhfIAfeUCZbcAifkAiPcBc9IBYbEASoYASYcAet8ASYIBdtYBaL0DW6cCU5kATIwAgewCU5kASYcARoQAifoBctABb8sARoMBd9kBbMMCWKECWKACUpYASokAjP////9Gq/86pv/3/P/y+f/7/f/9/v89p/8Wlv8Ejf9xv/84pf+Kyv8Nkv+Tzv8wof+GyP9gt/9atP+f0/+My/9pu/92wf8amP/q9f/g8f/V7P81pP8IkP+s2f9Cqv8qn/8fmv/0+v9QsP/t9//E5P+53/8lnf+Qzf+Axv9uvf9ctf/N6P/K5//D5P+g1P9kuf/XofOzAAAAH3RSTlMA/vvV/v7zySYL+Rr13bSESf2HKx3+8e0h9uain3w0gjYfLQAAAl5JREFUaN7t2ltT2kAUwPEFuYoiAl56PSeBDYk2orY1BMJVUWtv3//bdJNpNhuHBx1yMtPO/p6yS5j/zDIbHjZMcbC/VyxDBsrFvf0DtsFptQCZKlRPWVq9KRMZZpp1pmicAIm3DSa1doHIbitu1MgaolJjkXoFCB3XWagJpJpMqBWAVKEjIjtAbIex7hEQK3VZG8i1SVdLrlcFyFVYEcgVWQnIlRjkQEd0RNIRHdERHdERHdER1b8fCeZmytCFiD0xE2LOM80FgGsqJmLaDqdj9+b5xshsbGGK5V+LaedypM6L754hfgJYoWrswTXiJcQ+Y8/ZFPmOVi/EEXl0YaHviTYXw8RERnqShdgfvijicvxhhC4Qp0ZojXwC8M3iZ0bCjSO2nJqKyDR4UcRG/AKhr4gXELqKFucGRy4o4og65L8AKCPBwxL5o7t15NYcSotnkUAsbu8GYOuIxS1pmo7Ya479qyCTSCId8daI/RUI2y+XMZDmamQudpYvNx3JDy8aiP4ASCPGCPHOg0wiYjP+NhNyM5qisXwaCGJ2cO7ASjTFdWQwxj68ImJw5P2EfKzcISof+B7YPbSWf4dLC3++JuI83G58QD72UDHyAJ785EY+nm2KOIZxDyHPMObxhRt+sJiln12L6E5naChmgZixB3I8sf/7f8aYjuiIjuiIjuiIjqh0REeykcvBWS5HgLkcZuZzLNsGch9YtwTEjur5HPqzThlIlTtMqAKpKgs13gChSp1FPhaBiHw5RmgVgMhhi0m1YyBxUmOq94eQucN37JlG9i+RNZiUw+twfwDTxLm90YWIXQAAAABJRU5ErkJggg=="
    },
    9258: function(t, s, a) {
        "use strict";
        a("a78c")
    },
    "92a1": function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg5.f3043e9d.jpg"
    },
    "95fa": function(t, s, a) {
        t.exports = a.p + "img/other_xiaomi2.92d0a7ed.jpg"
    },
    "979f": function(t, s, a) {
        t.exports = a.p + "img/ic_launcher@3x.50a3c9e0.png"
    },
    "9e4c": function(t, s, a) {},
    a010: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    a200: function(t, s, a) {
        "use strict";
        a("d6ea")
    },
    a5d9: function(t, s, a) {
        "use strict";
        a("b420")
    },
    a67a: function(t, s, a) {
        t.exports = a.p + "img/release_risk_bg1.717a5e04.jpg"
    },
    a78c: function(t, s, a) {},
    abed: function(t, s, a) {
        t.exports = a.p + "img/huawei_06.816d8369.jpg"
    },
    ac50: function(t, s, a) {
        "use strict";
        a("0495")
    },
    aebb: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    b006: function(t, s, a) {
        t.exports = a.p + "img/bg3@3x.58bf762e.png"
    },
    b130: function(t, s, a) {
        t.exports = a.p + "img/other_oppo4.2191036c.jpg"
    },
    b2f0: function(t, s, a) {
        t.exports = a.p + "img/release_risk_bg4.3d821032.jpg"
    },
    b420: function(t, s, a) {},
    b4ff: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAYAAAAkNenBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB1VpdUtswEN51wjuvnSFMOEHTExBOQDgBhrbPLSdIeoKG53aacALoCTAnKD0BacJMH5vnEmtZSTZxYst/gGN9M8k4li3l00qr3U9CqAlo9qELIPiD+/yrAwuxh3vjed73m7BhaALU1yTUHSgDhA2B7txtaOKA/8KnpHJs/Sj03zZiEfrrtmHhXPJlx/DELRRE5USUJXznmi/b5oewMBEHqsaW85WnQTv1GaQxFESlc4Smpy63OEp/iCa4O9qDgqjWIg70czwzgBKojAhN3/cyhxTBGHdGF1AC1VnEocPUch5S4IsvULZ6qA5dY4kiQQe8kk+gJCoholyucViR91wSElWtI9vxW8RxFA2wNT6HF0B1CyLy8CGY68WOrtgKN0WCwszqoSTo/mMHhGjzFfc2zsFxJrjzrfCKrOpScVeTwxV6q+sLC/B33npzE9GNNY75sqfC7KThQjDhbw/QucDWdy+zvobTA8RjY33r9bJXM82lXETo/vQzV9ZPbSypccQhLPyf0cZV2E7ikFt2C9W3rHecRCiVSHaUmhu3avhl9XxeKAuJM9wdX4W3jETo3u0AqSj1+Q2/FpDcMBJIJGIFiRAkjqRlYguiGk6ghlP9SUigzjDjK7vv9DODu7qAxBBbowN5uUJE5QukvIkFEAMeUmfhr1WL5MkXagEhQ5uVSPlpsge60jXUHYYMcmkRFMdgAzhSTrodHVpdqDtkBmkIURQR5XJt8FQp6oq2yEPjuSFIFZizq70xFWoiKMPnuiNdfdREyIZQBHMQcSwggpCaTVYvmb4S7CGS4VU1EQEvJgK8GpBSPWvgtSwgAthReb4Bodf6AzZgq2GUXQOvJUrJOJWDhGsqClZ2JbdYAOzS1O0lloQXLPncWRFvSQXFF+/WVcql+xVwBTYAubObGMubIusI3oA1YA82O72MerElEd/3+NsCN/yEHkuuv5hMW/5Y0bVodnItJxTYBk641sWHIdgI1pFXifwnOU9sGl5PWCESuDQLrUJeTPvV+yDOP7AK1I2F8coqyHsQtkDqXJzLJ+cjD0JKkXbMleCkRCIRa+ZK5KSEOUNciHO1E1tnRE5KGIkoqxCdQG3BQnZEdUzN2Vnx9uQLUDuwu11T4zPFB/0CeVAXyHMri/hIyaeiNPnF2swXOksSsnMRwTfyRTqCjbtktUuVmDcVOsJRardXWlKgB7ITpFojs1CkdvEoO75LtdIMFITagvA5QyNspzwlDwcMYQHnpoMz+ggH9PSuLHZS62LvabJEiPKHaqauq8+RBD0b9jzvYaTJ/4l1zU72uWN6SoTDQDdQpxvYyaR0RhSPIIuUYiFOcNYAAAAASUVORK5CYII="
    },
    b635: function(t, s, a) {
        "use strict";
        a.r(s);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var e = a("2b0e"),
            o = function() {
                var t = this,
                    s = t.$createElement,
                    a = t._self._c || s;
                return a("body", [0 === t.$UA() ? a("TempPC") : a("TempH5")], 1)
            },
            i = [],
            n = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("body", [e("div", {
                    staticClass: "box"
                }, [t.isWeiXin ? e("div", {
                    staticClass: "weixin"
                }, [t._m(0)]) : t._e(), e("div", [e("div", {
                    staticClass: "content"
                }, [e("van-swipe", {
                    staticStyle: {
                        height: "100vh"
                    },
                    attrs: {
                        vertical: "",
                        "show-indicators": !1,
                        autoplay: t.start
                    },
                    on: {
                        change: t.onChange
                    }
                }, [e("van-swipe-item", [e("div", {
                    staticClass: "swiper1"
                }, [e("div", {
                    staticClass: "title"
                }, [e("img", {
                    attrs: {
                        src: a("7d4b"),
                        alt: ""
                    }
                })]), e("div", {
                    staticClass: "title2",
                    class: {
                        active: t.iosDetect()
                    }
                }, [e("img", {
                    attrs: {
                        src: a("7107"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })]), e("div", {
                    staticClass: "title3"
                }, [e("img", {
                    attrs: {
                        src: a("6ec9"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })])])]), e("van-swipe-item", [e("div", {
                    staticClass: "swiper2"
                }, [e("div", {
                    staticClass: "title"
                }, [e("img", {
                    attrs: {
                        src: a("7d4b"),
                        alt: ""
                    }
                })]), e("div", {
                    staticClass: "title2",
                    class: {
                        active: t.iosDetect()
                    }
                }, [e("img", {
                    attrs: {
                        src: a("2561"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })]), e("div", {
                    staticClass: "title3"
                }, [e("img", {
                    attrs: {
                        src: a("2c7d"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })])])]), e("van-swipe-item", [e("div", {
                    staticClass: "swiper3"
                }, [e("div", {
                    staticClass: "title"
                }, [e("img", {
                    attrs: {
                        src: a("7d4b"),
                        alt: ""
                    }
                })]), e("div", {
                    staticClass: "title2",
                    class: {
                        active: t.iosDetect()
                    }
                }, [e("img", {
                    attrs: {
                        src: a("2d12"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })]), e("div", {
                    staticClass: "title3"
                }, [e("img", {
                    attrs: {
                        src: a("d4b8"),
                        alt: ""
                    },
                    on: {
                        onload: function(s) {
                            return t.startPlay()
                        }
                    }
                })])])])], 1)], 1), e("div", {
                    staticClass: "android-bottom"
                }, [t.iosDetect() ? t._e() : e("div", {
                    staticClass: "download-btn",
                    on: {
                        click: t.tInstallOpen
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d264"),
                        alt: ""
                    }
                }), e("p", [t._v("立即下载")])]), t.iosDetect() && t.urlDate.ldy_mdm ? e("div", {
                    staticClass: "download-ios"
                }, [e("van-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "1" === t.urlDate.ldy_rn.status,
                        expression: "urlDate.ldy_rn.status === '1'"
                    }],
                    attrs: {
                        loading: t.btnLoading,
                        type: "default",
                        round: "",
                        "loading-text": "加载中..."
                    },
                    on: {
                        click: t.rnLoad
                    }
                }, [t._v(t._s(t.urlDate.ldy_rn.name))]), e("van-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "1" === t.urlDate.ldy_pwa.status,
                        expression: "urlDate.ldy_pwa.status === '1'"
                    }],
                    attrs: {
                        loading: t.btnLoading,
                        type: "default",
                        round: "",
                        "loading-text": "加载中..."
                    },
                    on: {
                        click: t.pwaLoad
                    }
                }, [t._v(t._s(t.urlDate.ldy_pwa.name))]), e("van-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "1" === t.urlDate.ldy_mdm.status,
                        expression: "urlDate.ldy_mdm.status === '1'"
                    }],
                    attrs: {
                        loading: t.btnLoading,
                        type: "default",
                        round: "",
                        "loading-text": "加载中..."
                    },
                    on: {
                        click: t.tInstallOpen
                    }
                }, [t._v(t._s(t.urlDate.ldy_mdm.name))])], 1) : t._e(), t.iosDetect() ? e("div", {
                    staticClass: "tip tip-ios",
                    class: {
                        abc: t.showTop
                    }
                }, [e("img", {
                    attrs: {
                        src: a("7b70"),
                        alt: ""
                    }
                })]) : e("div", {
                    staticClass: "tip",
                    on: {
                        click: t.showTips
                    }
                }, [t._m(1)])]), e("van-popup", {
                    attrs: {
                        position: "bottom",
                        round: "",
                        closeable: ""
                    },
                    model: {
                        value: t.show,
                        callback: function(s) {
                            t.show = s
                        },
                        expression: "show"
                    }
                }, [e("div", {
                    ref: "guild",
                    staticClass: "course_choose"
                }, [e("MuanualAnd", {
                    staticClass: "course_and",
                    on: {
                        choose: t.choose
                    }
                }, [
                    [e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.otherPhoneInfoSet(!0)
                            }
                        }
                    }, [e("div", {
                        staticClass: "left"
                    }, [e("img", {
                        attrs: {
                            src: a("7cc7"),
                            alt: ""
                        }
                    }), e("p", [t._v("其他手机")])]), e("div", {
                        staticClass: "shuoming-btn"
                    }, [t._v("说明")])]), e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.choose("其它异常Tips")
                            }
                        }
                    }, [e("div", {
                        staticClass: "left"
                    }, [e("img", {
                        attrs: {
                            src: a("a010"),
                            alt: ""
                        }
                    }), e("p", [t._v("安装tips")])]), e("div", {
                        staticClass: "shuoming-btn"
                    }, [t._v("说明")])]), e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.choose("解除风险")
                            }
                        }
                    }, [e("div", {
                        staticClass: "left"
                    }, [e("img", {
                        attrs: {
                            src: a("1c78"),
                            alt: ""
                        }
                    }), e("p", [t._v("解除风险流程")])]), e("div", {
                        staticClass: "shuoming-btn"
                    }, [t._v("说明")])])]
                ], 2)], 1)]), e("van-popup", {
                    style: {
                        height: "90%"
                    },
                    attrs: {
                        position: "bottom",
                        round: "",
                        closeable: ""
                    },
                    model: {
                        value: t.showFix,
                        callback: function(s) {
                            t.showFix = s
                        },
                        expression: "showFix"
                    }
                }, [e("FixTool")], 1), e("CoursePhone", {
                    attrs: {
                        viewInfo: t.courseInfo
                    }
                }), e("transition", {
                    attrs: {
                        name: "slide"
                    }
                }, [e("OtherPhone", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.otherPhoneShow,
                        expression: "otherPhoneShow"
                    }],
                    on: {
                        choose: t.choose
                    }
                })], 1), e("van-popup", {
                    attrs: {
                        position: "bottom",
                        closeable: "",
                        round: ""
                    },
                    model: {
                        value: t.showRn,
                        callback: function(s) {
                            t.showRn = s
                        },
                        expression: "showRn"
                    }
                }, [e("RnDownload", {
                    attrs: {
                        RnDate: t.urlDate,
                        imgUrl: t.urlDate.rn_tutorial_image,
                        ios16: t.ios16
                    },
                    on: {
                        downloadRn: t.downloadRn
                    }
                })], 1)], 1)])])
            },
            c = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("p", [t._v("点击按钮 "), a("br"), t._v("选择【浏览器中】打开")])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("p", [t._v("\n            手机报毒无法安装解决办法\n            "), e("img", {
                        attrs: {
                            src: a("4e8f"),
                            alt: ""
                        }
                    })])
                }
            ],
            r = (a("1c01"), a("58b2"), a("8e6e"), a("f3e2"), a("d25f"), a("ac6a"), a("456d"), a("bd86")),
            A = (a("386d"), a("3b2b"), a("57e7"), a("4917"), a("96cf"), a("3b8d")),
            p = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "manual"
                }, [t._t("top", (function() {
                    return [t._m(0)]
                })), e("div", {
                    staticClass: "and-box"
                }, [e("div", {
                    staticClass: "row rowHw",
                    on: {
                        click: function(s) {
                            return t.choose("华为鸿蒙系统")
                        }
                    }
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("4685")
                    }
                })]), e("div", {
                    staticClass: "flex"
                }, t._l(t.brands, (function(s, o) {
                    return e("div", {
                        key: o,
                        staticClass: "brand",
                        on: {
                            click: function(a) {
                                return t.choose(s + "手机安装说明")
                            }
                        }
                    }, [e("img", {
                        staticClass: "img",
                        attrs: {
                            src: a("38b7")("./brand_" + (o + 1) + ".png")
                        }
                    }), e("div", {
                        staticClass: "p"
                    }, [t._v(t._s(s))])])
                })), 0), t._m(1)]), t._t("default", (function() {
                    return [e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.otherPhoneInfoSet({
                                    otherPhoneShow: !0
                                })
                            }
                        }
                    }, [e("img", {
                        staticClass: "img",
                        attrs: {
                            src: a("0f90")
                        }
                    })]), e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.choose("其它异常Tips")
                            }
                        }
                    }, [e("img", {
                        staticClass: "img",
                        attrs: {
                            src: a("1a80")
                        }
                    })]), e("div", {
                        staticClass: "row",
                        on: {
                            click: function(s) {
                                return t.choose("解除风险")
                            }
                        }
                    }, [e("img", {
                        staticClass: "img",
                        attrs: {
                            src: a("c307")
                        }
                    })])]
                }))], 2)
            },
            l = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                        staticClass: "top"
                    }, [a("div", {
                        staticClass: "big"
                    }, [t._v("Android安装说明")]), a("div", {
                        staticClass: "small"
                    }, [t._v("请选择您的手机品牌仔细阅读安装说明")])])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                        staticClass: "row gap_b"
                    }, [a("p", [t._v("由于ZLT含有成人内容，部分手机会误判为"), a("br"), t._v("恶意软件，我们在此承诺绝不放置任意恶意程序 "), a("br"), t._v("请放心使用。 ")])])
                }
            ],
            f = a("2f62");

        function g(t, s) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(t);
                s && (e = e.filter((function(s) {
                    return Object.getOwnPropertyDescriptor(t, s).enumerable
                }))), a.push.apply(a, e)
            }
            return a
        }

        function u(t) {
            for (var s = 1; s < arguments.length; s++) {
                var a = null != arguments[s] ? arguments[s] : {};
                s % 2 ? g(Object(a), !0).forEach((function(s) {
                    Object(r["a"])(t, s, a[s])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach((function(s) {
                    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s))
                }))
            }
            return t
        }
        var d = {
                props: {
                    phone_none: {
                        type: Boolean,
                        default: function() {
                            return !1
                        }
                    }
                },
                components: {},
                data: function() {
                    return {
                        brands: ["华为", "小米", "OPPO", "VIVO", "魅族", "一加", "Realme", "IQOO"]
                    }
                },
                computed: {},
                methods: u(u({}, Object(f["a"])("otherPhone", ["otherPhoneInfoSet"])), {}, {
                    choose: function(t) {
                        this.$emit("choose", t)
                    }
                }),
                mounted: function() {}
            },
            m = d,
            v = (a("36b6"), a("2877")),
            h = Object(v["a"])(m, p, l, !1, null, "030fef98", null),
            D = h.exports,
            C = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("transition", {
                    attrs: {
                        name: "slide"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.contain || t.otherPhoneContain,
                        expression: "contain || otherPhoneContain"
                    }],
                    staticClass: "course_detail"
                }, [e("div", {
                    staticClass: "back_nav"
                }, [e("a", {
                    staticClass: "back",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(s) {
                            return t.$parent.updateCourseInfo({
                                phoneType: ""
                            })
                        }
                    }
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("ef26")
                    }
                })]), e("p", {
                    staticClass: "p"
                }, [t._v(t._s(t.courseInfo.phoneType))])]), e("Scrapper", {
                    staticClass: "examples"
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "华为鸿蒙系统" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='华为鸿蒙系统'"
                    }],
                    staticClass: "harmonyOS"
                }, [e("div", {
                    staticClass: "harmonyOS_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("c42c")
                    }
                })]), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("16b8")
                    }
                }), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("488e")
                    }
                }), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("76c3")
                    }
                }), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("92a1")
                    }
                }), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("40c6")
                    }
                }), e("div", {
                    staticClass: "harmonyOS_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("55da")
                    }
                })]), e("div", {
                    staticClass: "harmonyOS_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("cc93")
                    }
                })]), e("div", {
                    staticClass: "harmonyOS_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v("每天更新 精彩不断")]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("147b")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "华为手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='华为手机安装说明'"
                    }]
                }, [e("img", {
                    staticClass: "brand huawei",
                    attrs: {
                        src: a("c628")
                    }
                }), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("1")]), e("p", [t._v("下载后会弹出风险框，请不用担心，" + t._s(t.courseInfo.appName) + "没有任何病毒，请点击「暂不处理」")])]), e("div", {
                    staticClass: "post huawei_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("60f2")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("2")]), e("p", [t._v("安装后打开"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「信任次应用」")]), t._v("即可")])]), e("div", {
                    staticClass: "post"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("abed")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("3")]), e("p", [t._v("华为自带的「手机管家」中会检测出敏感内容由于" + t._s(t.courseInfo.appName) + "中包含成人内容所致，放心使用")])]), e("div", {
                    staticClass: "post huawei_2"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name hw_text"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("e45d")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "小米手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='小米手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("8676")
                    }
                }), e("img", {
                    attrs: {
                        src: a("95fa")
                    }
                }), e("div", {
                    staticClass: "other_xiaomi_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("1eb2")
                    }
                })]), e("div", {
                    staticClass: "other_xiaomi_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("c42d")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "OPPO手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='OPPO手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("130e")
                    }
                }), e("div", {
                    staticClass: "other_oppo_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("cdcb")
                    }
                })]), e("div", {
                    staticClass: "other_oppo_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("3741")
                    }
                })]), e("div", {
                    staticClass: "other_oppo_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("b130")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "VIVO手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='VIVO手机安装说明'"
                    }]
                }, [e("img", {
                    staticClass: "brand vivo",
                    attrs: {
                        src: a("e93b")
                    }
                }), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("1")]), e("p", [t._v("下载后会弹出风险框，请点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「继续安装」")])])]), e("div", {
                    staticClass: "post vivo_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("7832")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("2")]), e("p", [t._v("在"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「高风险提示」")]), t._v("弹框出现后点击安装，如没有安装，请重复第一步并点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「忽略风险并安装」")])])]), e("div", {
                    staticClass: "post vivo_2"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("36c8")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "魅族手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='魅族手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("b920")
                    }
                }), e("div", {
                    staticClass: "other_meizu_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("d38b")
                    }
                })]), e("div", {
                    staticClass: "other_meizu_logo other_meizu_logo2"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("cf81")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "一加手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='一加手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("c4a8")
                    }
                }), e("div", {
                    staticClass: "other_plus_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("025a")
                    }
                })]), e("div", {
                    staticClass: "other_plus_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("e391")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "Realme手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='Realme手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("div", {
                    staticClass: "other_realme_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("df42")
                    }
                })]), e("div", {
                    staticClass: "other_realme_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("2172")
                    }
                })]), e("div", {
                    staticClass: "other_realme_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("2271")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "IQOO手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='IQOO手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("4114")
                    }
                }), e("div", {
                    staticClass: "other_iQOO_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("efda")
                    }
                })]), e("div", {
                    staticClass: "other_iQOO_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("39c6")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "三星手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='三星手机安装说明'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("ca07")
                    }
                }), e("div", {
                    staticClass: "other_samsung_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("89d2")
                    }
                })]), e("div", {
                    staticClass: "other_samsung_logo"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("0eda")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "其他手机安装说明" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='其他手机安装说明'"
                    }]
                }, [e("img", {
                    staticClass: "brand oppo",
                    attrs: {
                        src: a("e994")
                    }
                }), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("1")]), e("p", [t._v("下载前请先至"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「设置」")]), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「安全性」")])])]), e("div", {
                    staticClass: "post"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("7d90")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("2")]), e("p", [t._v("开启"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「不明的来源」")]), t._v("，并执行"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「确定」")])])]), e("div", {
                    staticClass: "post"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("3d82")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: ["华为手机安装说明", "VIVO手机安装说明", "其他手机安装说明"].includes(t.courseInfo.phoneType),
                        expression: "['华为手机安装说明','VIVO手机安装说明','其他手机安装说明'].includes(courseInfo.phoneType)"
                    }]
                }, [e("h1", {
                    staticClass: "h1"
                }, [t._v("腾讯手机管家设置")]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("1")]), e("p", [t._v("打开「腾讯手机管家」后点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「安全检测」")])])]), e("div", {
                    staticClass: "post"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("5999")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("2")]), e("p", [t._v("在安全检测后点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「处理」")])])]), e("div", {
                    staticClass: "post comm_1"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("0112")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("3")]), e("p", [t._v("继续下一步，点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「移入信任区」")])])]), e("div", {
                    staticClass: "post comm_2"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("c862")
                    }
                })]), e("div", {
                    staticClass: "list"
                }, [e("span", {
                    staticClass: "step"
                }, [t._v("4")]), e("p", [t._v("点击"), e("span", {
                    staticClass: "fc_002000"
                }, [t._v("「确认」")]), t._v("后，白名单添加成功，再次杀毒 就不会提示了")])]), e("div", {
                    staticClass: "post comm_3"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("126a")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "其它异常Tips" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='其它异常Tips'"
                    }],
                    staticClass: "other_tips"
                }, [e("div", {
                    staticClass: "post tips_1"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("d32c")
                    }
                })]), e("div", {
                    staticClass: "post tips_2"
                }, [t.courseInfo.applogo ? e("img", {
                    staticClass: "app_logo",
                    attrs: {
                        src: t.courseInfo.applogo
                    }
                }) : t._e(), t.courseInfo.appName ? e("p", {
                    staticClass: "app_name"
                }, [t._v(t._s(t.courseInfo.appName))]) : t._e(), e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("70f7")
                    }
                })]), e("div", {
                    staticClass: "post tips_3"
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("f9f5")
                    }
                })])]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "解除风险" == t.courseInfo.phoneType,
                        expression: "courseInfo.phoneType=='解除风险'"
                    }],
                    staticClass: "release_risk"
                }, [e("img", {
                    attrs: {
                        src: a("a67a")
                    }
                }), e("img", {
                    attrs: {
                        src: a("7143")
                    }
                }), e("img", {
                    attrs: {
                        src: a("8244")
                    }
                }), e("img", {
                    attrs: {
                        src: a("b2f0")
                    }
                }), e("img", {
                    attrs: {
                        src: a("679a")
                    }
                })])])], 1)])
            },
            w = [],
            b = (a("2caf"), a("ac4d"), a("8a81"), a("5df3"), a("1c4c"), a("7f7f"), a("6b54"), a("87b3"), a("6762"), a("2fdb"), function() {
                var t = this,
                    s = t.$createElement,
                    a = t._self._c || s;
                return a("div", {
                    ref: "scroll"
                }, [a("div", {
                    ref: "content",
                    staticClass: "content"
                }, [t._t("default")], 2)])
            }),
            E = [],
            I = a("f40f"),
            k = a("6dd8");

        function x(t, s) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(t);
                s && (e = e.filter((function(s) {
                    return Object.getOwnPropertyDescriptor(t, s).enumerable
                }))), a.push.apply(a, e)
            }
            return a
        }

        function y(t) {
            for (var s = 1; s < arguments.length; s++) {
                var a = null != arguments[s] ? arguments[s] : {};
                s % 2 ? x(Object(a), !0).forEach((function(s) {
                    Object(r["a"])(t, s, a[s])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach((function(s) {
                    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s))
                }))
            }
            return t
        }
        var j = {
                props: {
                    options: Object
                },
                data: function() {
                    return {
                        optionFinal: y({
                            click: !0,
                            probeType: 3,
                            bounce: {
                                top: !1,
                                bottom: !1
                            },
                            mouseWheel: {
                                speed: 20,
                                invert: !1,
                                easeTime: 300
                            },
                            preventDefaultException: {
                                tagName: /^(a)$/
                            },
                            nestedScroll: !0
                        }, this.options)
                    }
                },
                methods: {
                    detectResizeWapper: function() {
                        var t = this;
                        this.viewDetec = new k["a"]((function() {
                            t.$emit("resize", t.$refs.scroll), t.scroll.refresh()
                        })), this.viewDetec.observe(this.$refs.scroll)
                    },
                    detectResizeInner: function() {
                        var t = this;
                        this.contentDetec = new k["a"]((function() {
                            t.scroll.refresh()
                        })), this.contentDetec.observe(this.$refs.content)
                    },
                    infoEvent: function() {
                        var t = this;
                        this.scroll.on("touchEnd", (function() {
                            t.$emit("touchEnd", t.scroll)
                        })), this.scroll.on("scroll", (function(s) {
                            t.$emit("scroll", s)
                        }))
                    }
                },
                updated: function() {
                    this.scroll.refresh()
                },
                mounted: function() {
                    var t = this;
                    this.scroll = new I["a"](this.$refs.scroll, this.optionFinal), this.infoEvent(), this.detectResizeWapper(), this.detectResizeInner(), this.$emit("mounted", this.$refs.scroll), setTimeout((function() {
                        t.scroll.refresh()
                    }), 500)
                },
                beforeDestroyed: function() {
                    this.viewDetec && (this.viewDetec.disconnect(), this.viewDetec.takeRecords(), this.viewDetec = null)
                }
            },
            R = j,
            U = Object(v["a"])(R, b, E, !1, null, null, null),
            O = U.exports;
        a("9e4c");

        function S(t, s) {
            var a = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!a) {
                if (Array.isArray(t) || (a = H(t)) || s && t && "number" === typeof t.length) {
                    a && (t = a);
                    var e = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, n = !0,
                c = !1;
            return {
                s: function() {
                    a = a.call(t)
                },
                n: function() {
                    var t = a.next();
                    return n = t.done, t
                },
                e: function(t) {
                    c = !0, i = t
                },
                f: function() {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (c) throw i
                    }
                }
            }
        }

        function H(t, s) {
            if (t) {
                if ("string" === typeof t) return P(t, s);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? P(t, s) : void 0
            }
        }

        function P(t, s) {
            (null == s || s > t.length) && (s = t.length);
            for (var a = 0, e = new Array(s); a < s; a++) e[a] = t[a];
            return e
        }

        function B(t, s) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(t);
                s && (e = e.filter((function(s) {
                    return Object.getOwnPropertyDescriptor(t, s).enumerable
                }))), a.push.apply(a, e)
            }
            return a
        }

        function M(t) {
            for (var s = 1; s < arguments.length; s++) {
                var a = null != arguments[s] ? arguments[s] : {};
                s % 2 ? B(Object(a), !0).forEach((function(s) {
                    Object(r["a"])(t, s, a[s])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach((function(s) {
                    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s))
                }))
            }
            return t
        }
        var J = {
                props: {
                    viewInfo: Object
                },
                data: function() {
                    return {
                        containItem: ["安装说明", "Tips", "解除"],
                        otherPhoneContainItem: ["OPPO", "小米", "iQOO", "一加", "realme", "三星", "魅族18", "华为"]
                    }
                },
                computed: {
                    courseInfo: function() {
                        return M({
                            phoneType: "",
                            applogo: null,
                            appName: "",
                            show: !1
                        }, this.viewInfo)
                    },
                    contain: function() {
                        var t, s = S(this.containItem);
                        try {
                            for (s.s(); !(t = s.n()).done;) {
                                var a = t.value;
                                if (this.courseInfo.phoneType.includes(a)) return !0
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return !1
                    },
                    otherPhoneContain: function() {
                        var t, s = S(this.otherPhoneContainItem);
                        try {
                            for (s.s(); !(t = s.n()).done;) {
                                var a = t.value;
                                if (this.courseInfo.phoneType.includes(a)) return !0
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return !1
                    }
                },
                components: {
                    Scrapper: O
                },
                methods: {
                    choose: function(t) {
                        this.courseInfo.phoneType = t
                    }
                },
                mounted: function() {}
            },
            N = J,
            z = (a("7f32"), Object(v["a"])(N, C, w, !1, null, "74d6b56b", null)),
            T = z.exports,
            V = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "other_phone"
                }, [e("div", {
                    staticClass: "back_nav"
                }, [e("a", {
                    staticClass: "back",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(s) {
                            return t.$parent.otherPhoneInfoSet(!1)
                        }
                    }
                }, [e("img", {
                    staticClass: "img",
                    attrs: {
                        src: a("5ded")
                    }
                })]), e("p", {
                    staticClass: "p"
                }, [t._v("其它手机")])]), e("Scrapper", {
                    staticClass: "examples"
                }, [e("div", {
                    staticClass: "container"
                }, [e("div", {
                    on: {
                        click: function(s) {
                            return t.choose("三星手机安装说明")
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: a("4c1a")
                    }
                })]), e("div", {
                    on: {
                        click: function(s) {
                            return t.choose("其他手机安装说明")
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: a("baa7")
                    }
                })])])])], 1)
            },
            Q = [],
            F = {
                data: function() {
                    return {}
                },
                components: {
                    Scrapper: O
                },
                computed: {},
                watch: {},
                methods: {
                    choose: function(t) {
                        this.$emit("choose", t)
                    }
                },
                created: function() {},
                mounted: function() {}
            },
            X = F,
            G = (a("ac50"), Object(v["a"])(X, V, Q, !1, null, "712bf03f", null)),
            W = G.exports,
            L = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "box-fix"
                }, [t._m(0), e("div", {
                    staticClass: "btn",
                    on: {
                        click: t.downloadFix
                    }
                }, [t._v("继续安装")]), e("img", {
                    attrs: {
                        src: a("c4dc"),
                        alt: ""
                    }
                }), t._m(1), t._m(2), e("img", {
                    attrs: {
                        src: a("edb7"),
                        alt: ""
                    }
                }), e("p", [t._v("允许下载配置描述文件")]), e("img", {
                    attrs: {
                        src: a("f5a2"),
                        alt: ""
                    }
                }), e("img", {
                    attrs: {
                        src: a("2e45"),
                        alt: ""
                    }
                }), e("p", [t._v("安装配置描述文件")]), e("img", {
                    attrs: {
                        src: a("701a"),
                        alt: ""
                    }
                }), e("img", {
                    attrs: {
                        src: a("2ae6"),
                        alt: ""
                    }
                }), e("p", [t._v("安装成功")]), e("img", {
                    attrs: {
                        src: a("6a74"),
                        alt: ""
                    }
                }), t._m(3)])
            },
            Y = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                        staticClass: "title"
                    }, [a("p", [t._v("点击下方按钮安装修复工具")]), a("p", [t._v("安装后可永久免费下载应用")])])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("p", [t._v("\n    点击设置里的"), a("span", [t._v("“通用”")]), t._v("按钮，在“通用”页面点击 "), a("span", [t._v("“设备管理”")]), t._v("\n    选择 "), a("span", [t._v("“配置描述文件”")]), t._v(" 中的【糟老头—修复工具】安装\n  ")])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("p", [t._v("【设置>>通用>>设备管理】(iOS9上叫 "), a("span", [t._v("“描述文件”")]), t._v("  iOS10上叫 "), a("span", [t._v("“设备管理”")]), t._v(" )")])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("p", [t._v("回到桌面，"), a("span", [t._v("”修复工具”")]), t._v(" 已成功安装")])
                }
            ],
            Z = {
                data: function() {
                    return {}
                },
                methods: {
                    downloadFix: function() {
                        window.location.href = "https://newdownload.xxx.com/xxx/zlt0730.mobileconfig"
                    }
                }
            },
            K = Z,
            _ = (a("82be"), Object(v["a"])(K, L, Y, !1, null, "b8f8b786", null)),
            q = _.exports,
            $ = function() {
                var t = this,
                    s = t.$createElement,
                    a = t._self._c || s;
                return a("div", {
                    staticClass: "RnDownload"
                }, [t.RnDate ? a("h1", [t._v(t._s("香蕉射视频" + t.RnDate.ldy_rn.name))]) : t._e(), a("div", {
                    staticClass: "line"
                }), a("div", {
                    staticClass: "step1"
                }, [a("img", {
                    attrs: {
                        src: t.RnDate.ldy_rn.img,
                        alt: ""
                    }
                }), a("div", {
                    staticClass: "download-btn",
                    on: {
                        click: t.downloadBtn
                    }
                }, [t._v("立即下载")])]), t._m(0), a("p", {
                    staticClass: "tip"
                }, [t._v("如果没有自动跳转，请到按照此方法进行安装:【设置-通用-设备管理-香蕉射视频-安装】")]), t.ios16 ? t._e() : a("p", {
                    staticClass: "footer-tip"
                }, [t._v("\n    若打开后不显示香蕉射视频，请删除描述文件，重新回到此页面下载安装\n  ")]), t.ios16 ? a("div", {
                    staticClass: "line2"
                }) : t._e(), t.ios16 ? a("div", [t._m(1), a("div", {
                    staticClass: "copy-box"
                }, [t._m(2), a("p", {
                    staticClass: "key-btn",
                    on: {
                        click: t.doCopy
                    }
                }, [t._v("复制密钥")])]), a("p", {
                    staticClass: "footer-tip"
                }, [t._v("\n      为了避免大家无法观影，请安装iOS轻量版，保障您的观影权益！该安装证书已通过苹果官方认证，安全可靠。安装平台入口是能让您更便捷的登陆，该安装仅仅是在您的手机桌面增加一个平台入口，完全不会修改设置，请放心安装。如果手机设至了锁屏密码，需要输入密码后才能继续安装。\n    ")])]) : t._e()])
            },
            tt = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "down-icon"
                    }, [e("img", {
                        attrs: {
                            src: a("eca7"),
                            alt: ""
                        }
                    })])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "step2"
                    }, [e("img", {
                        attrs: {
                            src: a("e911"),
                            alt: ""
                        }
                    })])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", [e("img", {
                        attrs: {
                            src: a("8e36"),
                            alt: ""
                        }
                    }), e("img", {
                        attrs: {
                            src: a("c064"),
                            alt: ""
                        }
                    }), e("p", {}, [t._v("iPhone和iPad App")])])
                }
            ],
            st = (a("a481"), {
                props: {
                    RnDate: {
                        type: Object
                    },
                    imgUrl: {
                        type: String
                    },
                    ios16: {
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        host: location.origin + location.pathname.replace("/config.php", "")
                    }
                },
                created: function() {
                    console.log(this.RnDate, "rn数据")
                },
                methods: {
                    downloadBtn: function() {
                        this.$emit("downloadRn")
                    },
                    imageDomain: function(t) {
                        return this.host + t
                    },
                    doCopy: function() {
                        var t = this,
                            s = this.RnDate.download_secret;
                        this.$copyText(s).then((function() {
                            t.$toast("复制成功")
                        })).catch((function(s) {
                            t.$toast.fail("复制失败"), console.err(s)
                        }))
                    }
                }
            }),
            at = st,
            et = (a("9258"), Object(v["a"])(at, $, tt, !1, null, "7ce9068f", null)),
            ot = et.exports,
            it = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "RnDownload"
                }, [e("h1", [t._v("苹果用户安装指引")]), e("div", {
                    staticClass: "loadone"
                }, [t._m(0), e("div", {
                    staticClass: "right"
                }, [e("p", [t._v("香蕉射视频 苹果永久版")]), e("div", {
                    on: {
                        click: t.downloadBtn
                    }
                }, [e("img", {
                    attrs: {
                        src: a("3815"),
                        alt: ""
                    }
                })])])]), e("div", {
                    staticClass: "tip"
                }, [e("p", [t._v("安装说明："), e("br"), t._v("点击前往下载下载最新版永久软件(点击前往下载的同时已复制密钥)，期间尽量无其他操作下载完成后，立即启动软件。\n    *如打开APP画面空白请 "), e("span", {
                    on: {
                        click: t.downloadBtn
                    }
                }, [t._v("点击我重试。")])])]), t._m(1), e("div", {
                    staticClass: "maintain"
                }), t._m(2)])
            },
            nt = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "left"
                    }, [e("img", {
                        attrs: {
                            src: a("09bf"),
                            alt: ""
                        }
                    })])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                        staticClass: "tipone"
                    }, [a("p", [t._v("打开软件，应显示【维护中】，稍后弹窗【强制升级/确认】"), a("br"), t._v(" 点击后等待下载进度达到100%即可正常观影！")])])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "tips"
                    }, [e("img", {
                        attrs: {
                            src: a("062a"),
                            alt: ""
                        }
                    }), e("div", {
                        staticClass: "tips-bottom"
                    }, [e("div", {
                        staticClass: "q1"
                    }, [e("span", [t._v("Q1")]), e("p", [t._v("打开后不是视频软件，没有维护中啊？")])]), e("div", {
                        staticClass: "q1 a1"
                    }, [e("span", [t._v("A1")]), e("p", [t._v("请退出软件，更新复制第一步解锁密码，重新启动APP尝试。")])]), e("div", {
                        staticClass: "line"
                    }), e("div", {
                        staticClass: "q1 q2"
                    }, [e("span", [t._v("Q2")]), e("p", [t._v("看不了啊，提示无网络")])]), e("div", {
                        staticClass: "q1 a1"
                    }, [e("span", [t._v("A2")]), e("p", [t._v("请重启尝试，可能是第一次进入APP时网络权限未赋予完全导致。")])]), e("div", {
                        staticClass: "line"
                    }), e("div", {
                        staticClass: "q1 q3"
                    }, [e("span", [t._v("Q3")]), e("p", [t._v("软件没有声音，怎么回事啊？")])]), e("div", {
                        staticClass: "q1 a1"
                    }, [e("span", [t._v("A3")]), e("p", [t._v("请将静音模式关闭，左侧有可以上下掰动的按钮可以快速调整。")])]), e("div", {
                        staticClass: "line"
                    }), e("div", {
                        staticClass: "q1 q4"
                    }, [e("span", [t._v("Q4")]), e("p", [t._v("其他问题")])]), e("div", {
                        staticClass: "q1 a1"
                    }, [e("span", [t._v("A4")]), e("p", [t._v("请于早9:00～晚11:59，联系在线客服咨询，我们竭诚为您服务！")])])])])
                }
            ],
            ct = {
                props: {
                    RnKey: {
                        type: String
                    }
                },
                data: function() {
                    return {}
                },
                created: function() {},
                methods: {
                    downloadBtn: function() {
                        this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "RN"
                        }), this.$emit("downloadRn")
                    }
                }
            },
            rt = ct,
            At = (a("d82a"), Object(v["a"])(rt, it, nt, !1, null, "cd966106", null)),
            pt = At.exports;
        a("fc0e"), a("f48a");

        function lt() {
            var t = navigator.userAgent,
                s = !!t.match(/Mac OS X/i);
            return s
        }
        var ft = a("bc3a"),
            gt = a.n(ft),
            ut = {
                timeout: 1e4,
                host: "https://jinriav.github.io/",
                webKey: "luckygogointch-intech",
                endPoint: "H5"
            };

        function dt(t, s) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(t);
                s && (e = e.filter((function(s) {
                    return Object.getOwnPropertyDescriptor(t, s).enumerable
                }))), a.push.apply(a, e)
            }
            return a
        }

        function mt(t) {
            for (var s = 1; s < arguments.length; s++) {
                var a = null != arguments[s] ? arguments[s] : {};
                s % 2 ? dt(Object(a), !0).forEach((function(s) {
                    Object(r["a"])(t, s, a[s])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : dt(Object(a)).forEach((function(s) {
                    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s))
                }))
            }
            return t
        }
        var vt = {
                components: {
                    MuanualAnd: D,
                    CoursePhone: T,
                    OtherPhone: W,
                    FixTool: q,
                    RnDownload: ot,
                    RnDownloadXhyFour: pt
                },
                data: function() {
                    return {
                        serviceIcon: a("daf8"),
                        iosIcon: a("b4ff"),
                        androidIcon: a("762e"),
                        telegramIcon: a("e61a"),
                        isWeiXin: !1,
                        isXhyFour: !1,
                        showRnFour: !1,
                        show: !1,
                        courseInfo: {},
                        otherPhoneShow: !1,
                        showFix: !1,
                        iosDetect: lt,
                        aa: a("09bf"),
                        showTop: !1,
                        start: 0,
                        isStart: !0,
                        currentDate: "",
                        iosLink: "https://xxx.xxx.com/xxx",
                        showRn: !1,
                        urlDate: {},
                        ios16: !1,
                        noSafariDailog: !1,
                        show_ios_down: !1,
                        switchNum: 0,
                        btnLoading: !0
                    }
                },
                created: function() {
                    var t = this;
                    gt.a.get(ut.host + "/api/luodiye/config").then((function(s) {
                        console.log(s.data.code, "首页"), t.btnLoading = !0, 200 === s.data.code ? (t.btnLoading = !1, t.urlDate = s.data.data) : t.$message("加载失败请刷新页面重试")
                    })).catch((function(t) {
                        console.log(t)
                    }));
                    var s = location.protocol + "//" + location.host +"/download.json?t=" + (new Date).getTime();
                    fetch(s).then((function(t) {
                        return t.json()
                    })).then((function(t) {
                        var s = t.android_download_url,
                            a = t.ios_download_url,
                            e = t.chan_key;
                        window.android_download_url = s, window.ios_download_url = a, window.chan_key = e
                    })), this.$sensors.track("LandingPage", {
                        method: "view"
                    })
                },
                mounted: function() {
                    var t = Object(A["a"])(regeneratorRuntime.mark((function t() {
                        var s, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    s = navigator.userAgent.toLowerCase(), "micromessenger" == s.match(/MicroMessenger/i) || "qq" == s.match(/QQ/i) ? this.isWeiXin = !0 : this.isWeiXin = !1, a = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS"), a || (this.noSafariDailog = !0), this.startPlay(), this.handDisp(), this.updateCourseInfo({
                                        applogo: this.aa,
                                        appName: "dayav"
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function s() {
                        return t.apply(this, arguments)
                    }
                    return s
                }(),
                methods: {
                    goServe: function() {
                        window.location.href = "https://www.xxx.com/xxx.html"
                    },
                    onChange: function(t) {
                        this.showTop = 2 == t
                    },
                    startPlay: function() {
                        this.start = 3e3
                    },
                    downloadFix: function() {
                        this.showFix = !0
                    },
                    rnLoad: function() {
                        this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "RN"
                        }), navigator.userAgent.match(/OS 16_[0-9] /i) || navigator.userAgent.match(/OS 16_[0-9]_[0-9] /i) ? (this.ios16 = !0, this.doCopy(), this.showRn = !0) : (this.doCopy(), this.showRn = !0)
                    },
                    downloadRn: function() {
                        this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "app_store"
                        }), this.doCopy(), console.log("跳转"), window.open(this.urlDate.ldy_rn.download_url, "_self")
                    },
                    getUrlParam: function(t) {
                        var s = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                            a = window.location.search.substr(1).match(s);
                        return null != a ? unescape(a[2]) : null
                    },
                    doCopy: function() {
                        var t = this,
                            s = this.getUrlParam("code"),
                            a = "".concat(this.urlDate.ldy_rn.download_key, "#code=").concat(s);
                        this.$copyText(a).then((function() {})).catch((function(s) {
                            t.$toast.fail("复制失败"), console.err(s)
                        }))
                    },
                    showTips: function() {
                        this.show = !0
                    },
                    updateCourseInfo: function(t) {
                        this.courseInfo = mt(mt({}, this.courseInfo), t)
                    },
                    choose: function(t) {
                        this.show = !1, this.updateCourseInfo({
                            phoneType: t
                        })
                    },
                    onMessage: function() {
                        window.location.href = "https://xxx.com/xxx.html"
                    },
                    otherPhoneInfoSet: function(t) {
                        this.show = !1, this.otherPhoneShow = t
                    },
                    handDisp: function() {
                        this.disp = !1, this.disp2 = !0;
                        var t = this;
                        setTimeout((function() {
                            t.disp2 = !1, t.disp = !0, console.log(t.disp, "disppp")
                        }), 3e3)
                    },
                    tInstallOpen: function() {
                        try {
                            TInstall.setHost("https://api.tickshenqu.com");
                            var t = TInstall.parseUrlParams();
                            t.chan_key = window.chan_key, t.time_xytick = "" + Math.round(new Date / 1e3);
                            var s = this;
                            TInstall.getInstall("2NNI9A", t, (function(t) {
                                var a = navigator.userAgent,
                                    e = new MobileDetect(a),
                                    o = e.os();
                                "iOS" == o ? (s.$sensors.track("LandingPage", {
                                    method: "download",
                                    pid: "M19",
                                    ldy_type: "original",
                                    type: "original"
                                }), window.location.href = s.urlDate.ldy_mdm.download_url) : (s.$sensors.track("LandingPage", {
                                    method: "download",
                                    pid: "M19",
                                    type: "original"
                                }), window.location.href = s.urlDate.android_download_url)
                            }))
                        } catch (a) {
                            console.log(a)
                        }
                    },
                    pwaLoad: function() {
                        var t, s;
                        this.$sensors.track("LandingPage", {
                            ethod: "download",
                            pid: "M19",
                            type: "light"
                        }), window.location.href = null === (t = this.urlDate) || void 0 === t || null === (s = t.ldy_pwa) || void 0 === s ? void 0 : s.download_url
                    },
                    mdmLoad: function() {
                        this.$sensors.track("LandingPage", {
                            ethod: "download",
                            pid: "M19",
                            type: "MDM"
                        }), window.location.href = this.urlDate.mdm.download_url
                    },
                    androidLoad: function() {
                        this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "original"
                        }), window.location.href = this.urlDate.android.apk_download_url
                    },
                    ioslyLoad: function() {
                        var t = navigator.userAgent,
                            s = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                        s ? (this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "MDM"
                        }), this.ycOne = !0, this.handDisp(), window.location.href = this.iosLink) : this.$sensors.track("LandingPage", {
                            method: "download",
                            pid: "M19",
                            type: "original"
                        })
                    }
                }
            },
            ht = vt,
            Dt = (a("a200"), Object(v["a"])(ht, n, c, !1, null, "6dc6b082", null)),
            Ct = Dt.exports,
            wt = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "main"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "left"
                }, [t._m(0), t._m(1), e("div", {
                    staticClass: "download"
                }, [e("div", {
                    staticClass: "download-btn"
                }, [e("div", {
                    staticClass: "android-btn",
                    on: {
                        click: t.showToast
                    }
                }, [e("img", {
                    attrs: {
                        src: a("64ae"),
                        alt: ""
                    }
                }), e("p", [t._v("安卓下载")])]), e("div", {
                    staticClass: "android-btn",
                    on: {
                        click: t.showToast
                    }
                }, [e("img", {
                    attrs: {
                        src: a("7e7d"),
                        alt: ""
                    }
                }), e("p", [t._v("iOS下载")])])]), e("div", {
                    staticClass: "qr"
                }, [e("div", {
                    ref: "qrcodeTop",
                    attrs: {
                        id: "qrcode"
                    }
                }), e("p", [t._v("手机扫一扫下载")])])])]), e("div", {
                    staticClass: "right"
                }, [e("van-swipe", {
                    staticClass: "my-swipe",
                    attrs: {
                        autoplay: 3e3,
                        "show-indicators": !1
                    }
                }, [e("van-swipe-item", [e("img", {
                    attrs: {
                        src: a("79dc"),
                        alt: ""
                    }
                })]), e("van-swipe-item", [e("img", {
                    attrs: {
                        src: a("fc9f"),
                        alt: ""
                    }
                })]), e("van-swipe-item", [e("img", {
                    attrs: {
                        src: a("b006"),
                        alt: ""
                    }
                })])], 1)], 1)]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowToast,
                        expression: "isShowToast"
                    }],
                    staticClass: "toasta"
                }, [t._v("请使用手机扫一扫下载")])])
            },
            bt = [

                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "title"
                    }, [e("img", {
                        attrs: {
                            src: a("979f"),
                            alt: ""
                        }
                    })])
                },
                function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "title2"
                    }, [e("img", {
                        attrs: {
                            src: a("4b94"),
                            alt: ""
                        }
                    })])
                }
            ],
            Et = a("d044"),
            It = a.n(Et),
            kt = {
                data: function() {
                    return {
                        isShowToast: !1
                    }
                },
                created: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.createQrcode()
                    })), this.$sensors.track("LandingPage", {
                        method: "view",
                        ldy_type: "PC"
                    })
                },
                methods: {
                    createQrcode: function() {
                        var t = this,
                            s = window.location.href;
                        new It.a(t.$refs.qrcodeTop, {
                            text: s,
                            width: 249,
                            height: 260,
                            colorDark: "#000000",
                            colorLight: "#ffffff"
                        })
                    },
                    showToast: function() {
                        var t = this;
                        this.isShowToast = !0, setTimeout((function() {
                            t.isShowToast = !1
                        }), 3e3), this.$sensors.track("LandingPage", {
                            method: "download",
                            ldy_type: "PC",
                            pid: "M19"
                        })
                    }
                }
            },
            xt = kt,
            yt = (a("a5d9"), Object(v["a"])(xt, wt, bt, !1, null, "4d429b38", null)),
            jt = yt.exports,
            Rt = {
                components: {
                    TempH5: Ct,
                    TempPC: jt
                }
            },
            Ut = Rt,
            Ot = Object(v["a"])(Ut, o, i, !1, null, "50706e07", null),
            St = Ot.exports,
            Ht = (a("d2d1"), a("157a"), a("5596")),
            Pt = a("2bb1"),
            Bt = a("e41f"),
            Mt = a("d399"),
            Jt = a("ad06"),
            Nt = a("44bf"),
            zt = a("b650"),
            Tt = a("4eb5"),
            Vt = a.n(Tt),
            Qt = function(t) {
                var s = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                    a = window.location.search.substring(1).match(s);
                return null != a ? decodeURIComponent(a[2]) : null
            },
            Ft = a("93eb"),
            Xt = a.n(Ft);
        var Gt = Qt("code"),
            Wt = Qt("ghy_version");
        Xt.a.registerPage({
            product_id: "M19",
            invite_code: Gt || "",
            ghy_version: Wt || "",
            ldy_type: "original"
        });
        var Lt = Xt.a,
            Yt = function() {
                var t = navigator.userAgent,
                    s = function() {
                        return t.indexOf("Android") > -1 || t.indexOf("Linux") > -1
                    },
                    a = function() {
                        return !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                    };
                return s() ? 1 : a() ? 2 : 0
            };
        e["a"].use(Ht["a"]), e["a"].use(Pt["a"]), e["a"].use(Bt["a"]), e["a"].use(Mt["a"]), e["a"].use(Jt["a"]), e["a"].use(Nt["a"]), e["a"].use(zt["a"]), e["a"].use(Vt.a), e["a"].prototype.$sensors = Lt, e["a"].prototype.$UA = Yt, new e["a"]({
            render: function(t) {
                return t(St)
            }
        }).$mount("#LandingPage")
    },
    b920: function(t, s, a) {
        t.exports = a.p + "img/other_meizu1.54562df1.jpg"
    },
    baa7: function(t, s, a) {
        t.exports = a.p + "img/other_other.3f759419.png"
    },
    c064: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABKCAYAAADqmUfpAAAAAXNSR0IArs4c6QAAA+xJREFUeF7tXE1oVFcU/s6ZmYChLdjQZGPoyo20defCUluMf1AqXZSCdlMXJZl58Bali0BtfIFKFkYTRu6biXRRSrtoxqZaCkXQRIjoonQhtLgJpRRLKS9FlCiJmblH7jCR4TkR4kzim3Dubt7cd8/3nXvOd+/me4QGIwgC7u7ufg3AUQBvEdHrAF5sNPd5PxOR+0Q0B2DWWjsVRdGNIAgW47go9oDGx8d7Ozo6zhLR4edNYq3xRaRcIzwyPz8/EwSB+10dj4mKCE1MTOyz1p4nopfWGiRh829XKpX8wsLCucHBwbv1RCkMwz4APxHRloSBflY4d6y1Y+l0+nR/f/+D6o6Ojo6+2tnZeWsTkVxJzhwRDQ8MDHzriFKhUPgOwJEGqStba2eI6CIz337W1K7XeyLCIvIKM+8Vkf0AXm4Q66KIDFE+n9+RyWT+iE8QkTtENJDNZifXC2ir1g2CIN3V1dWXTqeHAOyuX1dEIgDDZIz5nJm/jAVdFJEjuVzuQqvAbMQ6YRi+S0QnAeyMkT3nyvYagDfr/rDW2lnP897ZCHCtjGGMeQHAZ0T0BRFx3dq/OKL/x2p72Vo77Hmey0zbDWPMR8w8AqB3BbyI/OqISozNQ2vtJ57nfdN2LAGEYXi4Vr7uZrcybm46osaY92qa84YSrWWgrUtXd3SziZHuqO5om56jWrpaulq6yb4Ba49qj2qPao8mIgMqRipGKkaJaMVVQWiPao9qj2qPJiIDKkYqRipGiWhFvTCoGKkYqRipGCUiAypGKkYqRoloRb0ZqRipGKkYqRglIgMqRipGKkaJaEW9GakYbaQY5fP5bZlM5hiA1PLy8hXf950VJW5eaKo3Vt3RMAzvxtyF62IHKRaLO0WkBGB7jcmctfa453nfN8Us9nIjOwiA35zL8CoRvV03v+UGH2e87enp2QNgJobr8vT09KFSqVRpBVln8CGiTwE4g0+6bs1LzrJ1gpmDWKBFa+3Hrcr25ORkKoqiPma+tJ5En2LZ+mrDTHiFQmGXiFwhImercuNvERnJ5XLFZnezZtXe6yyUcRMegP+qJjxnqywWi1Mi8n6DgFVbZSqVmgLwbzOARMSV0g4AOQDOjPszM58XkabEiJm7yuXyASI6AGBrHCMRlYhoqGqUNcb0MvPvANrd8hzn+ZfbzWw2+/WKx3szWp+dt3uMmU89tj67NDgzexiG+5n5RwCdzZRpAt79x1qbr1QqRd/37zk8T3yewBizjZnPAPggAYDXCsGdFrPOth5F0XTDzxPUr1g795xwfAjgoIhsJ6InGn2tKFo9X0QsgHtE9KeI3EilUj8sLS1d931/KR7rEcNVBwBcUFGmAAAAAElFTkSuQmCC"
    },
    c307: function(t, s, a) {
        t.exports = a.p + "img/hack_3.4c696d4a.png"
    },
    c42c: function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg1.ed7ec06e.jpg"
    },
    c42d: function(t, s, a) {
        t.exports = a.p + "img/other_xiaomi4.3e896fe2.jpg"
    },
    c4a8: function(t, s, a) {
        t.exports = a.p + "img/other_1plus1.d01077a4.jpg"
    },
    c4dc: function(t, s, a) {
        t.exports = a.p + "img/anzhuang.43ec8bad.png"
    },
    c628: function(t, s, a) {
        t.exports = a.p + "img/huawei.55af5b56.png"
    },
    c862: function(t, s, a) {
        t.exports = a.p + "img/comm_14.1ce0d025.jpg"
    },
    ca07: function(t, s, a) {
        t.exports = a.p + "img/other_samsung1.9800088a.jpg"
    },
    cc93: function(t, s, a) {
        t.exports = a.p + "img/harmonyOS_bg8.37bd1993.jpg"
    },
    cdcb: function(t, s, a) {
        t.exports = a.p + "img/other_oppo2.2fafa645.jpg"
    },
    cf81: function(t, s, a) {
        t.exports = a.p + "img/other_meizu3.11e53018.jpg"
    },
    d264: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAn1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3kz5EAAAANHRSTlMA4GBwENDwL4A/6vsFyHpD+cO+trGr9pFlNyUbDNbLqKN0a1pIORcJ5J6YhiAT1IlTT9osYX2EGgAAAeVJREFUWMPt19ly2jAYhuHP2HjfFzCx2SFAIEnT/vd/bfUyclHqdCS3PcjEz9GPBt4BLMYCo9rqFR+Ye5C3pQN6fSMfA6R2gR43PcEQz0rcs+p650cMcnT86uWL3TyNV16cveaGC1wdCwNtHT+d0R197ZOPgUqfepgaBslt6qWrLqQVMX3Ie4CkhU1/oAeQEjRXYPl2fOI70cHKqOLspd5bez3rzxTd12Ya4Cr1FAYyG5hqjlvNl/ucgkr7pdrim3lDrRwo+O8wAIywHRMIMoiJM504YZLOfqXFZCTEgxAtJDFiu29CgkyImAuUJC7GRhG0wmelTcyt0UxvE1EuKsbW3Je/3Z6a/bo5VeOURGnAaV0P9gEcy6HGRja3bqfQ4HJRtzXlcj/YmHI5hy1P5HI5G3UuR4wql1O7ecyNuTE35r52LpfL7dgYcrklW17I5QI28ieCXXfIksu57Ml7cNoj9febZA4PSjNd8U5wiVL1BNkcSjWJno7oJ59rjbn/kvOEc6d/etReQsTjWazmHCDWm0+VCjG60rC7hXP1aJktIEV/93fE6nJGuzDmxtwnyvloHP8uNyX+LlV0P1YN8rqbpV2ilVBrjSHcjGq6xRYKpVl4ecYwk8hWLjd0tOuLPTVLjBo/ASE6A25v6boqAAAAAElFTkSuQmCC"
    },
    d2d1: function(t, s, a) {},
    d32c: function(t, s, a) {
        t.exports = a.p + "img/tips_1.08379712.png"
    },
    d38b: function(t, s, a) {
        t.exports = a.p + "img/other_meizu2.b994e042.jpg"
    },
    d4b8: function(t, s, a) {
        t.exports = a.p + "img/bgg3@3x.52e7082f.png"
    },
    d6ea: function(t, s, a) {},
    d82a: function(t, s, a) {
        "use strict";
        a("5510")
    },
    daf8: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAATVQTFRFAAAA/79A/99g/9VV/99g/9lZ/+lk/99g/+xe/+Ne/+Rb/9tb/+Zj/99g/+lf/+Jf/+Nc/9xc/+Vi/99g/+df/+Ff/+Jd/+Ri/99g/+Zf/+Nh/99g/+Vj/+Vf/+Fi/+Fd/+dh/+Nh/+Rj/+Rf/+Zh/+Jh/+Rj/+Rf/+Vh/+Ni/+Vh/+Ni/+Nf/+Rh/+Ni/+Rh/+Vi/+Ji/+Nj/+Ng/+Ri/+Ji/+Nj/+Ng/+Rh/+Jh/+Ni/+Ng/+Rh/+Ni/+Nh/+Ri/+Ji/+Nh/+Rg/+Ji/+Nh/+Ri/+Ji/+Ji/+Nh/+Ni/+Ji/+Ni/+Nh/+Ni/+Rh/+Ji/+Jh/+Nh/+Rh/+Ji/+Nh/+Ni/+Ji/+Jh/+Nh/+Ni/+Ji/+Nh/+Ni/+Jh/+Ni/+Jh/+Ni/+Jh/+Ni/+Ni/+Nh/+Ni/+NiXGSBrAAAAGZ0Uk5TAAQIDBAUFxgbGxwcHyAjIyQkJygrKywvMDM3ODs7PDw/P0NDR0dLS09TV1tbX2Nna2tvb3Nzd3d7e39/g4eLj4+Tl5ebn5+nq6+vs7O3u7u7v8PDx8vLy8/T09fb3+Pn6+/z9/f7VZZoEwAAAypJREFUeNrt1f132lQcBvAnF1acLTprtaXzZVjpoJVVTCtzG0gtoNXgisONjpeMhDz//5+wXG6ahNcEztlv+/ya831yzn3uCz76oLS9k3K1VquWC3sa1ratGxZ91o2+hXVkDYcznOss4jpsU+rV9dzBg3QmV6r3KL3aRxyJOl39ix2EpMtduq4EImX6JDtHmJOXEYMMIhRsclTEQj+ZpF3ASr+QbH3q1fi9Xjfa7VZdfygwkbohqUfNVzRVRGNE36hxqDJfrE44dshzNd7mjK6KKJPOMZbYtcmncCWbXKApvARrFwuJLlmdBPW50OBzuC7JW4FFnpFtAeAbi0tY3wLQOmQFC3xlc5wGsG9xKSsDIG3R+QLzrtX63h9wheE2gHPyL8w5IHsCwEuuZADQ+uTXmNUkTwCcMsIpgCLZxIykTVMAwmSEoQC0AZ0kpj0hnwPQGekJgOfkGaa1yB0AXUZ6K4sgDUwRNntqJaMdTH5kC4Q9JGsAfmUMFwBq5HcIK5EFAH9TiWyyMHMok4ZqdsAYhgAekEbQg1axSWoAHMbgaIBwSLsioPxDlwkgyViSAN7RdQ3A33z99QJ63raUXlHqAkgwloS/YTqQLEq3cNmMwYLrLSUbwdQQoY345r8xZ4xv3oS2IoaUHEivg7Amlc8gHjdN+t418gLbVOrBXzuQipz4JHSYi5AOSpfX7bZRO9uDdBZ8vAv7GZLWovSDrMHhhLmNOfdNToxlCTlKLQ0TokF6F7pBpTeXsCWL88v/jaRTF7iT1smXcGWpzL2ihwN6slAXX2kHYV3vjmnTY9e24EtWHXpa3v31GtMqZAauL4P+7EYuAVfiuGEFbe576/4C01J//qFBOmeI0+/833cYUobUkYd3GYMrGKpfsoOlRItL/Svu3qA8NkloCXhV3WpYQVS5UFXzX/E8Vsv2OKefDQprI4rQBzPjRQ1KjuoVj3R01adnUD9S497rX0RM9x6dFosnj+4BSF1clrcA7JrkFdaXG5G088iaqot1pUaU7Kf2ZvM4o88Q2ECFHueZhk2UqAx/xGaSI5JB/5u2MH6MzaX03y928NGH8R76uFMEGz+dMAAAAABJRU5ErkJggg=="
    },
    df42: function(t, s, a) {
        t.exports = a.p + "img/other_realme1.dd2d7aaf.jpg"
    },
    e391: function(t, s, a) {
        t.exports = a.p + "img/other_1plus3.49a9dd41.jpg"
    },
    e45d: function(t, s, a) {
        t.exports = a.p + "img/huawei_08.79524e50.jpg"
    },
    e61a: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    e911: function(t, s, a) {
        t.exports = a.p + "img/tsts_bg@2x.8c8d3b7b.png"
    },
    e93b: function(t, s, a) {
        t.exports = a.p + "img/vivo.43cfe012.png"
    },
    e994: function(t, s, a) {
        t.exports = a.p + "img/other.f80da5a9.png"
    },
    eca7: function(t, s) {
        t.exports = "data:image/png;base64,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"
    },
    edb7: function(t, s, a) {
        t.exports = a.p + "img/step1.12069703.png"
    },
    ef26: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAMAAABf788oAAAASFBMVEUAAABmZmZmZmZnZ2dmZmZlZWVtbW1nZ2dmZmZmZmZmZmZmZmZkZGRgYGBmZmZra2tmZmZmZmZlZWVlZWVmZmZnZ2dmZmZmZmZpsm60AAAAF3RSTlMA+dHIvbALpJaEcEw6EPITwmliW1VD3shLdxAAAABuSURBVBjTZdFHEsQgDETREeCIsSf/+9/U21Y1u6cqCYVHesd/Sv4FT3UPyiX+QB3iF7RZvEMquMGiXmFVL7CpJ9iFc4O3eFTiK74K0TW/cB5CDXiKF/VvvTFv3Yfz8X1BvkJdco70oA4/VD7l2W4r0QaWz87CFAAAAABJRU5ErkJggg=="
    },
    efda: function(t, s, a) {
        t.exports = a.p + "img/other_iQOO2.0742437a.jpg"
    },
    f250: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAA/1BMVEUAAAAGAwMAAAAIAgIHAgIIAwMGAwMHAwMHAwMHAgIIAgIIAwMHAgIFAAAIAgIIAwMHAwMAAAAHAgIHAgIAAAAHAwMIAgIGAAAHAAAAAAAIBAQIAwPkvkrivEkMBwTeuUjgu0hVRRzatUYzKBESDAaFbSvRrkONdC2DbCpgTx8QCwbct0fIpkBKOxg5LRIeFwrDoj5FNxYXEQjXs0W0lTqsjjekiDSXfDB7ZSdqVyJaSR0sIg4jGwwbFAnVsUTOq0J/aClmUyFRQhonHg2/nj26mzy4mDtxXSUvJRAVDweSeS+Ibyt2YSZOPhk+MhSfhDNvWySxkjmbgDJ0XyWFbivcXQQqAAAAGnRSTlMAWhfi8cRLuabu6Z1oNdXImQXziwKWeSgmCLbdf7gAAAOLSURBVGje7Zpnc9pAEIZJiJM4zXF6Nu9KF0GEMCCB6b2YZgy45f//lgh1Uog+ICaT0fMFRsPtc7urEzO6SwR4+OLpyTHtgWdHT188TPyOx89oryQf/6J4maS9k3y57XhLkfAhoDh9QhHx5NSTROYwLa7jNUXIe6fnFCl295MUKcmN4wFFzANT8oYi5pH5LKHIeRhltfx6PafIeZ44osg5SjyiqDE7TwcglsQSj1jyZ8mXA/AflYt+JZbEklgSS2LJfyxJNQYF8pCM0mzQXHcl2iZ90Wo0Wu1L+onz1LCxXHXO/iL5KuMbuej1PgMQ+cwFBZBaVYUBVqbDLXu3MZYBcK9WknZLFKG5sVY9gFlsPPkUeVwuNgaxuc41gzw6U+s6MyA3pV2STqulu74yuFdvZmc1BVDXXh4ZAS5qw+xgzOBrL9rFBJCry+wwY6afW0qhGt/Om7HatGHdY1TcQs8A+btk6WY58IAc6sxKy7p+XmPIhVCSDHPVcGc5ZpF1vprupSscmtGcQhZk9Etu/xfMtR2S0m2laf8wh7JOLlmBvmQXUaBCHrfAvV3EWwTumG4ecifE3TWCVyETQwWnnATFV/LQZdhd6aiQ2+T3DbgJIWkAGvlUgRFtqKA3J490HhNrKqkyiuSTBa5DSDRgSRbz2SVRodm0JzqB2g5IihhbEl3BNBgGqIaQ3AMZuzkTsZ1SObhmVEzdTMymeTSBeghJiTE+tzLPQR6kyUVjHpLHiFG3Ynf7YN3vyR04G0KSVpErWAOuAG54syzInL/0EskDjvIaqPsLU0X5PISEZgJF3dJlzFwabi7GGKh3yeLM9Pc6RE69lKzkOCrgBYWRGFOwag07GwCsSW4qAqJitaVdlSFG5HDPnLPtpSJDSYWS0DrP4GJmbuaykCHfuKvmRgFyVU2rKYD47i/AGoPVu8HVdPPZCvuon08A8MjqC0O446SsAgelmSaP8ysBh36JdkpyQvOH3VRUeWT3RVn48eaZYlkIpXinUxBpVMvnhNybaAbtlBir1Zx8uqmSYfd4lQ6G6+iFgt6R6CfS7XWhlDKkf+E/3iaWxJJYEktiSSyJ36YGiSV/5CAbZwfZAjzIZuZBtmUPs8EcfeffHGrT/90xRcqxfb6HIsU57fOUIuR1wubdCUXGk4TL5yRFxKtTSxDpIZy3iS0+vaK98+rjwQ+R+cfhjvZiOj7ZPg73A0uJDRA319uQAAAAAElFTkSuQmCC"
    },
    f48a: function(t, s, a) {},
    f5a2: function(t, s, a) {
        t.exports = a.p + "img/miaosu.c1ebad24.png"
    },
    f743: function(t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABHVBMVEUAAACbdxr4wCHxuiCGaA+EaRb1vSHmsh/5xDLktC7XpR3TpivSoh2+kRu4kCW4jRmpgReFZw6FbAqKdgDeqx+xiBiPbBLrtSDgrR/MnRyyiBmiexaJbA+AYgrttiDaqB7Flxu1ixmQbxL/xSNobXNnbHL9xCH/yTSKgGHvuyvoty94dmqFfWS5nUf6wiaUh1+ci1ZpbXD8wyJnbHGslFH3wCVrbm9wcW1xcmz1vyfktTBtcG6Ae2WOg17xvCrzvSj5wSR0dGuvlk/Fo0HKpj52dWqijlPOqDzVrDj7wiT6wiJ4dml8eGefjFWulU2ymEvcsDSMgWCThVuYiFrBoEPSqjpvcHCaiVmokVG9nkbYrjjquC3suSzhsjO2mknNjIi4AAAAI3RSTlMAhP7+KBz++/779fPy3dXVtCINBvnHRv357cqhMBr99ubOU8ACRT0AAAP3SURBVGjevdrZetJQFIbh0FpttWoHrfO4yC9UqJAQ5nmeKQUslLb3fxnuLK3EPgxKs/wOWo54n6wkmwSiOfI8fvhgg1zo/oOHjz3anPZf3ydX23y9f4s42Nsk19vcO3AaW69IpI9bM+PoGQn17OjGuPeSxHp2T+MOd0mw3UNG9ki0PR7WfRJt0x7YUxLuqTp6myTcxpbmIfE82hMS74n2iMR7pO2QeDvaNom3rX0h8b4sRoyTZTUAEBHuhliRwNL6g24pmQfuhPh9undxOhdO947zhgEJxGmlBmW/NKIqdC4ArIdkV46L89pDm+SBtRCjHlxWbzxoRxlRxboWsA6yYgQEGJfDTMpUjldP9awVyPohPzqL8+ZUhnlIIUAumOaZBU6FEHassq14w50EIIbAGsYVosdGYggrHRvRM00phLuKeVWpU0kEzSofx8U1kFWnieNlPWojmYTLJyNUs9fZlo20jv8ZOQl+W1q5QbN8NhK/cP3zJOQYDs75IK7JIlVGymsg/F6LpD8QcgERHBcjZiY0v06t4UD66+54RirH9Bdl27NDWArBBZ+M/dyayNe/QRpV/kiJGJJIsmBvSLQOQSRfNe3DzWeJIUCzVLCHFS0RiSFWLW3qujrWcyII7HITZagNadUMKcSqnRd0u1QvBwkEJ8lJJs77XA+HLoncQE6GEUfjkK+g5sSEbp5NyR0kGdNvX3D/RMx45xJuId/nX91HfUOLSAzhzWj3rhpwGdF158BS/eHUAshFhD+ZfDepO9PybF+4ipzfXFeDcx1J8Vp7rRTQLHeRbNpG9MokIYgYo4quGLNVygshrJTjfPa16oAUAljBAi9V6VMDkECYyXZjfJMQUIoYAn/E5L3vuxBDCEa2avJtaOYKMgiXHyhENZhCDAGOz8KK0cNVP0QQzjjNhHVVdJyDGIJGPWCyEslBCiE01alvl+omACGEYIxiNmLGg5YYQkApzhOrlBoQQTi1wPCFfHtkQAjhBSZuI3q6bkAGYWXMNz5KEUSQO2eEv00TQZjJqVOfb12TBqQQwvTXAhM6lkN4geHbn04WYgia9YC9IislB0AIQbNWYCU8TsggrBil1O8vnyGBMGMEf335PEkYYgisXpy3RV2NLUG273j364/EWGmXQQva1nbuiMBf5QXGW6gtUnYW/piZ7YdV7SmtCv6zMNe+ovk9WvizbKPcLRaLPOlVXV4X7a4XbfUTzbN4ED//rA6Y/ZuXR9vaIOGaB//nR3/trfCmbPDzHp9ItOea3dYHEmz3QOPePiCxXtrD4j5vklDvjxjg9ndJpFf7mqPDNy/cJ168OdT+7N1ztx8ie/5Oc+R8HM4VaePW43A/AJU7fG1U5wOIAAAAAElFTkSuQmCC"
    },
    f802: function(t, s, a) {},
    f9f5: function(t, s, a) {
        t.exports = a.p + "img/tips_2.d10c2a5f.png"
    },
    fc0e: function(t, s, a) {},
    fc9f: function(t, s, a) {
        t.exports = a.p + "img/bg2@3x.85e23a0b.png"
    }
});
//# sourceMappingURL=index.b498455d.js.map