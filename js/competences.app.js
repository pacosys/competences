//(function(){
Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	var value = this.getItem(key);
	return value && JSON.parse(value);
}
if(localStorage.getItem("Students"))
	var Students = localStorage.getObj("Students");
else
	var Students={"5e4.NOUISSEMENT.Eva":{"name":"NOUISSEMENT","firstname":"Éva","birthdate":"10/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.NOUISSEMENT.Eva","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":2,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":2,"maths.5e.Changer":3,"maths.5e.Additionner-2":0,"maths.5e.Prendre":3,"maths.5e.Traduire-2":0,"maths.5e.Effectuer":2,"maths.5e.Determiner":2,"maths.5e.Comprendre":2,"maths.5e.Effectuer-2":3},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":2,"maths.5e.Calculer":3,"maths.5e.Comprendre":2,"maths.5e.Prendre":0,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":0,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":2},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":3,"maths.5e.Prendre":2,"maths.5e.Determiner":3,"maths.5e.Comprendre":0,"maths.5e.Calculer":1,"maths.5e.Changer":1},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":2,"maths.5e.Traduire":3,"maths.4e.Multiplier":3,"maths.5e.Additionner":0,"maths.5e.Calculer":3,"maths.5e.Traduire-2":3,"maths.5e.Determiner":1,"maths.5e.Changer":3,"maths.5e.Comprendre":3,"maths.6e.Additionner/Soustraire":2,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2}}},"5e4.PEINEFLAMME.Katy":{"name":"PEINEFLAMME","firstname":"Katy","birthdate":"11/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.PEINEFLAMME.Katy","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":0},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":0,"maths.5e.Calculer":2,"maths.5e.Changer":0,"maths.5e.Additionner-2":3,"maths.5e.Prendre":2,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":2,"maths.5e.Determiner":2,"maths.5e.Effectuer-2":1,"maths.5e.Comprendre":3},"5e4.20151227.DST2":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":0,"maths.5e.Calculer":1,"maths.5e.Comprendre":1,"maths.5e.Prendre":1,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":0,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":3,"maths.5e.Determiner":0,"maths.5e.Comprendre":1,"maths.5e.Calculer":2,"maths.5e.Changer":3},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":1,"maths.4e.Multiplier":3,"maths.5e.Additionner":3,"maths.5e.Calculer":1,"maths.5e.Traduire-2":1,"maths.5e.Determiner":0,"maths.5e.Changer":2,"maths.5e.Comprendre":1,"maths.6e.Additionner/Soustraire":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":2}}},"5e4.DI.Alain":{"name":"DI","firstname":"Alain","birthdate":"12/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.DI.Alain","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":0,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":1},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":3,"maths.5e.Changer":0,"maths.5e.Additionner-2":2,"maths.5e.Prendre":3,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":3,"maths.5e.Determiner":0,"maths.5e.Comprendre":1,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":2,"maths.5e.Determiner":0,"maths.5e.Calculer":1,"maths.5e.Comprendre":1,"maths.5e.Prendre":3,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":2,"maths.3e.Conna_tre-2":1,"maths.5e.Effectuer":2},"5e4.20151227.Interro1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":0,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":3,"maths.5e.Prendre":3,"maths.5e.Determiner":0,"maths.5e.Comprendre":3,"maths.5e.Calculer":3,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":1,"maths.4e.Multiplier":0,"maths.5e.Additionner":0,"maths.5e.Calculer":3,"maths.5e.Traduire-2":1,"maths.5e.Determiner":3,"maths.5e.Changer":3,"maths.5e.Comprendre":3,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":1}}},"5e4.CHMONFISSE.Thierry":{"name":"CHMONFISSE","firstname":"Thierry","birthdate":"13/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.CHMONFISSE.Thierry","evaluations":{"5e4.20151015.DST1":{"maths.6e.Reconnaitre":2,"maths.5e.Additionner-2":1,"maths.5e.Additionner":2,"maths.6e.Additionner":2,"maths.6e.Additionner/Soustraire":0},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire-2":1,"maths.5e.Additionner-2":1,"maths.5e.Changer":0,"maths.5e.Traduire":3,"maths.5e.Calculer":2,"maths.5e.Prendre":3,"maths.5e.Effectuer":2,"maths.5e.Determiner":3,"maths.5e.Comprendre":0,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":2,"maths.5e.Determiner":0,"maths.5e.Calculer":3,"maths.5e.Comprendre":2,"maths.5e.Prendre":0,"maths.4e.Conna_tre":2,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":0,"maths.5e.Effectuer":0},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":1,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":1,"maths.5e.Determiner":2,"maths.5e.Comprendre":2,"maths.5e.Calculer":3,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":2,"maths.5e.Traduire":3,"maths.4e.Multiplier":0,"maths.5e.Additionner":0,"maths.5e.Calculer":2,"maths.5e.Traduire-2":3,"maths.5e.Determiner":3,"maths.5e.Changer":0,"maths.5e.Comprendre":3,"maths.6e.Additionner/Soustraire":0,"maths.5e.Additionner-2":2,"maths.6e.Additionner":3}}},"5e4.DEBLOUZE.Agathe":{"name":"DEBLOUZE","firstname":"Agathe","birthdate":"14/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.DEBLOUZE.Agathe","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":1,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":3,"maths.5e.Changer":3,"maths.5e.Additionner-2":3,"maths.5e.Prendre":3,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":0,"maths.5e.Determiner":3,"maths.5e.Comprendre":3,"maths.5e.Effectuer-2":0},"5e4.20151227.DST2":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":2,"maths.5e.Calculer":2,"maths.5e.Comprendre":1,"maths.5e.Prendre":3,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":1},"5e4.20151227.Interro1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":0,"maths.5e.Determiner":1,"maths.5e.Comprendre":3,"maths.5e.Calculer":0,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":2,"maths.5e.Traduire":0,"maths.4e.Multiplier":1,"maths.5e.Additionner":3,"maths.5e.Calculer":2,"maths.5e.Traduire-2":3,"maths.5e.Determiner":3,"maths.5e.Changer":2,"maths.5e.Comprendre":2,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":1}}},"5e4.CULAIRE.Laury":{"name":"CULAIRE","firstname":"Laury","birthdate":"15/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.CULAIRE.Laury","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner-2":0,"maths.6e.Additionner":0,"maths.5e.Additionner":1,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":0},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":0,"maths.5e.Calculer":0,"maths.5e.Changer":2,"maths.5e.Additionner-2":2,"maths.5e.Prendre":0,"maths.5e.Traduire-2":3,"maths.5e.Effectuer":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":2,"maths.5e.Effectuer-2":3},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":1,"maths.5e.Calculer":3,"maths.5e.Comprendre":0,"maths.5e.Prendre":1,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":2,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":1,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":2,"maths.5e.Determiner":2,"maths.5e.Comprendre":0,"maths.5e.Calculer":2,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":1,"maths.5e.Traduire":2,"maths.4e.Multiplier":2,"maths.5e.Additionner":3,"maths.5e.Calculer":3,"maths.5e.Traduire-2":2,"maths.5e.Determiner":1,"maths.5e.Changer":2,"maths.5e.Comprendre":3,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0}}},"5e4.LEBLANC.Juste":{"name":"LEBLANC","firstname":"Juste","birthdate":"16/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.LEBLANC.Juste","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":2,"maths.5e.Changer":3,"maths.5e.Additionner-2":0,"maths.5e.Prendre":3,"maths.5e.Traduire-2":0,"maths.5e.Effectuer":2,"maths.5e.Determiner":0,"maths.5e.Comprendre":3,"maths.5e.Effectuer-2":1},"5e4.20151227.DST2":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":3,"maths.5e.Calculer":1,"maths.5e.Comprendre":1,"maths.5e.Prendre":1,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":1,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":0,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":3,"maths.5e.Prendre":0,"maths.5e.Determiner":0,"maths.5e.Comprendre":1,"maths.5e.Calculer":0,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":0,"maths.4e.Multiplier":2,"maths.5e.Additionner":1,"maths.5e.Calculer":1,"maths.5e.Traduire-2":3,"maths.5e.Determiner":3,"maths.5e.Changer":3,"maths.5e.Comprendre":1,"maths.6e.Additionner/Soustraire":3,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2}}},"5e4.DOEUF.John":{"name":"DOEUF","firstname":"John","birthdate":"17/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.DOEUF.John","evaluations":{"5e4.20151015.DST1":{"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2,"maths.5e.Additionner":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":3,"maths.5e.Calculer":2,"maths.5e.Changer":3,"maths.5e.Additionner-2":3,"maths.5e.Prendre":3,"maths.5e.Traduire-2":0,"maths.5e.Effectuer":1,"maths.5e.Determiner":2,"maths.5e.Comprendre":3,"maths.5e.Effectuer-2":3},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":2,"maths.5e.Determiner":2,"maths.5e.Calculer":2,"maths.5e.Comprendre":0,"maths.5e.Prendre":1,"maths.4e.Conna_tre":2,"maths.3e.Conna_tre":1,"maths.3e.Conna_tre-2":2,"maths.5e.Effectuer":2},"5e4.20151227.Interro1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":0,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":1,"maths.5e.Prendre":0,"maths.5e.Determiner":3,"maths.5e.Comprendre":2,"maths.5e.Calculer":2,"maths.5e.Changer":1},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":2,"maths.4e.Multiplier":0,"maths.5e.Additionner":0,"maths.5e.Calculer":2,"maths.5e.Traduire-2":3,"maths.5e.Determiner":0,"maths.5e.Changer":0,"maths.5e.Comprendre":3,"maths.6e.Additionner/Soustraire":3,"maths.5e.Additionner-2":0,"maths.6e.Additionner":0}}},"5e4.NIMO.Roger":{"name":"NIMO","firstname":"Roger","birthdate":"18/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.NIMO.Roger","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":0,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":0},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":3,"maths.5e.Calculer":1,"maths.5e.Changer":3,"maths.5e.Additionner-2":1,"maths.5e.Prendre":0,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":3,"maths.5e.Determiner":0,"maths.5e.Comprendre":2,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":1,"maths.5e.Calculer":2,"maths.5e.Comprendre":2,"maths.5e.Prendre":0,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":2,"maths.5e.Effectuer":1},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":3,"maths.5e.Calculer":2,"maths.5e.Changer":1},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":0,"maths.4e.Multiplier":2,"maths.5e.Additionner":0,"maths.5e.Calculer":0,"maths.5e.Traduire-2":2,"maths.5e.Determiner":0,"maths.5e.Changer":0,"maths.5e.Comprendre":0,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":0}}},"5e4.NEMAR.Jean":{"name":"NÉMAR","firstname":"Jean","birthdate":"19/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.NEMAR.Jean","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":0,"maths.5e.Calculer":1,"maths.5e.Changer":3,"maths.5e.Additionner-2":3,"maths.5e.Prendre":3,"maths.5e.Traduire-2":3,"maths.5e.Effectuer":1,"maths.5e.Determiner":3,"maths.5e.Comprendre":3,"maths.5e.Effectuer-2":1},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2,"maths.5e.Determiner":0,"maths.5e.Calculer":1,"maths.5e.Comprendre":1,"maths.5e.Prendre":2,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":2,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":2},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":3,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":3,"maths.5e.Prendre":1,"maths.5e.Determiner":0,"maths.5e.Comprendre":3,"maths.5e.Calculer":2,"maths.5e.Changer":3},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":1,"maths.4e.Multiplier":2,"maths.5e.Additionner":3,"maths.5e.Calculer":1,"maths.5e.Traduire-2":3,"maths.5e.Determiner":0,"maths.5e.Changer":3,"maths.5e.Comprendre":1,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":3}}},"5e4.COVERT.Harry":{"name":"COVERT","firstname":"Harry","birthdate":"20/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.COVERT.Harry","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":0,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":1,"maths.5e.Changer":3,"maths.5e.Additionner-2":2,"maths.5e.Prendre":2,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":2,"maths.5e.Determiner":1,"maths.5e.Comprendre":2,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":0,"maths.5e.Calculer":0,"maths.5e.Comprendre":0,"maths.5e.Prendre":0,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":1,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":3,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":3,"maths.5e.Calculer":3,"maths.5e.Changer":3},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":0,"maths.5e.Traduire":1,"maths.4e.Multiplier":2,"maths.5e.Additionner":2,"maths.5e.Calculer":1,"maths.5e.Traduire-2":2,"maths.5e.Determiner":0,"maths.5e.Changer":1,"maths.5e.Comprendre":0,"maths.6e.Additionner/Soustraire":0,"maths.5e.Additionner-2":3,"maths.6e.Additionner":3}}},"5e4.SCROUTE.Jessica":{"name":"SCROUTE","firstname":"Jessica","birthdate":"21/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.SCROUTE.Jessica","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":1},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":3,"maths.5e.Calculer":2,"maths.5e.Changer":3,"maths.5e.Additionner-2":1,"maths.5e.Prendre":1,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":0,"maths.5e.Effectuer-2":3},"5e4.20151227.DST2":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":1,"maths.5e.Calculer":0,"maths.5e.Comprendre":3,"maths.5e.Prendre":0,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":0,"maths.5e.Effectuer":1},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":3,"maths.5e.Determiner":1,"maths.5e.Comprendre":3,"maths.5e.Calculer":2,"maths.5e.Changer":2},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":2,"maths.4e.Multiplier":0,"maths.5e.Additionner":3,"maths.5e.Calculer":2,"maths.5e.Traduire-2":3,"maths.5e.Determiner":1,"maths.5e.Changer":0,"maths.5e.Comprendre":1,"maths.6e.Additionner/Soustraire":3,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2}}},"5e4.FONFEC.Sophie":{"name":"FONFEC","firstname":"Sophie","birthdate":"22/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.FONFEC.Sophie","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":0,"maths.5e.Calculer":2,"maths.5e.Changer":0,"maths.5e.Additionner-2":3,"maths.5e.Prendre":3,"maths.5e.Traduire-2":0,"maths.5e.Effectuer":2,"maths.5e.Determiner":3,"maths.5e.Comprendre":1,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":2,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":0,"maths.5e.Calculer":3,"maths.5e.Comprendre":3,"maths.5e.Prendre":0,"maths.4e.Conna_tre":2,"maths.3e.Conna_tre":0,"maths.3e.Conna_tre-2":0,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":2,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":0,"maths.5e.Determiner":2,"maths.5e.Comprendre":0,"maths.5e.Calculer":1,"maths.5e.Changer":1},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":2,"maths.5e.Traduire":1,"maths.4e.Multiplier":1,"maths.5e.Additionner":2,"maths.5e.Calculer":2,"maths.5e.Traduire-2":2,"maths.5e.Determiner":0,"maths.5e.Changer":1,"maths.5e.Comprendre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Additionner-2":1,"maths.6e.Additionner":3}}},"5e4.BA.Angela":{"name":"BA","firstname":"Angéla","birthdate":"23/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.BA.Angela","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":3,"maths.5e.Calculer":3,"maths.5e.Changer":1,"maths.5e.Additionner-2":0,"maths.5e.Prendre":3,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":0,"maths.5e.Determiner":2,"maths.5e.Comprendre":1,"maths.5e.Effectuer-2":2},"5e4.20151227.DST2":{"maths.5e.Additionner":2,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":1,"maths.5e.Calculer":2,"maths.5e.Comprendre":2,"maths.5e.Prendre":2,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":1,"maths.3e.Conna_tre-2":1,"maths.5e.Effectuer":2},"5e4.20151227.Interro1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":1,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":1,"maths.5e.Determiner":1,"maths.5e.Comprendre":2,"maths.5e.Calculer":1,"maths.5e.Changer":1},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":1,"maths.5e.Traduire":2,"maths.4e.Multiplier":3,"maths.5e.Additionner":0,"maths.5e.Calculer":3,"maths.5e.Traduire-2":0,"maths.5e.Determiner":1,"maths.5e.Changer":2,"maths.5e.Comprendre":2,"maths.6e.Additionner/Soustraire":0,"maths.5e.Additionner-2":3,"maths.6e.Additionner":3}}},"5e4.ZEPAOUEUR.Agathe":{"name":"ZEPAOUEUR","firstname":"Agathe","birthdate":"24/12/2000","gender":"F","school":"Mon college","class":"5e4","groups":"","id":"5e4.ZEPAOUEUR.Agathe","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":2},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":2,"maths.5e.Calculer":3,"maths.5e.Changer":2,"maths.5e.Additionner-2":3,"maths.5e.Prendre":2,"maths.5e.Traduire-2":2,"maths.5e.Effectuer":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":1,"maths.5e.Effectuer-2":1},"5e4.20151227.DST2":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":0,"maths.5e.Calculer":3,"maths.5e.Comprendre":2,"maths.5e.Prendre":1,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":1,"maths.3e.Conna_tre-2":2,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Prendre":3,"maths.5e.Determiner":2,"maths.5e.Comprendre":1,"maths.5e.Calculer":3,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":1,"maths.5e.Traduire":3,"maths.4e.Multiplier":3,"maths.5e.Additionner":3,"maths.5e.Calculer":3,"maths.5e.Traduire-2":1,"maths.5e.Determiner":2,"maths.5e.Changer":3,"maths.5e.Comprendre":2,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2}}},"5e4.LAIRBON.Oussama":{"name":"LAIRBON","firstname":"Oussama","birthdate":"26/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.LAIRBON.Oussama","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":2,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":1},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":1,"maths.5e.Calculer":3,"maths.5e.Changer":0,"maths.5e.Additionner-2":3,"maths.5e.Prendre":2,"maths.5e.Traduire-2":1,"maths.5e.Effectuer":3,"maths.5e.Determiner":0,"maths.5e.Comprendre":2,"maths.5e.Effectuer-2":1},"5e4.20151227.DST2":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":1,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":1,"maths.5e.Determiner":1,"maths.5e.Calculer":3,"maths.5e.Comprendre":2,"maths.5e.Prendre":2,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":0,"maths.3e.Conna_tre-2":1,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":3,"maths.5e.Additionner-2":2,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":3,"maths.5e.Determiner":1,"maths.5e.Comprendre":3,"maths.5e.Calculer":0,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":3,"maths.5e.Traduire":0,"maths.4e.Multiplier":1,"maths.5e.Additionner":3,"maths.5e.Calculer":1,"maths.5e.Traduire-2":0,"maths.5e.Determiner":2,"maths.5e.Changer":0,"maths.5e.Comprendre":1,"maths.6e.Additionner/Soustraire":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":0}}},"5e4.OREE.Rick":{"name":"ORÉE","firstname":"Rick","birthdate":"27/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.OREE.Rick","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":1},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":0,"maths.5e.Calculer":1,"maths.5e.Changer":0,"maths.5e.Additionner-2":1,"maths.5e.Prendre":3,"maths.5e.Traduire-2":0,"maths.5e.Effectuer":1,"maths.5e.Determiner":0,"maths.5e.Comprendre":1,"maths.5e.Effectuer-2":0},"5e4.20151227.DST2":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":1,"maths.5e.Calculer":0,"maths.5e.Comprendre":1,"maths.5e.Prendre":1,"maths.4e.Conna_tre":3,"maths.3e.Conna_tre":3,"maths.3e.Conna_tre-2":3,"maths.5e.Effectuer":3},"5e4.20151227.Interro1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":0,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":0,"maths.6e.Additionner/Soustraire":2,"maths.5e.Prendre":1,"maths.5e.Determiner":3,"maths.5e.Comprendre":2,"maths.5e.Calculer":3,"maths.5e.Changer":0},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":2,"maths.5e.Traduire":3,"maths.4e.Multiplier":1,"maths.5e.Additionner":0,"maths.5e.Calculer":3,"maths.5e.Traduire-2":2,"maths.5e.Determiner":0,"maths.5e.Changer":1,"maths.5e.Comprendre":0,"maths.6e.Additionner/Soustraire":2,"maths.5e.Additionner-2":2,"maths.6e.Additionner":0}}},"5e4.ALAVANILLE.Douglas":{"name":"ALAVANILLE","firstname":"Douglas","birthdate":"25/12/2000","gender":"M","school":"Mon college","class":"5e4","groups":"","id":"5e4.ALAVANILLE.Douglas","evaluations":{"5e4.20151015.DST1":{"maths.5e.Additionner":1,"maths.5e.Additionner-2":1,"maths.6e.Additionner":0,"maths.6e.Reconnaitre":2,"maths.6e.Additionner/Soustraire":0},"5e4.20160219.DevoirCommun1":{"maths.5e.Traduire":3,"maths.5e.Calculer":3,"maths.5e.Changer":2,"maths.5e.Additionner-2":3,"maths.5e.Prendre":0,"maths.5e.Traduire-2":3,"maths.5e.Effectuer":3,"maths.5e.Determiner":3,"maths.5e.Comprendre":0,"maths.5e.Effectuer-2":1},"5e4.20151227.DST2":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":2,"maths.6e.Additionner":3,"maths.6e.Reconnaitre":3,"maths.6e.Additionner/Soustraire":3,"maths.5e.Determiner":0,"maths.5e.Calculer":3,"maths.5e.Comprendre":1,"maths.5e.Prendre":3,"maths.4e.Conna_tre":1,"maths.3e.Conna_tre":2,"maths.3e.Conna_tre-2":2,"maths.5e.Effectuer":1},"5e4.20151227.Interro1":{"maths.5e.Additionner":0,"maths.5e.Additionner-2":1,"maths.6e.Additionner":2,"maths.6e.Reconnaitre":1,"maths.6e.Additionner/Soustraire":0,"maths.5e.Prendre":2,"maths.5e.Determiner":0,"maths.5e.Comprendre":3,"maths.5e.Calculer":3,"maths.5e.Changer":2},"5e4.20160421.DevoirCommun3":{"maths.5e.Effectuer":1,"maths.5e.Traduire":2,"maths.4e.Multiplier":3,"maths.5e.Additionner":1,"maths.5e.Calculer":2,"maths.5e.Traduire-2":2,"maths.5e.Determiner":2,"maths.5e.Changer":1,"maths.5e.Comprendre":0,"maths.6e.Additionner/Soustraire":3,"maths.5e.Additionner-2":3,"maths.6e.Additionner":2}}}};
