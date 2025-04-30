TimeA = int(input("Pontos do time A: "))
TimeB = int(input("Pontos do time B: "))
if TimeA > TimeB:
    print("Time A venceu")
elif TimeA < TimeB:
    print("Time B venceu")
    
if TimeA == TimeB:
    print("Empate")