function buscaFecha() {
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo',
    'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var yy = date.getYear();
    var year = (yy<1000)? (yy+1900): yy;
    return( day + " de " + meses[month] + " de " + year)
}

let today = document.querySelector("#fecha");
today.innerHTML = buscaFecha();


//estos datos saldrían del back-end llamando a una API y dandoles un formato mas conveniente
var criptos = { btc:[12937.2,28972.4,61002.31],eth:[409.57,737.15,4092.41],xrp:[0.255,0.2195,1.087],ada:[0.1081,0.1817,2.15],
    doge:[0.00265,0.004619,0.2481],ltc:[55.45,124.38,194.79],xmr:[126.31,156.48,265.08]
};


var merval = { alua:[52.3,47.2,71.8],bbar:[156.1,155.64,274.55],bma:[234.85,227.3,357.25],byma:[539.5,616,792],
    cepu:[35.9,40.75,83.85],come:[2.49,2.83,5.39],cres:[64.5,51.9,113],cvh:[423.5,426.5,475.5],
    edn:[28.6,29.25,73.05],ggal:[125.75,119.9,228.9],harg:[123.75,119.75,182],loma:[180.75,157.8,279.05],mirg:[1596,1285,4011],
    pamp:[77.65,84.3,162.5],supv:[62.5,59.25,99.85],teco2:[126.31,156.48,212.55],tgno4:[41.85,49.1,103.25],
    tgsu2:[153.15,170.6,232.8],tran:[29.25,30.7,68],txar:[46.25,53.4,104.5],valo:[29.05,27.4,25.95],
    ypfd:[693.85,622.65,905.1]
};


var adrs = {'BBAR': [2.65, 3.21, 4.13], 'BMA': [12.9, 15.57, 17.63], 'CAAP': [2.12, 3.99, 5.94], 'CEPU': [2.29, 2.7, 4.13], 
    'CRESY': [2.90, 4.7, 5.64],
    'DESP': [7.01, 12.81, 11.43], 'EDN': [3.39, 4.24, 7.24],'GGAL': [6.60, 8.88, 11.41], 'GLOB': [192.0, 217.61, 305.07], 
    'IRCP': [1.73, 2.191142191142191, 2.77],
    'IRS': [2.8516385302879845, 4.51, 4.86], 'LOMA': [4.36, 6.15, 6.88], 'MELI': [1294.32, 1675.22, 1503.78],
    'PAM': [11.39, 13.78, 20.11], 'SUPV': [1.66, 2.12, 2.43], 'TEO': [7.1417, 6.56, 5.23], 'TGS': [4.72, 5.2, 5.79], 
    'TS': [10.42, 15.95, 23.06], 'TX': [21.02, 29.08, 44.24], 'VIST': [2.18, 2.56, 6.75], 'YPF': [3.45, 4.7, 4.47]
};


var bonos = { al29d:[42.1,42.35,36.81],al30d:[40.1,40.94,35.82],al35d:[35,36.5,33.2],al41d:[34.6,35.9,35.61],
    gd29d:[48,44.9,39],gd30d:[41.5,41.59,37.7],gd35d:[37.2,37.1,33.2],gd38d:[43.5,41.6,40.33],
    gd46d:[36.5,37.7,34]
};


var mercados = { merval:[311.03,365.22,484.57],bov:[18025.77,22955.51,18812],spy:[3465.4,3756.1,4544],qqq:[11548.3,12888.3,15090],
    eem:[46.32,51.67,52.04],csi:[4718.49,5211.29,4959],oro:[1901.17,1897.9,1793],petr:[39.76,48.45,83.98],
    soja:[1081.63,1313.38,1219],gas:[330.88,424.50,732.6]
};


