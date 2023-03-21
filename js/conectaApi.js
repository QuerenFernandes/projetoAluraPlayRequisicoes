async function listaVideos(){
    // requisicao get - solicitando valores da API
    const conexao = await fetch("colocar caminho do computador");
    const conexaoConvertida = await conexao.json();
   
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("colocar caminho do computador", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem:imagem
        })
    });

    if(!conexao.ok){
        throw new error("Não foi possível enviar o video");
    }
    const conexaoConvertida = await conversao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`colocar caminho do computador?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}   

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}