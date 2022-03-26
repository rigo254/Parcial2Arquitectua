interface xml{
    enviar():void;
}

class xmlproveedor implements xml{
    public enviar(): void {
        console.log("precio accion");
        console.log("nombre accion");
    }
}

class jsonproveedor{
    public enviarJson(): void {
        console.log("precio accion");
        console.log("nombre accion");
    }
}

class jsonproveedorAdapter implements xml{
    constructor(
        private xmlproveedor: jsonproveedor
        ){}
    public enviar(): void {
        this.xmlproveedor.enviarJson();
    }
}

function enviarXml(Xml: xml){
    Xml.enviar();
}

const Xml = new jsonproveedorAdapter(new jsonproveedor);

enviarXml(Xml);