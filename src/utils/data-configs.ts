import { CountryUsageData } from "./types";

export enum Countries {
  AF = 'AF',
  AX = 'AX',
  AL = 'AL',
  DZ = 'DZ',
  AS = 'AS',
  AD = 'AD',
  AO = 'AO',
  AI = 'AI',
  AQ = 'AQ',
  AG = 'AG',
  AR = 'AR',
  AM = 'AM',
  AW = 'AW',
  AU = 'AU',
  AT = 'AT',
  AZ = 'AZ',
  BS = 'BS',
  BH = 'BH',
  BD = 'BD',
  BB = 'BB',
  BY = 'BY',
  BE = 'BE',
  BZ = 'BZ',
  BJ = 'BJ',
  BM = 'BM',
  BT = 'BT',
  BO = 'BO',
  BA = 'BA',
  BW = 'BW',
  BV = 'BV',
  BR = 'BR',
  IO = 'IO',
  BN = 'BN',
  BG = 'BG',
  BF = 'BF',
  BI = 'BI',
  KH = 'KH',
  CM = 'CM',
  CA = 'CA',
  CV = 'CV',
  KY = 'KY',
  CF = 'CF',
  TD = 'TD',
  CL = 'CL',
  CN = 'CN',
  CX = 'CX',
  CC = 'CC',
  CO = 'CO',
  KM = 'KM',
  CG = 'CG',
  CD = 'CD',
  CK = 'CK',
  CR = 'CR',
  CI = 'CI',
  HR = 'HR',
  CU = 'CU',
  CY = 'CY',
  CZ = 'CZ',
  DK = 'DK',
  DJ = 'DJ',
  DM = 'DM',
  DO = 'DO',
  EC = 'EC',
  EG = 'EG',
  SV = 'SV',
  GQ = 'GQ',
  ER = 'ER',
  EE = 'EE',
  ET = 'ET',
  FK = 'FK',
  FO = 'FO',
  FJ = 'FJ',
  FI = 'FI',
  FR = 'FR',
  GF = 'GF',
  PF = 'PF',
  TF = 'TF',
  GA = 'GA',
  GM = 'GM',
  GE = 'GE',
  DE = 'DE',
  GH = 'GH',
  GI = 'GI',
  GR = 'GR',
  GL = 'GL',
  GD = 'GD',
  GP = 'GP',
  GU = 'GU',
  GT = 'GT',
  GG = 'GG',
  GN = 'GN',
  GW = 'GW',
  GY = 'GY',
  HT = 'HT',
  HM = 'HM',
  VA = 'VA',
  HN = 'HN',
  HK = 'HK',
  HU = 'HU',
  IS = 'IS',
  IN = 'IN',
  ID = 'ID',
  IR = 'IR',
  IQ = 'IQ',
  IE = 'IE',
  IM = 'IM',
  IL = 'IL',
  IT = 'IT',
  JM = 'JM',
  JP = 'JP',
  JE = 'JE',
  JO = 'JO',
  KZ = 'KZ',
  KE = 'KE',
  KI = 'KI',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KG = 'KG',
  LA = 'LA',
  LV = 'LV',
  LB = 'LB',
  LS = 'LS',
  LR = 'LR',
  LY = 'LY',
  LI = 'LI',
  LT = 'LT',
  LU = 'LU',
  MO = 'MO',
  MK = 'MK',
  MG = 'MG',
  MW = 'MW',
  MY = 'MY',
  MV = 'MV',
  ML = 'ML',
  MT = 'MT',
  MH = 'MH',
  MQ = 'MQ',
  MR = 'MR',
  MU = 'MU',
  YT = 'YT',
  MX = 'MX',
  FM = 'FM',
  MD = 'MD',
  MC = 'MC',
  MN = 'MN',
  MS = 'MS',
  MA = 'MA',
  MZ = 'MZ',
  MM = 'MM',
  NA = 'NA',
  NR = 'NR',
  NP = 'NP',
  NL = 'NL',
  AN = 'AN',
  NC = 'NC',
  NZ = 'NZ',
  NI = 'NI',
  NE = 'NE',
  NG = 'NG',
  NU = 'NU',
  NF = 'NF',
  MP = 'MP',
  NO = 'NO',
  OM = 'OM',
  PK = 'PK',
  PW = 'PW',
  PS = 'PS',
  PA = 'PA',
  PG = 'PG',
  PY = 'PY',
  PE = 'PE',
  PH = 'PH',
  PN = 'PN',
  PL = 'PL',
  PT = 'PT',
  PR = 'PR',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RU = 'RU',
  RW = 'RW',
  SH = 'SH',
  KN = 'KN',
  LC = 'LC',
  PM = 'PM',
  VC = 'VC',
  WS = 'WS',
  SM = 'SM',
  ST = 'ST',
  SA = 'SA',
  SN = 'SN',
  CS = 'CS',
  SC = 'SC',
  SL = 'SL',
  SG = 'SG',
  SK = 'SK',
  SI = 'SI',
  SB = 'SB',
  SO = 'SO',
  ZA = 'ZA',
  GS = 'GS',
  ES = 'ES',
  LK = 'LK',
  SD = 'SD',
  SR = 'SR',
  SJ = 'SJ',
  SZ = 'SZ',
  SE = 'SE',
  CH = 'CH',
  SY = 'SY',
  TW = 'TW',
  TJ = 'TJ',
  TZ = 'TZ',
  TH = 'TH',
  TL = 'TL',
  TG = 'TG',
  TK = 'TK',
  TO = 'TO',
  TT = 'TT',
  TN = 'TN',
  TR = 'TR',
  TM = 'TM',
  TC = 'TC',
  TV = 'TV',
  UG = 'UG',
  UA = 'UA',
  AE = 'AE',
  GB = 'GB',
  US = 'US',
  UM = 'UM',
  UY = 'UY',
  UZ = 'UZ',
  VU = 'VU',
  VE = 'VE',
  VN = 'VN',
  VG = 'VG',
  VI = 'VI',
  WF = 'WF',
  EH = 'EH',
  YE = 'YE',
  ZM = 'ZM',
  ZW = 'ZW',
}

