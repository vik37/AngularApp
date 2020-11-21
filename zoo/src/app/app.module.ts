import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZooRepoService } from './services/zoo-repo.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ZooContainerComponent } from './components/zoo-container/zoo-container.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { ZookeepersListComponent } from './components/zookeepers-list/zookeepers-list.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { AddAnimalFormTempComponent } from './components/add-animal-form-temp/add-animal-form-temp.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import {AuthComponent} from './auth/components/auth/auth.component'
import { NotAllowedComponent } from './shared/components/not-allowed/not-allowed.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { ZookeeperDetailsComponent } from './components/zookeeper-details/zookeeper-details.component';
import { AssignAnimalsFormComponent } from './components/assign-animals-form/assign-animals-form.component'
import { AnimalsToListPipe } from './shared/pipes/animals-to-list.pipe';
import { InputRequiredDirective } from './shared/directives/input-required.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ZooContainerComponent,
    AnimalsListComponent,
    ZookeepersListComponent,
    AddAnimalFormComponent,
    AddAnimalFormTempComponent,
    NotFoundComponent,
    NotAllowedComponent,
    AuthComponent,
    AnimalDetailsComponent,
    ZookeeperDetailsComponent,
    AssignAnimalsFormComponent,
    AnimalsToListPipe,
    InputRequiredDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [ZooRepoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
