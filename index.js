"use strict";
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
})(DiaDaSemana || (DiaDaSemana = {}));
const nome = "Abel";
console.log(nome);
const numero = 1;
console.log(numero);
const verdadeiro = true;
console.log(verdadeiro);
const nulo = null;
console.log(nulo);
const indefinido = undefined;
console.log(indefinido);
const lista = [1, 2];
console.log(lista);
const qualquer = "qualquer";
console.log(qualquer);
const objetos = {
    um: 1,
    dois: 2,
};
console.log(objetos);
console.log(DiaDaSemana.Domingo);
console.log(DiaDaSemana.Segunda);
console.log(DiaDaSemana.Terça);
console.log(DiaDaSemana.Quarta);
console.log(DiaDaSemana.Quinta);
console.log(DiaDaSemana.Sexta);
console.log(DiaDaSemana.Sábado);
