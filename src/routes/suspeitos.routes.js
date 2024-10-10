import { Router } from "express"

const suspeitosRoutes = Router()

// Array com suspeitos pré-cadastrados
let suspeitos = [{

    id: Math.floor(Math.random() * 1000000),
    nome: "Pedro",
    idade: 50,
    profissao: "Médico",
    envolvido: "sim",
    suspeita: "alto",

},

 {
    id: Math.floor(Math.random() * 1000000),
    nome: "weston",
    idade: 20,
    profissao: "desenvolvedor",
    envolvido: "nao",
    suspeita: "baixo",

 },
 {
    id: Math.floor(Math.random() * 1000000),
    nome: "brayan",
    idade: 35,
    profissao: "piloto",
    envolvido: "sim",
    suspeita: "medio",

 },
 {
    id: Math.floor(Math.random() * 1000000),
    nome: "pablo.victor",
    idade: 16,
    profissao: "empacotador",
    envolvido: "sim",
    suspeita: "baixo",

 },
]