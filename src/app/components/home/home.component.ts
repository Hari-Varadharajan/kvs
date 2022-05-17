import { Component, OnInit } from '@angular/core';
declare var VANTA:any
declare var TypeIt:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
   
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
    // VANTA.WAVES({
    //   el: "#bgvanta1",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00,
    //   color: 0x486b53
    // })
  }

  /*new TypeIt(".multipleStrings", {
    strings: ["This is a great string.", "But here is a better one."],
    speed: 50,
    waitUntilVisible: true,
  }).go();*/

 

}
