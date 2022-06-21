<script>
  const Constants = {
		anionIndices: ["F-","Cl-","Br-","I-","OH-","SCN-","NO3-","C2H3O2-","CO3--","SO4--","PO4---"],
		cationIndices: ["NH4+","Li+","Na+","K+","Be++","Mg++","Ca++","Sr++","Ba++","Al+++","Mn++","Fe++","Co++","Ni++","Cu++","Zn++","Hg++","Pb++","Cr+++","Fe+++","Ag+","H+"],
	
		anionNames: ["fluoride", "chloride", "bromide", "iodide", "hydroxide", "thiocyanate", "nitrate", "acetate", "carbonate", "sulfate", "phosphate"],
		cationProperNames: ["ammonium", "hydrogen", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese(II)", "iron(II)", "cobalt(II)", "nickel(II)", "copper(II)", "zinc(II)", "mercury(II)", "lead(II)", "chromium(III)", "iron(III)", "silver"],
		cationCommonNames: ["ammonium", "hydrogen", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese", "ferrous", "cobaltous", "nickelous", "cupric", "zinc", "mercuric", "plumbous", "chromic", "ferric", "silver"],
    reactionTable: [
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"]],
      [["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"]],
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"]],
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"]],
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["S","GhostWhite"],["I","Ivory"]],
      [["I","SkyBlue"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","Ivory"],["I","Ivory"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","SkyBlue"],["I","Ivory"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","Ivory"],["I","Ivory"]],
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","Khaki"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["R","Al(OH)3","I","Ivory","aluminium hydroxide"],["S","GhostWhite"],["I","Ivory"]],
      [["S","Pink"],["S","Pink"],["S","Pink"],["S","Pink"],["I","Peru"],["I","Ivory"],["S","GhostWhite"],["S","Pink"],["I","Pink"],["S","Pink"],["I","Pink"]],
      [["S","GhostWhite"],["S","Green"],["S","Khaki"],["S","GhostWhite"],["I","YellowGreen"],["S","GhostWhite"],["S","Green"],["S","YellowGreen"],["I","YellowGreen"],["S","YellowGreen"],["I","SandyBrown"]],
      [["S","Salmon"],["S","Salmon"],["S","Violet"],["S","Green"],["I","Blue"],["S","Brown"],["S","Red"],["S","Pink"],["I","Purple"],["S","Red"],["I","Violet"]],
      [["S","Green"],["S","YellowGreen"],["S","Blue"],["S","Green"],["I","YellowGreen"],["S","GoldenRod"],["S","Green"],["S","Cyan"],["I","YellowGreen"],["S","Blue"],["I","YellowGreen"]],
      [["I","Cyan"],["S","Blue"],["S","DarkGreen"],["R","CuI","I","Ivory", "copper(I) iodide"],["I","Blue"],["I","Black"],["S","Blue"],["S","DarkBlue"],["R","Cu2(OH)2CO3","I","SeaGreen", "copper(II) carbonate hydroxide"],["S","Blue"],["I","SkyBlue"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["S","GhostWhite"],["I","Ivory"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["I","OrangeRed"],["R","HgO","I","Orange", "mercury(II) oxide"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","Yellow"],["I","Ivory"]],
      [["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["I","Yellow"],["I","Ivory"],["I","Khaki"],["S","GhostWhite"],["S","GhostWhite"],["I","Ivory"],["I","Ivory"],["I","Ivory"]],
      [["I","DarkGreen"],["S","DarkGreen"],["S","DarkGreen"],["S","DarkGreen"],["I","Green"],["S","Green"],["S","DarkBlue"],["S","DarkGreen"],["I","LightCyan"],["I","CadetBlue"],["I","DarkOrchid"]],
      [["S","AntiqueWhite"],["S","Yellow"],["S","DarkBrown"],["R","FeI2","S","GhostWhite", "iron(II) iodide"],["I","DarkOrange"],["S","Red"],["S","Red"],["S","IndianRed"],["R","Fe2O3","I","Red", "iron(III) oxide"],["S","Orange"],["I","Peru"]],
      [["S","GhostWhite"],["I","Ivory"],["I","Khaki"],["I","Yellow"],["I","Peru"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["I","Yellow"],["I","Ivory"],["I","Peru"]],
      [["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","Green"],["S","GhostWhite"],["S","GhostWhite"]]
    ]
	};

const Beaker = {
  solids: [], // solids in the beaker
  solutes: [], // solutes in the beaker
  fillLevel: 0, // fill level of the beaker

  addSalts() { // add one or two salts to beaker
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].soluble ? this.solids.push(arguments[i]) : this.solutes.push(arguments[i]);
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
    let state = {fillLevel: this.fillLevel, solidsColourA: "", solidsColourB: "", solutesColour: "snow", solidsVisible: 0};

    if (this.solids.length != 0) {
      state.solidsVisible = 1;
      state.solidsColourA = this.solids[0].colour;
      state.solidsColourB = this.solids[this.solids.length() - 1].colour;
    }
   
    if (this.solutes.length != 0) {

      return;
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

  for (let i = 0; i < Constants.cationIndices; i++) {

    // first extract cation and its charge
    if (formula.includes("(${Constants.cationIndices[i]})")) { // if there are brackets, there will definitely be a number following
      ions[0][0] = Constants.cationIndices[i];
      ions[0][1] = "+".repeat(formula.replace("(${Constants.cationIndices[i]})", "").charAt(0));
      break;
    }
    if (formula.includes(Constants.cationIndices[i])) { // if there are no brackets, there may be no number, so check for that
      ions[0][0] = Constants.cationIndices[i];
      ions[0][1] = isNaN(formula.replace(Constants.cationIndices[i], "").charAt(0)) ? "+" : "+".repeat(formula.replace(Constants.cationIndices[i], "").charAt(0)); 
      break;
    }
  }
  // next extract anion and its charge.
  for (let i = 0; i < Constants.anionIndices; i++) {
    if (formula.includes("(${Constants.anionIndices[i]})")) {
      ions[1][0] = Constants.anionIndices[i];
      ions[1][1] = "-".repeat(formula.split("(${Constants.anionIndices[i]})")[1].charAt(0));
      break;
    }

    if (formula.includes(Constants.anionIndices[i])) {
      ions[1][0] = Constants.anionIndices[i];
      formula = formula.concat("1"); // in this case, there will either be a number at the end or nothing, so we append a 1, which will be ignored if there is already a number present, or will be used if there is no number present
      ions[1][1] = "-".repeat(formula.split(Constants.anionIndices[i])[1].charAt(0)); 
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


  function dataColourToHex(dataTable)
{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    for (let i = 0; i < dataTable.length; i++) // for each row
    {
        for (let j = 0; j<dataTable[i].length; j++) // for each column
        {
          if (dataTable[i][j][0] == "I" || dataTable[i][j][0] == "S") // if the entry starts with I or S, the colour will be at index 1
            {
              dataTable[i][j][1] = colours[dataTable[i][j][1].toLowerCase()]; // convert
            }
            else { // otherwise it will be at index 3
              dataTable[i][j][3]=colours[dataTable[i][j][3].toLowerCase()]; // convert
            }
        }
    }
    
    return dataTable;
}
  console.log(dataColourToHex(Constants.reactionTable));
  let selectedCation = "Ca++";
  let selectedAnion = "Cl-";
</script>

<main>
  <h2>Cation</h2>
  <div class="flex">
    {#each Constants.cationIndices as cation}
      <label>
        <input type="radio" bind:group={selectedCation} value={cation} />
        {cation}
      </label>
    {/each}
  </div>
  
  <h2>Anion</h2>
  <div class="flex">
    {#each Constants.anionIndices as anion}
      <label>
        <input type="radio" bind:group={selectedAnion} value={anion} />
        {anion}
      </label>
    {/each}
  </div>

  <h2>Output</h2>
  <p>
    {selectedCation} <span style="font-size: 14pt; font-weight: bold;">+</span> {selectedAnion}
  </p>
  <div
    id="rectangle"
    style="--salt-colour: {reactIons([selectedCation, selectedAnion]).colour}"
  >
    <h2 class="verticalcenter">{reactIons([selectedCation, selectedAnion]).formula}</h2>
    <p class="underCenter">({reactIons([selectedCation, selectedAnion]).proper})</p>
  </div>
  <p>
    soluble = {reactIons([selectedCation, selectedAnion]).soluble}
  </p>
</main>

<style>
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

  #rectangle {
    width: 200px;
    height: 100px;
    margin: auto;
    border-radius: 8px;
    border: 2px solid black;
    background-color: var(--salt-colour);
    font-size: 20pt;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
