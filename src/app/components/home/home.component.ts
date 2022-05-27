import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var VANTA:any
declare var TypeIt:any
import * as L from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit{


  // MAP
  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 11.127582923595654, 77.34626148888567],  //11.127582923595654, 77.34626148888567
      zoom: 16
    });
    L.marker([11.127582923595654, 77.34626148888567]).addTo(this.map)
    .bindPopup('Find Us Here')
    .openPopup();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
   

    //     VANTA.WAVES({
    //   el: "#bgvanta1",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00,
    //   color: 0x5588
    // })
    // VANTA.BIRDS({
    //   el: "#bgvanta2",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00,
    //   backgroundColor: 0xffffff,
    //   color1: 0x4b91b,
    //   color2: 0xcd2339,
    //   quantity: 2.00
    // })

  }

 
 // CONTACT
  mailid() {
    navigator.clipboard.writeText("ceokardle@gmail.com");
  }
  phnno() {
   navigator.clipboard.writeText("9840153059");
  }
  
}
