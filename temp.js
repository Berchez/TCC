/* eslint-disable no-undef */
var precipitacao = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY");
var bioma_amazonico = ee.FeatureCollection("users/joaobianco/amazonia");
var cidades_amazonia = ee.FeatureCollection(
  "users/joaobianco/cidades_amazonia"
);
var estados_amazonia = ee.FeatureCollection(
  "users/joaobianco/amazonia_legal-estados"
);

var dataStatesAndCities = [
  {
    SIGLA: "PA",
    CD_MUN: "1500107",
    NM_MUN: "Abaetetuba",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500131",
    NM_MUN: "Abel Figueiredo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1700251",
    NM_MUN: "Abreulândia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100055",
    NM_MUN: "Açailândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500206",
    NM_MUN: "Acará",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100102",
    NM_MUN: "Acorizal",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200013",
    NM_MUN: "Acrelândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500305",
    NM_MUN: "Afuá",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500347",
    NM_MUN: "Água Azul do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100201",
    NM_MUN: "Água Boa",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1700301",
    NM_MUN: "Aguiarnópolis",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100204",
    NM_MUN: "Alcântara",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500404",
    NM_MUN: "Alenquer",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1700350",
    NM_MUN: "Aliança do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1700400",
    NM_MUN: "Almas",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500503",
    NM_MUN: "Almeirim",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100250",
    NM_MUN: "Alta Floresta",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100015",
    NM_MUN: "Alta Floresta D'Oeste",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500602",
    NM_MUN: "Altamira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100402",
    NM_MUN: "Altamira do Maranhão",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400050",
    NM_MUN: "Alto Alegre",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100436",
    NM_MUN: "Alto Alegre do Maranhão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100477",
    NM_MUN: "Alto Alegre do Pindaré",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100379",
    NM_MUN: "Alto Alegre dos Parecis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100300",
    NM_MUN: "Alto Araguaia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100359",
    NM_MUN: "Alto Boa Vista",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100409",
    NM_MUN: "Alto Garças",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100508",
    NM_MUN: "Alto Paraguai",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100403",
    NM_MUN: "Alto Paraíso",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100501",
    NM_MUN: "Alto Parnaíba",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100607",
    NM_MUN: "Alto Taquari",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300029",
    NM_MUN: "Alvarães",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1700707",
    NM_MUN: "Alvorada",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100346",
    NM_MUN: "Alvorada D'Oeste",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400027",
    NM_MUN: "Amajari",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600105",
    NM_MUN: "Amapá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100550",
    NM_MUN: "Amapá do Maranhão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100600",
    NM_MUN: "Amarante do Maranhão",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300060",
    NM_MUN: "Amaturá",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500701",
    NM_MUN: "Anajás",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100709",
    NM_MUN: "Anajatuba",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300086",
    NM_MUN: "Anamã",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1701002",
    NM_MUN: "Ananás",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500800",
    NM_MUN: "Ananindeua",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500859",
    NM_MUN: "Anapu",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1701051",
    NM_MUN: "Angico",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300102",
    NM_MUN: "Anori",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1701101",
    NM_MUN: "Aparecida do Rio Negro",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5100805",
    NM_MUN: "Apiacás",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100832",
    NM_MUN: "Apicum-Açu",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300144",
    NM_MUN: "Apuí",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1701309",
    NM_MUN: "Aragominas",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1701903",
    NM_MUN: "Araguacema",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702000",
    NM_MUN: "Araguaçu",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101001",
    NM_MUN: "Araguaiana",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702109",
    NM_MUN: "Araguaína",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101209",
    NM_MUN: "Araguainha",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702158",
    NM_MUN: "Araguanã",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100873",
    NM_MUN: "Araguanã",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702208",
    NM_MUN: "Araguatins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2100956",
    NM_MUN: "Arame",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702307",
    NM_MUN: "Arapoema",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101258",
    NM_MUN: "Araputanga",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101004",
    NM_MUN: "Arari",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101308",
    NM_MUN: "Arenápolis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101407",
    NM_MUN: "Aripuanã",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100023",
    NM_MUN: "Ariquemes",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702406",
    NM_MUN: "Arraias",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200054",
    NM_MUN: "Assis Brasil",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300201",
    NM_MUN: "Atalaia do Norte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702554",
    NM_MUN: "Augustinópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500909",
    NM_MUN: "Augusto Corrêa",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1500958",
    NM_MUN: "Aurora do Pará",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702703",
    NM_MUN: "Aurora do Tocantins",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300300",
    NM_MUN: "Autazes",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501006",
    NM_MUN: "Aveiro",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101103",
    NM_MUN: "Axixá",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1702901",
    NM_MUN: "Axixá do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703008",
    NM_MUN: "Babaçulândia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101202",
    NM_MUN: "Bacabal",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101251",
    NM_MUN: "Bacabeira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101301",
    NM_MUN: "Bacuri",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101350",
    NM_MUN: "Bacurituba",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501105",
    NM_MUN: "Bagre",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501204",
    NM_MUN: "Baião",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101400",
    NM_MUN: "Balsas",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703057",
    NM_MUN: "Bandeirantes do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501253",
    NM_MUN: "Bannach",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101605",
    NM_MUN: "Barão de Melgaço",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501303",
    NM_MUN: "Barcarena",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300409",
    NM_MUN: "Barcelos",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101704",
    NM_MUN: "Barra do Bugres",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101608",
    NM_MUN: "Barra do Corda",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101803",
    NM_MUN: "Barra do Garças",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703073",
    NM_MUN: "Barra do Ouro",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300508",
    NM_MUN: "Barreirinha",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703107",
    NM_MUN: "Barrolândia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101772",
    NM_MUN: "Bela Vista do Maranhão",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501402",
    NM_MUN: "Belém",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501451",
    NM_MUN: "Belterra",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101806",
    NM_MUN: "Benedito Leite",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501501",
    NM_MUN: "Benevides",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300607",
    NM_MUN: "Benjamin Constant",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101905",
    NM_MUN: "Bequimão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101939",
    NM_MUN: "Bernardo do Mearim",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703206",
    NM_MUN: "Bernardo Sayão",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300631",
    NM_MUN: "Beruri",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400100",
    NM_MUN: "Boa Vista",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2101970",
    NM_MUN: "Boa Vista do Gurupi",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300680",
    NM_MUN: "Boa Vista do Ramos",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300706",
    NM_MUN: "Boca do Acre",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102002",
    NM_MUN: "Bom Jardim",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102036",
    NM_MUN: "Bom Jesus das Selvas",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101852",
    NM_MUN: "Bom Jesus do Araguaia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501576",
    NM_MUN: "Bom Jesus do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703305",
    NM_MUN: "Bom Jesus do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102077",
    NM_MUN: "Bom Lugar",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400159",
    NM_MUN: "Bonfim",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501600",
    NM_MUN: "Bonito",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300805",
    NM_MUN: "Borba",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501709",
    NM_MUN: "Bragança",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501725",
    NM_MUN: "Brasil Novo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703602",
    NM_MUN: "Brasilândia do Tocantins",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200104",
    NM_MUN: "Brasiléia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5101902",
    NM_MUN: "Brasnorte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703701",
    NM_MUN: "Brejinho de Nazaré",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102150",
    NM_MUN: "Brejo de Areia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501758",
    NM_MUN: "Brejo Grande do Araguaia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501782",
    NM_MUN: "Breu Branco",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501808",
    NM_MUN: "Breves",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200138",
    NM_MUN: "Bujari",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501907",
    NM_MUN: "Bujaru",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102309",
    NM_MUN: "Buriti Bravo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703800",
    NM_MUN: "Buriti do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102325",
    NM_MUN: "Buriticupu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102358",
    NM_MUN: "Buritirana",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100452",
    NM_MUN: "Buritis",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300839",
    NM_MUN: "Caapiranga",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100031",
    NM_MUN: "Cabixi",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100601",
    NM_MUN: "Cacaulândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102504",
    NM_MUN: "Cáceres",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502004",
    NM_MUN: "Cachoeira do Arari",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1501956",
    NM_MUN: "Cachoeira do Piriá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102374",
    NM_MUN: "Cachoeira Grande",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703826",
    NM_MUN: "Cachoeirinha",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100049",
    NM_MUN: "Cacoal",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102408",
    NM_MUN: "Cajapió",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102507",
    NM_MUN: "Cajari",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600204",
    NM_MUN: "Calçoene",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502103",
    NM_MUN: "Cametá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102556",
    NM_MUN: "Campestre do Maranhão",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102603",
    NM_MUN: "Campinápolis",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100700",
    NM_MUN: "Campo Novo de Rondônia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102637",
    NM_MUN: "Campo Novo do Parecis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102678",
    NM_MUN: "Campo Verde",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102686",
    NM_MUN: "Campos de Júlio",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703842",
    NM_MUN: "Campos Lindos",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502152",
    NM_MUN: "Canaã dos Carajás",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102694",
    NM_MUN: "Canabrava do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102702",
    NM_MUN: "Canarana",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100809",
    NM_MUN: "Candeias do Jamari",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102606",
    NM_MUN: "Cândido Mendes",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400175",
    NM_MUN: "Cantá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102705",
    NM_MUN: "Cantanhede",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1300904",
    NM_MUN: "Canutama",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502202",
    NM_MUN: "Capanema",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102754",
    NM_MUN: "Capinzal do Norte",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502301",
    NM_MUN: "Capitão Poço",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200179",
    NM_MUN: "Capixaba",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400209",
    NM_MUN: "Caracaraí",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301001",
    NM_MUN: "Carauari",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301100",
    NM_MUN: "Careiro",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301159",
    NM_MUN: "Careiro da Várzea",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703867",
    NM_MUN: "Cariri do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102793",
    NM_MUN: "Carlinda",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703883",
    NM_MUN: "Carmolândia",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400233",
    NM_MUN: "Caroebe",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102804",
    NM_MUN: "Carolina",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703891",
    NM_MUN: "Carrasco Bonito",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2102903",
    NM_MUN: "Carutapera",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1703909",
    NM_MUN: "Caseara",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502400",
    NM_MUN: "Castanhal",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5102850",
    NM_MUN: "Castanheira",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100908",
    NM_MUN: "Castanheiras",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103109",
    NM_MUN: "Cedral",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1704105",
    NM_MUN: "Centenário",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103125",
    NM_MUN: "Central do Maranhão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103158",
    NM_MUN: "Centro do Guilherme",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103174",
    NM_MUN: "Centro Novo do Maranhão",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100056",
    NM_MUN: "Cerejeiras",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1705102",
    NM_MUN: "Chapada da Natividade",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1704600",
    NM_MUN: "Chapada de Areia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103007",
    NM_MUN: "Chapada dos Guimarães",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502509",
    NM_MUN: "Chaves",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100924",
    NM_MUN: "Chupinguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103257",
    NM_MUN: "Cidelândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103056",
    NM_MUN: "Cláudia",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301209",
    NM_MUN: "Coari",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103106",
    NM_MUN: "Cocalinho",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301308",
    NM_MUN: "Codajás",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103307",
    NM_MUN: "Codó",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502608",
    NM_MUN: "Colares",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103205",
    NM_MUN: "Colíder",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103505",
    NM_MUN: "Colinas",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1705508",
    NM_MUN: "Colinas do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716703",
    NM_MUN: "Colméia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103254",
    NM_MUN: "Colniza",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100064",
    NM_MUN: "Colorado do Oeste",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1705557",
    NM_MUN: "Combinado",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103304",
    NM_MUN: "Comodoro",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502707",
    NM_MUN: "Conceição do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103554",
    NM_MUN: "Conceição do Lago-Açu",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1705607",
    NM_MUN: "Conceição do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502756",
    NM_MUN: "Concórdia do Pará",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103353",
    NM_MUN: "Confresa",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103361",
    NM_MUN: "Conquista D'Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103604",
    NM_MUN: "Coroatá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100072",
    NM_MUN: "Corumbiara",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100080",
    NM_MUN: "Costa Marques",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103379",
    NM_MUN: "Cotriguaçu",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1706001",
    NM_MUN: "Couto Magalhães",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1706100",
    NM_MUN: "Cristalândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1706258",
    NM_MUN: "Crixás do Tocantins",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200203",
    NM_MUN: "Cruzeiro do Sul",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103403",
    NM_MUN: "Cuiabá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100940",
    NM_MUN: "Cujubim",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502764",
    NM_MUN: "Cumaru do Norte",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502772",
    NM_MUN: "Curionópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502806",
    NM_MUN: "Curralinho",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502855",
    NM_MUN: "Curuá",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502905",
    NM_MUN: "Curuçá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103703",
    NM_MUN: "Cururupu",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103437",
    NM_MUN: "Curvelândia",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600212",
    NM_MUN: "Cutias",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1706506",
    NM_MUN: "Darcinópolis",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103752",
    NM_MUN: "Davinópolis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103452",
    NM_MUN: "Denise",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103502",
    NM_MUN: "Diamantino",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707009",
    NM_MUN: "Dianópolis",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707108",
    NM_MUN: "Divinópolis do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707207",
    NM_MUN: "Dois Irmãos do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103601",
    NM_MUN: "Dom Aquino",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502939",
    NM_MUN: "Dom Eliseu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2103802",
    NM_MUN: "Dom Pedro",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707306",
    NM_MUN: "Dueré",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301407",
    NM_MUN: "Eirunepé",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1502954",
    NM_MUN: "Eldorado do Carajás",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301506",
    NM_MUN: "Envira",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200252",
    NM_MUN: "Epitaciolândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707405",
    NM_MUN: "Esperantina",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104008",
    NM_MUN: "Esperantinópolis",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100098",
    NM_MUN: "Espigão D'Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104057",
    NM_MUN: "Estreito",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503002",
    NM_MUN: "Faro",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707553",
    NM_MUN: "Fátima",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200302",
    NM_MUN: "Feijó",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104073",
    NM_MUN: "Feira Nova do Maranhão",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103700",
    NM_MUN: "Feliz Natal",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104081",
    NM_MUN: "Fernando Falcão",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600238",
    NM_MUN: "Ferreira Gomes",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707652",
    NM_MUN: "Figueirópolis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103809",
    NM_MUN: "Figueirópolis D'Oeste",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1707702",
    NM_MUN: "Filadélfia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503044",
    NM_MUN: "Floresta do Araguaia",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301605",
    NM_MUN: "Fonte Boa",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104099",
    NM_MUN: "Formosa da Serra Negra",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1708205",
    NM_MUN: "Formoso do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104107",
    NM_MUN: "Fortaleza dos Nogueiras",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104206",
    NM_MUN: "Fortuna",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503077",
    NM_MUN: "Garrafão do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103858",
    NM_MUN: "Gaúcha do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103908",
    NM_MUN: "General Carneiro",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5103957",
    NM_MUN: "Glória D'Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104305",
    NM_MUN: "Godofredo Viana",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503093",
    NM_MUN: "Goianésia do Pará",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1708304",
    NM_MUN: "Goianorte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1709005",
    NM_MUN: "Goiatins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104404",
    NM_MUN: "Gonçalves Dias",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104503",
    NM_MUN: "Governador Archer",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104552",
    NM_MUN: "Governador Edison Lobão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104602",
    NM_MUN: "Governador Eugênio Barros",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101005",
    NM_MUN: "Governador Jorge Teixeira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104628",
    NM_MUN: "Governador Luiz Rocha",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104651",
    NM_MUN: "Governador Newton Bello",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104677",
    NM_MUN: "Governador Nunes Freire",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104701",
    NM_MUN: "Graça Aranha",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104800",
    NM_MUN: "Grajaú",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301654",
    NM_MUN: "Guajará",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100106",
    NM_MUN: "Guajará-Mirim",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1709302",
    NM_MUN: "Guaraí",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104104",
    NM_MUN: "Guarantã do Norte",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2104909",
    NM_MUN: "Guimarães",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104203",
    NM_MUN: "Guiratinga",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503101",
    NM_MUN: "Gurupá",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1709500",
    NM_MUN: "Gurupi",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301704",
    NM_MUN: "Humaitá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105104",
    NM_MUN: "Icatu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105153",
    NM_MUN: "Igarapé do Meio",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105203",
    NM_MUN: "Igarapé Grande",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503200",
    NM_MUN: "Igarapé-Açu",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503309",
    NM_MUN: "Igarapé-Miri",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105302",
    NM_MUN: "Imperatriz",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104500",
    NM_MUN: "Indiavaí",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503408",
    NM_MUN: "Inhangapi",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104526",
    NM_MUN: "Ipiranga do Norte",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301803",
    NM_MUN: "Ipixuna",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503457",
    NM_MUN: "Ipixuna do Pará",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1709807",
    NM_MUN: "Ipueiras",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400282",
    NM_MUN: "Iracema",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301852",
    NM_MUN: "Iranduba",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503507",
    NM_MUN: "Irituia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1710508",
    NM_MUN: "Itacajá",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301902",
    NM_MUN: "Itacoatiara",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1710706",
    NM_MUN: "Itaguatins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105351",
    NM_MUN: "Itaipava do Grajaú",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503606",
    NM_MUN: "Itaituba",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1301951",
    NM_MUN: "Itamarati",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104542",
    NM_MUN: "Itanhangá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105401",
    NM_MUN: "Itapecuru Mirim",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302009",
    NM_MUN: "Itapiranga",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1710904",
    NM_MUN: "Itapiratins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1711100",
    NM_MUN: "Itaporã do Tocantins",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101104",
    NM_MUN: "Itapuã do Oeste",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104559",
    NM_MUN: "Itaúba",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600253",
    NM_MUN: "Itaubal",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105427",
    NM_MUN: "Itinga do Maranhão",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104609",
    NM_MUN: "Itiquira",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503705",
    NM_MUN: "Itupiranga",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503754",
    NM_MUN: "Jacareacanga",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104807",
    NM_MUN: "Jaciara",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503804",
    NM_MUN: "Jacundá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5104906",
    NM_MUN: "Jangada",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302108",
    NM_MUN: "Japurá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100114",
    NM_MUN: "Jaru",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105450",
    NM_MUN: "Jatobá",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1711506",
    NM_MUN: "Jaú do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105002",
    NM_MUN: "Jauru",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105476",
    NM_MUN: "Jenipapo dos Vieiras",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100122",
    NM_MUN: "Ji-Paraná",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105500",
    NM_MUN: "João Lisboa",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200328",
    NM_MUN: "Jordão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105609",
    NM_MUN: "Joselândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105101",
    NM_MUN: "Juara",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1711803",
    NM_MUN: "Juarina",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105150",
    NM_MUN: "Juína",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105658",
    NM_MUN: "Junco do Maranhão",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302207",
    NM_MUN: "Juruá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105176",
    NM_MUN: "Juruena",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1503903",
    NM_MUN: "Juruti",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105200",
    NM_MUN: "Juscimeira",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302306",
    NM_MUN: "Jutaí",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302405",
    NM_MUN: "Lábrea",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105708",
    NM_MUN: "Lago da Pedra",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105807",
    NM_MUN: "Lago do Junco",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105948",
    NM_MUN: "Lago dos Rodrigues",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105906",
    NM_MUN: "Lago Verde",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1711902",
    NM_MUN: "Lagoa da Confusão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1711951",
    NM_MUN: "Lagoa do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105963",
    NM_MUN: "Lagoa Grande do Maranhão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712009",
    NM_MUN: "Lajeado",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2105989",
    NM_MUN: "Lajeado Novo",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105234",
    NM_MUN: "Lambari D'Oeste",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600279",
    NM_MUN: "Laranjal do Jari",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712157",
    NM_MUN: "Lavandeira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106003",
    NM_MUN: "Lima Campos",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504000",
    NM_MUN: "Limoeiro do Ajuru",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712405",
    NM_MUN: "Lizarda",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106102",
    NM_MUN: "Loreto",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105259",
    NM_MUN: "Lucas do Rio Verde",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105309",
    NM_MUN: "Luciara",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106201",
    NM_MUN: "Luís Domingues",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712454",
    NM_MUN: "Luzinópolis",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600303",
    NM_MUN: "Macapá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100130",
    NM_MUN: "Machadinho D'Oeste",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504059",
    NM_MUN: "Mãe do Rio",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504109",
    NM_MUN: "Magalhães Barata",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302504",
    NM_MUN: "Manacapuru",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302553",
    NM_MUN: "Manaquiri",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302603",
    NM_MUN: "Manaus",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200336",
    NM_MUN: "Mâncio Lima",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302702",
    NM_MUN: "Manicoré",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200344",
    NM_MUN: "Manoel Urbano",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302801",
    NM_MUN: "Maraã",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504208",
    NM_MUN: "Marabá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106326",
    NM_MUN: "Maracaçumé",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504307",
    NM_MUN: "Maracanã",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106359",
    NM_MUN: "Marajá do Sena",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106375",
    NM_MUN: "Maranhãozinho",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504406",
    NM_MUN: "Marapanim",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105580",
    NM_MUN: "Marcelândia",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200351",
    NM_MUN: "Marechal Thaumaturgo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712504",
    NM_MUN: "Marianópolis do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504422",
    NM_MUN: "Marituba",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712702",
    NM_MUN: "Mateiros",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106508",
    NM_MUN: "Matinha",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106631",
    NM_MUN: "Matões do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105606",
    NM_MUN: "Matupá",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1302900",
    NM_MUN: "Maués",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1712801",
    NM_MUN: "Maurilândia do Tocantins",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600402",
    NM_MUN: "Mazagão",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504455",
    NM_MUN: "Medicilândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504505",
    NM_MUN: "Melgaço",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101203",
    NM_MUN: "Ministro Andreazza",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713205",
    NM_MUN: "Miracema do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106706",
    NM_MUN: "Mirador",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106755",
    NM_MUN: "Miranda do Norte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713304",
    NM_MUN: "Miranorte",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101302",
    NM_MUN: "Mirante da Serra",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105622",
    NM_MUN: "Mirassol d'Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106805",
    NM_MUN: "Mirinzal",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504604",
    NM_MUN: "Mocajuba",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504703",
    NM_MUN: "Moju",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504752",
    NM_MUN: "Mojuí dos Campos",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2106904",
    NM_MUN: "Monção",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504802",
    NM_MUN: "Monte Alegre",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713601",
    NM_MUN: "Monte do Carmo",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101401",
    NM_MUN: "Monte Negro",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713700",
    NM_MUN: "Monte Santo do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107001",
    NM_MUN: "Montes Altos",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107100",
    NM_MUN: "Morros",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504901",
    NM_MUN: "Muaná",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400308",
    NM_MUN: "Mucajaí",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713957",
    NM_MUN: "Muricilândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1714203",
    NM_MUN: "Natividade",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1714302",
    NM_MUN: "Nazaré",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303007",
    NM_MUN: "Nhamundá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105903",
    NM_MUN: "Nobres",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400407",
    NM_MUN: "Normandia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106000",
    NM_MUN: "Nortelândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106109",
    NM_MUN: "Nossa Senhora do Livramento",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106158",
    NM_MUN: "Nova Bandeirantes",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106208",
    NM_MUN: "Nova Brasilândia",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100148",
    NM_MUN: "Nova Brasilândia D'Oeste",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106216",
    NM_MUN: "Nova Canaã do Norte",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107258",
    NM_MUN: "Nova Colinas",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504950",
    NM_MUN: "Nova Esperança do Piriá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108808",
    NM_MUN: "Nova Guarita",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107308",
    NM_MUN: "Nova Iorque",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1504976",
    NM_MUN: "Nova Ipixuna",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106182",
    NM_MUN: "Nova Lacerda",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100338",
    NM_MUN: "Nova Mamoré",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108857",
    NM_MUN: "Nova Marilândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108907",
    NM_MUN: "Nova Maringá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108956",
    NM_MUN: "Nova Monte Verde",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106224",
    NM_MUN: "Nova Mutum",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106174",
    NM_MUN: "Nova Nazaré",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106232",
    NM_MUN: "Nova Olímpia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1714880",
    NM_MUN: "Nova Olinda",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107357",
    NM_MUN: "Nova Olinda do Maranhão",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303106",
    NM_MUN: "Nova Olinda do Norte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715002",
    NM_MUN: "Nova Rosalândia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106190",
    NM_MUN: "Nova Santa Helena",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505007",
    NM_MUN: "Nova Timboteua",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106240",
    NM_MUN: "Nova Ubiratã",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101435",
    NM_MUN: "Nova União",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106257",
    NM_MUN: "Nova Xavantina",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715101",
    NM_MUN: "Novo Acordo",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303205",
    NM_MUN: "Novo Airão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715150",
    NM_MUN: "Novo Alegre",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303304",
    NM_MUN: "Novo Aripuanã",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106273",
    NM_MUN: "Novo Horizonte do Norte",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100502",
    NM_MUN: "Novo Horizonte do Oeste",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715259",
    NM_MUN: "Novo Jardim",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106265",
    NM_MUN: "Novo Mundo",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505031",
    NM_MUN: "Novo Progresso",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505064",
    NM_MUN: "Novo Repartimento",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106315",
    NM_MUN: "Novo Santo Antônio",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106281",
    NM_MUN: "Novo São Joaquim",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505106",
    NM_MUN: "Óbidos",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505205",
    NM_MUN: "Oeiras do Pará",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600501",
    NM_MUN: "Oiapoque",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107407",
    NM_MUN: "Olho d'Água das Cunhãs",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107456",
    NM_MUN: "Olinda Nova do Maranhão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715507",
    NM_MUN: "Oliveira de Fátima",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505304",
    NM_MUN: "Oriximiná",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505403",
    NM_MUN: "Ourém",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505437",
    NM_MUN: "Ourilândia do Norte",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100155",
    NM_MUN: "Ouro Preto do Oeste",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505486",
    NM_MUN: "Pacajá",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400456",
    NM_MUN: "Pacaraima",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107506",
    NM_MUN: "Paço do Lumiar",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505494",
    NM_MUN: "Palestina do Pará",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1721000",
    NM_MUN: "Palmas",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107605",
    NM_MUN: "Palmeirândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715705",
    NM_MUN: "Palmeirante",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1713809",
    NM_MUN: "Palmeiras do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1715754",
    NM_MUN: "Palmeirópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505502",
    NM_MUN: "Paragominas",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2107704",
    NM_MUN: "Paraibano",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716109",
    NM_MUN: "Paraíso do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716208",
    NM_MUN: "Paranã",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106299",
    NM_MUN: "Paranaíta",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106307",
    NM_MUN: "Paranatinga",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505536",
    NM_MUN: "Parauapebas",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101450",
    NM_MUN: "Parecis",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303403",
    NM_MUN: "Parintins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108009",
    NM_MUN: "Pastos Bons",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505551",
    NM_MUN: "Pau D'Arco",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716307",
    NM_MUN: "Pau D'Arco",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303502",
    NM_MUN: "Pauini",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108108",
    NM_MUN: "Paulo Ramos",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600154",
    NM_MUN: "Pedra Branca do Amapari",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106372",
    NM_MUN: "Pedra Preta",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108207",
    NM_MUN: "Pedreiras",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716505",
    NM_MUN: "Pedro Afonso",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108256",
    NM_MUN: "Pedro do Rosário",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716604",
    NM_MUN: "Peixe",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505601",
    NM_MUN: "Peixe-Boi",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106422",
    NM_MUN: "Peixoto de Azevedo",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108306",
    NM_MUN: "Penalva",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1716653",
    NM_MUN: "Pequizeiro",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108405",
    NM_MUN: "Peri Mirim",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108454",
    NM_MUN: "Peritoró",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505635",
    NM_MUN: "Piçarra",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100189",
    NM_MUN: "Pimenta Bueno",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101468",
    NM_MUN: "Pimenteiras do Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108504",
    NM_MUN: "Pindaré-Mirim",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1717008",
    NM_MUN: "Pindorama do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108603",
    NM_MUN: "Pinheiro",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108702",
    NM_MUN: "Pio XII",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108801",
    NM_MUN: "Pirapemas",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1717206",
    NM_MUN: "Piraquê",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1717503",
    NM_MUN: "Pium",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505650",
    NM_MUN: "Placas",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200385",
    NM_MUN: "Plácido de Castro",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106455",
    NM_MUN: "Planalto da Serra",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2108900",
    NM_MUN: "Poção de Pedras",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106505",
    NM_MUN: "Poconé",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505700",
    NM_MUN: "Ponta de Pedras",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106653",
    NM_MUN: "Pontal do Araguaia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1717800",
    NM_MUN: "Ponte Alta do Bom Jesus",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1717909",
    NM_MUN: "Ponte Alta do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106703",
    NM_MUN: "Ponte Branca",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106752",
    NM_MUN: "Pontes e Lacerda",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505809",
    NM_MUN: "Portel",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200807",
    NM_MUN: "Porto Acre",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106778",
    NM_MUN: "Porto Alegre do Norte",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718006",
    NM_MUN: "Porto Alegre do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1505908",
    NM_MUN: "Porto de Moz",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106802",
    NM_MUN: "Porto dos Gaúchos",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106828",
    NM_MUN: "Porto Esperidião",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5106851",
    NM_MUN: "Porto Estrela",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109007",
    NM_MUN: "Porto Franco",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600535",
    NM_MUN: "Porto Grande",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718204",
    NM_MUN: "Porto Nacional",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109056",
    NM_MUN: "Porto Rico do Maranhão",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100205",
    NM_MUN: "Porto Velho",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200393",
    NM_MUN: "Porto Walter",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107008",
    NM_MUN: "Poxoréu",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600550",
    NM_MUN: "Pracuúba",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718303",
    NM_MUN: "Praia Norte",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506005",
    NM_MUN: "Prainha",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109106",
    NM_MUN: "Presidente Dutra",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303536",
    NM_MUN: "Presidente Figueiredo",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109205",
    NM_MUN: "Presidente Juscelino",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718402",
    NM_MUN: "Presidente Kennedy",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100254",
    NM_MUN: "Presidente Médici",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109239",
    NM_MUN: "Presidente Médici",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109270",
    NM_MUN: "Presidente Sarney",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109304",
    NM_MUN: "Presidente Vargas",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506104",
    NM_MUN: "Primavera",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101476",
    NM_MUN: "Primavera de Rondônia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107040",
    NM_MUN: "Primavera do Leste",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718451",
    NM_MUN: "Pugmil",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506112",
    NM_MUN: "Quatipuru",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107065",
    NM_MUN: "Querência",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109452",
    NM_MUN: "Raposa",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718501",
    NM_MUN: "Recursolândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506138",
    NM_MUN: "Redenção",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107156",
    NM_MUN: "Reserva do Cabaçal",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109502",
    NM_MUN: "Riachão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718550",
    NM_MUN: "Riachinho",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109551",
    NM_MUN: "Ribamar Fiquene",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107180",
    NM_MUN: "Ribeirão Cascalheira",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107198",
    NM_MUN: "Ribeirãozinho",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200401",
    NM_MUN: "Rio Branco",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107206",
    NM_MUN: "Rio Branco",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100262",
    NM_MUN: "Rio Crespo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718659",
    NM_MUN: "Rio da Conceição",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718709",
    NM_MUN: "Rio dos Bois",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506161",
    NM_MUN: "Rio Maria",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303569",
    NM_MUN: "Rio Preto da Eva",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718758",
    NM_MUN: "Rio Sono",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200427",
    NM_MUN: "Rodrigues Alves",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100288",
    NM_MUN: "Rolim de Moura",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107578",
    NM_MUN: "Rondolândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506187",
    NM_MUN: "Rondon do Pará",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107602",
    NM_MUN: "Rondonópolis",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400472",
    NM_MUN: "Rorainópolis",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109601",
    NM_MUN: "Rosário",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107701",
    NM_MUN: "Rosário Oeste",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506195",
    NM_MUN: "Rurópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506203",
    NM_MUN: "Salinópolis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107750",
    NM_MUN: "Salto do Céu",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506302",
    NM_MUN: "Salvaterra",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109700",
    NM_MUN: "Sambaíba",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718808",
    NM_MUN: "Sampaio",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718840",
    NM_MUN: "Sandolândia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506351",
    NM_MUN: "Santa Bárbara do Pará",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107248",
    NM_MUN: "Santa Carmem",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506401",
    NM_MUN: "Santa Cruz do Arari",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107743",
    NM_MUN: "Santa Cruz do Xingu",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718865",
    NM_MUN: "Santa Fé do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109759",
    NM_MUN: "Santa Filomena do Maranhão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109809",
    NM_MUN: "Santa Helena",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2109908",
    NM_MUN: "Santa Inês",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303601",
    NM_MUN: "Santa Isabel do Rio Negro",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506500",
    NM_MUN: "Santa Izabel do Pará",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110005",
    NM_MUN: "Santa Luzia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506559",
    NM_MUN: "Santa Luzia do Pará",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110039",
    NM_MUN: "Santa Luzia do Paruá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100296",
    NM_MUN: "Santa Luzia D'Oeste",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506583",
    NM_MUN: "Santa Maria das Barreiras",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506609",
    NM_MUN: "Santa Maria do Pará",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718881",
    NM_MUN: "Santa Maria do Tocantins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110203",
    NM_MUN: "Santa Rita",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718899",
    NM_MUN: "Santa Rita do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107768",
    NM_MUN: "Santa Rita do Trivelato",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200435",
    NM_MUN: "Santa Rosa do Purus",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1718907",
    NM_MUN: "Santa Rosa do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1719004",
    NM_MUN: "Santa Tereza do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107776",
    NM_MUN: "Santa Terezinha",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720002",
    NM_MUN: "Santa Terezinha do Tocantins",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600600",
    NM_MUN: "Santana",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506708",
    NM_MUN: "Santana do Araguaia",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506807",
    NM_MUN: "Santarém",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1506906",
    NM_MUN: "Santarém Novo",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107263",
    NM_MUN: "Santo Afonso",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303700",
    NM_MUN: "Santo Antônio do Içá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107792",
    NM_MUN: "Santo Antônio do Leste",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107800",
    NM_MUN: "Santo Antônio do Leverger",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507003",
    NM_MUN: "Santo Antônio do Tauá",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110302",
    NM_MUN: "Santo Antônio dos Lopes",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110500",
    NM_MUN: "São Bento",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720101",
    NM_MUN: "São Bento do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507102",
    NM_MUN: "São Caetano de Odivelas",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507151",
    NM_MUN: "São Domingos do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110658",
    NM_MUN: "São Domingos do Azeitão",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507201",
    NM_MUN: "São Domingos do Capim",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110708",
    NM_MUN: "São Domingos do Maranhão",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101484",
    NM_MUN: "São Felipe D'Oeste",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110807",
    NM_MUN: "São Félix de Balsas",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107859",
    NM_MUN: "São Félix do Araguaia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720150",
    NM_MUN: "São Félix do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507300",
    NM_MUN: "São Félix do Xingu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2110856",
    NM_MUN: "São Francisco do Brejão",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101492",
    NM_MUN: "São Francisco do Guaporé",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507409",
    NM_MUN: "São Francisco do Pará",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303809",
    NM_MUN: "São Gabriel da Cachoeira",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507458",
    NM_MUN: "São Geraldo do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111003",
    NM_MUN: "São João Batista",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400506",
    NM_MUN: "São João da Baliza",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507466",
    NM_MUN: "São João da Ponta",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507474",
    NM_MUN: "São João de Pirabas",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507508",
    NM_MUN: "São João do Araguaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111029",
    NM_MUN: "São João do Carú",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111052",
    NM_MUN: "São João do Paraíso",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111078",
    NM_MUN: "São João do Soter",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111201",
    NM_MUN: "São José de Ribamar",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107297",
    NM_MUN: "São José do Povo",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107305",
    NM_MUN: "São José do Rio Claro",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107354",
    NM_MUN: "São José do Xingu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111250",
    NM_MUN: "São José dos Basílios",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107107",
    NM_MUN: "São José dos Quatro Marcos",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111300",
    NM_MUN: "São Luís",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111409",
    NM_MUN: "São Luís Gonzaga do Maranhão",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400605",
    NM_MUN: "São Luiz",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111508",
    NM_MUN: "São Mateus do Maranhão",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507607",
    NM_MUN: "São Miguel do Guamá",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100320",
    NM_MUN: "São Miguel do Guaporé",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720200",
    NM_MUN: "São Miguel do Tocantins",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303908",
    NM_MUN: "São Paulo de Olivença",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111532",
    NM_MUN: "São Pedro da Água Branca",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107404",
    NM_MUN: "São Pedro da Cipa",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111573",
    NM_MUN: "São Pedro dos Crentes",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111607",
    NM_MUN: "São Raimundo das Mangabeiras",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111631",
    NM_MUN: "São Raimundo do Doca Bezerra",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111672",
    NM_MUN: "São Roberto",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720259",
    NM_MUN: "São Salvador do Tocantins",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507706",
    NM_MUN: "São Sebastião da Boa Vista",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720309",
    NM_MUN: "São Sebastião do Tocantins",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1303957",
    NM_MUN: "São Sebastião do Uatumã",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720499",
    NM_MUN: "São Valério",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111706",
    NM_MUN: "São Vicente Ferrer",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107875",
    NM_MUN: "Sapezal",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507755",
    NM_MUN: "Sapucaia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111722",
    NM_MUN: "Satubinha",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200500",
    NM_MUN: "Sena Madureira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111748",
    NM_MUN: "Senador Alexandre Costa",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200450",
    NM_MUN: "Senador Guiomard",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507805",
    NM_MUN: "Senador José Porfírio",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111763",
    NM_MUN: "Senador La Rocque",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101500",
    NM_MUN: "Seringueiras",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600055",
    NM_MUN: "Serra do Navio",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107883",
    NM_MUN: "Serra Nova Dourada",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111789",
    NM_MUN: "Serrano do Maranhão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720655",
    NM_MUN: "Silvanópolis",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304005",
    NM_MUN: "Silves",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107909",
    NM_MUN: "Sinop",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111805",
    NM_MUN: "Sítio Novo",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720804",
    NM_MUN: "Sítio Novo do Tocantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107925",
    NM_MUN: "Sorriso",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507904",
    NM_MUN: "Soure",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720853",
    NM_MUN: "Sucupira",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2111904",
    NM_MUN: "Sucupira do Norte",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107941",
    NM_MUN: "Tabaporã",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304062",
    NM_MUN: "Tabatinga",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1708254",
    NM_MUN: "Tabocão",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720903",
    NM_MUN: "Taguatinga",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507953",
    NM_MUN: "Tailândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720937",
    NM_MUN: "Taipas do Tocantins",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1720978",
    NM_MUN: "Talismã",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5107958",
    NM_MUN: "Tangará da Serra",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304104",
    NM_MUN: "Tapauá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108006",
    NM_MUN: "Tapurah",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200609",
    NM_MUN: "Tarauacá",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600709",
    NM_MUN: "Tartarugalzinho",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112001",
    NM_MUN: "Tasso Fragoso",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304203",
    NM_MUN: "Tefé",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101559",
    NM_MUN: "Teixeirópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507961",
    NM_MUN: "Terra Alta",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108055",
    NM_MUN: "Terra Nova do Norte",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1507979",
    NM_MUN: "Terra Santa",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108105",
    NM_MUN: "Tesouro",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101609",
    NM_MUN: "Theobroma",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112100",
    NM_MUN: "Timbiras",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1721109",
    NM_MUN: "Tocantínia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1721208",
    NM_MUN: "Tocantinópolis",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508001",
    NM_MUN: "Tomé-Açu",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304237",
    NM_MUN: "Tonantins",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108204",
    NM_MUN: "Torixoréu",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508035",
    NM_MUN: "Tracuateua",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508050",
    NM_MUN: "Trairão",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112233",
    NM_MUN: "Trizidela do Vale",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508084",
    NM_MUN: "Tucumã",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508100",
    NM_MUN: "Tucuruí",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112274",
    NM_MUN: "Tufilândia",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112308",
    NM_MUN: "Tuntum",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1721257",
    NM_MUN: "Tupirama",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1721307",
    NM_MUN: "Tupiratins",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112407",
    NM_MUN: "Turiaçu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112456",
    NM_MUN: "Turilândia",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304260",
    NM_MUN: "Uarini",
  },
  {
    SIGLA: "RR",
    CD_MUN: "1400704",
    NM_MUN: "Uiramutã",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508126",
    NM_MUN: "Ulianópolis",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108303",
    NM_MUN: "União do Sul",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508159",
    NM_MUN: "Uruará",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304302",
    NM_MUN: "Urucará",
  },
  {
    SIGLA: "AM",
    CD_MUN: "1304401",
    NM_MUN: "Urucurituba",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101708",
    NM_MUN: "Urupá",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108352",
    NM_MUN: "Vale de São Domingos",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101757",
    NM_MUN: "Vale do Anari",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1101807",
    NM_MUN: "Vale do Paraíso",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112704",
    NM_MUN: "Vargem Grande",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108402",
    NM_MUN: "Várzea Grande",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108501",
    NM_MUN: "Vera",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112803",
    NM_MUN: "Viana",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508209",
    NM_MUN: "Vigia",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5105507",
    NM_MUN: "Vila Bela da Santíssima Trindade",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112852",
    NM_MUN: "Vila Nova dos Martírios",
  },
  {
    SIGLA: "MT",
    CD_MUN: "5108600",
    NM_MUN: "Vila Rica",
  },
  {
    SIGLA: "RO",
    CD_MUN: "1100304",
    NM_MUN: "Vilhena",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508308",
    NM_MUN: "Viseu",
  },
  {
    SIGLA: "AP",
    CD_MUN: "1600808",
    NM_MUN: "Vitória do Jari",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2112902",
    NM_MUN: "Vitória do Mearim",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508357",
    NM_MUN: "Vitória do Xingu",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2113009",
    NM_MUN: "Vitorino Freire",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1722081",
    NM_MUN: "Wanderlândia",
  },
  {
    SIGLA: "TO",
    CD_MUN: "1722107",
    NM_MUN: "Xambioá",
  },
  {
    SIGLA: "AC",
    CD_MUN: "1200708",
    NM_MUN: "Xapuri",
  },
  {
    SIGLA: "PA",
    CD_MUN: "1508407",
    NM_MUN: "Xinguara",
  },
  {
    SIGLA: "MA",
    CD_MUN: "2114007",
    NM_MUN: "Zé Doca",
  },
];

