import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]' // if we use this, app-server component can be used as attribute <div app-servers></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'Another Test Server'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  updateServerStatus() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created:' + this.serverName;
  };

  ngOnInit() {
  }

}
