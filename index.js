var bioma_amazonico = ee.FeatureCollection("users/joaobianco/amazonia");
var cidades_amazonia = ee.FeatureCollection("users/joaobianco/cidades_amazonia");


//filtra o municipio pelo numero dele
// var ttt = (cidades_amazonia.filter(ee.Filter.eq('CD_MUN','1100015')))
// var temp2 = ttt.geometry()

var dataStatesAndCities =  [
    {
      "SIGLA": "RO",
      "CD_MUN": 1100015,
      "NM_MUN": "Alta Floresta D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100023,
      "NM_MUN": "Ariquemes"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100031,
      "NM_MUN": "Cabixi"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100049,
      "NM_MUN": "Cacoal"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100056,
      "NM_MUN": "Cerejeiras"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100064,
      "NM_MUN": "Colorado do Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100072,
      "NM_MUN": "Corumbiara"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100080,
      "NM_MUN": "Costa Marques"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100098,
      "NM_MUN": "Espigão D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100106,
      "NM_MUN": "Guajará-Mirim"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100114,
      "NM_MUN": "Jaru"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100122,
      "NM_MUN": "Ji-Paraná"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100130,
      "NM_MUN": "Machadinho D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100148,
      "NM_MUN": "Nova Brasilândia D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100155,
      "NM_MUN": "Ouro Preto do Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100189,
      "NM_MUN": "Pimenta Bueno"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100205,
      "NM_MUN": "Porto Velho"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100254,
      "NM_MUN": "Presidente Médici"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100262,
      "NM_MUN": "Rio Crespo"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100288,
      "NM_MUN": "Rolim de Moura"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100296,
      "NM_MUN": "Santa Luzia D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100304,
      "NM_MUN": "Vilhena"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100320,
      "NM_MUN": "São Miguel do Guaporé"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100338,
      "NM_MUN": "Nova Mamoré"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100346,
      "NM_MUN": "Alvorada D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100379,
      "NM_MUN": "Alto Alegre dos Parecis"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100403,
      "NM_MUN": "Alto Paraíso"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100452,
      "NM_MUN": "Buritis"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100502,
      "NM_MUN": "Novo Horizonte do Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100601,
      "NM_MUN": "Cacaulândia"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100700,
      "NM_MUN": "Campo Novo de Rondônia"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100809,
      "NM_MUN": "Candeias do Jamari"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100908,
      "NM_MUN": "Castanheiras"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100924,
      "NM_MUN": "Chupinguaia"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1100940,
      "NM_MUN": "Cujubim"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101005,
      "NM_MUN": "Governador Jorge Teixeira"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101104,
      "NM_MUN": "Itapuã do Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101203,
      "NM_MUN": "Ministro Andreazza"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101302,
      "NM_MUN": "Mirante da Serra"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101401,
      "NM_MUN": "Monte Negro"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101435,
      "NM_MUN": "Nova União"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101450,
      "NM_MUN": "Parecis"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101468,
      "NM_MUN": "Pimenteiras do Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101476,
      "NM_MUN": "Primavera de Rondônia"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101484,
      "NM_MUN": "São Felipe D'Oeste"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101492,
      "NM_MUN": "São Francisco do Guaporé"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101500,
      "NM_MUN": "Seringueiras"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101559,
      "NM_MUN": "Teixeirópolis"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101609,
      "NM_MUN": "Theobroma"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101708,
      "NM_MUN": "Urupá"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101757,
      "NM_MUN": "Vale do Anari"
    },
    {
      "SIGLA": "RO",
      "CD_MUN": 1101807,
      "NM_MUN": "Vale do Paraíso"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200013,
      "NM_MUN": "Acrelândia"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200054,
      "NM_MUN": "Assis Brasil"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200104,
      "NM_MUN": "Brasiléia"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200138,
      "NM_MUN": "Bujari"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200179,
      "NM_MUN": "Capixaba"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200203,
      "NM_MUN": "Cruzeiro do Sul"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200252,
      "NM_MUN": "Epitaciolândia"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200302,
      "NM_MUN": "Feijó"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200328,
      "NM_MUN": "Jordão"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200336,
      "NM_MUN": "Mâncio Lima"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200344,
      "NM_MUN": "Manoel Urbano"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200351,
      "NM_MUN": "Marechal Thaumaturgo"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200385,
      "NM_MUN": "Plácido de Castro"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200393,
      "NM_MUN": "Porto Walter"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200401,
      "NM_MUN": "Rio Branco"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200427,
      "NM_MUN": "Rodrigues Alves"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200435,
      "NM_MUN": "Santa Rosa do Purus"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200450,
      "NM_MUN": "Senador Guiomard"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200500,
      "NM_MUN": "Sena Madureira"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200609,
      "NM_MUN": "Tarauacá"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200708,
      "NM_MUN": "Xapuri"
    },
    {
      "SIGLA": "AC",
      "CD_MUN": 1200807,
      "NM_MUN": "Porto Acre"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300029,
      "NM_MUN": "Alvarães"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300060,
      "NM_MUN": "Amaturá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300086,
      "NM_MUN": "Anamã"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300102,
      "NM_MUN": "Anori"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300144,
      "NM_MUN": "Apuí"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300201,
      "NM_MUN": "Atalaia do Norte"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300300,
      "NM_MUN": "Autazes"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300409,
      "NM_MUN": "Barcelos"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300508,
      "NM_MUN": "Barreirinha"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300607,
      "NM_MUN": "Benjamin Constant"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300631,
      "NM_MUN": "Beruri"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300680,
      "NM_MUN": "Boa Vista do Ramos"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300706,
      "NM_MUN": "Boca do Acre"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300805,
      "NM_MUN": "Borba"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300839,
      "NM_MUN": "Caapiranga"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1300904,
      "NM_MUN": "Canutama"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301001,
      "NM_MUN": "Carauari"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301100,
      "NM_MUN": "Careiro"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301159,
      "NM_MUN": "Careiro da Várzea"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301209,
      "NM_MUN": "Coari"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301308,
      "NM_MUN": "Codajás"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301407,
      "NM_MUN": "Eirunepé"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301506,
      "NM_MUN": "Envira"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301605,
      "NM_MUN": "Fonte Boa"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301654,
      "NM_MUN": "Guajará"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301704,
      "NM_MUN": "Humaitá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301803,
      "NM_MUN": "Ipixuna"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301852,
      "NM_MUN": "Iranduba"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301902,
      "NM_MUN": "Itacoatiara"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1301951,
      "NM_MUN": "Itamarati"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302009,
      "NM_MUN": "Itapiranga"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302108,
      "NM_MUN": "Japurá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302207,
      "NM_MUN": "Juruá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302306,
      "NM_MUN": "Jutaí"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302405,
      "NM_MUN": "Lábrea"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302504,
      "NM_MUN": "Manacapuru"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302553,
      "NM_MUN": "Manaquiri"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302603,
      "NM_MUN": "Manaus"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302702,
      "NM_MUN": "Manicoré"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302801,
      "NM_MUN": "Maraã"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1302900,
      "NM_MUN": "Maués"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303007,
      "NM_MUN": "Nhamundá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303106,
      "NM_MUN": "Nova Olinda do Norte"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303205,
      "NM_MUN": "Novo Airão"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303304,
      "NM_MUN": "Novo Aripuanã"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303403,
      "NM_MUN": "Parintins"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303502,
      "NM_MUN": "Pauini"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303536,
      "NM_MUN": "Presidente Figueiredo"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303569,
      "NM_MUN": "Rio Preto da Eva"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303601,
      "NM_MUN": "Santa Isabel do Rio Negro"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303700,
      "NM_MUN": "Santo Antônio do Içá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303809,
      "NM_MUN": "São Gabriel da Cachoeira"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303908,
      "NM_MUN": "São Paulo de Olivença"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1303957,
      "NM_MUN": "São Sebastião do Uatumã"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304005,
      "NM_MUN": "Silves"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304062,
      "NM_MUN": "Tabatinga"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304104,
      "NM_MUN": "Tapauá"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304203,
      "NM_MUN": "Tefé"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304237,
      "NM_MUN": "Tonantins"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304260,
      "NM_MUN": "Uarini"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304302,
      "NM_MUN": "Urucará"
    },
    {
      "SIGLA": "AM",
      "CD_MUN": 1304401,
      "NM_MUN": "Urucurituba"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400027,
      "NM_MUN": "Amajari"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400050,
      "NM_MUN": "Alto Alegre"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400100,
      "NM_MUN": "Boa Vista"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400159,
      "NM_MUN": "Bonfim"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400175,
      "NM_MUN": "Cantá"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400209,
      "NM_MUN": "Caracaraí"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400233,
      "NM_MUN": "Caroebe"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400282,
      "NM_MUN": "Iracema"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400308,
      "NM_MUN": "Mucajaí"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400407,
      "NM_MUN": "Normandia"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400456,
      "NM_MUN": "Pacaraima"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400472,
      "NM_MUN": "Rorainópolis"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400506,
      "NM_MUN": "São João da Baliza"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400605,
      "NM_MUN": "São Luiz"
    },
    {
      "SIGLA": "RR",
      "CD_MUN": 1400704,
      "NM_MUN": "Uiramutã"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500107,
      "NM_MUN": "Abaetetuba"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500131,
      "NM_MUN": "Abel Figueiredo"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500206,
      "NM_MUN": "Acará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500305,
      "NM_MUN": "Afuá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500347,
      "NM_MUN": "Água Azul do Norte"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500404,
      "NM_MUN": "Alenquer"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500503,
      "NM_MUN": "Almeirim"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500602,
      "NM_MUN": "Altamira"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500701,
      "NM_MUN": "Anajás"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500800,
      "NM_MUN": "Ananindeua"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500859,
      "NM_MUN": "Anapu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500909,
      "NM_MUN": "Augusto Corrêa"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1500958,
      "NM_MUN": "Aurora do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501006,
      "NM_MUN": "Aveiro"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501105,
      "NM_MUN": "Bagre"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501204,
      "NM_MUN": "Baião"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501253,
      "NM_MUN": "Bannach"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501303,
      "NM_MUN": "Barcarena"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501402,
      "NM_MUN": "Belém"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501451,
      "NM_MUN": "Belterra"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501501,
      "NM_MUN": "Benevides"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501576,
      "NM_MUN": "Bom Jesus do Tocantins"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501600,
      "NM_MUN": "Bonito"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501709,
      "NM_MUN": "Bragança"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501725,
      "NM_MUN": "Brasil Novo"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501758,
      "NM_MUN": "Brejo Grande do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501782,
      "NM_MUN": "Breu Branco"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501808,
      "NM_MUN": "Breves"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501907,
      "NM_MUN": "Bujaru"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1501956,
      "NM_MUN": "Cachoeira do Piriá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502004,
      "NM_MUN": "Cachoeira do Arari"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502103,
      "NM_MUN": "Cametá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502152,
      "NM_MUN": "Canaã dos Carajás"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502202,
      "NM_MUN": "Capanema"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502301,
      "NM_MUN": "Capitão Poço"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502400,
      "NM_MUN": "Castanhal"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502509,
      "NM_MUN": "Chaves"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502608,
      "NM_MUN": "Colares"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502707,
      "NM_MUN": "Conceição do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502756,
      "NM_MUN": "Concórdia do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502764,
      "NM_MUN": "Cumaru do Norte"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502772,
      "NM_MUN": "Curionópolis"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502806,
      "NM_MUN": "Curralinho"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502855,
      "NM_MUN": "Curuá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502905,
      "NM_MUN": "Curuçá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502939,
      "NM_MUN": "Dom Eliseu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1502954,
      "NM_MUN": "Eldorado do Carajás"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503002,
      "NM_MUN": "Faro"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503044,
      "NM_MUN": "Floresta do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503077,
      "NM_MUN": "Garrafão do Norte"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503093,
      "NM_MUN": "Goianésia do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503101,
      "NM_MUN": "Gurupá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503200,
      "NM_MUN": "Igarapé-Açu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503309,
      "NM_MUN": "Igarapé-Miri"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503408,
      "NM_MUN": "Inhangapi"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503457,
      "NM_MUN": "Ipixuna do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503507,
      "NM_MUN": "Irituia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503606,
      "NM_MUN": "Itaituba"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503705,
      "NM_MUN": "Itupiranga"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503754,
      "NM_MUN": "Jacareacanga"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503804,
      "NM_MUN": "Jacundá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1503903,
      "NM_MUN": "Juruti"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504000,
      "NM_MUN": "Limoeiro do Ajuru"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504059,
      "NM_MUN": "Mãe do Rio"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504109,
      "NM_MUN": "Magalhães Barata"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504208,
      "NM_MUN": "Marabá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504307,
      "NM_MUN": "Maracanã"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504406,
      "NM_MUN": "Marapanim"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504422,
      "NM_MUN": "Marituba"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504455,
      "NM_MUN": "Medicilândia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504505,
      "NM_MUN": "Melgaço"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504604,
      "NM_MUN": "Mocajuba"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504703,
      "NM_MUN": "Moju"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504752,
      "NM_MUN": "Mojuí dos Campos"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504802,
      "NM_MUN": "Monte Alegre"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504901,
      "NM_MUN": "Muaná"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504950,
      "NM_MUN": "Nova Esperança do Piriá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1504976,
      "NM_MUN": "Nova Ipixuna"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505007,
      "NM_MUN": "Nova Timboteua"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505031,
      "NM_MUN": "Novo Progresso"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505064,
      "NM_MUN": "Novo Repartimento"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505106,
      "NM_MUN": "Óbidos"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505205,
      "NM_MUN": "Oeiras do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505304,
      "NM_MUN": "Oriximiná"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505403,
      "NM_MUN": "Ourém"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505437,
      "NM_MUN": "Ourilândia do Norte"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505486,
      "NM_MUN": "Pacajá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505494,
      "NM_MUN": "Palestina do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505502,
      "NM_MUN": "Paragominas"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505536,
      "NM_MUN": "Parauapebas"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505551,
      "NM_MUN": "Pau D'Arco"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505601,
      "NM_MUN": "Peixe-Boi"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505635,
      "NM_MUN": "Piçarra"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505650,
      "NM_MUN": "Placas"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505700,
      "NM_MUN": "Ponta de Pedras"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505809,
      "NM_MUN": "Portel"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1505908,
      "NM_MUN": "Porto de Moz"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506005,
      "NM_MUN": "Prainha"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506104,
      "NM_MUN": "Primavera"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506112,
      "NM_MUN": "Quatipuru"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506138,
      "NM_MUN": "Redenção"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506161,
      "NM_MUN": "Rio Maria"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506187,
      "NM_MUN": "Rondon do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506195,
      "NM_MUN": "Rurópolis"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506203,
      "NM_MUN": "Salinópolis"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506302,
      "NM_MUN": "Salvaterra"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506351,
      "NM_MUN": "Santa Bárbara do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506401,
      "NM_MUN": "Santa Cruz do Arari"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506500,
      "NM_MUN": "Santa Izabel do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506559,
      "NM_MUN": "Santa Luzia do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506583,
      "NM_MUN": "Santa Maria das Barreiras"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506609,
      "NM_MUN": "Santa Maria do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506708,
      "NM_MUN": "Santana do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506807,
      "NM_MUN": "Santarém"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1506906,
      "NM_MUN": "Santarém Novo"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507003,
      "NM_MUN": "Santo Antônio do Tauá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507102,
      "NM_MUN": "São Caetano de Odivelas"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507151,
      "NM_MUN": "São Domingos do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507201,
      "NM_MUN": "São Domingos do Capim"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507300,
      "NM_MUN": "São Félix do Xingu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507409,
      "NM_MUN": "São Francisco do Pará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507458,
      "NM_MUN": "São Geraldo do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507466,
      "NM_MUN": "São João da Ponta"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507474,
      "NM_MUN": "São João de Pirabas"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507508,
      "NM_MUN": "São João do Araguaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507607,
      "NM_MUN": "São Miguel do Guamá"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507706,
      "NM_MUN": "São Sebastião da Boa Vista"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507755,
      "NM_MUN": "Sapucaia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507805,
      "NM_MUN": "Senador José Porfírio"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507904,
      "NM_MUN": "Soure"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507953,
      "NM_MUN": "Tailândia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507961,
      "NM_MUN": "Terra Alta"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1507979,
      "NM_MUN": "Terra Santa"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508001,
      "NM_MUN": "Tomé-Açu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508035,
      "NM_MUN": "Tracuateua"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508050,
      "NM_MUN": "Trairão"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508084,
      "NM_MUN": "Tucumã"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508100,
      "NM_MUN": "Tucuruí"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508126,
      "NM_MUN": "Ulianópolis"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508159,
      "NM_MUN": "Uruará"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508209,
      "NM_MUN": "Vigia"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508308,
      "NM_MUN": "Viseu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508357,
      "NM_MUN": "Vitória do Xingu"
    },
    {
      "SIGLA": "PA",
      "CD_MUN": 1508407,
      "NM_MUN": "Xinguara"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600055,
      "NM_MUN": "Serra do Navio"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600105,
      "NM_MUN": "Amapá"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600154,
      "NM_MUN": "Pedra Branca do Amapari"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600204,
      "NM_MUN": "Calçoene"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600212,
      "NM_MUN": "Cutias"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600238,
      "NM_MUN": "Ferreira Gomes"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600253,
      "NM_MUN": "Itaubal"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600279,
      "NM_MUN": "Laranjal do Jari"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600303,
      "NM_MUN": "Macapá"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600402,
      "NM_MUN": "Mazagão"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600501,
      "NM_MUN": "Oiapoque"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600535,
      "NM_MUN": "Porto Grande"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600550,
      "NM_MUN": "Pracuúba"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600600,
      "NM_MUN": "Santana"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600709,
      "NM_MUN": "Tartarugalzinho"
    },
    {
      "SIGLA": "AP",
      "CD_MUN": 1600808,
      "NM_MUN": "Vitória do Jari"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1700251,
      "NM_MUN": "Abreulândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1700301,
      "NM_MUN": "Aguiarnópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1700350,
      "NM_MUN": "Aliança do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1700400,
      "NM_MUN": "Almas"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1700707,
      "NM_MUN": "Alvorada"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1701002,
      "NM_MUN": "Ananás"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1701051,
      "NM_MUN": "Angico"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1701101,
      "NM_MUN": "Aparecida do Rio Negro"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1701309,
      "NM_MUN": "Aragominas"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1701903,
      "NM_MUN": "Araguacema"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702000,
      "NM_MUN": "Araguaçu"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702109,
      "NM_MUN": "Araguaína"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702158,
      "NM_MUN": "Araguanã"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702208,
      "NM_MUN": "Araguatins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702307,
      "NM_MUN": "Arapoema"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702406,
      "NM_MUN": "Arraias"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702554,
      "NM_MUN": "Augustinópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702703,
      "NM_MUN": "Aurora do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1702901,
      "NM_MUN": "Axixá do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703008,
      "NM_MUN": "Babaçulândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703057,
      "NM_MUN": "Bandeirantes do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703073,
      "NM_MUN": "Barra do Ouro"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703107,
      "NM_MUN": "Barrolândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703206,
      "NM_MUN": "Bernardo Sayão"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703305,
      "NM_MUN": "Bom Jesus do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703602,
      "NM_MUN": "Brasilândia do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703701,
      "NM_MUN": "Brejinho de Nazaré"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703800,
      "NM_MUN": "Buriti do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703826,
      "NM_MUN": "Cachoeirinha"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703842,
      "NM_MUN": "Campos Lindos"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703867,
      "NM_MUN": "Cariri do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703883,
      "NM_MUN": "Carmolândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703891,
      "NM_MUN": "Carrasco Bonito"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1703909,
      "NM_MUN": "Caseara"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1704105,
      "NM_MUN": "Centenário"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1704600,
      "NM_MUN": "Chapada de Areia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1705102,
      "NM_MUN": "Chapada da Natividade"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1705508,
      "NM_MUN": "Colinas do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1705557,
      "NM_MUN": "Combinado"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1705607,
      "NM_MUN": "Conceição do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1706001,
      "NM_MUN": "Couto Magalhães"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1706100,
      "NM_MUN": "Cristalândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1706258,
      "NM_MUN": "Crixás do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1706506,
      "NM_MUN": "Darcinópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707009,
      "NM_MUN": "Dianópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707108,
      "NM_MUN": "Divinópolis do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707207,
      "NM_MUN": "Dois Irmãos do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707306,
      "NM_MUN": "Dueré"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707405,
      "NM_MUN": "Esperantina"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707553,
      "NM_MUN": "Fátima"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707652,
      "NM_MUN": "Figueirópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1707702,
      "NM_MUN": "Filadélfia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1708205,
      "NM_MUN": "Formoso do Araguaia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1708254,
      "NM_MUN": "Tabocão"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1708304,
      "NM_MUN": "Goianorte"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1709005,
      "NM_MUN": "Goiatins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1709302,
      "NM_MUN": "Guaraí"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1709500,
      "NM_MUN": "Gurupi"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1709807,
      "NM_MUN": "Ipueiras"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1710508,
      "NM_MUN": "Itacajá"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1710706,
      "NM_MUN": "Itaguatins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1710904,
      "NM_MUN": "Itapiratins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1711100,
      "NM_MUN": "Itaporã do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1711506,
      "NM_MUN": "Jaú do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1711803,
      "NM_MUN": "Juarina"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1711902,
      "NM_MUN": "Lagoa da Confusão"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1711951,
      "NM_MUN": "Lagoa do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712009,
      "NM_MUN": "Lajeado"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712157,
      "NM_MUN": "Lavandeira"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712405,
      "NM_MUN": "Lizarda"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712454,
      "NM_MUN": "Luzinópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712504,
      "NM_MUN": "Marianópolis do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712702,
      "NM_MUN": "Mateiros"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1712801,
      "NM_MUN": "Maurilândia do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713205,
      "NM_MUN": "Miracema do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713304,
      "NM_MUN": "Miranorte"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713601,
      "NM_MUN": "Monte do Carmo"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713700,
      "NM_MUN": "Monte Santo do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713809,
      "NM_MUN": "Palmeiras do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1713957,
      "NM_MUN": "Muricilândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1714203,
      "NM_MUN": "Natividade"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1714302,
      "NM_MUN": "Nazaré"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1714880,
      "NM_MUN": "Nova Olinda"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715002,
      "NM_MUN": "Nova Rosalândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715101,
      "NM_MUN": "Novo Acordo"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715150,
      "NM_MUN": "Novo Alegre"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715259,
      "NM_MUN": "Novo Jardim"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715507,
      "NM_MUN": "Oliveira de Fátima"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715705,
      "NM_MUN": "Palmeirante"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1715754,
      "NM_MUN": "Palmeirópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716109,
      "NM_MUN": "Paraíso do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716208,
      "NM_MUN": "Paranã"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716307,
      "NM_MUN": "Pau D'Arco"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716505,
      "NM_MUN": "Pedro Afonso"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716604,
      "NM_MUN": "Peixe"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716653,
      "NM_MUN": "Pequizeiro"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1716703,
      "NM_MUN": "Colméia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1717008,
      "NM_MUN": "Pindorama do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1717206,
      "NM_MUN": "Piraquê"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1717503,
      "NM_MUN": "Pium"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1717800,
      "NM_MUN": "Ponte Alta do Bom Jesus"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1717909,
      "NM_MUN": "Ponte Alta do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718006,
      "NM_MUN": "Porto Alegre do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718204,
      "NM_MUN": "Porto Nacional"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718303,
      "NM_MUN": "Praia Norte"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718402,
      "NM_MUN": "Presidente Kennedy"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718451,
      "NM_MUN": "Pugmil"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718501,
      "NM_MUN": "Recursolândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718550,
      "NM_MUN": "Riachinho"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718659,
      "NM_MUN": "Rio da Conceição"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718709,
      "NM_MUN": "Rio dos Bois"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718758,
      "NM_MUN": "Rio Sono"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718808,
      "NM_MUN": "Sampaio"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718840,
      "NM_MUN": "Sandolândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718865,
      "NM_MUN": "Santa Fé do Araguaia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718881,
      "NM_MUN": "Santa Maria do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718899,
      "NM_MUN": "Santa Rita do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1718907,
      "NM_MUN": "Santa Rosa do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1719004,
      "NM_MUN": "Santa Tereza do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720002,
      "NM_MUN": "Santa Terezinha do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720101,
      "NM_MUN": "São Bento do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720150,
      "NM_MUN": "São Félix do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720200,
      "NM_MUN": "São Miguel do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720259,
      "NM_MUN": "São Salvador do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720309,
      "NM_MUN": "São Sebastião do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720499,
      "NM_MUN": "São Valério"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720655,
      "NM_MUN": "Silvanópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720804,
      "NM_MUN": "Sítio Novo do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720853,
      "NM_MUN": "Sucupira"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720903,
      "NM_MUN": "Taguatinga"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720937,
      "NM_MUN": "Taipas do Tocantins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1720978,
      "NM_MUN": "Talismã"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1721000,
      "NM_MUN": "Palmas"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1721109,
      "NM_MUN": "Tocantínia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1721208,
      "NM_MUN": "Tocantinópolis"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1721257,
      "NM_MUN": "Tupirama"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1721307,
      "NM_MUN": "Tupiratins"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1722081,
      "NM_MUN": "Wanderlândia"
    },
    {
      "SIGLA": "TO",
      "CD_MUN": 1722107,
      "NM_MUN": "Xambioá"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100055,
      "NM_MUN": "Açailândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100204,
      "NM_MUN": "Alcântara"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100402,
      "NM_MUN": "Altamira do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100436,
      "NM_MUN": "Alto Alegre do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100477,
      "NM_MUN": "Alto Alegre do Pindaré"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100501,
      "NM_MUN": "Alto Parnaíba"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100550,
      "NM_MUN": "Amapá do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100600,
      "NM_MUN": "Amarante do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100709,
      "NM_MUN": "Anajatuba"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100832,
      "NM_MUN": "Apicum-Açu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100873,
      "NM_MUN": "Araguanã"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2100956,
      "NM_MUN": "Arame"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101004,
      "NM_MUN": "Arari"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101103,
      "NM_MUN": "Axixá"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101202,
      "NM_MUN": "Bacabal"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101251,
      "NM_MUN": "Bacabeira"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101301,
      "NM_MUN": "Bacuri"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101350,
      "NM_MUN": "Bacurituba"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101400,
      "NM_MUN": "Balsas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101608,
      "NM_MUN": "Barra do Corda"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101772,
      "NM_MUN": "Bela Vista do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101806,
      "NM_MUN": "Benedito Leite"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101905,
      "NM_MUN": "Bequimão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101939,
      "NM_MUN": "Bernardo do Mearim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2101970,
      "NM_MUN": "Boa Vista do Gurupi"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102002,
      "NM_MUN": "Bom Jardim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102036,
      "NM_MUN": "Bom Jesus das Selvas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102077,
      "NM_MUN": "Bom Lugar"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102150,
      "NM_MUN": "Brejo de Areia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102309,
      "NM_MUN": "Buriti Bravo"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102325,
      "NM_MUN": "Buriticupu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102358,
      "NM_MUN": "Buritirana"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102374,
      "NM_MUN": "Cachoeira Grande"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102408,
      "NM_MUN": "Cajapió"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102507,
      "NM_MUN": "Cajari"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102556,
      "NM_MUN": "Campestre do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102606,
      "NM_MUN": "Cândido Mendes"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102705,
      "NM_MUN": "Cantanhede"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102754,
      "NM_MUN": "Capinzal do Norte"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102804,
      "NM_MUN": "Carolina"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2102903,
      "NM_MUN": "Carutapera"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103109,
      "NM_MUN": "Cedral"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103125,
      "NM_MUN": "Central do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103158,
      "NM_MUN": "Centro do Guilherme"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103174,
      "NM_MUN": "Centro Novo do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103257,
      "NM_MUN": "Cidelândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103307,
      "NM_MUN": "Codó"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103505,
      "NM_MUN": "Colinas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103554,
      "NM_MUN": "Conceição do Lago-Açu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103604,
      "NM_MUN": "Coroatá"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103703,
      "NM_MUN": "Cururupu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103752,
      "NM_MUN": "Davinópolis"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2103802,
      "NM_MUN": "Dom Pedro"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104008,
      "NM_MUN": "Esperantinópolis"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104057,
      "NM_MUN": "Estreito"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104073,
      "NM_MUN": "Feira Nova do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104081,
      "NM_MUN": "Fernando Falcão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104099,
      "NM_MUN": "Formosa da Serra Negra"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104107,
      "NM_MUN": "Fortaleza dos Nogueiras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104206,
      "NM_MUN": "Fortuna"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104305,
      "NM_MUN": "Godofredo Viana"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104404,
      "NM_MUN": "Gonçalves Dias"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104503,
      "NM_MUN": "Governador Archer"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104552,
      "NM_MUN": "Governador Edison Lobão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104602,
      "NM_MUN": "Governador Eugênio Barros"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104628,
      "NM_MUN": "Governador Luiz Rocha"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104651,
      "NM_MUN": "Governador Newton Bello"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104677,
      "NM_MUN": "Governador Nunes Freire"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104701,
      "NM_MUN": "Graça Aranha"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104800,
      "NM_MUN": "Grajaú"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2104909,
      "NM_MUN": "Guimarães"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105104,
      "NM_MUN": "Icatu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105153,
      "NM_MUN": "Igarapé do Meio"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105203,
      "NM_MUN": "Igarapé Grande"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105302,
      "NM_MUN": "Imperatriz"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105351,
      "NM_MUN": "Itaipava do Grajaú"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105401,
      "NM_MUN": "Itapecuru Mirim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105427,
      "NM_MUN": "Itinga do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105450,
      "NM_MUN": "Jatobá"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105476,
      "NM_MUN": "Jenipapo dos Vieiras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105500,
      "NM_MUN": "João Lisboa"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105609,
      "NM_MUN": "Joselândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105658,
      "NM_MUN": "Junco do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105708,
      "NM_MUN": "Lago da Pedra"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105807,
      "NM_MUN": "Lago do Junco"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105906,
      "NM_MUN": "Lago Verde"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105948,
      "NM_MUN": "Lago dos Rodrigues"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105963,
      "NM_MUN": "Lagoa Grande do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2105989,
      "NM_MUN": "Lajeado Novo"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106003,
      "NM_MUN": "Lima Campos"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106102,
      "NM_MUN": "Loreto"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106201,
      "NM_MUN": "Luís Domingues"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106326,
      "NM_MUN": "Maracaçumé"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106359,
      "NM_MUN": "Marajá do Sena"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106375,
      "NM_MUN": "Maranhãozinho"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106508,
      "NM_MUN": "Matinha"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106631,
      "NM_MUN": "Matões do Norte"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106706,
      "NM_MUN": "Mirador"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106755,
      "NM_MUN": "Miranda do Norte"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106805,
      "NM_MUN": "Mirinzal"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2106904,
      "NM_MUN": "Monção"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107001,
      "NM_MUN": "Montes Altos"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107100,
      "NM_MUN": "Morros"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107258,
      "NM_MUN": "Nova Colinas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107308,
      "NM_MUN": "Nova Iorque"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107357,
      "NM_MUN": "Nova Olinda do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107407,
      "NM_MUN": "Olho d'Água das Cunhãs"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107456,
      "NM_MUN": "Olinda Nova do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107506,
      "NM_MUN": "Paço do Lumiar"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107605,
      "NM_MUN": "Palmeirândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2107704,
      "NM_MUN": "Paraibano"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108009,
      "NM_MUN": "Pastos Bons"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108108,
      "NM_MUN": "Paulo Ramos"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108207,
      "NM_MUN": "Pedreiras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108256,
      "NM_MUN": "Pedro do Rosário"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108306,
      "NM_MUN": "Penalva"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108405,
      "NM_MUN": "Peri Mirim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108454,
      "NM_MUN": "Peritoró"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108504,
      "NM_MUN": "Pindaré-Mirim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108603,
      "NM_MUN": "Pinheiro"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108702,
      "NM_MUN": "Pio XII"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108801,
      "NM_MUN": "Pirapemas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2108900,
      "NM_MUN": "Poção de Pedras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109007,
      "NM_MUN": "Porto Franco"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109056,
      "NM_MUN": "Porto Rico do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109106,
      "NM_MUN": "Presidente Dutra"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109205,
      "NM_MUN": "Presidente Juscelino"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109239,
      "NM_MUN": "Presidente Médici"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109270,
      "NM_MUN": "Presidente Sarney"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109304,
      "NM_MUN": "Presidente Vargas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109452,
      "NM_MUN": "Raposa"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109502,
      "NM_MUN": "Riachão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109551,
      "NM_MUN": "Ribamar Fiquene"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109601,
      "NM_MUN": "Rosário"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109700,
      "NM_MUN": "Sambaíba"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109759,
      "NM_MUN": "Santa Filomena do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109809,
      "NM_MUN": "Santa Helena"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2109908,
      "NM_MUN": "Santa Inês"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110005,
      "NM_MUN": "Santa Luzia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110039,
      "NM_MUN": "Santa Luzia do Paruá"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110203,
      "NM_MUN": "Santa Rita"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110302,
      "NM_MUN": "Santo Antônio dos Lopes"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110500,
      "NM_MUN": "São Bento"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110658,
      "NM_MUN": "São Domingos do Azeitão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110708,
      "NM_MUN": "São Domingos do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110807,
      "NM_MUN": "São Félix de Balsas"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2110856,
      "NM_MUN": "São Francisco do Brejão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111003,
      "NM_MUN": "São João Batista"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111029,
      "NM_MUN": "São João do Carú"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111052,
      "NM_MUN": "São João do Paraíso"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111078,
      "NM_MUN": "São João do Soter"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111201,
      "NM_MUN": "São José de Ribamar"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111250,
      "NM_MUN": "São José dos Basílios"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111300,
      "NM_MUN": "São Luís"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111409,
      "NM_MUN": "São Luís Gonzaga do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111508,
      "NM_MUN": "São Mateus do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111532,
      "NM_MUN": "São Pedro da Água Branca"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111573,
      "NM_MUN": "São Pedro dos Crentes"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111607,
      "NM_MUN": "São Raimundo das Mangabeiras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111631,
      "NM_MUN": "São Raimundo do Doca Bezerra"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111672,
      "NM_MUN": "São Roberto"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111706,
      "NM_MUN": "São Vicente Ferrer"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111722,
      "NM_MUN": "Satubinha"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111748,
      "NM_MUN": "Senador Alexandre Costa"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111763,
      "NM_MUN": "Senador La Rocque"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111789,
      "NM_MUN": "Serrano do Maranhão"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111805,
      "NM_MUN": "Sítio Novo"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2111904,
      "NM_MUN": "Sucupira do Norte"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112001,
      "NM_MUN": "Tasso Fragoso"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112100,
      "NM_MUN": "Timbiras"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112233,
      "NM_MUN": "Trizidela do Vale"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112274,
      "NM_MUN": "Tufilândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112308,
      "NM_MUN": "Tuntum"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112407,
      "NM_MUN": "Turiaçu"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112456,
      "NM_MUN": "Turilândia"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112704,
      "NM_MUN": "Vargem Grande"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112803,
      "NM_MUN": "Viana"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112852,
      "NM_MUN": "Vila Nova dos Martírios"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2112902,
      "NM_MUN": "Vitória do Mearim"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2113009,
      "NM_MUN": "Vitorino Freire"
    },
    {
      "SIGLA": "MA",
      "CD_MUN": 2114007,
      "NM_MUN": "Zé Doca"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100102,
      "NM_MUN": "Acorizal"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100201,
      "NM_MUN": "Água Boa"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100250,
      "NM_MUN": "Alta Floresta"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100300,
      "NM_MUN": "Alto Araguaia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100359,
      "NM_MUN": "Alto Boa Vista"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100409,
      "NM_MUN": "Alto Garças"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100508,
      "NM_MUN": "Alto Paraguai"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100607,
      "NM_MUN": "Alto Taquari"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5100805,
      "NM_MUN": "Apiacás"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101001,
      "NM_MUN": "Araguaiana"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101209,
      "NM_MUN": "Araguainha"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101258,
      "NM_MUN": "Araputanga"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101308,
      "NM_MUN": "Arenápolis"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101407,
      "NM_MUN": "Aripuanã"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101605,
      "NM_MUN": "Barão de Melgaço"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101704,
      "NM_MUN": "Barra do Bugres"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101803,
      "NM_MUN": "Barra do Garças"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101852,
      "NM_MUN": "Bom Jesus do Araguaia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5101902,
      "NM_MUN": "Brasnorte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102504,
      "NM_MUN": "Cáceres"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102603,
      "NM_MUN": "Campinápolis"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102637,
      "NM_MUN": "Campo Novo do Parecis"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102678,
      "NM_MUN": "Campo Verde"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102686,
      "NM_MUN": "Campos de Júlio"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102694,
      "NM_MUN": "Canabrava do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102702,
      "NM_MUN": "Canarana"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102793,
      "NM_MUN": "Carlinda"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5102850,
      "NM_MUN": "Castanheira"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103007,
      "NM_MUN": "Chapada dos Guimarães"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103056,
      "NM_MUN": "Cláudia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103106,
      "NM_MUN": "Cocalinho"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103205,
      "NM_MUN": "Colíder"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103254,
      "NM_MUN": "Colniza"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103304,
      "NM_MUN": "Comodoro"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103353,
      "NM_MUN": "Confresa"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103361,
      "NM_MUN": "Conquista D'Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103379,
      "NM_MUN": "Cotriguaçu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103403,
      "NM_MUN": "Cuiabá"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103437,
      "NM_MUN": "Curvelândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103452,
      "NM_MUN": "Denise"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103502,
      "NM_MUN": "Diamantino"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103601,
      "NM_MUN": "Dom Aquino"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103700,
      "NM_MUN": "Feliz Natal"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103809,
      "NM_MUN": "Figueirópolis D'Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103858,
      "NM_MUN": "Gaúcha do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103908,
      "NM_MUN": "General Carneiro"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5103957,
      "NM_MUN": "Glória D'Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104104,
      "NM_MUN": "Guarantã do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104203,
      "NM_MUN": "Guiratinga"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104500,
      "NM_MUN": "Indiavaí"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104526,
      "NM_MUN": "Ipiranga do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104542,
      "NM_MUN": "Itanhangá"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104559,
      "NM_MUN": "Itaúba"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104609,
      "NM_MUN": "Itiquira"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104807,
      "NM_MUN": "Jaciara"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5104906,
      "NM_MUN": "Jangada"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105002,
      "NM_MUN": "Jauru"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105101,
      "NM_MUN": "Juara"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105150,
      "NM_MUN": "Juína"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105176,
      "NM_MUN": "Juruena"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105200,
      "NM_MUN": "Juscimeira"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105234,
      "NM_MUN": "Lambari D'Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105259,
      "NM_MUN": "Lucas do Rio Verde"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105309,
      "NM_MUN": "Luciara"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105507,
      "NM_MUN": "Vila Bela da Santíssima Trindade"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105580,
      "NM_MUN": "Marcelândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105606,
      "NM_MUN": "Matupá"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105622,
      "NM_MUN": "Mirassol d'Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5105903,
      "NM_MUN": "Nobres"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106000,
      "NM_MUN": "Nortelândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106109,
      "NM_MUN": "Nossa Senhora do Livramento"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106158,
      "NM_MUN": "Nova Bandeirantes"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106174,
      "NM_MUN": "Nova Nazaré"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106182,
      "NM_MUN": "Nova Lacerda"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106190,
      "NM_MUN": "Nova Santa Helena"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106208,
      "NM_MUN": "Nova Brasilândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106216,
      "NM_MUN": "Nova Canaã do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106224,
      "NM_MUN": "Nova Mutum"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106232,
      "NM_MUN": "Nova Olímpia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106240,
      "NM_MUN": "Nova Ubiratã"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106257,
      "NM_MUN": "Nova Xavantina"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106265,
      "NM_MUN": "Novo Mundo"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106273,
      "NM_MUN": "Novo Horizonte do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106281,
      "NM_MUN": "Novo São Joaquim"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106299,
      "NM_MUN": "Paranaíta"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106307,
      "NM_MUN": "Paranatinga"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106315,
      "NM_MUN": "Novo Santo Antônio"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106372,
      "NM_MUN": "Pedra Preta"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106422,
      "NM_MUN": "Peixoto de Azevedo"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106455,
      "NM_MUN": "Planalto da Serra"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106505,
      "NM_MUN": "Poconé"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106653,
      "NM_MUN": "Pontal do Araguaia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106703,
      "NM_MUN": "Ponte Branca"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106752,
      "NM_MUN": "Pontes e Lacerda"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106778,
      "NM_MUN": "Porto Alegre do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106802,
      "NM_MUN": "Porto dos Gaúchos"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106828,
      "NM_MUN": "Porto Esperidião"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5106851,
      "NM_MUN": "Porto Estrela"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107008,
      "NM_MUN": "Poxoréu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107040,
      "NM_MUN": "Primavera do Leste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107065,
      "NM_MUN": "Querência"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107107,
      "NM_MUN": "São José dos Quatro Marcos"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107156,
      "NM_MUN": "Reserva do Cabaçal"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107180,
      "NM_MUN": "Ribeirão Cascalheira"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107198,
      "NM_MUN": "Ribeirãozinho"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107206,
      "NM_MUN": "Rio Branco"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107248,
      "NM_MUN": "Santa Carmem"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107263,
      "NM_MUN": "Santo Afonso"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107297,
      "NM_MUN": "São José do Povo"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107305,
      "NM_MUN": "São José do Rio Claro"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107354,
      "NM_MUN": "São José do Xingu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107404,
      "NM_MUN": "São Pedro da Cipa"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107578,
      "NM_MUN": "Rondolândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107602,
      "NM_MUN": "Rondonópolis"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107701,
      "NM_MUN": "Rosário Oeste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107743,
      "NM_MUN": "Santa Cruz do Xingu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107750,
      "NM_MUN": "Salto do Céu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107768,
      "NM_MUN": "Santa Rita do Trivelato"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107776,
      "NM_MUN": "Santa Terezinha"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107792,
      "NM_MUN": "Santo Antônio do Leste"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107800,
      "NM_MUN": "Santo Antônio do Leverger"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107859,
      "NM_MUN": "São Félix do Araguaia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107875,
      "NM_MUN": "Sapezal"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107883,
      "NM_MUN": "Serra Nova Dourada"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107909,
      "NM_MUN": "Sinop"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107925,
      "NM_MUN": "Sorriso"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107941,
      "NM_MUN": "Tabaporã"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5107958,
      "NM_MUN": "Tangará da Serra"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108006,
      "NM_MUN": "Tapurah"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108055,
      "NM_MUN": "Terra Nova do Norte"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108105,
      "NM_MUN": "Tesouro"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108204,
      "NM_MUN": "Torixoréu"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108303,
      "NM_MUN": "União do Sul"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108352,
      "NM_MUN": "Vale de São Domingos"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108402,
      "NM_MUN": "Várzea Grande"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108501,
      "NM_MUN": "Vera"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108600,
      "NM_MUN": "Vila Rica"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108808,
      "NM_MUN": "Nova Guarita"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108857,
      "NM_MUN": "Nova Marilândia"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108907,
      "NM_MUN": "Nova Maringá"
    },
    {
      "SIGLA": "MT",
      "CD_MUN": 5108956,
      "NM_MUN": "Nova Monte Verde"
    }
  ]

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
  "000004",
  "2C105C",
  "711F81",
  "B63679",
  "EE605E",
  "FDAE78",
  "FCFDBF",
];
// Define data options.
var dataInfo = {
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
};
var dateInfo = {
  left: { selected: "" },
  right: { selected: "" },
};
var dataSelector = ui.Select({
  items: Object.keys(dataInfo),
});

