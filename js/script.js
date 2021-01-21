const prefisso = 'fas';
const tipo = 'fa-';
const family = [
{
  nome: 'cat',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'crow',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'dog',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'dove',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'dragon',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'horse',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'hippo',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'fish',
  prefisso,
  tipo,
  famiglia: 'animals'
},
{
  nome: 'carrot',
  prefisso,
  tipo,
  famiglia: 'vegetable'
},{
  nome: 'apple-alt',
  prefisso,
  tipo,
  famiglia: 'vegetable'
},{
  nome: 'lemon',
  prefisso,
  tipo,
  famiglia: 'vegetable'
},{
  nome: 'pepper-hot',
  prefisso,
  tipo,
  famiglia: 'vegetable'
},{
  nome: 'user-astronaut',
  prefisso,
  tipo,
  famiglia: 'user'
},{
  nome: 'user-graduate',
  prefisso,
  tipo,
  famiglia: 'user'
},
{
  nome: 'user-ninja',
  prefisso,
  tipo,
  famiglia: 'user'
}
];
// milestone 1
const iconsContainer = $('#container');
family.forEach((element) => {
//template literal
    const elementHtml = `
    <div>
        <i class="${element.famiglia} ${element.prefisso}${element.tipo}"></i>
        <div>${element.nome}</div>
    </div>
    `;
    iconsContainer.append(elementHtml);
});
// milestone 2


const tipi = [];

family.forEach((item) => {
  if (!tipi.includes(item.tipo)) {
    tipi.push(item.tipo)
  }
});
console.log(tipi);

family.forEach((item) => {
  const tipoIndex = tipi.indexOf(item.tipo);
  if (tipoIndex === -1) {
    item.tipo = colors[tipoIndex];
  }
});
