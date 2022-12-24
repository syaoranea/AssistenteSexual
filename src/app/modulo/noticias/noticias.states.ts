import { Ng2StateDeclaration } from "@uirouter/angular";
import { NoticiasComponent } from "./views/noticias.component";



export const NoticiasState: Ng2StateDeclaration = {
    name: 'noticias',
    url: '/',
    component: NoticiasComponent
};

export const STATES = [NoticiasState]