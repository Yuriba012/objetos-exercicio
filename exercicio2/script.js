const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// a)
console.log(filme.elenco[0])

// b)
console.log(filme.elenco[filme.elenco.length-1])

// c)
let texto = ''
filme.transmissoesHoje.forEach(function(transmissao){
	texto += ` Canal: ${transmissao.canal} | Horário: ${transmissao.horario}\n\n`
})
console.log(texto)

// d)
console.log(`Canal Brasil: ${filme.transmissoesHoje[1].horario}`)