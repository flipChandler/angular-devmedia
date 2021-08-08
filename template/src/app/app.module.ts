import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { ProdutoComponent } from './produto/produto.component';
import { FilmeComponent } from './filme/filme.component';
import { LivroComponent } from './livro/livro.component';
import { RevistaComponent } from './revista/revista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLivrosComponent,
    ProdutoComponent,
    FilmeComponent,
    LivroComponent,
    RevistaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
