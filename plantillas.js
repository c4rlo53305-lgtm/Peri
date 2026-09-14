/* ============================================================
   PLANTILLAS — Generado desde el panel admin
   Fecha: 13/9/2026, 7:46:50 p.m.
   Total: 7 plantillas
   ============================================================ */

var PLANTILLAS = {
  categorias: [
  {
    "id": "amor",
    "name": "Amor",
    "emoji": "💕",
    "color": "#ff4f9a"
  },
  {
    "id": "14febrero",
    "name": "14 de Febrero",
    "emoji": "❤️",
    "color": "#e63946"
  },
  {
    "id": "dia-madres",
    "name": "Día de las Madres",
    "emoji": "👩",
    "color": "#ff9ec4"
  },
  {
    "id": "cumple",
    "name": "Cumpleaños",
    "emoji": "🎂",
    "color": "#a855f7"
  },
  {
    "id": "bromas",
    "name": "Bromas",
    "emoji": "😂",
    "color": "#ffd166"
  }
],

  plantillas: [
  {
    "id": "amor-galaxia",
    "category": "amor",
    "name": "Galaxia",
    "description": "La galaxia romántica original.",
    "emoji": "💫",
    "premium": false,
    "defaultTitle": "Para ti, mi amor",
    "defaultSubtitle": "Una experiencia galáctica te espera",
    "defaultMessage": "Eres mi universo entero ✨\nCada estrella me recuerda a ti.",
    "defaultPhrases": "Te amo más que ayer\nEres mi persona favorita\nContigo todo es mejor",
    "editorURL": ""
  },
  {
    "id": "amor-eterno",
    "category": "amor",
    "name": "Amor eterno",
    "description": "Un rincón del universo hecho para los dos.",
    "emoji": "💕",
    "premium": false,
    "defaultTitle": "Mi amor eterno",
    "defaultSubtitle": "Contigo hasta el infinito",
    "defaultMessage": "Si tuviera que elegir mil veces,\nmil veces te elegiría a ti 💕",
    "defaultPhrases": "Te quiero infinito\nMi corazón late por ti\nEres mi todo",
    "editorURL": ""
  },
  {
    "id": "14feb-sanvalentin",
    "category": "14febrero",
    "name": "San Valentín",
    "description": "Rojo, romántico y eterno.",
    "emoji": "❤️",
    "premium": false,
    "defaultTitle": "Feliz San Valentín",
    "defaultSubtitle": "Para el amor de mi vida",
    "defaultMessage": "En un mundo de miles de personas,\nmi corazón te eligió a ti ❤️\nFeliz 14 de febrero, mi amor.",
    "defaultPhrases": "Feliz San Valentín\nTe amo con el alma\nEres mi todo",
    "editorURL": ""
  },
  {
    "id": "mama-clasico",
    "category": "dia-madres",
    "name": "Para mamá",
    "description": "Palabras que nunca alcanzan para agradecer.",
    "emoji": "👩",
    "premium": false,
    "defaultTitle": "Mamá",
    "defaultSubtitle": "Gracias por todo lo que haces",
    "defaultMessage": "No existen palabras suficientes\npara agradecerte 💛\nEres mi ejemplo, mi fuerza, mi todo.",
    "defaultPhrases": "Te amo, mamá\nEres mi heroína\nGracias por tanto",
    "editorURL": ""
  },
  {
    "id": "cumple-clasico",
    "category": "cumple",
    "name": "Feliz cumpleaños",
    "description": "Un pedacito del universo para celebrarte.",
    "emoji": "🎂",
    "premium": false,
    "defaultTitle": "¡Feliz cumpleaños! 🎂",
    "defaultSubtitle": "Un día para celebrarte",
    "defaultMessage": "Hoy celebramos el día\nen que el universo se volvió más brillante ✨\n¡Feliz cumpleaños!",
    "defaultPhrases": "Que cumplas muchos más\nTe mereces todo\nEres increíble",
    "editorURL": ""
  },
  {
    "id": "broma-jefe",
    "category": "bromas",
    "name": "Para mi jefe",
    "description": "El clásico: 'no renuncio, pero casi'.",
    "emoji": "😂",
    "premium": false,
    "defaultTitle": "Querido jefe",
    "defaultSubtitle": "Con todo el respeto del mundo...",
    "defaultMessage": "No es que no quiera trabajar,\nes que el trabajo no me quiere a mí 😂",
    "defaultPhrases": "¡Es broma!\n(¿O no?)\nTe quiero, jefe",
    "editorURL": ""
  },
  {
    "id": "amor-galaxia2",
    "category": "amor",
    "name": "Galaxia2",
    "description": "Enamora a ti pareja con esta hermosa galaxia",
    "emoji": "✨",
    "editorURL": "https://c4rlo53305-lgtm.github.io/ai/",
    "premium": false,
    "defaultTitle": "Verá sus fotos y efectos hermosos",
    "defaultSubtitle": "Una experiencia única te espera",
    "defaultMessage": "Cada estrella me recuerda a ti ",
    "defaultPhrases": "Eres mi amor \nTe amo\nGracias \nEres única\nEres todo "
  }
],

  getCategorias: function(){ return this.categorias.slice(); },
  getCategoria: function(id){ for (var i = 0; i < this.categorias.length; i++){ if (this.categorias[i].id === id) return this.categorias[i]; } return null; },
  getPlantillas: function(catId){ if (!catId) return this.plantillas.slice(); return this.plantillas.filter(function(p){ return p.category === catId; }); },
  getPlantilla: function(id){ for (var i = 0; i < this.plantillas.length; i++){ if (this.plantillas[i].id === id) return this.plantillas[i]; } return null; },
  countByCategory: function(catId){ return this.getPlantillas(catId).length; }
};
