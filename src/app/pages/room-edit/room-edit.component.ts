// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { RoomService } from '../../services/room.service';
import { SedeService } from '../../services/sede.service';

import { Room } from '../../domain/my-contacts_db/room';
import { Sede } from '../../domain/my-contacts_db/sede';

// START - USED SERVICES
/**
* RoomService.create
*	@description CRUD ACTION create
*
* RoomService.get
*	@description CRUD ACTION get
*
* SedeService.list
*	@description CRUD ACTION list
*
* RoomService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Room
 */
@Component({
    selector: 'app-room-edit',
    templateUrl: 'room-edit.component.html',
    styleUrls: ['room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Room>;
    isNew: Boolean = true;
    formValid: Boolean;

    listSede: Sede[];


    constructor(
        private roomService: RoomService,
        private sedeService: SedeService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.roomService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
            this.sedeService.list().subscribe(list => this.listSede = list);
        });
    }



    /**
     * Save Room
     *
     * @param {boolean} formValid Form validity check
     * @param Room item Room to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.roomService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.roomService.update(this.itemDoc, this.item);
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
