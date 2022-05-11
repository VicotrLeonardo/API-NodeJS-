import livros from "../models/Livro.js";

class LivroController{

 static listarLivros = (req, res) => {
    livros.find((err, livros)=> {
        res.status(200).json(livros);
    })
 }

 static listarUmLivro = (req, res) => {
    const {id} = req.params.id;
    livros.findById(id, (err, livros)=> {
        if(err){
            res.status(400).send({message: `${err.message}, Falha ao localizar o livro`});
        }else{
            res.status(200).send(livros);
        }

       
    })
 }

 static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err)=>{
        if(err){
            res.status(500).send({message: `${err.message}, Falha ao cadastrar o livro!!`})
        }else{
            res.status(201).send(livro.toJSON());
        }
    })
 }

 static atualizarLivro = (req, res) => {

    const {id} = req.params
    livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
        if(!err){
            res.status(200).send({message: "Livro Atualizado com Sucesso"})
        }else{
            res.status(500).send({message: `${err.message}, Falha ao Atualizar o livro!!`})
        }
    } )
 }

 static excluirLivro = (req,res) => {
    const {id} = req.params
    livros.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.status(200).send({message: "Livro excluido com sucesso"})
        }else{
            res.status(500).send({message: `${err.message}, Falha ao remover o Livro`})
        }
    })
 }

}

export default LivroController