var wallstreet = {'AAPL': [115.75, 133.72, 148.69], 'AMD': [79.42, 92.29, 119.82], 'AMZN': [3176.4, 3285.85, 3335.55], 
    'BA': [169.07, 216.67, 212.97], 'BABA': [306.28, 238.39, 177.7], 'BBD': [3.690909090909091, 4.790909090909091, 3.6], 
    'BAC': [24.87, 29.98, 47.57], 'BRK.B': [211.61, 229.65, 289.24], 'C': [43.95, 60.86, 71.37], 'DIS': [127.56, 181.17, 169.42],
    'FB': [278.12, 271.87, 324.61], 'GE': [61.76, 85.68, 104.05], 'GOLD': [26.89, 23.24, 19.48], 'GOOGL': [1606.66, 1736.25, 2751.33],
    'GS': [205.4, 259.45, 414.32], 'IBM': [115.76, 124.34, 127.88],'INTC': [53.9, 48.75, 49.46],
    'JNJ': [145.08, 156.05, 163.72], 'JPM': [102.88, 125.36, 171.78],
    'KO': [50.68, 54.44, 54.45], 'MSFT': [214.89, 221.68, 309.16], 'NFLX': [485.23, 524.59, 664.78], 'NVDA': [133.61, 131.4575, 227.26],
    'PBR': [7.45, 11.21, 9.95], 'PG': [141.45, 137.77, 140.83], 'PYPL': [203.93, 231.51, 240.4], 'T': [28.28, 28.49, 25.49],
    'TSLA': [425.79, 694.78, 909.68], 'TWTR': [50.28, 54.33, 62.24], 'V': [197.99, 218.36, 231.23], 'VALE': [11.3, 16.95, 13.52],
    'WMT': [143.55, 144.18, 148.34], 'X': [9.36, 16.84, 22.88], 'XOM': [34.86, 41.6, 63.12]
};


const rendimientos = (lista) => {
    rendim=[];
    let ytd = Math.round((lista[2]/lista[1]-1)*10000)/100;
    let yty = Math.round((lista[2]/lista[0]-1)*10000)/100;
    let ytdr = Math.round(((lista[2]/lista[1]/1.053)-1)*10000)/100;
    let ytyr = Math.round(((lista[2]/lista[0]/1.054)-1)*10000)/100;
    rendim.push(ytd,yty,ytdr,ytyr);
    return rendim
};

const rendimientosPesos = (lista) => {
    rendim=[];
    let ytd = Math.round((lista[2]/lista[1]-1)*10000)/100;
    let yty = Math.round((lista[2]/lista[0]-1)*10000)/100;
    let ytdr = Math.round(((lista[2]/lista[1]/1.37)-1)*10000)/100;
    let ytyr = Math.round(((lista[2]/lista[0]/1.525)-1)*10000)/100;
    rendim.push(ytd,yty,ytdr,ytyr);
    return rendim
};

const rendimientoDoge = (lista) => {
    rendim=[];
    let ytd = Math.round((lista[2]/lista[1]-1)*100);
    let yty = Math.round((lista[2]/lista[0]-1)*100);
    let ytdr = Math.round(((lista[2]/lista[1]/1.053)-1)*100);
    let ytyr = Math.round(((lista[2]/lista[0]/1.054)-1)*100);
    rendim.push(ytd,yty,ytdr,ytyr);
    return rendim
};



// poco elegante manera de resolver esto... pero salió de milagro.. por eso lo dejo así
const BTC = rendimientos(criptos["btc"]);
const listaBTC = document.querySelectorAll("#cripto .Bitcoin .data");
for (let i = 0; i < listaBTC.length; i++) { 
    listaBTC[i].innerHTML=BTC[i];
}

const ETH = rendimientos(criptos["eth"]);
const listaETH = document.querySelectorAll("#cripto .Ethereum .data");
for (let i = 0; i < listaETH.length; i++) { 
    listaETH[i].innerHTML=ETH[i];
}

const XRP = rendimientos(criptos["xrp"]);
const listaXRP = document.querySelectorAll("#cripto .Ripple .data");
for (let i = 0; i < listaXRP.length; i++) { 
    listaXRP[i].innerHTML=XRP[i];
}

const ADA = rendimientos(criptos["ada"]);
const listaADA = document.querySelectorAll("#cripto .Cardano .data");
for (let i = 0; i < listaADA.length; i++) { 
    listaADA[i].innerHTML=ADA[i];
}

const DOGE = rendimientoDoge(criptos["doge"]);
const listaDOGE = document.querySelectorAll("#cripto .Doge_Coin .data");
for (let i = 0; i < listaDOGE.length; i++) { 
    listaDOGE[i].innerHTML=DOGE[i];
}

const LTC = rendimientos(criptos["ltc"]);
const listaLTC = document.querySelectorAll("#cripto .Litecoin .data");
for (let i = 0; i < listaLTC.length; i++) { 
    listaLTC[i].innerHTML=LTC[i];
}

const XRM = rendimientos(criptos["xmr"]);
const listaXRM = document.querySelectorAll("#cripto .Monero .data");
for (let i = 0; i < listaXRM.length; i++) { 
    listaXRM[i].innerHTML=XRM[i];
}


