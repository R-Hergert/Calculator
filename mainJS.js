var input1;
var input2;
var input3;
var input4;
var decimal;
var answer;
var functionInput;
var answerFormInput;
var knownInfoInput;
//------Cos (calculator operating system)-----
function changeAnswerForm() {
  //------------------------Input define---------------
  functionInput = functionList.options[functionList.selectedIndex].text;
  //---------------------------------Answer Form Change -------------
  if (functionInput === "choose") {
    var option1 = "choose function";
    var option2 = "choose function";
    var option3 = "choose function";
    var option4 = "choose function";
  } else if (functionInput === "Quadratic") {
    var option1 = "General_Info";
    var option2 = "Inverse";
    var option3 = "Domain_Range";
    var option4 = "Transformations";
  } else if (functionInput === "Triangle") {
    var option1 = "General_Info";
    var option2 = "";
    var option3 = ""
    var option4 = ""
  } else if (functionInput === "Rational_function" || functionInput === "Square_root" || functionInput === "Absolute_value") {
    var option1 = "General_Info";
    var option2 = "Inverse";
    var option3 = "Domain_Range"
    var option4 = "Transformations"
  }
  document.getElementById("answerFormOption1").innerHTML = option1;
  document.getElementById("answerFormOption2").innerHTML = option2;
  document.getElementById("answerFormOption3").innerHTML = option3;
  document.getElementById("answerFormOption4").innerHTML = option4
    //------------------chain react-------------
  changeKnownInfo();
}

function changeKnownInfo() {
  //---------------------define input----------------
  answerFormInput = answerFormList.options[answerFormList.selectedIndex].text;
  //------------------Changing known info---------------
  if (answerFormInput === "choose") {
    var option1 = "choose answer form";
    var option2 = "choose answer form";
    var option3 = "choose answer form";
    var option4 = "choose answer form";
    var option5 = "choose answer form";
  } else if (functionInput === "Quadratic") {
    var option1 = "Vertex_form";
    var option2 = "Factored_form";
    var option3 = "Standard_form";
    var option4 = "";
    var option5 = "";
  } else if (functionInput === "Triangle") {
    var option1 = "SAS";
    var option2 = "SSA";
    var option3 = "AAS";
    var option4 = "SSS";
    var option5 = "ASA";
  } else if (functionInput === "Rational_function") {
    var option1 = "Standard_form";
    var option2 = "";
    var option3 = "";
    var option4 = "";
    var option5 = "";
  } else if (functionInput === "Square_root") {
    var option1 = "Standard_form";
    var option2 = "";
    var option3 = "";
    var option4 = "";
    var option5 = "";
  } else if (functionInput === "Absolute_value") {
    var option1 = "Standard_form";
    var option2 = "";
    var option3 = "";
    var option4 = "";
    var option5 = "";
  }
  if (answerFormInput === "Transformations") {
    var option2 = ""
    var option3 = ""
  }
  document.getElementById("knownInfoOption1").innerHTML = option1;
  document.getElementById("knownInfoOption2").innerHTML = option2;
  document.getElementById("knownInfoOption3").innerHTML = option3;
  document.getElementById("knownInfoOption4").innerHTML = option4;
  document.getElementById("knownInfoOption5").innerHTML = option5;
  //------------chain react-----------------
  changeInput();
}

