do {
    var etages =prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if (etages == 0) {
        alert("Le nombre d'etages ne peut pas être nul");
    }  else if (isNaN(etages)) {
        alert("La valeur d'entree doit être numerique");
    }
} while ( etages == 0 || isNaN(etages))
etages = Math.abs(etages);
var y = etages-1;
var pyramide ='';
	for(i=1;i<=(etages*2)-1;i++){
		if (i%2==!0) {
			for(k=0;k<y;k++){
				pyramide = pyramide+' ';
			}
			for(j=1;j<=i;j++){
				pyramide = pyramide+"#";
			}
			pyramide = pyramide+"\n";
			y--;
		}
	}
	console.log(etages);
	console.log('Voila votre pyramide de '+Math.trunc(etages)+" etages:")
	console.log(pyramide);