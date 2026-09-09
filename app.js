/* Portfolio-revamp interactions: dependency-free, reduced-motion aware. */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;

  /* ---- Founder / Engineer mode ---- */
  var MODES = ["founder", "engineer"];
  var mode = "founder";
  try {
    var saved = window.localStorage.getItem("aj-mode");
    if (MODES.indexOf(saved) !== -1) mode = saved;
  } catch (e) { /* private mode */ }

  var heroNotes = {
    founder: document.querySelector('[data-note="founder"]'),
    engineer: document.querySelector('[data-note="engineer"]')
  };
  var lensTitle = document.getElementById("lens-title");
  var lensCopy = document.getElementById("lens-copy");
  var LENS = {
    founder: {
      title: "Reading as a founder",
      copy: "Emphasis: InternKhojo end-to-end, GTM thinking, and leading a 30+ intern team. Proof that I own problems, not just tickets."
    },
    engineer: {
      title: "Reading as an engineer",
      copy: "Emphasis: technical decisions, systems thinking, and execution inside teams — Samsung R&D research, SQL at 150K+ rows, Arduino + PLC/SCADA."
    }
  };

  function applyMode(next, persist) {
    mode = next;
    root.setAttribute("data-mode", mode);
    document.querySelectorAll(".mode-switch button").forEach(function (b) {
      b.setAttribute("aria-checked", b.dataset.mode === mode ? "true" : "false");
    });
    document.querySelectorAll(".lens-card").forEach(function (c) {
      c.setAttribute("aria-pressed", c.dataset.mode === mode ? "true" : "false");
    });
    if (heroNotes.founder && heroNotes.engineer) {
      heroNotes.founder.hidden = mode !== "founder";
      heroNotes.engineer.hidden = mode !== "engineer";
    }
    if (lensTitle) lensTitle.textContent = LENS[mode].title;
    if (lensCopy) lensCopy.textContent = LENS[mode].copy;
    // spotlight: founder -> case study; engineer -> technical cards
    document.querySelectorAll("[data-spot]").forEach(function (el) {
      el.classList.toggle("spot", el.dataset.spot === mode);
    });
    if (persist) {
      try { window.localStorage.setItem("aj-mode", mode); } catch (e) {}
    }
  }

  document.querySelectorAll("[data-set-mode]").forEach(function (el) {
    el.addEventListener("click", function () { applyMode(el.dataset.setMode, true); });
  });
  applyMode(mode, false);

  /* ---- mobile nav ---- */
  var menuBtn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- active nav ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  /* ---- subtle magnetic buttons (fine pointers only) ---- */
  var fine = window.matchMedia("(pointer: fine)").matches;
  if (fine && !reduceMotion) {
    document.querySelectorAll(".btn-primary").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width;
        var y = (e.clientY - r.top - r.height / 2) / r.height;
        btn.style.transform = "translate(" + (x * 6).toFixed(1) + "px," + (y * 6).toFixed(1) + "px)";
      });
      btn.addEventListener("pointerleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---- footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
