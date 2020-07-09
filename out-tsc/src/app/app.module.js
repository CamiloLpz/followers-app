import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        FollowersService,
        PostService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ], imports: [[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot([
                {
                    path: '',
                    component: HomeComponent
                },
                {
                    path: 'followers',
                    component: FollowersComponent
                },
                {
                    path: 'posts',
                    component: PostsComponent
                },
                {
                    path: '**',
                    component: NotFoundComponent
                },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        PostsComponent,
        FollowersComponent,
        NavbarComponent,
        HomeComponent,
        NotFoundComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    PostsComponent,
                    FollowersComponent,
                    NavbarComponent,
                    HomeComponent,
                    NotFoundComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule.forRoot([
                        {
                            path: '',
                            component: HomeComponent
                        },
                        {
                            path: 'followers',
                            component: FollowersComponent
                        },
                        {
                            path: 'posts',
                            component: PostsComponent
                        },
                        {
                            path: '**',
                            component: NotFoundComponent
                        },
                    ])
                ],
                providers: [
                    FollowersService,
                    PostService,
                    { provide: ErrorHandler, useClass: AppErrorHandler }
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=app.module.js.map