var s={};for(var id in Students){
	s = Students[id];
	if(s&&s.birthdate&&!s.birthdateReverse)
		s["birthdateReverse"] = s.birthdate.split('/').reverse().join("-");
}
if(localStorage.getItem("Competences"))
	var Competences = localStorage.getObj("Competences");
else
//	var Competences = { "numérique": { "maths.5e.Additionner": { "name": "Additionner des nombres relatifs", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Additionner", "subject": "maths", "directory": "numérique" }, "maths.4e.Multiplier": { "name": "Multiplier des nombres relatifs", "level": "4e", "details": "", "groups": "numérique", "id": "maths.4e.Multiplier", "subject": "maths", "directory": "numérique" }, "maths.5e.Effectuer": { "name": "Effectuer des opérations dans le bon ordre", "level": "5e", "details": "Trouver les bonnes opérations pour resoudre un problème", "groups": "numérique problèmes", "id": "maths.5e.Effectuer", "subject": "maths", "directory": "numérique" }, "maths.5e.Changer": { "name": "Changer le dénominateur d'une fraction", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Changer", "subject": "maths", "directory": "numérique" }, "maths.5e.Calculer": { "name": "Calculer avec les priorités opératoires", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Calculer", "subject": "maths", "directory": "numérique" }, "maths.5e.Prendre": { "name": "Prendre une fraction d'une quantité", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Prendre", "subject": "maths", "directory": "numérique" }, "maths.5e.Traduire": { "name": "Traduire un énoncé en une expression numérique", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Traduire", "subject": "maths", "directory": "numérique" }, "maths.4e.Additionner": { "name": "Additionner des fractions de dénominateurs différents", "level": "4e", "details": "", "groups": "numérique", "id": "maths.4e.Additionner", "subject": "maths", "directory": "numérique" }, "maths.6e.Additionner": { "name": "Additionner ou soustraire des nombres décimaux", "level": "6e", "details": "", "groups": "numérique", "id": "maths.6e.Additionner", "subject": "maths", "directory": "numérique" }, "maths.5e.Additionner-2": { "name": "Additionner des fractions de dénominateurs differents", "level": "5e", "details": "", "groups": "numérique", "id": "maths.5e.Additionner-2", "subject": "maths", "directory": "numérique" } }, "géométrie": { "maths.6e.Effectuer": { "name": "Effectuer une symétrie axiale", "level": "6e", "details": "", "groups": "géométrie", "id": "maths.6e.Effectuer", "subject": "maths", "directory": "géométrie" }, "maths.5e.Effectuer-2": { "name": "Effectuer une symétrie centrale", "level": "5e", "details": "", "groups": "géométrie", "id": "maths.5e.Effectuer-2", "subject": "maths", "directory": "géométrie" }, "maths.6e.Reconnaitre": { "name": "Reconnaître les éléments de géométrie", "level": "6e", "details": "", "groups": "géométrie", "id": "maths.6e.Reconnaitre", "subject": "maths", "directory": "géométrie" }, "maths.5e.Comprendre": { "name": "Comprendre l'effet d'une symétrie centrale", "level": "5e", "details": "", "groups": "géométrie", "id": "maths.5e.Comprendre", "subject": "maths", "directory": "géométrie" }, "maths.4e.Conna_tre": { "name": "Connaître l'égalité de Pythagore", "level": "4e", "details": "", "groups": "géométrie", "id": "maths.4e.Conna_tre", "subject": "maths", "directory": "géométrie" }, "maths.5e.Determiner": { "name": "Déterminer un centre de symétrie", "level": "5e", "details": "", "groups": "géométrie", "id": "maths.5e.Determiner", "subject": "maths", "directory": "géométrie" }, "maths.3e.Conna_tre": { "name": "Connaître et appliquer le théorème de Thalès", "level": "3e", "details": "", "groups": "géométrie", "id": "maths.3e.Conna_tre", "subject": "maths", "directory": "géométrie" } }, "Calcul littéral": { "maths.5e.Traduire-2": { "name": "Traduire un énoncé en une expression littérale", "level": "5e", "details": "", "groups": "numérique littéral", "id": "maths.5e.Traduire-2", "subject": "maths", "directory": "Calcul littéral" }, "maths.3e.Conna_tre-2": { "name": "Connaître les identités remarquables", "level": "3e", "details": "", "groups": "numérique", "id": "maths.3e.Conna_tre-2", "subject": "maths", "directory": "Calcul littéral" } }, "Horaires et durées": { "maths.6e.Additionner/Soustraire": { "name": "Additionner/Soustraire des horaires et durées", "level": "6e", "details": "", "groups": "numérique", "id": "maths.6e.Additionner/Soustraire", "subject": "maths", "directory": "Horaires et durées" } } } ;
	var Competences = {"maths.5e.Additionner":{"name":"Additionner des nombres relatifs","level":"5e","details":"","groups":"numérique","id":"maths.5e.Additionner","subject":"maths","directory":"numérique"},"maths.4e.Multiplier":{"name":"Multiplier des nombres relatifs","level":"4e","details":"","groups":"numérique","id":"maths.4e.Multiplier","subject":"maths","directory":"numérique"},"maths.5e.Effectuer":{"name":"Effectuer des opérations dans le bon ordre","level":"5e","details":"Trouver les bonnes opérations pour resoudre un problème","groups":"numérique problèmes","id":"maths.5e.Effectuer","subject":"maths","directory":"numérique"},"maths.5e.Changer":{"name":"Changer le dénominateur d'une fraction","level":"5e","details":"","groups":"numérique","id":"maths.5e.Changer","subject":"maths","directory":"numérique"},"maths.5e.Calculer":{"name":"Calculer avec les priorités opératoires","level":"5e","details":"","groups":"numérique","id":"maths.5e.Calculer","subject":"maths","directory":"numérique"},"maths.5e.Prendre":{"name":"Prendre une fraction d'une quantité","level":"5e","details":"","groups":"numérique","id":"maths.5e.Prendre","subject":"maths","directory":"numérique"},"maths.5e.Traduire":{"name":"Traduire un énoncé en une expression numérique","level":"5e","details":"","groups":"numérique","id":"maths.5e.Traduire","subject":"maths","directory":"numérique"},"maths.4e.Additionner":{"name":"Additionner des fractions de dénominateurs différents","level":"4e","details":"","groups":"numérique","id":"maths.4e.Additionner","subject":"maths","directory":"numérique"},"maths.6e.Additionner":{"name":"Additionner ou soustraire des nombres décimaux","level":"6e","details":"","groups":"numérique","id":"maths.6e.Additionner","subject":"maths","directory":"numérique"},"maths.5e.Additionner-2":{"name":"Additionner des fractions de dénominateurs differents","level":"5e","details":"","groups":"numérique","id":"maths.5e.Additionner-2","subject":"maths","directory":"numérique"},"maths.6e.Effectuer":{"name":"Effectuer une symétrie axiale","level":"6e","details":"","groups":"géométrie","id":"maths.6e.Effectuer","subject":"maths","directory":"géométrie"},"maths.5e.Effectuer-2":{"name":"Effectuer une symétrie centrale","level":"5e","details":"","groups":"géométrie","id":"maths.5e.Effectuer-2","subject":"maths","directory":"géométrie"},"maths.6e.Reconnaitre":{"name":"Reconnaître les éléments de géométrie","level":"6e","details":"","groups":"géométrie","id":"maths.6e.Reconnaitre","subject":"maths","directory":"géométrie"},"maths.5e.Comprendre":{"name":"Comprendre l'effet d'une symétrie centrale","level":"5e","details":"","groups":"géométrie","id":"maths.5e.Comprendre","subject":"maths","directory":"géométrie"},"maths.4e.Conna_tre":{"name":"Connaître l'égalité de Pythagore","level":"4e","details":"","groups":"géométrie","id":"maths.4e.Conna_tre","subject":"maths","directory":"géométrie"},"maths.5e.Determiner":{"name":"Déterminer un centre de symétrie","level":"5e","details":"","groups":"géométrie","id":"maths.5e.Determiner","subject":"maths","directory":"géométrie"},"maths.3e.Conna_tre":{"name":"Connaître et appliquer le théorème de Thalès","level":"3e","details":"","groups":"géométrie","id":"maths.3e.Conna_tre","subject":"maths","directory":"géométrie"},"maths.5e.Traduire-2":{"name":"Traduire un énoncé en une expression littérale","level":"5e","details":"","groups":"numérique littéral","id":"maths.5e.Traduire-2","subject":"maths","directory":"Calcul littéral"},"maths.3e.Conna_tre-2":{"name":"Connaître les identités remarquables","level":"3e","details":"","groups":"numérique","id":"maths.3e.Conna_tre-2","subject":"maths","directory":"Calcul littéral"},"maths.6e.Additionner/Soustraire":{"name":"Additionner/Soustraire des horaires et durées","level":"6e","details":"","groups":"numérique","id":"maths.6e.Additionner/Soustraire","subject":"maths","directory":"Horaires et durées"}};

