import { Router } from "express"

const suspeitosRoutes = Router()

// Array com suspeitos pré-cadastrados
let suspeitos = [{

    id: Math.floor(Math.random() * 100),
    nome: "Pedro",
    profissao: "Médico",
    envolvido: "sim",
    suspeita: "alto",

},

 {
    id: Math.floor(Math.random() * 100),
    nome: "weston",
    profissao: "desenvolvedor",
    envolvido: "nao",
    suspeita: "baixo",

 },
 {
    id: Math.floor(Math.random() * 100),
    nome: "brayan",
    profissao: "piloto",
    envolvido: "sim",
    suspeita: "medio",

 },
 {
    id: Math.floor(Math.random() * 100),
    nome: "pablo.victor",
    profissao: "empacotador",
    envolvido: "sim",
    suspeita: "baixo",

 },
]
// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( suspeitos )
  })

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvido, suspeita } = req.body
    // Validação dos campos obrigatórios
    if (!nome || ! !profissao ) {
      return res.status(400).json({
        message: "Os campos nome, profissao , sao obrigatorios!",
      })
    }
    if (envolvido != "sim" && envolvido != "não") {
      return res.status(400).send({
        message: "Escreva 'sim' ou 'não'! em envolvido",
      })
    }
        
    // Criação de um novo suspeito
    const novoSuspeito = {
      id: Math.floor(Math.random() * 100),
      nome,
      profissao,
      envolvido,
      suspeita,
    }      

   

    // Adiciona o novo suspeito ao array de suspeitos
    suspeitos.push(novoSuspeito)

    return res.status(201).json({
      message: "Login concluído com sucesso!",
      novoSuspeito,
    })
  })
  
  // Rota para buscar um suspeito pelo id                                                
  suspeitosRoutes.get("/:id", (req, res) => {                                        
    const { id } = req.params                                                        
                                                                                              
    // Busca um suspeito pelo id no array de suspeitos                               
    const suspeito = suspeitos.find((suspect) => suspect.id == id)                    
                                                                                              
    // Verifica se o suspeito foi encontrado                                         
    if (!suspeito) {                                                                   
      return res                                                                     
        .status(404)                                                                 
        .json({ message: `suspeito com este id não foi encontrado! 😭` })
    }                                                                                  
    return res.status(200).json(suspeito)                                            
  })                                                                                 
  // Rota para atualizar um suspeito pelo id                                          
  suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade, profissão, envolvido,suspeita } = req.body;

    const suspeitoIndex = suspeitos.findIndex(suspeito => suspeito.id === Number(id));

    if (suspeitoIndex < 0) {
        return res.status(404).send({ message: "Suspeito não encontrado" });
    }                                                                             
                                                                           
                                                                                           
    suspeito.nome = nome                                                                 
    suspeito.profissao = profissao                                                   
    suspeito.envolvido = envolvido                                                   
    suspeito.suspeita = suspeita                                                     
                                                                                           
    return res.status(200).json({                                                    
      message: "Suspeito renovado com sucesso!",                                   
      suspeito,                                                                      
    })                                                                                 
  })                                                                                 
  
  // Rota para deletar um suspeito                                                     
  suspeitosRoutes.delete("/:id", (req, res) => {                                     
    const { id } = req.params                                                        
                                                                                              
    // Busca um suspeito pelo id no array de suspeitos                               
    const suspeito = suspeitos.find((suspect) => suspect.id == id)                   
                                                                                              
    // Verifica se o suspeito foi encontrado                                         
    if (!suspeito) {                                                                  
      return res                                                                   
        .status(404)                                                                 
        .json({ message: `suspeito com id ${id} não encontrado!` })                  
    }                                                                                 
                                                                                              
    // Remove o suspeito do array de suspeitos                                       
    suspeitos = suspeitos.filter((suspect) => suspect.id != id)                      
                                                                                              
    return res.status(200).json({                                                    
      message: "suspeito removido com sucesso!",                                     
      suspeito,                                                                      
    })                                                                                 
  })

  export default suspeitosRoutes


