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
  serverName = '';
  serverCreated = false;
  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created with name  " + this.serverName ;
  }

  onUpdateServerName(event :any ) {

    this.serverCreationValue = event.target.value;
  }

}
