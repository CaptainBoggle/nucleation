<script>

  const Constants = {
		anionIndices: ["F-","Cl-","Br-","I-","OH-","SCN-","NO3-","C2H3O2-","CO3--","SO4--","PO4---"],
		cationIndices: ["NH4+","Li+","Na+","K+","Be++","Mg++","Ca++","Sr++","Ba++","Al+++","Mn++","Fe++","Co++","Ni++","Cu++","Zn++","Hg++","Pb++","Cr+++","Fe+++","Ag+","H+"],
	
		anionNames: ["fluoride", "chloride", "bromide", "iodide", "hydroxide", "thiocyanate", "nitrate", "acetate", "carbonate", "sulfate", "phosphate"],
		cationProperNames: ["ammonium", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese(II)", "iron(II)", "cobalt(II)", "nickel(II)", "copper(II)", "zinc(II)", "mercury(II)", "lead(II)", "chromium(III)", "iron(III)", "silver", "hydrogen"],
		cationCommonNames: ["ammonium", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese", "ferrous", "cobaltous", "nickelous", "cupric", "zinc", "mercuric", "plumbous", "chromic", "ferric", "silver","hydrogen"],
    reactionTable: [
      [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#ffff00"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
      [["S","#f8f8ff"],["S","#ffff00"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
      [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
      [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
      [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["S","#f8f8ff"],["I","#fffff0"]],
      [["I","#87ceeb"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#fffff0"],["I","#fffff0"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#87ceeb"],["I","#fffff0"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#fffff0"],["I","#fffff0"]],
      [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f0e68c"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["R","Al(OH)3","I","#fffff0","aluminium hydroxide"],["S","#f8f8ff"],["I","#fffff0"]],
      [["S","#ffc0cb"],["S","#ffc0cb"],["S","#ffc0cb"],["S","#ffc0cb"],["I","#cd853f"],["I","#fffff0"],["S","#f8f8ff"],["S","#ffc0cb"],["I","#ffc0cb"],["S","#ffc0cb"],["I","#ffc0cb"]],
      [["S","#f8f8ff"],["S","#008000"],["S","#f0e68c"],["S","#f8f8ff"],["I","#9acd32"],["S","#f8f8ff"],["S","#008000"],["S","#9acd32"],["I","#9acd32"],["S","#9acd32"],["I","#f4a460"]],
      [["S","#fa8072"],["S","#fa8072"],["S","#ee82ee"],["S","#008000"],["I","#0000ff"],["S","#a52a2a"],["S","#ff0000"],["S","#ffc0cb"],["I","#800080"],["S","#ff0000"],["I","#ee82ee"]],
      [["S","#008000"],["S","#9acd32"],["S","#0000ff"],["S","#008000"],["I","#9acd32"],["S","#daa520"],["S","#008000"],["S","#00ffff"],["I","#9acd32"],["S","#0000ff"],["I","#9acd32"]],
      [["I","#00ffff"],["S","#0000ff"],["S","#006400"],["R","CuI","I","#fffff0","copper(I) iodide"],["I","#0000ff"],["I","#000000"],["S","#0000ff"],["S","#00008b"],["R","Cu2(OH)2CO3","I","#2e8b57","copper(II) carbonate hydroxide"],["S","#0000ff"],["I","#87ceeb"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["S","#f8f8ff"],["I","#fffff0"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#ff4500"],["R","HgO","I","#ffa500","mercury(II) oxide"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#ffff00"],["I","#fffff0"]],
      [["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#ffff00"],["I","#fffff0"],["I","#f0e68c"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#fffff0"],["I","#fffff0"],["I","#fffff0"]],
      [["I","#006400"],["S","#006400"],["S","#006400"],["S","#006400"],["I","#008000"],["S","#008000"],["S","#00008b"],["S","#006400"],["I","#e0ffff"],["I","#5f9ea0"],["I","#9932cc"]],
      [["S","#faebd7"],["S","#ffff00"],["S","#8b4513"],["R","FeI2","S","#f8f8ff","iron(II) iodide"],["I","#ff8c00"],["S","#ff0000"],["S","#ff0000"],["S","#cd5c5c"],["R","Fe2O3","I","#ff0000","iron(III) oxide"],["S","#ffa500"],["I","#cd853f"]],
      [["S","#f8f8ff"],["I","#fffff0"],["I","#f0e68c"],["I","#ffff00"],["I","#cd853f"],["I","#fffff0"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#ffff00"],["I","#fffff0"],["I","#cd853f"]],
      [["S","#f8f8ff"],["S","#ffff00"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#ffff00"],["S","#f8f8ff"],["S","#008000"],["S","#f8f8ff"],["S","#f8f8ff"]]
    ]
	};

const Beaker = {
  solids: [], // solids in the beaker
  solutes: [], // solutes in the beaker
  filled: false, // is beaker filled
  inputType: 0, // 0 = formula, 1 = proper name, 2 = common name
  input: "", // current input  

  addSalts() { // add one or two salts to beaker
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].soluble ? this.solids.push(arguments[i]) : this.solutes.push(arguments[i]);
    }
  },


  addInput() {
    if (this.inputType == 0) {
      console.log(this.input);
      console.log(saltFormulaToIons(this.input));
      console.log(reactIons(saltFormulaToIons(this.input)));
      this.addSalts(reactIons(saltFormulaToIons(this.input)));
    } else if (this.inputType == 1) {
      this.addSalts(reactIons(saltFormulaToIons(saltProperNameToFormula(this.input))));
    } else {
      this.addSalts(reactIons(saltFormulaToIons(saltProperNameToFormula(saltCommonNameToProperName(this.input)))));
    }
  },

  reactSalts() { // react all salts in beaker
    if (this.solutes.length != 2) {
      return;
    }

    let tempSalts = ["",""];
    
    tempSalts[0] = reactIons([saltFormulaToIons(this.solutes[0].formula)[0],saltFormulaToIons(this.solutes[1].formula)[1]])
    tempSalts[1] = reactIons([saltFormulaToIons(this.solutes[1].formula)[0],saltFormulaToIons(this.solutes[0].formula)[1]])
    
    if (tempSalts[0].soluble == false) {
      this.addSalts(tempSalts[0]); // add the new salt to the beaker
      if (tempSalts[1].soluble == false) {
        this.addSalts(tempSalts[1]); // if both salts react to each other, add both salts to beaker
        this.solutes = []; // clear solutes 
      }
      else {
        this.solutes = [tempSalts[1]]; // if only one salt reacts to each other, add the new salt to beaker and clear solutes
      }        
    }
    
    else if (tempSalts[1].soluble == false) {
        this.addSalts(tempSalts[1]); // add the new salt to the beaker
        this.solutes = [tempSalts[0]]; // if only one salt reacts to each other, add the new salt to beaker and clear solutes
    }

    return;
  },

  

  getVisualState() { // get the visual state of the beaker
    let state = {filled: this.filled, solidsColourA: "", solidsColourB: "", solutesColour: "#FFFAFA", solidsVisible: 0};

    if (this.solids.length != 0) {
      state.solidsVisible = 1;
      state.solidsColourA = this.solids[0].colour;
      state.solidsColourB = this.solids[this.solids.length() - 1].colour;
    }
   
    if (this.solutes.length != 0) {
      for (let i = 0; i < this.solutes.length; i++) {
        var r,g,b = 0;
        r+= Math.pow(parseInt(this.solutes[i].colour.slice(1, 3), 16),2);
        g+= Math.pow(parseInt(this.solutes[i].colour.slice(3, 5), 16),2);
        b+= Math.pow(parseInt(this.solutes[i].colour.slice(5, 7), 16),2);
      }
      state.solutesColour = RGBToHex(Math.sqrt(r/this.solutes.length), Math.sqrt(g/this.solutes.length), Math.sqrt(b/this.solutes.length));
    }

    return state;
  }

  }


  function getHCF(x, y) {
    // find highest common factor of two numbers
    if (y === 0) return x; // if y is zero then x is the HCF
    return getHCF(y, x % y); // otherwise, the HCF is the HCF of y and the remainder of x divided by y
  }

  function saltCommonNameToProperName(commonName) {
    var stringArray = commonName.split(" ");
    if (Constants.commonName.indexOf(stringArray[0]) > -1) {
      console.log();
      return [
        Constants.properName[Constants.commonName.indexOf(stringArray[0])],
        stringArray[1],
      ].join(" ");
    }
    return false;
  }
  
  function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

  function saltProperNameToFormula(properName) {
    var stringArray = properName.split(" ");
    var cation =
      Constants.cationIndices[
        Constants.cationProperNames.indexOf(stringArray[0])
      ];
    var anion =
      Constants.anionIndices[Constants.anionNames.indexOf(stringArray[1])];
    var formulaArray = ["", ionSymbol(cation), "", "", "", ionSymbol(anion), "", ""];
    var HCF = getHCF(ionCharge(cation), -ionCharge(anion));
    if (-ionCharge(anion) != HCF) {
      formulaArray[3] = -ionCharge(anion) / HCF;
      if (formulaArray[1].length > 2 ||  (formulaArray[1].length > 1 &&
          formulaArray[1].toUpperCase() == formulaArray[1]) 
      ) {
        formulaArray[0] = "(";
        formulaArray[2] = ")";
      }
    }
    if (ionCharge(cation) != HCF) {
      formulaArray[7] = ionCharge(cation) / HCF;
      if (
        formulaArray[5].length > 2 ||
        (formulaArray[5].length > 1 &&
          formulaArray[5].toUpperCase() == formulaArray[5])
      ) {
        formulaArray[4] = "(";
        formulaArray[6] = ")";
      }
    }
    return formulaArray.join("");
  }

  function saltFormulaToIons(formula) { // convert formula into two ions
// EBNF for formula:
// number ::= 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// cation ::= "NH4" | "H" | "Li" etc
// anion ::= "F" | "Cl" | "Br" etc
// formula ::= (("("<cation>")"<number>) | (<cation>[<number>]))(("("<anion>")"<number>) | (<anion>[<number>]))
    
    let ions = [["",""], ["",""]];
  
  for (let i = 0; i < Constants.cationIndices.length; i++) {

    // first extract cation and its charge
    if (formula.includes("(${ionSymbol(Constants.cationIndices[i])})")) { // if there are brackets, there will definitely be a number following
      ions[0][0] = ionSymbol(Constants.cationIndices[i]);
      ions[0][1] = "+".repeat(formula.replace("(${ionSymbol(Constants.cationIndices[i])})", "").charAt(0));
      break;
    }
    if (formula.includes(ionSymbol(Constants.cationIndices[i]))) { // if there are no brackets, there may be no number, so check for that
      ions[0][0] = ionSymbol(Constants.cationIndices[i]);
      ions[0][1] = isNaN(formula.replace(ionSymbol(Constants.cationIndices[i]), "").charAt(0)) ? "+" : "+".repeat(formula.replace(ionSymbol(Constants.cationIndices[i]), "").charAt(0)); 
      break;
    }
  }
  // next extract anion and its charge.
  for (let i = 0; i < Constants.anionIndices.length; i++) {
    if (formula.includes("(${ionSymbol(Constants.anionIndices[i])})")) {
      ions[1][0] = ionSymbol(Constants.anionIndices[i]);
      ions[1][1] = "-".repeat(formula.split("(${ionSymbol(Constants.anionIndices[i])})")[1].charAt(0));
      break;
    }

    if (formula.includes(ionSymbol(Constants.anionIndices[i]))) {
      ions[1][0] = ionSymbol(Constants.anionIndices[i]);
      formula = formula.concat("1"); // in this case, there will either be a number at the end or nothing, so we append a 1, which will be ignored if there is already a number present, or will be used if there is no number present
      ions[1][1] = "-".repeat(formula.split(ionSymbol(Constants.anionIndices[i]))[1].charAt(0)); 
      break;
    }

  }
  return [ions[0].join(""), ions[1].join("")];
}


  function ionCharge(ionName) {
    // returns the charge of an ion as an integer given the shorthand name string.
    return (
      (ionName.match(/-/g) || ionName.match(/\+/g)).length *
      (ionName.includes("+") ? 1 : -1)
    ); // count the number of - or +, and multiply by 1 or -1 depending on sign
  }

  function ionSymbol(ionName) {
    // returns the symbol of an ion as a string given the shorthand name string.
    return ionName.replace(/[-+]/g, ""); // remove the - or +
  }

  function ionGridRef(ionName) {
    // returns the grid reference of an ion as an integer given the shorthand name string.
    return ionCharge(ionName) > 0
      ? Constants.cationIndices.indexOf(ionName)
      : Constants.anionIndices.indexOf(ionName); // if the ion is a cation, return the index of the cation in the cation array, otherwise return the index of the anion in the anion array.
  }

  function reactIons(ions) {

    let ion1 = ions[0];
    let ion2 = ions[1]

    var salt = {}; // create a salt object to store the new salt
    var cation;
    var anion;

    if (ionCharge(ion1) * ionCharge(ion2) > 0) {
      return null; // like-charged ions do not form compounds
    }

    if (ionCharge(ion1) > 0) {
      // if ion1 is a cation
      cation = ion1;
      anion = ion2;
    } else {
      // if ion1 is an anion
      cation = ion2;
      anion = ion1;
    }

    var data = Constants.reactionTable[ionGridRef(cation)][ionGridRef(anion)]; // grab the data from the reaction table

    if (data[0] == "R") {
      // handle special cases where the general rules do not apply, so data is hardcoded
      // example ["R","Al(OH)3","I","Ivory","aluminium(III) hydroxide"]
      salt.proper = data[4];
      salt.formula = data[1];
      salt.soluble = data[2] == "S";
      salt.colour = data[3];
    } else {
      // handle general case
      // example ["I","Ivory"]
      salt.proper =
        Constants.cationProperNames[ionGridRef(cation)] +
        " " +
        Constants.anionNames[ionGridRef(anion)]; // construct the salt's proper name
      salt.formula = saltProperNameToFormula(salt.proper);
      salt.soluble = data[0] == "S";
      salt.colour = data[1];
    }

    return salt;
  }



  const leftBeaker = Object.create(Beaker);
  const rightBeaker = Object.create(Beaker);
  const bottomBeaker = Object.create(Beaker);
</script>

<main>
    <section class="layout">


    <div class="header">
      <h1>Nucleation</h1>
    </div>


    <div class="left">
      <select bind:value={leftBeaker.inputType}>
        <option value={0}>Formula</option>
        <option value={1}>Proper Name</option>
        <option value={2}>Common Name</option>
      </select>
      <input bind:value={leftBeaker.input}>

      <button on:click={leftBeaker.addInput()}>Set Salt</button>

      <div class="rectangle" style="--solute-colour: {leftBeaker.getVisualState.solutesColour}"></div>
      <p>
      Solute: {leftBeaker.solutes[0] ? leftBeaker.solutes[0].proper : "None"}
      </p>
      <p>
      Solid: {leftBeaker.solids[0] ? leftBeaker.solids[0].proper : "None"}
      </p>

    </div>


    <div class="right">    
      <select bind:value={rightBeaker.inputType}>
        <option value={0}>Formula</option>
        <option value={1}>Proper Name</option>
        <option value={2}>Common Name</option>
      </select>
      <input bind:value={rightBeaker.input}>

      <button on:click={rightBeaker.addInput()}>Set Salt</button>

      <div class="rectangle" style="--solute-colour: {rightBeaker.getVisualState.solutesColour}"></div>
      <p>
      Solute: {rightBeaker.solutes}
      </p>
      <p>
      Solid: {rightBeaker.solids}
      </p>
</div>


    <div class="bottom">      <div
      class="rectangle"
      style="--solute-colour: {bottomBeaker.getVisualState.solutesColour}"></div>
</div>


    <div class="footer">
      <h2>Felix Montanari - 2022</h2>
    </div>
  </section>
</main>

<style>

.layout {
  width: 100%;

  display: grid;
  grid:
    "header header" 15%
    "left right" 35%
    "bottom bottom" 45%
    "footer footer" 5%
    / 50% 50%;
  gap: 8px;
}

.header { grid-area: header; }
.left { grid-area: left; }
.right { grid-area: right; }
.bottom { grid-area: bottom; }
.footer { grid-area: footer; }


  h2 {
    margin-top: 0;
    margin-bottom: 0;
    clear: both;
  }
  .verticalcenter {
    text-align:center;
    position: relative;
    top: 44%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 20pt;
  }
  .underCenter {
    text-align:center;
    position: relative;
    transform: translateY(+170%);
    font-size: 10pt;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 33.333333%;
    justify-content: center;
  }
  main {
    text-align: center;
    padding: 1em;
    padding-top: 0;
    max-width: 240px;
    margin: 0 auto;
  }
  p {
    margin-top: 0;
    font-size: 12pt;
  }
  label {
    display: inline;
    padding-right: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .rectangle {
    width: 200px;
    height: 100px;
    margin: auto;
    border-radius: 8px;
    border: 2px solid black;
    background-color: var(--solute-colour);
    font-size: 20pt;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

</style>