function changeInput() {
  //------------Input defines------------------
  knownInfoInput = knownInfoList.options[knownInfoList.selectedIndex].text;
  //------------Change text----------------
  if (knownInfoInput === "choose") {
    var inputText = ""
  } else if (knownInfoInput === "Standard_form" && functionInput === "Quadratic") {
    var inputText = "=a<br/><br/>=b<br/><br/>=c"
  } else if (knownInfoInput === "Factored_form") {
    var inputText = "=a<br/><br/>=p<br/><br/>=q"
  } else if (knownInfoInput === "Vertex_form") {
    var inputText = "=a<br/><br/>=h<br/><br/>=k<br/></br>=b<br/><br/>a[b(x-h)]^2+k"
  } else if (knownInfoInput === "SAS") {
    var inputText = "=s(a)<br/><br/>=s(b)<br/><br/>=a(C/gamma)"
  } else if (knownInfoInput === "SSA") {
    var inputText = "=s(a)<br/><br/>=s(b)<br/><br/>=a(A)"
  } else if (knownInfoInput === "AAS") {
    var inputText = "=s(a)<br/><br/>=a(A)<br/><br/>=a(B)"
  } else if (knownInfoInput === "SSS") {
    var inputText = "=s(a)<br/><br/>=s(b)<br/><br/>=s(c)"
  } else if (knownInfoInput === "Standard_form" && (functionInput === "Rational_function" || functionInput === "Square_root" || functionInput === "Absolute_value")) {
    var inputText = "=a<br/><br/>=h<br/><br/>=k<br/><br/>=b<br/><br/>a[b(x-h)]+k"
  }
  document.getElementById("info").innerHTML = inputText
}

function chooseOperation() {
  //------Decimal and input defines-----
  decimal = 3
  var decimalInput = document.getElementById("decimal").value
  if (decimalInput != "") {
    decimal = decimalInput
  }
  input1 = document.getElementById("input1").value;
  input2 = document.getElementById("input2").value;
  input3 = document.getElementById("input3").value;
  input4 = document.getElementById("input4").value;
  var Function = window[functionInput];
  if (typeof Function === "function") {
    Function()
  }
}

//---------Selecting Form-----
function Quadratic() {
  if (input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    isNaN(input1) === true ||
    isNaN(input2) === true ||
    isNaN(input3) === true) {
    document.getElementById("buttonText").innerHTML = "ERROR!"
    document.getElementById("answer1").innerHTML = ""
    document.getElementById("answer2").innerHTML = ""
    document.getElementById("answer3").innerHTML = ""
    document.getElementById("answer4").innerHTML = ""
    document.getElementById("answer5").innerHTML = ""
  } else {
    document.getElementById("buttonText").innerHTML = "Calculate"
    var knownInfo = window[knownInfoInput];
    if (typeof knownInfo === "function") {
      knownInfo()
    }
  }
}

function Triangle() {
  if (input1 === "" || input2 === "" || input3 === "" || isNaN(input1) === true || isNaN(input2) === true || isNaN(input3) === true) {
    document.getElementById("buttonText").innerHTML = "ERROR!"
    document.getElementById("answer1").innerHTML = ""
    document.getElementById("answer2").innerHTML = ""
    document.getElementById("answer3").innerHTML = ""
    document.getElementById("answer4").innerHTML = ""
    document.getElementById("answer5").innerHTML = ""
  } else {
    document.getElementById("buttonText").innerHTML = "Calculate"
    var knownInfo = window[knownInfoInput];
    if (typeof knownInfo === "function") {
      knownInfo()
    }
  }
}

function Rational_function() {
  if (input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    input4 === "" ||
    isNaN(input1) === true ||
    isNaN(input2) === true ||
    isNaN(input3) === true ||
    isNaN(input4) === true) {
    document.getElementById("buttonText").innerHTML = "ERROR!"
    document.getElementById("answer1").innerHTML = ""
    document.getElementById("answer2").innerHTML = ""
    document.getElementById("answer3").innerHTML = ""
    document.getElementById("answer4").innerHTML = ""
    document.getElementById("answer5").innerHTML = ""
  } else {
    document.getElementById("buttonText").innerHTML = "Calculate"
    if (answerFormInput === "Inverse" ||
      answerFormInput === "Transformations") {
      var op = knownInfoInput + "_Hyperbola"
    } else if (functionInput === "Rational_function") {
      var up = "_Hyperbola"
      var op = answerFormInput + up
    } else {
      var up = functionInput
      var op = answerFormInput + "_" + up
    }
    var knownInfo = window[op];
    if (typeof knownInfo === "function") {
      knownInfo()
    }
  }
}

function Square_root() {
  Rational_function()
}

