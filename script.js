// Clave única para esta malla
const CLAVE_STORAGE = "estadoMallaBioquimica";

const materias = [
  // PRIMER AÑO - I SEMESTRE
  { id: "Algebra Calculo Numérico y Geometría Analítica", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Análisis Matemático I", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Introducción a la Química", abre: ["Química General", "Biología"], requisitos: [], bloque: "primer-1" },

  // PRIMER AÑO - II SEMESTRE
  { id: "Física I", abre: ["Física II"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Análisis Matemático II", abre: ["Física II", "Análisis de Datos"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Química General", abre: ["Química Inorgánica", "Análisis de Datos"], requisitos: ["Introducción a la Química", "Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },

  // SEGUNDO AÑO - I SEMESTRE
  { id: "Física II", abre: ["Fisicoquímica"], requisitos: ["Física I", "Análisis Matemático II"], bloque: "segundo-1" },
  { id: "Biología", abre: ["Anatomía E Histología", "Bioquímica I"], requisitos: ["Introducción a la Química"], bloque: "segundo-1" },
  { id: "Química Inorgánica", abre: ["Fisicoquímica", "Química Orgánica I", "Química Analítica I"], requisitos: ["Química General"], bloque: "segundo-1" },
  { id: "Análisis de Datos", abre: ["Fisicoquímica", "Química Analítica I"], requisitos: ["Análisis Matemático II", "Química General"], bloque: "segundo-1" },

  // SEGUNDO AÑO - II SEMESTRE
  { id: "Fisicoquímica", abre: ["Ingles Científico Técnico", "Bioquímica I"], requisitos: ["Física II", "Química Inorgánica", "Análisis de Datos"], bloque: "segundo-2" },
  { id: "Química Orgánica I", abre: ["Ingles Científico Técnico", "Química Orgánica II", "Bioquímica I"], requisitos: ["Química Inorgánica"], bloque: "segundo-2" },
  { id: "Química Analítica I", abre: ["Ingles Científico Técnico", "Química Analítica Instrumental", "Bioquímica I"], requisitos: ["Química Inorgánica", "Análisis de Datos"], bloque: "segundo-2" },

  // TERCER AÑO - I SEMESTRE
  { id: "Ingles Científico Técnico", abre: [], requisitos: ["Fisicoquímica", "Química Orgánica I", "Química Analítica I"], bloque: "tercer-1" },
  { id: "Química Orgánica II", abre: ["Bioquímica II"], requisitos: ["Química Orgánica I"], bloque: "tercer-1" },
  { id: "Química Analítica Instrumental", abre: ["Biofisicoquimica", "Diseño de Experimento"], requisitos: ["Química Analítica I"], bloque: "tercer-1" },
  { id: "Bioquímica I", abre: ["Bioquímica II", "Biofisicoquimica", "Diseño de Experimento", "Bioquímica III"], requisitos: ["Biología", "Fisicoquímica", "Química Orgánica I", "Química Analítica I"], bloque: "tercer-1" },

  // TERCER AÑO - II SEMESTRE
  { id: "Bioquímica II", abre: ["Toxicología"], requisitos: ["Bioquímica I", "Química Orgánica II"], bloque: "tercer-2" },
  { id: "Anatomía E Histología", abre: ["Fisiología"], requisitos: ["Biología"], bloque: "tercer-2" },
  { id: "Biofisicoquimica", abre: [], requisitos: ["Química Analítica Instrumental", "Bioquímica I"], bloque: "tercer-2" },

  // CUARTO AÑO - I SEMESTRE
  { id: "Fisiología", abre: ["Toxicología", "Elementos de Farmacología", "Hematología", "Inmunología", "Bioquímica Patológica"], requisitos: ["Anatomía E Histología"], bloque: "cuarto-1" },
  { id: "Diseño de Experimentos", abre: [], requisitos: ["Química Analítica Instrumental", "Bioquímica I"], bloque: "cuarto-1" },
  { id: "Bioquímica III", abre: ["Microbiología General", "Hematología", "Inmunología", "Bioquímica Patológica"], requisitos: ["Bioquímica I"], bloque: "cuarto-1" },

  // CUARTO AÑO - II SEMESTRE
  { id: "Toxicología", abre: [], requisitos: ["Bioquímica II", "Fisiología"], bloque: "cuarto-2" },
  { id: "Elementos de Farmacología", abre: [], requisitos: ["Fisiología"], bloque: "cuarto-2" },
  { id: "Microbiología General", abre: ["Inmunología", "Microbiología Clínica", "Micología", "Bromatología", "Virología Clínica"], requisitos: ["Bioquímica III"], bloque: "cuarto-2" },
  // QUINTO AÑO - I SEMESTRE
  { id: "Hematología", abre: ["Medio Interno", "Química Clínica", "Parasitología"], requisitos: ["Fisiología", "Bioquímica III"], bloque: "quinto-1" },
  { id: "Inmunología", abre: ["Micología", "Virología Clínica"], requisitos: ["Fisiología", "Bioquímica III", "Microbiología General"], bloque: "quinto-1" },
  { id: "Microbiología Clínica", abre: [], requisitos: ["Microbiología General"], bloque: "quinto-1" },

  // QUINTO AÑO - II SEMESTRE
  { id: "Medio Interno", abre: [], requisitos: ["Hematología"], bloque: "quinto-2" },
  { id: "Micología", abre: [], requisitos: ["Microbiología General", "Inmunología"], bloque: "quinto-2" },
  { id: "Química Clínica", abre: ["Endocrinología"], requisitos: ["Hematología"], bloque: "quinto-2" },
  { id: "Bromatología", abre: [], requisitos: ["Microbiología General"], bloque: "quinto-2" },

  // SEXTO AÑO - I SEMESTRE
  { id: "Endocrinología", abre: ["Medicina Interna", "Prácticas de Laboratorio Clínico"], requisitos: ["Química Clínica"], bloque: "sexto-1" },
  { id: "Bioquímica Patológica", abre: ["Medicina Interna", "Prácticas de Laboratorio Clínico"], requisitos: ["Fisiología", "Bioquímica III"], bloque: "sexto-1" },
  { id: "Parasitología", abre: ["Medicina Interna", "Prácticas de Laboratorio Clínico"], requisitos: ["Hematología"], bloque: "sexto-1" },
  { id: "Virología Clínica", abre: ["Prácticas de Laboratorio Clínico"], requisitos: ["Microbiología General", "Inmunología"], bloque: "sexto-1" },

  // SEXTO AÑO - II SEMESTRE
  { id: "Medicina Interna", abre: [], requisitos: ["Endocrinología", "Bioquímica Patológica", "Parasitología"], bloque: "sexto-2" },
  { id: "Prácticas de Laboratorio Clínico", abre: [], requisitos: ["Endocrinología", "Bioquímica Patológica", "Parasitología", "Virología Clínica"], bloque: "sexto-2" }
];

const estado = {};
const guardado = localStorage.getItem(CLAVE_STORAGE);
if (guardado) {
  const estadoGuardado = JSON.parse(guardado);
  materias.forEach(m => {
    estado[m.id] = estadoGuardado[m.id] || {
      aprobada: false,
      bloqueada: m.requisitos.length > 0
    };
  });
} else {
  materias.forEach(m => {
    estado[m.id] = {
      aprobada: false,
      bloqueada: m.requisitos.length > 0
    };
  });
}

materias.forEach(materia => {
  const div = document.createElement("div");
  div.className = "materia";
  if (estado[materia.id].bloqueada) div.classList.add("bloqueada");
  if (estado[materia.id].aprobada) div.classList.add("aprobada");
  div.textContent = materia.id;
  div.id = materia.id;

  let clickTimer;

  div.addEventListener("click", () => {
    if (estado[materia.id].bloqueada && !estado[materia.id].aprobada) return;

    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;

      estado[materia.id].aprobada = false;
      div.classList.remove("aprobada");
      bloquearDependientes(materia.id);
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(estado));
    } else {
      clickTimer = setTimeout(() => {
        clickTimer = null;

        estado[materia.id].aprobada = true;
        div.classList.add("aprobada");

        materia.abre.forEach(destino => {
          const desbloquear = materias.find(m => m.id === destino);
          const requisitosCumplidos = desbloquear.requisitos.every(req => estado[req].aprobada);
          if (requisitosCumplidos) {
            estado[destino].bloqueada = false;
            document.getElementById(destino).classList.remove("bloqueada");
          }
        });

        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(estado));
      }, 400);
    }
  });

  document.getElementById(materia.bloque).appendChild(div);
});

function bloquearDependientes(id) {
  materias.forEach(destino => {
    if (destino.requisitos.includes(id)) {
      const requisitosCumplidos = destino.requisitos.every(req => estado[req].aprobada);
      if (!requisitosCumplidos) {
        estado[destino.id].bloqueada = true;
        estado[destino.id].aprobada = false;
        const el = document.getElementById(destino.id);
        el.classList.add("bloqueada");
        el.classList.remove("aprobada");
        bloquearDependientes(destino.id);
      }
    }
  });
}