var statesToSelector = ["RO","AC","AM","RR","PA","AP","TO","MA","MT"]

function stateSelectorChangeHandler(){
  citySelectorHandler(stateSelector.getValue())
}

var stateSelector = ui.Select({items: statesToSelector, onChange: stateSelectorChangeHandler})

var citySelector = ui.Select()

function citySelectorHandler(state) {
  if(state === undefined){
    return;
  }else{
    var cities = []
    dataStatesAndCities.map(function(e){
      if(e.SIGLA == state){
        cities.push({label: e.NM_MUN, value:e.CD_MUN});
      }
    })
    citySelector.items().reset(cities)
  }
}

var btnInfoGas = ui.Button({
  label: "Help",
  imageUrl:
    "https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v13/24px.svg",
  onClick: exibirInformacoes,
  style: { margin: "10px 0px 0px 5px" },
});

var btnRun = ui.Button(
  "Run",
  updateMaps,
  false,
  { width: "100%", padding: "20px 20px 0px 0px" },
  null
);
var cbxMedia = ui.Checkbox("Show average (Dates)", false, null, false, null);

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
var center = ui.url.get("center", initPoint);
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

function leftDateHandler() {
  leftLabel.style().set({ shown: false });
  var selectedDate = ee.Date(
    ee.List(leftDatePanel.widgets().get(1).getValue()).get(0)
  );
  selectedDate.format("YYYY-MM-dd").evaluate(function (date) {
    ui.url.set("leftdate", date);
    dateInfo.left.selected = date;
    var img = compositeImages(selectedDate);
    leftMap
      .layers()
      .set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));
    leftLabel.setValue(date);
    leftLabel.style().set({ shown: true });
    drawChart();
  });
}
function rightDateHandler() {
  rightLabel.style().set({ shown: false });
  var selectedDate = ee.Date(
    ee.List(rightDatePanel.widgets().get(1).getValue()).get(0)
  );
  selectedDate.format("YYYY-MM-dd").evaluate(function (date) {
    ui.url.set("rightdate", date);
    dateInfo.right.selected = date;
    var img = compositeImages(selectedDate);
    rightMap
      .layers()
      .set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));
    rightLabel.setValue(date);
    rightLabel.style().set({ shown: true });
    drawChart();
  });
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
var intro = ui.Panel([
  ui.Label({
    value: "GAMBAR",
    style: {
      fontSize: "32px",
      fontWeight: "bold",
      textDecoration: "underline",
      backgroundColor: "CFE4D3",
    },
  }),
  ui.Label("An application to visualize air pollutant time series data."),
]);

