
/******************************************/
/************** Arithmétique **************/
/******************************************/
function rand(N){if(!N)N=1;return Math.random()*N}//Décimal entre 0 et N exclus.
function rrand(N){if(!N)N=1;return (2*Math.random()-1)*N}//Décimal entre -N et N.
function entier(n,p){return n+Math.floor(Math.random()*(p-n+1));}//Entier entre n et p inclus.
function entierNonNul(n,p){var l=entier(n,p);while(l==0){l=entier(n,p);}return l;}//Entier ≠0 entre n et p inclus.

/******************************************/
/**** Modifications élémentaires de JS ****/
/******************************************/
var isElement = function(o){
	return (
		typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
		o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
	);
}
var isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var $=function(a,root){return isElement(a)?a:(root||document).querySelector(a);}
var $$=function(a,root){return (root||document).querySelectorAll(a);}
Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	var value = this.getItem(key);
	return value && JSON.parse(value);
}
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.strim = function() {
	return this.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
}
Array.prototype.getUnique = function(){
   var properties = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
	  if(properties.hasOwnProperty(this[i])) {
		 continue;
	  }
	  a.push(this[i]);
	  properties[this[i]] = 1;
   }
   return a;
}
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}
var removeA = function(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
var removeInObject = function(obj, key){
	for(var i in obj)
		if(key==i)
			delete obj[i];
}
HTMLElement.prototype.$ = function(query){
	return this.querySelector(query);
}
HTMLElement.prototype.$$ = function(query){
	return this.querySelectorAll(query);
}
var parentContains = function(node, query) {
	var bool=false;
	if(!query || !query.trim()) return node.parentElement;
	var c=query.charAt(0);
	switch(c){
		case "#":
			bool = (node.id==query.slice(1)) ? true:false ;
			break;
		case ".":
			if(node.classList)
				bool = (node.classList.contains(query.replace(/\./g,''))) ? true:false ;
			break;
		case "@":
			bool = (node.name==query.slice(1)) ? true:false ;
			break;
		case "[":
			bool = node.hasAttribute(query.slice(1,-1));
			break;
		default:
			bool = (node.tagName==query.toUpperCase()) ? true:false ;
			break;
	}
	if(bool) {
		return node;
	}
	else
		return (node==document.body)?null:parentContains(node.parentElement,query);
}
HTMLElement.prototype.parentContains = function(query){return parentContains(this,query);}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else
		var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function getCookie(sName) {
	var oRegex = new RegExp("(?:; )?" + sName + "=([^;]*);?");
	if (oRegex.test(document.cookie)) {
		return decodeURIComponent(RegExp["$1"]);
	}
	else {
		return null;
	}
}


var noAccent = function(text) {
	if(text)
		return text.replace(/[àáâä]/g,"a").replace(/[èéêë]/g,"e").replace(/[íìîï]/g,"i").replace(/[òóôö]/g,"o").replace(/[ùúûü]/g,"u").replace(/[ýỳŷÿ]/g,"y").replace(/[ÀÁÂÄ]/g,"A").replace(/[ÉÈÊË]/g,"E").replace(/[ÍÌÎÏ]/g,"I").replace(/[ÒÓÔÖ]/g,"O").replace(/[ÙÚÛÜ]/g,"U").replace(/[ÝỲŶŸ]/g,"Y").replace(/�/g,"_");
	return "";
}
var noAccent2LowerCase = function(text) {
	if(text)
		return noAccent(text.toLowerCase());
	return "";
}
var recherche = function(evt){
	var input = (evt&&evt.target)?evt.target:this;
	if(input.value.length==0)input.setAttribute("empty",true);
	else input.removeAttribute("empty");
	var target = $(input.getAttribute("recherche"));
	//console.log(target);
	var text = input.value;
	searchArray  = noAccent2LowerCase(text);
	searchArray  = searchArray.split(' ');
	var pageBody = document.body;
	var elements = target.$$(input.getAttribute("elements")||"div");
	var bool=true;
	var alt=true;
	var erase=true;
	var classHidden = erase ? "erase" : "hidden";
	var sText;
	var number = 0;
	for(var i=0; i<elements.length; ++i) {
		e=elements[i];
		bool = true;
		for(var j=0; j<searchArray.length; ++j) {
			sText = noAccent2LowerCase(searchArray[j]);
			if( e.textContent == "" )
				bool=false;
			else if( noAccent2LowerCase(e.textContent).indexOf(sText) == -1 && noAccent2LowerCase(e.getAttribute("search-tags")).indexOf(sText) == -1 )
				bool=false;
		}
		if(bool){
			e.classList.remove(classHidden);
			number++;
			alt=!alt;
			e.setAttribute("alt",alt);
		}
		else{
			e.classList.add(classHidden);
		}
		//bool ? e.classList.remove(classHidden) : e.classList.add(classHidden);
	}
	if(input.hasAttribute("numtarget"))
		$(input.getAttribute("numtarget")).textContent = number;
}

var montrerMenu = function(evt){
	var e = (evt&&evt.target)?evt.target:this;
	var target =$(e.getAttribute("target")||e.getAttribute("montrer"))
	target.classList.add("visible");
	if(e.hasAttribute("focus"))target.$(e.getAttribute("focus")).focus();
}
var ouvrirMenu = function(evt){
	var e = (evt&&evt.target)?evt.target:this;
	var target =$(e.getAttribute("target")||e.getAttribute("ouvrir"))
	target.classList.add("visible");
	if(e.hasAttribute("focus"))target.$(e.getAttribute("focus")).focus();
}
var fermerMenu = function(evt){
	var e = (evt&&evt.target)?evt.target:this, target;
	if(e.hasAttribute("target")||e.getAttribute("fermer")){
		target = $(e.getAttribute("target")||e.getAttribute("fermer"));
		target.classList.remove("visible");
		if(target.$("video")){
			var videos = target.$$("video");
			for(var i=0;i<videos.length;i++){
				videos[i].pause();
			}
		}
	}
	else{
		target = e.parentContains("[popup]");
		if(target){
			target.classList.remove("visible");
			if(target.$("video")){
				var videos = target.$$("video");
				for(var i=0;i<videos.length;i++){
					videos[i].pause();
				}
			}
		}
	}
	if(e.hasAttribute("effacer")){
		var eff = $(e.getAttribute("effacer"));
		if(eff.value)eff.value="";
		if(eff.textContent)eff.textContent = "";
	}
}
var effacerMenu = function(evt){
	var e = (evt&&evt.target)?evt.target:this;
	var targets = $$(e.getAttribute("target")||e.getAttribute("effacer")), target;
	for(var i=0;i<targets.length;i++){
		target=targets[i];
		if(target.selectedIndex)
			target.selectedIndex="";
		else if(target.value)
			target.value=0;
		else if(target.textContent)
			target.textContent = "";
		else
			target.innerHTML = "";
	}
}

var mobileChecker = $("#mobileChecker");
if(! mobileChecker){
	mobileChecker = document.createElement("div");
	mobileChecker.id = "mobileChecker";
	document.body.insertBefore(mobileChecker, document.body.firstChild);
}
var isMobileDevice = function() {
	return ($("#mobileChecker") && $("#mobileChecker").offsetHeight > 0)
}
var isMobileUI = function() {
	if ( localStorage.getItem("forceDesktopMode")=="true" )
		return false;
	else
		return isMobileDevice();
}

/******************************************/
/******** Début du code spécifique ********/
/******************************************/
var listeDesClasses = "";
var Eleves = {};
var Evaluations = localStorage.getObj("Evaluations")||{};
var Competences = localStorage.getObj("Competences")||{};
localStorage.setItem("lastmtime",0);
var storeMTime = function(n){
	if(isNumeric(n))
		localStorage.setItem("lastmtime",n);
	else{
		var d = Date.now();
		localStorage.setItem("lastmtime",d);
	}
}
var getMTime = function(n){
	return localStorage.getItem("lastmtime")||0;
}
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
var charger = function(e){
	//var temp, data=JSON.parse(e.getAttribute("data"));
	var temp, data=TMP["tmpData"], dataMTime = data["lastmtime"], lastmtime = getMTime();
	var donneesAImporter=$$("#donneesAImporter [choix]");
	var boolEcraserLesDonnees = $("#donneesAImporter_checkEcraserLesDonnees").checked;
	var donnees = ["Eleves", "Competences", "Evaluations","Parametres"];
	var donneesLocales = {Eleves:Eleves, Competences:Competences, Evaluations:Evaluations, Parametres:Parametres};
	if(boolEcraserLesDonnees){
		console.log("");
	}
	else if(dataMTime > lastmtime)
		data = mergeObjects(donneesLocales,data);
	else
		data = mergeObjects(data,donneesLocales);
	var constructors = [Eleve, Competence, Evaluation, Parametre];
	var updates = [updateListeEleves, updateListeCompetences, updateListeEvaluations, recuperePreferences];
	for(var i=0;i<donneesAImporter.length;i++)
		if(donneesAImporter[i].checked){
			temp=data[donnees[i]];
			if(temp){
				if(boolEcraserLesDonnees){if(i==0)Eleves={};else if(i==1)Competences={};else if(i==2)Evaluations={};else Parametres={};}
				if(i==3)
					Parametre(temp);
				else
					for(var e in temp)
						new constructors[i](temp[e].json);
				updates[i]();
			}
		}
	TMP["tmpData"]={}
}
var importer = function(input) {
	var reader=new FileReader();
	reader.onload=function() {
		var donneesAImporter=$("#donneesAImporter"), data = JSON.parse(reader.result), temp;
		donneesAImporter.classList.add("visible");
		//$("#donneesAImporter_charger").setAttribute("data",JSON.stringify(data));
		TMP["tmpData"] = data;
		var labels = donneesAImporter.$$("label");
		var donnees = ["Eleves","Competences","Evaluations","Parametres"];
		var nombre = 0, dernier=null;
		for(var i=0;i<donnees.length;i++){
			if(data[donnees[i]]){
				labels[i].style.visibility = "visible";
				nombre++;
				dernier=i;
			}
			else {
				labels[i].style.visibility = "hidden";
			}
		}
		if(nombre<=1){
			donneesAImporter.classList.remove("visible");
			if(nombre==1){
					temp=data[donnees[dernier]];
					if(temp){
						var constructor = [Eleve, Competence, Evaluation, Parametre][dernier];
						var update = [updateListeEleves, updateListeCompetences, updateListeEvaluations,recuperePreferences][dernier];
						if(dernier==3)
							Parametre(temp);
						else
							for(var e in temp)
								new constructor(temp[e].json);
						update();
					}
			}
		}
		return data;
	};
	reader.readAsText(input.files[0]);
}
function load(input) {
	var reader=new FileReader();
	reader.onload=function() {
		return JSON.parse(reader.result);
		};
	reader.readAsText(input.files[0]);
}
function save(input) {
	var notEmpty=false;
	var data_brute = {}, donneesAExporter=$$("#donneesAExporter [choix]");
	var donnees = ["Eleves", "Competences", "Evaluations","Parametres"];
	var constructors = [Eleves, Competences, Evaluations, Parametres];
	var updates = [updateListeEleves, updateListeCompetences, updateListeEvaluations,recuperePreferences];
	for(var i=0;i<donneesAExporter.length;i++)
		if(donneesAExporter[i].checked){
			data_brute[donnees[i]]=constructors[i];
			notEmpty=true;
		}
	var data = JSON.stringify(notEmpty?data_brute:{Eleves:Eleves,Competences:Competences,Evaluations:Evaluations,Parametres:Parametres});
	var href="data:application/json;base64,"+btoa(encode_utf8(data));
	var nom = $("#exporterLesDonnees_nom").value||0;
	if(nom){
		nom+=".json";
		input.setAttribute("download",nom);
		input.setAttribute("name",nom);
	}
	input.href = href;
	//document.location="data:application/json;base64,"+btoa(data);
}

// Fusionne un ou plusieurs objets récursivement
// Modifie le premier objet avec les éléments du second.
var mergeObjects = function () {
	var dst = {} ,src, p, args = [].splice.call(arguments, 0);
	while (args.length > 0) {
		src = args.splice(0, 1)[0];
		if (toString.call(src) == '[object Object]') {
			for (p in src) {
				if (src.hasOwnProperty(p)) {
					if (toString.call(src[p]) == '[object Object]') {
						dst[p] = mergeObjects(dst[p] || {}, src[p]);
					} else {
						dst[p] = src[p];
					}
				}
			}
		}
	}
	return dst;
}
var fusionnerObjets = mergeObjects;

var TMP = {
	tmpData : {}
}

var Parametres = {
	denomDeNoteDeReussite:"",
	etablissement:"",
	baremeMax:4,
	tmpData:{},
	bilanEleveParEvaluation: false
}
//Parametres = mergeObjects(Parametres, localStorage.getObj("Parametres"));

var Parametre = function(obj){
	Parametres = mergeObjects(Parametres, obj);
	return Parametres;
}
Parametre( localStorage.getObj("Parametres") );
if(Parametres["GroupesCompetences"])
	removeInObject(Parametres,"GroupesCompetences");
var dureeLimiteAvantSuppression = 1, a=60*60*24*15;
var cleanAll = function(){
	var e;
	for(var i in Evaluations){
		e = Evaluations[i];
		if(e.json["supprime"]&&(Date.now()-e.json["supprime"]>dureeLimiteAvantSuppression))
			delete Evaluations[i];
		for(var eid in e.json.evaluations){
			if(Evaluations[eid])continue;
			else delete e.json.evaluations[eid];
		}
	}
	for(var i in Eleves){
		e = Eleves[i];
		if(e.json["supprime"]&&(Date.now()-e.json["supprime"]>dureeLimiteAvantSuppression))
			delete Eleves[i];
		for(var eid in e.json.evaluations){
			if(Evaluations[eid])continue;
			else delete e.json.evaluations[eid];
		}
	}
	localStorage.setObj("Eleves",Eleves);
	localStorage.setObj("Evaluations",Evaluations);
}

var Eleve = function(obj){
	if(!obj){
		return null;
	}
	if(obj.length)
		return Eleves[obj];
	var noms = obj.noms;
	var prenoms = obj.prenoms;
	var date = obj.date;
	var dates = date.split("/");
	if(dates[0].length<2)
		dates[0] = "0"+dates[0];
	if(dates[1].length<2)
		dates[1] = "0"+dates[1];
	if(dates[2].length<4)
		dates[2] = "20"+dates[2];
	date = dates.join("/");
	var sexe = obj.sexe||"i";
	var classe = obj.classe.replace(" ","e");
	if(listeDesClasses.indexOf(classe)==-1)
		listeDesClasses+=classe+" ";
	var etablissement = obj.etablissement||"sl";
	var groupes = obj.groupes||"";
	var eid = noAccent(obj.eid || classe+"."+noms.split(" ")[0]+"."+prenoms.split(" ")[0]);
	this.getEid = function(){return eid;}
	this.getNom = function(){return noms;}
	this.getPrenom = function(){return prenoms;}
	this.getClasse = function(){return classe;}
	this.getGroupes = function(){return groupes;}
	this.estDansGroupe = function(g){var grp=" "+groupes+" ", gp=" "+g+" ";return (classe==g||grp.indexOf(gp)>=0);}
	this.estDansGroupeIncl = function(g){var grp=" "+groupes+" ", gp=" "+g+" ";return (classe.indexOf(g)>=0||grp.indexOf(gp)>=0);}
	this.getDate = function(){return date;}
	var evaluations = obj.evaluations||{};
	if(Eleves[eid]){
		evaluations = fusionnerObjets(Eleves[eid].json.evaluations,evaluations);
	}
	this.json = {
		noms: noms,
		prenoms: prenoms,
		date:date,
		sexe:sexe,
		etablissement:etablissement,
		classe:classe,
		groupes:groupes,
		eid:eid,
		evaluations: evaluations
	}
	Eleves[eid] = this;
	localStorage.setObj("Eleves",Eleves);
	storeMTime("Eleve");
	return this;
}

var Evaluation = function(obj){
	if(obj.length)
		return Evaluation[obj];
	var nom = obj.nom || "";
	var classe = obj.classe || "X";
	var date = obj.date;
	var dates = date.split("/");
	if(dates[1]){
		if(dates[0].length<2)
			dates[0] = "0"+dates[0];
		if(dates[1].length<2)
			dates[1] = "0"+dates[1];
		if(dates[2].length<4)
			dates[2] = "20"+dates[2];
		date = dates.join("/");
	}
	var baseID = noAccent(classe+"."+dates[2]+dates[1]+dates[0]+"."+nom);
	var eid = noAccent(obj.eid) || baseID;
	var groupes = obj.groupes||"";
	var baremeMax = obj.baremeMax||3;
	var i=2;
	if(!obj.eid)
		while(Evaluations[eid]){
			if(nom==Evaluations[eid].json.nom)
				break;
			eid = baseID+"-"+i;
			i++;
		}
	var _jourSemaine = null;
	this.jourSemaine = function(){
		if(!_jourSemaine){
			var dateArray = date.split("/")
			var d=new Date(dateArray[1]+"/"+dateArray[0]+"/"+dateArray[2]);
			var days = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
			_jourSemaine = days[d.getDay()];
		}
		return _jourSemaine;
	}
	var timestamp = new Date(dates[1]+"/"+dates[0]+"/"+dates[2]).getTime();
	var competences = obj.competences||"";
	if(Evaluations[eid]){
		competences += " "+Evaluations[eid].json.competences;
		competences = competences.strim().split(" ").getUnique().join(" ");
	}
	this.json = {
		nom:	nom,
		classe:	classe,
		date:	date,
		jourSemaine:this.jourSemaine(),
		timestamp:timestamp,
		eid:	eid,
		competences:competences,
		groupes:groupes,
		baremeMax:baremeMax
	}
	if(obj["supprime"])
		this.json["supprime"]=obj["supprime"];
	Evaluations[eid] = this;
	localStorage.setObj("Evaluations",Evaluations);
	storeMTime("Evaluation");
	return this;
}
var GroupesCompetences = {"vrac":{}};
var Competence = function(obj){
	if(obj.length)
		return Competences[obj];
	var nom = obj.nom;
	var matiere = obj.matiere||"maths";
	var niveau = obj.niveau || "CM2";
	var details = obj.details || "";
	var groupes = obj.groupes;
	var dossier = obj.dossier||"vrac";
	if(dossier=="++")dossier="vrac";
	var noms = nom.split(" ");
	var baseCid = noAccent(matiere+"."+niveau+"."+nom.split(" ")[0]);
	var cid = noAccent(obj.cid || baseCid);
	var i=2;
	if(!obj.cid)
		while(Competences[cid]){
			if(nom==Competences[cid].json.nom)
				break;
			cid = baseCid+"-"+i;
			i++;
		}
	this.getNom = function(){return nom;}
	this.json = {
		nom: nom,
		niveau: niveau,
		details:details,
		groupes:groupes,
		cid:cid,
		matiere: matiere,
		dossier: dossier
	}
	Competences[cid] = this;
	if(!GroupesCompetences[dossier]){
		GroupesCompetences[dossier]={};
		var option = document.createElement("option");
		option.value = dossier;
		option.textContent = dossier;
		$("select#nouvelleCompetence_dossier").appendChild(option);
	}
	GroupesCompetences[dossier][cid] = this;
	localStorage.setObj("Competences",Competences);
	storeMTime("Evaluation");
	return this;
}
Competence.prototype.hasAttribute = function(s){
	if(this.json[s])
		return true;
	return false;
}
Competence.prototype.getAttribute = function(s){
	if(this.json[s])
		return this.json[s];
	return null;
}

var jsonG = localStorage.getObj("Eleves")||{}
for(var el in jsonG)if(jsonG[el].json&&!jsonG[el].json["supprime"])new Eleve(jsonG[el].json);
jsonG = localStorage.getObj("Competences")||{}
for(var el in jsonG)if(jsonG[el].json&&!jsonG[el].json["supprime"])new Competence(jsonG[el].json);
jsonG = localStorage.getObj("Evaluations")||{}
for(var el in jsonG)if(jsonG[el].json&&!jsonG[el].json["supprime"])new Evaluation(jsonG[el].json);


$("#listesElevesCompetencesEvaluations_menu").addEventListener("click",function(e){
	if(e.target.tagName=="LABEL"){
		var el = e.target;
		var selection=$("#listesElevesCompetencesEvaluations_menu .selection");
		if(selection)selection.classList.remove("selection");
		el.classList.add("selection");
		$("#listesElevesCompetencesEvaluations").setAttribute("bloc",el.getAttribute("bloc"));
	}
},false);


/********* Événements *********/
$("#listeEleves").addEventListener("click",function(e){
	if(!e.target.classList.contains("eleve"))
		return false;
	$("#nouvelEleve").classList.add("visible");
	var div = e.target;
	var eleve = Eleves[div.getAttribute("eleveid")].json;
	$("#nouvelEleve_eid").value = eleve.eid;
	$("#nouvelEleve_nom").value = eleve.noms;
	$("#nouvelEleve_prenom").value = eleve.prenoms;
	$("#nouvelEleve_sexe").value = eleve.sexe;
	$("#nouvelEleve_classe").value = eleve.classe;
	$("#nouvelEleve_etablissement").value = eleve.etablissement;
	var dates = eleve.date.split("/");
	$("#nouvelEleve_date").value = eleve.date||(dates[2]+"-"+dates[1]+"-"+dates[0]);
	$("#nouvelEleve_groupes").value = eleve.groupes;
},false);
$("#nouvelEleve_effacer").addEventListener("click",function(e){
	if($("#nouvelEleve_eid").value.length)
		$("#nouvelEleve_eid").value = "";
	else {
		$("#nouvelEleve_nom").value = "";
		$("#nouvelEleve_prenom").value = "";
		$("#nouvelEleve_sexe").value = "";
		$("#nouvelEleve_etablissement").value = Parametres.etablissement;
		$("#nouvelEleve_classe").value = "";
		$("#nouvelEleve_date").value = "";
		$("#nouvelEleve_groupes").value = "";
	}
},false);
$("#nouvelEleve").addEventListener("keyup",function(e){
	if(e.keyCode==13){
		$("#nouvelEleve_sauver").click();
		return false;
	}
	return true;
},true);
$("#nouvelEleve_sauver").addEventListener("click",function(e){
	var obj = {}
	obj.eid = $("#nouvelEleve_eid").value;
	obj.noms = $("#nouvelEleve_nom").value;
	obj.prenoms = $("#nouvelEleve_prenom").value;
	obj.sexe	= $("#nouvelEleve_sexe").value.toUpperCase();
	obj.etablissement = $("#nouvelEleve_etablissement").value;
	obj.classe = $("#nouvelEleve_classe").value;
	obj.date = $("#nouvelEleve_date").value;
	obj.groupes = $("#nouvelEleve_groupes").value;
	/*if($("#nouvelEleve_eid").value.length){
		delete Eleves[$("#nouvelEleve_eid").value];
	}*/
	var eleve = new Eleve(obj);
	//$("#nouvelEleve_effacer").click();
	updateListeEleves();
},false);
$("#nouvelEleve_bilan").addEventListener("click",function(e){
	var eleve = Eleves[$("#nouvelEleve_eid").value];
	if(eleve){
		bilanEleve(eleve);
	}
},false);
$("#nouvelEleve_supprimer").addEventListener("click",function(e){
	if($("#nouvelEleve_eid").value.length)
		//Eleves[$("#nouvelEleve_eid").value]={supprime:Date.now()};
		delete Eleves[$("#nouvelEleve_eid").value];
		//Eleves[$("#nouvelEleve_eid").value].json["supprime"]=Date.now();
	localStorage.setObj("Eleves",Eleves);
	$("#nouvelEleve_effacer").click();
	updateListeEleves();
},false);

var compareElevesDansListe = function(div1,div2){
	if(div1.hasAttribute&&div1.hasAttribute("eleveid")){
		var a = Eleves[div1.getAttribute("eleveid")], b = Eleves[div2.getAttribute("eleveid")];
	}
	else if(div1.json){
		var a = div1, b=div2;
	}
	else{
		var a = Eleves[div1], b = Eleves[div2];
	}
	//ordre inversé pour les niveaux :
	var c1=a.json.classe.split("e"), c2=b.json.classe.split("e");
	if(c1[0]>c2[0])
		return -1;
	else if(c1[0]<c2[0])
		return 1;
	else{
		//bon ordre pour les numéros de classe :
		if(c1[1]>c2[1])
			return 1;
		else if(c1[1]<c2[1])
			return -1;
		//bon ordre pour les noms :
		else {
			if(a.json.noms+"0"+a.json.prenoms<b.json.noms+"0"+b.prenoms)
				return -1;
			else if(a.json.noms+"0"+a.json.prenoms>b.json.noms+"0"+b.prenoms)
				return 1;
			else
				return 0;
		}
	}
}
var updateListeEleves = function(){
	var eleve, div, button, array=[];
	$("#listeEleves").innerHTML = "";
	var feminin;
	for(var eleveid in Eleves){
		eleve = Eleves[eleveid].json;
		feminin=(eleve.sexe=="M"?"":(eleve.sexe=="F"?"e":"(e)"));
		if(!eleve.noms.length||eleve.noms == "undefined"||eleve["supprime"]){
			//delete Eleves[eleveid];
			continue;
		}
		div = document.createElement("div");
		div.innerHTML = eleve.prenoms+" "+eleve.noms+" né"+feminin+" le "+eleve.date+" est en "+eleve.classe;
		div.classList.add("eleve");
		div.classList.add("elementDeListe");
		div.setAttribute("eleveid",eleve.eid);
		div.setAttribute("title",eleve.prenoms+" "+eleve.noms+" ("+eleve.date+") en "+eleve.classe+" -- "+eleve.groupes);
		div.setAttribute("search-tags","c"+eleve.classe+" g"+eleve.groupes.replace(/ /g," g"));
		button = div.appendChild(document.createElement("button"));
		button.textContent = "Bilan de "+eleve.prenoms.split(" ")[0];
		button.addEventListener("click",function(e){
			bilanEleve(Eleves[this.parentNode.getAttribute("eleveid")]);
		},false);
		//$("#listeEleves").appendChild(div);
		array.push(div);
	}
	array = array.sort(compareElevesDansListe);
	for(var i=0;i<array.length;i++)
		$("#listeEleves").appendChild(array[i]);
	recherche.call($("#listeElevesSearch"));
}
updateListeEleves();


var selectionneCompetences = function(e){
	if(!e.target.classList.contains("competence"))
		return false;
	$("#nouvelleCompetence").classList.add("visible");
	var div = e.target;
	var competence = Competences[div.getAttribute("cid")].json;
	$("#nouvelleCompetence_cid").value = competence.cid;
	$("#nouvelleCompetence_matiere").value = competence.matiere;
	$("#nouvelleCompetence_nom").value = competence.nom;
	$("#nouvelleCompetence_niveau").value = competence.niveau;
	$("#nouvelleCompetence_details").value = competence.details;
	$("#nouvelleCompetence_groupes").value = competence.groupes;
	$("#nouvelleCompetence_dossier").value = competence.dossier;
}
$("#listeCompetences").addEventListener("click",selectionneCompetences,false);
$("#nouvelleCompetence_recherche").addEventListener("click",selectionneCompetences,false);

$("#nouvelleCompetence_effacer").addEventListener("click",function(e){
	if($("#nouvelleCompetence_cid").value.length)
		$("#nouvelleCompetence_cid").value = "";
	else {
		$("#nouvelleCompetence_matiere").value = "";
		$("#nouvelleCompetence_nom").value = "";
		$("#nouvelleCompetence_nom").setAttribute("empty",true);
		$("#nouvelleCompetence_niveau").value = "";
		$("#nouvelleCompetence_details").value = "";
		$("#nouvelleCompetence_groupes").value = "";
		$("#nouvelleCompetence_dossier").value = "vrac";
	}
},false);
$("#nouvelleCompetence").addEventListener("keyup",function(e){
	if(e.keyCode==13){
		$("#nouvelleCompetence_sauver").click();
		return false;
	}
	return true;
},true);
$("#nouvelleCompetence_sauver").addEventListener("click",function(e){
	var obj = {}
	obj.cid = $("#nouvelleCompetence_cid").value;
	obj.matiere = $("#nouvelleCompetence_matiere").value;
	obj.nom = $("#nouvelleCompetence_nom").value;
	obj.niveau = $("#nouvelleCompetence_niveau").value;
	obj.details = $("#nouvelleCompetence_details").value;
	obj.groupes = $("#nouvelleCompetence_groupes").value;
	obj.dossier = $("#nouvelleCompetence_dossier").value;
	if($("#nouvelleCompetence_cid").value.length){
		delete Competences[$("#nouvelleCompetence_cid").value];
	}
	var competence = new Competence(obj);
	//$("#nouvelleCompetence_effacer").click();
	updateListeCompetences();
},false);
$("#nouvelleCompetence_supprimer").addEventListener("click",function(e){
	if($("#nouvelleCompetence_cid").value.length){
		//Competences[$("#nouvelleCompetence_cid").value] = {supprime:Date.now()};
		delete Competences[$("#nouvelleCompetence_cid").value];
		//Competences[$("#nouvelleCompetence_cid").value].json["supprime"]=Date.now();
	}
	localStorage.setObj("Competences",Competences);
	$("#nouvelleCompetence_effacer").click();
	updateListeCompetences();
},false);
var majSelectDossierCompetences = function(c){
	var selects = [$("select#nouvelleCompetence_dossier"),$("#gestionCompetences_dossier_panneauOrigine_liste"),$("#gestionCompetences_dossier_panneauArrivee_liste"),$("select#gestionCompetences_dossier_supprimer_select")];
	var values = [];
	for(var i=0;i<selects.length;i++){
		values.push(selects[i].value);
		selects[i].innerHTML="";
	}
	option = document.createElement("option");
		option.value = "++";
		option.textContent = "Ajouter un dossier";
		selects[0].appendChild(option);
		//selects[1].appendChild(option.cloneNode(true));
		//selects[2].appendChild(option.cloneNode(true));
	option = document.createElement("option");
		option.value = "";
		option.textContent = "* TOUTES *";
		selects[1].appendChild(option);
		selects[2].appendChild(option.cloneNode(true));
	for(var i in GroupesCompetences){
		option = document.createElement("option");
			option.value = i;
			option.textContent = i;
			selects[0].appendChild(option);
			selects[1].appendChild(option.cloneNode(true));
			selects[2].appendChild(option.cloneNode(true));
			if(i!="vrac")selects[3].appendChild(option.cloneNode(true));
	}
	if(c)
		for(var i=0;i<selects.length;i++)
			if(values[i]=="++")
				selects[i].value=c;
}
majSelectDossierCompetences();
//Ajoute un nouveau dossier de compétences.
$("#gestionCompetences_dossier_ajouter_sauver").addEventListener("click",function(e){
	var input = $("#gestionCompetences_dossier_ajouter_input"), dossier = input.value;
	if(dossier.length){
		var select = $("select#nouvelleCompetence_dossier"), value = select.value;
		if(select.$("option[value='"+dossier+"']")){
			var selects = $$("select[id^='gestionCompetences_dossier_panneau']");
			for(var i=0;i<selects.length;i++){
				selects[i].value=dossier;
				changeDossierCompetences.call(select[i]);
			}
			return true;
		}
		var selectO = $("#gestionCompetences_dossier_panneauOrigine_liste"), valueO = selectO.value;
		var selectA = $("#gestionCompetences_dossier_panneauArrivee_liste"), valueA = selectA.value;
		var selectS = $("select#gestionCompetences_dossier_supprimer_select");
		//Initialisation du nouveau dossier
		GroupesCompetences[dossier] = {"vrac":{}};
		var option = document.createElement("option");
		option.value = dossier;
		option.textContent = dossier;
		select.appendChild(option);
		selectO.appendChild(option.cloneNode(true));
		selectA.appendChild(option.cloneNode(true));
		selectS.appendChild(option.cloneNode(true));
		if(value=="++")
			select.value=dossier;
		if(valueO=="++")
			selectO.value=dossier;
		if(valueA=="++")
			selectA.value=dossier;
		changeDossierCompetences.call(selectO);
		changeDossierCompetences.call(selectA);
	}
},false);
/*
$("#gestionCompetences_dossier_panneauActions_supprimer").addEventListener("click",function(e){
	$("#gestionCompetences_dossier_supprimer").classList.add("visible");
	var select = $("select#gestionCompetences_dossier_supprimer_select"), option, dossier;
	select.innerHTML = "";
	for(var i in GroupesCompetences){
		if(i=="vrac")continue;
		dossier = i;
		option = document.createElement("option");
		option.value = dossier;
		option.textContent = dossier;
		select.appendChild(option);
	}
},false);*/
$("#gestionCompetences_dossier_supprimer_bouton").addEventListener("click",function(e){
	select = $("select#gestionCompetences_dossier_supprimer_select"), dossier = select.value;
	if(dossier.length){
		for(var i in GroupesCompetences[dossier])
			Competences[i].json.dossier = "vrac";
		GroupesCompetences["vrac"] = mergeObjects(GroupesCompetences["vrac"],GroupesCompetences[dossier]);
		delete GroupesCompetences[dossier];
		var options = $$("select option[value]");
		for(var i=0;i<options.length;i++)
			if(options[i].value==dossier){
				options[i].parentNode.removeChild(options[i]);
			}
		$("[ouvrir='#gestionCompetences_dossier']").click();
	}
},false);
//Ouvrir la console de gestion des dossiers de compétences
$("[ouvrir='#gestionCompetences_dossier']").addEventListener("click",function(e){
	var selectOrigine = $("#gestionCompetences_dossier_panneauOrigine_liste"), selectArrivee = $("#gestionCompetences_dossier_panneauArrivee_liste");
	if(selectOrigine.value==""&&selectArrivee.value=="")selectArrivee.value="vrac";
	changeDossierCompetences.call(selectOrigine);
	changeDossierCompetences.call(selectArrivee);
},false);
//Déplace une compétence d'un dossier à un autre
var changeDossierCompetences = function(e){
	var select = (e&&e.target?e.target.parentContains("select"):this), dossier=select.value;
	var competence, groupe, array=[], div;
	select.removeAttribute("tous");
	if(dossier == ""){
		groupe = Competences;
		select.setAttribute("tous",true);
	}
	else if(dossier == "++"){
		$("#gestionCompetences_dossier_ajouter").classList.add("visible");
		return true;
	}
	else {
		groupe = GroupesCompetences[dossier];
	}
	for(var competenceid in groupe){
		if(!typeof Competences[competenceid] === "undefined")continue;
		competence = Competences[competenceid].json;
		if(!competence.nom.length||competence.nom == "undefined"||competence["supprime"]){
			//delete Competences[competenceid];
			continue;
		}
		div = document.createElement("div");
		div.innerHTML= competence.niveau+" - "+competence.nom;
		div.setAttribute("cid",competence.cid);
		div.setAttribute("dossier",competence.dossier);
		div.setAttribute("title",competence.nom+" en "+competence.matiere+" "+competence.niveau+" @"+competence.dossier+"");
		div.classList.add("competence");
		div.classList.add("elementDeListe");
		div.setAttribute("search-tags",competence.niveau+" "+competence.groupes+" "+competence.details);
		div.setAttribute("sort-tag",competence.dossier+competence.matiere+"."+competence.niveau+"."+competence.nom);
		array.push(div);
	}
	array = array.sort(compareCompetencesDansListe);
	div = select.nextElementSibling;
	var input = select.previousElementSibling;
	div.innerHTML="";
	for(var i=0;i<array.length;i++){
		div.appendChild(array[i]);
		recherche.call(input);
	}
};
$("#gestionCompetences_dossier_panneauOrigine_liste").addEventListener("change", changeDossierCompetences, false);
$("#gestionCompetences_dossier_panneauArrivee_liste").addEventListener("change", changeDossierCompetences, false);
//Sélection des compétences et actions de déplacement d'un dossier à un autre.
$("#gestionCompetences_dossier").addEventListener("click",function(evt){
	var e = evt.target || this;
	if(e.classList&&e.classList.contains("competence")){
		e.classList.toggle("selection");
	}
	else if(e.id == "gestionCompetences_dossier_panneauActions_gauche" || e.id == "gestionCompetences_dossier_panneauActions_droite"){
		var orig, arriv, selections, sel, cid, competence;
		//Panneaux d'origine (gauche) et d'arrivée (droite)
		var pa = $("#gestionCompetences_dossier_panneauArrivee_liste"), po = $("#gestionCompetences_dossier_panneauOrigine_liste");
		if(po.value=="++"||pa.value=="++")return false;
		if(po.value==pa.value)return false;
		if(e.id == "gestionCompetences_dossier_panneauActions_gauche"){//De droite à gauche, à l'envers
			orig = pa; arriv = po;
			selections = $$("#gestionCompetences_dossier_panneauArrivee_contenu .competence.selection");
		}
		else { // Dans le bon sens, l'origine est po et l'arrivée pa.
			orig = po; arriv = pa;
			if(orig.value=="++"||arriv.value=="++")return false;
			if(orig.value==arriv.value)return false;
			selections = $$("#gestionCompetences_dossier_panneauOrigine_contenu .competence.selection");
		}
		for(var i=0;i<selections.length;i++){
			sel = selections[i];
			cid = sel.getAttribute("cid");
			competence = Competences[cid];
			removeInObject(GroupesCompetences[competence.json.dossier],cid);
			competence.json.dossier = arriv.value;
			GroupesCompetences[arriv.value][cid] = competence;
			sel.classList.remove("selection");
		}
		changeDossierCompetences.call(orig);
		changeDossierCompetences.call(arriv);
	}
	localStorage.setObj("Competences",Competences);
	localStorage.setObj("Parametres",Parametres);
	return true;
},false);

//Comparaison de compétences pour le tri et la mise à jour des listes.
var compareNaivementCompetencesDansListe = function(div1,div2){
	if(div1.hasAttribute){
		if(div1.hasAttribute("sort-tag")){
			var a = div1.getAttribute("sort-tag").split("."), b = div2.getAttribute("sort-tag").split(".");
		}
		else if(div1.hasAttribute("cid")){
			var a = div1.getAttribute("cid").split("."), b = div2.getAttribute("cid").split(".");
		}
	}
	else{
		var a = div1.split("."), b = div2.split(".");
	}
	//bon ordre pour les matières :
	if(a[0]>b[0])
		return 1;
	else if(a[0]<b[0])
		return -1;
	else{
		//ordre inversé pour les niveaux :
		if(a[1]>b[1])
			return -1;
		else if(a[1]<b[1])
			return 1;
		//bon ordre pour les noms :
		else {
			if(a[2]<b[2])
				return -1;
			else if(a[2]>b[2])
				return 1;
			else
				return 0;
		}
	}
}
var compareCompetencesDansListe = function(div1, div2){
	return compareNaivementCompetencesDansListe(div1,div2);
	//var refA = a.getAttirbute("referent"), refB = b.getAttribute("referent")||div2.getAttribute("cid");
	var ref1 = div1.getAttribute(div1.hasAttribute("dossier")?"dossier":"cid"), ref2 = div2.getAttribute(div2.hasAttribute("dossier")?"dossier":"cid");
	var c = compareNaivementCompetencesDansListe(ref1,ref2);
	if(c) return c;
	if(div1.getAttribute("cid")==ref2){
		console.log( div1.getAttribute("cid") + " est supérieur à "+ ref2+ " ( '"+div2.getAttribute("cid")+"' ) " );
		return -1;
	}
	else if(ref1==div2.getAttribute("cid")){
		console.log( ref1 + " ( '"+div1.getAttribute("cid")+"' ) est inférieur à "+ div2.getAttribute("cid") );
		return 1;
	}
	else{
		console.log("On a comparé naïvement "+ div1.getAttribute("cid")+ " et "+ div2.getAttribute("cid") );
		return compareNaivementCompetencesDansListe(div1, div2);
	}
}
var updateListeCompetences = function(){
	var competence, div, array=[];
	$("#listeCompetences").innerHTML = "";
	$("#nouvelleCompetence_recherche").innerHTML = "";
	$("#CompetencesAAjouter").innerHTML = "";
	var limbes = $("#limbes");
	for(var competenceid in Competences){
		competence = Competences[competenceid].json;
		if(!competence.nom.length||competence.nom == "undefined"||competence["supprime"]){
			//delete Competences[competenceid];
			continue;
		}
		div = document.createElement("div");
		div.innerHTML= competence.niveau+" - "+competence.nom;
		div.setAttribute("cid",competence.cid);
		div.setAttribute("dossier",competence.dossier);
		div.setAttribute("title",competence.nom+" en "+competence.matiere+" "+competence.niveau+" --"+competence.groupes);
		div.classList.add("competence");
		div.classList.add("elementDeListe");
		div.setAttribute("search-tags",competence.niveau+" "+competence.groupes+" "+competence.details);
		div.setAttribute("sort-tag",competence.dossier+competence.matiere+"."+competence.niveau+"."+competence.nom);
		limbes.appendChild(div);
		array.push(div);
	}
	array = array.sort(compareCompetencesDansListe);
	for(var i=0;i<array.length;i++){
		$("#listeCompetences").appendChild(array[i].cloneNode(true));
		$("#nouvelleCompetence_recherche").appendChild(array[i].cloneNode(true));
		$("#CompetencesAAjouter").appendChild(array[i]);
	}
	//$("#CompetencesAAjouter").innerHTML=$("#listeCompetences").innerHTML;
	recherche.call($("#listeCompetencesSearch"));
	recherche.call($("#nouvelleCompetence_nom"));
}
updateListeCompetences();




$("#listeEvaluations").addEventListener("click",function(e){
	if(!e.target.classList.contains("evaluation"))
		return false;
	$("#nouvelleEvaluation").classList.add("visible");
	var div = e.target;
	var evaluation = Evaluations[div.getAttribute("eid")].json;
	$("#nouvelleEvaluation_eid").value = evaluation.eid;
	$("#nouvelleEvaluation_nom").value = evaluation.nom;
	$("#nouvelleEvaluation_classe").value = evaluation.classe;
	$("#nouvelleEvaluation_date").value = evaluation.date;
	$("#nouvelleEvaluation_competences").value = evaluation.competences;
	$("#nouvelleEvaluation_baremeMax").value = evaluation.baremeMax;
	$("#nouvelleEvaluation_nombrecompetences").textContent = evaluation.competences.strim().split(" ").length;
	$("#nouvelleEvaluation_groupes").value = evaluation.groupes;
},false);
$("#nouvelleEvaluation_effacer").addEventListener("click",function(e){
	if($("#nouvelleEvaluation_eid").value.length)
		$("#nouvelleEvaluation_eid").value = "";
	else {
		$("#nouvelleEvaluation_nom").value = "";
		$("#nouvelleEvaluation_classe").value = "";
		$("#nouvelleEvaluation_date").value = "";
		$("#nouvelleEvaluation_competences").value = "";
		$("#nouvelleEvaluation_baremeMax").value = Parametres.baremeMax;
		$("#nouvelleEvaluation_groupes").value = "";
	}
},false);
$("#nouvelleEvaluation").addEventListener("keyup",function(e){
	if(e.keyCode==13){
		$("#nouvelleEvaluation_sauver").click();
		return false;
	}
	return true;
},true);
var sauvegarderNouvelleEvaluation = function(e){
	var obj = {}
	obj.eid = $("#nouvelleEvaluation_eid").value;
	obj.nom = $("#nouvelleEvaluation_nom").value;
	obj.classe = $("#nouvelleEvaluation_classe").value;
	obj.date = $("#nouvelleEvaluation_date").value;
	obj.competences = $("#nouvelleEvaluation_competences").value.strim();
	obj.groupes = $("#nouvelleEvaluation_groupes").value;
	obj.baremeMax = $("#nouvelleEvaluation_baremeMax").value;
	/*if($("#nouvelleEvaluation_eid").value.length){
		delete Evaluations[$("#nouvelleEvaluation_eid").value];
	}*/
	var evaluation = new Evaluation(obj);
	evaluation.json.competences = obj.competences;
	$("#nouvelleEvaluation_eid").value = evaluation.json.eid;
	//$("#nouvelleEvaluation_effacer").click();
	updateListeEvaluations();
}
$("#nouvelleEvaluation_sauver").addEventListener("click",sauvegarderNouvelleEvaluation,false);
$("#nouvelleEvaluation_supprimer").addEventListener("click",function(e){
	if($("#nouvelleEvaluation_eid").value.length){
		delete Evaluations[$("#nouvelleEvaluation_eid").value];
		//Evaluations[$("#nouvelleEvaluation_eid").value]={supprime:Date.now()};
		//Evaluations[$("#nouvelleEvaluation_eid").value].json["supprime"]=Date.now();
		//Evaluations[$("#nouvelleEvaluation_eid").value]="";
		cleanAll();
	}
	localStorage.setObj("Evaluations",Evaluations);
	$("#nouvelleEvaluation_effacer").click();
	updateListeEvaluations();
},false);
var compareEvaluationsDansListe = function(div1,div2){
	if(div1.hasAttribute&&div1.hasAttribute("eid")){
		var a = Evaluations[div1.getAttribute("eid")], b = Evaluations[div2.getAttribute("eid")];
	}
	else{
		var a = Evaluations[div1], b = Evaluations[div2];
	}
	/*if(!a[2])a[2]="";
	if(!b[2])b[2]="";*/
	//ordre inversé pour les niveaux :
	var c1=a.json.classe.split("e"), c2=b.json.classe.split("e");
	
	if(a.json.timestamp<b.json.timestamp)
		return 1;
	else if(a.json.timestamp>b.json.timestamp)
		return -1;
	else {
		if(c1[0]>c2[0])
			return -1;
		else if(c1[0]<c2[0])
			return 1;
		else{
			//bon ordre pour les numéros de classe :
			if(c1[1]>c2[1])
				return 1;
			else if(c1[1]<c2[1])
				return -1;
			//bon ordre pour les noms :
			else {
				if(a.json.timestamp+a.json.nom<b.json.timestamp+b.json.nom)
					return 1;
				else if(a.json.timestamp+a.json.nom>b.json.timestamp+a.json.nom)
					return -1;
				else
					return 0;
			}
		}
	}
}
var updateListeEvaluations = function(){
	var evaluation, div, button, array=[];
	$("#listeEvaluations").innerHTML = "";
	for(var evaluationid in Evaluations){
		evaluation = Evaluations[evaluationid].json;
		if(!evaluation||!evaluation.nom.length||evaluation.nom == "undefined"||evaluation["supprime"]){
			//delete Evaluations[evaluationid];
			continue;
		}
		div = document.createElement("div");
		div.innerHTML = evaluation.classe+" - « "+evaluation.nom+" » le "+evaluation.date;
		div.classList.add("evaluation");
		div.classList.add("elementDeListe");
		div.setAttribute("eid",evaluation.eid);
		div.setAttribute("title","« "+evaluation.nom+" » des "+evaluation.classe+" le "+evaluation.jourSemaine+" "+evaluation.date);
		div.setAttribute("search-tags",evaluation.nom+" "+evaluation.classe+" "+evaluation.date+" "+evaluation.groupes+" "+evaluation.competences+" "+evaluation.jourSemaine);
		button = div.appendChild(document.createElement("button"));
		button.textContent = "Évaluer "+evaluation.nom;
		button.addEventListener("click",function(e){
			evaluerCompetences(this.parentNode.getAttribute("eid"));
		},false);
		//$("#listeEvaluations").appendChild(div);
		array.push(div);
	}
	array = array.sort(compareEvaluationsDansListe);
	for(var i=0;i<array.length;i++)
		$("#listeEvaluations").appendChild(array[i]);
	recherche.call($("#listeEvaluationsSearch"));
}
updateListeEvaluations();



var choisirCompetences = function(evalid){
	sauvegarderNouvelleEvaluation();
	var blocCompetences = $("#blocAjoutDeCompetences");
	blocCompetences.classList.add("visible");
	var blocCompetencesAAjouter = $("#CompetencesAAjouter");
	var competencesPresentes = $("#nouvelleEvaluation_competences").value.split(" ");
	var nombreDeCompetencesPresentes = competencesPresentes.length;
	var eid = evalid||$("#nouvelleEvaluation_eid").value;
	sessionStorage.setItem("competences_"+eid,$("#nouvelleEvaluation_competences").value);
	var nombre=0,c;
	for(var i=0;i<competencesPresentes.length;i++)
		if(competencesPresentes[i].length){
			c = blocCompetencesAAjouter.$("[cid='"+competencesPresentes[i]+"']");
			c.classList.add("selection");
			blocCompetencesAAjouter.insertBefore(c,blocCompetencesAAjouter.$(":not(.selection)"));
		}
	if(!isMobileDevice())$("#rechercheCompetencesAAjouter").focus();
	var nombre = blocCompetences.$$(".competence.selection").length;
	var total = blocCompetences.$$(".competence").length;
	$("#blocAjoutDeCompetences_nombrecompetences").textContent = nombre+"/"+total;
}
$("#nouvelleEvaluation_ajouteCompetences").addEventListener("click",choisirCompetences,false);
$("#blocAjoutDeCompetences [fermer]").addEventListener("click",function(e){
	var blocCompetences = $("#blocAjoutDeCompetences");
	blocCompetences.classList.remove("visible");
	$('#rechercheCompetencesAAjouter').value = "";
	recherche.call($('#rechercheCompetencesAAjouter'));
	var toutesCompetences = blocCompetences.$$(".selection");
	for(var i=0;i<toutesCompetences.length;i++)
		toutesCompetences[i].classList.remove("selection");
},false);
$("#blocAjoutDeCompetences_annuler").addEventListener("click",function(e){
	var blocCompetences = $("#blocAjoutDeCompetences");
	blocCompetences.classList.remove("visible");
	$('#rechercheCompetencesAAjouter').value = "";
	recherche.call($('#rechercheCompetencesAAjouter'));
	var toutesCompetences = blocCompetences.$$(".selection");
	for(var i=0;i<toutesCompetences.length;i++)
		toutesCompetences[i].classList.remove("selection");
	var eid = $("#nouvelleEvaluation_eid").value;
	if(sessionStorage.getItem("competences_"+eid))
		$("#nouvelleEvaluation_competences").value = sessionStorage.getItem("competences_"+eid);
	var nombre = $("#nouvelleEvaluation_competences").value.strim().split(" ").length;
	var total = blocCompetences.$$(".competence").length;
	$("#nouvelleEvaluation_nombrecompetences").textContent = nombre;
	$("#blocAjoutDeCompetences_nombrecompetences").textContent = nombre+"/"+total;

},false);
$("#CompetencesAAjouter").addEventListener("click",function(e){
	if(!e.target.hasAttribute("cid"))
		return false;
	var div = e.target;
	var blocCompetencesAAjouter = $("#CompetencesAAjouter");
	var target = $("#nouvelleEvaluation_competences");
	div.classList.toggle("selection");
	var selectionnes=blocCompetencesAAjouter.$$(".selection");
	var comp=" "+div.getAttribute("cid")+" ", comps=" "+$("#nouvelleEvaluation_competences").value+" ";
	if(div.classList.contains("selection")){
		if(comps.indexOf(comp)==-1)
			comps += " "+comp;
		blocCompetencesAAjouter.insertBefore(div,blocCompetencesAAjouter.$(":not(.selection)"));
	}
	else{
		comps = comps.replace(comp," ");
		if(selectionnes.length){
			blocCompetencesAAjouter.insertBefore(div,selectionnes[selectionnes.length-1]);
			blocCompetencesAAjouter.insertBefore(selectionnes[selectionnes.length-1],div);
		}
	}
	$("#nouvelleEvaluation_competences").value = comps.strim();
	var nombre = selectionnes.length;
	var total = div.parentNode.children.length;
	$("#nouvelleEvaluation_nombrecompetences").textContent = nombre;
	$("#blocAjoutDeCompetences_nombrecompetences").textContent = nombre+"/"+total;
},true);


/*$("#nouveauxEleves_fermer").addEventListener("click",function(){
	var blocNouveauxEleves = $("#nouveauxEleves");
	blocNouveauxEleves.classList.remove("visible");
	blocNouveauxEleves.$('textarea').value = "";
},false);*/
$("#nouveauxEleves_ajouter").addEventListener("click",function(){
	var blocNouveauxEleves = $("#nouveauxEleves");
	blocNouveauxEleves.classList.remove("visible");
	var text = blocNouveauxEleves.$('textarea').value;
	var array,etablissement=$("#nouveauxEleves_etablissement").value||"sl",eleves = text.split("\n");
	for(var e in eleves){
		if(eleves[e].length){
			array = eleves[e].split("\t");
			new Eleve({
				noms:array[0],
				prenoms:array[1],
				sexe:array[2],
				date:array[3],
				classe:array[4],
				etablissement:etablissement
			});
		}
	}
	updateListeEleves();
},false);

/*$('#rechercheCompetencesAAjouter').addEventListener('keyup', recherche, false);
$('#listeElevesSearch').addEventListener('keyup', recherche, false);
$('#listeCompetencesSearch').addEventListener('keyup', recherche, false);
$('#listeEvaluationsSearch').addEventListener('keyup', recherche, false);
*/
var inputRecherche = $$("[recherche]");
for(var i=0;i<inputRecherche.length;i++){
	inputRecherche[i].addEventListener("keyup",recherche,false);
}

$("#evaluationsCompetences_annuler").addEventListener("click",function(){
	var table = $("#evaluationsCompetences_bloctableau .table"), evalid = table.getAttribute("evalid"), sauvegarde = sessionStorage.getObj("evaluations_"+evalid);
	var s, eleve;
	if(sauvegarde){
		for(var e in sauvegarde){
			eleve = Eleves[e];
			eleve.json.evaluations[evalid]=sauvegarde[e];
		}
		storeMTime(table.getAttribute("lastmtime"));
	}
	else
		return true;
},false);
var evaluerCompetences = function(evalidp){
	var evaluation = Evaluations[evalidp];
	if(!evaluation)
		evaluation = Evaluations[$("#nouvelleEvaluation_eid").value];
	if(!evaluation) return true;
	var evalid=evaluation.json.eid;
	var bloc = $("#evaluationsCompetences"); bloc.classList.add("visible");
	bloc.$("[recherche]").value="";
	var table = bloc.$(".table"), thead, td, span, baremeMax = evaluation.json.baremeMax;
	table.setAttribute("bareme",baremeMax);
	table.setAttribute("bilan","evaluation");
	$("#evaluationsCompetences_mobile_actions").setAttribute("bareme",baremeMax);
	var comps = evaluation.json.competences.split(" "), competence, eleve;
	// 2.5 pour les noms, 1 pour chaque compétence, 0.5 pour le pourcentage,  1 pour la note
	var tailles = [2.5,1,0.8,1.5];
	var sommeDesTailles = 0;for(var t=0;t<tailles.length;t++)if(tailles[t])sommeDesTailles+=tailles[t];
	var n = comps.length+sommeDesTailles-tailles[1];
	var width = table.offsetWidth/n-2*comps.length-6;
	var pwidth = 99/n;
	table.setAttribute("evalid",evalid);
	table.setAttribute("lastmtime",getMTime());
	tr=document.createElement("div");
	tr.classList.add("tr");
	var thead = table.$(".thead");
	if(!thead){
		thead = document.createElement("div");
		thead.classList.add("thead");
		table.appendChild(thead);
	}
	else
		thead.innerHTML="";
	thead.appendChild(tr);
	td = document.createElement("div");
	//td.style.width = 2*width + "px";
	td.style.width = tailles[0]*pwidth+ "%";
	td.classList.add("th");
	span = document.createElement("span");
	td.appendChild(span).innerHTML = "Compétences<br/>"+evaluation.json.classe+"<br/>"+evaluation.json.nom;
	tr.appendChild(td);
	// Création des compétences avec leur « titre »
	for(var i=0;i<comps.length;i++){
		competence = Competences[comps[i]];
		//td = document.createElement("th");
		td = document.createElement("div");
		td.classList.add("th");
		td.setAttribute("cid",comps[i]);
		td.setAttribute("j",i);
		td.style.width = width + "px";
		td.style.width = tailles[1]*pwidth+ "%";
		span = document.createElement("span");
		span.textContent = competence.getNom().replace(/\//g," / ");
		td.appendChild(span);
		span = document.createElement("span");
		span.classList.add("bilanParCompetence");
		td.appendChild(span);
		tr.appendChild(td);
	}
	td = document.createElement("div");
	//td.style.width = width/2+"px";
	td.style.width = tailles[2]*pwidth+ "%";
	td.classList.add("th");
	td.classList.add("pourcentageDeReussite");
	span = document.createElement("span");
	span.textContent="%";
	td.appendChild(span);
	span = document.createElement("span");
	span.classList.add("moyenne");
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("div");
	//td.style.width = width/2+"px";
	td.style.width = tailles[3]*pwidth+ "%";
	td.classList.add("th");
	td.classList.add("denomDeNoteDeReussite");
	span = document.createElement("span");
	span.innerHTML="Note sur<br/>";
	var input = document.createElement("input");
	input.type = "text";
	input.value = Parametres.denomDeNoteDeReussite;
	span.appendChild(input).setAttribute("size",1);
	td.appendChild(span);
	td.addEventListener("click",function(e){this.$("input").select();},false);
	span = document.createElement("span");
	span.classList.add("moyenne");
	td.appendChild(span);
	tr.appendChild(td);
	input.addEventListener("keyup",function(e){
		updateSommeCompetences();
		Parametres.denomDeNoteDeReussite = this.value;
		localStorage.setObj("Parametres",Parametres);
	},false);
	thead.addEventListener("click",function(e){
		if(!e.target.hasAttribute("cid")&&!e.target.parentContains("[cid]"))return true;
		var th=e.target.parentContains(".th");
		if(th.hasAttribute("cid")){
			var s=th.$("span");
			information({time:5000,info:s.innerText});
		}
	},false);
	var classe = evaluation.json.classe, eleves=[], eleve, sauvegarde={};
	for(var j in Eleves)
		if(!Eleves[j]["supprime"]&&Eleves[j].estDansGroupeIncl(classe)){
			eleves.push(Eleves[j]);
			if(Eleves[j].json.evaluations[evalid])
				sauvegarde[Eleves[j].json.eid] = Eleves[j].json.evaluations[evalid]
		}
	sessionStorage.setObj("evaluations_"+evalid,sauvegarde);
	eleves = eleves.sort(compareElevesDansListe);
	//var tbody = table.appendChild(document.createElement("tbody"));
	var tbody = table.$(".tbody");
	if(!tbody){
		tbody = table.appendChild(document.createElement("div"));
		tbody.classList.add("tbody");
	}
	else
		tbody.innerHTML="";
	//tbody.style.maxHeight = bloc.offsetHeight - 300 + "px";
	tbody.style.maxWidth = bloc.offsetWidht*0.9 + "px";
	var eid, cid, evalEleve;
	var alt=true;
	for(var j=0;j<eleves.length;j++){
		eleve = eleves[j];
		eid = eleve.getEid();
		if(!eleve.json.evaluations)eleve.json.evaluations={};
		evalEleve = eleve.json.evaluations[evalid];
		if(!evalEleve){
			evalEleve={};
			eleve.json.evaluations[evalid]={};
		}
		//tr = tbody.appendChild(document.createElement("tr"));
		//td = tr.appendChild(document.createElement("td"));
		tr = tbody.appendChild(document.createElement("div"));
		alt=!alt;
		tr.setAttribute("alt",alt);
		tr.classList.add("tr");
		tr.setAttribute("search-tags",eleve.json.noms+" "+eleve.json.prenoms+" c"+eleve.json.classe+" g"+eleve.json.groupes.replace(/ /g," g"));
		tr.setAttribute("eid",eleve.json.eid);
		tr.setAttribute("i",j);
		td = tr.appendChild(document.createElement("div"));
		//td.style.width = 2*width + "px";
		td.style.width = tailles[0]*pwidth+ "%";
		td.classList.add("th");
		span = document.createElement("span");
		span.textContent =  eleve.json.noms+" "+eleve.json.prenoms;
		td.appendChild(span);
		span = td.appendChild(span.cloneNode(true));
		span.innerHTML = "";
		button = span.appendChild(document.createElement("button"));
		button.textContent = "bilan";
		button.addEventListener("click",function(e){
			bilanEleve(Eleves[this.parentContains(".tr").getAttribute("eid")]);
		},false);
		td.setAttribute("eid",eleve.getEid());
		for(var i=0;i<comps.length;i++){
			cid = Competences[comps[i]].json.cid;
			td = document.createElement("div");
			//td.style.width = width+"px";
			td.style.width = tailles[1]*pwidth+ "%";
			td.setAttribute("eid",eid);
			td.setAttribute("cid",cid);
			td.setAttribute("i",j);
			td.setAttribute("j",i);
			td.classList.add("td");
			span = document.createElement("span");
			if(evalEleve[cid]||evalEleve[cid]==0){
				td.setAttribute("c",evalEleve[cid])
				span.style.backgroundColor = couleurs[baremes[baremeMax][evalEleve[cid]]];
				span.textContent = baremes[baremeMax][evalEleve[cid]];
			}
			td.appendChild(span);
			//input = document.createElement("input");
			//td.appendChild(input);
			tr.appendChild(td);
		}
		td = document.createElement("div");
		//td.style.width = width/2+"px";
		td.style.width = tailles[2]*pwidth+ "%";
		td.setAttribute("eid",eid);
		td.classList.add("td");
		td.classList.add("pourcentageDeReussite");
		span = document.createElement("span");
		td.appendChild(span);
		tr.appendChild(td);
		td = document.createElement("div");
		//td.style.width = width/2+"px";
		td.style.width = tailles[3]*pwidth+ "%";
		td.setAttribute("eid",eid);
		td.classList.add("td");
		td.classList.add("noteDeReussite");
		span = document.createElement("span");
		td.appendChild(span);
		tr.appendChild(td);
	}
	table.appendChild(tbody);
	table.setAttribute("i",0);
	table.setAttribute("j",0);
	td = table.$("[eid][cid]");
	td.classList.add("selection");
	updateSommeCompetences();
	updateColonneCompetence();
	storeMTime(table.getAttribute("lastmtime"));
	$("#evaluationsCompetences_parColonne").checked = false;
	if(!isMobileDevice())$("input#evaluationsCompetences_input").focus();
}
$("#nouvelleEvaluation_evaluer").addEventListener("click",function(){
	sauvegarderNouvelleEvaluation();
	evaluerCompetences();
},false);
/*$("#evaluationsCompetences div.table").addEventListener("mouseover",function(e){
	var cell = e.target.parentContains(".td")||e.target.parentContains(".th")||e.target;
	if(cell.hasAttribute("j")){
		this.setAttribute("hovered-column",cell.getAttribute("j"));
	}
},false);
$("#evaluationsCompetences div.table").addEventListener("mouseout",function(e){
	this.removeAttribute("hovered-column");
},false);*/
var keyPressed = false;
var baremes = {
	1 : { 1:"A"},
	2 : { 0:"NA",1:"A"},
	3 : { 0:"NA",1:"EA",2:"A"},
	4 : { 0:"NA",1:"I",2:"S",3:"M"}
}
var couleurs = {
	ne : "none",
	NA : "rgba(200,0,0,0.7)",
	I : "rgba(255,100,0,0.7)",
	EA : "rgba(255,100,0,0.7)",
	S : "rgba(200,255,50,0.6)",
	A : "rgba(0,200,0,0.7)",
	M : "rgba(0,200,0,0.7)",
	0 : "rgba(200,0,0,0.7)",
	33: "rgba(220,50,0,0.7)",
	50 : "rgba(255,150,0,0.7)",
	66: "rgba(200,255,50,0.6)",
	100:"rgba(0,200,0,0.7)",
	bleu : "#0af",
}
var bilanEleve = function(eleve,changeBoolBilanEleveParEvaluation){
	if(!changeBoolBilanEleveParEvaluation)
		$("#bilanEleve_parEvaluation").checked=Parametres["bilanEleveParEvaluation"];
	var boolBilanEleveParEvaluation = $("#bilanEleve_parEvaluation").checked;
	var evaluations = eleve.json.evaluations, evaluation, alt=true;
	var evaluationsIds = [];
	for(var evalid in evaluations)
		evaluationsIds.push(evalid);
	evaluationsIds.sort(compareEvaluationsDansListe).reverse();
	var competences = {}, comp, cpe = {}, maxcpe = 0;
	/*for(var i=0;i<evaluationsIds.length;i++){
		evalid = evaluationsIds[i];
		eval = Evaluations[evalid];
		b = eval.json.baremeMax-1;
		c = evaluations[evalid];
		for(var cid in c){
			comp = competences[cid];
			if(!competences[cid]){
				comp = competences[cid] = {};
				cpe[cid] = 0;
			}
			comp[evalid] = {value:c[cid]/b,cid:cid,evalid:evalid,bareme:b};
			cpe[cid]++;
			maxcpe = Math.max(maxcpe,cpe[cid]);
		}
	}*/
	for(var i=0;i<evaluationsIds.length;i++){
		evalid = evaluationsIds[i];
		evaluation = Evaluations[evalid];
		b = evaluation.json.baremeMax-1;
		c = evaluations[evalid];
		for(var cid in c){
			if(evaluation.json.competences.indexOf(cid)==-1)continue;
			comp = competences[cid];
			if(!competences[cid]){
				comp = competences[cid] = {};
				cpe[cid] = 0;
			}
			comp[evalid] = {value:c[cid]/b,cid:cid,evalid:evalid,bareme:b};
			cpe[cid]++;
			if(maxcpe<cpe[cid]) maxcpe = cpe[cid];
		}
	}
	if(boolBilanEleveParEvaluation)maxcpe=evaluationsIds.length;
	/*console.log("********************************************")
	console.log("************* Pré bilan élève **************")
	console.log("********************************************")
	console.log(competences);
	console.log(cpe);
	console.log(maxcpe);
	console.log("********************************************")
	console.log("************ Début bilan élève *************")
	console.log("********************************************")*/
	
	var bloc = $("#bilanEleve"), scrollOrigin = bloc.classList.contains("visible")?$("#bilanEleve .tbody").scrollTop:0; bloc.classList.add("visible");
	//var bloc = $("#evaluationsCompetences"); bloc.classList.add("visible");
	var table = bloc.$(".table"); table.setAttribute("bilan","eleve");
	table.setAttribute("eid",eleve.json.id);
	var thead = table.$(".thead"), tbody = table.$(".tbody"), tr, td, span;
	var tailles = [3.5, 1, 0.8, 1.5];
	var sommeDesTailles = 0;for(var t=0;t<tailles.length;t++)if(tailles[t])sommeDesTailles+=tailles[t];
	var n = maxcpe+sommeDesTailles-tailles[1];
	var width = table.offsetWidth/n-2*maxcpe-6;
	var pwidth = 99/n;
	table.setAttribute("eid",eleve.json.eid);
	if(!thead){
		thead = document.createElement("div");
		thead.classList.add("thead");
		table.appendChild(thead);
	}
	else
		 thead.innerHTML = "";
	tr=document.createElement("div");
	tr.classList.add("tr");
	thead.appendChild(tr);
	td = document.createElement("div");
	td.style.width = tailles[0]*pwidth+ "%";
	td.classList.add("th");
	span = document.createElement("span");
	td.appendChild(span).innerHTML = "Compétences de <br/>"+eleve.json.prenoms+" "+eleve.json.noms+" en "+eleve.json.classe;
	tr.appendChild(td);
	//Création de l'entête pour chaque colonne et des cases « bilan »
	for(var j=0;j<maxcpe;j++){
		td = document.createElement("div");
		td.classList.add("th");
		td.style.width = tailles[1]*pwidth+ "%";
		span = document.createElement("span");
		if(boolBilanEleveParEvaluation){
			evaluation = Evaluations[evaluationsIds[j]].json;
			span.textContent = evaluation.nom+" "+evaluation.date;
			span.setAttribute("title",span.textContent);
			/*span = td.appendChild(span.cloneNode(true));
			span.style.backgroundColor = "grey";
			td.setAttribute("eid",evaluation.eid);
			button = span.appendChild(document.createElement("button"));
			button.textContent = "bilan";
			button.addEventListener("click",function(e){
				evaluerCompetences(this.parentContains(".th").getAttribute("eid"));
			},false);*/
		}
		else span.textContent = (j+1);
		//td.setAttribute("cid",true);
		td.appendChild(span);
		tr.appendChild(td);
	}
	td = document.createElement("div");
	td.classList.add("th");
	td.style.width = tailles[2]*pwidth+ "%";
	span = document.createElement("span");
	span.textContent = "Bilan 1";
	td.appendChild(span);
	tr.appendChild(td);
	td = document.createElement("div");
	td.classList.add("th");
	td.style.width = tailles[3]*pwidth+ "%";
	span = document.createElement("span");
	span.textContent = "Bilan 2";
	td.appendChild(span);
	tr.appendChild(td);
	//Création des lignes de compétences
	nbLignes=0;
	var tbody = table.$(".tbody");
	if(!tbody){
		tbody = table.appendChild(document.createElement("div"));
		tbody.classList.add("tbody");
	}
	else
		tbody.innerHTML="";
	var colonne = 0, v = 0, listeEvaluations={};
	if(boolBilanEleveParEvaluation)
		for(var i=0;i<evaluationsIds.length;i++)
			listeEvaluations[evaluationsIds[i]]=evaluationsIds[i];
	for(var cid in competences){
		competence = Competences[cid].json;
		tr = tbody.appendChild(document.createElement("div"));
		alt=!alt;
		tr.setAttribute("alt",alt);
		tr.classList.add("tr");
		tr.setAttribute("search-tags",competence.nom+" "+competence.dossier+" g"+competence.groupes.replace(/ /g," g"));
		tr.setAttribute("cid",cid);
		tr.setAttribute("i",++nbLignes);
		td = tr.appendChild(document.createElement("div"));
		td.style.width = tailles[0]*pwidth+ "%";
		td.classList.add("th");
		span = document.createElement("span");
		span.textContent = competence.nom;
		td.appendChild(span);
		td.setAttribute("cid",cid);
		valeurs = competences[cid]||[];
		colonne = 0; v = 0;
		if(!boolBilanEleveParEvaluation){
			while(cpe[cid]<maxcpe){
				valeurs["complément"+cpe[cid]] = "";
				cpe[cid]++;
			}
			listeEvaluations = valeurs;
		}
		for(var v in listeEvaluations){
			valeur = (valeurs[v]?Math.floor(100*valeurs[v]["value"]):"");
			td = document.createElement("div");
			td.classList.add("td");
			td.style.width = tailles[1]*pwidth+ "%";
			td.setAttribute("v",valeur);
			if(valeurs[v]){
				span = document.createElement("span");
				span.textContent = valeur;
				span.style.backgroundColor = couleurs[valeur] ;
				td.appendChild(span);
				if(!boolBilanEleveParEvaluation){
					span = td.appendChild(span.cloneNode(true));
					span.style.backgroundColor = "grey";
					evaluation = Evaluations[valeurs[v]["evalid"]].json;
					span.textContent = evaluation.nom+" "+evaluation.date;
				}
			}
			tr.appendChild(td);
		}
		td = document.createElement("div");
		td.style.width = tailles[2]*pwidth+ "%";
		td.setAttribute("cid",cid);
		td.classList.add("td");
		td.classList.add("bilan1");
		span = document.createElement("span");
		td.appendChild(span);
		tr.appendChild(td);
		td = document.createElement("div");
		td.style.width = tailles[3]*pwidth+ "%";
		td.setAttribute("cid",cid);
		td.classList.add("td");
		td.classList.add("bilan2");
		span = document.createElement("span");
		td.appendChild(span);
		tr.appendChild(td);
	}
	table.appendChild(tbody);
	tbody.scrollTop = scrollOrigin;
}
$("#bilanEleve_parEvaluation").addEventListener("click",function(){
	bilanEleve(Eleves[$("#bilanEleve .table").getAttribute("eid")],true);
},false);
/* couleur = couleurs[baremes[bareme][valeur]] */
Parametres["baremes"] = mergeObjects(Parametres["baremes"],baremes);
baremes = Parametres["baremes"];
var evaluerCompetencesClick = function(e){
	if(e.target.tagName=="INPUT"){
		if(e.target.type == "checkbox")
			if(!isMobileDevice())$("#evaluationsCompetences_input").focus();
		return true;
	}
	if(!isMobileDevice())$("#evaluationsCompetences_input").focus();
	var target = (e.target.hasAttribute("eid"))?e.target:e.target.parentContains("[eid]");
	if(target){
		var table = target.parentContains(".table");
		var baremeMax = parseInt(table.getAttribute("bareme"));
		var bareme = baremes[baremeMax];
		if(target.classList.contains("td")&&target.hasAttribute("i")){
			if(target.classList.contains("a-modifier")){
				var eid = target.getAttribute("eid"), cid=target.getAttribute("cid"), evalid = table.getAttribute("evalid"), span = target.$("span");
				if(!target.hasAttribute("c")||!target.getAttribute("c")){
					target.setAttribute("c","ne");
					span.style.backgroundColor = "";
					span.textContent = "NE";
					Eleves[eid].json.evaluations[evalid][cid]="ne";
				}
				else {
					var c= (isNumeric(target.getAttribute("c"))?parseInt(target.getAttribute("c")):-1);
					c++; c%=(baremeMax+1);
					if(c!=baremeMax){
						target.setAttribute("c",c);
						span.style.backgroundColor = couleurs[baremes[baremeMax][c]];
						span.textContent = baremes[baremeMax][c];
						Eleves[eid].json.evaluations[evalid][cid]=c;
					}
					else{//Vide
						target.removeAttribute("c");
						span.style.backgroundColor = "";
						span.textContent = "";
						delete Eleves[eid].json.evaluations[evalid][cid];
					}
				}
				localStorage.setObj("Eleves",Eleves);
				updateSommeCompetences(target.parentContains(".tr"));
				updateColonneCompetence(target);
				storeMTime();
			}
			else{
				var i=target.getAttribute("i"),j=target.getAttribute("j");
				table.setAttribute("i",i);
				table.setAttribute("j",j);
				if(table.$(".selection"))table.$(".selection").classList.remove("selection");
				if(table.$(".a-modifier"))table.$(".a-modifier").classList.remove("a-modifier");
				var td = table.$(".td[i='"+i+"'][j='"+j+"']");
				td.classList.add("selection");
				td.classList.add("a-modifier");
			}
		}
		else if(target.classList.contains(".th")) {
			var ligne = target.parentContains(".tr");
			if(!ligne)return false;
			var tds = ligne.$$("[cid]");
			var c= (target.hasAttribute("c-g")?target.getAttribute("c-g"):-1);
			c++; c%=(baremeMax+1);
			if(c!=baremeMax){
				target.setAttribute("c-g",c);
			}
			else
				target.removeAttribute("c-g");
			var eid, cid, evalid, td;
			for(var i=0;i<tds.length;i++){
				td = tds[i];
				eid = td.getAttribute("eid");
				cid	= td.getAttribute("cid");
				evalid = table.getAttribute("evalid");
				if(c!=3){
					td.setAttribute("c",c);
					Eleves[eid].json.evaluations[evalid][cid]=c;
				}
				else{
					td.removeAttribute("c");
					//delete Eleves[eid].json.evaluations[evalid][cid];
					Eleves[eid].json.evaluations[evalid][cid]="";
				}
			}
			localStorage.setObj("Eleves",Eleves);
			updateSommeCompetences(ligne);
			updateColonneCompetence();
			storeMTime();
		}
		else if(target.classList.contains("th")){
			console.log("do something here !");
		}
	}
}
$("#evaluationsCompetences").addEventListener("click",evaluerCompetencesClick,false);
document.body.addEventListener("keydown",function(e){
	if(!isMobileDevice())
		if($("#evaluationsCompetences").classList.contains("visible"))
			if(e.target.tagName!="INPUT"||e.target.type == "checkbox")
				$("#evaluationsCompetences_input").focus();
	return true;
},false);
var evaluerCompetencesClavier = function(e){
	if(e.target.id != "evaluationsCompetences_input")return false;
	if(!keyPressed) {
		var table = $("#evaluationsCompetences .table"), tbody = table.$(".tbody");
		baremeMax = parseInt(table.getAttribute("bareme"));
		bareme = baremes[baremeMax];
		if(tbody.$(".a-modifier"))tbody.$(".a-modifier").classList.remove("a-modifier");
		var trs = tbody.$$(".tr:not(.erase)");
		//console.log(trs.length);
		var td = tbody.$(".selection");
		var tr=null;
		var i, maxI, j, maxJ;
		if(td){
			for(var r=0;r<trs.length;r++){
				if(trs[r].getAttribute("i")==td.getAttribute("i")){
					i = r;
					tr = trs[r];
					break;
				}
			}
			if(!tr){
				tr = trs[0];
			}
			maxI = trs.length-1, tds = tr.$$("[cid]"), j = parseInt(td.getAttribute("j")), maxJ=tds.length-1;
		}
		else{
			i = 0, maxI = trs.length-1, tr=(i<maxI?trs[i]:trs[0]), tds = tr.$$("[cid]"), j = parseInt(td.getAttribute("j")), maxJ=tds.length-1;
			td = tds[j];
		}
		//console.log("i : "+i+",  max(i) : "+maxI+",  j : "+j+", max(j) : "+maxJ);
		span = td.$("span");
		var i0=i, j0=j;
		var eleve=Eleves[td.getAttribute("eid")], eid=table.getAttribute("evalid"), cid=td.getAttribute("cid");
		var parLigne=!($("#evaluationsCompetences_parColonne")&&$("#evaluationsCompetences_parColonne").checked), valeur = "";
		if(!eleve.json.evaluations[eid])eleve.json.evaluations[eid]={};
		var boolStoreMTime = false;
		keyPressed = true;
		switch(e.keyCode){
			case 33://PagePréc
				i=0;
				break;
			case 34://PageSuiv
				i=maxI;
				break;
			case 35://Fin
				if(j<maxJ){j=maxJ;}
				//else i=maxI;
				break;
			case 36://Début/Home
				if(j>0){j=0;}
				//else i=0;
				break;
			case 37://gauche
				if(j>0)j--;
				else if(i>0){i--;j=maxJ;}
				break;
			case 39://droite
				if(j<maxJ)j++;
				else if(i<maxI){i++;j=0;}
				break;
			case 38://haut
				if(i>0)i--;
				else if(j>0){j--;i=maxI;}
				break;
			case 40://bas
				if(i<maxI)i++;
				else if(j<maxJ){j++;i=0;}
				break;
			case 48://0
			case 96://0 NUMPAD
			case 49://1
			case 97://1 NUMPAD
			case 50://2
			case 98://2 NUMPAD
			case 51://3
			case 99://3 NUMPAD
			case 52://4
			case 100://4 NUMPAD
			case 53://5
			case 101://5 NUMPAD
			/*case 54://6
			case 102://6 NUMPAD*/
			case 32://espace
			case 190://. NUMPAD
				if(e.keyCode==32||e.keyCode==190)
					valeur="ne";
				else
					valeur=(e.keyCode>60)?e.keyCode-96:e.keyCode-48;
				if(valeur=="ne"||valeur<baremeMax){
					if(parLigne){
						if(j<maxJ)j++;else if(i<maxI){i++;j=0;}
					}
					else{
						if(i<maxI)i++;else if(j<maxJ){j++;i=0;}
					}
					td.setAttribute("c",valeur);
					span.style.backgroundColor = couleurs[baremes[baremeMax][valeur]];
					span.textContent = baremes[baremeMax][valeur];
					eleve.json.evaluations[eid][cid]=valeur;
					localStorage.setObj("Eleves",Eleves);
					updateSommeCompetences(tr);
					boolStoreMTime = true;
				}
				break;
			case 8://backspace
			case 46://suppr
				if(e.keyCode==8){
					if(parLigne){
						if(j>0)j--;
						else if(i>0){i--;j=maxJ;}
					}
					else{
						if(i>0)i--;
						else if(j>0){j--;i=maxI;}
					}
					td.classList.remove("selection");
					td = trs[i].$$(".td")[j];
					eleve=Eleves[td.getAttribute("eid")], cid=td.getAttribute("cid");
				}
				//eleve.json.evaluations[eid][cid]="";
				delete eleve.json.evaluations[eid][cid];
				td.removeAttribute("c");
				span = td.$("span");
				span.style.backgroundColor = "";
				span.textContent = "";
				localStorage.setObj("Eleves",Eleves);
				updateSommeCompetences(tr);
				boolStoreMTime = true;
				break;
			default:
				this.$("#evaluationsCompetences_input").value="";
				boolStoreMTime = false;
				//this.$("#evaluationsCompetences_input").focus();
		}
		if(boolStoreMTime)storeMTime();
		var height = td.offsetHeight;
		if(tbody.scrollTo)tbody.scrollTo(0,height*(i-(isMobileDevice()?2:5)));
		else tbody.scrollTop = height*(i-5);
		table.setAttribute("i",i);
		table.setAttribute("j",j);
		updateColonneCompetence(td);
		if(e.keyCode!=8){
			td.classList.remove("selection");
			td = trs[i].$$(".td")[j];
		}
		table.setAttribute("eid",td.getAttribute(eid));
		table.setAttribute("cid",td.getAttribute(cid));
		td.classList.add("selection");
		window.setTimeout(function(){keyPressed=false;}, 10 );
		//keyPressed = false;
		//console.log(e.keyCode);
	}
}
$("#evaluationsCompetences .table").addEventListener("keydown",evaluerCompetencesClavier,false);
var evaluerCompetencesTouche = function(keyCode){
	return evaluerCompetencesClavier({target:$("#evaluationsCompetences_input"), keyCode:keyCode});
}
//document.body.classList.add("demo");
//window.addEventListener('load',function(){$('[eid="5e4.20160707.Interro7"] button').click();},false);
var evaluerAleatoirement = function(moyenne, ecartEntreEleves){
	var table = $("#evaluationsCompetences_bloctableau .table"), tr, td;
	var evalid = table.getAttribute("evalid"), b=parseInt(table.getAttribute("bareme"));
	var eleves = table.$$(".tbody .tr"), competences = table.$$(".thead [cid]"), eleve, eid, cid;
	var nbLignes = eleves.length, nbColonnes = competences.length;
	if(!moyenne)moyenne = 11.5;
	if(!ecartEntreEleves)ecartEntreEleves=15;
	ecartEntreEleves = Math.exp(ecartEntreEleves/6);
	moyenne=moyenne/20*(b-1);
	var instabiliteEleve = 1, moyenneEleve = 0, r;
	for(var i=0;i<nbLignes;i++){
		tr = eleves[i];
		eleve = Eleves[tr.getAttribute("eid")];
		evaluation = eleve.json.evaluations[evalid];
		r = rand();
		//Simule une moyenne différente par élève suivant qu'il soit bon ou mauvais.
		//moyenneEleve = moyenne + (rand()<0.5?1:-1)*moyenne*Math.exp(-(r-moyenne)*(r-moyenne))*1.2;
		moyenneEleve = moyenne + moyenne*(Math.atan(ecartEntreEleves*(r-0.5))/Math.PI);
		//Certains élèves sont très constants d'autres très instables.
		instabiliteEleve = (b-1)/2*Math.exp(-(moyenneEleve-(b-1)/2)*(moyenneEleve-(b-1)/2));
		//instabiliteEleve = rand(moyenne)+0.4;
		for(var j=0;j<nbColonnes;j++){
			cid = competences[j].getAttribute("cid");
			td = tr.$("[j='"+j+"']");
			//valeur = entier(0,b-1);
			valeur = Math.max(0,Math.min(Math.round(moyenneEleve+rrand(instabiliteEleve)),b-1));
			if(valeur==b)
				valeur="ne";
			td.setAttribute("c",valeur);
			span = td.$("span");
			span.style.backgroundColor = couleurs[baremes[b][valeur]];
			span.textContent = baremes[b][valeur];
			evaluation[cid]=valeur;
		}
	}
	updateSommeCompetences();
	updateColonneCompetence();
	localStorage.setObj("Eleves",Eleves);
}
var evaluationsCompetences_mobile_actions_interval, evaluationsCompetences_mobile_actions_timeout;
var evaluationsCompetences_mobile_actions_function = function(e){
	e.preventDefault();
	e.stopPropagation();
	if(e.target.hasAttribute&&e.target.hasAttribute("value")){
		clearInterval(evaluationsCompetences_mobile_actions_interval);
		clearTimeout(evaluationsCompetences_mobile_actions_timeout);
		var value = parseInt(e.target.getAttribute("value"))+48;
		evaluerCompetencesTouche(value);
		evaluationsCompetences_mobile_actions_timeout = window.setTimeout(function(){
			evaluationsCompetences_mobile_actions_interval = window.setInterval(function(){
				evaluerCompetencesTouche(value);
			},301);
			clearTimeout(evaluationsCompetences_mobile_actions_timeout);
			evaluationsCompetences_mobile_actions_timeout = window.setTimeout(function(){
				clearInterval(evaluationsCompetences_mobile_actions_interval);
				evaluationsCompetences_mobile_actions_interval = window.setInterval(function(){
					evaluerCompetencesTouche(value);
				},100);
			},1600);
		},700);
	}
	return false;
}
$("#evaluationsCompetences_mobile_actions").addEventListener("mousedown",evaluationsCompetences_mobile_actions_function,false);
$("#evaluationsCompetences_mobile_actions").addEventListener("touchstart",evaluationsCompetences_mobile_actions_function,false);
document.body.addEventListener("mouseup",function(e){
	clearInterval(evaluationsCompetences_mobile_actions_interval);
	clearTimeout(evaluationsCompetences_mobile_actions_timeout);
},false);
document.body.addEventListener("touchend",function(e){
	clearInterval(evaluationsCompetences_mobile_actions_interval);
	clearTimeout(evaluationsCompetences_mobile_actions_timeout);
},false);
var imprimerTableau = function(){
	/*var prog_window = window.open();
	prog_window.document.write("<html><body><div id='table'></div></body></html>");
	prog_window.getElementById('table').innerHTML = document.getElementById('evaluationsCompetences_bloctableau').innerHTML;*/
	var popup = window.open("", "", "width=640,height=480,resizeable,scrollbars"),
	  table = this.parentContains(".evaluationsCompetences").$(".evaluationsCompetences_bloctableau")||document.getElementById("evaluationsCompetences_bloctableau");
	popup.document.write('<link rel="stylesheet" href="css/competences.css" type="text/css"/><body printWindow class="evaluationPleinEcran" >'+table.outerHTML+'</body>');
	popup.document.close();
	if (window.focus)
		popup.focus();
	if (window.print)
		popup.addEventListener("load",function(){window.setTimeout(print.bind(this),500);},false);
}
$("#evaluationsCompetences_print").addEventListener("click",imprimerTableau,false);
$("#bilanEleve_print").addEventListener("click",imprimerTableau,false);
var updateSommeCompetences = function(ligne){
	var trs, cols;
	if(ligne&&ligne.classList&&ligne.classList.contains("tr")){
		trs = [];
		trs.push(ligne);
	}
	else{
		trs=$$("#evaluationsCompetences_bloctableau .tbody .tr");
	}
		//console.log(ligne);
		//console.log(trs);
	var table = $("#evaluationsCompetences .table");
	var baremeMax = parseInt(table.getAttribute("bareme"));
	var tr, tds, resultat, note, nombreDeNotes, somme, p, denom, attribute;
	for(var r=0;r<trs.length;r++){
		nombreDeNotes=0;
		tr = trs[r];
		tds = tr.$$("[c]");
		resultat = tr.$(".pourcentageDeReussite span");
		note = tr.$(".noteDeReussite span");
		if(tds.length){
			somme=0;
			for(var i=0;i<tds.length;i++){
				if(isNumeric(tds[i].getAttribute("c"))){
					somme+=parseInt(tds[i].getAttribute("c")||0);
					nombreDeNotes++;
				}
			}
		}
		if(nombreDeNotes){
			p = somme/nombreDeNotes*100/(baremeMax-1);
			denom = $(".denomDeNoteDeReussite input").value||nombreDeNotes;
			resultat.textContent = Math.round(p) + "%";
			note.textContent = (Math.round(p*denom/10)/10) + "/"+denom;
			//resultat.style.width = (somme/tds.length*50)+"%";
			if(isNaN(p)){
				attribute = "ne";
			}
			else if(p<=25){
				attribute = 0;
			}
			else if(p<=50){
				attribute = 1;
			}
			else if(p<=75){
				attribute = 2;
			}
			else{
				attribute = 3;
			}
		}
		else {
			resultat.textContent = "";
			note.textContent = "";
			attribute = "ne";
		}
		resultat.parentContains(".tr").setAttribute("cc",attribute);
		//note.parentContains(".td").setAttribute("cc",attribute);
	}
	updateMoyennes();
	return false;
}
var updateColonneCompetence = function(td){
	var cids = [];
	var table = $("#evaluationsCompetences_bloctableau .table");
	if(td&&td.classList&&td.classList.contains("td")){
		cids.push(td.getAttribute("cid"));
	}
	else{
		var thcids = table.$$(".th[cid]");
		for(var t=0;t<thcids.length;t++){
			cids.push(thcids[t].getAttribute("cid"));
		}
	}
	var table = $("#evaluationsCompetences .table");
	var baremeMax = parseInt(table.getAttribute("bareme"));
	var tds, td, resultat, note, nombreDeNotes, somme, p, denom, attribute;
	for(var r=0;r<cids.length;r++){
		nombreDeNotes=0;
		tds = table.$$(".td[cid='"+cids[r]+"'][c]");
		resultat = table.$(".th[cid='"+cids[r]+"'] span.bilanParCompetence");
		if(tds.length){
			somme=0;
			for(var i=0;i<tds.length;i++){
				td = tds[i];
				if(isNumeric(td.getAttribute("c"))){
					nombreDeNotes++;
					somme+=parseInt(td.getAttribute("c"));
				}
			}
		}
		if(nombreDeNotes){
			p = somme/nombreDeNotes*100/(baremeMax-1);
			resultat.textContent = Math.round(p) + "%";
			if(isNaN(p)){
				attribute = "ne";
			}
			else if(p<=25){
				attribute = 0;
			}
			else if(p<=50){
				attribute = 1;
			}
			else if(p<=75){
				attribute = 2;
			}
			else{
				attribute = 3;
			}
		}
		else {
			resultat.textContent = "";
			attribute = "ne";
		}
		resultat.parentContains(".th").setAttribute("cc",attribute);
	}
	return false;
}
var updateMoyennes = function(){
	var table = $("#evaluationsCompetences_bloctableau .table");
	var pcs = table.$$(".td.pourcentageDeReussite"), s, n=0, somme=0, attribute;
	for(var i=0;i<pcs.length;i++){
		s = parseInt(pcs[i].textContent);
		if(isNumeric(s)){
			somme+=s;
			n++;
		}
	}
	var resultat = table.$(".th.pourcentageDeReussite span.moyenne");
	var note = table.$(".th.denomDeNoteDeReussite span.moyenne");
	if(n){
		p = somme/n;
		denom = table.$(".th.denomDeNoteDeReussite input").value||20;
		resultat.textContent = Math.round(p) + "%";
		note.textContent = (Math.round(p*denom/10)/10) + "/"+denom;
		if(isNaN(p)){
			attribute = "ne";
		}
		else if(p<=25){
			attribute = 0;
		}
		else if(p<=50){
			attribute = 1;
		}
		else if(p<=75){
			attribute = 2;
		}
		else{
			attribute = 3;
		}
	}
	else {
		resultat.textContent = "";
		note.textContent = "";
		attribute="ne";
	}
	//resultat.parentContains(".th").setAttribute("cc",attribute);
	//note.parentContains(".th").setAttribute("cc",attribute);
}


var posePreferences = function(){
	return true;
}
$("#parametres_menu").addEventListener("click",function(e){
	if(e.target.tagName=="LI"){
		var li = e.target, liSel = $("#parametres_menu .selection"), sel = $("#parametres_panneau .selection");
		if(liSel)liSel.classList.remove("selection");
		li.classList.add("selection");
		if(sel)$("#parametres_panneau .selection").classList.remove("selection");
		if(sel!=li)$("#parametres_panneau div[section='"+li.getAttribute("section")+"']").classList.add("selection");
	}
},false);
$("#parametres_baremeMax").addEventListener("change",function(){
	Parametres["baremeMax"] = this.value;
	localStorage.setObj("Parametres",Parametres);
},false);
$("#parametres_baremePerso").addEventListener("keyup",function(){
	var trs = $$("#parametres_baremePerso tr"), bp = {};
	var niveaux = trs[0].cells, valeurs = trs[1].cells;
	for(var i=1;i<niveaux.length;i++){
		if(niveaux[i].$("input").value.length&&valeurs[i].$("input").value.length){
			bp[valeurs[i].$("input").value] = niveaux[i].$("input").value;
		}
	}
	Parametres["baremes"][0] = bp;
	localStorage.setObj("Parametres",Parametres);
},false);
$("#parametres_nomEtablissement input").addEventListener("change",function(){
	Parametres["etablissement"] = this.value;
	localStorage.setObj("Parametres",Parametres);
},false);
$("#parametres_bilanEleveParEvaluation").addEventListener("click",function(){
	Parametres["bilanEleveParEvaluation"]=$("#parametres_bilanEleveParEvaluation").checked;
	localStorage.setObj("Parametres",Parametres);
},false);
$("#parametres_couleursDesNotes").addEventListener("click",function(){
	Parametres["couleursDesNotes"]=$("#parametres_couleursDesNotes").checked=document.body.classList.toggle("couleursDesNotes");
	localStorage.setObj("Parametres",Parametres);
},false);
var recuperePreferences = function(){
	$("#parametres_nomEtablissement input").value = Parametres["etablissement"];
	$("#parametres_baremeMax").value = Parametres["baremeMax"];
	$("#parametres_bilanEleveParEvaluation").checked = Parametres["bilanEleveParEvaluation"];
	$("#parametres_couleursDesNotes").checked = Parametres["couleursDesNotes"];
	return true;
}
recuperePreferences();

var lancerUneDemo = function(){
	if(localStorage.length!=0){
		if(confirm("Pour lancer la démo, il est préférable de partir d'une base vide. Voulez-vous effacer les données ?") ){
			localStorage.clear();
		}
		else if(!confirm("Voulez-vous tout de même lancer la démo ?"))
			return false;
	}
	var data,temp;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			//console.log(xhr.responseText);
			data = JSON.parse(xhr.responseText);
			//console.log(data);
			temp=data.Eleves;
			if(temp)
				for(var e in temp)
					new Eleve(temp[e].json);
			temp=data.Competences;
			if(temp)
				for(var e in temp)
					new Competence(temp[e].json);
			temp=data.Evaluations;
			if(temp)
				for(var e in temp)
					new Evaluation(temp[e].json);
			temp=data.Parametres;
			if(temp)
				new Parametre(temp);
			updateListeEleves();
			updateListeCompetences();
			updateListeEvaluations();
			recuperePreferences();
			//console.log("Fin du téléchargement");
		}
	}
	xhr.open("GET", "./json/demo.json", true);
	xhr.send(null);
	document.body.classList.add("demo");
}

