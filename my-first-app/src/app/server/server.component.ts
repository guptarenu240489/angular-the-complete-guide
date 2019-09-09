import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        border: 1px solid green;
    }
    .offline {
        border: 1px solid red;
    }
    `
    ]
})
export class ServerComponent {
    serverId: Number = 10;
    serverStatus: String = Math.random() > 0.5 ? 'online': 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

}