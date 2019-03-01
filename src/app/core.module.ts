import { NgModule } from '@angular/core';

/* START MY SERVICES IMPORTS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { RoomService } from './services/room.service';
import { SedeService } from './services/sede.service';

/* END MY SERVICES IMPORTS */

import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    RoomService,
    SedeService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
  ],
  exports: []
})
export class CoreModule {
}
