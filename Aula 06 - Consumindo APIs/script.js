// 1 - Municípios da região serrana
const buscarMunicipiosRJ = async () => {
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios"
  );
  const data = await response.json();

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

  const municipiosSerrana = data.filter((municipio) =>
    regiaoSerrana.includes(municipio.nome)
  );

  console.log(municipiosSerrana);
};
buscarMunicipiosRJ();

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
previsoes.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = `${item.nome}: ${item.current_weather.temperature} °C`;
  listaTemperaturas.appendChild(li);
});

const listaFrias = document.getElementById("lista-frias");
const cidadesFrias = previsoes.filter(
  (item) => item.current_weather.temperature < 20
);

cidadesFrias.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `${item.nome}: ${item.current_weather.temperature} °C`;
  listaFrias.appendChild(li);
});
