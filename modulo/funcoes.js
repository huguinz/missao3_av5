/*********************************************
 * Objetivo: Criar um sistema que gerencie números pares e ímpares
 * Data: 26/09/2024
 * Autor: Hugo Lopes
 * Versão: 1.0
 *********************************************/

function geradorDeListas(numeroInicial, numeroFinal) {
    let contadorPar = 0
    let contadorImpar = 0
    let resultado = ''

    const validacao = validarDados(numeroInicial, numeroFinal)
    if (validacao !== true) {
        return validacao
    }

    resultado += 'Números pares:\n'
    for (let contador = numeroInicial; contador <= numeroFinal; contador++) {
        if (contador % 2 === 0) {
            resultado += `${contador}\n`
            contadorPar++
        }
    }
    resultado += `Quantidade de números pares encontrados: ${contadorPar}\n\n`

    resultado += 'Números ímpares:\n'
    for (let contador = numeroInicial; contador <= numeroFinal; contador++) {
        if (contador % 2 !== 0) {
            resultado += `${contador}\n`
            contadorImpar++
        }
    }
    resultado += `Quantidade de números ímpares encontrados: ${contadorImpar}`

    return resultado
}

function validarDados(numeroInicial, numeroFinal) {
    if (numeroInicial === numeroFinal) {
        return 'NÃO É PERMITIDO A ENTRADA DE VALORES IGUAIS'
    } else if (numeroInicial > numeroFinal) {
        return 'NÃO É PERMITIDO O INICIO SER MAIOR QUE O FINAL'
    } else if (numeroInicial < 0 || numeroInicial > 500) {
        return 'O VALOR DE INICIO DEVE ESTAR ENTRE 0 E 500'
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        return 'O VALOR DO FINAL DEVE ESTAR ENTRE 100 e 1000'
    } else if (numeroInicial === '' || numeroFinal === '') {
        return 'NÃO É PERMITIDO CAMPOS VAZIOS'
    }

    return true 
}

const resultado = geradorDeListas(2, 101);
console.log(resultado);