if(localStorage.getItem("Evaluations"))
	var Evaluations = localStorage.getObj("Evaluations");
else
	var Evaluations = {"5e4.20151015.DST1":{"name":"DST1","class":"5e4","date":"15/10/2015","weekDay":"jeudi","timestamp":1444860000000,"id":"5e4.20151015.DST1","competences":"maths.5e.Additionner maths.5e.Additionner-2 maths.6e.Additionner maths.6e.Reconnaitre maths.6e.Additionner/Soustraire","groups":"","scaleOfSuccess":"3"},"5e4.20160219.DevoirCommun1":{"name":"DevoirCommun1","class":"5e4","date":"19/02/2016","weekDay":"vendredi","timestamp":1455836400000,"id":"5e4.20160219.DevoirCommun1","competences":"maths.5e.Traduire maths.5e.Calculer maths.5e.Changer maths.5e.Additionner-2 maths.5e.Prendre maths.5e.Traduire-2 maths.5e.Effectuer maths.5e.Determiner maths.5e.Comprendre maths.5e.Effectuer-2","groups":"dc1","scaleOfSuccess":"4"},"5e4.20151227.DST2":{"name":"DST2","class":"5e4","date":"27/12/2015","weekDay":"dimanche","timestamp":1451170800000,"id":"5e4.20151227.DST2","competences":"maths.5e.Additionner maths.5e.Additionner-2 maths.6e.Additionner maths.6e.Reconnaitre maths.6e.Additionner/Soustraire maths.5e.Determiner maths.5e.Calculer maths.5e.Comprendre maths.5e.Prendre maths.4e.Conna_tre maths.3e.Conna_tre maths.3e.Conna_tre-2 maths.5e.Effectuer","groups":"dst","scaleOfSuccess":"4"},"5e4.20151227.Interro1":{"name":"Interro1","class":"5e4","date":"07/01/2016","weekDay":"jeudi","timestamp":1452121200000,"id":"5e4.20151227.Interro1","competences":"maths.5e.Additionner maths.5e.Additionner-2 maths.6e.Additionner maths.6e.Reconnaitre maths.6e.Additionner/Soustraire maths.5e.Prendre maths.5e.Determiner maths.5e.Comprendre maths.5e.Calculer maths.5e.Changer","groups":"interro","scaleOfSuccess":"4"},"5e4.20160421.DevoirCommun3":{"name":"DevoirCommun3","class":"5e4","date":"21/04/2016","weekDay":"jeudi","timestamp":1461189600000,"id":"5e4.20160421.DevoirCommun3","competences":"maths.5e.Effectuer maths.5e.Traduire maths.4e.Multiplier maths.5e.Additionner maths.5e.Calculer maths.5e.Traduire-2 maths.5e.Determiner maths.5e.Changer maths.5e.Comprendre maths.6e.Additionner/Soustraire maths.5e.Additionner-2 maths.6e.Additionner","groups":"dc","scaleOfSuccess":"4"}};
