import { MessageService } from '@progress/kendo-angular-l10n';
import { Injectable } from '@angular/core';

const messages = {
    'kendo.grid.noRecords': 'Nothing to see here.',
    'kendo.grid.pagerItemsPerPage': 'Show rows'
};

@Injectable()
export class KendoTranslateService extends MessageService {
    public get(key: string): string {
        return messages[key];
    }
}