import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server was Created!";
  serverName = "";
  servers = ["Server1" , "Server2"];

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true
    } , 2000)

  }
  ngOnInit(): void {
  }
  onServerCreation () {
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created name is" + this.serverName;
  }

}
