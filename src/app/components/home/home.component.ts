import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var VANTA:any
declare var TypeIt:any
import * as L from 'leaflet';
import * as AOS from 'aos';
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
    .bindPopup(`<html><a href="https://www.google.co.in/maps/place/11%C2%B007'39.3%22N+77%C2%B020'46.5%22E/@11.1276127,77.3458951,19.34z/data=!4m5!3m4!1s0x0:0x9642ee75828660d5!8m2!3d11.1275829!4d77.3462615" target="blank">Find Us Here </a></html>`)
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
   
 
    AOS.init();
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
    navigator.clipboard.writeText("kvsgarments@outlook.com");
  }
  phnno() {
   navigator.clipboard.writeText("7010605192");
  }
  
}
