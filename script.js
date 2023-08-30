// PRIMEIRO ESTÃO DECLARADAS ALGUMAS DAS PRINCIPAIS VARIÁVEIS, ONDE SAO BUSCADAS NO HTML PELO ID

const convertButton = document.querySelector("#convertButton")
const currencySelect = document.querySelector("#currency-select")


// AQUI ESTÃO AS FUNÇÕES, QUE SÃO CHAMADAS A PARTIR DE AÇÕES EXECUTADAS NO HTML


// ESSA FUNÇÃO CONVERTER OS VALORES
    function convertValues() { 
    const inputCurrency = document.querySelector("#input-currency").value      //CONSTANTES QUE BUSCAM NO HTML OS ELEMENTOS PELO ID
    const initialValue = document.querySelector("#initial-value")
    const finalValue = document.querySelector("#final-value")


    const dollarToday = 4.87    //AQUI ESTÃO DECLARADAS OS VALORES DAS MOEDAS NO DIA
    const euroToday =   5.32

    //AQUI ESTÃO SENDO TROCADOS OS VALORES NO HTML PELOS NOVOS VALORES. ESSA É A FUNÇÃO DO INNERHTML. NO INICIO ESTÁ O NOME DA CONSTANTE QUE SERÁ MUDADA LA. O NEW... É PARA COLOCAR O TIPO DE MOEDA. O PRIMEIRO É A MOEDA DO BRASIL, O SEGUNDO O DOLAR E O TERCEIRO O EURO.

    initialValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
         }).format(inputCurrency)  //AQUI ESTÁ SENDO COLOCADO O VALOR QUE A PESSOA DIGITOU NA TELA

    if (currencySelect.value == "dolar") {
        finalValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrency/dollarToday)  //AQUI ESTÁ SENDO FEITO O CALCULO E MOSTRANDO NA TELA
    }

    if (currencySelect.value == "euro") {
        finalValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency/euroToday)   //AQUI ESTÁ SENDO FEITO O CALCULO E MOSTRANDO NA TELA

    }
}


// ESSA FUNÇÃO SERVE PARA MUDAR O NOME E A IMAGEM QUANDO O SELECT FOR ALTERADO. ASSIM, SE ESTIVER DOLAR É PARA APARECER O NOME DOLAR E A IMAGEM DOS ESTADOS UNIDOS. QUANDO O SELECT FOR EURO, APARECE O NOME EURO E A IMAGEM DO EURO.

//CHANGE É MUDANÇA


function changeCurrency () {
    const currencyName = document.getElementById("currency-name")       //AQUI ESTÁ DECLARADO AS VARIAVEIS QUE ESTARÃO NAS MUDANÇAS
    const currencyImg = document.getElementById("currency-img")
    
    if(currencySelect.value == "dolar"){    //SE O VALOR DO CURRENCYSELEC FOR DOLAR IRÃ APARECER O TEXTO DOLAR E A IMAGEM DOS EUA
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/img/dollar.png"
    }

    if(currencySelect.value == "euro"){        //SE O VALOR DO CURRENCYSELEC FOR EURO IRÃ APARECER O TEXTO EURO E A IMAGEM DOS EURO
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"

    }

    convertValues()   //AQUI ELE COLOCA A PRIMEIRA FUNÇÃO E MODIFICA O VALOR SEMPRE QUE SELECIONADO
}


currencySelect.addEventListener("change", changeCurrency)      //AQUI OBSERVA QUANDO EXISTE MUDANÇA NO CURRENCY SELECT
convertButton.addEventListener("click", convertValues)          //AQUI OBSERVA QUANDO EXISTE UM CLICK NO BOTÃO

