<script>
const CONSTANTS = {
    ANION_INDICES: ["F-","Cl-","Br-","I-","OH-","SCN-","NO3-","C2H3O2-","CO3--","SO4--","PO4---"],
    CATION_INDICES: ["NH4+","Li+","Na+","K+","Be++","Mg++","Ca++","Sr++","Ba++","Al+++","Mn++","Fe++","Co++","Ni++","Cu++","Zn++","Hg++","Pb++","Cr+++","Fe+++","Ag+","H+"],

    ANION_NAMES: ["fluoride", "chloride", "bromide", "iodide", "hydroxide", "thiocyanate", "nitrate", "acetate", "carbonate", "sulfate", "phosphate"],
    CATION_PROPER_NAMES: ["ammonium", "lithium", "sodium", "potassium", "beryllium", "magnesium", "calcium", "strontium", "barium", "aluminium", "manganese(II)", "iron(II)", "cobalt(II)", "nickel(II)", "copper(II)", "zinc(II)", "mercury(II)", "lead(II)", "chromium(III)", "iron(III)", "silver", "hydrogen"],
REACTION_TABLE: [
  [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#edbf18"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
  [["S","#f8f8ff"],["S","#edbf18"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
  [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
  [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"]],
  [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["S","#f8f8ff"],["I","#e3e3ca"]],
  [["I","#87ceeb"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#e3e3ca"],["I","#e3e3ca"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#87ceeb"],["I","#e3e3ca"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#e3e3ca"],["I","#e3e3ca"]],
  [["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f0e68c"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["R","Al(OH)3","I","#e3e3ca","aluminium hydroxide"],["S","#f8f8ff"],["I","#e3e3ca"]],
  [["S","#ffc0cb"],["S","#ffc0cb"],["S","#ffc0cb"],["S","#ffc0cb"],["I","#cd853f"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#ffc0cb"],["I","#ffc0cb"],["S","#ffc0cb"],["I","#ffc0cb"]],
  [["S","#f8f8ff"],["S","#008000"],["S","#f0e68c"],["S","#f8f8ff"],["I","#9acd32"],["S","#f8f8ff"],["S","#008000"],["S","#9acd32"],["I","#9acd32"],["S","#9acd32"],["I","#f4a460"]],
  [["S","#fa8072"],["S","#fa8072"],["S","#ee82ee"],["S","#008000"],["I","#0000ff"],["S","#a52a2a"],["S","#cf0023"],["S","#ffc0cb"],["I","#800080"],["S","#cf0023"],["I","#ee82ee"]],
  [["S","#008000"],["S","#9acd32"],["S","#0000ff"],["S","#008000"],["I","#9acd32"],["S","#daa520"],["S","#008000"],["S","#00ffff"],["I","#9acd32"],["S","#0000ff"],["I","#9acd32"]],
  [["I","#00ffff"],["S","#0000ff"],["S","#006400"],["R","CuI","I","#e3e3ca","copper(I) iodide"],["I","#0000ff"],["I","#000000"],["S","#0000ff"],["S","#00008b"],["R","Cu2(OH)2CO3","I","#2e8b57","copper(II) carbonate hydroxide"],["S","#0000ff"],["I","#87ceeb"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["S","#f8f8ff"],["I","#e3e3ca"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#ff4500"],["R","HgO","I","#ffa500","mercury(II) oxide"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#edbf18"],["I","#e3e3ca"]],
  [["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#edbf18"],["I","#e3e3ca"],["I","#f0e68c"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#e3e3ca"],["I","#e3e3ca"],["I","#e3e3ca"]],
  [["I","#006400"],["S","#006400"],["S","#006400"],["S","#006400"],["I","#008000"],["S","#008000"],["S","#00008b"],["S","#006400"],["I","#e0ffff"],["I","#5f9ea0"],["I","#9932cc"]],
  [["S","#faebd7"],["S","#edbf18"],["S","#8b4513"],["R","FeI2","S","#f8f8ff","iron(II) iodide"],["I","#ff8c00"],["S","#cf0023"],["S","#cf0023"],["S","#cd5c5c"],["R","Fe2O3","I","#cf0023","iron(III) oxide"],["S","#ffa500"],["I","#cd853f"]],
  [["S","#f8f8ff"],["I","#e3e3ca"],["I","#f0e68c"],["I","#edbf18"],["I","#cd853f"],["I","#e3e3ca"],["S","#f8f8ff"],["S","#f8f8ff"],["I","#edbf18"],["I","#e3e3ca"],["I","#cd853f"]],
  [["S","#f8f8ff"],["S","#edbf18"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#f8f8ff"],["S","#edbf18"],["S","#f8f8ff"],["S","#008000"],["S","#f8f8ff"],["S","#f8f8ff"]]
]
};

  function RGBToHex(r, g, b) {
    r = Math.round(r).toString(16);
    g = Math.round(g).toString(16);
    b = Math.round(b).toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  }

  function mixHexColours() {
    var r = 0;
    var g = 0;
    var b = 0;
    for (let i = 0; i < arguments.length; i++) {
      r += Math.pow(parseInt(arguments[i].slice(1, 3), 16), 2);
      g += Math.pow(parseInt(arguments[i].slice(3, 5), 16), 2);
      b += Math.pow(parseInt(arguments[i].slice(5, 7), 16), 2);
    }
    return RGBToHex(
      Math.sqrt(r / arguments.length),
      Math.sqrt(g / arguments.length),
      Math.sqrt(b / arguments.length)
    );
  }

  function getHCF(x, y) {
    // find highest common factor of two numbers
    if (y === 0) return x; // if y is zero then x is the HCF
    return getHCF(y, x % y); // otherwise, the HCF is the HCF of y and the remainder of x divided by y
  }

  function saltProperNameToFormula(properName) {
    var stringArray = properName.split(" ");
    var cation =
      CONSTANTS.CATION_INDICES[
        CONSTANTS.CATION_PROPER_NAMES.indexOf(stringArray[0])
      ];
    var anion =
      CONSTANTS.ANION_INDICES[CONSTANTS.ANION_NAMES.indexOf(stringArray[1])];
    var formulaArray = [
      "",
      ionSymbol(cation),
      "",
      "",
      "",
      ionSymbol(anion),
      "",
      "",
    ];
    var HCF = getHCF(ionCharge(cation), -ionCharge(anion));
    if (-ionCharge(anion) != HCF) {
      formulaArray[3] = -ionCharge(anion) / HCF;
      if (
        formulaArray[1].length > 2 ||
        (formulaArray[1].length > 1 &&
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

  function saltFormulaToIons(formula) {
    // convert formula into two ions
    // EBNF for formula:
    // number ::= 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // cation ::= "NH4" | "H" | "Li" etc
    // anion ::= "F" | "Cl" | "Br" etc
    // formula ::= (("("<cation>")"<number>) | (<cation>[<number>]))(("("<anion>")"<number>) | (<anion>[<number>]))

    let ions = [
      ["", ""],
      ["", ""],
    ];

    for (let i = 0; i < CONSTANTS.CATION_INDICES; i++) {
      // first extract cation and its charge
      if (formula.includes("(${CONSTANTS.CATION_INDICES[i]})")) {
        // if there are brackets, there will definitely be a number following
        ions[0][0] = CONSTANTS.CATION_INDICES[i];
        ions[0][1] = "+".repeat(
          formula.replace("(${CONSTANTS.CATION_INDICES[i]})", "").charAt(0)
        );
        break;
      } else if (formula.includes(CONSTANTS.CATION_INDICES[i])) {
        // if there are no brackets, there may be no number, so check for that
        ions[0][0] = CONSTANTS.CATION_INDICES[i];
        ions[0][1] = isNaN(
          formula.replace(CONSTANTS.CATION_INDICES[i], "").charAt(0)
        )
          ? "+"
          : "+".repeat(
              formula.replace(CONSTANTS.CATION_INDICES[i], "").charAt(0)
            );
        break;
      }
    }

    // next extract anion and its charge.

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
      ? CONSTANTS.CATION_INDICES.indexOf(ionName)
      : CONSTANTS.ANION_INDICES.indexOf(ionName); // if the ion is a cation, return the index of the cation in the cation array, otherwise return the index of the anion in the anion array.
  }

  function reactIons(ions) {
    let ion1 = ions[0];
    let ion2 = ions[1];

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

    var data = CONSTANTS.REACTION_TABLE[ionGridRef(cation)][ionGridRef(anion)]; // grab the data from the reaction table

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
        CONSTANTS.CATION_PROPER_NAMES[ionGridRef(cation)] +
        " " +
        CONSTANTS.ANION_NAMES[ionGridRef(anion)]; // construct the salt's proper name
      salt.formula = saltProperNameToFormula(salt.proper);
      salt.soluble = data[0] == "S";
      salt.colour = data[1];
    }

    return salt;
  }

  function reactSalts(ionPair1, ionPair2) {
    // react salts, input in form ([ion1, ion2], [ion3, ion4])
    let resultData = []; // first index will contain a number corresponding to the type of situation to render
    // 0 = atleast one of the reactants is insoluble, so render nothing - data in form [0]
    // 1 = no precipitate, mix colours of solution and display both reactants names - data in form [1, ionPair1, ionPair2, mixed colour]
    // 2 = one precipitate, display precipitate with name as well as solution with name - data in form [2, soluble switchedIonPair, insoluble switchedIonPair]
    // 3 = two precipitates, mix colours for solid, display liquid as default [3, switchedIonPair1, switchedIonPair2, mixed colour]

    if (reactIons(ionPair1).soluble && reactIons(ionPair2).soluble) {
      let switchedIonPair1 = reactIons([ionPair1[0], ionPair2[1]]);
      let switchedIonPair2 = reactIons([ionPair2[0], ionPair1[1]]);
      ionPair1 = reactIons(ionPair1);
      ionPair2 = reactIons(ionPair2);

      if (switchedIonPair1.soluble && switchedIonPair2.soluble) {
        // true if and only if both values are true
        resultData = [
          1,
          ionPair1,
          ionPair2,
          mixHexColours(ionPair1.colour, ionPair2.colour),
        ];
      } else if (switchedIonPair1.soluble != switchedIonPair2.soluble) {
        // this is equivalent to XOR, so this is true if and only if one product is solid
        resultData = [
          2,
          ...(switchedIonPair1.soluble
            ? [switchedIonPair1, switchedIonPair2]
            : [switchedIonPair2, switchedIonPair1]),
        ];
      } else {
        // the only other situation is for two precipitates, so dont need to check
        resultData = [
          3,
          switchedIonPair1,
          switchedIonPair2,
          mixHexColours(switchedIonPair1.colour, switchedIonPair2.colour),
        ];
      }
    } else {
      resultData[0] = 0;
    }

    return resultData;
  }

  function subs(string) {
    return string.replace(/(\d+)/g, "<sub>$1</sub>");
  }

  let leftSelectedCation = "Ba++";
  let leftSelectedAnion = "OH-";
  let rightSelectedCation = "Be++";
  let rightSelectedAnion = "SO4--";

  $: leftSalt = reactIons([leftSelectedCation, leftSelectedAnion]);
  $: rightSalt = reactIons([rightSelectedCation, rightSelectedAnion]);
  $: reactedSalts = reactSalts(
    [leftSelectedCation, leftSelectedAnion],
    [rightSelectedCation, rightSelectedAnion]
  );
  const S = '<span style="opacity:0"><sub>2</sub></span>'; // this constant has been placed separately in order to shorten its name, as it is frequently used in the HTML below
</script>

<svelte:head>
  <title>Nucleation</title>
</svelte:head>

<main>
  <section class="layout">
    <div class="header">Nucleation</div>
    <div class="leftinput">
      <h1>Salt 1</h1>
      <h2>Cation</h2>
      <div class="flex">
        <select bind:value={leftSelectedCation}>
          {#each CONSTANTS.CATION_INDICES as cation}
            <option value={cation}>
              {cation}
            </option>
          {/each}
        </select>
      </div>

      <h2>Anion</h2>
      <div class="flex">
        <select bind:value={leftSelectedAnion}>
          {#each CONSTANTS.ANION_INDICES as anion}
            <option value={anion}>
              {anion}
            </option>
          {/each}
        </select>
      </div>

      <!--
        FERLIX DO YOU NEED THIS SHIT??
      <div>
        <h2>Salt Formed</h2>
        <p>
          {@html S}{@html subs(leftSelectedCation)}
          <span style="font-size: 14pt; font-weight: bold;">+</span>
          {@html subs(leftSelectedAnion)}{@html S}
        </p>
      </div>
      -->
      {#if leftSalt.soluble}
        <div class="rectangle" style="--solute-colour: {leftSalt.colour}ea">
          <h2 class="beakerHead">
            {@html S}{@html subs(leftSalt.formula)}{@html S}
          </h2>
          <p class="beakerSub">({leftSalt.proper})</p>
        </div>
      {:else}
        <div class="rectangle" style="--solute-colour: #f8f8ff">
          <h2 class="beakerHead">
            {@html S}{@html subs(leftSalt.formula)}{@html S}
          </h2>
          <p class="beakerSub">({leftSalt.proper})</p>
          <div class="cover">
            <div
              class="precipitatePile"
              style="--solid-colour: {leftSalt.colour}e0"
            />
          </div>
        </div>
      {/if}
    </div>

    <div class="rightinput">
      <h1>Salt 2</h1>
      <h2>Cation</h2>
      <div class="flex">
        <select bind:value={rightSelectedCation}>
          {#each CONSTANTS.CATION_INDICES as cation}
            <option value={cation}>
              {cation}
            </option>
          {/each}
        </select>
      </div>

      <h2>Anion</h2>
      <div class="flex">
        <select bind:value={rightSelectedAnion}>
          {#each CONSTANTS.ANION_INDICES as anion}
            <option value={anion}>
              {anion}
            </option>
          {/each}
        </select>
      </div>

      <!--
        FERLIX DO YOU NEED THIS
      <div>
        <h2>Salt Formed</h2>
        <p>
          {@html S}{@html subs(rightSelectedCation)}
          <span style="font-size: 14pt; font-weight: bold;">+</span>
          {@html subs(rightSelectedAnion)}{@html S}
        </p>
      </div>
      -->
      {#if rightSalt.soluble}
        <div class="rectangle" style="--solute-colour: {rightSalt.colour}ea">
          <h2 class="beakerHead">
            {@html S}{@html subs(rightSalt.formula)}{@html S}
          </h2>
          <p class="beakerSub">({rightSalt.proper})</p>
        </div>
      {:else}
        <div class="rectangle" style="--solute-colour: #f8f8ff">
          <h2 class="beakerHead">
            {@html S}{@html subs(rightSalt.formula)}{@html S}
          </h2>
          <p class="beakerSub">({rightSalt.proper})</p>
          <div class="cover">
            <div
              class="precipitatePile"
              style="--solid-colour: {rightSalt.colour}e0"
            />
          </div>
        </div>
      {/if}
    </div>

    <div class="output">
      <h1>Reaction</h1>
      <p style="font-size: 20pt">
        {@html S}{@html subs(leftSalt.formula)}
        <span style="font-size: 14pt; font-weight: bold;">+</span>
        {@html subs(rightSalt.formula)}{@html S}
      </p>

      <!--
    // 0 = atleast one of the reactants is insoluble, so render nothing - data in form [0]
    // 1 = no precipitate, mix colours of solution and display both reactants names - data in form [1, ionPair1, ionPair2, mixed colour]
    // 2 = one precipitate, display precipitate with name as well as solution with name - data in form [2, soluble switchedIonPair, insoluble switchedIonPair]
    // 3 = two precipitates, mix colours for solid, display liquid as default [3, switchedIonPair1, switchedIonPair2, mixed colour]
      -->

      {#if reactedSalts[0] == 0}
        <div id="centralRectangle" style="--solute-colour: #f8f8ff">
          <h2 id="centralBeakerHead">{@html S}No Reaction{@html S}</h2>
          <p id="centralBeakerSub">Both reactants need to be soluble!</p>
        </div>
      {:else if reactedSalts[0] == 1}
        <div id="centralRectangle" style="--solute-colour: {reactedSalts[3]}ea">
          <h2 id="centralBeakerHead">
            {@html S}{@html subs(reactedSalts[1].formula)} & {@html subs(
              reactedSalts[2].formula
            )}{@html S}
          </h2>
          <p id="centralBeakerSub">
            ({reactedSalts[1].proper} & {reactedSalts[2].proper})
          </p>
        </div>
      {:else if reactedSalts[0] == 2}
        <div
          id="centralRectangle"
          style="--solute-colour: {reactedSalts[1].colour}99"
        >
          <h2 id="centralBeakerHead">
            {@html S}{@html subs(reactedSalts[1].formula)}{@html S}
          </h2>
          <p id="centralBeakerSub">({reactedSalts[1].proper})</p>

          <div id="centralCover">
            <div
              id="centralPrecipitatePile"
              style="--solid-colour: {reactedSalts[2].colour}e0"
            />
            <h2
              id="centralBeakerPrecipitateHead"
              style="--solid-colour: {reactedSalts[2].colour}e0"
            >
              {@html S}{@html subs(reactedSalts[2].formula)}{@html S}
            </h2>
            <p
              id="centralBeakerPrecipitateSub"
              style="--solid-colour: {reactedSalts[2].colour}e0"
            >
              ({reactedSalts[2].proper})
            </p>
          </div>
        </div>
      {:else}
        <div id="centralRectangle" style="--solute-colour: #f8f8ff">
          <h2 id="centralBeakerHead">{@html S}{@html S}</h2>
          <p id="centralBeakerSub"><span style="opacity: 0">2</span></p>

          <div id="centralCover">
            <div
              id="centralPrecipitatePile"
              style="--solid-colour: {reactedSalts[3]}e0"
            />
            <h2
              id="centralBeakerPrecipitateHead"
              style="--solid-colour: {reactedSalts[3]}e0"
            >
              {@html S}{@html subs(reactedSalts[1].formula)} & {@html subs(
                reactedSalts[2].formula
              )}{@html S}
            </h2>

            <p
              id="centralBeakerPrecipitateSub"
              style="--solid-colour: {reactedSalts[3]}e0"
            >
              ({reactedSalts[1].proper} & {reactedSalts[2].proper})
            </p>
          </div>
        </div>
      {/if}
    </div>
    <div class="footer">Felix Montanari - 2022</div>
  </section>
</main>

<style>
  .layout {
    display: grid;
    grid:
      "header header header" 2fr
      "leftinput output rightinput" 12fr
      "footer footer footer" 1fr
      / 1fr 1fr 1fr;
    gap: 8px;
  }

  .header {
    font-size: 40pt;
    font-weight: 500;
    grid-area: header;
    background-color: aliceblue;
    height: 70px;
    border-radius: 5px;
  }
  .leftinput {
    grid-area: leftinput;
  }
  .output {
    grid-area: output;
  }
  .rightinput {
    grid-area: rightinput;
  }
  .footer {
    position: static;
    bottom: 0;
    width: 100%;
    height: 2.5rem; /* Footer height */
    grid-area: footer;
  }

  .precipitatePile {
    position: absolute;
    width: 146px;
    height: 146px;
    background: var(--solid-colour);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 24px;
    margin-top: 80px;
    margin-left: 27px;
  }
  .cover {
    position: absolute;
    height: 140px;
    width: 200px;
    margin-top: 88px;

    overflow: hidden;
  }

  #centralPrecipitatePile {
    position: absolute;
    width: 292px;
    height: 292px;
    background: var(--solid-colour);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 48px;
    margin-top: 80px;
    margin-left: 54px;
  }

  #centralCover {
    position: absolute;
    height: 230px;
    width: 400px;
    margin-top: 298px;

    overflow: hidden;
  }
  h1 {
    margin-bottom: 4px;
  }
  h2 {
    font-size: larger;
    margin-top: 0;
    margin-bottom: 0;
    clear: both;
  }
  .beakerHead {
    text-align: center;
    position: relative;
    top: 14%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 20pt;
    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: transparent;
    filter: invert(1);
  }
  .beakerSub {
    text-align: center;
    position: relative;
    transform: translateY(+100%);
    -ms-transform: translateY(+100%);
    -webkit-transform: translateY(+100%);

    font-size: 10pt;
    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: transparent;
    filter: invert(1);
  }
  #centralBeakerHead {
    text-align: center;
    position: relative;
    top: 14%;
    -ms-transform: translateY(-140%);
    -webkit-transform: translateY(-140%);
    transform: translateY(-140%);
    font-size: 20pt;
    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: transparent;
    filter: invert(1);
  }

  #centralBeakerSub {
    text-align: center;
    position: relative;
    transform: translateY(+160%);
    -ms-transform: translateY(+160%);
    -webkit-transform: translateY(+160%);

    font-size: 10pt;
    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: transparent;
    filter: invert(1);
  }
  #centralBeakerPrecipitateHead {
    text-align: center;
    position: relative;
    top: 14%;
    -ms-transform: translateY(+290%);
    -webkit-transform: translateY(+290%);
    transform: translateY(+290%);
    font-size: 20pt;
    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: var(--solid-colour);
    filter: invert(1);
  }

  #centralBeakerPrecipitateSub {
    text-align: center;
    position: relative;
    font-size: 10pt;
    transform: translateY(+870%);
    -ms-transform: translateY(+870%);
    -webkit-transform: translateY(+870%);

    background: inherit;
    -webkit-background-clip: text;

    background-clip: text;
    color: var(--solid-colour);
    filter: invert(1);
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

  .rectangle {
    width: 200px;
    height: 300px;
    margin: auto;
    border-radius: 8px;
    border: 2px solid black;
    background-color: var(--solute-colour);
    font-size: 20pt;
  }

  #centralRectangle {
    width: 400px;
    height: 600px;
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
