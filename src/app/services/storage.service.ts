import 'rxjs/add/operator/toPromise';

import { Inject, Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    set(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string) {
        let data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}