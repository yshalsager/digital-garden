// dynamic direction
let previousUrl = '';
const observer = new MutationObserver(function (mutations) {
  // verbose language name in navbar
  document.querySelector("ul.md-tabs__list li:nth-child(3) a").textContent = "العربية (Arabic)";
  document.querySelector("ul.md-tabs__list li:nth-child(4) a").textContent = "English (اﻹنجليزية)";
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    document.body.setAttribute("dir", window.location.pathname.includes("/en/") ? "ltr" : "rtl");
  }

});
observer.observe(document, { subtree: true, childList: true });

// sortables
document$.subscribe(function () {
  const tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function (table) {
    new Tablesort(table)
  })
})