//merval
const ALUA = rendimientosPesos(merval["alua"]);
const listaALUA = document.querySelectorAll("#merval .ALUA .data");
for (let i = 0; i < listaALUA.length; i++) { 
    listaALUA[i].innerHTML=ALUA[i];
}

const BBAR = rendimientosPesos(merval["bbar"]);
const listaBBAR = document.querySelectorAll("#merval .BBAR .data");
for (let i = 0; i < listaBBAR.length; i++) { 
    listaBBAR[i].innerHTML=BBAR[i];
}

const BMA = rendimientosPesos(merval["bma"]);
const listaBMA = document.querySelectorAll("#merval .BMA .data");
for (let i = 0; i < listaBMA.length; i++) { 
    listaBMA[i].innerHTML=BMA[i];
}

const BYMA = rendimientosPesos(merval["byma"]);
const listaBYMA = document.querySelectorAll("#merval .BYMA .data");
for (let i = 0; i < listaBYMA.length; i++) { 
    listaBYMA[i].innerHTML=BYMA[i];
}

const CEPU = rendimientosPesos(merval["cepu"]);
const listaCEPU = document.querySelectorAll("#merval .CEPU .data");
for (let i = 0; i < listaCEPU.length; i++) { 
    listaCEPU[i].innerHTML=CEPU[i];
}

const COME = rendimientosPesos(merval["come"]);
const listaCOME = document.querySelectorAll("#merval .COME .data");
for (let i = 0; i < listaCOME.length; i++) { 
    listaCOME[i].innerHTML=COME[i];
}

const CRES = rendimientosPesos(merval["cres"]);
const listaCRES = document.querySelectorAll("#merval .CRES .data");
for (let i = 0; i < listaCRES.length; i++) { 
    listaCRES[i].innerHTML=CRES[i];
}

const CVH = rendimientosPesos(merval["cvh"]);
const listaCVH = document.querySelectorAll("#merval .CVH .data");
for (let i = 0; i < listaCVH.length; i++) { 
    listaCVH[i].innerHTML=CVH[i];
}

const EDN = rendimientosPesos(merval["edn"]);
const listaEDN = document.querySelectorAll("#merval .EDN .data");
for (let i = 0; i < listaEDN.length; i++) { 
    listaEDN[i].innerHTML=EDN[i];
}

const GGAL = rendimientosPesos(merval["ggal"]);
const listaGGAL = document.querySelectorAll("#merval .GGAL .data");
for (let i = 0; i < listaGGAL.length; i++) { 
    listaGGAL[i].innerHTML=GGAL[i];
}

const HARG = rendimientosPesos(merval["harg"]);
const listaHARG = document.querySelectorAll("#merval .HARG .data");
for (let i = 0; i < listaHARG.length; i++) { 
    listaHARG[i].innerHTML=HARG[i];
}

const LOMA = rendimientosPesos(merval["loma"]);
const listaLOMA = document.querySelectorAll("#merval .LOMA .data");
for (let i = 0; i < listaLOMA.length; i++) { 
    listaLOMA[i].innerHTML=LOMA[i];
}

const MIRG = rendimientosPesos(merval["mirg"]);
const listaMIRG = document.querySelectorAll("#merval .MIRG .data");
for (let i = 0; i < listaMIRG.length; i++) { 
    listaMIRG[i].innerHTML=MIRG[i];
}

const PAMP = rendimientosPesos(merval["pamp"]);
const listaPAMP = document.querySelectorAll("#merval .PAMP .data");
for (let i = 0; i < listaPAMP.length; i++) { 
    listaPAMP[i].innerHTML=PAMP[i];
}

const SUPV = rendimientosPesos(merval["supv"]);
const listaSUPV = document.querySelectorAll("#merval .SUPV .data");
for (let i = 0; i < listaSUPV.length; i++) { 
    listaSUPV[i].innerHTML=SUPV[i];
}

const TECO = rendimientosPesos(merval["teco2"]);
const listaTECO = document.querySelectorAll("#merval .TECO2 .data");
for (let i = 0; i < listaTECO.length; i++) { 
    listaTECO[i].innerHTML=TECO[i];
}

const TGNO = rendimientosPesos(merval["tgno4"]);
const listaTGNO = document.querySelectorAll("#merval .TGNO4 .data");
for (let i = 0; i < listaTGNO.length; i++) { 
    listaTGNO[i].innerHTML=TGNO[i];
}

