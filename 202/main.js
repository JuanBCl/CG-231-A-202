function init() {

    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 40;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
		
    //Cámara
    camera.position.x = 000;
    camera.position.y = 100;
    camera.position.z = 400;
    camera.lookAt(scene.position);

    //Creación de las Figuras
    //Geometria de la piramide
    lado=30; //lado de la base de la piramide
    h=45; //altura de la piramide
    [v1, v2, v3, v4, v5] = [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
    var vertices = [v1, v2, v3, v4, v5];
    geoPiramide = Geometria(vertices);

    //Colores
    color=[{color:0xFF0000},{color:0xFF00ff}];

    //Material para las pirámides
    material=[];
    for(i=0; 1<2;i++){
        material.push(new THREE.ParticleBasicMaterial(color[i]));
    }

    //Figuras para las pirámides
    Piramide=[];
    for(i=0; 1<2;i++){
        Piramide.push(new THREE.Line(geomPiramide,material[i]));
    }

    Piramide.Traslacion([lado*2,lado*2,0]);
    Piramide.Escalado([1.5,1.5,1.5]);
    Piramide.escaladoReal(Piramide,[0,0,0],[1.5,1.5,1.5]);
    Piramide.Rotacion(x,45);
    Piramide.Rotacion(y,45);
    Piramide.Rotacion(z,60);

    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);
	scene.add(arrowY);
	scene.add(arrowZ);
    for(i=0; i<2; i++){
        scene.add(Piramide[i]);
    }
    
    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;