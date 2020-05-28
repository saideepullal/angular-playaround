import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverCreationValue = "";

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onServerCreate() {
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event :any ) {

    this.serverCreationValue = event.target.value;
  }

}
