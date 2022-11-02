var bioma_amazonico = ee.FeatureCollection("users/joaobianco/amazonia")

function getYears2019ToNow() {
  var i = 2019;
  var anoFinal = parseInt(new Date().getFullYear());
  var anos = [];
  while (i <= anoFinal) {
    anos.push(i.toString());
    i++;
  }
  return anos;
}



function exibirInformacoes(){
  alert('Cada gás selecionado tem uma série histórica diferente like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.');
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

var btnInfoGas = ui.Button({
  label: 'Help',
  imageUrl: 'https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v13/24px.svg',
  onClick: exibirInformacoes,
  style: {margin: '10px 0px 0px 5px'},
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
var infoPanel = ui.Panel({ style: { width: '27%', maxWidth: "40%" } });

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

var selectedYear = 2009;
function changeSelectedYearSelect() {
  if (selectYearSelect !== undefined) {
    selectedYear = selectYearSelect.getValue();
    updateMaps();
  }
}

var selectYearLabel = ui.Label({ value: "Select year:" });
var selectYearSelect = ui.Select({
  value: "2021",
  items: getYears2019ToNow(),
  style: { width: "200px" },
  onChange: changeSelectedYearSelect,
});

var selectYearPanel = ui.Panel({
  widgets: [selectYearLabel, selectYearSelect],
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
  // selectYearPanel,
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
  updateMaps();
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

bigMap.addLayer(bioma_amazonico, {}, 'Amazonia');
bigMap.setOptions('HYBRID');


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
var date = ee.Date.fromYMD(selectedYear, 01, 01);

for (var i = 0; i < 12; i++) {
  // var map = ui.Map().setControlVisibility(false, false, true, true, true, false, false);
  var map = ui.Map().setControlVisibility(false);
  map.setOptions('TERRAIN');

  map.style().set("width", "calc(33% - 24px)");
  map.style().set("height", "31%");
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
leftMap.drawingTools().setShown(false);
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
  value: 'Monthly Average:',
  style: {fontSize: '18px', fontWeight: '500', margin:'10px 0px 0px 15px'},
})

var pnlMediasMensais = ui.Panel({
  // layout: ui.Panel.Layout.flow("vertical", true),
  widgets: [lblMediasMensais, mapsPanel]
})

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
  updateMaps();
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

function updateMaps() {
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
      // print("i: "+i+" k: "+k+" InitialYear: "+initialYear+" InitialMonth: "+initialMonth+" FinalYear: "+finalYear+" FinalMonth: "+finalMonth)
      if ((i === initialYear && k >= initialMonth) || (i !== initialYear && k <= finalMonth)) {
        //Verifica se esta no intervalo de tempo definido
        var img = compositeImages(date);
        maps[k-1]
          .layers()
          .set(0, ui.Map.Layer(img, thisData.visParams, null, true, 0.55));
        date = date.update({
          month: date.advance(1, "month").get("month"),
        });
        maps[k-1].addLayer(bioma_amazonico, {}, 'Amazonia');
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
var drawingTools = leftMap.drawingTools();
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
drawingTools.addLayer([aoi], null, "FFF");
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
leftMap.addLayer(blankImg);
rightMap.addLayer(blankImg);
leftMap.add(leftLabel);
rightMap.add(rightLabel);
// if(thisData.cloudBand !== '') {
//   cloudFracSlider.setDisabled(false);
// }
// updateLeftSliderDate();
// updateRightSliderDate();
updateMaps();

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
  while (nLayers > 0) {
    var layer = drawingToolsRight.layers().get(0);
    drawingToolsRight.layers().remove(layer);
    nLayers = drawingToolsRight.layers().length();
  }
}

// Function to plot chart on drawing events.
function drawChart() {
  // Get the geometry.
  aoi = drawingTools.layers().get(0).getEeObject();

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
    ui.Label("2. Draw a geometry on the LEFT map."),
    chartButton,
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