const countryNames: { [key in Countries]: string } = {
  [Countries.AF]: 'Afghanistan',
  [Countries.AX]: 'Åland Islands',
  [Countries.AL]: 'Albania',
  [Countries.DZ]: 'Algeria',
  [Countries.AS]: 'American Samoa',
  [Countries.AD]: 'Andorra',
  [Countries.AO]: 'Angola',
  [Countries.AI]: 'Anguilla',
  [Countries.AQ]: 'Antarctica',
  [Countries.AG]: 'Antigua and Barbuda',
  [Countries.AR]: 'Argentina',
  [Countries.AM]: 'Armenia',
  [Countries.AW]: 'Aruba',
  [Countries.AU]: 'Australia',
  [Countries.AT]: 'Austria',
  [Countries.AZ]: 'Azerbaijan',
  [Countries.BS]: 'Bahamas',
  [Countries.BH]: 'Bahrain',
  [Countries.BD]: 'Bangladesh',
  [Countries.BB]: 'Barbados',
  [Countries.BY]: 'Belarus',
  [Countries.BE]: 'Belgium',
  [Countries.BZ]: 'Belize',
  [Countries.BJ]: 'Benin',
  [Countries.BM]: 'Bermuda',
  [Countries.BT]: 'Bhutan',
  [Countries.BO]: 'Bolivia',
  [Countries.BA]: 'Bosnia and Herzegovina',
  [Countries.BW]: 'Botswana',
  [Countries.BV]: 'Bouvet Island',
  [Countries.BR]: 'Brazil',
  [Countries.IO]: 'British Indian Ocean Territory',
  [Countries.BN]: 'Brunei Darussalam',
  [Countries.BG]: 'Bulgaria',
  [Countries.BF]: 'Burkina Faso',
  [Countries.BI]: 'Burundi',
  [Countries.KH]: 'Cambodia',
  [Countries.CM]: 'Cameroon',
  [Countries.CA]: 'Canada',
  [Countries.CV]: 'Cape Verde',
  [Countries.KY]: 'Cayman Islands',
  [Countries.CF]: 'Central African Republic',
  [Countries.TD]: 'Chad',
  [Countries.CL]: 'Chile',
  [Countries.CN]: 'China',
  [Countries.CX]: 'Christmas Island',
  [Countries.CC]: 'Cocos (Keeling) Islands',
  [Countries.CO]: 'Colombia',
  [Countries.KM]: 'Comoros',
  [Countries.CG]: 'Congo',
  [Countries.CD]: 'Democratic Republic of the Congo',
  [Countries.CK]: 'Cook Islands',
  [Countries.CR]: 'Costa Rica',
  [Countries.CI]: 'Côte d\'Ivoire',
  [Countries.HR]: 'Croatia',
  [Countries.CU]: 'Cuba',
  [Countries.CY]: 'Cyprus',
  [Countries.CZ]: 'Czech Republic',
  [Countries.DK]: 'Denmark',
  [Countries.DJ]: 'Djibouti',
  [Countries.DM]: 'Dominica',
  [Countries.DO]: 'Dominican Republic',
  [Countries.EC]: 'Ecuador',
  [Countries.EG]: 'Egypt',
  [Countries.SV]: 'El Salvador',
  [Countries.GQ]: 'Equatorial Guinea',
  [Countries.ER]: 'Eritrea',
  [Countries.EE]: 'Estonia',
  [Countries.ET]: 'Ethiopia',
  [Countries.FK]: 'Falkland Islands (Malvinas)',
  [Countries.FO]: 'Faroe Islands',
  [Countries.FJ]: 'Fiji',
  [Countries.FI]: 'Finland',
  [Countries.FR]: 'France',
  [Countries.GF]: 'French Guiana',
  [Countries.PF]: 'French Polynesia',
  [Countries.TF]: 'French Southern Territories',
  [Countries.GA]: 'Gabon',
  [Countries.GM]: 'Gambia',
  [Countries.GE]: 'Georgia',
  [Countries.DE]: 'Germany',
  [Countries.GH]: 'Ghana',
  [Countries.GI]: 'Gibraltar',
  [Countries.GR]: 'Greece',
  [Countries.GL]: 'Greenland',
  [Countries.GD]: 'Grenada',
  [Countries.GP]: 'Guadeloupe',
  [Countries.GU]: 'Guam',
  [Countries.GT]: 'Guatemala',
  [Countries.GG]: 'Guernsey',
  [Countries.GN]: 'Guinea',
  [Countries.GW]: 'Guinea-Bissau',
  [Countries.GY]: 'Guyana',
  [Countries.HT]: 'Haiti',
  [Countries.HM]: 'Heard Island and McDonald Islands',
  [Countries.VA]: 'Holy See (Vatican City State)',
  [Countries.HN]: 'Honduras',
  [Countries.HK]: 'Hong Kong',
  [Countries.HU]: 'Hungary',
  [Countries.IS]: 'Iceland',
  [Countries.IN]: 'India',
  [Countries.ID]: 'Indonesia',
  [Countries.IR]: 'Iran',
  [Countries.IQ]: 'Iraq',
  [Countries.IE]: 'Ireland',
  [Countries.IM]: 'Isle of Man',
  [Countries.IL]: 'Israel',
  [Countries.IT]: 'Italy',
  [Countries.JM]: 'Jamaica',
  [Countries.JP]: 'Japan',
  [Countries.JE]: 'Jersey',
  [Countries.JO]: 'Jordan',
  [Countries.KZ]: 'Kazakhstan',
  [Countries.KE]: 'Kenya',
  [Countries.KI]: 'Kiribati',
  [Countries.KP]: 'Democratic People\'s Republic of Korea (North Korea)',
  [Countries.KR]: 'Republic of Korea (South Korea)',
  [Countries.KW]: 'Kuwait',
  [Countries.KG]: 'Kyrgyzstan',
  [Countries.LA]: 'Lao People\'s Democratic Republic',
  [Countries.LV]: 'Latvia',
  [Countries.LB]: 'Lebanon',
  [Countries.LS]: 'Lesotho',
  [Countries.LR]: 'Liberia',
  [Countries.LY]: 'Libya',
  [Countries.LI]: 'Liechtenstein',
  [Countries.LT]: 'Lithuania',
  [Countries.LU]: 'Luxembourg',
  [Countries.MO]: 'Macao',
  [Countries.MK]: 'North Macedonia',
  [Countries.MG]: 'Madagascar',
  [Countries.MW]: 'Malawi',
  [Countries.MY]: 'Malaysia',
  [Countries.MV]: 'Maldives',
  [Countries.ML]: 'Mali',
  [Countries.MT]: 'Malta',
  [Countries.MH]: 'Marshall Islands',
  [Countries.MQ]: 'Martinique',
  [Countries.MR]: 'Mauritania',
  [Countries.MU]: 'Mauritius',
  [Countries.YT]: 'Mayotte',
  [Countries.MX]: 'Mexico',
  [Countries.FM]: 'Federated States of Micronesia',
  [Countries.MD]: 'Moldova',
  [Countries.MC]: 'Monaco',
  [Countries.MN]: 'Mongolia',
  [Countries.MS]: 'Montserrat',
  [Countries.MA]: 'Morocco',
  [Countries.MZ]: 'Mozambique',
  [Countries.MM]: 'Myanmar (Burma)',
  [Countries.NA]: 'Namibia',
  [Countries.NR]: 'Nauru',
  [Countries.NP]: 'Nepal',
  [Countries.NL]: 'Netherlands',
  [Countries.AN]: 'Netherlands Antilles (until 2010)',
  [Countries.NC]: 'New Caledonia',
  [Countries.NZ]: 'New Zealand',
  [Countries.NI]: 'Nicaragua',
  [Countries.NE]: 'Niger',
  [Countries.NG]: 'Nigeria',
  [Countries.NU]: 'Niue',
  [Countries.NF]: 'Norfolk Island',
  [Countries.MP]: 'Northern Mariana Islands',
  [Countries.NO]: 'Norway',
  [Countries.OM]: 'Oman',
  [Countries.PK]: 'Pakistan',
  [Countries.PW]: 'Palau',
  [Countries.PS]: 'Palestinian Territories',
  [Countries.PA]: 'Panama',
  [Countries.PG]: 'Papua New Guinea',
  [Countries.PY]: 'Paraguay',
  [Countries.PE]: 'Peru',
  [Countries.PH]: 'Philippines',
  [Countries.PN]: 'Pitcairn Islands',
  [Countries.PL]: 'Poland',
  [Countries.PT]: 'Portugal',
  [Countries.PR]: 'Puerto Rico',
  [Countries.QA]: 'Qatar',
  [Countries.RE]: 'Réunion',
  [Countries.RO]: 'Romania',
  [Countries.RU]: 'Russia',
  [Countries.RW]: 'Rwanda',
  [Countries.SH]: 'Saint Helena',
  [Countries.KN]: 'Saint Kitts and Nevis',
  [Countries.LC]: 'Saint Lucia',
  [Countries.PM]: 'Saint Pierre and Miquelon',
  [Countries.VC]: 'Saint Vincent and the Grenadines',
  [Countries.WS]: 'Samoa',
  [Countries.SM]: 'San Marino',
  [Countries.ST]: 'Sao Tome and Principe',
  [Countries.SA]: 'Saudi Arabia',
  [Countries.SN]: 'Senegal',
  [Countries.CS]: 'Serbia and Montenegro (until 2006)',
  [Countries.SC]: 'Seychelles',
  [Countries.SL]: 'Sierra Leone',
  [Countries.SG]: 'Singapore',
  [Countries.SK]: 'Slovakia',
  [Countries.SI]: 'Slovenia',
  [Countries.SB]: 'Solomon Islands',
  [Countries.SO]: 'Somalia',
  [Countries.ZA]: 'South Africa',
  [Countries.GS]: 'South Georgia and the South Sandwich Islands',
  [Countries.ES]: 'Spain',
  [Countries.LK]: 'Sri Lanka',
  [Countries.SD]: 'Sudan',
  [Countries.SR]: 'Suriname',
  [Countries.SJ]: 'Svalbard and Jan Mayen',
  [Countries.SZ]: 'Eswatini',
  [Countries.SE]: 'Sweden',
  [Countries.CH]: 'Switzerland',
  [Countries.SY]: 'Syrian Arab Republic',
  [Countries.TW]: 'Taiwan',
  [Countries.TJ]: 'Tajikistan',
  [Countries.TZ]: 'Tanzania',
  [Countries.TH]: 'Thailand',
  [Countries.TL]: 'Timor-Leste',
  [Countries.TG]: 'Togo',
  [Countries.TK]: 'Tokelau',
  [Countries.TO]: 'Tonga',
  [Countries.TT]: 'Trinidad and Tobago',
  [Countries.TN]: 'Tunisia',
  [Countries.TR]: 'Turkey',
  [Countries.TM]: 'Turkmenistan',
  [Countries.TC]: 'Turks and Caicos Islands',
  [Countries.TV]: 'Tuvalu',
  [Countries.UG]: 'Uganda',
  [Countries.UA]: 'Ukraine',
  [Countries.AE]: 'United Arab Emirates',
  [Countries.GB]: 'United Kingdom',
  [Countries.US]: 'United States',
  [Countries.UM]: 'United States Minor Outlying Islands',
  [Countries.UY]: 'Uruguay',
  [Countries.UZ]: 'Uzbekistan',
  [Countries.VU]: 'Vanuatu',
  [Countries.VE]: 'Venezuela',
  [Countries.VN]: 'Vietnam',
  [Countries.VG]: 'British Virgin Islands',
  [Countries.VI]: 'U.S. Virgin Islands',
  [Countries.WF]: 'Wallis and Futuna',
  [Countries.EH]: 'Western Sahara',
  [Countries.YE]: 'Yemen',
  [Countries.ZM]: 'Zambia',
  [Countries.ZW]: 'Zimbabwe',
};