console.log("tests évaluations");
var e = {}; for(var ev in Evaluations){
	e = Evaluations[ev];
	if(!e)continue;
	e.competences = e.competences.split(' ').join(';');
	if(e.date&&!e.dateReverse)
		e["dateReverse"] = e.date.split('/').reverse().join("-");
	delete e.baremeMax;
}

var Parameters = {"scaleOfMarks":"","schoolType":"Collège","schoolName":"DELATTRE","scaleOfSuccess":4,"scalesOfSuccess":{"1":{"1":"A"},"2":{"0":"NA","1":"A"},"3":{"0":"NA","1":"EA","2":"A"},"4":{"0":"NA","1":"I","2":"S","3":"M"}}};

Array.prototype.get = function(id){
	for(var i=O;i<this.length;i++)
		if(this[i].id === id)
			return array[id];
}
Array.prototype.getId = function(obj){
	for(var i=0;i<this.length;i++)
		if(this[i]==obj)
			return i;
}

var noAccent = function(text) {
	if(text)return text.replace(/[àáâä]/g,"a").replace(/[èéêë]/g,"e").replace(/[íìîï]/g,"i").replace(/[òóôö]/g,"o").replace(/[ùúûü]/g,"u").replace(/[ýỳŷÿ]/g,"y").replace(/[ÀÁÂÄ]/g,"A").replace(/[ÉÈÊË]/g,"E").replace(/[ÍÌÎÏ]/g,"I").replace(/[ÒÓÔÖ]/g,"O").replace(/[ÙÚÛÜ]/g,"U").replace(/[ÝỲŶŸ]/g,"Y").replace(/ç/g,"c").replace(/ñ/g,"n").replace(/�/g,"_");
	return "";
}
var noAccent2LowerCase = function(text) {
	if(text)return noAccent(text.toLowerCase());
	return "";
}
var searchItemsIn = function(text){
	var target = this;
	//Si aucune information n'est donnée sur la nature des éléments à rechercher, on teste les éléments de classe « list-elements »
	var elements = target.querySelectorAll(target.getAttribute("my-elements")||".list-element");
	//Si aucun élément de classe « list-elements », on recherche tous les « div ».
	if(!elements)
		elements = target.querySelectorAll("div");
	var boolShowItem=true, alt=true, erase=true, classHidden="erase", sText, number=0;
	//On découpe la chaine des termes de recherche en mots pour chercher l'occurence de chacun.
	var searchArray  = noAccent2LowerCase(text).split(' ');
	for(var i=0; i<elements.length;++i){
		e = elements[i];
		if(e.classList.contains("ng-hide"))continue;
		boolShowItem=true;
		//On cherche une condition pour ne pas afficher l'objet :
		//Si l'élement est vide de texte on arrête
		if(e.textContent==""){
			boolShowItem=false;
			continue;
		}
		else {
			//Sinon, si tous les termes de recherche apparaissent dans l'élément ou dans son attribut "search-tags" on le laisse affiché
			for(var j=0;j<searchArray.length;++j){
				sText = noAccent2LowerCase(searchArray[j]);
				if( noAccent2LowerCase(e.textContent).indexOf(sText)==-1 && noAccent2LowerCase(e.getAttribute("search-tags")).indexOf(sText)==-1)
					boolShowItem=false;
			}
		}
		//Enfin on affiche l'élément s'il est retenu
		if(boolShowItem){
			e.classList.remove(classHidden);
			//On compte le nombre d'objets et on « alterne »
			number++;
			alt=!alt;
			e.setAttribute("alt",alt);
		}
		//Ou on le cache sinon
		else {
			e.classList.add(classHidden);
		}
	}
	//On garde le nombre d'éléments retenus dans un attribut "number-of-elements-found"
	target.setAttribute("number-of-elements-found",number);
	//Si un champs de comptage des éléments retenus existe, on l'affiche dedans.
	if(target.hasAttribute("numtarget"))
		document.querySelector(target.getAttribute("numtarget")).textContent = number;
	return number;
}
var sortElementsIn = function(element, sortTagAttribute, boolReverse) {
	var target = (typeof element === "string"? document.querySelector(element):element);
	var elements = target.querySelectorAll("[sort-tag]");
	// On détermine le critère de tri (quel attribut choisir pour les comparer)
	var tagAttribute = (sortTagAttribute&&elements[0].hasAttribute(sortTagAttribute)?sortTagAttribute:"sort-tag");
	// On définit dynamiquement la fonction qui va trier les éléments :
	/*var fn = function(A,B){
		var a = A.getAttribute(tagAttribute), b = B.getAttribute(tagAttribute);
		return (a==b?0:(a>b?1:-1));
	}*/
	fn = dynamicSort(tagAttribute);
	// On range les nœuds HTML dans un tableau pour les trier.
	var array = [];
	for(var e=0;e<elements.length;e++){
		array.push(elements[e]);
	}
	array.sort(fn);
	if(boolReverse&&boolReverse!="false")array=array.reverse();
	// On ajoute les éléments un par un dans le DOM.
	var alt=true;
	for(var e in array){
		if(!array[e]||!array[e].classList)continue;
		if(array[e].classList.contains("ng-hide"))continue;
		alt=!alt;
		array[e].setAttribute("alt",alt);
		target.appendChild(array[e]);
	}
}
var dynamicSort = function(property) {
	var sortOrder = 1;
	if(property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a,b) {
		var result = 0;
		if(a.hasAttribute(property))
			result = (a.getAttribute(property) < b.getAttribute(property)) ? -1 : (a.getAttribute(property) > b.getAttribute(property)) ? 1 : 0;
		else
			result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	}
}
var dynamicSortMultiple = function() {
	/*
	* Save the arguments object as it will be overwritten
	* note that arguments object is an array-like object
	* consisting of the names of the properties to sort by
	*/
	var props = arguments;
	return function (obj1, obj2) {
		var i = 0, result = 0, numberOfProperties = props.length;
		/* try getting a different result from 0 (equal)
			* as long as we have extra properties to compare
			*/
		while(result === 0 && i < numberOfProperties) {
			result = dynamicSort(props[i])(obj1, obj2);
			i++;
		}
		return result;
	 }
}