function changeDates() {
  var dateRange = getMinMaxDate();
  var firstDate = ee.Date(dateRange.get("firstDate"));
  var lastDate = ee.Date(dateRange.get("lastDate"));

  leftSliderDate.setValue(firstDate);
  rightSliderDate.setValue(lastDate);

  leftSliderDate.setStart(firstDate);
  rightSliderDate.setStart(firstDate);
}

function exibirInformacoes() {
  alert(
    "Cada gás selecionado tem uma série histórica diferente like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
  );
}

// Max area
var maxAoiArea = 8e11;
var aoiArea = null;
// Define vis palette:
var palette = [
  "FCFDBF",
  "FDAE78",
  "EE605E",
  "B63679",
  "711F81",
  "2C105C",
  "000004",
];
// Define data options.
var dataInfo = {
  Aerosol: {
    Offline: "COPERNICUS/S5P/OFFL/L3_AER_AI",
    colId: "COPERNICUS/S5P/NRTI/L3_AER_AI",
    band: "absorbing_aerosol_index",
    cloudBand: "",
    maskVal: -1,
    scalar: 1,
    legendLabel: "UV Aerosol Index",
    unitsLabel: "UV Aerosol Index",
    visParams: {
      palette: palette,
      min: -1,
      max: 2,
    },
    viewWindow: {
      min: -1.5,
      max: 2.5,
    },
    baseline: 0,
  },
  "Carbon monoxide": {
    Offline: "COPERNICUS/S5P/OFFL/L3_CO",
    colId: "COPERNICUS/S5P/NRTI/L3_CO",
    band: "CO_column_number_density",
    cloudBand: "",
    maskVal: 0,
    scalar: 1,
    legendLabel: "CO (mol/m²), vertically integrated column",
    unitsLabel: "CO (mol/m²)",
    visParams: {
      palette: palette,
      min: 0.0,
      max: 0.05,
    },
    viewWindow: {
      min: 0.0,
      max: 0.1,
    },
    baseline: 0,
  },
  Formaldehyde: {
    Offline: "COPERNICUS/S5P/OFFL/L3_HCHO",
    colId: "COPERNICUS/S5P/NRTI/L3_HCHO",
    band: "tropospheric_HCHO_column_number_density",
    cloudBand: "cloud_fraction",
    maskVal: 0,
    scalar: 1e6,
    legendLabel: "HCHO (μmol/m²), tropospheric column",
    unitsLabel: "HCHO (μmol/m²)",
    visParams: {
      palette: palette,
      min: 0.0,
      max: 300.0,
    },
    viewWindow: {
      min: 0.0,
      max: 600.0,
    },
    baseline: 0,
  },
  Methane: {
    Offline: "COPERNICUS/S5P/OFFL/L3_CH4",
    colId: "COPERNICUS/S5P/OFFL/L3_CH4",
    band: "CH4_column_volume_mixing_ratio_dry_air",
    cloudBand: "",
    maskVal: 1750,
    scalar: 1,
    legendLabel: "ppmV, column averaged dry air mixing ratio",
    unitsLabel: "ppmV",
    visParams: {
      palette: palette,
      min: 1800.0,
      max: 1900.0,
    },
    viewWindow: {
      min: 1600.0,
      max: 2000.0,
    },
    baseline: 1800,
  },
  "Nitrogen dioxide": {
    Offline: "COPERNICUS/S5P/OFFL/L3_NO2",
    colId: "COPERNICUS/S5P/NRTI/L3_NO2",
    band: "tropospheric_NO2_column_number_density",
    cloudBand: "cloud_fraction",
    maskVal: 0.00007,
    scalar: 1e6,
    legendLabel: "NO2 (μmol/m²), tropospheric vertical column",
    unitsLabel: "NO₂ (μmol/m²)",
    visParams: {
      palette: palette,
      min: 20.0,
      max: 400.0,
    },
    viewWindow: {
      min: 0.0,
      max: 1000.0,
    },
    baseline: 0,
  },
  Ozone: {
    Offline: "COPERNICUS/S5P/OFFL/L3_O3",
    colId: "COPERNICUS/S5P/NRTI/L3_O3",
    band: "O3_column_number_density",
    cloudBand: "cloud_fraction",
    maskVal: 0.12,
    scalar: 1,
    legendLabel: "O3 (mol/m²), total atmospheric column",
    unitsLabel: "O3 (mol/m²)",
    visParams: {
      palette: palette,
      min: 0.1,
      max: 0.16,
    },
    viewWindow: {
      min: 0.0,
      max: 0.2,
    },
    baseline: 0.1,
  },
  "Sulphur Dioxide": {
    Offline: "COPERNICUS/S5P/OFFL/L3_SO2",
    colId: "COPERNICUS/S5P/NRTI/L3_SO2",
    band: "SO2_column_number_density",
    cloudBand: "cloud_fraction",
    maskVal: 0,
    scalar: 1e6,
    legendLabel: "SO2 (μmol/m²), vertical column",
    unitsLabel: "SO₂ (μmol/m²)",
    visParams: {
      palette: palette,
      min: 0.0,
      max: 1000.0,
    },
    viewWindow: {
      min: 0.0,
      max: 4000.0,
    },
    baseline: 0,
  },
};
var dateInfo = {
  left: { selected: "" },
  right: { selected: "" },
};
var dataSelector = ui.Select({
  items: Object.keys(dataInfo),
});

