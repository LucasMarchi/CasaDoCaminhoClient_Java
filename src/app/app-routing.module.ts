import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component'
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { VoluntarioCadastroComponent } from './voluntario-cadastro/voluntario-cadastro.component';
import { OktaAuthGuard } from '@okta/okta-angular/dist/okta/okta.guard';
import { VoluntarioDetalheComponent } from './voluntario-detalhe/voluntario-detalhe.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { BeneficiarioCadastroComponent } from './beneficiario-cadastro/beneficiario-cadastro.component';
import { BeneficiarioDetalheComponent } from './beneficiario-detalhe/beneficiario-detalhe.component';
import { DoadoresComponent } from './doadores/doadores.component';
import { DoadorCadastroComponent } from './doador-cadastro/doador-cadastro.component';
import { DoadorDetalheComponent } from './doador-detalhe/doador-detalhe.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetoDetalheComponent } from './projeto-detalhe/projeto-detalhe.component';
import { BeneficiarioPerfilComponent } from './beneficiario-perfil/beneficiario-perfil.component';
import { BeneficiarioFamiliaresComponent } from './beneficiario-familiares/beneficiario-familiares.component';

const config = {
  issuer: 'https://dev-271925.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oae6xajeyTn2UEvu0h7'
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'voluntarios', component: VoluntariosComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'voluntario/cadastro', component: VoluntarioCadastroComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'voluntario/:id', component: VoluntarioDetalheComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'beneficiarios', component: BeneficiariosComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'beneficiario/cadastro', component: BeneficiarioCadastroComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'beneficiario/:id', component: BeneficiarioDetalheComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'beneficiario/:id/perfil', component: BeneficiarioPerfilComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'beneficiario/:id/familiares', component: BeneficiarioFamiliaresComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'doadores', component: DoadoresComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'doador/cadastro', component: DoadorCadastroComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'doador/:id', component: DoadorDetalheComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'projetos', component: ProjetosComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'projeto/cadastro', component: ProjetoCadastroComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'projeto/:id', component: ProjetoDetalheComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
