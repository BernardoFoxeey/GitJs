compra = int(input("Valor da compra: "))
prestacao = int(input("Valor da prestacao: "))
juros = int(input("Valor dos juros: "))
if prestacao > compra:
    print("Prestacao maior que a compra")
elif prestacao < compra:
    print("Prestacao menor que a compra")
