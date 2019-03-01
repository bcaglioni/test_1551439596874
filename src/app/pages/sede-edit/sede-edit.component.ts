// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { SedeService } from '../../services/sede.service';

import { Sede } from '../../domain/my-contacts_db/sede';
import { Room } from '../../domain/my-contacts_db/room';

// START - USED SERVICES
/**
* SedeService.create
*	@description CRUD ACTION create
*
* SedeService.get
*	@description CRUD ACTION get
*
* SedeService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Sede
 */
@Component({
    selector: 'app-sede-edit',
    templateUrl: 'sede-edit.component.html',
    styleUrls: ['sede-edit.component.css']
})
export class SedeEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Sede>;
    isNew: Boolean = true;
    formValid: Boolean;

    listSede: Sede[];

    externalRoom: Room[];

    constructor(
        private sedeService: SedeService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalRoom = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.sedeService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.roomService.findBySede(id).subscribe(list => this.externalRoom = list);
            }
            // Get relations
        });
    }



    /**
     * Save Sede
     *
     * @param {boolean} formValid Form validity check
     * @param Sede item Sede to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.sedeService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.sedeService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
