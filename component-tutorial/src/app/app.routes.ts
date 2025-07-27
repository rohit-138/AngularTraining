import { Routes } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { SecondComponent } from './second-component/second-component';
import { InterpolationDemo } from './interpolation-demo/interpolation-demo';
import { EventBinding } from './event-binding/event-binding';

export const routes: Routes = [
    {
        path: 'first-component',
        component: FirstComponent
    },
    {
        path: 'second-component',
        component: SecondComponent
    },
    {
        path: 'interpolation',
        component: InterpolationDemo
    },
    {
        path: 'event-binding',
        component: EventBinding
    },
];
