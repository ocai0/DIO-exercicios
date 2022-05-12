//Status: Passa
// Obs: Ainda não sei o porque do index.ts não passar

while(entry = gets()) {
    let count = 0
    const [alfabeto, frase] = [entry, gets()]
    for(const letra of alfabeto) {
      for(const caractereDaFrase of frase) {
          count += (caractereDaFrase === letra) ? 1 : 0
      }
    }
    console.log(count)
  }