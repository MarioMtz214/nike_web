import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddProductComponent } from './components/add-product/add-product.component';


export const routes: Routes = [{path:'', redirectTo:'home', pathMatch:'full'},
                                {path:'home', component:HomeComponent},
                                {path: 'catalog',component:CatalogComponent},
                                {path:'addProduct', component:AddProductComponent}
    
];

// path:'', redirectTo:'home', component:HomeComponent