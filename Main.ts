import prompt from "prompt-sync";

let teclado = prompt();

console.clear();


let option: Number = 0;

while (option < 7){
    console.log ("MOVER TUDO PARA ALGUMA CLASS")
    console.log ("1. cadastro livros")
    console.log ("2. remover livros")
    console.log ("3. listar livros")
    console.log ("4. resetar livros")
    console.log ("5. modificar livros")
    console.log ("6. listar capitulo livros")
    console.log ("7. sair")
    
    option = +teclado('Opção: ')

    switch (option){
        case 1:     
        
        break
        case 2: 

        break
        case 3: 
        
        break
        case 4: 

        break
        case 5: 

        break
        case 6: 

        break
    }

} 