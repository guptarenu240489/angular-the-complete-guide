import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
    constructor(private loggingService: LoggingService) { }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);

      }

      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
      }
}