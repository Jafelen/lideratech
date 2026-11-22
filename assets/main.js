/**
 * Lideratech — página de espera
 * Sin build, sin dependencias. Sólo mejoras progresivas:
 * el sitio funciona igual con este archivo ausente.
 */
(function () {
  "use strict";

  // El año del aviso se mantiene solo, sin editar el HTML cada año.
  var slots = document.querySelectorAll("[data-year]");
  var current = String(new Date().getFullYear());
  Array.prototype.forEach.call(slots, function (slot) {
    slot.textContent = current;
  });
})();
