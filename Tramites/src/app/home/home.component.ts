import { Component } from '@angular/core';

import { User } from '@app/_models';

import {TramitesTipos} from '@app/tramites-tipos/tramites-tipos';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    tramitestipos: TramitesTipos;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        
    };
}