var leftSliderDate = ui.DateSlider({
  start: "2010-01-01",
  end: new Date(),
  value: "2020-01-01",
  period: 1,
  style: { stretch: "horizontal", shown: true },
});
leftSliderDate.setDisabled(false);

var rightSliderDate = ui.DateSlider({
  start: "2010-01-01",
  end: new Date(),
  value: "2021-01-01",
  period: 1,
  style: { stretch: "horizontal", shown: true },
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
  style: { stretch: "horizontal" },
});
cloudFracSlider.setDisabled(true);
var leftDateLabel = ui.Label({
  value: "Initial Date:",
  style: {
    width: dateSliderLabelWidth,
    color: "000",
    padding: "25px 0px 0px 0px",
  },
});
var leftDatePanel = ui.Panel({
  widgets: [leftDateLabel, leftSliderDate],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
});

var rightDateLabel = ui.Label({
  value: "Final Date:",
  style: {
    width: dateSliderLabelWidth,
    color: "000",
    padding: "25px 0px 0px 0px",
  },
});
var rightDatePanel = ui.Panel({
  widgets: [rightDateLabel, rightSliderDate],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: { stretch: "horizontal" },
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

var cloudFracIndex = 0;
var leftDateIndex = 0;
var rightDateIndex = 0;
var legendIndex = 10;
var swipeSwitchIndex = 11;
var mapComparison = ui.Panel([
  ui.Label({
    value: "Map Comparison",
    style: { fontSize: "24px", fontWeight: "bold" },
  }),
  ui.Label({
    value: "1. Gas:",
    style: { fontWeight: "bold", fontSize: "18px" },
  }),
  dataSelectPanel,
  ui.Label({
    value: "2. Dates:",
    style: { fontWeight: "bold", fontSize: "18px" },
  }),
  leftDatePanel,
  rightDatePanel,
  //cbxMedia,
  btnRun,
  ui.Label({ value: "4. Adjust palette stretch:" }),
  stretchPanel,
  ui.Label("[legend]"),
  ui.Label("[swipeSwitch]"),
]);

// Add widgets to the info panel.
infoPanel.add(intro);
var panelBreak25 = ui.Panel(null, null, {
  stretch: "horizontal",
  height: "1px",
  backgroundColor: "000",
  margin: "8px 0px 8px 0px",
});
infoPanel.add(panelBreak25);
infoPanel.add(mapComparison);

function dataSelectorHandler(e) {
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
  //   cloudFracSlider.setDisabled(true);
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

  // Update map data
  // updateLeftSliderDate();
  // updateRightSliderDate();
  updateMaps(false,'');
  // Update legend elements
  makeLegend();
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

bigMap.addLayer(bioma_amazonico, {}, "Amazonia");
bigMap.setOptions("HYBRID");

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
  var img = compositeImages(date);

  map.layers().set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));
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

for (var i = 0; i < 12; i++) {
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

for (var i = 0; i < linkerMaps.length; i++) {
  mapsPanel.add(linkerMaps[i]);
}

var swipeButtonLabel = "Show swipe display";
if (swipeStatus) {
  swipeButtonLabel = "Show side-by-side display";
}
var swipeButton = ui.Button(swipeButtonLabel, switchSwipe, null, {
  position: "top-left",
});
mapComparison.widgets().set(swipeSwitchIndex, swipeButton);
function switchSwipe() {
  if (swipeStatus) {
    sliderPanel.setWipe(false);
    swipeButton.setLabel("Show swipe display");
    swipeStatus = false;
    ui.url.set("swipe", "false");
  } else {
    sliderPanel.setWipe(true);
    swipeButton.setLabel("Show side-by-side display");
    swipeStatus = true;
    ui.url.set("swipe", "true");
  }
}

function updateCloudFracSlider(val) {
  cloudPct = val;
  ui.url.set("cloud", val);
  cloudFrac = cloudPct / 100;
  // updateLeftSliderDate();
  // updateRightSliderDate();
  updateMaps(false,'');
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

function updateMaps(isDraw,aoi) {
  if(typeof isDraw === 'object'){
    isDraw = false //Define false if not pass parameter
  }
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

  var timeDifference = new Date(
    finalTotalDate.getTime() - initialTotalDate.getTime()
  ); //Compara se o intervalo de tempo eh menor que um ano
  if (timeDifference.getFullYear() <= 1970) {
    alert("Time span must be greater than one year!");
    return;
  }

  // print(initialMonth, initialYear);
  // print(finalMonth, finalYear);

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
        var temp
        if(isDraw === false){
          temp = img.clipToCollection(bioma_amazonico);
        }else{
          temp = img.clip(aoi);
          maps[k-1].centerObject(aoi,6)
        }
        maps[k - 1]
          .layers()
          .set(0, ui.Map.Layer(temp, thisData.visParams, "Amazonia", true, 0.75));
      }
    }
  }
}

