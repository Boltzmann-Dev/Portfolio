

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

8.2)	RESPONSIVES FORMS

->	flex
	.flex-container {
      	display: flex;
    	}
	.second {
      	flex: 0.5;
    	}

->	Media query 
	
	@media (max-width: 600px) {		//Media query
	
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
	
->   	grid	

	.grid-container {
      	display: grid;
      	grid-template-columns: 1fr 1fr | auto 400px minmax(200px,500px);
	
      	grid-template-rows: 200px 200px; | repeat(2, 200px)
      	gap: 30px;
    	}
	.first {
      	grid-column: span 2;
    	}

-> 	Bootstrap

	<div class="container">
    		<div class="row">
      			<div class="card col-6">
        			Card
      			</div>
      			<div class="card col-2">
        			Card
      			</div>
      			<div class="card col-4">
        			Card
      			</div>
    		</div>
  	</div>




9) 	FLEX

	flex-direction: row | column | row-reverse | column-reverse

	.flex-container{
     	height: 50vh;
   	display: flex;
 	flex-direction: row;
	
	wrap			con wrap el align-content es el nuevo align-items
	
    	flex-wrap: wrap; | nowrap | wrap-reverse
    	justify-content: center;
     	align-content:space-around | space-betweeb | end | star | center
    	align-items:center;
	gap: 10px;  2rem for 3 items     
        }

	
	SIZE FLEX

	content width< width < flex-basis < min|max-width 

	flex-grow: 1; | 0; 	crecer
	flex-shrink: 1; 0;	encogerse
	flex-basis: 0;		auto basis

	flex: 1 1 0; 		grow:1 shrink:1 basis:auto 
	flex: 1; | 2; | 1.5;	same, activa grow es la diferencia y se ignora basis


	
	 grid	

	.grid-container {
      	display: grid;
      	grid-template-columns: 1fr 1fr | auto 400px minmax(200px,500px);
	
      	grid-template-rows: 200px 200px; | repeat(2, 200px)
      	gap: 30px;
    	}
	.items {
      	grid-column: span 2;	
	grid-column-start:3;
	grid-column-end:2;
	grid-column:4/6
    	}



