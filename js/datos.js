/* ============================================================
   DATOS DEL INFORME — Cuerpo académico Convocatoria 32
   Fuente: reporte regional de resultados (corte 25/07/2026).
   Estructura pensada para agregar zonas o departamentos sin
   tocar el resto del código (informe.js consume este archivo).
   ============================================================ */

const INFORME_META = {
  corte: "25 de julio de 2026",
  convocatoria: "Convocatoria 32",
  responsablesCurso: 42,
  notaOferta: "5 cursos de ejecución presencial (cada uno de un grupo, cada grupo de 50 cupos).",
};

/* Roles del cuerpo académico, en el orden en que aparecen en el
   reporte original. La clave coincide con las propiedades de
   "personal" en cada zona. */
const ROLES = [
  { key: "profesores",            label: "Profesores" },
  { key: "tutores",                label: "Tutores" },
  { key: "administradores",        label: "Administradores" },
  { key: "coordinadora",           label: "Coordinadora" },
  { key: "enlaceProfesores",       label: "Enlace de profesores" },
  { key: "enlaceTutores",          label: "Enlace de tutores" },
  { key: "enlaceDepartamental",    label: "Enlace departamental" },
  { key: "apoyoPedagogico",        label: "Apoyo pedagógico" },
  { key: "coordinadorTutores",     label: "Coordinador de tutores" },
  { key: "apoyoTutores",           label: "Apoyo tutores" },
  { key: "responsableCurso",       label: "Responsable de curso" },
];

/* Cada zona agrupa: departamentos que la componen, personal por
   rol (con total) y oferta académica (cursos, grupos, cupos).
   Para agregar un departamento nuevo a una zona, solo hay que
   añadirlo al arreglo "departamentos" correspondiente. */
const ZONAS = [
  {
    id: "bogota-cundinamarca",
    nombre: "Bogotá & Cundinamarca",
    departamentos: ["Bogotá", "Cundinamarca"],
    color: "#1B4DA0",
    personal: {
      profesores: 238, tutores: 175, administradores: 74, coordinadora: 1,
      enlaceProfesores: 1, enlaceTutores: 0, enlaceDepartamental: 0,
      apoyoPedagogico: 0, coordinadorTutores: 0, apoyoTutores: 0, responsableCurso: 0,
      total: 489,
    },
    oferta: { cursos: 38, grupos: 169, cupos: 8600 },
    comunidad: { iglesias: 97, creyentes: 38800 },
    cursosOfertados: [
      "Bienestar para la Persona Mayor", "Bisutería", "Business English 1", "Business English 2",
      "Comprensión Lectora", "Confección: Manejo de Máquinas", "Costos para Emprendedores/Contabilidad",
      "Despertar Emprendedor", "Despertar Emprendedor Nivel 2", "Despertar Humano", "Economía del Hogar",
      "El ABC del Reciclaje", "English for Kids", "English for Teens", "Estrategias para la Búsqueda de Empleo",
      "Familias Empresarias del Campo", "Floristería 1", "Francés 1", "Francés 2", "Inglés 1", "Inglés 2",
      "Italiano 1", "Italiano 2", "Mi Negocio en Internet 1", "Mi Negocio en Internet 2",
      "Modistería 1 (Faldas)", "Muñecas de Trapo", "Orientación Emprendedora", "Pintura en madera 1",
      "Portugués 1", "Portugués 2", "Reparación de prendas de vestir", "Repostería 1", "Repostería 2",
      "Salud y Bienestar en Ovinos y Caprinos", "Sin Límites Virtual", "Sistemas (DCO)", "Sistemas 1",
      "Sistemas 2", "Trenzas y Peinados",
    ],
  },
  {
    id: "caribe",
    nombre: "Zona Caribe",
    departamentos: ["Atlántico", "La Guajira", "Córdoba", "Cesar", "Sucre", "San Andrés"],
    color: "#0090A0",
    personal: {
      profesores: 74, tutores: 65, administradores: 34, coordinadora: 0,
      enlaceProfesores: 3, enlaceTutores: 0, enlaceDepartamental: 0,
      apoyoPedagogico: 1, coordinadorTutores: 0, apoyoTutores: 0, responsableCurso: 0,
      total: 177,
    },
    oferta: { cursos: 23, grupos: 47, cupos: 2400 },
    comunidad: { iglesias: 63, creyentes: 25200 },
    cursosOfertados: [
      "Bisutería", "Comprensión Lectora", "Confección: Manejo de Máquinas",
      "Costos para Emprendedores/Contabilidad", "Despertar Emprendedor", "Despertar Humano",
      "Economía del Hogar", "El ABC del Reciclaje", "Estrategias para la Búsqueda de Empleo",
      "Francés 1", "Inglés 1", "Inglés 2", "Italiano 1", "Mi Negocio en Internet 1",
      "Modistería 1 (Faldas)", "Orientación Emprendedora", "Pintura en madera 1", "Portugués 1",
      "Repostería 1", "Repostería 2", "Sin Límites Virtual", "Sistemas 1", "Sistemas 2",
    ],
  },
  {
    id: "antioquia-eje-cafetero",
    nombre: "Antioquia & Eje Cafetero",
    departamentos: ["Antioquia", "Urabá", "Caldas", "Risaralda", "Quindío"],
    color: "#D9791C",
    personal: {
      profesores: 180, tutores: 119, administradores: 9, coordinadora: 0,
      enlaceProfesores: 0, enlaceTutores: 0, enlaceDepartamental: 0,
      apoyoPedagogico: 2, coordinadorTutores: 2, apoyoTutores: 0, responsableCurso: 0,
      total: 312,
    },
    oferta: { cursos: 26, grupos: 95, cupos: 4750 },
    comunidad: { iglesias: 111, creyentes: 44400 },
    cursosOfertados: [
      "Bienestar para la Persona Mayor", "Bisutería", "Bonsái en Alambre y Pedrería", "Business English 1",
      "Comprensión Lectora", "Confección: Manejo de Máquinas", "Despertar Emprendedor", "Despertar Humano",
      "Economía del Hogar", "El ABC del Reciclaje", "English Leasing a Conversación",
      "Estrategias para la Búsqueda de Empleo", "Familias Empresarias del Campo", "Huertas Caseras",
      "Inglés 1", "Inglés 2", "Modistería 1 (Faldas)", "Orientación Emprendedora", "Pintura en madera 1",
      "Repostería 1", "Sin Límites Virtual", "Sistemas 1", "Sistemas 2", "Trenzas y Peinados",
    ],
  },
  {
    id: "pacifico",
    nombre: "Zona Pacífico",
    departamentos: ["Valle del Cauca", "Cauca", "Chocó", "Nariño", "Putumayo"],
    color: "#1A9E6E",
    personal: {
      profesores: 172, tutores: 213, administradores: 45, coordinadora: 1,
      enlaceProfesores: 16, enlaceTutores: 1, enlaceDepartamental: 3,
      apoyoPedagogico: 1, coordinadorTutores: 0, apoyoTutores: 1, responsableCurso: 1,
      total: 454,
    },
    oferta: { cursos: 27, grupos: 88, cupos: 4550 },
    comunidad: { iglesias: 131, creyentes: 52400 },
    cursosOfertados: [
      "Bienestar para la Persona Mayor", "Bisutería", "Business English 1", "Comprensión Lectora",
      "Confección: Manejo de Máquinas", "Costos para Emprendedores/Contabilidad", "Despertar Emprendedor",
      "Despertar Humano", "Economía del Hogar", "El ABC del Reciclaje",
      "Estrategias para la Búsqueda de Empleo", "Familias Empresarias del Campo", "Floristería 1",
      "Francés 1", "Inglés 1", "Inglés 2", "Italiano 1", "Mi Negocio en Internet 1",
      "Modistería 1 (Faldas)", "Orientación Emprendedora", "Pintura en madera 1", "Portugués 1",
      "Repostería 1", "Repostería 2", "Sistemas 1", "Sistemas 2", "Trenzas y Peinados",
    ],
  },
  {
    id: "sur-llanos",
    nombre: "Zona Sur & Llanos",
    departamentos: ["Meta"],
    color: "#4A3AA7",
    personal: {
      profesores: 157, tutores: 121, administradores: 23, coordinadora: 0,
      enlaceProfesores: 4, enlaceTutores: 0, enlaceDepartamental: 0,
      apoyoPedagogico: 4, coordinadorTutores: 5, apoyoTutores: 4, responsableCurso: 0,
      total: 318,
    },
    oferta: { cursos: 21, grupos: 105, cupos: 5250 },
    comunidad: { iglesias: 113, creyentes: 45200 },
    cursosOfertados: [
      "Bienestar para la Persona Mayor", "Comprensión Lectora", "Costos para Emprendedores/Contabilidad",
      "Despertar Emprendedor", "Despertar Humano", "Economía del Hogar", "El ABC del Reciclaje",
      "Estrategias para la Búsqueda de Empleo", "Familias Empresarias del Campo", "Inglés 1", "Inglés 2",
      "Mi Negocio en Internet 1", "Modistería 1 (Faldas)", "Orientación Emprendedora", "Repostería 1",
      "Repostería 2", "Sin Límites Virtual", "Sistemas 1", "Sistemas 2", "Trenzas y Peinados",
    ],
  },
  {
    id: "santanderes-boyaca",
    nombre: "Santanderes & Boyacá",
    departamentos: ["Santander", "Norte de Santander", "Boyacá"],
    color: "#C0392B",
    personal: {
      profesores: 36, tutores: 44, administradores: 8, coordinadora: 0,
      enlaceProfesores: 1, enlaceTutores: 0, enlaceDepartamental: 0,
      apoyoPedagogico: 1, coordinadorTutores: 0, apoyoTutores: 0, responsableCurso: 0,
      total: 90,
    },
    oferta: { cursos: 16, grupos: 28, cupos: 1460 },
    comunidad: { iglesias: 88, creyentes: 30800 },
    cursosOfertados: [
      "Bisutería", "Comprensión Lectora", "Costos para Emprendedores/Contabilidad", "Despertar Emprendedor",
      "Despertar Humano", "Economía del Hogar", "El ABC del Reciclaje", "Familias Empresarias del Campo",
      "Inglés 1", "Inglés 2", "Italiano 1", "Mi Negocio en Internet 1", "Modistería 1 (Faldas)",
      "Orientación Emprendedora", "Sistemas 1", "Sistemas 2",
    ],
  },
];

/* Totales generales (tal como aparecen en el reporte original;
   se recalculan además en informe.js como verificación). */
const TOTALES = {
  personal: {
    profesores: 857, tutores: 737, administradores: 193, coordinadora: 2,
    enlaceProfesores: 25, enlaceTutores: 1, enlaceDepartamental: 3,
    apoyoPedagogico: 9, coordinadorTutores: 7, apoyoTutores: 5, responsableCurso: 1,
    total: 1840,
  },
  oferta: { cursos: 151, grupos: 532, cupos: 27010 },
  comunidad: { iglesias: 603, creyentes: 236800 },
};
