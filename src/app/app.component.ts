import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ContextMenuComponent} from "./context-menu/context-menu.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContextMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  top = '0';
  left = '0';
  showContextMenu = new BehaviorSubject(false);


  openContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.top = event.clientY + 'px';
    this.left = event.clientX + 'px';
    this.showContextMenu.next(true);
  }
}
