function preencheCampos(campos) {
    document.getElementById("id").value = campos.id
    document.getElementById("nome").value = campos.nome
    document.getElementById("email").value = campos.email

  }


  
  async function achaAlunos() {
    let n = parseInt(document.getElementById("id").value)
  
   
    const urls = 'http://localhost:3000/usuarios/' + `${n}`
   
    // const object = { id, nome, email };
  
    const myInitGet = {
      method: "GET",     
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const dados = await fetch(urls, myInitGet);
    const elens = await dados.json();

    console.log("Conteúdo de elens:", elens); 

    preencheCampos(elens[0]
        
    );
  }
  