var btnInfoGas = ui.Button({
  label: "Help",
  imageUrl:
    "https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v13/24px.svg",
  onClick: exibirInformacoes,
  style: { margin: "10px 0px 0px 5px", backgroundColor: "#ffffff" },
});

var btnCleanCity = ui.Button({
  label: "Clear",
  imageUrl:
    "https://fonts.gstatic.com/s/i/materialiconsoutlined/delete_forever/v13/24px.svg",
  onClick: cleanCity,
  style: { margin: "10px 0px 0px 5px", backgroundColor: "#ffffff" },
});

var btnCleanState = ui.Button({
  label: "Clear",
  imageUrl:
    "https://fonts.gstatic.com/s/i/materialiconsoutlined/delete_forever/v13/24px.svg",
  onClick: cleanState,
  style: { margin: "10px 0px 0px 5px", backgroundColor: "#ffffff" },
});

// Get data information - used globally in functions.
var datasetUrl = ui.url.get("dataset", "Nitrogen dioxide");
ui.url.set("dataset", datasetUrl); // need to set incase this is the initial load.
var thisData = dataInfo[datasetUrl];
dataSelector.set({ placeholder: datasetUrl, value: datasetUrl });
// Set the datatype.
// var dataTypeUrl = ui.url.get('datatype', 'Near-real-time');
// ui.url.set('datatype', dataTypeUrl);
// thisData.colId = thisData[dataTypeUrl];
// colSelector.set({placeholder: dataTypeUrl, value: dataTypeUrl});
// Get initial map bounds from the url parameter.
var initPoint = ee.Geometry.Point(-61.479492, -3.732708).toGeoJSONString();
// ui.url.set('center', dataTypeUrl);
var zoom = ui.url.get("zoom", "4");
ui.url.set("center", zoom);
// Get the initial AOI from the url parameter.
var aoiUrl = ui.url.get("aoi", initPoint);
var aoi = ee.Geometry(JSON.parse(aoiUrl));
ui.url.set("aoi", aoi.toGeoJSONString());
// Get the initial cloud fraction allowance.
var cloudPct = ui.url.get("cloud", 10);
ui.url.set("cloud", cloudPct);
var cloudFrac = cloudPct / 100;
var legendIndex = 10;
var leftSliderDateUrl = ui.url.get("leftdate", "2020-01-01");
ui.url.set("leftdate", leftSliderDateUrl);
var rightSliderDateUrl = ui.url.get("rightdate", "2020-02-01");
ui.url.set("rightdate", rightSliderDateUrl);
dateInfo.left.selected = leftSliderDateUrl;
dateInfo.right.selected = rightSliderDateUrl;
var minStretchVal = ui.url.get("min", 20);
ui.url.set("min", minStretchVal);
thisData.visParams.min = minStretchVal;
var maxStretchVal = ui.url.get("max", 400);
ui.url.set("max", maxStretchVal);
thisData.visParams.max = maxStretchVal;
// get min and max dates for dataset.
function getMinMaxDate() {
  var col = ee.ImageCollection(thisData.colId).filterBounds(aoi);
  var dataDateRange = ee.Dictionary(
    col.reduceColumns({
      reducer: ee.Reducer.minMax(),
      selectors: ["system:time_start"],
    })
  );

  var firstDate = ee.Date(dataDateRange.get("min"));
  var lastDate = ee.Date(dataDateRange.get("max"));
  return ee.Dictionary({ firstDate: firstDate, lastDate: lastDate });
}

