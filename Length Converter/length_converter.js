function CalcLen() {
    var len1 = Number(document.getElementById("len1").value);
    if (validLen(len1)) {
        //calculate
        var len1Unit = document.getElementById("len1Unit").value; 
        var len2Unit = document.getElementById("len2Unit").value;
        var res = Number(document.getElementById("result").value);
        var mmL = Number(mmLength(len1Unit, len1));
        res = Number(finalLength(len2Unit, mmL));
        document.getElementById("result").innerHTML = res;
        //console.log(res);
    }
}

function validLen(len1) {
    if (len1 <= 0) {
        alert("Please enter a valid length.");
        return false;
    }
    return true;
}

function mmLength(Unit1, len) {
    var mmLen = 0;
    switch (Unit1) {
        case "mm":
            mmLen = len;
            break;
        case "cm":
            mmLen = len * 10;
            break;
        case "m":
            mmLen = len * 1000;
            break;
        case "km":
            mmLen = len * 1000000;
            break;
        case "inch":
            mmLen = len * 25.4;
            break;
        case "ft":
            mmLen = len * 304.8;
            break;
        case "yrd":
            mmLen = len * 914.4;
            break;
    }
    return mmLen;
}

function finalLength(Unit2, mmLen) {
    var result = 0;
    switch (Unit2) {
        case "mm":
            result = mmLen;
            break;
        case "cm":
            result = mmLen * 0.1;
            break;
        case "m":
            result = mmLen * 0.001;
            break;
        case "km":
            result = mmLen * 0.000001;
            break;
        case "inch":
            result = mmLen * 0.0393701;
            break;
        case "ft":
            result = mmLen * 0.00328084;
            break;
        case "yrd":
            result = mmLen * 0.00109361;
            break;
    } 
    return result;
}