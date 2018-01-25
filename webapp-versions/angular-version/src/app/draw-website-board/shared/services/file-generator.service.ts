import { Injectable } from '@angular/core';

@Injectable()
export class FileGeneratorService {


  stylesString = `<style>a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1;color:#666;font-family:Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.col-sm-12{width:100%}.col-sm-11{width:91.66%}.col-sm-10{width:83.33%}.col-sm-9{width:75%}.col-sm-8{width:66.66%}.col-sm-7{width:58.33%}.col-sm-6{width:50%}.col-sm-5{width:41.66%}.col-sm-4{width:33.33%}.col-sm-3{width:25%}.col-sm-2{width:16.66%}.col-sm-1{width:8.33%}@media (min-width:1024px){.col-md-12{width:100%}.col-md-11{width:91.66%}.col-md-10{width:83.33%}.col-md-9{width:75%}.col-md-8{width:66.66%}.col-md-7{width:58.33%}.col-md-6{width:50%}.col-md-5{width:41.66%}.col-md-4{width:33.33%}.col-md-3{width:25%}.col-md-2{width:16.66%}.col-md-1{width:8.33%}}.img-responsive{width:100%}.container{margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}.item-edit-menu{visibility:hidden}@media (min-width:768px){.container{width:750px}}@media (min-width:1024px){.container{width:970px}}@media (min-width:1280px){.container{width:1170px}}.btn{background:0 0;border:none;border-radius:.3em;font-size:1em;padding:.3em;vertical-align:middle}.btn:hover{cursor:pointer}.btn-default{border:.1em solid #555}.btn--primary{border:.1em solid #47a1dd;background-color:#47a1dd;color:#fff}.input-label-group{margin:.8em auto}.input-label-group__label{display:block;margin-bottom:.5em}.input-label-group__input{background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#555;display:block;font-size:.875em;height:1.5em;line-height:1.4;padding:.375em .75em;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.edit-element-modal{min-width:11em;background-color:#fff;padding:.1em 1em;border-radius:.5em}.edit-element-modal__action{text-align:right}.edit-element-modal__action__button--close{border:none;font-size:1.6em;color:#666;padding:0}.checkbox-group:hover{cursor:pointer}.checkbox-group__label{display:block}.checkbox-group__btn-add-more{font-size:.8em;color:#666;text-decoration:underline}.checkbox-item__close,.checkbox-item__edit{border:none;font-size:1em;color:#666;padding:0;font-weight:700}.checkbox-item__edit{margin-left:1.5rem}.checkbox-item__close{margin-left:.5rem}.checkbox-item .icon-cancel-circled:hover{color:red}</style>`;


  getFile(content) {

    const filename = 'octa-template.html';
    const filetype = 'html';

    const dataURI = `data:${filetype};base64,${btoa(`${this.stylesString} ${content}`)}`;

    return { dataURI, filename };
  }

}

