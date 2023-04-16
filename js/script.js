function _0x4d9d(_0xeb7acf, _0x141c58) {
  const _0x2516b3 = _0x2516();
  return (
    (_0x4d9d = function (_0x4d9db1, _0x3d68af) {
      _0x4d9db1 = _0x4d9db1 - 0x1dd;
      let _0x5751ce = _0x2516b3[_0x4d9db1];
      return _0x5751ce;
    }),
    _0x4d9d(_0xeb7acf, _0x141c58)
  );
}
const _0x756cb7 = _0x4d9d;
(function (_0x48baa9, _0x470427) {
  const _0xcd2dc9 = _0x4d9d,
    _0xca7c0 = _0x48baa9();
  while (!![]) {
    try {
      const _0x5326d4 =
        (-parseInt(_0xcd2dc9(0x211)) / 0x1) *
          (parseInt(_0xcd2dc9(0x210)) / 0x2) +
        (-parseInt(_0xcd2dc9(0x1fd)) / 0x3) *
          (-parseInt(_0xcd2dc9(0x201)) / 0x4) +
        (parseInt(_0xcd2dc9(0x1f4)) / 0x5) *
          (-parseInt(_0xcd2dc9(0x1fa)) / 0x6) +
        (-parseInt(_0xcd2dc9(0x1e9)) / 0x7) *
          (-parseInt(_0xcd2dc9(0x205)) / 0x8) +
        parseInt(_0xcd2dc9(0x1df)) / 0x9 +
        (parseInt(_0xcd2dc9(0x20d)) / 0xa) *
          (parseInt(_0xcd2dc9(0x21a)) / 0xb) +
        (-parseInt(_0xcd2dc9(0x1eb)) / 0xc) *
          (-parseInt(_0xcd2dc9(0x20e)) / 0xd);
      if (_0x5326d4 === _0x470427) break;
      else _0xca7c0["push"](_0xca7c0["shift"]());
    } catch (_0x343d83) {
      _0xca7c0["push"](_0xca7c0["shift"]());
    }
  }
})(_0x2516, 0xbcfcd);
let menuIcon = document[_0x756cb7(0x1e8)](_0x756cb7(0x1ea)),
  navbar = document[_0x756cb7(0x1e8)](_0x756cb7(0x1ef));
menuIcon[_0x756cb7(0x208)] = () => {
  const _0x17c41d = _0x756cb7;
  menuIcon[_0x17c41d(0x1e1)]["toggle"](_0x17c41d(0x20a)),
    navbar["classList"]["toggle"](_0x17c41d(0x1f5));
};
let sections = document["querySelectorAll"](_0x756cb7(0x1f2)),
  navLinks = document[_0x756cb7(0x21c)](_0x756cb7(0x204));
(window["onscroll"] = () => {
  const _0x21f31f = _0x756cb7;
  sections[_0x21f31f(0x20f)]((_0x343798) => {
    const _0x890082 = _0x21f31f;
    let _0x7049e9 = window["screenY"],
      _0x1c2d68 = _0x343798[_0x890082(0x1dd)] - 0x96,
      _0x554c3e = _0x343798[_0x890082(0x206)],
      _0x4480e7 = _0x343798[_0x890082(0x216)]("id");
    _0x7049e9 >= _0x1c2d68 &&
      _0x7049e9 < _0x1c2d68 + _0x554c3e &&
      navLinks[_0x890082(0x20f)]((_0xc27d21) => {
        const _0x14952c = _0x890082;
        _0xc27d21[_0x14952c(0x1e1)][_0x14952c(0x1ed)](_0x14952c(0x1f5)),
          document[_0x14952c(0x1e8)](
            "header\x20nav\x20a[href*=" + _0x4480e7 + "]"
          )[_0x14952c(0x1e1)]["add"]("active");
      });
  });
  let _0x5e12a1 = document[_0x21f31f(0x1e8)]("header");
  _0x5e12a1[_0x21f31f(0x1e1)]["toggle"](
    "sticky",
    window[_0x21f31f(0x1e0)] > 0x64
  ),
    menuIcon["classList"]["remove"]("bx-x"),
    navbar[_0x21f31f(0x1e1)][_0x21f31f(0x1ed)](_0x21f31f(0x1f5));
}),
  ScrollReveal({
    reset: !![],
    distance: _0x756cb7(0x1f8),
    duration: 0x3e8,
    delay: 0x3e8,
  }),
  ScrollReveal()[_0x756cb7(0x207)](_0x756cb7(0x219), {
    origin: _0x756cb7(0x214),
  }),
  ScrollReveal()[_0x756cb7(0x207)](_0x756cb7(0x1f6), {
    origin: _0x756cb7(0x215),
  }),
  ScrollReveal()[_0x756cb7(0x207)](_0x756cb7(0x20c), {
    origin: _0x756cb7(0x1fe),
  }),
  ScrollReveal()[_0x756cb7(0x207)](".home-content\x20p,\x20.about-content", {
    origin: _0x756cb7(0x1fb),
  });
