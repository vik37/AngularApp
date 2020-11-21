import { Routes } from '@angular/router';
import { AuthComponent } from './auth/components/auth/auth.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { ZooContainerComponent } from './components/zoo-container/zoo-container.component';
import { ZookeepersListComponent } from './components/zookeepers-list/zookeepers-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OnlyLoggedInUsersGuard } from './auth/services/only-logged-in-users.guard';
import { NotAllowedComponent } from './shared/components/not-allowed/not-allowed.component';
import { OnlyAdmins } from './auth/services/only-admins.guard';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { ZookeeperDetailsComponent } from './components/zookeeper-details/zookeeper-details.component';

export const routes: Routes = [
    {
        path: 'zoo',
        component: ZooContainerComponent,
        children: [
            {
                path: 'animals',
                component: AnimalsListComponent,
            },
            {
                path: 'animals/:id',
                component: AnimalDetailsComponent,
            },
            {
                path: 'zookeepers',
                component: ZookeepersListComponent,
                // canActivate: [OnlyLoggedInUsersGuard]
            },
            {
                path: 'zookeepers/:id',
                component: ZookeeperDetailsComponent,
                // canActivate: [OnlyLoggedInUsersGuard]
            },
            {
                path: 'add-animal',
                component: AddAnimalFormComponent,
                // canActivate: [OnlyAdmins]
            },
            {
                path: 'add-animal/:id',
                component: AddAnimalFormComponent,
                // canActivate: [OnlyAdmins]
            },
            {
                path: '',
                redirectTo: '/zoo/animals',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'not-allowed',
        component: NotAllowedComponent
    },
    {
        path: '',
        redirectTo: '/zoo/animals',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/not-found',
        pathMatch: 'full'
    },
]