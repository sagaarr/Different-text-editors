import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorFormComponent } from './editor-form/editor-form.component';
// import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ngx-ckeditor';
import { MarkdownComponent } from './markdown/markdown.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { TinymiceComponent } from './tinymice/tinymice.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
@NgModule({
  declarations: [
    AppComponent,
    EditorFormComponent,
    MarkdownComponent,
    TinymiceComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