const TGSU = rendimientosPesos(merval["tgsu2"]);
const listaTGSU = document.querySelectorAll("#merval .TGSU2 .data");
for (let i = 0; i < listaTGSU.length; i++) { 
    listaTGSU[i].innerHTML=TGSU[i];
}

const TRAN = rendimientosPesos(merval["tran"]);
const listaTRAN = document.querySelectorAll("#merval .TRAN .data");
for (let i = 0; i < listaTRAN.length; i++) { 
    listaTRAN[i].innerHTML=TRAN[i];
}

const TXAR = rendimientosPesos(merval["txar"]);
const listaTXAR = document.querySelectorAll("#merval .TXAR .data");
for (let i = 0; i < listaTXAR.length; i++) { 
    listaTXAR[i].innerHTML=TXAR[i];
}

const VALO = rendimientosPesos(merval["valo"]);
const listaVALO = document.querySelectorAll("#merval .VALO .data");
for (let i = 0; i < listaVALO.length; i++) { 
    listaVALO[i].innerHTML=VALO[i];
}

const YPFD = rendimientosPesos(merval["ypfd"]);
const listaYPFD = document.querySelectorAll("#merval .YPFD .data");
for (let i = 0; i < listaYPFD.length; i++) { 
    listaYPFD[i].innerHTML=YPFD[i];
}



// mercado internacional

const MERV = rendimientos(mercados["merval"]);
const listaMERV = document.querySelectorAll("#mercado_int .merv .data");
for (let i = 0; i < listaMERV.length; i++) { 
    listaMERV[i].innerHTML=MERV[i];
}

const BOVES = rendimientos(mercados["bov"]);
const listaBOVES = document.querySelectorAll("#mercado_int .boves .data");
for (let i = 0; i < listaBOVES.length; i++) { 
    listaBOVES[i].innerHTML=BOVES[i];
}
const SPY = rendimientos(mercados["spy"]);
const listaSPY = document.querySelectorAll("#mercado_int .syp500 .data");
for (let i = 0; i < listaSPY.length; i++) { 
    listaSPY[i].innerHTML=SPY[i];
}

const QQQ = rendimientos(mercados["qqq"]);
const listaQQQ = document.querySelectorAll("#mercado_int .qqq .data");
for (let i = 0; i < listaQQQ.length; i++) { 
    listaQQQ[i].innerHTML=QQQ[i];
}

const EEM = rendimientos(mercados["eem"]);
const listaEEM = document.querySelectorAll("#mercado_int .eem .data");
for (let i = 0; i < listaEEM.length; i++) { 
    listaEEM[i].innerHTML=EEM[i];
}

const CSI = rendimientos(mercados["csi"]);
const listaCSI = document.querySelectorAll("#mercado_int .csi .data");
for (let i = 0; i < listaCSI.length; i++) { 
    listaCSI[i].innerHTML=CSI[i];
}

const ORO = rendimientos(mercados["oro"]);
const listaORO = document.querySelectorAll("#mercado_int .oro .data");
for (let i = 0; i < listaORO.length; i++) { 
    listaORO[i].innerHTML=ORO[i];
}

const WTI = rendimientos(mercados["petr"]);
const listaWTI = document.querySelectorAll("#mercado_int .petrol .data");
for (let i = 0; i < listaWTI.length; i++) { 
    listaWTI[i].innerHTML=WTI[i];
}

const SOJA = rendimientos(mercados["soja"]);
const listaSOJA = document.querySelectorAll("#mercado_int .soja .data");
for (let i = 0; i < listaSOJA.length; i++) { 
    listaSOJA[i].innerHTML=SOJA[i];
}

const GAS = rendimientos(mercados["gas"]);
const listaGAS = document.querySelectorAll("#mercado_int .gas .data");
for (let i = 0; i < listaGAS.length; i++) { 
    listaGAS[i].innerHTML=GAS[i];
}




// adrs Quise hacerlo mejor xq sino es un copy-paste interminable... sale pero hay un error desconocido...

const listaADRs = ["BBAR","BMA","CAAP","CEPU","CRESY","DESP","EDN","GGAL","GLOB","IRCP","IRS","LOMA","MELI",
"PAM","SUPV","TEO","TGS","TS","TX","VIST","YPF"];

const ADRsRendimientos = [];

for(var i in listaADRs ){
    ADRsRendimientos.push(rendimientos(adrs[listaADRs[i]]));  
};

const listaselectores = ["bbar","bma","caap","cepu","cresy","desp","edn","ggal","glob","ircp","irs","loma","meli",
"pamp","supv","teo","tgs","ts","tx","vist","ypf"];

