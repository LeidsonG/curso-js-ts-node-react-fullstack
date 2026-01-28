let string1 = 'Um "Texto"';            // aspas simples
let string2 = "Um \"Texto\"";          // aspas duplas com escape
let string3 = `Um "Texto"`;            // template string (crase)
let string4 = 'Um \'Texto\'';          // aspas simples com escape
let string5 = "Um 'Texto'";            // aspas duplas com aspas simples dentro
let string6 = `Um 
Texto`;                                // template string com quebra de linha
let string7 = `Um ${"Texto"}`;         // template string com interpolação

console.log(
  string1, "\n",
  string2, "\n",
  string3, "\n",
  string4, "\n",
  string5, "\n",
  string6, "\n",
  string7
);