function cleanCity() {
  citySelector.setValue(null);
  cityStateButton.setLabel("Run by state");
}

function cleanState() {
  stateSelector.setValue(null);
  lblCity.style().set("shown", false);
  pnlCitySelector.style().set("shown", false);
  cleanCity(); //clean selected city

  cityStateButton.setLabel("Run");
}

// function 12MapsHandler(){

// }

// var maps = []
// ui.Panel.Layout.flow('horizontal',true)
// for (var label in vis){
//   var map = ui.Map().setControlVisibility(false)
//   map.style().set('width', '400px');
//   map.style().set('height', '400px');
//   map.addLayer(composite, vis[label])
//   map.add(ui.Label(label))
//   maps.push(map)
// }

// #############################################################################
// ### STEP UP THE INFO PANEL ###
// #############################################################################
// Define the info panel.
var infoPanel = ui.Panel({ style: { width: "27%", maxWidth: "40%" } });

// Create an introduction panel.

var introGAMBAR = ui.Label({
  value: "Gas Monitor Brazilian Amazon Rainforest:",
  style: {
    backgroundColor: "CFE4D3",
    fontWeight: "bold",
    margin: "8px 0 1px 8px",
    fontSize: "16px",
  },
});

var intro = ui.Label({
  value: "An application to visualize air pollutant time series data.",
  style: { backgroundColor: "CFE4D3", margin: "0 0 4px 8px", fontSize: "14px" },
});