const typed = new Typed(".multiple-text", {
    strings: [
      _0x756cb7(0x1e7),
      "estudiante\x20de\x20Ingenieria\x20en\x20Sistemas",
    ],
    typeSpeed: 0x64,
    backSpeed: 0x64,
    backDelay: 0x3e8,
    loop: !![],
  }),
  scriptURL =
    "https://script.google.com/macros/s/AKfycbzNslMW6Ag_vOr4goQ0LZELxlZ0_tD1g4td3RCsCf9rhc9XWJYYGt1aZJxDeRAUvNBT/exec",
  form = document[_0x756cb7(0x1f1)][_0x756cb7(0x1e5)],
  msg = document[_0x756cb7(0x1fc)](_0x756cb7(0x1e4));
form[_0x756cb7(0x20b)]("submit", (_0x330672) => {
  const _0x348148 = _0x756cb7;
  _0x330672[_0x348148(0x217)](),
    fetch(scriptURL, { method: _0x348148(0x1e2), body: new FormData(form) })
      [_0x348148(0x1de)]((_0x318f59) => {
        const _0x233b32 = _0x348148;
        (msg[_0x233b32(0x1ee)] =
          "Gracias!!\x20Mensaje\x20enviado\x20correctamente"),
          setTimeout(function () {
            const _0x530c2e = _0x233b32;
            (msg["innerHTML"] = ""), closeDialog(_0x530c2e(0x1f3));
          }, 0x1388),
          form[_0x233b32(0x202)]();
      })
      [_0x348148(0x213)]((_0x56a75c) =>
        console[_0x348148(0x209)](_0x348148(0x1e6), _0x56a75c[_0x348148(0x1ff)])
      );
});
const [date, time] = formatDate(new Date())["split"]("\x20"),
  datetimeLocalInput = document[_0x756cb7(0x1fc)]("datetime-local");
function _0x2516() {
  const _0x551a6c = [
    "getDate",
    "forms",
    "section",
    "popup",
    "22085yxdRji",
    "active",
    ".home-img,\x20.services-container,\x20.portafolio-box,\x20.contact\x20form",
    "getHours",
    "80px",
    "keyCode",
    "978rHvrUO",
    "right",
    "getElementById",
    "3esCKtz",
    "left",
    "message",
    "value",
    "1804412eZlGDY",
    "reset",
    "getFullYear",
    ".header\x20nav\x20a",
    "725496LHJldf",
    "offsetHeight",
    "reveal",
    "onclick",
    "error",
    "bx-x",
    "addEventListener",
    ".home-content\x20h1,\x20.about-img",
    "58420URqIXD",
    "221TLdfGH",
    "forEach",
    "4gPbeTn",
    "489141EHPgSN",
    "padStart",
    "catch",
    "top",
    "bottom",
    "getAttribute",
    "preventDefault",
    "toString",
    ".home-content,\x20.heading",
    "341SaQXsd",
    "which",
    "querySelectorAll",
    "offsetTop",
    "then",
    "491985BMVZYL",
    "scrollY",
    "classList",
    "POST",
    "join",
    "msg",
    "submit-to-google-sheet",
    "Error!",
    "estudiante\x20de\x20Análisis\x20y\x20Desarrollo\x20de\x20Sistemas\x20de\x20Información",
    "querySelector",
    "119siscSi",
    "#menu-icon",
    "172092QshAND",
    "getMinutes",
    "remove",
    "innerHTML",
    ".navbar",
  ];
  _0x2516 = function () {
    return _0x551a6c;
  };
  return _0x2516();
}
datetimeLocalInput[_0x756cb7(0x200)] = date + "T" + time;
function padTo2Digits(_0x24e2c4) {
  const _0x372098 = _0x756cb7;
  return _0x24e2c4[_0x372098(0x218)]()[_0x372098(0x212)](0x2, "0");
}
function formatDate(_0x5a5038) {
  const _0x4db266 = _0x756cb7;
  return (
    [
      _0x5a5038[_0x4db266(0x203)](),
      padTo2Digits(_0x5a5038["getMonth"]() + 0x1),
      padTo2Digits(_0x5a5038[_0x4db266(0x1f0)]()),
    ]["join"]("-") +
    "\x20" +
    [
      padTo2Digits(_0x5a5038[_0x4db266(0x1f7)]()),
      padTo2Digits(_0x5a5038[_0x4db266(0x1ec)]()),
    ][_0x4db266(0x1e3)](":")
  );
}
function onlyNumberKey(_0x76a95e) {
  const _0x1c7b93 = _0x756cb7;
  var _0x4b7841 = _0x76a95e[_0x1c7b93(0x21b)]
    ? _0x76a95e[_0x1c7b93(0x21b)]
    : _0x76a95e[_0x1c7b93(0x1f9)];
  if (_0x4b7841 > 0x1f && (_0x4b7841 < 0x30 || _0x4b7841 > 0x39)) return ![];
  return !![];
}