const listatds =[];

for (var i in listaselectores){
    listatds.push(document.querySelectorAll(`#adrs .${listaselectores[i]} .data`));  
};

for (let i = 0; i < listatds.length; i++) { 
    for (let j = 0; j < ADRsRendimientos.length; j++){
        try{
            listatds[j][i].innerHTML=ADRsRendimientos[j][i]; 
        }catch (error){
            console.error(error);
        }    
    };
};

//EEUU ACCIONES

const listaEEUU = ["AAPL","AMD","AMZN","BA","BABA","BBD","BAC","BRK.B","C","DIS","FB","GE","GOLD","GOOGL",
"GS","IBM","INTC","JNJ","JPM","KO","MSFT","NFLX","NVDA","PBR","PG","PYPL","T","TSLA","TWTR",
"V","VALE","WMT","X","XOM"];

const EEUURendimientos= [];

for(var i in listaEEUU ){
    EEUURendimientos.push(rendimientos(wallstreet[listaEEUU[i]]));  
};

const listaselectoresEEUU = ["aapl","amd","amzn","ba","baba","bbd","bac","brkb","c","dis","fb","ge","gold","googl","gs","ibm","intc",
"jnj","jpm","ko","msft","nflx","nvda","pbr","pg","pypl","t","tsla","twtr","v","vale","wmt","x","xom"];

const listatdsEEUU =[];

for (var i in listaselectoresEEUU){
    listatdsEEUU.push(document.querySelectorAll(`#acciones_usa .${listaselectoresEEUU[i]} .data`));  
};

for (let i = 0; i < listatdsEEUU.length; i++) { 
    for (let j = 0; j < EEUURendimientos.length; j++){
        try{
            listatdsEEUU[j][i].innerHTML=EEUURendimientos[j][i]; 
        }catch (error){
            console.error(error);
        }    
    };
};


const EEUUprecios = []; 

for (const key in wallstreet) {
    EEUUprecios.push(wallstreet[key][2]);
}

const Selec_preciosEEUU = [];

for (var i in listaselectoresEEUU){
    Selec_preciosEEUU.push(document.querySelectorAll(`#acciones_usa .${listaselectoresEEUU[i]} .precio`));  
};

for (let i = 0; i < Selec_preciosEEUU.length; i++) {
    Selec_preciosEEUU[i][0].innerHTML=EEUUprecios[i];
}



//bonos


const listaBONOS = ["al29d","al30d","al35d","al41d","gd29d","gd30d","gd35d","gd38d","gd46d"];

const BONOSRendimientos = [];

for(var i in listaBONOS ){
    BONOSRendimientos.push(rendimientos(bonos[listaBONOS[i]]));  
};

const listaselectoresB = ["al29","al30","al35","al41","gd29","gd30","gd35","gd38","gd46"];

const listatdsB =[];

for (var i in listaselectoresB){
    listatdsB.push(document.querySelectorAll(`#bonos_usd .${listaselectoresB[i]} .data`));  
};

for (let i = 0; i < listatdsB.length; i++) { 
    for (let j = 0; j < BONOSRendimientos.length; j++){
        try{
            listatdsB[j][i].innerHTML=BONOSRendimientos[j][i]; 
        }catch (error){
            console.error(error);
        }    
    };
};


// se debería hacer un for anidado con alguna condicion porque parece q asigna texto html a cosas undefined....
// el codigo funciona pero con error.. 
// para solucionarlo habría que llegar a un for que construya esto:

// listatdsB[0][0].innerHTML=BONOSRendimientos[0][0];
// listatdsB[0][1].innerHTML=BONOSRendimientos[0][1];
// listatdsB[0][2].innerHTML=BONOSRendimientos[0][2];
// listatdsB[0][3].innerHTML=BONOSRendimientos[0][3];
// listatdsB[1][0].innerHTML=BONOSRendimientos[1][0];
// listatdsB[1][1].innerHTML=BONOSRendimientos[1][1];
// y Asi... 
// el codigo de abajo es mi mejor intento pero no funciona...

// var i=0;
// while (i<4){
//     for (let i = 0; i < listatdsB.length; i++) { 
//         for (let j = 0; j < BONOSRendimientos.length; j++){
//             if( i <= j ){
//                 listatdsB[j][i].innerHTML=BONOSRendimientos[j][i]; 
//             };
//         };
//     };
//     i=i+1;
// };
