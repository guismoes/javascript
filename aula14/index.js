    let num1 = 0.7
    let num2 = 0.1
    
    num1 += num2
    num1 += num2
    num1 += num2
    num1 = Number(num1.toFixed(2))
    
    console.log(Number.isInteger(num1))
    console.log(num1)

    // console.log(num1.toString() + num2)
    // num1 = num1.toString();
    // console.log(num1.toString(2)) Representacao Binaria
    // console.log (num2.toFixed(2)) Para arredondar um numero decimal
    // console.log(Number.isInteger(num1)) Para verificar se é um numero inteiro
    // console.log(Number.isNaN(num1)) Para verificar se a conta é valida