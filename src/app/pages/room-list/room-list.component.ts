import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { RoomService } from '../../services/room.service';
// Import Models
import { Room } from '../../domain/my-contacts_db/room';

// START - USED SERVICES
/**
* RoomService.delete
*	@description CRUD ACTION delete
*
* RoomService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Room
 * @class RoomListComponent
 */
@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private roomService: RoomService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.roomService.list();
    }

    /**
     * Select Room to remove
     *
     * @param {string} id Id of the Room to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Room
     */
    deleteItem() {
        this.roomService.remove(this.idSelected);
    }

}
