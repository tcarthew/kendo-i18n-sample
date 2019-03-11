import { MessageService } from '@progress/kendo-angular-l10n';
import { Injectable } from '@angular/core';

const messages = {
    'kendo.grid.noRecords': 'Nothing to see here.',
    'User Welcome': 'ABC'
};

@Injectable()
export class TranslateMessageService extends MessageService {
    public get(key: string): string {
        return messages[key];
    }
}