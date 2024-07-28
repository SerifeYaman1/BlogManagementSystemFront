import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileMenuComponent } from "../profile-menu/profile-menu.component";

@Component({
  selector: 'app-profile-nav',
  standalone: true,
  imports: [CommonModule, ProfileMenuComponent],
  templateUrl: './profile-nav.component.html',
  styleUrl: './profile-nav.component.css'
})
export class ProfileNavComponent {
  @Output() publishEvent = new EventEmitter<void>();

  publish() {
    this.publishEvent.emit();
  }
}