var leftSliderDate = ui.DateSlider({
  start: "2010-01-01",
  end: new Date(),
  value: "2020-01-01",
  period: 1,
  style: { stretch: "horizontal", shown: true, backgroundColor: "CFE4D3" },
});
leftSliderDate.setDisabled(false);

var rightSliderDate = ui.DateSlider({
  start: "2010-01-01",
  end: new Date(),
  value: "2021-01-01",
  period: 1,
  style: { stretch: "horizontal", shown: true, backgroundColor: "CFE4D3" },
});
rightSliderDate.setDisabled(false);

var dataSelectPanel = ui.Panel({
  widgets: [dataSelector, btnInfoGas],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
});

var dateSliderLabelWidth = "45px";
var cloudFracSlider = ui.Slider({
  min: 0,
  max: 100,
  value: cloudPct,
  step: 1,
  style: { stretch: "horizontal", backgroundColor: "CFE4D3" },
});
cloudFracSlider.setDisabled(true);
var leftDateLabel = ui.Label({
  value: "Initial Date:",
  style: {
    width: dateSliderLabelWidth,
    color: "000",
    padding: "25px 0px 0px 0px",
    backgroundColor: "CFE4D3",
  },
});
var leftDatePanel = ui.Panel({
  widgets: [leftDateLabel, leftSliderDate],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal", backgroundColor: "CFE4D3" },
});

var rightDateLabel = ui.Label({
  value: "Final Date:",
  style: {
    width: dateSliderLabelWidth,
    color: "000",
    padding: "25px 0px 0px 0px",
    backgroundColor: "CFE4D3",
  },
});
var rightDatePanel = ui.Panel({
  widgets: [rightDateLabel, rightSliderDate],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal", backgroundColor: "CFE4D3" },
});
var minVis = ui.Slider({
  min: thisData.viewWindow.min + 0.0,
  max: thisData.viewWindow.max + 0.0,
  value: thisData.visParams.min + 0.0,
  step: (thisData.viewWindow.max + 0.0 - thisData.viewWindow.min + 0.0) / 100,
  style: { stretch: "horizontal" },
  onChange: updateStretch,
});

var maxVis = ui.Slider({
  min: thisData.viewWindow.min + 0.0,
  max: thisData.viewWindow.max + 0.0,
  value: thisData.visParams.max + 0.0,
  step: (thisData.viewWindow.max + 0.0 - thisData.viewWindow.min + 0.0) / 100,
  style: { stretch: "horizontal" },
  onChange: updateStretch,
});
var stretchPanel = ui.Panel({
  widgets: [ui.Label("Min:"), minVis, ui.Label("Max:"), maxVis],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
});

var mapComparison = ui.Panel([
  ui.Label({
    value: "Map Comparison",
    style: { fontSize: "24px", fontWeight: "bold", backgroundColor: "CFE4D3" },
  }),
  ui.Label({
    value: "1. Gas and Aerosol:",
    style: { fontWeight: "bold", fontSize: "18px", backgroundColor: "CFE4D3" },
  }),
  dataSelectPanel,
  ui.Label({
    value: "2. Dates:",
    style: { fontWeight: "bold", fontSize: "18px", backgroundColor: "CFE4D3" },
  }),
  leftDatePanel,
  rightDatePanel,
  //cbxMedia,
  // btnRun,
  // ui.Label({ value: "4. Adjust palette stretch:" }),
  // stretchPanel,
  // ui.Label("[legend]"),
  // ui.Label("[swipeSwitch]"),
]);

// Add widgets to the info panel.
infoPanel.add(introGAMBAR);
infoPanel.add(intro);
var panelBreak25 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});
infoPanel.add(panelBreak25);
infoPanel.add(mapComparison);

function dataSelectorHandler() {
  var datasetFromClick = dataSelector.getValue();
  var dataTypeFromClick = "Offline";
  ui.url.set("dataset", datasetFromClick);
  ui.url.set("datatype", dataTypeFromClick);

  thisData = dataInfo[datasetFromClick];
  thisData.colId = thisData[dataTypeFromClick];

  changeDates();

  // if(thisData.cloudBand !== '') {
  //   cloudFracSlider.setDisabled(false);
  // } else {
  //   cloudFracSlider.setDisabled(true);s
  // }

  thisData.cloudBand = 5;

  // Deal with the stretch
  var minVis = ui.Slider({
    min: thisData.viewWindow.min + 0.0,
    max: thisData.viewWindow.max + 0.0,
    value: thisData.visParams.min + 0.0,
    step: (thisData.viewWindow.max + 0.0 - thisData.viewWindow.min + 0.0) / 100,
    style: { stretch: "horizontal" },
    onChange: updateStretch,
  });

  var maxVis = ui.Slider({
    min: thisData.viewWindow.min + 0.0,
    max: thisData.viewWindow.max + 0.0,
    value: thisData.visParams.max + 0.0,
    step: (thisData.viewWindow.max + 0.0 - thisData.viewWindow.min + 0.0) / 100,
    style: { stretch: "horizontal" },
    onChange: updateStretch,
  });

  stretchPanel.widgets().set(1, minVis);
  stretchPanel.widgets().set(3, maxVis);
  thisData.visParams.min = stretchPanel.widgets().get(1).getValue();
  thisData.visParams.max = stretchPanel.widgets().get(3).getValue();
  ui.url.set("min", thisData.visParams.min);
  ui.url.set("max", thisData.visParams.max);

  // Update map data?!
  // updateMaps(false,'');
  makeLegend()
}
dataSelector.onChange(dataSelectorHandler);
// #############################################################################
// ### INITIALIZE THE NO2 DATA ###
// #############################################################################

function maskClouds(img) {
  var cloudMask = img.select(thisData.cloudBand).lte(cloudFrac);
  return img.updateMask(cloudMask);
}

function compositeImages(targetDate) {
  targetDate = ee.Date(targetDate);
  var startDate = targetDate;
  var endDate = targetDate.advance(1, "month"); // 4
  //var startDate = targetDate.advance(-8, 'day'); // -3
  //var endDate = targetDate.advance(1, 'day'); // 4
  var dateFilter = ee.Filter.date(startDate, endDate);
  var col = ee.ImageCollection(thisData.colId).filter(dateFilter);
  if (thisData.cloudBand !== "") {
    col = col.map(maskClouds);
  }
  return col
    .select(thisData.band)
    .reduce(ee.Reducer.mean())
    .multiply(thisData.scalar);
}

// #############################################################################
// ### STEP UP THE MAP CANVASES ###
// #############################################################################
// Make date labels for the maps.
var leftLabel = ui.Label("[leftLabel]", {
  shown: false,
  position: "bottom-left",
  fontWeight: "bold",
  color: "000",
  fontSize: "18px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
});
var rightLabel = ui.Label("[rightLabel]", {
  shown: false,
  position: "bottom-right",
  fontWeight: "bold",
  color: "000",
  fontSize: "18px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
});
// Make maps.
var leftMap = ui.Map();
var rightMap = ui.Map();
// left map draw only.
var rightMapDrawLabel = ui.Label({
  value: "Drawing disabled on this side",
  style: {
    color: "EE605E",
    position: "top-right",
    backgroundColor: "rgba(255, 255, 255, 1.0)",
  },
});
rightMap.add(rightMapDrawLabel);

//Create big map
var bigMap = ui.Map({
  center: { lat: -3.732708, lon: -61.479492, zoom: 4.5 },
});

bigMap.addLayer(bioma_amazonico, {}, "Amazonia", true, 0.25);
bigMap.setOptions("TERRAIN");

// Set 12 maps
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var maps = [];

ui.Panel.Layout.flow("horizontal", true);
var date = ee.Date(leftSliderDate.getValue()[1]);
// var date = ee.Date.fromYMD(selectYear, 01, 01);

for (var i = 0; i < 12; i++) {
  // var map = ui.Map().setControlVisibility(false, false, true, true, true, false, false);
  var map = ui.Map().setControlVisibility(false);
  map.setOptions("TERRAIN");

  map.style().set("maxWidth", "calc(33% - 16px)");
  map.style().set("minWidth", "calc(33% - 16px)");
  map.style().set("maxHeight", "10%");
  map.style().set("margin", "8px");
  // map.addLayer(composite, vis[label])
  // var img = compositeImages(date);
  // img = img.clipToCollection(bioma_amazonico);

  // map.layers().set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));
  map.add(ui.Label(months[i]));
  map.setCenter(-61.479492, -3.732708);
  maps.push(map);
  date = date.update({
    month: date.advance(1, "month").get("month"),
  });
}