var boutonsFermer = $$("[fermer]");
for(var i=0;i<boutonsFermer.length;i++){
	boutonsFermer[i].addEventListener("click",fermerMenu,false);
}
var boutonsOuvrir = $$("[ouvrir]");
for(var i=0;i<boutonsOuvrir.length;i++){
	boutonsOuvrir[i].addEventListener("click",ouvrirMenu,false);
}
var boutonsMontrer = $$("[montrer]");
for(var i=0;i<boutonsMontrer.length;i++){
	boutonsMontrer[i].addEventListener("click",montrerMenu,false);
}
var boutonsEffacer = $$("[effacer]");
for(var i=0;i<boutonsEffacer.length;i++){
	boutonsEffacer[i].addEventListener("click",effacerMenu,false);
}
var boutonsInformation = $$("[information]");
for(var i=0;i<boutonsInformation.length;i++){
	boutonsInformation[i].addEventListener("click",function(){
		var info={};
		info.info = this.getAttribute("information");
		info.time = Math.floor(1000*parseFloat(this.getAttribute("duree")||5));
		information(info);
	},false);
}
var boutonsEntree = $$("input[entree]");
for(var i=0;i<boutonsEntree.length;i++){
	boutonsEntree[i].addEventListener("keyup",function(e){
		if(e.keyCode==13)
			$(this.getAttribute("entree")).click();
	},false);
}

