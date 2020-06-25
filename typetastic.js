let typeTastic = {
  QueNumber: 0,
  QueType: 0,
  QueText: '',

  // for 2, 4, 7, 9, 10
  symbol: '',

  //only for type 8
  number: 0,

  enable: function () {
    let queType = +document.getElementById("queType").value;
    switch (queType) {
      case 2:
      case 4:
      case 7:
      case 9:
      case 10:
        document.getElementById("symbol").disabled = false
        document.getElementById("number").disabled = true
        break;
      case 8:
        document.getElementById("number").disabled = false
        document.getElementById("symbol").disabled = true
        break;
      default:
        document.getElementById("number").disabled = true;
        document.getElementById("symbol").disabled = true;
        break;
    }
  },

  convert: function () {
    this.QueNumber = document.getElementById("queNumber").value;
    this.QueType = +document.getElementById("queType").value;
    this.QueText = document.getElementById("queText").value;
    this.symbol = document.getElementById("symbol").value;
    this.number = +document.getElementById("number").value;
    this.output = '';
    if (this.QueText) {
      this.QueText = this.QueText.trim();
    }
    switch (this.QueType) {
      case 1:
        output = this.Type1();
        break;
      case 2:
        output = this.Type2();
        break;
      case 3:
        output = this.Type3();
        break;
      case 4:
        output = this.Type4();
        break;
      case 5:
        output = this.Type5();
        break;
      case 6:
        output = this.Type6();
        break;
      case 7:
        output = this.Type7();
        break;
      case 8:
        output = this.Type8();
        break;
      case 9:
        output = this.Type9();
        break;
      case 10:
        output = this.Type10();
        break;
    }

    let result = `T3/${this.QueNumber}/${output}`;
    document.getElementById("result").value = result;
    var copyText = document.getElementById("result");
    /* Select the text field */
    copyText.select();
    document.execCommand("copy");
    console.log(copyText.value);
  },


  nextChar: function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  },

  Type1: function () {
    return this.QueText.replace(/\d+/g, '');;
  },

  Type2: function () {
    console.log('Type 2');
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let symbols = this.symbol.split("");
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i]
      if (i < QueText.length - 1) {
        if (i % 2 == 0) {
          output += symbols[0];
        } else {
          output += symbols[1];
        }
      }
    }
    return output;
  },

  Type3: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let c = 'a';
    let j = 1;
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i];
      if (i < QueText.length - 1) {
        output += c + j;
      }
      c = this.nextChar(c);
      if (c == 'z') c = 'a';
      j++;
    }
    return output;
  },

  Type4: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i]
      if (i < QueText.length - 1) {
        output += this.symbol;
      }
    }
    return output;
  },

  Type5: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let c = 'a';
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i];
      if (i < QueText.length - 1) {
        output += c;
      }
      if (c == 'z') {
        c = 'a';
      } else {
        c = this.nextChar(c);
      }
      
    }
    return output;
  },

  Type6: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let j = 1;
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i];
      if (i < QueText.length - 1) {
        output += j;
      }
      j++;
    }
    return output;
  },

  Type7: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let reverseSymbols = this.symbol.split("").reverse().join("");
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i]
      if (i < QueText.length - 1) {
        if (i % 2 == 0) {
          output += this.symbol;
        } else {
          output += reverseSymbols;
        }
      }
    }
    return output;
  },

  Type8: function () {
    let output = '';
    let QueText = this.QueText;
    let number = this.number;
    let initialNumber = number;
    QueText = QueText.replace(/\s/g, '');
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i];
      if (i < QueText.length - 1) {
        output += number;
      }
      number += initialNumber;
    }
    return output;
  },

  Type9: function () {
    let output = '';
    let QueText = this.QueText;
    let symbol = this.symbol;
    let initialSymbol = symbol;
    QueText = QueText.replace(/\s/g, '');
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i]
      if (i < QueText.length - 1) {
        output += symbol;
      }
      symbol += initialSymbol;
    }
    return output;
  },

  Type10: function () {
    let output = '';
    let QueText = this.QueText;
    QueText = QueText.replace(/\s/g, '');
    let c = 'a';
    let c2 = 'A';
    let j = 1;
    for (let i = 0; i < QueText.length; i++) {
      output += QueText[i];
      if (i < QueText.length - 1) {
        output += this.symbol + c + c2 + j;
      }
      
      if (c == 'z') {
        c = 'a';
        c2 = 'A'
      } else {
        c = this.nextChar(c);
        c2 = this.nextChar(c2);
      }
      j++;
    }
    return output;
  }
}
