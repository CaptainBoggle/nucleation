<script>
  const Constants = {
		anionIndices: ["F-","Cl-","Br-","I-","OH-","SCN-","NO3-","C2H3O2-","CO3--","SO4--","PO4---"],
		cationIndices: ["NH4+","H+","Li+","Na+","K+","Be++","Mg++","Ca++","Sr++","Ba++","Al+++","Mn++","Fe++","Co++","Ni++","Cu++","Zn++","Hg++","Pb++","Cr+++","Fe+++","Ag+"],
	
		anionNames: ["fluoride", "chloride", "bromide", "iodide", "hydroxide", "thiocyanate", "nitrate", "acetate", "carbonate", "sulfate", "phosphate"],
		cationProperNames: ["ammonium", "hydrogen", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese(II)", "iron(II)", "cobalt(II)", "nickel(II)", "copper(II)", "zinc(II)", "mercury(II)", "lead(II)", "chromium(III)", "iron(III)", "silver"],
		cationCommonNames: ["ammonium", "hydrogen", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese", "ferrous", "cobaltous", "nickelous", "cupric", "zinc", "mercuric", "plumbous", "chromic", "ferric", "silver"],
    reactionTable: [
      [["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"]],
      [["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","GhostWhite"],["S","Yellow"],["S","GhostWhite"],["S","Green"],["S","GhostWhite"],["S","GhostWhite"]],
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
      [["S","GhostWhite"],["I","Ivory"],["I","Khaki"],["I","Yellow"],["I","Peru"],["I","Ivory"],["S","GhostWhite"],["S","GhostWhite"],["I","Yellow"],["I","Ivory"],["I","Peru"]]
    ]
	};

const Beaker = {
  solids: [],
  solutes: [],

  addSalts() { // add any number of salts to beaker
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].soluble ? this.solids.push(arguments[i]) : this.solutes.push(arguments[i]);
    }
  },

  reactSalts() { // react all salts in beaker
    return true;
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
    
    let ions = [];


    return ions
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
