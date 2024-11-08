{
    //
    type Circle={
        shape:'circle';
        radius:number;
    }

    type Rectangle={
        shape:'rectangle';
        width:number;
        height:number;
    }
    type Shape = Circle | Rectangle;

    const CalculateArea=(demoShape:Shape):number=>{
        if(demoShape.shape=='circle'){
            return parseFloat((Math.PI*demoShape.radius*demoShape.radius).toFixed(2)) ;
        }
        else if(demoShape.shape=='rectangle'){
            return parseFloat((demoShape.height*demoShape.width).toFixed(2));
        }
        else
          return 0;
    }
    const circle: Circle = { shape: 'circle', radius: 5 };
    console.log(CalculateArea(circle));

    const rectangle:Rectangle={shape:'rectangle',width:4,height:6}
    console.log(CalculateArea(rectangle));
    //
}