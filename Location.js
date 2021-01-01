export class LocationFind{
    
    constructor(name){
        this._name = name;
        this._mUrl = `http://open.mapquestapi.com/geocoding/v1/address?key=zGxzl0uE9P0bAMCKd3su8AjJi8r0gtYR&location=${this._name}&thumbMaps=true`;
        this.findImage();
    }
  
    
    getImage(){
        return `http://open.mapquestapi.com/geocoding/v1/address?key=zGxzl0uE9P0bAMCKd3su8AjJi8r0gtYR&location=${this._name}&thumbMaps=true`;
    }
    
    findImage() {
        fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=zGxzl0uE9P0bAMCKd3su8AjJi8r0gtYR&location=${this._name}&thumbMaps=true`)
        .then(result=>{
            if (result != null){
                console.log("Success, Nice!")
            
            }
            else{
                console.log("Failed");
            }
            return result.json();
    })
    .then(res=>{
        console.log(res);
            this._mUrl= res['results'][0].locations[0].mapUrl;
            console.log(this._mUrl);
            let nodeType = document.createElement("h3");
            let factsInfo = document.createTextNode(this._name);
            let imagePlace = document.createElement("img");
            const facts = document.querySelectorAll("div")[0];
            imagePlace.setAttribute('src',this._mUrl);
            nodeType.appendChild(factsInfo);
            //console.log(adminArea);
            facts.appendChild(nodeType);
            facts.appendChild(imagePlace);
            return this._mUrl;
    });
    console.log(this._mUrl)
    return this._mUrl;
    }
    
    static getDistanceBetween(locationOne,locationTwo){
        let distance;
        let facts = document.querySelectorAll('div')[0];
        fetch(`http://www.mapquestapi.com/directions/v2/route?key=zGxzl0uE9P0bAMCKd3su8AjJi8r0gtYR&from=${locationOne}&to=${locationTwo}`)
        .then(result=>{
        return result.json()})
        .then(res=>{
        console.log(res);
        let nodeElement = document.createElement("h3");
        distance = `Distance: ${res.route['distance']} Miles`;
        nodeElement.appendChild(document.createTextNode(distance));
        facts.appendChild(nodeElement);
        return distance;
        },);
        return distance;
    }
}
export default LocationFind;
