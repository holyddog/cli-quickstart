import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Config } from './environments/config';

if (Config.Production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
