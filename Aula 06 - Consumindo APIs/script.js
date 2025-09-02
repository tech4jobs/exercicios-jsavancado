// 1 - Municípios da região serrana
const municipiosRJ = [
  {
    id: 3300100,
    nome: "Angra dos Reis",
    microrregiao: {
      id: 33013,
      nome: "Baía da Ilha Grande",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330002,
      nome: "Angra dos Reis",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300159,
    nome: "Aperibé",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330012,
      nome: "Santo Antônio de Pádua",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300209,
    nome: "Araruama",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300225,
    nome: "Areal",
    microrregiao: {
      id: 33005,
      nome: "Três Rios",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330007,
      nome: "Petrópolis",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300233,
    nome: "Armação dos Búzios",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300258,
    nome: "Arraial do Cabo",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300308,
    nome: "Barra do Piraí",
    microrregiao: {
      id: 33012,
      nome: "Barra do Piraí",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300407,
    nome: "Barra Mansa",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300456,
    nome: "Belford Roxo",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300506,
    nome: "Bom Jardim",
    microrregiao: {
      id: 33007,
      nome: "Nova Friburgo",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300605,
    nome: "Bom Jesus do Itabapoana",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300704,
    nome: "Cabo Frio",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300803,
    nome: "Cachoeiras de Macacu",
    microrregiao: {
      id: 33016,
      nome: "Macacu-Caceribu",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330003,
      nome: "Rio Bonito",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300902,
    nome: "Cambuci",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330012,
      nome: "Santo Antônio de Pádua",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300936,
    nome: "Carapebus",
    microrregiao: {
      id: 33004,
      nome: "Macaé",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3300951,
    nome: "Comendador Levy Gasparian",
    microrregiao: {
      id: 33005,
      nome: "Três Rios",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330009,
      nome: "Três Rios - Paraíba do Sul",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301009,
    nome: "Campos dos Goytacazes",
    microrregiao: {
      id: 33003,
      nome: "Campos dos Goytacazes",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301108,
    nome: "Cantagalo",
    microrregiao: {
      id: 33006,
      nome: "Cantagalo-Cordeiro",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301157,
    nome: "Cardoso Moreira",
    microrregiao: {
      id: 33003,
      nome: "Campos dos Goytacazes",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301207,
    nome: "Carmo",
    microrregiao: {
      id: 33006,
      nome: "Cantagalo-Cordeiro",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301306,
    nome: "Casimiro de Abreu",
    microrregiao: {
      id: 33009,
      nome: "Bacia de São João",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301405,
    nome: "Conceição de Macabu",
    microrregiao: {
      id: 33004,
      nome: "Macaé",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301504,
    nome: "Cordeiro",
    microrregiao: {
      id: 33006,
      nome: "Cantagalo-Cordeiro",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301603,
    nome: "Duas Barras",
    microrregiao: {
      id: 33007,
      nome: "Nova Friburgo",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301702,
    nome: "Duque de Caxias",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301801,
    nome: "Engenheiro Paulo de Frontin",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301850,
    nome: "Guapimirim",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301876,
    nome: "Iguaba Grande",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3301900,
    nome: "Itaboraí",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302007,
    nome: "Itaguaí",
    microrregiao: {
      id: 33017,
      nome: "Itaguaí",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302056,
    nome: "Italva",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302106,
    nome: "Itaocara",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330012,
      nome: "Santo Antônio de Pádua",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302205,
    nome: "Itaperuna",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302254,
    nome: "Itatiaia",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330005,
      nome: "Resende",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302270,
    nome: "Japeri",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302304,
    nome: "Laje do Muriaé",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302403,
    nome: "Macaé",
    microrregiao: {
      id: 33004,
      nome: "Macaé",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302452,
    nome: "Macuco",
    microrregiao: {
      id: 33006,
      nome: "Cantagalo-Cordeiro",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302502,
    nome: "Magé",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302601,
    nome: "Mangaratiba",
    microrregiao: {
      id: 33017,
      nome: "Itaguaí",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302700,
    nome: "Maricá",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302809,
    nome: "Mendes",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302858,
    nome: "Mesquita",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3302908,
    nome: "Miguel Pereira",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330006,
      nome: "Valença",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303005,
    nome: "Miracema",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330012,
      nome: "Santo Antônio de Pádua",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303104,
    nome: "Natividade",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303203,
    nome: "Nilópolis",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303302,
    nome: "Niterói",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303401,
    nome: "Nova Friburgo",
    microrregiao: {
      id: 33007,
      nome: "Nova Friburgo",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303500,
    nome: "Nova Iguaçu",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303609,
    nome: "Paracambi",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303708,
    nome: "Paraíba do Sul",
    microrregiao: {
      id: 33005,
      nome: "Três Rios",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330009,
      nome: "Três Rios - Paraíba do Sul",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303807,
    nome: "Paraty",
    microrregiao: {
      id: 33013,
      nome: "Baía da Ilha Grande",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330002,
      nome: "Angra dos Reis",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303856,
    nome: "Paty do Alferes",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330006,
      nome: "Valença",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303906,
    nome: "Petrópolis",
    microrregiao: {
      id: 33015,
      nome: "Serrana",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330007,
      nome: "Petrópolis",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3303955,
    nome: "Pinheiral",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304003,
    nome: "Piraí",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304102,
    nome: "Porciúncula",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304110,
    nome: "Porto Real",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330005,
      nome: "Resende",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304128,
    nome: "Quatis",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330005,
      nome: "Resende",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304144,
    nome: "Queimados",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304151,
    nome: "Quissamã",
    microrregiao: {
      id: 33004,
      nome: "Macaé",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304201,
    nome: "Resende",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330005,
      nome: "Resende",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304300,
    nome: "Rio Bonito",
    microrregiao: {
      id: 33016,
      nome: "Macacu-Caceribu",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330003,
      nome: "Rio Bonito",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304409,
    nome: "Rio Claro",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304508,
    nome: "Rio das Flores",
    microrregiao: {
      id: 33012,
      nome: "Barra do Piraí",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330006,
      nome: "Valença",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304524,
    nome: "Rio das Ostras",
    microrregiao: {
      id: 33009,
      nome: "Bacia de São João",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330014,
      nome: "Macaé - Rio das Ostras",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304557,
    nome: "Rio de Janeiro",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304607,
    nome: "Santa Maria Madalena",
    microrregiao: {
      id: 33008,
      nome: "Santa Maria Madalena",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304706,
    nome: "Santo Antônio de Pádua",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330012,
      nome: "Santo Antônio de Pádua",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304755,
    nome: "São Francisco de Itabapoana",
    microrregiao: {
      id: 33003,
      nome: "Campos dos Goytacazes",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304805,
    nome: "São Fidélis",
    microrregiao: {
      id: 33003,
      nome: "Campos dos Goytacazes",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3304904,
    nome: "São Gonçalo",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305000,
    nome: "São João da Barra",
    microrregiao: {
      id: 33003,
      nome: "Campos dos Goytacazes",
      mesorregiao: {
        id: 3302,
        nome: "Norte Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330010,
      nome: "Campos dos Goytacazes",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305109,
    nome: "São João de Meriti",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305133,
    nome: "São José de Ubá",
    microrregiao: {
      id: 33002,
      nome: "Santo Antônio de Pádua",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305158,
    nome: "São José do Vale do Rio Preto",
    microrregiao: {
      id: 33015,
      nome: "Serrana",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330007,
      nome: "Petrópolis",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305208,
    nome: "São Pedro da Aldeia",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330013,
      nome: "Cabo Frio",
      "regiao-intermediaria": {
        id: 3305,
        nome: "Macaé - Rio das Ostras - Cabo Frio",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305307,
    nome: "São Sebastião do Alto",
    microrregiao: {
      id: 33008,
      nome: "Santa Maria Madalena",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305406,
    nome: "Sapucaia",
    microrregiao: {
      id: 33005,
      nome: "Três Rios",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330009,
      nome: "Três Rios - Paraíba do Sul",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305505,
    nome: "Saquarema",
    microrregiao: {
      id: 33010,
      nome: "Lagos",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305554,
    nome: "Seropédica",
    microrregiao: {
      id: 33017,
      nome: "Itaguaí",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305604,
    nome: "Silva Jardim",
    microrregiao: {
      id: 33009,
      nome: "Bacia de São João",
      mesorregiao: {
        id: 3304,
        nome: "Baixadas",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330003,
      nome: "Rio Bonito",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305703,
    nome: "Sumidouro",
    microrregiao: {
      id: 33007,
      nome: "Nova Friburgo",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305752,
    nome: "Tanguá",
    microrregiao: {
      id: 33018,
      nome: "Rio de Janeiro",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330001,
      nome: "Rio de Janeiro",
      "regiao-intermediaria": {
        id: 3301,
        nome: "Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305802,
    nome: "Teresópolis",
    microrregiao: {
      id: 33015,
      nome: "Serrana",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330007,
      nome: "Petrópolis",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3305901,
    nome: "Trajano de Moraes",
    microrregiao: {
      id: 33008,
      nome: "Santa Maria Madalena",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330008,
      nome: "Nova Friburgo",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3306008,
    nome: "Três Rios",
    microrregiao: {
      id: 33005,
      nome: "Três Rios",
      mesorregiao: {
        id: 3303,
        nome: "Centro Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330009,
      nome: "Três Rios - Paraíba do Sul",
      "regiao-intermediaria": {
        id: 3303,
        nome: "Petrópolis",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3306107,
    nome: "Valença",
    microrregiao: {
      id: 33012,
      nome: "Barra do Piraí",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330006,
      nome: "Valença",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3306156,
    nome: "Varre-Sai",
    microrregiao: {
      id: 33001,
      nome: "Itaperuna",
      mesorregiao: {
        id: 3301,
        nome: "Noroeste Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330011,
      nome: "Itaperuna",
      "regiao-intermediaria": {
        id: 3304,
        nome: "Campos dos Goytacazes",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3306206,
    nome: "Vassouras",
    microrregiao: {
      id: 33014,
      nome: "Vassouras",
      mesorregiao: {
        id: 3306,
        nome: "Metropolitana do Rio de Janeiro",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330006,
      nome: "Valença",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
  {
    id: 3306305,
    nome: "Volta Redonda",
    microrregiao: {
      id: 33011,
      nome: "Vale do Paraíba Fluminense",
      mesorregiao: {
        id: 3305,
        nome: "Sul Fluminense",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
    "regiao-imediata": {
      id: 330004,
      nome: "Volta Redonda - Barra Mansa",
      "regiao-intermediaria": {
        id: 3302,
        nome: "Volta Redonda - Barra Mansa",
        UF: {
          id: 33,
          sigla: "RJ",
          nome: "Rio de Janeiro",
          regiao: {
            id: 3,
            sigla: "SE",
            nome: "Sudeste",
          },
        },
      },
    },
  },
];

const regiaoSerrana = [
  "Nova Friburgo",
  "Teresópolis",
  "Petrópolis",
  "Cachoeiras de Macacu",
  "Bom Jardim",
  "Cordeiro",
  "Cantagalo",
  "Macuco",
  "Santa Maria Madalena",
  "São José do Vale do Rio Preto",
  "Sumidouro",
  "Trajano de Moraes",
  "Duas Barras",
];

const municipiosSerrana = municipiosRJ.filter((municipio) =>
  regiaoSerrana.includes(municipio.nome)
);

console.log(municipiosSerrana);

// 2 - Previsão do tempo - Nos objetos da previsão, o nome da cidade foi inserido manualmente pois a API não traz esses dados no response!
const previsoes = [
  {
    nome: "Rio de Janeiro",
    latitude: -22.75,
    longitude: -43,
    generationtime_ms: 0.0361204147338867,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 12,
    current_weather_units: {
      time: "iso8601",
      interval: "seconds",
      temperature: "°C",
      windspeed: "km/h",
      winddirection: "°",
      is_day: "",
      weathercode: "wmo code",
    },
    current_weather: {
      time: "2025-09-02T16:15",
      interval: 900,
      temperature: 27,
      windspeed: 9.6,
      winddirection: 110,
      is_day: 1,
      weathercode: 2,
    },
  },
  {
    nome: "Petrópolis",
    latitude: -22.5,
    longitude: -43.125,
    generationtime_ms: 0.0517368316650391,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 814,
    current_weather_units: {
      time: "iso8601",
      interval: "seconds",
      temperature: "°C",
      windspeed: "km/h",
      winddirection: "°",
      is_day: "",
      weathercode: "wmo code",
    },
    current_weather: {
      time: "2025-09-02T16:30",
      interval: 900,
      temperature: 20.5,
      windspeed: 6.4,
      winddirection: 38,
      is_day: 1,
      weathercode: 3,
    },
  },
  {
    nome: "Nova Friburgo",
    latitude: -22.25,
    longitude: -42.375,
    generationtime_ms: 0.0344514846801758,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 853,
    current_weather_units: {
      time: "iso8601",
      interval: "seconds",
      temperature: "°C",
      windspeed: "km/h",
      winddirection: "°",
      is_day: "",
      weathercode: "wmo code",
    },
    current_weather: {
      time: "2025-09-02T16:30",
      interval: 900,
      temperature: 19.1,
      windspeed: 13.6,
      winddirection: 40,
      is_day: 1,
      weathercode: 2,
    },
  },
];

const listaTemperaturas = document.getElementById("lista-temperaturas");
previsoes.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.nome}: ${item.current_weather.temperature} °C`;
    listaTemperaturas.appendChild(li);
});

const listaFrias = document.getElementById("lista-frias");
const cidadesFrias = previsoes.filter(item => item.current_weather.temperature < 20);

cidadesFrias.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nome}: ${item.current_weather.temperature} °C`;
    listaFrias.appendChild(li);
})