leftMap.setControlVisibility({
  layerList: false,
  zoomControl: false,
  fullscreenControl: false,
});
rightMap.setControlVisibility({
  layerList: false,
  zoomControl: false,
  fullscreenControl: false,
});
bigMap.drawingTools().setShown(false);
rightMap.drawingTools().setShown(false);
leftMap.setOptions("Dark", { Dark: darkMap() });
rightMap.setOptions("Dark", { Dark: darkMap() });
// Link the default Map to the other map.
var linker = ui.Map.Linker(maps);
// Create a SplitPanel which holds the linked maps side-by-side.
// Get the initial AOI from the url parameter.
var swipeStatus = ui.url.get("swipe", false);
ui.url.set("swipe", swipeStatus);

var linkerMaps = [];

for (i = 0; i < 12; i++) {
  linkerMaps.push(linker.get(i));
}

var mapsPanel = ui.Panel({
  layout: ui.Panel.Layout.flow("horizontal", true),
  style: { stretch: "both", width: "100%" },
});
// mapsPanel.Layout.flow("horizontal",true)

var lblMediasMensais = ui.Label({
  value: "Monthly Average:",
  style: { fontSize: "18px", fontWeight: "500", margin: "10px 0px 0px 15px" },
});

var pnlMediasMensais = ui.Panel({
  // layout: ui.Panel.Layout.flow("vertical", true),
  widgets: [lblMediasMensais, mapsPanel],
});

for (i = 0; i < linkerMaps.length; i++) {
  mapsPanel.add(linkerMaps[i]);
}

function updateCloudFracSlider(val) {
  cloudPct = val;
  ui.url.set("cloud", val);
  cloudFrac = cloudPct / 100;
  // updateLeftSliderDate();
  // updateRightSliderDate();
  updateMaps(false, "");

  aoi.area(1000).evaluate(function (area) {
    aoiArea = area;
    if (area > maxAoiArea) {
      print("Drawn geometry is too large.");
      tsChart.widgets().get(0).style().set({ shown: true });
      tsChart.widgets().get(1).style().set({ shown: false });
      tsChart.widgets().get(2).style().set({ shown: false });
      return;
    } else {
      tsChart.widgets().get(0).style().set({ shown: false });
      setChart();
      chartTimeSeries();
    }
  });
}
cloudFracSlider.onChange(updateCloudFracSlider);

function citySelectorOnChange() {
  cityStateButton.setLabel("Run by city");
}

function updateMaps(isDraw, aoi) {
  // aoi.area(1000).evaluate(function (area) {
  //   aoiArea = area;
  //   if (area > maxAoiArea) {
  //     print("Drawn geometry is too large.");
  //     tsChart.widgets().get(0).style().set({ shown: true });
  //     tsChart.widgets().get(1).style().set({ shown: false });
  //     tsChart.widgets().get(2).style().set({ shown: false });
  //     return;
  //   } else {
  tsChart.widgets().get(0).style().set({ shown: false });
  setChart();
  chartTimeSeries();
  //   }
  // });

  if (typeof isDraw === "object") {
    isDraw = false; //Define false if not pass parameter
  }

  var initialTotalDate = new Date(leftSliderDate.getValue()[1]);
  var finalTotalDate = new Date(rightSliderDate.getValue()[1]);

  var initialYear = initialTotalDate.getFullYear();
  var finalYear = finalTotalDate.getFullYear();
  var initialMonth = initialTotalDate.getMonth() + 1;
  var finalMonth = finalTotalDate.getMonth() + 1;

  if (initialTotalDate.getTime() > finalTotalDate.getTime()) {
    alert("Start date must be smaller than end date!");
    return;
  }
  var timeDifference =
    (finalTotalDate.getTime() - initialTotalDate.getTime()) /
    1000 /
    60 /
    60 /
    24;

  //Compara se o intervalo de tempo eh menor que um ano
  if (timeDifference < 365) {
    alert("Time span must be greater than one year!");
    return;
  }

  for (var i = initialYear; i <= finalYear; i++) {
    for (var k = 1; k <= 12; k++) {
      //Verifica se esta no intervalo de tempo definido
      if (i === finalYear && k <= finalMonth) {
        return;
      }
      if (
        (i === initialYear && k >= initialMonth) ||
        (i !== initialYear && k <= finalMonth)
      ) {
        // print(
        //   "i: " +
        //     i +
        //     " k: " +
        //     k +
        //     " InitialYear: " +
        //     initialYear +
        //     " InitialMonth: " +
        //     initialMonth +
        //     " FinalYear: " +
        //     finalYear +
        //     " FinalMonth: " +
        //     finalMonth
        // );
        var img = compositeImages(new Date(i, k, 1));
        var temp;
        //Verifica se eh um desenho ou nao
        if (isDraw === false) {
          temp = img.clipToCollection(bioma_amazonico);
          maps[k - 1].centerObject(bioma_amazonico, 10);
        } else {
          temp = img.clip(aoi);
          maps[k - 1].centerObject(aoi, 6);
        }
        if (isDraw === "city") {
          temp = img.clip(aoi);
          maps[k - 1].centerObject(aoi, 8);
        }
        if (isDraw === "state") {
          temp = img.clip(aoi);
          maps[k - 1].centerObject(aoi, 4);
        }
        setChart();
        chartTimeSeries(aoi, true);
        maps[k - 1]
          .layers()
          .set(
            0,
            ui.Map.Layer(temp, thisData.visParams, "Amazonia", true, 0.75)
          );
      }
    }
  }
}

function updateStretch() {
  thisData.visParams.min = stretchPanel.widgets().get(1).getValue();
  thisData.visParams.max = stretchPanel.widgets().get(3).getValue();
  ui.url.set("min", thisData.visParams.min);
  ui.url.set("max", thisData.visParams.max);
  var leftImg = compositeImages(ee.Date(dateInfo.left.selected));
  var rightImg = compositeImages(ee.Date(dateInfo.right.selected));
  leftMap
    .layers()
    .set(0, ui.Map.Layer(leftImg, thisData.visParams, null, true, 0.55));
  rightMap
    .layers()
    .set(0, ui.Map.Layer(rightImg, thisData.visParams, null, true, 0.55));
  makeLegend();
}

// #############################################################################
// ### SETUP THE CHARTS PANEL ###
// #############################################################################
var noPlotLabel = ui.Label({
  value: "Drawn geometry is too large",
  style: {
    position: "top-left",
    color: "EE605E",
    fontWeight: "bold",
    shown: false,
  },
});
var contChart = ui.Label({
  value: "",
  style: { position: "top-left", shown: false },
});
var yoyChart = ui.Label({
  value: "",
  style: { position: "top-left", shown: false },
});
var tsChart = ui.Panel([noPlotLabel, contChart, yoyChart]);

// #############################################################################
// ### PREP FOR DEALING WITH GEOMETRY DRAWING ###
// #############################################################################
// Get the drawing tools widget object.
var drawingTools = bigMap.drawingTools();
var drawingToolsRight = rightMap.drawingTools();
// clear any existing geometries.
var nLayers = drawingTools.layers().length();
while (nLayers > 0) {
  var layer = drawingTools.layers().get(0);
  drawingTools.layers().remove(layer);
  nLayers = drawingTools.layers().length();
}
nLayers = drawingToolsRight.layers().length();
while (nLayers > 0) {
  layer = drawingToolsRight.layers().get(0);
  drawingToolsRight.layers().remove(layer);
  nLayers = drawingToolsRight.layers().length();
}
drawingTools.addLayer([aoi], null, "#006600");
drawingToolsRight.addLayer([aoi], null, "FFF");
drawingToolsRight.layers().get(0).setLocked(true);

// #############################################################################
// ### SETUP APP DISPLAY ###
// #############################################################################
var mapChartSplitPanel = ui.Panel([
  ui.SplitPanel({
    firstPanel: ui.Panel(bigMap, null, { height: "60%" }),
    secondPanel: ui.Panel(pnlMediasMensais, null, {
      stretch: "horizontal",
      width: "600px",
    }), //
    orientation: "vertical",
    wipe: false,
  }),
  tsChart,
]);

// Make the info panel and slider panel split.

var splitPanel = ui.SplitPanel(infoPanel, mapChartSplitPanel);
// Set the SplitPanel as the only thing in root.
ui.root.widgets().reset([splitPanel]);
// Set url params for map bounds.
leftMap.onChangeBounds(function (e) {
  ui.url.set("center", ee.Geometry.Point(e.lon, e.lat).toGeoJSONString());
  ui.url.set("zoom", e.zoom);
});
// center aoi.
// leftMap.centerObject(ee.Geometry(JSON.parse(center)), parseInt(zoom));

// #############################################################################
// ### INITIALIZE MAP DATA ###
// #############################################################################
// Add data to maps.
var blankImg = ee.Image(0).selfMask();
bigMap.addLayer(blankImg);
rightMap.addLayer(blankImg);
bigMap.add(leftLabel);
rightMap.add(rightLabel);
// if(thisData.cloudBand !== '') {
//   cloudFracSlider.setDisabled(false);
// }
// updateLeftSliderDate();
// updateRightSliderDate();
// updateMaps(false,'');

// #############################################################################
// ### CHART DATA ###
// #############################################################################
var firstChart = true;
function chartTimeSeries(area, isPredefined) {
  if (isPredefined) {
    aoi = area;
    print("entrei aqui");
  }
  var no2ImgTs = ee
    .ImageCollection(thisData.colId)
    .filterBounds(aoi)
    .map(function (img) {
      return img.set("millis", img.date().millis());
    });

  // Cloud masking.
  if (thisData.cloudBand !== "") {
    no2ImgTs = no2ImgTs.map(maskClouds);
  }

  // Get the band we want.
  no2ImgTs = no2ImgTs.select(thisData.band);

  // Make a target dates collection.
  var dataDateRange = ee.Dictionary(
    no2ImgTs.reduceColumns({
      reducer: ee.Reducer.minMax(),
      selectors: ["system:time_start"],
    })
  );
  var firstDate = ee.Date(dataDateRange.get("min"));
  var lastDate = ee.Date(dataDateRange.get("max"));
  var nDays = lastDate.difference(firstDate, "day").add(1);
  var firstMillis = firstDate.millis();
  var nMillis = firstMillis.add(nDays.multiply(8.64e7));
  var stepMillis = 9 * 8.64e7; // 5
  var seq = ee.List.sequence(firstMillis, nMillis, stepMillis);
  var targetCol = ee.ImageCollection.fromImages(
    seq.map(function (i) {
      return ee.Image().set({ millis: i, "system:time_start": ee.Date(i) });
    })
  );

  // Join images to target date by max difference.
  var joinFilter = ee.Filter.maxDifference({
    difference: 8.64e7 * 4, // 4 days (10-day composite)
    leftField: "millis",
    rightField: "millis",
  });
  targetCol = ee.Join.saveAll("matches").apply(targetCol, no2ImgTs, joinFilter);

  // Make composites.
  var compCol5 = targetCol
    .map(function (img) {
      var imgCol = ee.ImageCollection.fromImages(img.get("matches"));
      var imgComp = imgCol.reduce(
        ee.Reducer.percentile({
          percentiles: [25, 50, 75],
          outputNames: ["p25", "p50", "p75"],
        })
      );
      var nBands = imgComp.bandNames().size();
      return imgComp.rename(["p25", "p50", "p75"]).set({
        "system:time_start": img.get("system:time_start"),
        nBands: nBands,
      });
    })
    .filter(ee.Filter.gt("nBands", 0));

  if (firstChart) {
    aoiArea = aoi.area(1000).getInfo();
    firstChart = false;
  }
  var scale = 1000;
  if (aoiArea > 5e11) {
    scale = 10000;
  } else if (aoiArea > 1e11) {
    scale = 5000;
  }
  var no2FcTs = ee.FeatureCollection(
    compCol5.map(function (img) {
      var stat = ee.Image(img).multiply(thisData.scalar).reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: aoi,
        scale: scale,
        bestEffort: true,
        maxPixels: 1e13,
      });
      var imgDate = ee.Date(img.get("system:time_start"));
      return ee.Feature(null, stat).set({
        "system:time_start": imgDate.millis(),
        doy: imgDate.getRelative("day", "year"),
        year: ee.Algorithms.String(imgDate.get("year")),
      });
    })
  );

  var leftMapDate = ee.Date(
    ee.List(leftDatePanel.widgets().get(1).getValue()).get(0)
  );
  var rightMapDate = ee.Date(
    ee.List(rightDatePanel.widgets().get(1).getValue()).get(0)
  );

  var mapPoints = ee.FeatureCollection([
    ee.Feature(null, {
      "system:time_start": leftMapDate.millis(),
      p0: thisData.baseline,
    }),
    ee.Feature(null, {
      "system:time_start": rightMapDate.millis(),
      p1: thisData.baseline,
    }),
  ]);

  no2FcTs = no2FcTs.merge(mapPoints);
  // Make a DOY chart.
  var chart = ui.Chart.feature
    .groups({
      features: no2FcTs.sort("year"),
      xProperty: "doy",
      yProperty: "p50",
      seriesProperty: "year",
    })
    .setChartType("ColumnChart")
    .setOptions({
      height: 245,
      curveType: "function",
      explorer: { axis: "vertical" },
      interpolateNulls: true,
      title: "Year-over-year",
      vAxis: {
        baseline: thisData.baseline,
        titleTextStyle: { italic: false, fontSize: 14, bold: true },
        title: thisData.unitsLabel,
        gridlines: { count: 0 },
      },
      hAxis: {
        titleTextStyle: { italic: false, fontSize: 14, bold: true },
        title: "Day-of-year",
        gridlines: { count: 4, color: "FFF" },
        ticks: [0, 100, 200, 300],
      },
      series: {
        0: {
          lineWidth: 0,
          pointSize: 0,
          visibleInLegend: false,
        },
        1: {
          color: "9ebcda",
          lineWidth: 1,
          pointsVisible: false,
        },
        2: {
          color: "8856a7",
          lineWidth: 1,
          pointsVisible: false,
        },
        3: {
          lineWidth: 1,
          color: "000",
          pointsVisible: false,
        },
      },
      legend: { position: "right" },
    });

  var fullTsChart = ui.Chart.feature
    .byFeature({
      features: no2FcTs.sort("system:time_start"),
      xProperty: "system:time_start",
      yProperties: ["p25", "p50", "p75"],
    })
    .setChartType("LineChart")
    .setSeriesNames(["p25", "Mean", "p75"])
    .setOptions({
      height: 245,
      curveType: "function",
      explorer: { axis: "vertical" },
      interpolateNulls: true,
      title: "Complete time series",
      vAxis: {
        baseline: thisData.baseline,
        titleTextStyle: { italic: false, fontSize: 14, bold: true },
        title: thisData.unitsLabel,
        gridlines: { count: 0 },
      },
      hAxis: {
        titleTextStyle: { italic: false, fontSize: 14, bold: true },
        title: "Date",
        gridlines: { color: "FFF" },
      },
      series: {
        0: {
          color: "B8B8B8",
          lineWidth: 0.7,
          pointsVisible: false,
          pointSize: 0.5,
          dataOpacity: 0.3,
          visibleInLegend: false,
        },
        1: {
          lineWidth: 1.3,
          color: "711F81",
          pointsVisible: false,
        },
        2: {
          color: "B8B8B8",
          lineWidth: 0.7,
          pointsVisible: false,
          pointSize: 0.5,
          dataOpacity: 0.3,
          visibleInLegend: true,
        },
        3: {
          color: "60811f",
          lineWidth: 0,
          pointsVisible: true,
          pointSize: 6,
        },
        4: {
          color: "81601f",
          lineWidth: 0,
          pointsVisible: true,
          pointSize: 6,
        },
      },
    });
    
    
    //TESTE
    
