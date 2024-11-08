"use strict";
{
    const CalculateArea = (demoShape) => {
        if (demoShape.shape == 'circle') {
            return parseFloat((Math.PI * demoShape.radius * demoShape.radius).toFixed(2));
        }
        else if (demoShape.shape == 'rectangle') {
            return parseFloat((demoShape.height * demoShape.width).toFixed(2));
        }
        else
            return 0;
    };
    const circle = { shape: 'circle', radius: 5 };
    console.log(CalculateArea(circle));
    const rectangle = { shape: 'rectangle', width: 4, height: 6 };
    console.log(CalculateArea(rectangle));
    //
}
