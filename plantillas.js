/* ============================================================
   PLANTILLAS — Catálogo completo
   
   CÓMO AGREGAR UNA NUEVA:
   1. Copia cualquier bloque { ... } de abajo
   2. Pégalo al final de la categoría correspondiente
   3. Cambia: id, name, description, emoji, color, premium
   4. Guarda (Commit). En 1 minuto aparece en la landing.
   
   ID: único, sin espacios, minúsculas (ej: "amor-galaxia")
   CATEGORY: debe coincidir con un id de las categorías
   PREMIUM: true o false
   ============================================================ */

var PLANTILLAS = {

  /* ============ CATEGORÍAS ============ */
  categorias: [
    { id: "amor",             name: "Amor",              emoji: "💕", color: "#ff4f9a", tagline: "Para decir te amo sin palabras" },
    { id: "14febrero",        name: "14 de Febrero",     emoji: "❤️", color: "#e63946", tagline: "San Valentín inolvidable" },
    { id: "flores-amarillas", name: "Flores Amarillas",  emoji: "🌼", color: "#ffd166", tagline: "El detalle que todas esperan" },
    { id: "dia-madres",       name: "Día de las Madres", emoji: "👩", color: "#ff9ec4", tagline: "Para la mujer más importante" },
    { id: "cumple",           name: "Cumpleaños",        emoji: "🎂", color: "#a855f7", tagline: "Celebra su día especial" },
    { id: "bromas",           name: "Bromas",            emoji: "😂", color: "#ffd166", tagline: "Se ve romántico, pero no" },
    { id: "amistad",          name: "Amistad",           emoji: "🤝", color: "#4ade80", tagline: "Para los que son familia elegida" },
    { id: "reconciliacion",   name: "Reconciliación",    emoji: "🥺", color: "#60a5fa", tagline: "Para pedir perdón de verdad" }
  ],

  /* ============ PLANTILLAS ============ */
  plantillas: [

    /* ---------- 💕 AMOR ---------- */
    {
      id: "amor-galaxia",
      category: "amor",
      name: "Galaxia",
      description: "La galaxia romántica original. Pura y atemporal.",
      emoji: "💫",
      color: "#ff4f9a",
      premium: false,
      defaultTitle: "Para ti, mi amor",
      defaultSubtitle: "Una experiencia galáctica te espera",
      defaultMessage: "Eres mi universo entero ✨\nCada estrella me recuerda a ti.",
      defaultPhrases: "Te amo más que ayer\nEres mi persona favorita\nContigo todo es mejor"
    },
    {
      id: "amor-eterno",
      category: "amor",
      name: "Amor eterno",
      description: "Un rincón del universo hecho solo para los dos.",
      emoji: "💕",
      color: "#ff6b9d",
      premium: false,
      defaultTitle: "Mi amor eterno",
      defaultSubtitle: "Contigo hasta el infinito",
      defaultMessage: "Si tuviera que elegir mil veces,\nmil veces te elegiría a ti 💕",
      defaultPhrases: "Te quiero infinito\nMi corazón late por ti\nEres mi todo"
    },

    /* ---------- ❤️ 14 DE FEBRERO ---------- */
    {
      id: "14feb-sanvalentin",
      category: "14febrero",
      name: "San Valentín",
      description: "Rojo, romántico y eterno. El clásico del 14.",
      emoji: "❤️",
      color: "#e63946",
      premium: false,
      defaultTitle: "Feliz San Valentín",
      defaultSubtitle: "Para el amor de mi vida",
      defaultMessage: "En un mundo de miles de personas,\nmi corazón te eligió a ti ❤️\nFeliz 14 de febrero, mi amor.",
      defaultPhrases: "Feliz San Valentín\nTe amo con el alma\nEres mi todo"
    },
    {
      id: "14feb-para-ti",
      category: "14febrero",
      name: "Solo para ti",
      description: "Un detalle especial para el 14 de febrero.",
      emoji: "🌹",
      color: "#e63946",
      premium: true,
      defaultTitle: "Solo para ti",
      defaultSubtitle: "Este 14 de febrero es tuyo",
      defaultMessage: "No necesito un día especial\npara recordarte que te amo 🌹\nPero este día es perfecto.",
      defaultPhrases: "Eres mi persona\nTe amo siempre\nFeliz 14"
    },

    /* ---------- 🌼 FLORES AMARILLAS ---------- */
    {
      id: "flores-amarillas-clasico",
      category: "flores-amarillas",
      name: "Flores amarillas",
      description: "El detalle del 21 de marzo que todas esperan.",
      emoji: "🌼",
      color: "#ffd166",
      premium: false,
      defaultTitle: "Flores amarillas para ti",
      defaultSubtitle: "Porque te mereces todo",
      defaultMessage: "Dicen que las flores amarillas\nsolo se regalan a quien de verdad amas 🌼\nAquí tienes las mías.",
      defaultPhrases: "Mi flor favorita\nEres tú\nSiempre tú"
    },
    {
      id: "flores-primavera",
      category: "flores-amarillas",
      name: "Primavera",
      description: "Un campo entero de flores para esa persona.",
      emoji: "🌻",
      color: "#ffd166",
      premium: true,
      defaultTitle: "Primavera para ti",
      defaultSubtitle: "Cada flor es un te quiero",
      defaultMessage: "Si pudiera, te regalaría\nun campo entero de flores amarillas 🌻\nMientras tanto, este pedacito de cielo.",
      defaultPhrases: "21 de marzo\nDía perfecto\nPara decirte te amo"
    },

    /* ---------- 👩 DÍA DE LAS MADRES ---------- */
    {
      id: "mama-clasico",
      category: "dia-madres",
      name: "Para mamá",
      description: "Palabras que nunca alcanzan para agradecer.",
      emoji: "👩",
      color: "#ff9ec4",
      premium: false,
      defaultTitle: "Mamá",
      defaultSubtitle: "Gracias por todo lo que haces",
      defaultMessage: "No existen palabras suficientes\npara agradecerte 💛\nEres mi ejemplo, mi fuerza, mi todo.",
      defaultPhrases: "Te amo, mamá\nEres mi heroína\nGracias por tanto"
    },
    {
      id: "mama-universo",
      category: "dia-madres",
      name: "Mi universo",
      description: "Porque mamá merece su propia galaxia.",
      emoji: "🌌",
      color: "#ff9ec4",
      premium: true,
      defaultTitle: "Mi universo, mamá",
      defaultSubtitle: "Eres mi persona favorita en el mundo",
      defaultMessage: "Antes de saber qué era el amor,\nya te amaba a ti, mamá 🌌\nGracias por darme la vida y tanto más.",
      defaultPhrases: "Feliz Día de las Madres\nEres mi todo\nTe amo infinito"
    },

    /* ---------- 🎂 CUMPLEAÑOS ---------- */
    {
      id: "cumple-clasico",
      category: "cumple",
      name: "Feliz cumpleaños",
      description: "Un pedacito del universo para celebrarte.",
      emoji: "🎂",
      color: "#a855f7",
      premium: false,
      defaultTitle: "¡Feliz cumpleaños! 🎂",
      defaultSubtitle: "Un día para celebrarte",
      defaultMessage: "Hoy celebramos el día\nen que el universo se volvió más brillante ✨\n¡Feliz cumpleaños!",
      defaultPhrases: "Que cumplas muchos más\nTe mereces todo\nEres increíble"
    },
    {
      id: "cumple-sorpresa",
      category: "cumple",
      name: "Fiesta sorpresa",
      description: "Para celebrar con todo el estilo.",
      emoji: "🎈",
      color: "#a855f7",
      premium: true,
      defaultTitle: "¡Felicidades! 🎉",
      defaultSubtitle: "Hoy es tu día",
      defaultMessage: "Un año más de aventuras,\nrisas y momentos increíbles 🎈\nQue cumplas muchos más.",
      defaultPhrases: "Feliz cumple\nMuchas felicidades\nTe deseo lo mejor"
    },

    /* ---------- 😂 BROMAS ---------- */
    {
      id: "broma-jefe",
      category: "bromas",
      name: "Para mi jefe",
      description: "El clásico: 'no renuncio, pero casi'.",
      emoji: "😂",
      color: "#ffd166",
      premium: false,
      defaultTitle: "Querido jefe",
      defaultSubtitle: "Con todo el respeto del mundo...",
      defaultMessage: "No es que no quiera trabajar,\nes que el trabajo no me quiere a mí 😂",
      defaultPhrases: "¡Es broma!\n(¿O no?)\nTe quiero, jefe"
    },
    {
      id: "broma-telefonica",
      category: "bromas",
      name: "Broma telefónica",
      description: "Se ve romántico... hasta que lees bien.",
      emoji: "📞",
      color: "#ffd166",
      premium: false,
      defaultTitle: "Llamada importante 📞",
      defaultSubtitle: "Algo urgente que decirte",
      defaultMessage: "Te llamaba para decirte algo muy importante...\n¡Que me debes una comida! 😂",
      defaultPhrases: "Te amo\nPero invítame algo\n(Aunque sea un chicle)"
    },
    {
      id: "broma-mejor-amigo",
      category: "bromas",
      name: "Para mi mejor amigo",
      description: "El clásico: 'te quiero, pero no tanto'.",
      emoji: "😜",
      color: "#ffd166",
      premium: true,
      defaultTitle: "Amigo mío",
      defaultSubtitle: "Con cariño (y un poquito de burla)",
      defaultMessage: "Eres mi mejor amigo en el mundo mundial...\nPero también el más tacaño 😂\n¡Te quiero igual!",
      defaultPhrases: "Te quiero mucho\nAunque seas tacaño\nY feo"
    },

    /* ---------- 🤝 AMISTAD ---------- */
    {
      id: "amistad-clasico",
      category: "amistad",
      name: "Amistad eterna",
      description: "Para ese amigo que es más que familia.",
      emoji: "🤝",
      color: "#4ade80",
      premium: false,
      defaultTitle: "Amigo mío",
      defaultSubtitle: "Gracias por estar siempre",
      defaultMessage: "Encontrar un amigo como tú\nes como ganar la lotería 💚\nGracias por cada momento.",
      defaultPhrases: "Eres mi persona\nGracias por tanto\nTe quiero, amigo"
    },
    {
      id: "amistad-hermano",
      category: "amistad",
      name: "Más que hermanos",
      description: "Para el amigo que se volvió familia.",
      emoji: "💚",
      color: "#4ade80",
      premium: true,
      defaultTitle: "Mi hermano del alma",
      defaultSubtitle: "Gracias por tanto",
      defaultMessage: "La familia no siempre es de sangre,\ny tú eres la prueba 💚\nTe quiero, hermano.",
      defaultPhrases: "Eres mi familia\nElegida por mí\nY por siempre"
    },

    /* ---------- 🥺 RECONCILIACIÓN ---------- */
    {
      id: "perdon-lo-siento",
      category: "reconciliacion",
      name: "Lo siento",
      description: "Para pedir perdón con el corazón.",
      emoji: "🥺",
      color: "#60a5fa",
      premium: false,
      defaultTitle: "Lo siento mucho",
      defaultSubtitle: "Necesito decirte algo",
      defaultMessage: "Sé que me equivoqué y lo siento de verdad 🥺\nNo quiero perderte por un error.\n¿Me das otra oportunidad?",
      defaultPhrases: "Perdóname\nTe necesito\nNo quiero perderte"
    },
    {
      id: "perdon-vuelve",
      category: "reconciliacion",
      name: "Vuelve",
      description: "Para pedir otra oportunidad.",
      emoji: "💔",
      color: "#60a5fa",
      premium: true,
      defaultTitle: "Vuelve, por favor",
      defaultSubtitle: "Sin ti todo es distinto",
      defaultMessage: "He pensado en todo lo que pasó\ny solo quiero decirte que te amo 💔\nDame otra oportunidad, por favor.",
      defaultPhrases: "Te extraño\nVuelve\nTe amo aún"
    }

  ],

  /* ============ FUNCIONES ÚTILES ============ */

  getCategorias: function(){
    return this.categorias.slice();
  },

  getCategoria: function(id){
    for (var i = 0; i < this.categorias.length; i++){
      if (this.categorias[i].id === id) return this.categorias[i];
    }
    return null;
  },

  getPlantillas: function(categoryId){
    if (!categoryId) return this.plantillas.slice();
    return this.plantillas.filter(function(p){ return p.category === categoryId; });
  },

  getPlantilla: function(id){
    for (var i = 0; i < this.plantillas.length; i++){
      if (this.plantillas[i].id === id) return this.plantillas[i];
    }
    return null;
  },

  countByCategory: function(categoryId){
    return this.getPlantillas(categoryId).length;
  }
};