Object.prototype.sort = function(fn){
	var array = [], obj = {};
	//for(var i in this)
	//	array.push(this[i]);
	//array.sort(fn);
	var f;
	if(!fn)
		f = function(a,b){
			return (this[a]<this[b])?-1:(this[a]>this[b])?1:0;
		}
	else
		f = function(a,b){
			return fn(this[a],this[b]);
		}
	keysSorted = Object.keys(this).sort(f);
	for(var i=0;i<keysSorted.length;i++){
		obj[keysSorted]=this[keysSorted];
	}
	return keysSorted;
	return obj;
}


var app = angular.module('competences',['ngAnimate']);

	app.directive('preventDefault', function() {
		return function(scope, element, attrs) {
			angular.element(element).bind('click', function(event) {
				event.preventDefault();
				event.stopPropagation();
			});
		}
	});
	app.controller('SchoolController',function(){
		var school = this;
		this.schoolName = "DELATTRE";
		this.directorName = "Dirlo";
		this.list=[];
		//this.students = Students;
	// Popups
		this.popup = 0;
		this.setPopup = function(name){
			this.popup = name;
		};
		this.isPopup = function(name){
			return this.popup===name;
		};
		this.parameters = Parameters;

	// Generic functions
		var select = function(cs,id){
			//var students = this;
			this.current = cs;
			this.currentId = id;
			this.currentDirectory = cs.directory;
			this.isNew = (cs.id?false:true);
			//On crée une copie de l'élève courant.
			this.backupCurrent = JSON.parse(JSON.stringify(this.current));
		};
		var reset = function(){
			if(this.backupCurrent){
				for(var item in this.current){
					this.current[item] = this.backupCurrent[item];
				}
				if(this.currentDirectory)this.currentDirectory=this.current.directory;
			}
		};
		var setNew = function(){
			/*var self = this;
			console.log("This is set to "); console.log(this);
			select.call(self,self.list[0]={"id":0},0);
			console.log("select is finished");*/
			select({'id':0},0);
			//On crée une copie de l'élève courant.
			//this.backupCurrent = JSON.parse(JSON.stringify(this.current));
		};
		var deleteId = function(id){
			this.list[id] = null;
			//delete this.list[id];
		}
		var Delete = function(){
			var cs = this.current, oldId = cs.id;
			if(cs.id==0){
				if(this.list[0])
					this.deleteId(0);
				this.current = {};
				this.currentId = 0;
				school.popup = 0;
			}
			else if(this.list[this.currentId])
				if(confirm("Êtes-vous sûr(e) de vouloir supprimer cet élément ?")){
					this.deleteId(this.currentId);
					this.current = {};
					this.currentId = 0;
					school.setPopup(0);
					this.updateStorage();
				}
		};
		var cancel = function(){
			this.reset();
			school.setPopup(0);
		}
	// Students
	// On travaille désormais dans this.students
	//Students and competences
		this.students = {};
		this.students.list = Students;
		this.students.select = function(cs,id){
			school.setPopup("student");
			select.bind(this)(cs,id);
		}
		this.students.reset = reset.bind(this.students);
		this.students.cancel = cancel.bind(this.students);
		this.students.save = function (){
			var cs = this.current;
			if(cs.name&&cs.firstname&&cs["class"]&&cs.birthdate&&cs.gender){
				if(!cs.id)
					cs.id = noAccent(cs["class"]+"."+cs.name+"."+cs.firstname).replace(/ /g,"_");
				cs.birthdateReverse = cs.birthdate.split('/').reverse().join("-");
				this.list[cs.id] = this.current;
				if(this.currentId!=cs.id)
					this.deleteId(this.currentId);
				this.updateStorage();
				this.sort();
				school.setPopup(0);
			}
			else
				alert("Il faut remplir tous les champs demandés");
			//for(var i in this.list)if(this.list[i])console.log(i + " : " +this.list[i]["id"]);
		};
		this.students.updateStorage = function(){
			localStorage.setObj("Students",this.list);
		}
		this.students.setNew = function(){
			this.select(this.list[0]={'id':0},0);
			school.setPopup('student');
		}
		this.students.deleteId = deleteId.bind(this.students);
		this.students.delete = Delete.bind(this.students);
		this.students.sortIsReverse = false;
		this.students.sortAttribute = "";
		this.students.sort = function(attr){
			if(attr)this.sortAttribute = attr;
			sortElementsIn('#students-container',this.sortAttribute,this.sortIsReverse);
		};

	// Competences
		this.competences = {};
		this.competences.list = {};
		this.competences.directories = {"vrac":[]};
		var comp = {};
		for(var dir in Competences){
			if(!Competences[dir])continue;
			if(Competences[dir].name||Competences[dir].subject){
				this.competences.list = Competences;
				for(var c in this.competences.list){
					comp = this.competences.list[c];
					if(!comp)continue;
					if(!this.competences.directories[comp.directory])
						this.competences.directories[comp.directory] = [];
					this.competences.directories[comp.directory].push(c);
				}
				break;
			}
			else {
				this.competences.directories[dir] = [];
				for(var c in Competences[dir]){
					this.competences.list[c] = Competences[dir][c];
					this.competences.directories[dir].push(c);
				}
			}
		}
		this.competences.select = function(cs,id){
			school.setPopup("competence");
			select.bind(this)(cs,id);
		}
		this.competences.reset = reset.bind(this.competences);
		this.competences.cancel = cancel.bind(this.competences);
		this.competences.save = function (){
			var cs = this.current;
			if(cs.name&&cs.directory&&cs.subject&&cs.level){
				if(!cs.id)
					cs.id = noAccent(cs.subject+"."+cs.level+"."+cs.name.replace(/ /g,"_"));
				this.list[cs.id] = this.current;
				if(this.currentId!=cs.id)
					this.deleteId(this.currentId);
				this.updateStorage();
				this.sort();
				school.popup = 0;
			}
			else
				alert("Il faut remplir tous les champs demandés");
			//for(var i in this.list)if(this.list[i])console.log(i + " : " +this.list[i]["id"]);
		};
		this.competences.setNew = function(){
			this.select(this.list[0]={"id":0, directory:"vrac"},0);
		};
		this.competences.updateStorage = function(){
			localStorage.setObj("Competences",this.list);
		}
		this.competences.deleteId = deleteId.bind(this.competences);
		this.competences.delete = Delete.bind(this.competences);
		this.competences.sortIsReverse = false;
		this.competences.sortAttribute = "";
		this.competences.sort = function(attr){
			if(attr)this.sortAttribute = attr;
			sortElementsIn('#competences-container',this.sortAttribute,this.sortIsReverse);
		};


	// Évaluations :
		this.evaluations = {};
		this.evaluations.list = Evaluations;
		this.evaluations.select = function(cs,id){
			//select.call(this,cs,id);
			school.setPopup("evaluation");
			select.bind(this)(cs,id);
		}
		this.evaluations.reset = reset.bind(this.evaluations);
		this.evaluations.cancel = cancel.bind(this.evaluations);
		this.evaluations.save = function (){
			var cs = this.current;
			var days = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
			if(cs.name&&cs.date&&cs["class"]&&cs.competences&&cs.scaleOfSuccess){
				var dates = cs.date.split('/');
				var date = new Date(dates[1]+"/"+dates[0]+"/"+dates[2]);
				csdateReverse = dates[2]+"-"+dates[1]+"-"+dates[0];
				cs.weekday   = days[date.getDay()];
				cs.timestamp = date.getTime();
				if(!cs.id)
					cs.id = cs["class"]+"."+cs.dateReverse+"."+cs.name;
				this.list[cs.id] = cs;
				if(this.currentId!=cs.id)
					this.deleteId(this.currentId);
				this.updateStorage();
				this.sort();
				school.setPopup(0);
			}
			else
				alert("Il faut remplir tous les champs demandés");
		};
		this.evaluations.updateStorage = function(){
			localStorage.setObj("Evaluations",this.list);
		}
		//this.evaluations.setNew = setNew.call(this.evaluations);
		this.evaluations.setNew = function(){
			this.select(this.list[0]={'id':0},0);
			school.setPopup('evaluation');
		}
		this.evaluations.deleteId = deleteId.bind(this.evaluations);
		this.evaluations.delete = Delete.bind(this.evaluations);
		this.evaluations.sortIsReverse = true;
		this.evaluations.sortAttribute = "";
		this.evaluations.sort = function(attr){
			if(attr)this.evaluations.sortAttribute = attr;
			sortElementsIn('#evaluations-container',this.sortAttribute,this.sortIsReverse);
		};

		this.setPopup(0);
	// Onload
		angular.element(document).ready(function () {
			sortElementsIn('#students-container','sort-tag',false);
			sortElementsIn('#evaluations-container','sort-tag',true);
		});
	});
	app.controller('ParametersController',function(){
		this.params = Parameters;
	});
	app.controller('TabController',function(){
		this.tab=1;
		this.setTab = function(tabNumber){
			this.tab = tabNumber;
		};
		this.isSet = function(tabNumber){
			return (this.tab === tabNumber);
		};
	});

	app.directive('searchInput',function(){
		return {
			restrict:	'E',
			templateUrl:	'html-templates/search-input.html'/*,
			controller:function(){
				this.searchTarget = "";
				this.setTarget = function(s){
					this.searchTarget = s;
				};
				this.doSearch = function(){
					var target = document.querySelector(this.searchTarget);
					console.log(target);
				};
			},
			controllerAs: 'search'*/
		};
	});
	app.controller('SearchController',function(){
		this.searchTarget = "";
		this.setTarget = function(s){
			this.searchTarget = s;
			this.searchFunction = searchItemsIn.bind(document.querySelector(this.searchTarget));
		};
		this.doSearch = function(){
			this.numberOfElementsFound = this.searchFunction(this.searchTerms);
		};
		this.resetSearch = function(){
			this.searchTerms = '';
			this.searchFunction(' ');
		};
	});

	// Directive pour ajouter un input avec un label donné.
	app.directive('labelInput', function($compile) {
		return {
			restrict: 'E',
			scope: {
				inputModel: '=',
				inputLabel: '='
			},
			template: '<div class="super-input"><input name="my-input" type="text" value="" ng-model="inputModel" required/><label for="my-input" onclick="this.previousElementSibling.focus()">{{inputLabel}}</label></div>',
			replace: true,
		};
	});

	app.controller('todoListController',function(){
		this.array = [];
		if(localStorage.getItem("todoList")){
			this.array = localStorage.getObj("todoList");
			//Remove duplicates
			this.array = this.array.filter(function(elem, index, self) {
				return index == self.indexOf(elem);
			});
		}
		else
			this.array = ["Première tache", "Deuxième tache", "Et ainsi de suite !"];
		this.newItem = "";
		this.updateStorage = function(){
			localStorage.setObj("todoList",this.array);
		}
		this.add = function(index){
			if(this.newItem.length==0)return false;
			if(this.array.indexOf(this.newItem)>=0)return false;
			if(index||index===0)
				this.array.splice(index,0,this.newItem);
			else
				this.array.push(this.newItem);
			this.newItem = "";
			this.updateStorage();
			this.animateInput();
		};
		this.animateInput = function(){
			var lastLi = document.querySelector("#todo-list-block ul li:last-child");
			window.setTimeout(function(){lastLi.classList.remove("ng-added-element");},1000);
		};
		this.remove = function(index){
			this.array.splice(index,1);
			this.updateStorage();
		}
		this.goUp = function(index){
			if(index==0)return false;
			var c = this.array[index];
			this.array[index] = this.array[index-1];
			this.array[index-1] = c;
			this.updateStorage();
		}
		this.goDown = function(index){
			if(index==this.array.length-1)return false;
			var c = this.array[index];
			this.array[index] = this.array[index+1];
			this.array[index+1] = c;
			this.updateStorage();
		}
		this.keyup = function(event){
			if(event.keyCode==13&&!event.shiftKey)
				this.add();
		}
	});



//})();