var closePopups = function(evt){
	if(evt.target.classList.contains("visible")){
		evt.target.classList.remove("visible");
		if(this.$("video")){
			var videos = this.$$("video");
			for(var i=0;i<videos.length;i++){
				videos[i].pause();
			}
		}
		return true;
	}
	else{
		evt.stopPropagation();
	}
	return true;
}
var popups = $$("[popup]");
for(var i=0;i<popups.length;i++){
	popups[i].addEventListener("click",closePopups,false);
}
var infoTimeout = null;
var information = function(s){
	if(s["error"])
		alert(s["error"]);
	else if(s["info"]){
		clearTimeout(infoTimeout);
		var popup = $("#popupInfo");
		var div = popup.$("div#popupInfo_content");
		div.innerHTML = s["info"];
		popup.classList.add("visible");
		infoTimeout = window.setTimeout(function(){
			popup.classList.remove("visible");
		},s["time"]||3000);
	}
}
var signUp = function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			//console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if(data["info"]||data["error"]){
				data["time"] = 1000;
				information(data);
			}
		}
	}
	var signupForm = $("#senregistrer");
	var parametres = "email="+encodeURIComponent(signupForm.$("[name='email']").value)+"&password="+encodeURIComponent(signupForm.$("[name='password']").value)+"&password0="+encodeURIComponent(signupForm.$("[name='password0']").value)+"&etablissement="+encodeURIComponent(signupForm.$("[name='etablissement']").value);
	//console.log(parametres);
	xhr.open("POST", "../php/competences.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
}
$("#senregistrer_bouton").addEventListener("click",signUp,false);
$("#senregistrer").addEventListener("keyup",function(e){
	if(e.keyCode==13)signUp();
},false);
var logIn = function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			var data = JSON.parse(xhr.responseText);
			if(data["info"]||data["error"]){
				data["time"] = 1000;
				information(data);
			}
			if(data["info"]){
				document.body.classList.add("loggedIn");
				$("#monEmail").textContent = decodeURIComponent(getCookie("email"));
				$("#parametres_monEmail").textContent = decodeURIComponent(getCookie("email"));
				telechargerCompetences(false);
			}
		}
	}
	var signupForm = $("#seconnecter");
	var parametres = "email="+encodeURIComponent(signupForm.$("[name='email']").value)+"&password="+encodeURIComponent(signupForm.$("[name='password']").value);
	xhr.open("POST", "../php/competences.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
}
logIn();
$("#seconnecter_bouton").addEventListener("click",logIn,false);
$("#seconnecter").addEventListener("keyup",function(e){
	if(e.keyCode==13)logIn();
},false);
var logOut = function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			document.body.classList.remove("loggedIn");
			var data = JSON.parse(xhr.responseText);
			if(data["info"]||data["error"]){
				information(data);
			}
			if(data["info"]){
				$("#monEmail").textContent = "";
				$("#parametres_monEmail").textContent = "";
				if(confirm("Voulez-vous supprimer les données sauvegardées sur l'ordinateur ?"))
					effacerDonneesLocales();
			}
		}
	}
	xhr.open("POST", "../php/competences.php?logout=1", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
}
$("#sedeconnecter_bouton").addEventListener("click",logOut,false);
var telechargerCompetences = function(evt){
	var xhr = new XMLHttpRequest();
	var e = evt;
	xhr.onreadystatechange = function(){ return (function(e) {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			var texte = xhr.responseText.replace(/\&amp;quot;/ig,'"');
			var d = JSON.parse(texte);
			//console.log(d);
			if(d["info"]||d["error"]){
				information(d);
			}
			else if(d["data"]){
				var data = d["data"], lastmtime = getMTime();
				//console.log(data["lastmtime"]);
				if( e && ( (e.type && e.type=="click") || e == "écraser" ) ){
					var donneesAImporter=$("#donneesAImporter"), temp;
					var boolEcraserLesDonnees = (e=="écraser");
					donneesAImporter.classList.add("visible");
					TMP["tmpData"] = data;
					var labels = donneesAImporter.$$("label");
					var donnees = ["Eleves","Competences","Evaluations","Parametres"], ddonnees={};
					var nombre = 0, dernier=null;
					//Création de la liste pour choisir les données à importer.
					for(var i=0;i<donnees.length;i++){
						if(data[donnees[i]]){
							labels[i].style.visibility = "visible";
							nombre++;
							dernier=i;
							ddonnees[i] = donnees[i];
						}
						else {
							labels[i].style.visibility = "hidden";
						}
					}
					if(nombre<=1){
						donneesAImporter.classList.remove("visible");
						if(nombre==1){
							var constructor, constructors, update;
							for(var d in ddonnees){
								//Contient Eleves ou Competences ou Evaluations ou Parametres
								temp=data[ddonnees[d]];
								if(temp){
									constructor = [Eleve, Competence, Evaluation, Parametre][d];
									constructors = [Eleves, Competences, Evaluations, Parametres][d];
									update = [updateListeEleves, updateListeCompetences, updateListeEvaluations, recuperePreferences][d];
									if(boolEcraserLesDonnees)
										for(var i in constructors)
											delete constructors[i];
									if(d==3)
										Parametre(temp);
									else
										for(var e in temp)
											new constructor(temp[e].json);
									update();
									console.log(ddonnees[d]+" chargés.");
								}
							}
						}
					}
				}
				else {
					var donneesAImporter=$$("#donneesAImporter [choix]");
					for(var d=0;d<donneesAImporter.length;d++)
						donneesAImporter[d].checked = true;
					TMP["tmpData"] = data;
					console.log("Tout est chargé.");
					charger();
				}
			}
		}
	})(e);}
	console.log("Tentative de charge.");
	var parametres = "telecharge";
	xhr.open("GET", "../php/competences.php?telecharge=1", true);
	//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
}
$("img[src='../ico/cloud-download.svg']").addEventListener("click",telechargerCompetences,false);
var envoyerCompetences = function(originalData){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			//console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if(data["info"]||data["error"]){
				data["time"] = 1000;
				information(data);
			}
		}
	}
	var now = Date.now();
	if(originalData=="effacer"){
		var data = "{}";
	}
	else {
		var complement = mergeObjects({lastmtime:0},originalData);
		var localData = {Eleves:Eleves,Competences:Competences,Evaluations:Evaluations,Parametres:Parametres,lastmtime:now};
		var data = JSON.stringify(mergeObjects(complement,localData));
	}
	var parametres = "televerse="+encodeURIComponent(data);
	xhr.open("POST", "../php/competences.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(parametres);
}
var synchroniserCompetences = function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			var texte = xhr.responseText.replace(/\&amp;quot;/ig,'"');
			var d = JSON.parse(texte);
			//console.log(d);
			if(d["info"]||d["error"]){
				information(d);
			}
			else if(d["data"]){
				var data = d["data"], lastmtime = getMTime();
				/*if(!data["lastmtime"]||data["lastmtime"] < lastmtime){
					envoyerCompetences(data);
				}*/
				envoyerCompetences(data);
			}
		}
	}
	var parametres = "telecharge";
	xhr.open("GET", "../php/competences.php?telecharge=1", true);
	//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(null);
}
var effacerDonneesLocales = function(){
	sessionStorage.clear();
	localStorage.clear();
	Eleves={};
	Competences={};
	Evaluations={};
	Preferences={};
	updateListeEleves();
	updateListeCompetences();
	updateListeEvaluations();
	recuperePreferences();
	document.body.classList.remove("demo");
}
var effacerDonneesDistantes = function(){
	envoyerCompetences("effacer");
}
//$("#telechargerCompetences").addEventListener("click",telechargerCompetences,false);
//$("#synchroniserCompetences").addEventListener("click",synchroniserCompetences,false);

cleanAll();
