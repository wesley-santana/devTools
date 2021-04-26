//Registro

console.log("mensagem");

// Erro

console.error("mensagem de erro");

// Alerta

console.warn("mensagem de alerta");

// Afirmação

console.assert("1" === 1, "is false");

console.groupCollapsed("Grupo de mensagens Collapsed");
console.log("mensagem 1");
console.log("mensagem 2");
console.log("mensagem 3");
console.groupEnd();

console.group("Grupo de mensagens");
console.log("mensagem 4");
console.log("mensagem 5");
console.log("mensagem 6");
console.groupEnd();

console.table([
  [1, 2, 3],
  [4, 5, 6],
]);

console.table([
  { name: "Lucas", age: 10 },
  { name: "Alan", age: 20 },
  { name: "Pedro", age: 30 },
]);
