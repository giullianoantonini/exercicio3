interface Objeto {
  um: number;
  dois: number;
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}

const nome: string = "Abel";

console.log(nome);

const numero: number = 1;

console.log(numero);

const verdadeiro: boolean = true;

console.log(verdadeiro);

const nulo: null = null;

console.log(nulo);

const indefinido: undefined = undefined;

console.log(indefinido);

const lista: number[] = [1, 2];

console.log(lista);

const qualquer: any = "qualquer";

console.log(qualquer);

const objetos: Objeto = {
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
