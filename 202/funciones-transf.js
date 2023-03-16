/**
 * Traslacion: Construye la matriz de traslacion THREEJS para el vector vt y la retorna
 * ENTRADA: vt = Vector de traslacion (es un arreglo de enteros) 
 * SALIDA: MatrizT = Matriz de traslacion para el vector vt
 */
function Traslacion(vt){
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    
    //Piramide.applyMatrix(matrizT);
    return matrizT;
}

/**
 * Escalado: Aplica el vector de escalado vs al objeto figura
 * ENTRADA:  figura = Objeto tipo THREE.Line que representa el objeto grafico
 *           posini = Posicion inicial de fig (array de enteros)
 *           vs = Vector de escalado (es un arreglo de enteros) 
 * SALIDA:  = 
 */
function escaladoReal(figura , posini, vs){
    tr = [(-posini[0], -posini[1], -posini[2])]; //Vector para llevar al origen
    figura.applyMatrix(Traslacion(tr));
    figura.applyMatrix(Escalado(vs));
    tr2 = [(posini[0], posini[1], posini[2])];
    figura.applyMatrix(Traslacion(tr2)); //otra forma: figura.applyMatrix(Traslacion(posini));
}

/**
 * Escalado: Construye la matriz de escalado THREEJS para el vector vs y la retorna
 * ENTRADA: vs = Vector de escalado (es un arreglo de enteros) 
 * SALIDA: MatrizS = Matriz de escalado para el vector vs
 */
function Escalado(vs){
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);

            //Piramide.applyMatrix(matrizS);
    return matrizS
}

/**
 * Rotacion: Construye la matriz de rotacion THREEJS para el vector vr y la retorna
 * ENTRADA: vr = Vector de rotacion (es un arreglo de enteros) 
 * SALIDA: MatrizR = Matriz de escalado para el vector vr
 */
function rotacionReal(figura, pi=3.1416, vr){
        vr=0;
        figura.applyMatrix(Rotacion(vr));
}

/**
 * Rotacion: Construye la matriz de rotacion THREEJS para el vector vr y la retorna
 * ENTRADA: vr = Vector de rotacion (es un arreglo de enteros) 
 * SALIDA: MatrizR = Matriz de escalado para el vector vr
 */
function Rotacion(eje, vr){
    var matrizR = new THREE.Matrix4();
    var vr = 0;
	var cs = Math.cos(vr);
	var ss = Math.sin(vr);

    if (eje==x) {
        matrizR.set(1, 0, 0, 0,
                    0, cs, -ss, 0, 
                    0, ss, cs, 0,
                    0, 0, 0, 1);
    }if (eje==y) {
        matrizR.set(cs, 0, ss, 0,
                    0, 1, 0, 0, 
                    -ss, 0, cs, 0,
                    0, 0, 0, 1);
    } else {
        if (eje==z) {
            matrizR.set(cs, -ss, 0, 0,
                        ss, cs, 0, 0, 
                        0, 0, 1, 0,
                        0, 0, 0, 1);
        }
    }
        //Piramide.applyMatrix(matrizR);
    return matrizR
}
