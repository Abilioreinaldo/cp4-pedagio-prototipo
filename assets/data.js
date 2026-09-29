// Praças, pórticos e tarifas de demonstração (ilustrativos).
var PRACAS = [
  { nome: 'Praça Castello Branco I', rod: 'SP-280', t: 6.40 },
  { nome: 'Praça Castello Branco II', rod: 'SP-280', t: 5.80 },
  { nome: 'Praça Rodoanel Oeste', rod: 'SP-021', t: 2.90 },
  { nome: 'Pórtico Free Flow 01', rod: 'trecho ilustrativo', t: 3.60, ff: true },
  { nome: 'Praça Anchieta', rod: 'SP-150', t: 14.20 }
];
function brl(v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
function sgn(v) { return Math.abs(v) < 0.005 ? brl(0) : (v > 0 ? '+ ' : '− ') + brl(Math.abs(v)); }
var FF_TAG = '<span class="pill ff" style="margin-left:8px;vertical-align:1px">Free flow</span>';
