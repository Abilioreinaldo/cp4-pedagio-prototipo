// Rotula as células das tabelas com o cabeçalho da coluna (usado no layout de celular).
(function () {
  function label() {
    document.querySelectorAll('.tbl').forEach(function (t) {
      var th = t.querySelector('.th');
      if (!th) return;
      var heads = Array.prototype.map.call(th.children, function (c) { return c.textContent.trim(); });
      t.querySelectorAll('.tr').forEach(function (row) {
        Array.prototype.forEach.call(row.children, function (c, i) { c.setAttribute('data-label', heads[i] || ''); });
      });
    });
  }
  label();
  new MutationObserver(label).observe(document.body, { childList: true, subtree: true });
})();
