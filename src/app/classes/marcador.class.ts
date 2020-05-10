export class Marcador {
    public title = 'Sin título';
    public desc = 'Sin descripción';
    public lat: number;
    public lng: number;

    constructor( lat: number, lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }
}


// Se puede realizar también de esta manera
// export class Marcador {

//     constructor( public lat: number, public lng: number ) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
