import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styleUrls: ['./server.component.css']

})
export class ServerComponent {
serverId  =  10;
serverStatus = 'Offline';

constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}
getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
}

}