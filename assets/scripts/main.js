container = document.getElementById("main");

    const text = new Blotter.Text("Liquid", {
        family: "serif",
        size: 180,
        fill: "#fff",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        paddingBottom: 80
    });

    let material = new Blotter.LiquidDistortMaterial();

    material.uniforms.uSpeed.value = 0.3;
    material.uniforms.uVolatility.value = 0.1;
    material.uniforms.uSeed.value = 0.1;

    let blotter = new Blotter(material, {
        texts: text
    });

    let scope = blotter.forText(text);

    scope.appendTo(container);