var startdate = ee.Date.fromYMD(2020,1,1);
var enddate = ee.Date.fromYMD(2022,11,1);
    
    var precipitationData = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
                    .select('precipitation')
                    .filterDate('2020-01-01', '2022-12-31')
                    .filterBounds(aoi);
                    
                    
var years = ee.List.sequence(2020, 2022);
var months = ee.List.sequence(1, 12);

var byMonthYear = ee.ImageCollection.fromImages(
  years.map(function(y) {
    return months.map(function (m) {
      return precipitationData
        .filter(ee.Filter.calendarRange(y, y, 'year'))
        .filter(ee.Filter.calendarRange(m, m, 'month'))
        .mean()
        .set('month', m).set('year', y);
  });
}).flatten());

var chartParam = {
 title: 'Monthly average Precipitation',
  hAxis: {title: 'Time (month)'},
  vAxis: {title: 'Average Precipitation (mm)'},
};

//Plot the chart
var chartPrecipitation = ui.Chart.image.seriesByRegion({
  imageCollection: byMonthYear,
  regions: aoi,
  reducer: ee.Reducer.mean(),
  scale: 500,
  xProperty: 'month',
  // seriesProperty: 'PROJECT'
}).setChartType("ColumnChart");
//Print chart to console
    chartPrecipitation.setOptions(chartParam)
    
    //FIM TESTE

  // tsChart.widgets().set(2, chart);
  tsChart.widgets().set(1, chartPrecipitation);
  setChart();
}

// #############################################################################
// ### EVENT HANDLERS ###
// #############################################################################
function clearRightGeom() {
  var nLayers = drawingToolsRight.layers().length();
  // bigMap.addLayer(bioma_amazonico, {}, "Amazonia");
  while (nLayers > 0) {
    var layer = drawingToolsRight.layers().get(0);
    drawingToolsRight.layers().remove(layer);
    nLayers = drawingToolsRight.layers().length();
  }
}

var removeLayer = function (name, whatMap, index12maps) {
  var mapToRemove;
  if (whatMap === "12maps") {
    mapToRemove = maps[index12maps];
  } else {
    mapToRemove = bigMap;
  }
  print(maps);
  var layers = mapToRemove.layers();
  // list of layers names
  var names = [];
  layers.forEach(function (lay) {
    var lay_name = lay.getName();
    names.push(lay_name);
  });
  // get index
  var index = names.indexOf(name);
  if (index > -1) {
    // if name in names
    var layer = layers.get(index);
    mapToRemove.remove(layer);
  } else {
    print("Layer " + name + " not found");
  }
};

function draw12mapsChart(aoi) {
  for (var i = 0; i < 12; i++) {
    removeLayer("Amazonia", "12maps", i);
  }

  updateMaps(true, aoi);
}

// Function to plot chart on drawing events.
function drawChart() {
  // Get the geometry.
  removeLayer("Layer 3", "big");
  removeLayer("Layer 1", "big");
  removeLayer("Layer 2", "big");
  aoi = drawingTools.layers().get(0).getEeObject();
  bigMap.centerObject(aoi, 6, null);
  bigMap.addLayer(aoi);
  removeLayer("Amazonia", "big");
  draw12mapsChart(aoi);

  clearRightGeom();
  drawingToolsRight.addLayer([aoi], null, "FFF");
  drawingToolsRight.layers().get(0).setLocked(true);
  // Set the aoi url parameter as the new geometry.
  ui.url.set("aoi", aoi.toGeoJSONString());
  // Set drawing mode back to null.
  drawingTools.setShape(null);
  aoi.area(1000).evaluate(function (area) {
    aoiArea = area;
    if (area > maxAoiArea) {
      print("Drawn geometry is too large.");
      tsChart.widgets().get(0).style().set({ shown: true });
      tsChart.widgets().get(1).style().set({ shown: false });
      tsChart.widgets().get(2).style().set({ shown: false });
      return;
    } else {
      tsChart.widgets().get(0).style().set({ shown: false });
      setChart();
      chartTimeSeries();
    }
  });
}

// #############################################################################
// ### DRAWING TOOLS SETUP ###
// #############################################################################

var chartStatus = ui.url.get("chart", "cont");
ui.url.set("chart", chartStatus);
var chartButtonLabel = "Show year-over-year chart";
if (chartStatus == "cont") {
  tsChart.widgets().get(1).style().set({ shown: true });
  tsChart.widgets().get(2).style().set({ shown: false });
} else {
  chartButtonLabel = "Show continuous chart";
  tsChart.widgets().get(1).style().set({ shown: false });
  tsChart.widgets().get(2).style().set({ shown: true });
}
var chartInfo = ui.Label({
  value: "Chart controller:",
  style: { backgroundColor: "CFE4D3", fontSize: "18px", fontWeight: "bold" },
});

var chartButton = ui.Button(chartButtonLabel, switchChart);
function switchChart() {
  if (chartStatus == "cont") {
    chartButton.setLabel("Show continuous chart");
    chartStatus = "yoy";
    ui.url.set("chart", "yoy");
    tsChart.widgets().get(1).style().set({ shown: false });
    tsChart.widgets().get(2).style().set({ shown: true });
  } else {
    chartButton.setLabel("Show year-over-year chart");
    chartStatus = "cont";
    ui.url.set("chart", "cont");
    tsChart.widgets().get(1).style().set({ shown: true });
    tsChart.widgets().get(2).style().set({ shown: false });
  }
}
function setChart() {
  if (chartStatus == "cont") {
    tsChart.widgets().get(1).style().set({ shown: true });
    tsChart.widgets().get(2).style().set({ shown: false });
  } else {
    tsChart.widgets().get(1).style().set({ shown: false });
    tsChart.widgets().get(2).style().set({ shown: true });
  }
}

// #############################################################################
// ### MAP LEGEND SETUP ###
// #############################################################################
// Creates a color bar thumbnail image for use in legend from the given color
// palette.
function makeColorBarParams(palette) {
  return {
    bbox: [0, 0, 1, 0.1],
    dimensions: "100x10",
    format: "png",
    min: 0,
    max: 1,
    palette: palette,
  };
}

function makeLegend() {
  // Create the color bar for the legend.
  var colorBar = ui.Thumbnail({
    image: ee.Image.pixelLonLat().select(0),
    params: makeColorBarParams(thisData.visParams.palette),
    style: {
      stretch: "horizontal",
      margin: "0px 8px",
      maxHeight: "20px",
      backgroundColor: "CFE4D3",
    },
  });

  // Create a panel with three numbers for the legend.
  var legendLabels = ui.Panel({
    widgets: [
      ui.Label(thisData.visParams.min, {
        margin: "4px 8px",
        fontSize: "12px",
        backgroundColor: "CFE4D3",
      }), //
      ui.Label(
        thisData.visParams.max / 2, //
        {
          margin: "4px 8px",
          textAlign: "center",
          stretch: "horizontal",
          fontSize: "12px",
          backgroundColor: "CFE4D3",
        }
      ),
      ui.Label(thisData.visParams.max, {
        margin: "4px 8px",
        fontSize: "12px",
        backgroundColor: "CFE4D3",
      }),
    ],
    layout: ui.Panel.Layout.flow("horizontal"),
    style: { backgroundColor: "CFE4D3" },
  });

  var legendTitle = ui.Label({
    value: thisData.legendLabel + " 10-day mean",
    style: { fontWeight: "bold", fontSize: "12px", backgroundColor: "CFE4D3" },
  });

  var legendPanel = ui.Panel([legendTitle, colorBar, legendLabels]);
  legendPanel.style().set({ backgroundColor: "CFE4D3" });
  legendPanel.style().set({ border: "1px dotted #333" });
  mapComparison.remove(mapComparison.widgets().get(6))
  mapComparison.widgets().set(legendIndex, legendPanel);
}
// Add the legend to the info panel
makeLegend();

//Define states
var statesToSelector = ["AC", "AM", "AP", "MA", "MT", "PA", "RO", "RR", "TO"];

function stateSelectorChangeHandler() {
  citySelectorHandler(stateSelector.getValue());
  lblCity.style().set("shown", true);
  pnlCitySelector.style().set("shown", true);
  cityStateButton.setLabel("Run by state");
}

var stateSelector = ui.Select({
  items: statesToSelector,
  onChange: stateSelectorChangeHandler,
  style: { width: "113px" },
});

var lblCity = ui.Label({
  value: "3. Select city.",
  style: { fontWeight: "bold", fontSize: "18px", shown: false },
});

//filtra o municipio pelo numero dele
// var ttt = (cidades_amazonia.filter(ee.Filter.eq('CD_MUN','1100015')))
// var temp2 = ttt.geometry()

function changeStateHandler() {
  var selectedState = stateSelector.getValue();
  if (selectedState === null) {
    alert("Select a state!");
    return;
  }
  var stateSelectedReturn = estados_amazonia.filter(
    ee.Filter.eq("SIGLA", selectedState.toString())
  ); //Find state
  cityOrState = stateSelectedReturn.geometry(); //Get state geometry

  updateMaps("state", cityOrState);
}

