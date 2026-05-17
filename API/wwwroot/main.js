"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 397:
/*!***************************************************!*\
  !*** ./src/app/_directives/has-role.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasRoleDirective": () => (/* binding */ HasRoleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);


class HasRoleDirective {
  constructor(viewContainerRef, templateRef, accountService) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    this.accountService = accountService;
    // input tuwcslaf đc sử dụng là thuộc tính đầu vào, giá trị của nó có thể truyền từ cha sang thằng con
    this.user = null;
    this.user = this.accountService.getCurrentUser();
  }
  ngOnInit() {
    //clear view if no roles
    if (!this.user?.roles || this.user == null) {
      this.viewContainerRef.clear();
      // nếu ng dùng k có role hoặc k có user thì se xẩn view bằng cách clear view4
      return;
    }
    if (this.user?.roles.some(r => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
    // nếu ng dùng có roles thì sẽ sử dụng hàm array.some để ktra ng dùng có vai tro nào trong danh sách
    // hàm some nó đc thể hiện trong callback function nó đc gọi lại trên từng thành phần trong vai trò của ng dùng
  }
}

HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) {
  return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
};
HasRoleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: HasRoleDirective,
  selectors: [["", "appHasRole", ""]],
  inputs: {
    appHasRole: "appHasRole"
  }
});

/***/ }),

/***/ 1700:
/*!***********************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputComponent": () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);




function DateInputComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
class DateInputComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD MMMM YYYY' // ĐỊNH DẠNG NGÀY THÁNG NĂM
    };
  }

  get control() {
    return this.ngControl.control;
  }
  writeValue(obj) {}
  registerOnChange(fn) {}
  registerOnTouched(fn) {}
  setDisabledState(isDisabled) {}
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) {
  return new (t || DateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2));
};
DateInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DateInputComponent,
  selectors: [["app-date-input"]],
  inputs: {
    label: "label",
    maxDate: "maxDate"
  },
  decls: 3,
  vars: 7,
  consts: [[1, "form-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", "mb-3", 3, "formControl", "placeholder", "bsConfig", "maxDate"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
  template: function DateInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateInputComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.ngControl.touched && ctx.ngControl.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("bsConfig", ctx.bsConfig)("maxDate", ctx.maxDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors.required);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerInputDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1201:
/*!***********************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInputComponent": () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function TextInputComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please enter a ", ctx_r0.label, "");
  }
}
function TextInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.label, " must be at least ", ctx_r1.control.errors.minlength["requiredLength"], " ");
  }
}
function TextInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.label, " must be at most ", ctx_r2.control.errors == null ? null : ctx_r2.control.errors.maxlength["requiredLength"], " ");
  }
}
function TextInputComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TextInputComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.type = 'text';
    this.ngControl.valueAccessor = this;
    console.log(this.ngControl);
  }
  get control() {
    return this.ngControl.control;
  }
  // giao diện này nó 4 phương thức
  writeValue(obj) {}
  registerOnChange(fn) {}
  registerOnTouched(fn) {}
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) {
  return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2));
};
TextInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TextInputComponent,
  selectors: [["app-text-input"]],
  inputs: {
    label: "label",
    type: "type"
  },
  decls: 6,
  vars: 9,
  consts: [[1, "form-group"], [1, "form-control", "mb-3", 3, "type", "formControl", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
  template: function TextInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextInputComponent_div_3_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextInputComponent_div_4_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_div_5_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.ngControl.touched && ctx.ngControl.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors.minlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors.maxlength);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors == null ? null : ctx.control.errors.isMatching);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6299:
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminGuard": () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);



const adminGuard = () => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const toastr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService);
  const user = accountService.getCurrentUser();
  if (user && (user.roles.includes('Admin') || user.roles.includes('Moderator'))) {
    return true;
  }
  toastr.error('You cannot enter this area');
  return false;
};

/***/ }),

/***/ 1094:
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authGuard": () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);




const authGuard = (_route, state) => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const toastr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
  const user = accountService.getCurrentUser();
  if (user) return true;
  toastr.error('You shall not pass!');
  return router.createUrlTree(['/login'], {
    queryParams: {
      returnUrl: state.url
    }
  });
};

/***/ }),

/***/ 3014:
/*!****************************************!*\
  !*** ./src/app/_guards/guest.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guestGuard": () => (/* binding */ guestGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);



const guestGuard = () => {
  const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const user = accountService.getCurrentUser();
  if (!user) return true;
  return router.createUrlTree(['/members']);
};

/***/ }),

/***/ 8225:
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preventUnsavedChangesGuard": () => (/* binding */ preventUnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/confirm.service */ 8458);


const preventUnsavedChangesGuard = component => {
  const confirmService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_confirm_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmService);
  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }
  return true;
};

/***/ }),

/***/ 8971:
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);




class ErrorInterceptor {
  constructor(router, toarst) {
    this.router = router;
    this.toarst = toarst;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modalStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key]);
                }
              }
              throw modalStateErrors.flat();
            } else if (typeof error.error === 'object') {
              //error.statusText = "Bad-Request"
              this.toarst.error(error.statusText, error.status);
            } else {
              this.toarst.error(error.error, error.status);
            }
            break;
          case 401:
            error.statusText = "Authorized";
            this.toarst.error(error.statusText, error.status);
            break;
          case 404:
            this.router.navigateByUrl('/not-found');
            break;
          case 500:
            error.statusText = "Server-error";
            const navigationExtras = {
              state: {
                error: error.error
              }
            };
            this.router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            this.toarst.error('Something unexpected went wrong');
            console.log(error);
            break;
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 9707:
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);


class JwtInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  // để nó khởi tạo 1 đối tượng
  intercept(request, next) {
    const currentUser = this.accountService.getCurrentUser();
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}` // khi đã tạo ở đây rồi k cần httooption bên members
        }
      });
    }

    return next.handle(request);
  }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
};
JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 2046:
/*!******************************************************!*\
  !*** ./src/app/_interceptors/loading.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/busy.service */ 4109);



class LoadingInterceptor {
  constructor(busyService) {
    this.busyService = busyService;
  }
  intercept(request, next) {
    this.busyService.busy();
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.delay)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      this.busyService.idle();
    }));
  }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) {
  return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService));
};
LoadingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LoadingInterceptor,
  factory: LoadingInterceptor.ɵfac
});

/***/ }),

/***/ 6635:
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedResult": () => (/* binding */ PaginatedResult)
/* harmony export */ });
class PaginatedResult {}

/***/ }),

/***/ 4057:
/*!***************************************!*\
  !*** ./src/app/_models/userParams.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserParams": () => (/* binding */ UserParams)
/* harmony export */ });
class UserParams {
  constructor(user) {
    this.minAge = 18;
    this.maxAge = 99;
    this.pageNumber = 1;
    this.pageSize = 5;
    this.orderBy = 'lastActive';
    this.gender = user.gender === 'female' ? 'male' : 'female';
  }
}
// sau khi đã tạo đc thuộc tính này chỉ ở memberservice gọi nó đne s

/***/ }),

/***/ 9821:
/*!*******************************************!*\
  !*** ./src/app/_modules/shared.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4448);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-timeago */ 2699);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrModule.forRoot({
    positionClass: 'toast-bottom-right'
  }), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule.forRoot(), _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule.forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonsModule.forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule],
    exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule]
  });
})();

/***/ }),

/***/ 5087:
/*!*********************************************************!*\
  !*** ./src/app/_rosolvers/member-detailed.resolvers.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberDetailedResolver": () => (/* binding */ MemberDetailedResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9516);


class MemberDetailedResolver {
  // đc khai báo và có 1 contructor với tham số memberservice là 1 dịch vj service đc sử dụng để lấy thông tin thành viên từ api
  constructor(memberService) {
    this.memberService = memberService;
  }
  //pth resolve đc triển khai với tham số route , đại deieenjc ho tuyến đường hiện tại
  //pth này trả về về observable phát ra 1 đối tượng member
  resolve(route) {
    // bên trong pth này gọi hàm getmember để lấy thông tin thành viên
    return this.memberService.getMember(route.paramMap.get('username') || '{}');
  }
}
MemberDetailedResolver.ɵfac = function MemberDetailedResolver_Factory(t) {
  return new (t || MemberDetailedResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService));
};
MemberDetailedResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MemberDetailedResolver,
  factory: MemberDetailedResolver.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7110:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presence.service */ 3238);






class AccountService {
  getCurrentUser() {
    return this.currentUserSource.value;
  }
  constructor(http, presence) {
    this.http = http;
    this.presence = presence;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl; // đường dẫn đến api
    this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSource.asObservable();
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const userJson = localStorage.getItem('user');
    if (!userJson) return;
    try {
      const user = JSON.parse(userJson);
      this.setCurrentUser(user);
    } catch {
      localStorage.removeItem('user');
    }
  }
  // contructor nhận tham chiếu đến 1 đối tượn http client
  login(model) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(reponse => {
      const user = reponse;
      if (user) {
        //  localStorage.setItem('user', JSON.stringify(user));
        //  this.currentUserSource.next(user);
        this.setCurrentUser(user);
        //khi login thì cta cần thiết lập present để tạo kết nối luôn
        this.presence.createHubConnection(user);
      }
    }));
  }
  register(model) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
      if (user) {
        this.setCurrentUser(user);
        this.presence.createHubConnection(user);
        // console.log(this.setCurrentUser(user));
        //  localStorage.setItem('user', JSON.stringify(user));
        //  this.currentUserSource.next(user);
        //cta có thể thay đổi ng dùng
      }
    }));
  }
  // pth pipe đc sử lý trả về kết quả từ server
  setCurrentUser(user) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    if (roles) {
      Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    }
    // nếu nó là mảng đối tượng user sẽ cập nhật với biến roles
    //nếu k phải là mảng thì nó đẩy mang user.roles
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.presence.stopHubConnection();
  }
  getDecodedToken(token) {
    // lấy thông tin mã thông báo
    return JSON.parse(atob(token.split(".")[1]));
  }
}
AccountService.ɵfac = function AccountService_Factory(t) {
  return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService));
};
AccountService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AccountService,
  factory: AccountService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2517:
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AdminService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/users-with-roles');
  }
  updateUserRoles(username, roles) {
    return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
  }
}
AdminService.ɵfac = function AdminService_Factory(t) {
  return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AdminService,
  factory: AdminService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4109:
/*!*******************************************!*\
  !*** ./src/app/_services/busy.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyService": () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 7217);


class BusyService {
  // để biết rằng k có yêu cầu nào được xử lý , khi yêu cầu gửi đến thì
  //giá trị biến tăng lên bằng pt busy , giảm bằng pt idle()
  //
  constructor(spinnerServices) {
    this.spinnerServices = spinnerServices;
    this.busyRequestCount = 0;
  }
  busy() {
    this.busyRequestCount++;
    // tăng giá trị lên 1 và hiển thị spinner để biểu thị đang bận rộn
    // tăng lên 1 thì hiện thị showw
    this.spinnerServices.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255, 255, 255,0)',
      color: '#333333'
    });
    // hiện thị bằng cái đặt nhất địnhp
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerServices.hide();
    }
  }
}
BusyService.ɵfac = function BusyService_Factory(t) {
  return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
};
BusyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BusyService,
  factory: BusyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8458:
/*!**********************************************!*\
  !*** ./src/app/_services/confirm.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmService": () => (/* binding */ ConfirmService)
/* harmony export */ });
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/confirm-dialog/confirm-dialog.component */ 2935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);




class ConfirmService {
  constructor(modalService) {
    this.modalService = modalService;
  }
  confirm(title = 'Confirmation', message = 'Are you sure you want to do this?', btnOkText = 'Ok', btnCancelText = 'Cancel') {
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    };
    this.bsModalRef = this.modalService.show(_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, config);
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(this.getResult());
  }
  getResult() {
    return observer => {
      const subscription = this.bsModalRef.onHidden?.subscribe(() => {
        observer.next(this.bsModalRef.content.result);
        observer.complete();
      });
      return {
        unsubscribe() {
          subscription?.unsubscribe();
        }
      };
    };
  }
}
ConfirmService.ɵfac = function ConfirmService_Factory(t) {
  return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService));
};
ConfirmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ConfirmService,
  factory: ConfirmService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9516:
/*!**********************************************!*\
  !*** ./src/app/_services/members.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersService": () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _models_userParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/userParams */ 4057);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 4253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ 7110);

// Sửa từ 'enviroment' thành 'environment'






class MembersService {
  constructor(http, accountService) {
    this.http = http;
    this.accountService = accountService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.members = [];
    this.memberCache = new Map();
    const user = this.accountService.getCurrentUser();
    if (user) {
      this.user = user;
      this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(user);
    }
  }
  getUserParams() {
    return this.userParams;
  }
  setUserParams(params) {
    this.userParams = params;
  }
  resetUserParams() {
    this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(this.user);
    return this.userParams;
  }
  getMembers(userParams) {
    var response = this.memberCache.get(Object.values(userParams).join('-'));
    if (response) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response);
    }
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(userParams.pageNumber, userParams.pageSize);
    params = params.append('minAge', userParams.minAge.toString());
    params = params.append('maxAge', userParams.maxAge.toString());
    params = params.append('gender', userParams.gender.toString());
    params = params.append('orderBy', userParams.orderBy);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'users', params, this.http).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      this.memberCache.set(Object.values(userParams).join('-'), response);
      return response;
    }));
  }
  getMember(username) {
    const member = [...this.memberCache.values()].reduce((arr, elem) => arr.concat(elem.result), []).find(member => member.username === username);
    if (member) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(member);
    }
    return this.http.get(this.baseUrl + 'users/' + username);
  }
  updateMember(member) {
    return this.http.put(this.baseUrl + 'users', member).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
      const index = this.members.indexOf(member);
      this.members[index] = member;
    }));
  }
  setMainPhoto(photoId) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
  }
  deletePhoto(photoId) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
  addLike(username) {
    return this.http.post(this.baseUrl + 'likes/' + username, {});
  }
  getLikes(predicate, pageNumber, pageSize) {
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
    params = params.append('predicate', predicate);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'likes', params, this.http);
  }
}
MembersService.ɵfac = function MembersService_Factory(t) {
  return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService));
};
MembersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MembersService,
  factory: MembersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6252:
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var D_New_folder_2_Building_Dating_App_web_design_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/signalr */ 7930);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 4253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);







class MessageService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hubUrl;
    this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.messageThread$ = this.messageThreadSource.asObservable();
  }
  createHubConnection(user, otherUsername) {
    this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_4__.HubConnectionBuilder().withUrl(this.hubUrl + 'message?user=' + otherUsername, {
      accessTokenFactory: () => user.token
    }).withAutomaticReconnect().build();
    this.hubConnection.start().catch(error => console.log(error));
    this.hubConnection.on('ReceiveMessageThread', messages => {
      this.messageThreadSource.next(messages);
    });
    this.hubConnection.on('NewMessage', message => {
      this.messageThread$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(messages => {
        this.messageThreadSource.next([...messages, message]);
      });
    });
    this.hubConnection.on('UpdateGroup', group => {
      if (group.connections.some(x => x.username === otherUsername)) {
        this.messageThread$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(messages => {
          messages.forEach(message => {
            if (!message.dataRead) {
              message.dataRead = new Date(Date.now());
            }
          });
          this.messageThreadSource.next([...messages]);
        });
      }
    });
  }
  stopHubConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop();
    }
  }
  getMessages(pageNumber, pageSize, container) {
    let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
    //tạo biến params để luuw trữ các tham số phân trang
    params = params.append('Container', container);
    return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'messages', params, this.http);
    // ham này sẽ tạo đối tượng PaginatedResult để lưu trữ kết quả phân trang , sau đó sử dụng pth gét trên đối tượng httpclinet
    //để gọi api
  }
  // tạo hàm cuộc hội thoại giữa ng nhận và người gửi
  getMessageThread(username) {
    return this.http.get(this.baseUrl + 'messages/thread/' + username);
  }
  //tao phwuong thức  gửi tin nhăn s
  sendMessage(username, content) {
    var _this = this;
    return (0,D_New_folder_2_Building_Dating_App_web_design_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.hubConnection.invoke('SendMessage', {
        recipientUsername: username,
        content
      }).catch(error => console.log(error));
    })();
  }
  deleteMessage(id) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};
MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4253:
/*!***********************************************!*\
  !*** ./src/app/_services/paginationHelper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPaginatedResult": () => (/* binding */ getPaginatedResult),
/* harmony export */   "getPaginationHeaders": () => (/* binding */ getPaginationHeaders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/pagination */ 6635);



function getPaginatedResult(url, params, http) {
  const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatedResult();
  // tạo 1 đối tượng paginated result và trả về 1 lớp paginated result
  // gọi pth get trên đối tượng http, với tham số url
  //pth pipe sẽ trả về 1 luồng dữ liệu obsererable để xử lý dữ liệu trả về
  // pht map ddeec gọi để xử lý phản hồi từ điểm cuối api
  return http.get(url, {
    observe: 'response',
    params
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
    if (response.body != null && response.body !== undefined) {
      paginatedResult.result = response.body;
    }
    //kiểm tra phản hồi
    if (response.headers.get('Pagination') !== null) {
      paginatedResult.pagination = JSON.parse(response.headers.get('Pagination') || '{}');
      console.log(paginatedResult.result);
    }
    return paginatedResult;
  }));
}
//hầm typescript để lấy kết quả phân trang từ 1 điểm cuối api
function getPaginationHeaders(pageNumber, pageSize) {
  let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
  //tạo 1 đối tượng params mới từ lớp httpparams đc sử dụng để chứa các tham số truy vấn
  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());
  // thêm tham số truy vấn pageNumber và pageSize vào đối tượng params , với giá trị là số trang hiện tịa đc chuyển đổi thành chuỗi
  return params;
  // sau đó đối tượng params chuwasc ác tham số truy vấn đc tạo
}
// tạo 1 file mới có chức năng phân trang trong angular bằng cách cung cấp các hàm helper để lấy thông tin phân trang từ httpheaders và gửi yêu cầu http để lấy các trang dữ liệu phù hợp với yêu cầu phân trang

/***/ }),

/***/ 3238:
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceService": () => (/* binding */ PresenceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _microsoft_signalr_dist_esm_HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr/dist/esm/HubConnectionBuilder */ 7930);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);






class PresenceService {
  constructor(toastr, router) {
    this.toastr = toastr;
    this.router = router;
    // lấy đường dẫn
    this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hubUrl;
    this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.onlineUsers$ = this.onlineUsersSource.asObservable();
  }
  // chúng tôi cần gửi mã thông báo ng dùng, nên cta sẽ truyền đối tượng user vào
  // cta sẽ thiết lập kết nối và nhận thông tin giữa máy khách và máy chủ
  // thông qua đó bảo đảm tính năng hiện thị sự có mặt của ng dùng trên ứng dụng web
  createHubConnection(user) {
    //tham số truyền vào chưa thông tin ng dùng , bao gồm 1 token đc xử dụng để xác thực ng dùng
    this.hubConnection = new _microsoft_signalr_dist_esm_HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder().withUrl(this.hubUrl + 'presence', {
      accessTokenFactory: () => user.token
      // cung cáp access token để xác thực ng dùng khi kết nối
    }).withAutomaticReconnect()
    //tự động kết nối lại khi mất kết nối vơi server
    .build();
    // xấy dựng kết nối sau đó bắt đầu
    this.hubConnection.start()
    //start đc gọi là kết nối bắt đầu
    .catch(error => console.log(error));
    // catch sử lý lỗi ngoại lệ
    this.hubConnection.on('UserIsOnline', username => {
      this.onlineUsers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(usernames => {
        this.onlineUsersSource.next([...usernames, username]);
      });
    });
    // cuối cùng lắng nghe sự kiện user is online từ server và hiện thị thông báo toastr
    this.hubConnection.on("UserIsOffline", username => {
      this.onlineUsers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(usernames => {
        this.onlineUsersSource.next([...usernames.filter(x => x !== username)]);
      });
    });
    this.hubConnection.on('GetOnlineUsers', usernames => {
      this.onlineUsersSource.next(usernames);
    });
    this.hubConnection.on('NewMessageReceived', ({
      username,
      knowAs
    }) => {
      this.toastr.info(knowAs + 'has sent you a new message!').onTap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
    });
    // Note : userisonline và userisoffline phải đúng với cấu hình ban đầu mình đã định dạng ở presenhub
    // tạo pth dừng kết nối
  }

  stopHubConnection() {
    this.hubConnection.stop().catch(error => console.log(error));
  }
}
PresenceService.ɵfac = function PresenceService_Factory(t) {
  return new (t || PresenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
PresenceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PresenceService,
  factory: PresenceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4752:
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelComponent": () => (/* binding */ AdminPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_directives/has-role.directive */ 397);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-management/user-management.component */ 1175);
/* harmony import */ var _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../photo-management/photo-management.component */ 9011);





function AdminPanelComponent_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tab", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-user-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminPanelComponent_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tab", 6)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-photo-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["Admin"];
};
const _c1 = function () {
  return ["Admin", "Moderator"];
};
class AdminPanelComponent {}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) {
  return new (t || AdminPanelComponent)();
};
AdminPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminPanelComponent,
  selectors: [["app-admin-panel"]],
  decls: 6,
  vars: 4,
  consts: [[1, "tab-panel"], [1, "member-tabset"], ["heading", "User management", 4, "appHasRole"], ["heading", "Photo management", 4, "appHasRole"], ["heading", "User management"], [1, "container"], ["heading", "Photo management"]],
  template: function AdminPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Admin Panel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "tabset", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AdminPanelComponent_tab_4_Template, 3, 0, "tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminPanelComponent_tab_5_Template, 3, 0, "tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsetComponent, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_0__.HasRoleDirective, _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementComponent, _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_2__.PhotoManagementComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_guards/admin.guard */ 6299);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 4752);
/* harmony import */ var _rosolvers_member_detailed_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_rosolvers/member-detailed.resolvers */ 5087);
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ 8225);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 7259);
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ 6874);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 2);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 9953);
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ 4713);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth.guard */ 1094);
/* harmony import */ var _guards_guest_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/guest.guard */ 3014);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 1147);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ 5378);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lists/lists.component */ 6558);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages/messages.component */ 5298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);




















const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__.HomeComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__.LoginComponent,
  canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_10__.guestGuard]
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__.RegisterComponent,
  canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_10__.guestGuard]
}, {
  path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.authGuard],
  children: [{
    path: 'members',
    component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__.MemberListComponent
  }, {
    path: 'members/:username',
    component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__.MemberDetailComponent,
    resolve: {
      member: _rosolvers_member_detailed_resolvers__WEBPACK_IMPORTED_MODULE_2__.MemberDetailedResolver
    }
  }, {
    path: 'member/edit',
    component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_4__.MemberEditComponent,
    canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_3__.preventUnsavedChangesGuard]
  }, {
    path: 'lists',
    component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_15__.ListsComponent
  }, {
    path: 'messages',
    component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__.MessagesComponent
  }, {
    path: 'admin',
    component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_1__.AdminPanelComponent,
    canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__.adminGuard]
  }]
}, {
  path: 'errors',
  component: _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_8__.TestErrorsComponent
}, {
  path: 'not-found',
  component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent
}, {
  path: 'server-error',
  component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__.ServerErrorComponent
}, {
  path: '**',
  component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
  pathMatch: "full"
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/account.service */ 7110);
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/presence.service */ 3238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);







class AppComponent {
  constructor(accountService, presence) {
    this.accountService = accountService;
    this.presence = presence;
    this.title = 'The Dating app';
  }
  //truyền
  ngOnInit() {
    this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(user => {
      if (user) {
        this.presence.createHubConnection(user);
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 0,
  consts: [[1, "container", 2, "margin-top", "100px"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-spinner")(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
  styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{\r\n    cursor: pointer;    \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZSwgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_interceptors/loading.interceptor */ 2046);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ 9707);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ 8971);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ 5378);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 1147);
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ 6874);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lists/lists.component */ 6558);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ 5298);
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_modules/shared.module */ 9821);
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ 4713);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 9953);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 2);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./members/member-card/member-card.component */ 6967);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 7259);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ 247);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_forms/text-input/text-input.component */ 1201);
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_forms/date-input/date-input.component */ 1700);
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ 7197);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 4752);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_directives/has-role.directive */ 397);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-management/user-management.component */ 1175);
/* harmony import */ var _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./photo-management/photo-management.component */ 9011);
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/roles-modal/roles-modal.component */ 8104);
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/confirm-dialog/confirm-dialog.component */ 2935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2560);




































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
    useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_34__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent, _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__.MemberListComponent, _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_10__.MemberDetailComponent, _lists_lists_component__WEBPACK_IMPORTED_MODULE_11__.ListsComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__.MessagesComponent, _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_14__.TestErrorsComponent, _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__.NotFoundComponent, _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__.ServerErrorComponent, _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_17__.MemberCardComponent, _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_18__.MemberEditComponent, _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_19__.PhotoEditorComponent, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_20__.TextInputComponent, _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_21__.DateInputComponent, _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_22__.MemberMessagesComponent, _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__.AdminPanelComponent, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_24__.HasRoleDirective, _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_25__.UserManagementComponent, _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_26__.PhotoManagementComponent, _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_27__.RolesModalComponent, _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__.ConfirmDialogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_34__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 9953:
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 5,
  vars: 0,
  consts: [[1, "container"], ["routerLink", "/", 1, "btn", "btn-info", "btn-lg"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Return to home page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2:
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ServerErrorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Note : If you are seeing this then Angurlar is propaly not to blame ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What to do next ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol")(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Open the Edge dev tools ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Inspect the network tab ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Check the falling request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Examine the request URL - make sure it is correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Repprouce the error in Postman - if we see the same reponse, then the issue it not with Angular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Following is the stack trace - this is where your invenstigation should start!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Error: ", ctx_r0.error.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error.details, " ");
  }
}
class ServerErrorComponent {
  constructor(router) {
    this.router = router;
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }
  ngOnInit() {}
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) {
  return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
ServerErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ServerErrorComponent,
  selectors: [["app-server-error"]],
  decls: 3,
  vars: 1,
  consts: [[4, "ngIf"], [1, "text-danger"], [1, "font-weight", "bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]],
  template: function ServerErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error - refreshing the page will make the error disappear!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServerErrorComponent_ng_container_2_Template, 22, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4713:
/*!*************************************************************!*\
  !*** ./src/app/errors/test-errors/test-errors.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestErrorsComponent": () => (/* binding */ TestErrorsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function TestErrorsComponent_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r2, " ");
  }
}
function TestErrorsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TestErrorsComponent_div_11_li_2_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class TestErrorsComponent {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.validationErrors = [];
  }
  ngOnInit() {}
  get404Errors() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get400Errors() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get500Errors() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get401Errors() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }
}
TestErrorsComponent.ɵfac = function TestErrorsComponent_Factory(t) {
  return new (t || TestErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
TestErrorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TestErrorsComponent,
  selectors: [["app-test-errors"]],
  decls: 12,
  vars: 1,
  consts: [[1, "btn", "btn-outline-primary", "mr-3", 2, "margin-left", "10px", 3, "click"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
  template: function TestErrorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_1_listener() {
        return ctx.get500Errors();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Test 500 Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_3_listener() {
        return ctx.get400Errors();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Test 400 Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_5_listener() {
        return ctx.get401Errors();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Test 401 Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_7_listener() {
        return ctx.get404Errors();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test 404 Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_9_listener() {
        return ctx.get400ValidationError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Test 400 Validation Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestErrorsComponent_div_11_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function HomeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "View Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome back, ", user_r2.knownAs || user_r2.username, "!");
  }
}
class HomeComponent {
  constructor(accountService) {
    this.accountService = accountService;
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 10,
  vars: 6,
  consts: [[1, "container", "mt-5"], [2, "text-align", "center"], [1, "lead"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["routerLink", "/register", 1, "btn", "btn-primary", "btn-lg", "me-2"], ["routerLink", "/login", 1, "btn", "btn-success", "btn-lg", "me-2"], [1, "btn", "btn-info", "btn-lg"], ["routerLink", "/members", 1, "btn", "btn-primary", "btn-lg", "me-2"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Find your match");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Come on in to view your matches... all you need to do is sign up!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 7, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 5, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, ctx.accountService.currentUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, ctx.accountService.currentUser$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6558:
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsComponent": () => (/* binding */ ListsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4448);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../members/member-card/member-card.component */ 6967);







function ListsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-member-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", member_r2);
  }
}
function ListsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_div_12_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.pagination.currentPage = $event);
    })("pageChanged", function ListsComponent_div_12_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r1.pagination.totalItems)("itemsPerPage", ctx_r1.pagination.itemsPerPage)("ngModel", ctx_r1.pagination.currentPage);
  }
}
class ListsComponent {
  constructor(memberService) {
    this.memberService = memberService;
    //Partial cho phép tạo 1 phiên bản mới và loại bỏ đi các thuộc tính bắt buộc , giúp nó khởi tạo 1 đối tượng
    //dễ dàng hơn , nó chứa 1 đối tượn Member có thể thiếu 1 số thuộc tính bắt buộc
    this.predicate = 'liked';
    // thêm phân trang vào đây
    this.pageNumber = 1;
    this.pageSize = 5;
  }
  // trong hàm khởi tạo chúng ta đưa vào các dịch vụ
  ngOnInit() {
    this.loadLikes();
  }
  // LOADLikes, trong pth getMembers ở memberserv
  loadLikes() {
    this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    });
  }
  // thêm hàm phân trang trong html
  pageChanged(event) {
    this.pageNumber = event.page;
    this.loadLikes();
  }
}
ListsComponent.ɵfac = function ListsComponent_Factory(t) {
  return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService));
};
ListsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListsComponent,
  selectors: [["app-lists"]],
  decls: 13,
  vars: 5,
  consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], ["name", "predicate", 1, "btn-group", "col-4"], ["btnRadio", "liked", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "likedBy", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "row", "mt-3"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "col-2"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
  template: function ListsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) {
        return ctx.predicate = $event;
      })("click", function ListsComponent_Template_button_click_6_listener() {
        return ctx.loadLikes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Member I like ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) {
        return ctx.predicate = $event;
      })("click", function ListsComponent_Template_button_click_8_listener() {
        return ctx.loadLikes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Member Who like me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ListsComponent_div_11_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListsComponent_div_12_Template, 2, 4, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.predicate === "liked" ? "Members I like" : "Members who like me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.predicate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.predicate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.members);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonRadioDirective, _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__.MemberCardComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5378:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_forms/text-input/text-input.component */ 1201);








function LoginComponent_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](error_r2);
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_9_li_2_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class LoginComponent {
  constructor(accountService, fb, router, route, toastr) {
    this.accountService = accountService;
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.returnUrl = '/members';
    this.validationErrors = [];
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/members';
    });
  }
  login() {
    if (!this.loginForm.valid) return;
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
        this.toastr.success('Đăng nhập thành công');
        this.router.navigateByUrl(this.returnUrl);
      },
      error: error => {
        this.validationErrors = error;
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 15,
  vars: 8,
  consts: [[1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-4"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [3, "formControl", "label"], [3, "formControl", "label", "type"], ["class", "row", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", "me-2", 3, "disabled"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-primary"], [1, "row"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
        return ctx.loginForm.valid && ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr")(7, "app-text-input", 5)(8, "app-text-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.loginForm.controls["username"])("label", "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.loginForm.controls["password"])("label", "Password")("type", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6967:
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberCardComponent": () => (/* binding */ MemberCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/presence.service */ 3238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function () {
  return {
    tab: 3
  };
};
class MemberCardComponent {
  constructor(memberService, toastr, precense) {
    this.memberService = memberService;
    this.toastr = toastr;
    this.precense = precense;
  }
  ngOnInit() {}
  addLike(member) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You liked this member' + member.knownAs);
    });
  }
}
MemberCardComponent.ɵfac = function MemberCardComponent_Factory(t) {
  return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService));
};
MemberCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MemberCardComponent,
  selectors: [["app-member-card"]],
  inputs: {
    member: "member"
  },
  decls: 21,
  vars: 13,
  consts: [[1, "card", "mb-4"], [1, "card-img-wrapper"], [1, "card-img-top", 3, "src", "alt"], [1, "list-inline", "member-icons", "animate", "text-center", "d-flex", "justify-content-center"], [1, "list-line-item"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-heart"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "fa", "fa-user", "mr-2"], [1, "cart-text", "text-center"]],
  template: function MemberCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3)(4, "li", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 4)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberCardComponent_Template_button_click_8_listener() {
        return ctx.addLike(ctx.member);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 4)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "h6", 12)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.member.knownAs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-online", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 10, ctx.precense.onlineUsers$).includes(ctx.member.username));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.member.knownAs, ", ", ctx.member.age, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.member.city);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform:scale(1.2, 1.2);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n  opacity: 0.7;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  transform: scale(1.0, 1.0);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.member-icons[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: -30% ;\r\n  left: 0;\r\n  right: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  opacity: 0;\r\n\r\n}\r\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.animate[_ngcontent-%COMP%]{\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fa-blink {\r\n   0% {opacity: 1;}\r\n   100% {opacity: 0.4;}\r\n}\r\n\r\n.is-online[_ngcontent-%COMP%]{\r\n  animation: _ngcontent-%COMP%_fa-blink 1.5s linear infinite;\r\n  color: rgb(1, 189, 42);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7O0FBRVo7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7R0FDRyxJQUFJLFVBQVUsQ0FBQztHQUNmLE1BQU0sWUFBWSxDQUFDO0FBQ3RCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZ3tcclxuICB0cmFuc2Zvcm06c2NhbGUoMS4yLCAxLjIpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICBvcGFjaXR5OiAwLjc7XHJcblxyXG59XHJcblxyXG4uY2FyZCBpbWd7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lbWJlci1pY29uc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMzAlIDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBvcGFjaXR5OiAwO1xyXG5cclxufVxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25ze1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYW5pbWF0ZXtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYS1ibGluayB7XHJcbiAgIDAlIHtvcGFjaXR5OiAxO31cclxuICAgMTAwJSB7b3BhY2l0eTogMC40O31cclxufVxyXG5cclxuLmlzLW9ubGluZXtcclxuICBhbmltYXRpb246IGZhLWJsaW5rIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGNvbG9yOiByZ2IoMSwgMTg5LCA0Mik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6874:
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberDetailComponent": () => (/* binding */ MemberDetailComponent)
/* harmony export */ });
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/presence.service */ 3238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/message.service */ 6252);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member-messages/member-messages.component */ 7197);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-timeago */ 2699);











const _c0 = ["memberTabs"];
function MemberDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Online Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class MemberDetailComponent {
  //@Input() username : string;
  // để ! như này cho rằng biến k phải null hoặc undefined
  // ví dụ như chúng ta khơi tạo tin nhắn riêng tư và c
  constructor(precense, route, messageService, accountService, router) {
    this.precense = precense;
    this.route = route;
    this.messageService = messageService;
    this.accountService = accountService;
    this.router = router;
    this.messages = [];
    const user = this.accountService.getCurrentUser();
    if (user) this.user = user;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    // pth ngOnInit đc sử dụng để lắng nghe các dữ liệu đc trả về từ resoler thông qua đối tượng router
    //hàm subcribe đc gọi để lắng nghe sự kiện và cập nhập thanh viên đc hiện thi trên trang chi tiết
    this.route.data.subscribe(data => {
      this.member = data.member;
    });
    //this.loadMember();
    // đến đây nới mà cta muốn truy cập những gì cta đag lm
    this.route.queryParams.subscribe(params => {
      params.tab ? this.selectTab(params.tab) : this.selectTab(0);
    });
    this.galleryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryAnimation.Slide,
      preview: false
    }];
    this.galleryImages = this.getImages();
  }
  getImages() {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      });
    }
    return imageUrls;
  }
  // đc sử dụng để lấy đường dẫn hình ảnh của thành viên và chuyển đổi chúng thành mảng của các đối tượng NgxGallery
  // vì this.galleryOptions đcịnh cấu hình cho thư viện ảnh NgxGallery để hiện thị các hình ảnh cho các thnahf viên trên trang chi tiết
  //  loadMember(){
  //    this.memberService.getMember(this.router.snapshot.paramMap.get('username')||"").subscribe(member => {
  //      this.member = member;
  //       // this.galleryImages=this.getImages();
  //       //cta k cần thực hiện thư viện ảnh trên trong đây
  //       //
  //    }, error =>{
  //      console.log(error);
  //    })
  //  }
  // đưa hàm loadtinnhawns hội thoại vào đây
  loadMessages() {
    // nó sẽ gọi pth get... của dịch vụ kia để lấy thông tin về chuỗi tin nhắn
    //this.member.username là 1 thuộc tính của đối tượng member đc xác định xong component
    // biến member có thể chứa thông tin 1 thành viên truyền vào thông quan input binding
    //thuộc tính username đc giả định là 1 chuoxi đại diện cho tên đăng nhập của thanh viên đó
    // lấy tên người dùng từ tên thành viên
    this.messageService.getMessageThread(this.member.username).subscribe(messages => {
      this.messages = messages;
    });
  }
  //onTab
  // tạo 1 phương thức kích hoạt sự dụng tabs, nhận tham số là dữ liệu kiểu tabdirection
  // tạo selecttab
  selectTab(tabId) {
    this.memberTabs.tabs[tabId].active = true;
    console.log(this.memberTabs.tabs[tabId].active);
  }
  onTabActivated(data) {
    // gan đối tượng tabdirective hiện tịa cho 1 biến activetab
    this.activeTab = data;
    // kiểm tra tab hiện tịa là tab messages và chưa có tin nhắn nào thì loadMessage để ltair các tin nhắn mới
    if (this.activeTab.heading === 'Messages' && this.messages.length === 0) {
      this.messageService.createHubConnection(this.user, this.member.username);
    } else {
      this.messageService.stopHubConnection();
    }
  }
  //pth này được dùng để chọn 1 tab trong giao diện gn dùng có nhiều tab
  //pth này có 1 tham số duy nhất tabid đó là định danh số của tab cần chọn
  //pth sau đó truy cập thuộc tinh membertabs
  ngOnDestroy() {
    this.messageService.stopHubConnection();
  }
}
MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) {
  return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_0__.PresenceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
MemberDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MemberDetailComponent,
  selectors: [["app-member-detail"]],
  viewQuery: function MemberDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
    }
  },
  decls: 56,
  vars: 21,
  consts: [[1, "row"], [1, "col-4"], [1, "card"], ["alt", "", 1, "card-img-top", "img-thumbnail", 3, "src"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, ""], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "button", "btn", "btn-primary"], [1, "button", "btn", "btn-success", 3, "click"], [1, "col-8"], [1, "member-tabset"], ["memberTabs", ""], [3, "heading", "selectTab"], ["heading", "Interests", 3, "selectTab"], ["heading", "Photos", 3, "selectTab"], [2, "display", "inline-block", "margin-bottom", "20px", 3, "options", "images"], ["heading", "Messages", 3, "selectTab"], [3, "username"], [1, "mb-2"], [1, "fa", "fa-user-circle", "text-success"]],
  template: function MemberDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MemberDetailComponent_div_5_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Location: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6)(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Age: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6)(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Last Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "timeago");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6)(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Member since ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Like");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MemberDetailComponent_Template_button_click_33_listener() {
        return ctx.selectTab(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 11)(36, "tabset", 12, 13)(38, "tab", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_38_listener($event) {
        return ctx.onTabActivated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Looking for");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "tab", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_47_listener($event) {
        return ctx.onTabActivated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Interests");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "tab", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_52_listener($event) {
        return ctx.onTabActivated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "ngx-gallery", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tab", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_54_listener($event) {
        return ctx.onTabActivated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "app-member-messages", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 14, ctx.precense.onlineUsers$).includes(ctx.member.username));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.member.city, ",", ctx.member.country, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.member.age);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 16, ctx.member.lastActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](28, 18, ctx.member.created, "dd MMM yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx.member.knownAs, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.member.introduction);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.member.lookingFor);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.member.interests);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("username", ctx.member.username);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__.TabsetComponent, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryComponent, _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_3__.MemberMessagesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_9__.TimeagoPipe],
  styles: [".img-thumbnail[_ngcontent-%COMP%]\r\n{\r\n  margin: 25px;\r\n  width: 85%;\r\n  height: 85%;\r\n\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  padding: 0 25px;\r\n\r\n}\r\n.card-footer[_ngcontent-%COMP%]{\r\n  padding:10px 15px;\r\n  background-color: #fff;\r\n  border-top: none;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbFxyXG57XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcblxyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbn1cclxuLmNhcmQtZm9vdGVye1xyXG4gIHBhZGRpbmc6MTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7259:
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberEditComponent": () => (/* binding */ MemberEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-editor/photo-editor.component */ 247);








const _c0 = ["editForm"];
function MemberEditComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " You have made changes. Any unsaved changes will be lost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MemberEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Your profiles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MemberEditComponent_div_0_div_5_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Age: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Last Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Member since ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9)(32, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 3)(35, "tabset", 11)(36, "tab", 12)(37, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MemberEditComponent_div_0_Template_form_ngSubmit_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.updateMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.member.introduction = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.member.lookingFor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Interests");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.member.interests = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Location Detail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 19)(51, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.member.city = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.member.country = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "app-photo-editor", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.member.city, ",", ctx_r0.member.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.member.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.member.lastActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 15, ctx_r0.member.created, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx_r0.member.knownAs, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.introduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.lookingFor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.interests);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.member.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("member", ctx_r0.member);
  }
}
class MemberEditComponent {
  // đc dùng để truy cập đối tượng con trong 1 component
  //  @ViewChild('editForm') để truy cập đối tượng editform
  //! cho phép gán giá trị null hoặc underfined cho biếntrong trường hợp k tìm thấy đối tượng
  unloadNotification($event) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  // lưu trữ thông tin của người dùng đang đăng nhập
  // dịch vụ thành viên và điều muốn làm là điền đối tượng
  constructor(accountServices, memberService, toastr) {
    this.accountServices = accountServices;
    this.memberService = memberService;
    this.toastr = toastr;
    const user = this.accountServices.getCurrentUser();
    if (user) this.user = user;
    // lấy thông tin người dùng đang đăng nhập và lữu trữ nó bằng biến user
  }

  ngOnInit() {
    this.loadMember();
  }
  loadMember() {
    console.log(this.user.username);
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
      console.log(this.member);
      // đối tượng trả về là đối tượng member của lớp Member
    });
  }
  // phương thức loadMember()  đc sử dụng để load thông tin một thành viên từ api
  // cụ thể có thể gọi đến pt getMember() truyền vào username của user hiện tai
  // sau khi thay đổi thành viên thì update
  updateMember() {
    console.log(this.member);
    this.memberService.updateMember(this.member).subscribe(member => {
      // hiện thông báo khi update thành công
      this.toastr.success('Profile updated successfully');
      this.editForm.reset(this.member);
      // sau khi thông báo thành công thì reset lại
      // đây sẽ là thanh viên được cập nhập sau khi gửi biểu mẫu của mình
    });
    // cập nhập thông tin thành viên
  }
}

MemberEditComponent.ɵfac = function MemberEditComponent_Factory(t) {
  return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
MemberEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MemberEditComponent,
  selectors: [["app-member-edit"]],
  viewQuery: function MemberEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
    }
  },
  hostBindings: function MemberEditComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) {
        return ctx.unloadNotification($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    }
  },
  decls: 1,
  vars: 1,
  consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "col-8"], ["class", "alert alert-info", 4, "ngIf"], [1, "card"], ["alt", "", 1, "card-img-top", "img-thumbnail", 3, "src"], [1, "card-body"], [1, ""], [1, "card-footer"], ["form", "editForm", "type", "submit", 1, "button", "btn", "btn-success", "btn-block", 3, "disabled"], [1, "member-tabset"], [3, "heading"], ["id", "editForm", 3, "ngSubmit"], ["editForm", "ngForm"], ["name", "introduction", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-2"], ["name", "lookingFor", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "interests", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-inline", "d-flex"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "country", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "member"], [1, "alert", "alert-info"]],
  template: function MemberEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MemberEditComponent_div_0_Template, 59, 18, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.member);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsetComponent, _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_2__.PhotoEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1147:
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberListComponent": () => (/* binding */ MemberListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4448);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-card/member-card.component */ 6967);







function MemberListComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", gender_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gender_r4.display, " ");
  }
}
function MemberListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-member-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", member_r5);
  }
}
function MemberListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "pagination", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_31_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.pagination.currentPage = $event);
    })("pageChanged", function MemberListComponent_div_31_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r3.pagination.totalItems)("itemsPerPage", ctx_r3.pagination.itemsPerPage)("ngModel", ctx_r3.pagination.currentPage);
  }
}
class MemberListComponent {
  //members$! : Observable<Member[]> ;
  // chứa dữ liệu danh sách thành viên
  // members$ là biến chứa dữ liệu danh sách các thanh viên đc sử dụng hiển thị lên màn hình
  constructor(memberService) {
    this.memberService = memberService;
    this.members = [];
    this.genderList = [{
      value: 'male',
      display: 'Males'
    }, {
      value: 'female',
      display: 'Females'
    }];
    this.userParams = this.memberService.getUserParams();
  }
  ngOnInit() {
    // this.loadMembers();
    this.loadMembers();
    // this.members$ = this.memberService.getMembers();
    // sau khi pth getmembers ddc gọi , dữ liệu danh sách các thành viên sẽ đc trả về
    //dưới dạng 1 observable và đc lưu vào biến members$ để hiện thị lên màn hình
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
      // console.log(this.pagination);
      //console.log('lỗi ở đây');
    });

    console.log(this.pagination);
  }
  // hàm reserFilters
  resetFilters() {
    this.userParams = this.memberService.resetUserParams(); // đặt lại giá trị ban đầu
    this.loadMembers();
  }
  //hàm này dùng ddeerresset lại các tham số tìm kiếm ng dùng và load lại danh sách thanh viên
  //người dùng thực hiện tìm kiếm danh sách thành viên và các tham số tìm kiếm đc lưu trong đối tượn userparams
  // sau đó loadmembers sẽ gọi lại danh sách mới
  pageChanged(event) {
    this.userParams.pageNumber = event.page;
    this.memberService.setUserParams(this.userParams);
    console.log(this.userParams.pageNumber);
    this.loadMembers();
  }
}
MemberListComponent.ɵfac = function MemberListComponent_Factory(t) {
  return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService));
};
MemberListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MemberListComponent,
  selectors: [["app-member-list"]],
  decls: 32,
  vars: 9,
  consts: [[1, "text-center", "mt-3"], [1, "container", "d-flex", "mt-3"], [1, "form-inline", "mb-3", "d-flex", "justify-content-center", "align-items-center", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group", "d-flex", "justify-content-center", "align-items-center", "mr-10", 2, "margin-right", "20px"], ["type", "number", "name", "minAge", 1, "form-control", "ml-3", 2, "width", "70px", "position", "relative", "left", "5px", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-flex", "justify-content-center", "align-items-center", 2, "margin-right", "20px"], ["type", "number form-group d-flex justify-content-center align-items-center", "name", "maxAge", 1, "form-control", "ml-3", 2, "width", "70px", "position", "relative", "left", "5px", 3, "ngModel", "ngModelChange"], [1, "from-group", "form-group", "d-flex", "justify-content-center", "align-items-center", "px-2", 2, "margin-right", "20px"], ["name", "gender", 1, "form-control", "ml-1", 2, "position", "relative", "left", "5px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "ml-1"], ["type", "submit", 1, "btn", "btn-info", "ml-1", 2, "position", "relative", "left", "5px", 3, "click"], [1, "col", "lastactive"], [1, "btn-group", "float-right"], ["type", "button", "name", "orderBy", "btnRadio", "lastActive", 1, "btn", "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], ["type", "button", "name", "orderBy", "btnRadio", "created", 1, "btn", "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], [1, "row", "mt-3"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "value"], [1, "col-2"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
  template: function MemberListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_4_listener() {
        return ctx.loadMembers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Age from:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.userParams.minAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Age to:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.userParams.maxAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Show:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.userParams.gender = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MemberListComponent_option_18_Template, 2, 2, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Apply Filtet ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_21_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Reset Filtet ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_25_listener() {
        return ctx.loadMembers();
      })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_25_listener($event) {
        return ctx.userParams.orderBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " LastActive");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_27_listener() {
        return ctx.loadMembers();
      })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_27_listener($event) {
        return ctx.userParams.orderBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Newest Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MemberListComponent_div_30_Template, 2, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MemberListComponent_div_31_Template, 2, 4, "div", 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Your matchs- ", ctx.pagination == null ? null : ctx.pagination.totalItems, " found");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userParams.minAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userParams.maxAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userParams.gender);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.members);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pagination);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonRadioDirective, _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_1__.MemberCardComponent],
  styles: [".lastactive[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLmxhc3RhY3RpdmV7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7197:
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberMessagesComponent": () => (/* binding */ MemberMessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/message.service */ 6252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-timeago */ 2699);





const _c0 = ["messageForm"];
function MemberMessagesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No messages yet... say hi by using the message box below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MemberMessagesComponent_ul_4_li_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " (unread) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MemberMessagesComponent_ul_4_li_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (read ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, message_r5.dataRead), ") ");
  }
}
function MemberMessagesComponent_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "small", 19)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberMessagesComponent_ul_4_li_2_span_10_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MemberMessagesComponent_ul_4_li_2_span_11_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", message_r5.senderPhotoUrl || "./assets/user.png", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, message_r5.messageSent));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !message_r5.dataRead && message_r5.senderUsername !== ctx_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r5.dataRead && message_r5.senderUsername !== ctx_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r5.content);
  }
}
function MemberMessagesComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MemberMessagesComponent_ul_4_li_2_Template, 14, 7, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx_r1.messageService.messageThread$));
  }
}
class MemberMessagesComponent {
  constructor(messageService) {
    this.messageService = messageService;
  }
  ngOnInit() {}
  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      // thiết lập lại các thông số trống ở đó
      this.messageForm.reset();
    });
  }
}
MemberMessagesComponent.ɵfac = function MemberMessagesComponent_Factory(t) {
  return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
MemberMessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MemberMessagesComponent,
  selectors: [["app-member-messages"]],
  viewQuery: function MemberMessagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageForm = _t.first);
    }
  },
  inputs: {
    messages: "messages",
    username: "username"
  },
  decls: 14,
  vars: 8,
  consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], ["style", "overflow:scroll; height: 500px;", "class", "chat", 3, "scrollTop", 4, "ngIf"], [1, "card-footer"], ["autocomplete", "off", 3, "submit"], ["messageForm", "ngForm"], [1, "input-group"], ["name", "messageContent", "required", "", "type", "text", "placeholder", "Send a private message", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "chat", 2, "overflow", "scroll", "height", "500px", 3, "scrollTop"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "chat-img"], ["alt", "", 1, "rounded-circle", 3, "src"], [1, "chat-body", 2, "margin-left", "10px"], [1, "header", "ml-3"], [1, "text-muted"], [1, "fa", "fa-clocl-o"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "text-success"]],
  template: function MemberMessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MemberMessagesComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MemberMessagesComponent_ul_4_Template, 4, 4, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "form", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function MemberMessagesComponent_Template_form_submit_7_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberMessagesComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.messageContent = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
      let tmp_0_0;
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.messageService.messageThread$)) == null ? null : tmp_0_0.length) === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx.messageService.messageThread$)) == null ? null : tmp_1_0.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.messageContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r2.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_4__.TimeagoPipe],
  styles: [".card[_ngcontent-%COMP%]{\r\n  border: none;\r\n\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.chat-img[_ngcontent-%COMP%]{\r\n  margin-bottom: 10px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px dotted #2d2424;\r\n\r\n\r\n}\r\n\r\n\r\n.rounded-circle[_ngcontent-%COMP%]{\r\n  max-height: 50px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUNBQWlDOzs7QUFHbkM7OztBQUdBO0VBQ0UsZ0JBQWdCOztBQUVsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5jaGF0e1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXQtaW1ne1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMmQyNDI0O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4ucm91bmRlZC1jaXJjbGV7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 247:
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoEditorComponent": () => (/* binding */ PhotoEditorComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ 9019);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_services/account.service */ 7110);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function PhotoEditorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const photo_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.setMainPhoto(photo_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Main ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const photo_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.deletePhoto(photo_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", photo_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", photo_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r2.isMain)("ngClass", photo_r2.isMain ? "btn-success active" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r2.isMain);
  }
}
function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, (item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.size) / 1024 / 1024, ".2"), " MB");
  }
}
function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 3, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.uploader.options.isHTML5);
  }
}
const _c0 = function (a0) {
  return {
    "width": a0
  };
};
function PhotoEditorComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 16)(6, "thead")(7, "tr")(8, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Queue progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.uploader.uploadAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Upload all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.uploader.cancelAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Cancel all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.uploader.clearQueue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Remove all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.uploader.queue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r1.uploader.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.getNotUploadedItems().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.queue.length);
  }
}
const _c1 = function (a0) {
  return {
    "nv-file-over": a0
  };
};
class PhotoEditorComponent {
  // khai báo 1 số thuộc tính sau
  constructor(accountService, memberService) {
    this.accountService = accountService;
    this.memberService = memberService;
    this.hasBaseDropzoneOver = false; // là biến boolean sử dụng để ktra xem con trỏ chuột có đnag nă trên vùng dropzone hay k
    this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl; // chuỗi chưa đường link api server
    // lấy thông tin người dùng hiện tại
    const user = this.accountService.getCurrentUser();
    if (user) this.user = user;
    // lấy giá trị đầu tiên
  }

  ngOnInit() {
    this.initializeUploader();
  }
  fileOverBase(e) {
    this.hasBaseDropzoneOver = e;
  }
  setMainPhoto(photo) {
    this.memberService.setMainPhoto(photo.id).subscribe(() => {
      this.user.photoUrl = photo.url;
      this.accountService.setCurrentUser(this.user);
      this.member.photoUrl = photo.url;
      this.member.photos.forEach(p => {
        if (p.isMain) p.isMain = false;
        if (p.id == photo.id) p.isMain = true;
      });
    });
    // đây là pth trong tyscript nó được gọi để đăt ảnh địa diện hcinsh cho gn dùng
    // với đối số đầu vào là 1 đối tuowngh photo, đại diện cho ahr mà ng dùng đã chọn làm ảnh địa điẹn
  }

  deletePhoto(photoId) {
    this.memberService.deletePhoto(photoId).subscribe(() => {
      this.member.photos = this.member.photos.filter(x => x.id != photoId);
    });
  }
  //gọi đến 1 service thwucj hiện 1 pt detelephoto , nó lọc thành viên trong ảnh và chỉ giữ lại ảnh có id khác với photoid đã truyền vào
  // tucwcs là nó sẽ xóa ảnh k trùng với photoid
  // tạo hàm khởi tạo upload
  initializeUploader() {
    // cấu hình danh sách
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileUploader({
      url: this.baseUrl + 'users/add-photo',
      authToken: 'Bearer ' + this.user.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1023 * 1024
    });
    this.uploader.onAfterAddingFile = file => {
      // file.withCredentials = true;
      file.withCredentials = false;
    };
    //đc kích hoạt khi 1 hoặc nhiều tệp đc thêm vào hàng đợi đê tải lên
    // this.uploader.onBeforeUploadItem = (item) => {
    //   // console.log(item);
    // };
    // this.uploader.onProgressItem = (file, progress) => {
    //   // console.log(fileItem, progress);
    // };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      console.log(item, response, status, headers);
      //trả lại trạng thái
      // để sử lý phản hồi về cho máy chủ
      if (response) {
        const photo = JSON.parse(response);
        this.member.photos.push(photo);
      }
    };
  }
}
PhotoEditorComponent.ɵfac = function PhotoEditorComponent_Factory(t) {
  return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__.MembersService));
};
PhotoEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PhotoEditorComponent,
  selectors: [["app-photo-editor"]],
  inputs: {
    member: "member"
  },
  decls: 15,
  vars: 8,
  consts: [[1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "row", "m1-3"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bg-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "col-2"], [1, "img-thumbnail", "p-1", 3, "src", "alt"], [1, "text-center"], [1, "btn", "btn-sm", 3, "disabled", "ngClass", "click"], [1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]],
  template: function PhotoEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PhotoEditorComponent_div_1_Template, 7, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add Photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) {
        return ctx.fileOverBase($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Drop photos here ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Multiple ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 6)(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Single ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.member.photos);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropzoneOver))("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileDropDirective, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["img.img-thumbnail[_ngcontent-%COMP%]\r\n{\r\n  height: 100px;\r\n  min-width: 100px !important;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over[_ngcontent-%COMP%]{\r\n  border: dotted 3px red;\r\n\r\n\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%]{\r\n  color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7OztBQUd4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltZy5pbWctdGh1bWJuYWlsXHJcbntcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5udi1maWxlLW92ZXJ7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcclxuXHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5298:
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/message.service */ 6252);
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/confirm.service */ 8458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4448);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9300);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-timeago */ 2699);









function MessagesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No message");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MessagesComponent_div_12_tr_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", message_r4.recipientPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", message_r4.recipientUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, message_r4.recipientUsername));
  }
}
function MessagesComponent_div_12_tr_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", message_r4.senderPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", message_r4.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, message_r4.senderUsername));
  }
}
const _c0 = function () {
  return {
    tab: 3
  };
};
function MessagesComponent_div_12_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 16)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MessagesComponent_div_12_tr_10_div_4_Template, 5, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MessagesComponent_div_12_tr_10_div_5_Template, 5, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessagesComponent_div_12_tr_10_Template_button_click_10_listener($event) {
      return $event.stopPropagation();
    })("click", function MessagesComponent_div_12_tr_10_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const message_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.deleteMessage(message_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.container === "Outbox" ? "/members/" + message_r4.recipientUsername : "/members/" + message_r4.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r3.loading)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.container === "Outbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.container !== "Outbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, message_r4.messageSent));
  }
}
function MessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "table", 12)(2, "tr")(3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Form / To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Sent / Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MessagesComponent_div_12_tr_10_Template, 12, 10, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
  }
}
function MessagesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MessagesComponent_div_13_Template_pagination_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.pagination.currentPage = $event);
    })("pageChanged", function MessagesComponent_div_13_Template_pagination_pageChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r2.pagination.totalItems)("itemsPerPage", ctx_r2.pagination.itemsPerPage)("ngModel", ctx_r2.pagination.currentPage);
  }
}
class MessagesComponent {
  // biến này để đánh dấu quá trình chưa tải của ứng dụng
  constructor(messageService, confirmService) {
    this.messageService = messageService;
    this.confirmService = confirmService;
    this.messages = [];
    this.container = 'Inbox';
    this.pageNumber = 1;
    this.pageSize = 5;
    this.loading = false;
  }
  ngOnInit() {
    this.loadMessages();
  }
  loadMessages() {
    // khi loading đc đặt bằng true để hiện thị cho ng dùng quá trình tải đag diễn ra ,
    // khi dữ liệu đc tải từ api biến loading đc đặt lại là false để đánh dấu quá trình hoàn tất
    this.loading = true; // nếu bắt đầu tải bằng sai
    // nhận đc phản hồi và trả về đc kết quả đánh số trang
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(response => {
      this.messages = response.result;
      this.pagination = response.pagination;
      this.loading = false;
    });
  }
  //dùng để tải các danh sách tin nhắn từ server và hiện thi chúng lên giao diện ng dùng
  //sử dụng pth subcribe() để đăng ký lắng nghe phản hồi server sau khi thực hiện yêu cầu lấy dữ liệu
  // khi server trả về phản hồi l danh sách các tin nhắn sẽ đc lưu vào result
  // phân trang số
  // khởi tạo thêm hàm xóa thành viên
  deleteMessage(id) {
    //nhận tham số là id kiểu number
    //và thực hiện xóa 1 tin nhắn dựa trên id đó bằng cách gọi pt deletemessage
    this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(result => {
      if (result) {
        this.messageService.deleteMessage(id).subscribe(() => {
          this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
          // 1 ở đây là số lượng tin nhắn muốn xoa là 1
        });
      }
    });
  }
  //sau khi đã tạo đc pth công việc cần làm sẽ là tới html của message button delete để tạo
  pageChanged(event) {
    this.pageNumber = event.page;
    this.loadMessages();
  }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
  return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService));
};
MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MessagesComponent,
  selectors: [["app-messages"]],
  decls: 14,
  vars: 6,
  consts: [[1, "row", "mb-4"], ["name", "Container", 1, "btn", "btn-group", "m"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row ", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row"], [1, "table", "table-error", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "hidden", "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "hidden", "routerLink", "queryParams"], [4, "ngIf"], [1, "btn", "btn-danger", "btn-color", 3, "click"], [1, "img-circle", "rounded-circle", "mr-2", 3, "src", "alt"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
  template: function MessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_2_listener($event) {
        return ctx.container = $event;
      })("click", function MessagesComponent_Template_button_click_2_listener() {
        return ctx.loadMessages();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Unread ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_5_listener($event) {
        return ctx.container = $event;
      })("click", function MessagesComponent_Template_button_click_5_listener() {
        return ctx.loadMessages();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Inbox ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_8_listener($event) {
        return ctx.container = $event;
      })("click", function MessagesComponent_Template_button_click_8_listener() {
        return ctx.loadMessages();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Outbox ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MessagesComponent_div_11_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 11, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 2, 4, "div", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.container);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.container);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.container);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pagination && !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonRadioDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_8__.TimeagoPipe],
  styles: [".img-circle[_ngcontent-%COMP%] {\r\n  max-height: 50px;\r\n  border-radius: 50%;\r\n}\r\n.btn-color[_ngcontent-%COMP%]{\r\n  background-color: coral;\r\n}\r\n\r\n.btn-color[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(149, 85, 61);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQzs7QUFFcEMiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNpcmNsZSB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJ0bi1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufVxyXG5cclxuLmJ0bi1jb2xvcjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCA4NSwgNjEpO1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2935:
/*!*******************************************************************!*\
  !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);


class ConfirmDialogComponent {
  constructor(bsModalRef) {
    this.bsModalRef = bsModalRef;
  }
  ngOnInit() {}
  confirm() {
    this.result = true;
    this.bsModalRef.hide();
  }
  decline() {
    this.result = false;
    this.bsModalRef.hide();
  }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
  return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef));
};
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialogComponent,
  selectors: [["app-confirm-dialog"]],
  decls: 11,
  vars: 4,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-succes", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
        return ctx.decline();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8104:
/*!*************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModalComponent": () => (/* binding */ RolesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function RolesModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolesModalComponent_div_9_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const role_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](role_r2.checked = !role_r2.checked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", role_r2.checked)("disabled", role_r2.name === "Admin" && ctx_r1.user.username === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.name);
  }
}
class RolesModalComponent {
  // title: string;
  // list: any[] = [];  // danh sachs
  // closeBtnName : string;
  constructor(bsModalRef) {
    this.bsModalRef = bsModalRef;
    this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  updateRoles() {
    this.updateSelectedRoles.emit(this.roles); //emit phát ra
    // sử dụng đối tượn eventemit để phát ra tùy chỉnh , với dữ liệu và danh sách các role
    this.bsModalRef.hide();
    // sau khi sự kiện đc phát ra thì sẽ đc hiện thị bằng pth hide()
  }
}

RolesModalComponent.ɵfac = function RolesModalComponent_Factory(t) {
  return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef));
};
RolesModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RolesModalComponent,
  selectors: [["app-roles-modal"]],
  inputs: {
    updateSelectedRoles: "updateSelectedRoles"
  },
  decls: 15,
  vars: 2,
  consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "role.name", 1, "form-check-input", 3, "checked", "disabled", "change"], ["for", ""]],
  template: function RolesModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_3_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "form", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RolesModalComponent_div_9_Template, 4, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_11_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_13_listener() {
        return ctx.updateRoles();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit roles for ", ctx.user.username, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 2184);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/has-role.directive */ 397);






function NavComponent_ng_container_5_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["Admin", "Moderator"];
};
function NavComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 5)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 5)(5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5)(8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavComponent_ng_container_5_li_10_Template, 3, 0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function NavComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_div_10_div_5_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NavComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavComponent_div_10_div_5_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", user_r4.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", user_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, user_r4.knownAs || user_r4.username), "");
  }
}
function NavComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
class NavComponent {
  constructor(accountService, router) {
    this.accountService = accountService;
    this.router = router;
  }
  logout() {
    this.accountService.logout();
    // khi mà logout thì sẽ về trang home
    this.router.navigateByUrl('/');
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 14,
  vars: 9,
  consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-primary"], [1, "container"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand"], [1, "navbar-nav", "me-auto"], [4, "ngIf"], [1, "nav-item"], ["routerLink", "/errors", "routerLinkActive", "active", 1, "nav-link"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["routerLink", "/members", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/lists", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/messages", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", 4, "appHasRole"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["dropdown", "", 1, "dropdown"], [3, "src", "alt"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light", "text-decoration-none", "ml-2"], ["class", "dropdown-menu mt-3", 4, "dropdownMenu"], [1, "dropdown-menu", "mt-3"], ["routerLink", "/member/edit", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline-light", "me-2"], ["routerLink", "/register", 1, "btn", "btn-success"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Dating App");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavComponent_ng_container_5_Template, 11, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Errors");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavComponent_div_10_Template, 6, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavComponent_ng_container_12_Template, 5, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, ctx.accountService.currentUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, ctx.accountService.currentUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, ctx.accountService.currentUser$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownDirective, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__.HasRoleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
  styles: ["img[_ngcontent-%COMP%]\r\n{\r\n max-height: 50px;\r\n border: 2px solid #fff;\r\n display: inline;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsZUFBZTs7QUFFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbWdcclxue1xyXG4gbWF4LWhlaWdodDogNTBweDtcclxuIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiBkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9011:
/*!****************************************************************!*\
  !*** ./src/app/photo-management/photo-management.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoManagementComponent": () => (/* binding */ PhotoManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PhotoManagementComponent {}
PhotoManagementComponent.ɵfac = function PhotoManagementComponent_Factory(t) {
  return new (t || PhotoManagementComponent)();
};
PhotoManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PhotoManagementComponent,
  selectors: [["app-photo-management"]],
  decls: 2,
  vars: 0,
  template: function PhotoManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "photo-management works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/account.service */ 7110);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_forms/text-input/text-input.component */ 1201);
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_forms/date-input/date-input.component */ 1700);









function RegisterComponent_div_23_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", error_r2, " ");
  }
}
function RegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_div_23_li_2_Template, 2, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class RegisterComponent {
  constructor(accountService, toastr, fb, router) {
    this.accountService = accountService;
    this.toastr = toastr;
    this.fb = fb;
    this.router = router;
    // khai báo thêm
    this.validationErrors = [];
  }
  ngOnInit() {
    this.initializeForm();
    // thực hiện các thao tác khởi tạo và cấu hình cho component trc khi nó hiện thị lần đầu tiên trên giao diện
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    console.log(this.maxDate); // xem nó đã lấy đc chứa
  }
  // hàm khởi tạo biểu mẫu đăng ký với 3 trường ,,,,
  initializeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(8)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.matchValues('password')]]
    });
  }
  // validator để đảm bảo tính hợp lệ của dữ liệu nhập vào từ người dùng ch các trg trong mẫu biểu
  // matchValues(matchTo: string): ValidatorFn{
  //   return (control: AbstractControl) =>{
  //     return control?.value === control?.parent?.controls[matchTo as any]?.value ? null : {isMatching: true};
  //   }
  // }
  matchValues(matchTo) {
    return control => {
      return control?.value === control?.parent?.get(matchTo)?.value ? null : {
        isMatching: true
      };
    };
  }
  // hàm này là 1 hàm validatorfn trong angular , được sử dụng để xác nhận liệu các giá trị của 2 tường có khác nhau hay giog nhâu
  // lúc này sẽ k cần this.model nữa
  register() {
    console.log(this.registerForm.value);
    // đăng kí tài khoản mới đến api thông qua pt post
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      // this.cancel();
      this.router.navigateByUrl('/members');
      // nếu đăng ký thành công thì noosos sẽ đến trang members
      this.toastr.success('Đăng ký thành công');
    }, error => {
      //  console.log(error);
      //  this.toastr.error(error.error);
      this.validationErrors = error;
    });
  }
  // đc sử dụng để đăng ký tài khoản mới
  cancel() {
    this.router.navigateByUrl('/');
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 31,
  vars: 19,
  consts: [[1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-4"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [1, "form-group"], ["for", "", 1, "control-label", 2, "margin-right", "10px"], ["for", "", 1, "radio-inline"], ["type", "radio", "value", "male", "formControlName", "gender"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "ml-3"], [3, "formControl", "label"], [3, "formControl", "label", "maxDate"], ["type", "\"password\"", 3, "formControl", "label"], [3, "formControl", "label", "type"], ["class", "row", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 2, "margin-left", "5px", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 2, "margin-left", "5px", 3, "click"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-link"], [1, "row"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
        return ctx.registerForm.valid && ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " I am a: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Male ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Female ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-text-input", 10)(17, "app-text-input", 10)(18, "app-date-input", 11)(19, "app-text-input", 10)(20, "app-text-input", 10)(21, "app-text-input", 12)(22, "app-text-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 3, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_27_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Already have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["username"])("label", "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["knownAs"])("label", "Known As");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["dateOfBirth"])("label", "Date of Birth")("maxDate", ctx.maxDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["city"])("label", "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["country"])("label", "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["password"])("label", "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.registerForm.controls["confirmPassword"])("label", "Confirm password")("type", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent, _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1175:
/*!**************************************************************!*\
  !*** ./src/app/user-management/user-management.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementComponent": () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../modals/roles-modal/roles-modal.component */ 8104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/admin.service */ 2517);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function UserManagementComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserManagementComponent_tr_8_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const user_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openRolesModal(user_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Edit Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r1.roles);
  }
}
class UserManagementComponent {
  constructor(adminService, modalService) {
    this.adminService = adminService;
    this.modalService = modalService;
  }
  ngOnInit() {
    // load danh sachs leen
    this.getUsersWithRoles();
  }
  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe(users => {
      this.users = users;
    });
  }
  //
  openRolesModal(user) {
    //đối tượng config đẻ cấu hình cửa sổ modal
    const config = {
      class: 'modal-dialog-centered',
      // sử dụng để căn giữa các modal
      initialState: {
        // chứa nhiều dữ liệu ban đầu của modal
        user,
        roles: this.getRolesArray(user)
      }
    };
    this.bsModalRef = this.modalService.show(_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__.RolesModalComponent, config);
    this.bsModalRef.content.updateSelectedRoles.subscribe(values => {
      const rolesToUpdate = {
        roles: [...values.filter(el => el.checked === true).map(el => el.name)]
      };
      if (rolesToUpdate) {
        this.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(() => {
          user.roles = [...rolesToUpdate.roles];
        });
      }
    });
  }
  //hàm này đc sử dụng để lấy danh sách các vai tro có sẵn
  getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles = [{
      name: 'Admin',
      value: 'Admin'
    }, {
      name: 'Moderator',
      value: 'Moderator'
    }, {
      name: 'Member',
      value: 'Member'
    }];
    availableRoles.forEach(role => {
      let isMatch = false;
      for (const userRole of userRoles) {
        if (role.name === userRole) {
          isMatch = true;
          role.checked = true;
          roles.push(role);
          break;
        }
      }
      if (!isMatch) {
        role.checked = false;
        roles.push(role);
      }
    });
    return roles;
  }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) {
  return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService));
};
UserManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserManagementComponent,
  selectors: [["app-user-management"]],
  decls: 9,
  vars: 1,
  consts: [[1, "row"], [1, "table"], [2, "width", "30%"], [2, "width", "40%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 2, "color", "rgb(11, 11, 11)", 3, "click"]],
  template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "tr")(3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Active roles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UserManagementComponent_tr_8_Template, 8, 2, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  hubUrl: 'https://localhost:50001/hubs/'
  // nếu lỗi di phần này
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: 'https://localhost:5001/api/',
  hubUrl: 'https://localhost:5001/hubs/'
};
//khi có nhiều API thì có thể tạo ở đây để gọi vào
//hubUrl đc sử dụng để cấu hình url của urlhub phải đc cung cấp cho phép các kết nối giữa máy khách và máy chủ thông qua signalr

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map