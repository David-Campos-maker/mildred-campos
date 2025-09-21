import { Component } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faWhatsapp, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  imports: [FaIconComponent],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})

export class Contacts {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faWhatsapp, faInstagram, faGoogle);
  }
}
