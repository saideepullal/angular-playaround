import {Component} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styleUrls:['./server.component.css'],
})
export class ServerComponent {
serverStatus = Math.random() > 0.5 ? "online" : "offline";
serverId = 10


getServerStatus() {
    return this.serverStatus
}

getColor() {
    return this.serverStatus == "online" ? 'green' : 'red';
  }

}