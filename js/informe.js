/* ============================================================
   INFORME CUERPO ACADÉMICO — lógica de renderizado
   Módulos independientes: KPIs, tabla comparativa por zona,
   tarjetas de zona (acordeón) y tabla consolidada. Todos
   consumen ZONAS/TOTALES/ROLES definidos en js/datos.js.
   ============================================================ */

(function () {
  "use strict";

  const fmt = new Intl.NumberFormat("es-CO");
  const pct = (parte, total) => (total ? ((parte / total) * 100) : 0);

  // Oculto hasta tener el listado de cursos depurado; cambiar a true para reactivarlo.
  const MOSTRAR_CURSOS_OFERTADOS = false;

  /* ---------------------------------------------------------
     1. TARJETAS KPI
     --------------------------------------------------------- */
  function renderKpis() {
    const cont = document.getElementById("kpi-grid");
    if (!cont) return;

    const totalPersonal = TOTALES.personal.total;
    const totalCursos = TOTALES.oferta.cursos;
    const totalGrupos = TOTALES.oferta.grupos;
    const totalCupos = TOTALES.oferta.cupos;

    const kpis = [
      {
        icon: "👥",
        label: "Cuerpo académico total",
        value: fmt.format(totalPersonal),
        delta: `${ZONAS.length} zonas · 20 departamentos`,
        bar: 100,
      },
      {
        icon: "📚",
        label: "Cursos activos",
        value: fmt.format(totalCursos),
        delta: `${INFORME_META.notaOferta}`,
        bar: 100,
      },
      {
        icon: "🧩",
        label: "Grupos conformados",
        value: fmt.format(totalGrupos),
        delta: `≈ ${(totalGrupos / totalCursos).toFixed(1)} grupos por curso`,
        bar: 100,
      },
      {
        icon: "🎓",
        label: "Cupos ofertados",
        value: fmt.format(totalCupos),
        delta: `50 cupos por grupo`,
        bar: 100,
      },
    ];

    cont.innerHTML = kpis.map((k) => `
      <article class="kpi-card">
        <div class="kpi-card__icon" aria-hidden="true">${k.icon}</div>
        <span class="kpi-card__label">${k.label}</span>
        <span class="kpi-card__value">${k.value}</span>
        <span class="kpi-card__delta">${k.delta}</span>
        <div class="kpi-card__bar"><span style="width:${k.bar}%"></span></div>
      </article>
    `).join("");
  }

  /* ---------------------------------------------------------
     2. TABLA COMPARATIVA POR ZONA
     Una sola tabla con lo esencial de cada zona: cuerpo
     académico, cursos, grupos, cupos y su participación
     porcentual sobre el total nacional.
     --------------------------------------------------------- */
  function renderComparativoZonas() {
    const table = document.getElementById("tabla-comparativo-zonas");
    if (!table) return;

    const thead = `
      <thead>
        <tr>
          <th>Zona</th>
          <th>Cuerpo académico</th>
          <th>Cursos</th>
          <th>Grupos</th>
          <th>Cupos</th>
          <th>Iglesias</th>
          <th>Creyentes</th>
          <th>% del total nacional</th>
        </tr>
      </thead>`;

    const filas = ZONAS.map((z) => {
      const share = pct(z.personal.total, TOTALES.personal.total);
      return `
        <tr>
          <td class="cell-zona"><span class="zona-swatch" style="background:${z.color}"></span>${z.nombre}</td>
          <td>${fmt.format(z.personal.total)}</td>
          <td>${fmt.format(z.oferta.cursos)}</td>
          <td>${fmt.format(z.oferta.grupos)}</td>
          <td>${fmt.format(z.oferta.cupos)}</td>
          <td>${fmt.format(z.comunidad.iglesias)}</td>
          <td>${fmt.format(z.comunidad.creyentes)}</td>
          <td class="cell-total">${share.toFixed(1)}%</td>
        </tr>
      `;
    }).join("");

    const filaTotal = `
      <tr class="fila-total">
        <td>Total general</td>
        <td>${fmt.format(TOTALES.personal.total)}</td>
        <td>${fmt.format(TOTALES.oferta.cursos)}</td>
        <td>${fmt.format(TOTALES.oferta.grupos)}</td>
        <td>${fmt.format(TOTALES.oferta.cupos)}</td>
        <td>${fmt.format(TOTALES.comunidad.iglesias)}</td>
        <td>${fmt.format(TOTALES.comunidad.creyentes)}</td>
        <td class="cell-total">100%</td>
      </tr>
    `;

    table.innerHTML = thead + `<tbody>${filas}${filaTotal}</tbody>`;
  }

  /* ---------------------------------------------------------
     3. BLOQUES DE ZONA (acordeón con tabla de roles + oferta)
     --------------------------------------------------------- */
  function renderZonas() {
    const cont = document.getElementById("zone-list");
    if (!cont) return;

    cont.innerHTML = ZONAS.map((z) => {
      const filasRoles = ROLES
        .filter((r) => z.personal[r.key] > 0)
        .map((r) => `<tr><td>${r.label}</td><td>${fmt.format(z.personal[r.key])}</td></tr>`)
        .join("");

      const sharePersonal = pct(z.personal.total, TOTALES.personal.total);

      return `
        <article class="zone-card" style="--zona-color:${z.color}">
          <button class="zone-card__header" type="button" data-zone-toggle aria-expanded="false">
            <div class="zone-card__title-wrap">
              <span class="zone-card__dot" aria-hidden="true"></span>
              <div>
                <h3 class="zone-card__title">${z.nombre}</h3>
                <p class="zone-card__depts">${z.departamentos.length} departamento${z.departamentos.length > 1 ? "s" : ""}: ${z.departamentos.join(", ")}</p>
              </div>
            </div>
            <div class="zone-card__stats">
              <div class="zone-stat">
                <div class="zone-stat__value">${fmt.format(z.personal.total)}</div>
                <div class="zone-stat__label">Cuerpo académico</div>
              </div>
              <div class="zone-stat">
                <div class="zone-stat__value">${fmt.format(z.oferta.cupos)}</div>
                <div class="zone-stat__label">Cupos</div>
              </div>
              <div class="zone-stat">
                <div class="zone-stat__value">${fmt.format(z.comunidad.iglesias)}</div>
                <div class="zone-stat__label">Iglesias</div>
              </div>
              <div class="zone-stat">
                <div class="zone-stat__value">${fmt.format(z.comunidad.creyentes)}</div>
                <div class="zone-stat__label">Creyentes</div>
              </div>
              <div class="zone-stat">
                <div class="zone-stat__value">${sharePersonal.toFixed(1)}%</div>
                <div class="zone-stat__label">Del total nacional</div>
              </div>
            </div>
            <span class="zone-card__toggle" aria-hidden="true">+</span>
          </button>

          <div class="zone-card__body">
            <div class="zone-card__body-inner">
              <div class="zone-card__content">

                <div class="zone-card__table-wrap">
                  <div class="zone-card__depts-list">
                    ${z.departamentos.map((d) => `<span class="zone-chip">${d}</span>`).join("")}
                  </div>
                  <table>
                    <thead><tr><th>Rol</th><th>Cantidad</th></tr></thead>
                    <tbody>
                      ${filasRoles}
                      <tr class="fila-total"><td>Total zona</td><td>${fmt.format(z.personal.total)}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div class="zone-card__oferta">
                  <div class="zone-oferta-item">
                    <span class="zone-oferta-item__label">Cursos</span>
                    <span class="zone-oferta-item__value">${fmt.format(z.oferta.cursos)}</span>
                  </div>
                  <div class="zone-oferta-item">
                    <span class="zone-oferta-item__label">Grupos</span>
                    <span class="zone-oferta-item__value">${fmt.format(z.oferta.grupos)}</span>
                  </div>
                  <div class="zone-oferta-item">
                    <span class="zone-oferta-item__label">Cupos</span>
                    <span class="zone-oferta-item__value">${fmt.format(z.oferta.cupos)}</span>
                  </div>
                </div>

                ${MOSTRAR_CURSOS_OFERTADOS && z.cursosOfertados && z.cursosOfertados.length ? `
                <div class="zone-card__cursos">
                  <h4 class="zone-card__cursos-title">Cursos ofertados en la zona (${z.cursosOfertados.length})</h4>
                  <div class="zone-card__cursos-list">
                    ${z.cursosOfertados.map((c) => `<span class="curso-chip">${c}</span>`).join("")}
                  </div>
                </div>
                ` : ""}

              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    cont.querySelectorAll("[data-zone-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".zone-card");
        const abierta = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(abierta));
      });
    });
  }

  /* ---------------------------------------------------------
     4. TABLA CONSOLIDADA (todas las zonas × todos los roles)
     --------------------------------------------------------- */
  function renderTablaConsolidada() {
    const table = document.getElementById("tabla-consolidada");
    if (!table) return;

    const rolesUsados = ROLES.filter((r) => TOTALES.personal[r.key] > 0);

    const thead = `
      <thead>
        <tr>
          <th>Zona</th>
          ${rolesUsados.map((r) => `<th>${r.label}</th>`).join("")}
          <th>Total</th>
        </tr>
      </thead>`;

    const filasZona = ZONAS.map((z) => `
      <tr>
        <td>${z.nombre}</td>
        ${rolesUsados.map((r) => `<td>${z.personal[r.key] ? fmt.format(z.personal[r.key]) : "—"}</td>`).join("")}
        <td class="cell-total">${fmt.format(z.personal.total)}</td>
      </tr>
    `).join("");

    const filaTotal = `
      <tr class="fila-total">
        <td>Total general</td>
        ${rolesUsados.map((r) => `<td>${fmt.format(TOTALES.personal[r.key])}</td>`).join("")}
        <td class="cell-total">${fmt.format(TOTALES.personal.total)}</td>
      </tr>
    `;

    table.innerHTML = thead + `<tbody>${filasZona}${filaTotal}</tbody>`;
  }

  /* ---------------------------------------------------------
     Init
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderKpis();
    renderComparativoZonas();
    renderZonas();
    renderTablaConsolidada();
  });
})();
