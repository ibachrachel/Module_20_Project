// An array containing Data for the top and bottom 25 countries for life expectancy in 2022.

let countries = [{
  country: "Afghanistan",
  location: [33.93911, 67.70995],
  life_expectancy: 63.2,
  drinking_water: 28,
  hand_washing: 38,
  safe_sanitation: 0
},
{
  country: "Albania",
  location: [41.15333, 20.16833],
  life_expectancy: 78,
  drinking_water: 71,
  hand_washing: 0,
  safe_sanitation: 48
},
{
  country: "Algeria",
  location: [28.03389, 1.65963],
  life_expectancy: 77.1
},
{
  country: "Angola",
  location: [-11.20269, 17.87389],
  life_expectancy: 63.1
},
{
  country: "Antigua and Barbuda",
  location: [17.06082, -61.79643],
  life_expectancy: 76.5
},
{
  country: "Argentina",
  location: [-38.4161, -63.61667],
  life_expectancy: 76.6
},
{
  country: "Armenia",
  location: [40.0691, 45.03819],
  life_expectancy: 76
},
{
  country: "Australia",
  location: [-25.2744, 133.77513],
  life_expectancy: 83
},
{
  country: "Austria",
  location: [47.516231, 14.550072],
  life_expectancy: 81.6
},
{
  country: "Azerbaijan",
  location: [40.14311, 47.57693],
  life_expectancy: 71.4
},
{
  country: "Bahamas",
  location: [25.03428, -77.39628],
  life_expectancy: 73.2
},
{
  country: "Bahrain",
  location: [25.93041, 50.63777],
  life_expectancy: 75.2
},
{
  country: "Bangladesh",
  location: [23.68499, 90.35633],
  life_expectancy: 74.3
},
{
  country: "Barbados",
  location: [13.19389, -59.5432],
  life_expectancy: 76
},
{
  country: "Belarus",
  location: [53.70981, 27.95339],
  life_expectancy: 74.8
},
{
  country: "Belgium",
  location: [50.50389, 4.46994],
  life_expectancy: 84.1
},
{
  country: "Belize",
  location: [17.18988, -88.49765],
  life_expectancy: 74.4
},
{
  country: "Benin",
  location: [9.30769, 2.31583],
  life_expectancy: 63.4
},
{
  country: "Bhutan",
  location: [27.51416, 90.4336],
  life_expectancy: 73.1
},
{
  country: "Bolivia",
  location: [-16.29015, -63.58865],
  life_expectancy: 72.1
},
{
  country: "Bosnia and Herzegovina",
  location: [43.91589, 17.67908],
  life_expectancy: 76.8
},
{
  country: "Botswana",
  location: [-22.32847, 24.68487],
  life_expectancy: 62.2
},
{
  country: "Brazil",
  location: [-14.235, -51.92528],
  life_expectancy: 75.9
},
{
  country: "Brunei Darussalam",
  location: [4.53528, 114.72767],
  life_expectancy: 74.3
},
{
  country: "Bulgaria",
  location: [42.73388, 25.48583],
  life_expectancy: 75.1
},
{
  country: "Burkina Faso",
  location: [12.23833, -1.56159],
  life_expectancy: 62.7
},
{
  country: "Burundi",
  location: [-3.37306, 29.91889],
  life_expectancy: 63.8
},
{
  country: "Cabo Verde",
  location: [16.002082, -24.013197],
  life_expectancy: 74
},
{
  country: "Cambodia",
  location: [12.56568, 104.99097],
  life_expectancy: 70.1
},
{
  country: "Cameroon",
  location: [7.36972, 12.35472],
  life_expectancy: 62.4
},
{
  country: "Canada",
  location: [56.13037, -106.34677],
  life_expectancy: 82.2
},
{
  country: "Central African Republic",
  location: [6.61111, 20.93944],
  life_expectancy: 53.1
},
{
  country: "Chad",
  location: [15.45417, 18.73221],
  life_expectancy: 59.6
},
{
  country: "Chile",
  location: [-35.67515, -71.54297],
  life_expectancy: 80.7
}, 
{
  country: "China",
  location: [35.86166, 104.1954],
  life_expectancy: 77.4
},
{
  country: "Colombia",
  location: [4.57087, -74.29733],
  life_expectancy: 79.3
},
{
  country: "Comoros",
  location: [-11.875001, 43.872219],
  life_expectancy: 67.4
},
{
  country: "Congo",
  location: [-0.228021,15.827659],
  life_expectancy: 64.7
},
{
  country: "Cote d'Ivoire",
  location: [7.53999, -5.54708],
  life_expectancy: 62.9
},
{
  country: "Croatia",
  location: [45.1, 15.2],
  life_expectancy: 78.6
},
{
  country: "Cuba",
  location: [21.52176, -77.78117],
  life_expectancy: 77.8
},
{
  country: "Cyprus",
  location: [35.126413, 33.429859],
  life_expectancy: 83.1
},
{
  country: "Czechia",
  location: [49.817492, 15.472962],
  life_expectancy: 79.1
},
{
  country: "Democratic People's Republic of Korea",
  location: [40.33985, 127.51009],
  life_expectancy: 72.6
},
{
  country: "Democratic Republic of the Congo",
  location: [-4.038333, 21.758664],
  life_expectancy: 62.4
},
{
  country: "Denmark",
  location: [56.26392, 9.50179],
  life_expectancy: 81.3
},
{
  country: "Djibouti",
  location: [11.825138,42.590275],
  life_expectancy: 65.8
},
{
  country: "Dominican Republic",
  location: [18.73569, -70.16265],
  life_expectancy: 72.8
},
{
  country: "Ecuador",
  location: [-1.83124, -78.1834],
  life_expectancy: 78.4
},
{
  country: "Egypt",
  location: [26.82055, 30.8025],
  life_expectancy: 71.8
},
{
  country: "El Salvador",
  location: [13.79419, -88.89653],
  life_expectancy: 75
},
{
  country: "Equatorial Guinea",
  location: [1.6508, 10.2679],
  life_expectancy: 62.2
},
{
  country: "Eritrea",
  location: [15.179384, 39.782334],
  life_expectancy: 64.1
},
{
  country: "Estonia",
  location: [58.59527, 25.01361],
  life_expectancy: 78.9
},
{
  country: "Ethiopia",
  location: [9.145, 40.48967],
  life_expectancy: 68.7
},
{
  country: "Fiji",
  location: [-16.57819, 179.41441],
  life_expectancy: 68
},
{
  country: "Finland",
  location: [61.92411, 25.74815],
  life_expectancy: 81.6
},
{
  country: "France",
  location: [46.22764, 2.21375],
  life_expectancy: 82.5
},
{
  country: "Gabon",
  location: [-0.803689, 11.609444],
  life_expectancy: 66.5
},
{
  country: "Gambia",
  location: [13.44318, -15.31014],
  life_expectancy: 65.5
},
{
  country: "Greece",
  location: [39.07421, 21.82431],
  life_expectancy: 82.8
},
{
  country: "Guadeloupe",
  location: [16.99597, -62.06764],
  life_expectancy: 82.74
},
{
  country: "Guinea",
  location: [9.94559, -9.69665],
  life_expectancy: 62.64
},
{
  country: "Guinea-Bissau",
  location: [11.80375, -15.18041],
  life_expectancy: 59.38
},
{
  country: "Hong Kong",
  location: [22.39643, 114.1095],
  life_expectancy: 85.29
},
{
  country: "Iceland",
  location: [64.96305, -19.02084],
  life_expectancy: 83.52
},
{
  country: "Ireland",
  location: [53.41291, -8.24389],
  life_expectancy: 82.81
},
{
  country: "Israel",
  location: [31.04605, 34.85161],
  life_expectancy: 83.49
},
{
  country: "Italy",
  location: [41.87194, 12.56738],
  life_expectancy: 84.01
},
{
  country: "Japan",
  location: [36.20482, 138.25293],
  life_expectancy: 85.03
},
{
  country: "Lesotho",
  location: [-29.60999, 28.23361],
  life_expectancy: 55.65
},
{
  country: "Luxembourg",
  location: [49.81527, 6.12958],
  life_expectancy: 82.79
},
{
  country: "Mali",
  location: [17.57069, -3.99617],
  life_expectancy: 60.54
},
{
  country: "Malta",
  location: [35.9375, 14.37542],
  life_expectancy: 83.06
},
{
  country: "Martinique",
  location: [14.64153, -61.02417],
  life_expectancy: 83.13
},
{
  country: "Mozambique",
  location: [-18.6657, 35.52956],
  life_expectancy: 62.13
},
{
  country: "Namibia",
  location: [-22.95764, 18.49041],
  life_expectancy: 64.86
},
{
  country: "Netherlands",
  location: [52.13263, 5.29127],
  life_expectancy: 82.78
},
{
  country: "New Zealand",
  location: [-40.90056, 174.88597],
  life_expectancy: 82.8
},
{
  country: "Niger",
  location: [17.60779, 8.08167],
  life_expectancy: 63.62
},
{
  country: "Nigeria",
  location: [9.082, 8.67528],
  life_expectancy: 55.75
},
{
  country: "Norway",
  location: [60.47202, 8.46895],
  life_expectancy: 82.94
},
{
  country: "Portugal",
  location: [39.39987, -8.22445],
  life_expectancy: 82.65
},
{
  country: "Sierra Leone",
  location: [8.46056, -11.77989],
  life_expectancy: 55.92
},
{
  country: "Singapore",
  location: [1.35208, 103.81984],
  life_expectancy: 84.07
},
{
  country: "Somalia",
  location: [5.15215, 46.19962],
  life_expectancy: 58.34
},
{
  country: "South Africa",
  location: [-30.55948, 22.93751],
  life_expectancy: 64.88
},
{
  country: "South Korea",
  location: [35.90776, 127.76692],
  life_expectancy: 83.5
},
{
  country: "Spain",
  location: [40.46367, -3.74922],
  life_expectancy: 83.99
},
{
  country: "Sweden",
  location: [60.12816, 18.6435],
  life_expectancy: 83.33
},
{
  country: "Switzerland",
  location: [46.81819, 8.22751],
  life_expectancy: 84.25
},
{
  country: "Togo",
  location: [8.61954, 0.82478],
  life_expectancy: 62.13
},
{
  country: "Uganda",
  location: [1.37333, 32.29028],
  life_expectancy: 64.38
},
{
  country: "Zambia",
  location: [-13.1339, 27.84933],
  life_expectancy: 64.7
},
{
  country: "Zimbabwe",
  location: [-19.01544, 29.15486],
  life_expectancy: 62.16
},
{
  country: "Seychelles",
  location: [-4.67957, 55.49198],
  life_expectancy: 73.74
},
{
  country: "Samoa",
  location: [-13.75903, -172.10463],
  life_expectancy: 73.75
},
{
  country: "Kazakhstan",
  location: [48.01957, 66.92368],
  life_expectancy: 73.9
},
{
  country: "Trinidad and Tobago",
  location: [10.6918, -61.2225],
  life_expectancy: 73.91
},
{
  country: "Micronesia",
  location: [7.42555, 150.55081],
  life_expectancy: 74.08
},
{
  country: "Georgia",
  location: [42.31541, 43.35689],
  life_expectancy: 74.24
},
{
  country: "Paraguay",
  location: [-23.4425, -58.44383],
  life_expectancy: 74.59
},
{
  country: "Jamaica",
  location: [18.10958, -77.29751],
  life_expectancy: 74.88
},
{
  country: "Jordan",
  location: [30.58516, 36.23842],
  life_expectancy: 75.01
},
{
  country: "Guatemala",
  location: [15.78347, -90.23076],
  life_expectancy: 75.05
},
{
  country: "Nicaragua",
  location: [12.86542, -85.20723],
  life_expectancy: 75.23
},
{
  country: "Mexico",
  location: [23.6345, -102.55279],
  life_expectancy: 75.41
},
{
  country: "Mauritius",
  location: [-20.3484, 57.55215],
  life_expectancy: 75.51
},
{
  country: "Saudi Arabia",
  location: [23.88594, 45.07916],
  life_expectancy: 75.69
},
{
  country: "Latvia",
  location: [56.87964, 24.60319],
  life_expectancy: 75.73
},
{
  country: "Vietnam",
  location: [14.05832, 108.2772],
  life_expectancy: 75.77
},
{
  country: "Kuwait",
  location: [29.31166, 47.48177],
  life_expectancy: 75.85
},
{
  country: "United States",
  location: [37.09024, -95.71289],
  life_expectancy: 79.11
},
{
  country: "Russia",
  location: [61.52401, 105.31876],
  life_expectancy: 72.99
},
{
  country: "Peru",
  location: [-9.18997, -75.01515],
  life_expectancy: 77.44
},
{
  country: "Costa Rica",
  location: [9.74892, -83.75343],
  life_expectancy: 80.94
},
{
  country: "Haiti",
  location: [18.97119, -72.28522],
  life_expectancy: 64.99
},
{
  country: "Pakistan",
  location: [30.37532, 69.34512],
  life_expectancy: 67.79
},
{
  country: "Turkmenistan",
  location: [38.96972, 59.55628],
  life_expectancy: 68.63
},
{
  country: "Lao People's Democratic Republic",
  location: [19.85627, 102.4955],
  life_expectancy: 68.89
},
{
  country: "India",
  location: [20.59368, 78.96288],
  life_expectancy: 70.42
},
{
  country: "Guyana",
  location: [4.86042, -58.93018],
  life_expectancy: 70.42
},
{
  country: "Timor-Leste",
  location: [-8.87422, 125.72754],
  life_expectancy: 70.26
},
{
  country: "Kiribati",
  location: [-3.37042, -168.73404],
  life_expectancy: 69.17
}, 
{
  country: "Mongolia",
  location: [46.8625, 103.84666],
  life_expectancy: 70.42
},
{
  country: "Vanuatu",
  location: [-15.37671, 166.95915],
  life_expectancy: 70.99
},
{
  country: "Iraq",
  location: [33.22319, 43.67929],
  life_expectancy: 71.08
},
{
  country: "Western Sahara",
  location: [24.21553, -12.88583],
  life_expectancy: 71.08
},
{
  country: 'Tonga',
  location: [-21.17899, -175.19824],
  life_expectancy: 71.32
},
{
  country: 'Philippines',
  location: [12.87972, 121.77402],
  life_expectancy: 71.66
},
{
  country: 'Nepal',
  location: [28.39486, 84.12401],
  life_expectancy: 71.74
},
{
  country: 'Tajikistan',
  location: [38.86103, 71.27609],
  life_expectancy: 71.76
},
{
  country: "Kyrgyzstan",
  location: [41.20438, 74.7661],
  life_expectancy: 71.95
},
{
  country: "Uzbekistan",
  location: [41.37749, 64.58526],
  life_expectancy: 72.04
},
{
  country: "Suriname",
  location: [3.91931, -56.02778],
  life_expectancy: 72.13
},
{
  country: "Moldova",
  location: [47.41163, 28.36988],
  life_expectancy: 72.3
},
{
  country: "Indonesia",
  location: [-0.78928, 113.92133],
  life_expectancy: 72.32
},
{
  country: "Venezuela",
  location: [6.42375, -66.58973],
  life_expectancy: "72.34"
},
{
  country: "Ukraine",
  location: [48.37943, 31.16558],
  life_expectancy: 72.5
},
{
  country: "Grenada",
  location: [12.26278, -61.60417],
  life_expectancy: 72.59
},
{
  country: "Russia",
  location: [61.52401, 105.31876],
  life_expectancy: 72.99
},
{
  country: "Solomon Islands",
  location: [-9.64571, 160.15619],
  life_expectancy: 73.38
},
{
  country: "Libya",
  location: [26.3351, 17.22833],
  life_expectancy: 73.44
},
{
  country: "Seychelles",
  location: [-4.67957, 55.49198],
  life_expectancy: 73.74
},
{
  country: "Samoa",
  location: [-13.75903, -172.10463],
  life_expectancy: 73.75
},
{
  country: "Kazakhstan",
  location: [48.01957, 66.92368],
  life_expectancy: 73.9
},
{
  country: "Trinidad and Tobago",
  location: [10.6918, -61.2225],
  life_expectancy: 73.91
},
{
  country: "Micronesia",
  location: [7.42555, 150.55081],
  life_expectancy: 74.08
},
{
  country: "Georgia",
  location: [42.31541, 43.35689],
  life_expectancy: 74.24
},

{
  country: "Paraguay",
  location: [-23.4425, -58.44383],
  life_expectancy: 74.59
},
{
  country: "Jamaica",
  location: [18.10958, -77.29751],
  life_expectancy: 74.88
},
{
  country: "Jordan",
  location: [30.58516, 36.23842],
  life_expectancy: 75.01
},
{
  country: "Guatemala",
  location: [15.78347, -90.23076],
  life_expectancy: 75.05
},
{
  country: "Nicaragua",
  location: [12.86542, -85.20723],
  life_expectancy: 75.23
},
{
  country: "Mexico",
  location: [23.6345, -102.55279],
  life_expectancy: 75.41
},
{
  country: "Mauritius",
  location: [-20.3484, 57.55215],
  life_expectancy: 75.51
},
{
  country: "Saudi Arabia",
  location: [23.88594, 45.07916],
  life_expectancy: 75.69
},
{
  country: "Latvia",
  location: [56.87964, 24.60319],
  life_expectancy: 75.73
},
{
  country: "Vietnam",
  location: [14.05832, 108.2772],
  life_expectancy: 75.77
},
{
  country: "Kuwait",
  location: [29.31166, 47.48177],
  life_expectancy: 75.85
},
{
  country: "Honduras",
  location: [15.2, -86.24191],
  life_expectancy: 75.87
},
{
  country: "Syria",
  location: [34.80207, 38.99682],
  life_expectancy: 76.06
},
{
  country: "Lithuania",
  location: [55.16944, 23.88128],
  life_expectancy: 76.41
},
{
  country: "Serbia",
  location: [44.01652, 21.00586],
  life_expectancy: 76.47
},
{
  country: "Romania",
  location: [45.94316, 24.96676],
  life_expectancy: 76.5
},
{
  country: "Malaysia",
  location: [4.21048, 101.97577],
  life_expectancy: 76.65
},
{
  country: "Saint Lucia",
  location: [13.90944, -60.97889],
  life_expectancy: 76.67
},
{
  country: "Aruba",
  location: [12.52111, -69.96834],
  life_expectancy: 76.79
},
{
  country: "Hungary",
  location: [47.1625, 19.5033],
  life_expectancy: 77.31
},
{
  country: "Iran",
  location: [32.42791, 53.68805],
  life_expectancy: 77.33
},
{
  country: "Tunisia",
  location: [33.88692, 9.5375],
  life_expectancy: 77.36
},
{
  country: "Montenegro",
  location: [42.70868, 19.37439],
  life_expectancy: 77.39
},
{
  country: "Morocco",
  location: [31.7917, -7.09262],
  life_expectancy: 77.43
},
{
  country: "Sri Lanka",
  location: [7.87305, 80.7718],
  life_expectancy: 77.56
},
{
  country: "Thailand",
  location: [15.87003, 100.99254],
  life_expectancy: 77.74
},
{
  country: "Slovakia",
  location: [48.66903, 19.69902],
  life_expectancy: 78
},
{
  country: "New Caledonia",
  location: [-20.90431, 165.61804],
  life_expectancy: 78.16
},
{
  country: "French Polynesia",
  location: [-17.67974, -149.40685],
  life_expectancy: 78.23
},
{
  country: "Uruguay",
  location: [-32.52278, -55.76584],
  life_expectancy: 78.43
},
{
  country: "Turkey",
  location: [38.96375, 35.24332],
  life_expectancy: 78.45
},
{
  country: "United Arab Emirates",
  location: [23.42408, 53.84782],
  life_expectancy: 78.46
},
{
  country: "Oman",
  location: [21.51258, 55.92326],
  life_expectancy: 78.58
},
{
  country: "Panama",
  location: [8.53798, -80.78213],
  life_expectancy: 79.1
},
{
  country: "Lebanon",
  location: [33.85472, 35.86229],
  life_expectancy: 79.27
},
{
  country: "Poland",
  location: [51.91944, 19.14514],
  life_expectancy: 79.27
},
{
  country: "Mayotte",
  location: [-12.8275, 45.16625],
  life_expectancy: 79.85
},
{
  country: "Maldives",
  location: [3.20278, 73.22068],
  life_expectancy: 79.89
},
{
  country: "Sudan",
  location: [12.86281, 30.21764],
  life_expectancy: 66.09
},
{
  country: "Tanzania",
  location: [-6.36903, 34.88882],
  life_expectancy: 66.39
},
{
  country: "Senegal",
  location: [14.4974, -14.45236],
  life_expectancy: 68.87
},
{
  country: "Madagascar",
  location: [-18.76695, 46.86911],
  life_expectancy: 68.21
},
{
  country: "Kenya",
  location: [-0.02356, 37.90619],
  life_expectancy: 67.47
},
{
  country: "Libya",
  location: [26.3351, 17.22833],
  life_expectancy: 73.44
},
{
  country: "Liberia",
  location: [6.42806, -9.4295],
  life_expectancy: 65
},
{
  country: "Mauritania",
  location: [21.00789, -10.94084],
  life_expectancy: 65.57
},
{
  country: "Myanmar",
  location: [21.913965, 95.956223],
  life_expectancy: 67.78
},
{
  country: "Yemen",
  location: [15.55273, 48.51639],
  life_expectancy: 66.44
},
{
  country: "Germany",
  location: [51.16569, 10.45153],
  life_expectancy: 81.88
},
{
  country: "United Kingdom",
  location: [55.37805, -3.43597],
  life_expectancy: 81.77
},
{
  country: "Sweden",
  location: [60.12816, 18.6435],
  life_expectancy: 83.33
},
{
  country: "Greece",
  location: [39.07421, 21.82431],
  life_expectancy: 82.8
}     
];