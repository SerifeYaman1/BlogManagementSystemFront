import { Component } from '@angular/core';
import { NaviComponent } from "../navi/navi.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [NaviComponent, FooterComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css'
})
export class BasicLayoutComponent {

}