function Absolute_value() {
  Rational_function()
}

//-----------Forms-----
function Standard_form() {
  var a = input1
  var b = input2
  var c = input3
  var h = (b / a) / 2
  var k = -((Math.pow(h, 2)) * a) - -c
  var b = 1
  var answerForm = window[answerFormInput];
  if (typeof answerForm === "function") {
    answerForm(a, b, h, k)
  }
}

function Factored_form() {
  //----------standard----------
  var c = input1 * input2 * input3
  var b = (Number(input2) + Number(input3)) * input1
  var a = input1
  var h = (b / a) / 2
  var k = -((Math.pow(h, 2)) * a) - -c
  var b = 1
  var answerForm = window[answerFormInput];
  if (typeof answerForm === "function") {
    answerForm(a, b, h, k)
  }
}

function Vertex_form() {
  if (input4 === "" || isNaN(input4) === true) {
    document.getElementById("buttonText").innerHTML = "ERROR!"
    document.getElementById("answer1").innerHTML = ""
    document.getElementById("answer2".innerHTML) = ""
    document.getElementById("answer3").innerHTML = ""
    document.getElementById("answer4").innerHTML = ""
    document.getElementById("answer5").innerHTML = ""
  } else {
    //---------Vertex------
    var a = input1
    var b = input4
    var h = -input2
    var k = input3
    var a = Number(a)
    var h = Number(h)
    var k = Number(k)
    var b = Number(b)
    var answerForm = window[answerFormInput];
    if (typeof answerForm === "function") {
      answerForm(a, b, h, k)
    }
  }
}

function Standard_form_Hyperbola() {
    var a = input1
    var h = -input2
    var k = input3
    var b = input4
    var answerForm = window[answerFormInput];
    if (typeof answerForm === "function") {
      answerForm(a, b, h, k)
    }
  }
  //-------------Quadratic functions---