// This needs to be run on load and each time a dataset changes.
function updateLeftSliderDate() {
  leftDatePanel.widgets().get(1).setDisabled(true);
  leftLabel.style().set({ shown: false });

  var dateRange = getMinMaxDate();
  var firstDate = ee.Date(dateRange.get("firstDate"));
  var firstDateMillis = ee.Date(dateRange.get("firstDate")).millis();
  var lastDate = ee.Date(dateRange.get("lastDate"));
  var lastDateMillis = ee.Date(dateRange.get("lastDate")).millis();
  var selectedDate = ee.Date(dateInfo.left.selected);
  var selectedDateMillis = ee.Date(dateInfo.left.selected).millis();
  selectedDate = ee.Date(
    ee.Algorithms.If(
      firstDateMillis.gt(selectedDateMillis),
      firstDate,
      selectedDate
    )
  );
  selectedDate = ee.Date(
    ee.Algorithms.If(
      lastDateMillis.lt(selectedDateMillis),
      lastDate,
      selectedDate
    )
  );

  var img = compositeImages(selectedDate);
  leftMap
    .layers()
    .set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));

  ee.Dictionary({
    firstDate: firstDate.format("YYYY-MM-dd"),
    lastDate: lastDate.format("YYYY-MM-dd"),
    selectedDate: selectedDate.format("YYYY-MM-dd"),
  }).evaluate(function (dates) {
    var dateSelector = ui.DateSlider({
      start: dates.firstDate,
      end: dates.lastDate,
      value: dates.selectedDate,
      period: 1,
      style: { stretch: "horizontal" },
      onChange: leftDateHandler,
    });
    leftDatePanel.widgets().set(1, dateSelector);
    leftLabel.setValue(dates.selectedDate);
    leftLabel.style().set({ shown: true });
    drawChart();
  });
}

