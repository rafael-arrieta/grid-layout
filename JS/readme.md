1 - Usa Grid templates areas para determinar las áreas donde se van a posicionar los elementos HTML,
    se lo implementa en JS con element.style.gridTemplateAreas y se le asigna el String de las posiciones
    en las que se debería ubicar el elemento, mientras que en style.css a cada elemento a posicionar se le 
    asigna el grid area correspondiente

2 - la imagen se coloca con la propiedad 'background-image: url()' en CSS, tiene un ancho y alto 
    fijos en px y no se dimensiona ni se ajusta al cambiar la resolucion del elemento contenedor, sinó 
    que se recorta, otra opción de recorte es dar la posición centrada en CSS y se recortaria en otro formato.

3 - Se implementa la función getBoundingClientRect(), la cual se abtrae en una función aparte para obtener la 
    escalabilidad de la cantidad de elementosHTML que requieran mostrar el tamaño.

https://github.com/rafael-arrieta/grid-layout.git