function General_Info(a, b, h, k) {
  //---------------Vertex-------------------
  var factoredb = h
  var negativeFactoredb = -h
  var negativek = -k
    //------------Standard-----------------
  var a2 = a * Math.pow(b, 2)
  var b2 = h * b * b * 2 * a
  var c = ((Math.pow(-h * b, 2)) * a) + Number(k)
  var negativeb = -b2
  var negativec = -c
    //---------------Factored-------------
  var b3 = b2 / a2
  var c3 = c / a2
  var negativeb = -b3
  var squareroot = Math.sqrt((Math.pow(b3, 2)) - (4 * c3))
  var zero1 = (negativeb + squareroot) / 2
  var zero2 = (negativeb - squareroot) / 2
  var negativeZero1 = -zero1
  var negativeZero2 = -zero2
    //----------number prep---------
  var short = length(factoredb, k, negativeFactoredb, negativek, a2, b2, c, zero1, zero2, negativeZero1, negativeZero2, negativeb, negativec)
  var finalFactoredb = short[0]
  var finalk = short[1]
  var finalNegativeFactoredb = short[2]
  var finalNegativek = short[3]
  var finala = short[4]
  var finalb = short[5]
  var finalc = short[6]
  var finalZero1 = short[7]
  var finalZero2 = short[8]
  var finalNegativeZero1 = short[9]
  var finalNegativeZero2 = short[10]
  var finalNegativeb = short[11]
  var finalNegativec = short[12]
    //--------------Print---------------
  if (knownInfoInput !== "Vertex_form") {
    if (finalFactoredb >= 0) {
      document.getElementById("answer4").innerHTML = "Vertex:-" + finalFactoredb + ", " + finalk;
    } else {
      document.getElementById("answer4").innerHTML = "Vertex:+" + finalNegativeFactoredb + ", " + finalk;
    }
    if (finalFactoredb >= 0 && finalk >= 0) {
      document.getElementById("answer3").innerHTML = "Vertex form: " + a + "(x+" + finalFactoredb + ")^2 + " + finalk;
    } else if (finalFactoredb >= 0 && finalk < 0) {
      document.getElementById("answer3").innerHTML = "Vertex form: " + a + "(x+" + finalFactoredb + ")^2 - " + finalNegativek;
    } else if (finalFactoredb < 0 && finalk < 0) {
      document.getElementById("answer3").innerHTML = "Vertex form: " + a + "(x-" + finalNegativeFactoredb + ")^2 - " + finalNegativek;
    } else if (finalFactoredb < 0 && finalk >= 0) {
      document.getElementById("answer3").innerHTML = "Vertex form: " + a + "(x-" + finalNegativeFactoredb + ")^2 + " + finalk;
    };
  } else {
    document.getElementById("answer3").innerHTML = ""
    document.getElementById("answer4").innerHTML = "";
  }
  //-----------------------------------------------------
  if (knownInfoInput !== "Standard_form") {
    if (b2 >= 0 && c >= 0) {
      document.getElementById("answer5").innerHTML = "Standard Form: " + finala + "x^2 + " + finalb + "x + " + finalc;
    } else if (b2 >= 0 && c < 0) {
      document.getElementById("answer5").innerHTML = "Standard Form: " + finala + "x^2 + " + finalb + "x - " + finalNegativec;
    } else if (b2 < 0 && c < 0) {
      document.getElementById("answer5").innerHTML = "Standard Form: " + finala + "x^2 - " + finalNegativeb + "x - " + finalNegativec;
    } else if (b2 < 0 && c >= 0) {
      document.getElementById("answer5").innerHTML = "Standard Form: " + finala + "x^2 - " + finalNegativeb + "x + " + finalc;
    };
  } else {
    document.getElementById("answer5").innerHTML = ""
  }
  //--------------------------------------------------
  if (knownInfoInput !== "Factored_form") {
    if ((Math.pow(b3, 2)) >= 4 * c3) {
      document.getElementById("answer1").innerHTML = "Zeroes:" + finalZero1 + ", " + finalZero2;
      if (finalZero1 >= 0 && finalZero2 >= 0) {
        document.getElementById("answer2").innerHTML = "Factored form: (x-" + finalZero1 + ")(x-" + finalZero2 + ")";
      } else if (finalZero1 >= 0 && finalZero2 < 0) {
        document.getElementById("answer2").innerHTML = "Factored form: (x-" + finalZero1 + ")(x+" + finalNegativeZero2 + ")";
      } else if (finalZero1 < 0 && finalZero2 < 0) {
        document.getElementById("answer2").innerHTML = "Factored form: (x+" + finalNegativeZero1 + ")(x+" + finalNegativeZero2 + ")";
      } else if (finalZero1 < 0 && finalZero2 >= 0) {
        document.getElementById("answer2").innerHTML = "Factored form: (x+" + finalNegativeZero1 + ")(x-" + finalZero2 + ")";
      };
    } else {
      document.getElementById("answer1").innerHTML = "no zeroes/factored form"
      document.getElementById("answer2").innerHTML = " ";
    };
  } else {
    document.getElementById("answer1").innerHTML = ""
    document.getElementById("answer2").innerHTML = " ";
  }
}

