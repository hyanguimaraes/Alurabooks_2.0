/* JS SÍNCRONO */

/* console.log("Mandando oi pra uma amigo");

function mandaMensagem(){
    console.log("Tudo bem?");
    console.log("Vou te mandar uma solicitação!");
    console.log("Solicitação recebida");
}

mandaMensagem();

console.log("Tchau, tchau"); */

/* ------------------------------ */

/* JS ASSÍNCRONO */

console.log("Mandando oi pra uma amigo");

function mandaMensagem(){
    console.log("Tudo bem?");
    console.log("Vou te mandar uma solicitação!");
    console.log("Solicitação recebida");
}

setTimeout(mandaMensagem, 5000);

console.log("Tchau, tchau");