function updateMapsWithoutSelectedArea() {
  updateMaps(null, "");
}

var cityOrState;
function chageCityHandler() {
  var cityNumber = citySelector.getValue();
  if (cityNumber === null) {
    alert("Select a city!");
    return;
  }
  var citySelectedReturn = cidades_amazonia.filter(
    ee.Filter.eq("CD_MUN", cityNumber.toString())
  ); //Find city
  cityOrState = citySelectedReturn.geometry(); //Get city geometry
  updateMaps("city", cityOrState);
}

var citySelector = ui.Select({ onChange: citySelectorOnChange });
citySelector.style().set("shown", true);
citySelector.style().set("width", "113px");

var pnlCitySelector = ui.Panel({
  widgets: [citySelector, btnCleanCity],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal", shown: false },
});

var pnlStateSelector = ui.Panel({
  widgets: [stateSelector, btnCleanState],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
});

function citySelectorHandler(state) {
  if (state === undefined) {
    return;
  } else {
    var cities = [];
    dataStatesAndCities.map(function (e) {
      if (e.SIGLA == state) {
        cities.push({ label: e.NM_MUN, value: e.CD_MUN });
      }
    });
    citySelector.items().reset(cities);
  }
}

//Define city or state button
var cityStateButton = ui.Button({
  label: "Run",
  onClick: checkWhatToShowHandler,
  style: { width: "50%", backgroundColor: "#ffffff" },
});
var resetAllButton = ui.Button({
  label: "Reset",
  onClick: resetAllHandler,
  style: { width: "30%", backgroundColor: "#ffffff" },
});

//reset all function
function resetAllHandler() {
  cleanCity();
  cleanState();
  updateMaps(false, "");

  bigMap.addLayer(bioma_amazonico, {}, "Amazonia");
  bigMap.centerObject(bioma_amazonico);
}

//Define Run panel
var pnlRun = ui.Panel({
  widgets: [cityStateButton, resetAllButton],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
});

//Define color scale
// eslint-disable-next-line no-unused-vars
var pnlColorScale = ui.Panel({
  widgets: [
    ui.Label({ value: "4. Adjust palette stretch:" }),
    stretchPanel,
    ui.Label("[legend]"),
    ui.Label("[swipeSwitch]"),
  ],
});

//Define button function
function checkWhatToShowHandler() {
  if (citySelector.getValue() !== null) {
    chageCityHandler();
  } else if (stateSelector.getValue() !== null) {
    changeStateHandler();
  } else {
    updateMapsWithoutSelectedArea();
  }
}

// Define symbols for the labels.
var symbol = {
  rectangle: "▮",
  polygon: "▲",
  point: "●",
};
// Set up a ui.Panel to hold instructions and the geometry drawing buttons.
var timeSeries = ui.Panel({
  widgets: [
    ui.Label({
      value: "Regional Time Series",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "CFE4D3",
      },
    }),
    ui.Label({
      value: "1. Select a drawing mode:",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        backgroundColor: "CFE4D3",
      },
    }),
    ui.Panel(
      [
        ui.Button({
          label: symbol.rectangle + " Rectangle",
          onClick: drawRectangle,
          style: {
            stretch: "horizontal",
            margin: "3px",
            backgroundColor: "#ffffff",
          },
        }),
        ui.Button({
          label: symbol.polygon + " Polygon",
          onClick: drawPolygon,
          style: {
            stretch: "horizontal",
            margin: "3px",
            backgroundColor: "#ffffff",
          },
        }),
        ui.Button({
          label: symbol.point + " Point",
          onClick: drawPoint,
          style: {
            stretch: "horizontal",
            margin: "3px",
            backgroundColor: "#ffffff",
          },
        }),
      ],
      ui.Panel.Layout.flow("horizontal"),
      { margin: "10px", backgroundColor: "CFE4D3" }
    ),
    ui.Label({
      value: "2. Select state.",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        backgroundColor: "CFE4D3",
      },
    }),
    pnlStateSelector,
    lblCity,
    pnlCitySelector,
  ],
  style: { position: "bottom-left" },
  layout: null,
});

var panelBreak50 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});
var panelBreak51 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});

infoPanel.add(panelBreak50);
infoPanel.add(timeSeries);
infoPanel.add(panelBreak51);
infoPanel.add(pnlRun);
// Define a function to clear the geometry from the layer when a
// drawing mode button is clicked.
function clearGeometry() {
  var layers = drawingTools.layers();
  layers.get(0).geometries().remove(layers.get(0).geometries().get(0));
}
// Define function for dealing with a click on the rectangle button.
function drawRectangle() {
  clearGeometry();
  clearRightGeom();
  drawingTools.setShape("rectangle");
  drawingTools.draw();
}
// Define function for dealing with a click on the polygon button.
function drawPolygon() {
  clearGeometry();
  clearRightGeom();
  drawingTools.setShape("polygon");
  drawingTools.draw();
}
// Define function for dealing with a click on the point button.
function drawPoint() {
  clearGeometry();
  clearRightGeom();
  drawingTools.setShape("point");
  drawingTools.draw();
}
// Use debounce to call the function at most every 500 milliseconds.
drawingTools.onEdit(ui.util.debounce(drawChart, 500));
drawingTools.onDraw(ui.util.debounce(drawChart, 500));
var chartNotes = ui.Label({
  value: "Chart notes:",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px", fontWeight: "bold" },
});
var chartNote1 = ui.Label({
  value: "• Lines represent 10-day statistics around 5-day increments.",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px" },
});
var chartNote2 = ui.Label({
  value:
    "• Y-axis is interactive: scroll to zoom, left click + drag to pan, reset with right click.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var chartNote3 = ui.Label({
  value:
    "• Scale for area reduction varies from 1 km to 10 km. 1 km for area <= 1e5 km2, 5 km for area > 1e5 km2, and 10 km for area > 10e5 km2. Maximum area is 8e5 km2.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var mapNotes = ui.Label({
  value: "Map notes:",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px", fontWeight: "bold" },
});
var mapNote1 = ui.Label({
  value:
    '• Light grey regions are masked pixels (no data) typically resulting from cloudy observations. Adjust cloud masking with the  "max cloud allowance slider " above.',
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var mapNote2 = ui.Label({
  value: "• Map data is the 10-day center mean around the target date.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var urlNotes = ui.Label({
  value: "URL notes:",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px", fontWeight: "bold" },
});
var urlNote = ui.Label({
  value:
    "• URL parameters are used to save the state of the App. Copy the entire URL and send to others to share what you are seeing.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var layoutNotes = ui.Label({
  value: "Layout notes:",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px", fontWeight: "bold" },
});
var layoutNote1 = ui.Label({
  value: "• Panel sizes are adjustable - grab handles and drag.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
var layoutNote2 = ui.Label({
  value:
    "• Make all app elements larger or smaller using your browser zoom (ctrl or command with + or -).",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});
urlNote = ui.Label({
  value:
    "• URL parameters are used to save the state of the App. Copy the entire URL and send to others to share what you are seeing.",
  style: { fontSize: "12px", margin: "1px 8px 1px 8px" },
});

var creditNotes = ui.Label({
  value: "Credits:",
  style: { fontSize: "12px", margin: "8px 8px 1px 8px", fontWeight: "bold" },
});
var creditsLabel = ui.Panel(
  [
    ui.Label("• Data source: ", {
      fontSize: "12px",
      margin: "0px 8px 8px 8px",
    }),
    ui.Label({
      value: "Sentinel-5P Data (European Commission/ESA/Copernicus).",
      style: { fontSize: "12px", margin: "0px 8px 8px 0px" },
      targetUrl: "http://www.tropomi.eu/data-products/level-2-products",
    }),
  ],
  ui.Panel.Layout.flow("horizontal"),
  { margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" }
);

var panelBreak100 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});
var panelBreak101 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});
var notesShow = false;
function notesButtonHandler() {
  if (notesShow) {
    notesShow = false;
    notesPanel.style().set("shown", false);
    notesButton.setLabel("See notes");
  } else {
    notesShow = true;
    notesPanel.style().set("shown", true);
    notesButton.setLabel("Hide notes");
  }
}
var notesButton = ui.Button({
  label: "See notes",
  onClick: notesButtonHandler,
  style: { backgroundColor: "#ffffff" },
});
var notesPanel = ui.Panel({
  widgets: [
    chartNotes,
    chartNote1,
    chartNote2,
    chartNote3,
    mapNotes,
    mapNote1,
    mapNote2,
    urlNotes,
    urlNote,
    layoutNotes,
    layoutNote1,
    layoutNote2,
    creditNotes,
    creditsLabel,
  ],
  style: { shown: false },
});
infoPanel.add(panelBreak100);
infoPanel.add(chartInfo);
infoPanel.add(chartButton);
infoPanel.add(panelBreak101);
infoPanel.add(notesButton);
infoPanel.add(notesPanel);

// #############################################################################
// ### CUSTOM MAP STYLE ###
// #############################################################################
function darkMap() {
  return [
    {
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#3e3e3e ",
        },
      ],
    },
    {
      "elementType ": "labels.icon ",
      "stylers ": [
        {
          "visibility ": "off ",
        },
      ],
    },
    {
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#757575 ",
        },
      ],
    },
    {
      "elementType ": "labels.text.stroke ",
      "stylers ": [
        {
          "color ": "#3e3e3e ",
        },
      ],
    },
    {
      "featureType ": "administrative ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#757575 ",
        },
      ],
    },
    {
      "featureType ": "administrative.country ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#9e9e9e ",
        },
      ],
    },
    {
      "featureType ": "administrative.land_parcel ",
      "stylers ": [
        {
          "visibility ": "off ",
        },
      ],
    },
    {
      "featureType ": "administrative.locality ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#bdbdbd ",
        },
      ],
    },
    {
      "featureType ": "poi ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#757575 ",
        },
      ],
    },
    {
      "featureType ": "poi.park ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#181818 ",
        },
      ],
    },
    {
      "featureType ": "poi.park ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#616161 ",
        },
      ],
    },
    {
      "featureType ": "poi.park ",
      "elementType ": "labels.text.stroke ",
      "stylers ": [
        {
          "color ": "#1b1b1b ",
        },
      ],
    },
    {
      "featureType ": "road ",
      "elementType ": "geometry.fill ",
      "stylers ": [
        {
          "color ": "#2c2c2c ",
        },
      ],
    },
    {
      "featureType ": "road ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#8a8a8a ",
        },
      ],
    },
    {
      "featureType ": "road.arterial ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#373737 ",
        },
      ],
    },
    {
      "featureType ": "road.highway ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#3c3c3c ",
        },
      ],
    },
    {
      "featureType ": "road.highway.controlled_access ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#4e4e4e ",
        },
      ],
    },
    {
      "featureType ": "road.local ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#616161 ",
        },
      ],
    },
    {
      "featureType ": "transit ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#757575 ",
        },
      ],
    },
    {
      "featureType ": "water ",
      "elementType ": "geometry ",
      "stylers ": [
        {
          "color ": "#000000 ",
        },
      ],
    },
    {
      "featureType ": "water ",
      "elementType ": "labels.text.fill ",
      "stylers ": [
        {
          "color ": "#3d3d3d ",
        },
      ],
    },
  ];
}

infoPanel.style().set({ backgroundColor: "CFE4D3" });
// panelBreak100.style().set({backgroundColor: "CFE4D3"})
notesButton.style().set({ backgroundColor: "CFE4D3" });
intro.style().set({ backgroundColor: "CFE4D3" });
// panelBreak25.style().set({backgroundColor: "CFE4D3"})
mapComparison.style().set({ backgroundColor: "CFE4D3" });
// panelBreak50.style().set({backgroundColor: "CFE4D3"})
timeSeries.style().set({ backgroundColor: "CFE4D3" });
// panelBreak51.style().set({backgroundColor: "CFE4D3"})
pnlRun.style().set({ backgroundColor: "CFE4D3" });
leftDatePanel.style().set({ backgroundColor: "CFE4D3" });
pnlCitySelector.style().set({ backgroundColor: "CFE4D3" });
pnlStateSelector.style().set({ backgroundColor: "CFE4D3" });
dataSelectPanel.style().set({ backgroundColor: "CFE4D3" });
lblCity.style().set({ backgroundColor: "CFE4D3" });