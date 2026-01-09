

CSS

5.1) 	in line 	<p style: color "red" >lorem</p
   	internal	<style> p{} </style>
	external	<link rel="stylesheet" href="style.css">


5.3)	p{			De Elemento
  	color: red;
	}

	.note{			De clase
  	font-size: 20px;
	}

	#id-selector-demo{	De id
  	color: green;
	}

	li[value="4"]{		Atributo
  	color: blue;
	}

	*{			Todo
  	text-align: center;
	}

/*carpetas de agragar color usando lo anterior*/

6.1)	rem  -> tamaño relativo de la raiz o body
	em   -> tamaño de la m
	
	background-color: cornflowerblue;
      	color: white;
	font-size: 2rem;
	font-family: "caveat",sans-serif;
      	font-weight: 400;	
	text-align: right;
	text-transform: uppercase;


6.3)	margin 0px 0px 0px 0px;	reloj
	       20px 20px; 	extremos
 	       10px 		todo


	margin	->	border	->	padding	->   width/heigth

	border-top: 20px solid black;
      	border-bottom: 20px solid black;
      	border-left: 10px solid black;
      	border-right: 10px solid black;


7.1) 	h1,h2{			aplicar a ambos
	}

	.box > p{		solo hijo
	}

	.box li{		cualquier heredero
	}

	li.done{		Especificar elemento+clase
	}

	ul p.done{		Heredero especificado con elemento+clase
	}

7.2)	position: relative; absolute; static; fixed;
      	top: 200px;
      	left: 200px;

	border-radius: 50%; 	circle


7.3)	body > div > div {
      	width: 200px;
    	}



8.0)	display: block;   inline;  inline-block


8.1)	float: left;
	float: right;
	clear: both; right; left;

8.3)  	@media (max-width: 600px) {		//Media query
	
	/* CSS for screens below or equal to 600px wide */
      		div {
        		height: 200px;
        		width: 200px;
      		}
    	}	

	@media (min-width: 219px) and (max-width: 480px) {
      		body {
        		background-color: lightsalmon;
      		}
    	}


		
