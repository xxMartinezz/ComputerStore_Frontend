import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComputerStoreFrontend';

  private icons = [
    'home'
  ];

  constructor(private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
  {
    this.icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
    });
  }
}
