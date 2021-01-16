const AnimationLoop = require('./animationloop');


module.exports = class Game extends PIXI.utils.EventEmitter {
    constructor( root_containter = document.body ){
        //inicialize event emiter
        super();
        this.root_containter = root_containter;
        this.stage = new PIXI.Container();
        this.app = new PIXI.Application({ 
            width: window.innerWidth, 
            height: window.innerHeight,                       
            antialias: true, 
            transparent: false, 
            resolution: 1
        });
        //create a new AnimationLoop class, that will manage the render loop functions
        this.animationLoop = new AnimationLoop(this.app.renderer,this.stage);
        //insert the pixi view element in the document.body
		this.root_containter.appendChild( this.app.renderer.view );
        //start loop
        this.animationLoop.start();
    }
    //***TODA LA LOGICA EN ESTA CLASE - TODO PRIVADO
}