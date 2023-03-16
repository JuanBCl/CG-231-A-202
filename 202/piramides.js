/**
 * Geometria: Construye una geometria THREEJS y la retorna
 * ENTRADAS: vx = Arreglo de vertices para la geometria (arreglo de arreglos)
 * SALIDA: geom = Geometria generada a partir de vx
 * @param {*} vx
 * @returns
 */
function Geometria(vx){
    geom = new THREE.Geometry(vx);
        return geom;
    }

