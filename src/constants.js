module.exports = { 
  // constants

  ANION_INDICES: ['F-', 'Cl-', 'Br-', 'I-', 'OH-', 'SCN-', 'NO3-', 'C2H3O2-', 'CO3--', 'SO4--', 'PO4---'],
  CATION_INDICES: ['NH4+', 'Li+', 'Na+', 'K+', 'Be++', 'Mg++', 'Ca++', 'Sr++', 'Ba++', 'Al+++', 'Mn++', 'Fe++', 'Co++', 'Ni++', 'Cu++', 'Zn++', 'Hg++', 'Pb++', 'Cr+++', 'Fe+++', 'Ag+', 'H+'],

  ANION_NAMES: ['fluoride', 'chloride', 'bromide', 'iodide', 'hydroxide', 'thiocyanate', 'nitrate', 'acetate', 'carbonate', 'sulfate', 'phosphate'],
  CATION_PROPER_NAMES: ['ammonium', 'lithium', 'sodium', 'potassium', 'beryllium', 'magnesium', 'calcium', 'strontium', 'barium', 'aluminium', 'manganese(II)', 'iron(II)', 'cobalt(II)', 'nickel(II)', 'copper(II)', 'zinc(II)', 'mercury(II)', 'lead(II)', 'chromium(III)', 'iron(III)', 'silver', 'hydrogen'],
  REACTION_TABLE: [
    [['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#edbf18'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff']],
    [['S', '#f8f8ff'], ['S', '#edbf18'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff']],
    [['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff']],
    [['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff']],
    [['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['I', '#e3e3ca']],
    [['I', '#87ceeb'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#e3e3ca'], ['I', '#e3e3ca']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#87ceeb'], ['I', '#e3e3ca']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#e3e3ca'], ['I', '#e3e3ca']],
    [['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f0e68c'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['R', 'Al(OH)3', 'I', '#e3e3ca', 'aluminium hydroxide'], ['S', '#f8f8ff'], ['I', '#e3e3ca']],
    [['S', '#ffc0cb'], ['S', '#ffc0cb'], ['S', '#ffc0cb'], ['S', '#ffc0cb'], ['I', '#cd853f'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#ffc0cb'], ['I', '#ffc0cb'], ['S', '#ffc0cb'], ['I', '#ffc0cb']],
    [['S', '#f8f8ff'], ['S', '#008000'], ['S', '#f0e68c'], ['S', '#f8f8ff'], ['I', '#9acd32'], ['S', '#f8f8ff'], ['S', '#008000'], ['S', '#9acd32'], ['I', '#9acd32'], ['S', '#9acd32'], ['I', '#f4a460']],
    [['S', '#fa8072'], ['S', '#fa8072'], ['S', '#ee82ee'], ['S', '#008000'], ['I', '#0000ff'], ['S', '#a52a2a'], ['S', '#cf0023'], ['S', '#ffc0cb'], ['I', '#800080'], ['S', '#cf0023'], ['I', '#ee82ee']],
    [['S', '#008000'], ['S', '#9acd32'], ['S', '#0000ff'], ['S', '#008000'], ['I', '#9acd32'], ['S', '#daa520'], ['S', '#008000'], ['S', '#00ffff'], ['I', '#9acd32'], ['S', '#0000ff'], ['I', '#9acd32']],
    [['I', '#00ffff'], ['S', '#0000ff'], ['S', '#006400'], ['R', 'CuI', 'I', '#e3e3ca', 'copper(I) iodide'], ['I', '#0000ff'], ['I', '#000000'], ['S', '#0000ff'], ['S', '#00008b'], ['R', 'Cu2(OH)2CO3', 'I', '#2e8b57', 'copper(II) carbonate hydroxide'], ['S', '#0000ff'], ['I', '#87ceeb']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['I', '#e3e3ca']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#ff4500'], ['R', 'HgO', 'I', '#ffa500', 'mercury(II) oxide'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#edbf18'], ['I', '#e3e3ca']],
    [['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#edbf18'], ['I', '#e3e3ca'], ['I', '#f0e68c'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#e3e3ca'], ['I', '#e3e3ca']],
    [['I', '#006400'], ['S', '#006400'], ['S', '#006400'], ['S', '#006400'], ['I', '#008000'], ['S', '#008000'], ['S', '#00008b'], ['S', '#006400'], ['I', '#e0ffff'], ['I', '#5f9ea0'], ['I', '#9932cc']],
    [['S', '#faebd7'], ['S', '#edbf18'], ['S', '#8b4513'], ['R', 'FeI2', 'S', '#f8f8ff', 'iron(II) iodide'], ['I', '#ff8c00'], ['S', '#cf0023'], ['S', '#cf0023'], ['S', '#cd5c5c'], ['R', 'Fe2O3', 'I', '#cf0023', 'iron(III) oxide'], ['S', '#ffa500'], ['I', '#cd853f']],
    [['S', '#f8f8ff'], ['I', '#e3e3ca'], ['I', '#f0e68c'], ['I', '#edbf18'], ['I', '#cd853f'], ['I', '#e3e3ca'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['I', '#edbf18'], ['I', '#e3e3ca'], ['I', '#cd853f']],
    [['S', '#f8f8ff'], ['S', '#edbf18'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#f8f8ff'], ['S', '#edbf18'], ['S', '#f8f8ff'], ['S', '#008000'], ['S', '#f8f8ff'], ['S', '#f8f8ff']]
  ]
};