const countryColors: { [key in Countries]: string } = {
  [Countries.AF]: '#FF5733',
  [Countries.AX]: '#DAF7A6',
  [Countries.AL]: '#FFC300',
  [Countries.DZ]: '#C70039',
  [Countries.AS]: '#900C3F',
  [Countries.AD]: '#581845',
  [Countries.AO]: '#FF0000',
  [Countries.AI]: '#00FF00',
  [Countries.AQ]: '#0000FF',
  [Countries.AG]: '#FFFF00',
  [Countries.AR]: '#FF00FF',
  [Countries.AM]: '#00FFFF',
  [Countries.AW]: '#800000',
  [Countries.AU]: '#008000',
  [Countries.AT]: '#800080',
  [Countries.AZ]: '#1F6347',
  [Countries.BS]: '#4682B4',
  [Countries.BH]: '#FF1493',
  [Countries.BD]: '#1E90FF',
  [Countries.BB]: '#32CD32',
  [Countries.BY]: '#FFD700',
  [Countries.BE]: '#FF8C00',
  [Countries.BZ]: '#D2691E',
  [Countries.BJ]: '#9ACD32',
  [Countries.BM]: '#F0E68C',
  [Countries.BT]: '#C71585',
  [Countries.BO]: '#FF4500',
  [Countries.BA]: '#DAA520',
  [Countries.BW]: '#B22222',
  [Countries.BV]: '#FF6347',
  [Countries.BR]: '#FF69B4',
  [Countries.IO]: '#8A2BE2',
  [Countries.BN]: '#A52A2A',
  [Countries.BG]: '#5F9EA0',
  [Countries.BF]: '#D2B48C',
  [Countries.BI]: '#ADFF2F',
  [Countries.KH]: '#D3D3D3',
  [Countries.CM]: '#90EE90',
  [Countries.CA]: '#FF4500',
  [Countries.CV]: '#C71585',
  [Countries.KY]: '#6495ED',
  [Countries.CF]: '#FFD700',
  [Countries.TD]: '#00FA9A',
  [Countries.CL]: '#FF6347',
  [Countries.CN]: '#FF1493',
  [Countries.CX]: '#FF8C00',
  [Countries.CC]: '#2E8B57',
  [Countries.CO]: '#FF00F1',
  [Countries.KM]: '#7B68EE',
  [Countries.CG]: '#6A5ACD',
  [Countries.CD]: '#FF00F1',
  [Countries.CK]: '#8B4513',
  [Countries.CR]: '#D2691E',
  [Countries.CI]: '#FF450F',
  [Countries.HR]: '#E6E6FA',
  [Countries.CU]: '#FFA07A',
  [Countries.CY]: '#F08080',
  [Countries.CZ]: '#FF00FF',
  [Countries.DK]: '#800080',
  [Countries.DJ]: '#D2B48C',
  [Countries.DM]: '#F16347',
  [Countries.DO]: '#F44500',
  [Countries.EC]: '#FFD700',
  [Countries.EG]: '#00FF00', 
  [Countries.SV]: '#D3F3D3',
  [Countries.GQ]: '#FF6347',
  [Countries.ER]: '#8B0000',
  [Countries.EE]: '#BFC4DE',
  [Countries.ET]: '#B2222F',
  [Countries.FK]: '#DCDCDC',
  [Countries.FO]: '#C0C0C0',
  [Countries.FJ]: '#FA8072',
  [Countries.FI]: '#A3D3D3',
  [Countries.FR]: '#FF1493',
  [Countries.GF]: '#BF4500',
  [Countries.PF]: '#DAA520',
  [Countries.TF]: '#CE8B57',
  [Countries.GA]: '#B22222',
  [Countries.GM]: '#00FF00',
  [Countries.GE]: '#4682B4',
  [Countries.DE]: '#D3D3D3',
  [Countries.GH]: '#DF4500',
  [Countries.GI]: '#EE8B57',
  [Countries.GR]: '#8A2BE2',
  [Countries.GL]: '#B0C4DE',
  [Countries.GD]: '#FF634F',
  [Countries.GP]: '#0F4500',
  [Countries.GU]: '#2E8B57',
  [Countries.GT]: '#1F6347',
  [Countries.GG]: '#8B4513',
  [Countries.GN]: '#2FD700',
  [Countries.GW]: '#32CD32',
  [Countries.GY]: '#F34500',
  [Countries.HT]: '#00FA9A',
  [Countries.HM]: '#4F6347',
  [Countries.VA]: '#F54500',
  [Countries.HN]: '#6AA520',
  [Countries.HK]: '#F76347',
  [Countries.HU]: '#8FD700',
  [Countries.IS]: '#FF4509',
  [Countries.IN]: '#FFD700',
  [Countries.ID]: '#AF6347',
  [Countries.IR]: '#AA2BE2',
  [Countries.IQ]: '#DAA520',
  [Countries.IE]: '#8B0000',
  [Countries.IM]: '#BF6347',
  [Countries.IL]: '#FC4500',
  [Countries.IT]: '#2E8B57',
  [Countries.JM]: '#00FF00',
  [Countries.JP]: '#CA2BE2',
  [Countries.JE]: '#FDD700',
  [Countries.JO]: '#FE6347',
  [Countries.KZ]: '#32CD32',
  [Countries.KE]: '#D2BF8C',
  [Countries.KI]: '#C71585',
  [Countries.KP]: '#6F4500',
  [Countries.KR]: '#FF1700',
  [Countries.KW]: '#8B4513',
  [Countries.KG]: '#FF2347',
  [Countries.LA]: '#D333D3',
  [Countries.LV]: '#F$D700',
  [Countries.LB]: '#258B57',
  [Countries.LS]: '#6F4500',
  [Countries.LR]: '#F76347',
  [Countries.LY]: '#8F4500',
  [Countries.LI]: '#892BE2',
  [Countries.LT]: '#DAB48C',
  [Countries.LU]: '#8B000B',
  [Countries.MO]: '#FFD70C',
  [Countries.MK]: '#FF450D',
  [Countries.MG]: '#2E8B5E',
  [Countries.MW]: '#FF634F',
  [Countries.MY]: '#FF4100',
  [Countries.MV]: '#F2D700',
  [Countries.ML]: '#8A2BE7',
  [Countries.MT]: '#DAA520',
  [Countries.MH]: '#D3D3D3',
  [Countries.MQ]: '#114500',
  [Countries.MR]: '#12D700',
  [Countries.MU]: '#136347',
  [Countries.YT]: '#148B57',
  [Countries.MX]: '#154500',
  [Countries.FM]: '#16B48C',
  [Countries.MD]: '#8B0000',
  [Countries.MC]: '#16D700',
  [Countries.MN]: '#F17347',
  [Countries.MS]: '#182BE2',
  [Countries.MA]: '#194500',
  [Countries.MZ]: '#20D700',
  [Countries.MM]: '#216347',
  [Countries.NA]: '#224500',
  [Countries.NR]: '#223B57',
  [Countries.NP]: '#24D700',
  [Countries.NL]: '#256347',
  [Countries.AN]: '#262BE2',
  [Countries.NC]: '#27B48C',
  [Countries.NZ]: '#8B0000',
  [Countries.NI]: '#28D700',
  [Countries.NE]: '#296347',
  [Countries.NG]: '#2E8B57',
  [Countries.NU]: '#304500',
  [Countries.NF]: '#D2B48C',
  [Countries.MP]: '#8A2BE2',
  [Countries.NO]: '#31D700',
  [Countries.OM]: '#326347',
  [Countries.PK]: '#334500',
  [Countries.PW]: '#8A2BE2',
  [Countries.PS]: '#34D700',
  [Countries.PA]: '#356347',
  [Countries.PG]: '#368B57',
  [Countries.PY]: '#374500',
  [Countries.PE]: '#38D700',
  [Countries.PH]: '#396347',
  [Countries.PN]: '#408B57',
  [Countries.PL]: '#414500',
  [Countries.PT]: '#42D700',
  [Countries.PR]: '#436347',
  [Countries.QA]: '#442BE2',
  [Countries.RE]: '#458B57',
  [Countries.RO]: '#46D700',
  [Countries.RU]: '#474500',
  [Countries.RW]: '#482BE2',
  [Countries.SH]: '#49D700',
  [Countries.KN]: '#506347',
  [Countries.LC]: '#51D700',
  [Countries.PM]: '#524500',
  [Countries.VC]: '#432BE2',
  [Countries.WS]: '#54D700',
  [Countries.SM]: '#556347',
  [Countries.ST]: '#568B57',
  [Countries.SA]: '#574500',
  [Countries.SN]: '#582BE2', 
  [Countries.CS]: '#59D700',
  [Countries.SC]: '#606347',
  [Countries.SL]: '#612BE2',
  [Countries.SG]: '#62D700',
  [Countries.SK]: '#634500',
  [Countries.SI]: '#648B57',
  [Countries.SB]: '#656347',
  [Countries.SO]: '#66D700',
  [Countries.ZA]: '#674500',
  [Countries.GS]: '#8682BE',
  [Countries.ES]: '#69D700',
  [Countries.LK]: '#706347',
  [Countries.SD]: '#718B57',
  [Countries.SR]: '#724500',
  [Countries.SJ]: '#73D700',
  [Countries.SZ]: '#746347',
  [Countries.SE]: '#2E8B57',
  [Countries.CH]: '#754500',
  [Countries.SY]: '#76D700',
  [Countries.TW]: '#8A2BE2',
  [Countries.TJ]: '#776347',
  [Countries.TZ]: '#78D700',
  [Countries.TH]: '#794500',
  [Countries.TL]: '#2E8B57',
  [Countries.TG]: '#806347',
  [Countries.TK]: '#81D700',
  [Countries.TO]: '#824500',
  [Countries.TT]: '#2E8B57',
  [Countries.TN]: '#83D700',
  [Countries.TR]: '#844500',
  [Countries.TM]: '#85D700',
  [Countries.TC]: '#866347',
  [Countries.TV]: '#87D700',
  [Countries.UG]: '#8A2BE2',
  [Countries.UA]: '#884500',
  [Countries.AE]: '#89D700',
  [Countries.GB]: '#906347',
  [Countries.US]: '#2E8B57',
  [Countries.UM]: '#914500',
  [Countries.UY]: '#92D700',
  [Countries.UZ]: '#936347',
  [Countries.VU]: '#94D700',
  [Countries.VE]: '#954500',
  [Countries.VN]: '#96D700',
  [Countries.VG]: '#8A2BE2',
  [Countries.VI]: '#976347',
  [Countries.WF]: '#98D700',
  [Countries.EH]: '#994500',
  [Countries.YE]: '#AAD700',
  [Countries.ZM]: '#BB6347',
  [Countries.ZW]: '#CCD700',
};

export const getCountriesData = (countries: CountryUsageData[]) => {
  return countries.map(country => ({
    name: countryNames[country.country],
    value: country.number,
    color: countryColors[country.country],
  })).sort((c1, c2) => c2.value - c1.value).slice(0, 12);
}
