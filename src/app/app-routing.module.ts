import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modulo/landing-page/views/landing-page.component';
import { NoticiasComponent } from './modulo/noticias/views/noticias.component';

/* const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index',
  },
  { path: 'index', component: LandingPageComponent }, // www.exemplo.com.br/
   { path: 'projetos', component: ProjetosComponent },
  { path: 'projeto', component: ProjetoComponent, canActivate: [authGuard] },
  { path: 'obrigado', component: ObrigadoComponent },
  { path: 'meuprojeto', component: MeuProjetoComponent },
  { path: 'cadastro', component: CadastroComponent },

]; */

const routes: Routes = [
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: 'pagina-inicial', component: LandingPageComponent },
  { path: 'devoteismo/noticia', component: NoticiasComponent },
/*   { path: 'servicos/cuidador', component: CuidadorComponent },
  { path: 'servicos/massagem', component: MassagemComponent },
  { path: 'servicos/assistente-sexual', component: AssistenteSexualComponent },
  { path: 'servicos/acompanhante', component: AcompanhanteComponent },
  { path: 'servicos/namoro-virtual', component: NamoroVirtualComponent },
  { path: 'servicos/amigo-virtual', component: AmigoVirtualComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'contato', component: ContatoComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }