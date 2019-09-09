import { Component, OnInit, EventEmitter , Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('serverContent', {static: false}) serverContent : ElementRef;
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();

  onAddServer(serverName: HTMLInputElement, t) {
    this.serverCreated.emit({name: serverName.value, content: this.serverContent.nativeElement.value});
  };

  onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({name: serverName.value, content: this.serverContent.nativeElement.value});
  }
}