function Domain_Range(a, b, h, k) {
  var short = length(k, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  if (input1 >= 0) {
    document.getElementById("answer1").innerHTML = "Domain: xER<br/>Range: y>=" + short[0]
  } else {
    document.getElementById("answer1").innerHTML = "Domain: xER<br/>Range: y<=" + short[0]
  }
  document.getElementById("answer2").innerHTML = ""
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

//-------Hyperbolic functions-----
function Domain_Range_Hyperbola() {
  var h = input2
  var k = input3
  var short = length(h, k, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "x /= " + short[0] + ", xER"
  document.getElementById("answer2").innerHTML = "y /= " + short[1] + ", yER"
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

function General_Info_Hyperbola() {
  var a = input1
  var h = -input2
  var k = input3
  var b = input4
  var short = length(h, k, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "Asymptote 1: x = " + short[0]
  document.getElementById("answer2").innerHTML = "Asymptote 2: y = " + short[1]
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

//-------Squareroot functions---
function Domain_Range_Square_root() {
  var k = input3
  var h = input2
  var short = length(h, k, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  if (input1 >= 0) {
    document.getElementById("answer1").innerHTML = "x >= " + short[0]
  } else {
    document.getElementById("answer1").innerHTML = "x <= " + short[0]
  }
  document.getElementById("answer2").innerHTML = "y >= " + short[1]
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

function General_Info_Square_root() {
  var a = input1
  var h = input2
  var k = input3
  var b = input4
  var step1 = -k / a
  var step2 = (Math.pow(step1, 2) / b) + Number(h)
  var short = length(h, k, step2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "Vertex: x = " + short[0] + ", y = " + short[1]
  document.getElementById("answer2").innerHTML = "y-int: x = " + short[2]
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""

}

//-------Absolute value functions------
function Domain_Range_Absolute_value() {
  var k = input3
  var a = input1
  var nk = -k
  var short = length(k, a, nk, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  var k = short[0]
  var a = short[1]
  var nk = short[2]
  if (a >= 0) {
    document.getElementById("answer1").innerHTML = "x >= " + k
  } else {
    document.getElementById("answer1").innerHTML = "x >= " + k
  }
  document.getElementById("answer2").innerHTML = "yER"
  document.getElementById("answer3").innerHTML = ""
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

function General_Info_Absolute_value() {
  var a = input1
  var b = input4
  var h = input2
  var k = input3
  var m = a * b
  var short = length(h, k, m, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  var h = short[0]
  var k = short[1]
  var m = short[2]
  document.getElementById("answer1").innerHTML = "Slope: " + m
  document.getElementById("answer2").innerHTML = "Vertex: x = " + h
  document.getElementById("answer3").innerHTML = "y = " + k
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

//---------General functions-----
function Transformations(a, b, h, k) {
  var h = -h
  var bNew = 1 / b
  var short = length(a, bNew, h, k, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "Multiply x by: " + short[1]
  document.getElementById("answer2").innerHTML = "Add to  x by: " + short[2]
  document.getElementById("answer3").innerHTML = "Multiply y by: " + short[0]
  document.getElementById("answer4").innerHTML = "Add to y by:  " + short[3]
  document.getElementById("answer5").innerHTML = ""
}

function Inverse(a, b, h, k) {
    //------calculations----
    var bNew = 1 / a
    var hNew = Number(k)
    var kNew = -h
    var aNew = 1 / b
    var negativeHNew = -hNew
    var negativeKNew = -kNew
      //------fillin defines----------------
    var square = ""
    var sqrt = ""
      //--------function choosing(numbers/independent operations)-----
    if (functionInput === "Rational_function") {
      var square = "^-1"
    } else if (functionInput === "Quadratic") {
      var sqrt = " +/-sqrt"
    } else if (functionInput === "Absolute_value") {
      var sqrt = " +/-"
    } else if (functionInput === "Square_root") {
      var square = "^2"
    }
    //----------number prep---------
    var short = length(hNew, bNew, kNew, aNew, negativeHNew, negativeKNew, 1, 1, 1, 1, 1, 1, 1)
    var hNewFinal = short[0]
  var kNewFinal = short[2]
  var negativeHNewFinal = short[4]
  var negativeKNewFinal = short[5]
  var aNewFinal = short[3]
  var bNewFinal = short[1]
  document.getElementById("answer1").innerHTML = "Inverse equation:"
  if (hNewFinal >= 0 && kNewFinal >= 0) {
    document.getElementById("answer2").innerHTML = aNewFinal + sqrt + "[" + bNewFinal + "(x-" + hNewFinal + ")]" + square + " + " +  kNewFinal
  } else if (hNewFinal >= 0 && kNewFinal < 0) {
    document.getElementById("answer2").innerHTML = aNewFinal + sqrt + "[" + bNewFinal + "(x-" + hNewFinal + ")]" + square + " - " + negativeKNewFinal
  } else if (hNewFinal < 0 && kNewFinal >= 0) {
    document.getElementById("answer2").innerHTML = aNewFinal + sqrt + "[" + bNewFinal + "(x+" + negativeHNewFinal + ")]" + square + " + " + kNewFinal
  } else if (hNewFinal < 0 && kNewFinal < 0) {
    document.getElementById("answer2").innerHTML = aNewFinal + sqrt + "[" + bNewFinal + "(x+" + negativeHNewFinal + ")]" + square + " - " + negativeKNewFinal
  };
  if (functionInput === "Square_root") {
    if (aNew >=0){
      document.getElementById("answer3").innerHTML = "x >= " + hNewFinal
    }
    else {
      document.getElementById("answer3").innerHTML = "x <= " + hNewFinal
    }
  }
  else {
  document.getElementById("answer3").innerHTML = "" }
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

//--------Triangular functions------
function SAS() {
  //--------------------third side----------
  var a = input1;
  var b = input2;
  var gamma = input3
  var p1 = Math.pow(a, 2) + Math.pow(b, 2);
  var p21 = cos(gamma)
  var p22 = 2 * a * b;
  var p2 = p21 * p22
  var combo = p1 - p2;
  var f = Math.sqrt(combo)
    //------------------second/third angles----
  var sg2 = sin(gamma)
  var cda = f / a
  var aombo = sg2 / cda
  var aombo2 = arcsin(aombo)
  var bombo2 = 180 - aombo2 - gamma
    //-----------Print----------------------
  document.getElementById("answer4").innerHTML = " ";
  var short = length(aombo2, bombo2, f, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "side c = " + short[2];
  document.getElementById("answer2").innerHTML = "angle A: " + short[0];
  document.getElementById("answer3").innerHTML = "angle B: " + short[1];
  document.getElementById("answer4").innerHTML = " ";
  document.getElementById("answer5").innerHTML = " ";
}

function SSA() {
  var newzeta = 1
  var newbeta = 1
  var a = input1
  var b = input2
  var A = input3
  var zeta = sin(A)
  var beta = b / a
  var zbeta = beta / zeta
  var zbeta2 = arcsin(zbeta)
  var f = zbeta2.toFixed(decimal)
  var bzeta = 180 - zbeta2 - A
  var f2 = bzeta.toFixed(decimal)
  if (isNaN(f)) {} else if (b * sin(A) < a && a < b) {
    var newzeta = 180 - zbeta2
    var newbeta = 180 - newzeta - A
  }
  document.getElementById("answer3").innerHTML = " "
  document.getElementById("answer4").innerHTML = " "
  document.getElementById("answer5").innerHTML = " "
    //-----------Print-----------------
  var short = length(zbeta2, bzeta, newzeta, newbeta, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  var f = short[0]
  var f2 = short[1]
  if (a < b * sin(A)) {
    document.getElementById("answer1").innerHTML = "No triangle possible"
    document.getElementById("answer2").innerHTML = ""
  } else if (a === b * sin(A) || a >= b) {
    document.getElementById("answer1").innerHTML = "A: " + f
    document.getElementById("answer2").innerHTML = "B: " + f2
  } else {
    document.getElementById("answer1").innerHTML = "Triangle 1: A: " + f + "<br/> B: " + f2
    document.getElementById("answer2").innerHTML = "Triangle 2: A: " + short[2] + "<br/> B: " + short[3]
  }
}

function AAS() {
  var a = input1
  var A = input2
  var B = input3
  var sinedA = sin(A)
  var sinedB = sin(B)
  var zeta = (a / sinedA) * sinedB
  var C = 180 - A - B
  var sinedC = sin(C)
  var beta = (a / sinedA) * sinedC
    //-------------print----------
  var short = length(zeta, beta, C, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "b: " + short[0]
  document.getElementById("answer2").innerHTML = "c: " + short[1]
  document.getElementById("answer3").innerHTML = "C: " + short[2]
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

function SSS() {
  var a = input1
  var b = input2
  var c = input3
  var as = Math.pow(a, 2)
  var bs = Math.pow(b, 2)
  var cs = Math.pow(c, 2)
  var zeta = cs - bs - as
  var ab2 = b * a * 2
  var beta = zeta / -ab2
  var beta1 = arccos(beta)
  var zeta2 = bs - as - cs
  var ab22 = a * c * 2
  var beta2 = zeta2 / -ab22
  var beta12 = arccos(beta2)
  var zeta3 = as - bs - cs
  var ab23 = b * c * 2
  var beta3 = zeta3 / -ab23
  var beta13 = arccos(beta3)
    //--------------print--------------
  var short = length(beta1, beta12, beta13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "a = " + short[2]
  document.getElementById("answer2").innerHTML = "b: " + short[1]
  document.getElementById("answer3").innerHTML = "c: " + short[0]
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

function ASA() {
  var c = input1
  var A = input2
  var B = input3
  var C = 180 - A - B
  var sinedA = sin(A)
  var sinedB = sin(B)
  var sinedC = sin(C)
  var zeta = (c / sinedC) * sinedA
  var beta = (c / sinedC) * sinedB
    //-------------print----------
  var short = length(zeta, beta, C, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  document.getElementById("answer1").innerHTML = "a: " + short[0]
  document.getElementById("answer2").innerHTML = "b: " + short[1]
  document.getElementById("answer3").innerHTML = "C: " + short[2]
  document.getElementById("answer4").innerHTML = ""
  document.getElementById("answer5").innerHTML = ""
}

//----------------Shortcuts-----

function arcsin(degree) {
  var rad = Math.asin(degree)
  return rad * (180 / Math.PI)
}

function arccos(degree) {
  var rad = Math.acos(degree)
  return rad * (180 / Math.PI)
}

function sin(degree) {
  var rad = degree * (Math.PI / 180)
  return Math.sin(rad)
}

function cos(degree) {
  var rad = degree * (Math.PI / 180)
  return Math.cos(rad)
}

var length = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
  var aa = a.toString()
  var aa = aa.length
  var bb = b.toString()
  var bb = bb.length
  var cc = c.toString()
  var cc = cc.length
  var dd = d.toString()
  var dd = dd.length
  var ee = e.toString()
  var ee = ee.length
  var ff = f.toString()
  var ff = ff.length
  var gg = g.toString()
  var gg = gg.length
  var hh = h.toString()
  var hh = hh.length
  var ii = i.toString()
  var ii = ii.length
  var jj = j.toString()
  var jj = jj.length
  var kk = k.toString()
  var kk = kk.length
  var ll = l.toString()
  var ll = ll.length
  var mm = m.toString()
  var mm = mm.length
  document.getElementById("answer5").innterHTML = cc
  if (aa >= decimal + 2) {
    var a = a.toFixed(decimal)
  }
  if (bb >= decimal + 2) {
    var b = b.toFixed(decimal)
  }
  if (cc >= decimal + 2) {
    var c = c.toFixed(decimal)
  }
  if (dd >= decimal + 2) {
    var d = d.toFixed(decimal)
  }
  if (ee >= decimal + 2) {
    var e = e.toFixed(decimal)
  }
  if (ff >= decimal + 2) {
    var f = f.toFixed(decimal)
  }
  if (gg >= decimal + 2) {
    var g = g.toFixed(decimal)
  }
  if (hh >= decimal + 2) {
    var h = h.toFixed(decimal)
  }
  if (ii >= decimal + 2) {
    var i = i.toFixed(decimal)
  }
  if (jj >= decimal + 2) {
    var j = j.toFixed(decimal)
  }
  if (kk >= decimal + 2) {
    var k = k.toFixed(decimal)
  }
  if (ll >= decimal + 2) {
    var l = l.toFixed(decimal)
  }
  if (mm >= decimal + 2) {
    var m = m.toFixed(decimal)
  }
  return [a, b, c, d, e, f, g, h, i, j, k, l, m]
}