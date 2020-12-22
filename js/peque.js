class Peque {
    getTemplate(name) {
        return document.getElementById("tpl-" + name).innerHTML.trim();
    }
    parseTemplate(name, data) {
        let parsedTemplate = _.template(this.getTemplate(name))(data);
        let div = document.createElement('div');
        div.innerHTML = parsedTemplate;
        
        return div.firstChild; 
    }
    
    rgbToHex(rgb) {
        let tmp = rgb.replace("rgb(", "").replace(")", "").replace(";", "").split(", ");
        return "#" + ((1 << 24) + (parseInt(tmp[0]) << 16) + (parseInt(tmp[1]) << 8) + parseInt(tmp[2])).toString(16).slice(1);
    }
}