function updateRightSliderDate() {
  rightDatePanel.widgets().get(1).setDisabled(true);
  rightLabel.style().set({ shown: false });

  var dateRange = getMinMaxDate();
  var firstDate = ee.Date(dateRange.get("firstDate"));
  var firstDateMillis = ee.Date(dateRange.get("firstDate")).millis();
  var lastDate = ee.Date(dateRange.get("lastDate"));
  var lastDateMillis = ee.Date(dateRange.get("lastDate")).millis();
  var selectedDate = ee.Date(dateInfo.right.selected);
  var selectedDateMillis = ee.Date(dateInfo.right.selected).millis();
  selectedDate = ee.Date(
    ee.Algorithms.If(
      firstDateMillis.gt(selectedDateMillis),
      firstDate,
      selectedDate
    )
  );
  selectedDate = ee.Date(
    ee.Algorithms.If(
      lastDateMillis.lt(selectedDateMillis),
      lastDate,
      selectedDate
    )
  );

  var img = compositeImages(selectedDate);
  rightMap
    .layers()
    .set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));

  ee.Dictionary({
    firstDate: firstDate.format("YYYY-MM-dd"),
    lastDate: lastDate.format("YYYY-MM-dd"),
    selectedDate: selectedDate.format("YYYY-MM-dd"),
  }).evaluate(function (dates) {
    var dateSelector = ui.DateSlider({
      start: dates.firstDate,
      end: dates.lastDate,
      value: dates.selectedDate,
      period: 1,
      style: { stretch: "horizontal" },
      onChange: rightDateHandler,
    });
    rightDatePanel.widgets().set(1, dateSelector);
    rightLabel.setValue(dates.selectedDate);
    rightLabel.style().set({ shown: true });
    drawChart();
  });
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
var nLayers = drawingToolsRight.layers().length();
while (nLayers > 0) {
  var layer = drawingToolsRight.layers().get(0);
  drawingToolsRight.layers().remove(layer);
  nLayers = drawingToolsRight.layers().length();
}
drawingTools.addLayer([aoi], null, "#006600");
drawingToolsRight.addLayer([aoi], null, "FFF");
drawingToolsRight.layers().get(0).setLocked(true);

