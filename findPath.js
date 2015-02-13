var places = {
	"mum" : ["kol","chn","blr","hyd","nd"],
	"blr" : ["mum","chn","hyd"],
	"chn" : ["mum","kol","blr"],
	"hyd" : ["mum","kol","blr"],
	"kol" : ["mum","chn","hyd","nd"],
	"nd" : ["mum","kol"]
};

var findPath = function(src,des,path){
	path.push(src);
	if(places[src].indexOf(des) > -1 ){
		path.push(des);
		return path.toString();
	}
	return findPath(places[src][0],des,path);
};
var path = new Array();
console.log(findPath(process.argv[2],process.argv[3],path));