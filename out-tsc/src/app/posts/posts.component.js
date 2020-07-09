import { Component } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import * as i0 from "@angular/core";
import * as i1 from "../services/post.service";
import * as i2 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const post_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.deletePost(post_r2); });
    i0.ɵɵtext(2, "Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r2.title, " ");
} }
export class PostsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll()
            .subscribe(response => this.posts = response);
    }
    createPost(input) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post)
            .subscribe(response => {
            post['id'] = response.id;
            console.log(response);
        }, (error) => {
            this.posts.splice(0, 1);
            if (error instanceof BadInput) {
                //this.form.setErrors(error.originalError);
            }
            else
                throw error;
        });
    }
    updatePost(post) {
        this.service.update(post)
            .subscribe(response => {
            console.log(response);
        });
    }
    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id)
            .subscribe(response => { }, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError)
                alert('This post has already been deleted');
            else
                throw error;
        });
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); };
PostsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], decls: 4, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-default", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return ctx.createPost(_r0); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 4, 1, "li", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.posts);
    } }, directives: [i2.NgForOf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return [{ type: i1.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map