// #############################################################################
// ### SETUP APP DISPLAY ###
// #############################################################################
var mapChartSplitPanel = ui.Panel(
  ui.SplitPanel({
    firstPanel: ui.Panel(bigMap, null, { height: "60%" }),
    secondPanel: ui.Panel(pnlMediasMensais, null, {
      stretch: "horizontal",
      width: "600px",
    }), //
    orientation: "vertical",
    wipe: false,
  })
);

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
updateMaps(false,'');

// #############################################################################
// ### CHART DATA ###
// #############################################################################
var firstChart = true;
function chartTimeSeries() {
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
    difference: 8.64e7 * 4, // 4 days (9-day composite)
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
    .setChartType("LineChart")
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
      yProperties: ["p25", "p50", "p75", "p0", "p1"],
    })
    .setChartType("LineChart")
    .setSeriesNames(["p25", "Median", "IQR", "Left date", "Right date"])
    .setOptions({
      height: 245,
      curveType: "function",
      explorer: { axis: "vertical" },
      interpolateNulls: true,
      title: "Continuous",
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

  tsChart.widgets().set(2, chart);
  tsChart.widgets().set(1, fullTsChart);
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

var removeLayer = function(name, whatMap, index12maps) {
  var mapToRemove;
  if(whatMap === '12maps'){
    mapToRemove = maps[index12maps]
  }else{
    mapToRemove = bigMap
  }
  print(maps)
  var layers = mapToRemove.layers()
  // list of layers names
  var names = []
  layers.forEach(function(lay) {
    var lay_name = lay.getName()
    names.push(lay_name)
  })
  // get index
  var index = names.indexOf(name)
  if (index > -1) {
    // if name in names
    var layer = layers.get(index)
    mapToRemove.remove(layer)
  } else {
    print('Layer '+name+' not found')
  }
}

function draw12mapsChart(aoi) {
  for(var i =0;i<12;i++){
    removeLayer("Amazonia","12maps",i);
  }
  updateMaps(true,aoi)
}

// Function to plot chart on drawing events.
function drawChart() {
  // Get the geometry.
  removeLayer("Layer 3","big")
  removeLayer("Layer 1","big")
  removeLayer("Layer 2","big")
  aoi = drawingTools.layers().get(0).getEeObject();
  bigMap.centerObject(aoi,6,null)
  bigMap.addLayer(aoi)
  removeLayer("Amazonia","big")
  draw12mapsChart(aoi)

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
    style: { stretch: "horizontal", margin: "0px 8px", maxHeight: "20px" },
  });

  // Create a panel with three numbers for the legend.
  var legendLabels = ui.Panel({
    widgets: [
      ui.Label(thisData.visParams.min, { margin: "4px 8px", fontSize: "12px" }), //
      ui.Label(
        thisData.visParams.max / 2, //
        {
          margin: "4px 8px",
          textAlign: "center",
          stretch: "horizontal",
          fontSize: "12px",
        }
      ),
      ui.Label(thisData.visParams.max, { margin: "4px 8px", fontSize: "12px" }),
    ],
    layout: ui.Panel.Layout.flow("horizontal"),
  });

  var legendTitle = ui.Label({
    value: thisData.legendLabel + " 9-day mean",
    style: { fontWeight: "bold", fontSize: "12px" },
  });

  var legendPanel = ui.Panel([legendTitle, colorBar, legendLabels]);
  mapComparison.widgets().set(legendIndex, legendPanel);
}
// Add the legend to the info panel
makeLegend();
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
      style: { fontSize: "20px", fontWeight: "bold" },
    }),
    ui.Label("1. Select a drawing mode:"),
    ui.Panel(
      [
        ui.Button({
          label: symbol.rectangle + " Rectangle",
          onClick: drawRectangle,
          style: { stretch: "horizontal", margin: "3px" },
        }),
        ui.Button({
          label: symbol.polygon + " Polygon",
          onClick: drawPolygon,
          style: { stretch: "horizontal", margin: "3px" },
        }),
        ui.Button({
          label: symbol.point + " Point",
          onClick: drawPoint,
          style: { stretch: "horizontal", margin: "3px" },
        }),
      ],
      ui.Panel.Layout.flow("horizontal"),
      { margin: "10px" }
    ),
    ui.Label("2. Select state."),
    stateSelector,
    ui.Label("3. Select city."),
    citySelector,
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
infoPanel.add(panelBreak50);
infoPanel.add(timeSeries);
// Define a function to clear the geometry from the layer when a
// drawing mode button is clicked.
function clearGeometry() {
  var layers = drawingTools.layers();
  layers.get(0).geometries().remove(layers.get(0).geometries().get(0));
}
function clearGeometryRight() {
  var layers = drawingToolsRight.layers();
  layers.get(0).geometries().remove(layers.get(0).geometries().get(0));
}
// Define function for dealing with a click on the rectangle button.
var drawType = "";
function drawRectangle() {
  drawType = "rectangle";
  clearGeometry();
  clearRightGeom();
  drawingTools.setShape("rectangle");
  drawingTools.draw();
}
// Define function for dealing with a click on the polygon button.
function drawPolygon() {
  drawType = "polygon";
  clearGeometry();
  clearRightGeom();
  drawingTools.setShape("polygon");
  drawingTools.draw();
}
// Define function for dealing with a click on the point button.
function drawPoint() {
  drawType = "point";
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
  value: "• Lines represent 9-day statistics around 5-day increments.",
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
  value: "• Map data is the 9-day center mean around the target date.",
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
var urlNote = ui.Label({
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
