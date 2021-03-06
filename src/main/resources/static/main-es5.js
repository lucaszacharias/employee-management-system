function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employee.service */
    "./src/app/employee.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_17_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var employee_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r6.onOpenModal(employee_r5, "edit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_17_Template_a_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var employee_r5 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r8.onOpenModal(employee_r5, "delete");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var employee_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", employee_r5 == null ? null : employee_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.jobTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Phone : ", employee_r5 == null ? null : employee_r5.phone, "");
      }
    }

    function AppComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "SEM FUNCION\xC1RIOS!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Nenhum Funcion\xE1rio foi encontrado.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(employeeService) {
        _classCallCheck(this, AppComponent);

        this.employeeService = employeeService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployees();
        }
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this = this;

          this.employeeService.getEmployees().subscribe(function (response) {
            _this.employees = response;
            console.log(_this.employees);
          }, function (error) {
            alert(error.message);
          });
        }
      }, {
        key: "onAddEmloyee",
        value: function onAddEmloyee(addForm) {
          var _this2 = this;

          document.getElementById('add-employee-form').click();
          this.employeeService.addEmployee(addForm.value).subscribe(function (response) {
            console.log(response);

            _this2.getEmployees();

            addForm.reset();
          }, function (error) {
            alert(error.message);
            addForm.reset();
          });
        }
      }, {
        key: "onUpdateEmloyee",
        value: function onUpdateEmloyee(employee) {
          var _this3 = this;

          this.employeeService.updateEmployee(employee).subscribe(function (response) {
            console.log(response);

            _this3.getEmployees();
          }, function (error) {
            alert(error.message);
          });
        }
      }, {
        key: "onDeleteEmloyee",
        value: function onDeleteEmloyee(employeeId) {
          var _this4 = this;

          this.employeeService.deleteEmployee(employeeId).subscribe(function (response) {
            console.log(response);

            _this4.getEmployees();
          }, function (error) {
            alert(error.message);
          });
        }
      }, {
        key: "searchEmployees",
        value: function searchEmployees(key) {
          console.log(key);
          var results = [];

          var _iterator = _createForOfIteratorHelper(this.employees),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var employee = _step.value;

              if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1 || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                results.push(employee);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.employees = results;

          if (results.length === 0 || !key) {
            this.getEmployees();
          }
        }
      }, {
        key: "onOpenModal",
        value: function onOpenModal(employee, mode) {
          var container = document.getElementById('main-container');
          var button = document.createElement('button');
          button.type = 'button';
          button.style.display = 'none';
          button.setAttribute('data-toggle', 'modal');

          if (mode === 'add') {
            button.setAttribute('data-target', '#addEmployeeModal');
          }

          if (mode === 'edit') {
            this.editEmployee = employee;
            button.setAttribute('data-target', '#updateEmployeeModal');
          }

          if (mode === 'delete') {
            this.deleteEmployee = employee;
            button.setAttribute('data-target', '#deleteEmployeeModal');
          }

          container.appendChild(button);
          button.click();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 112,
      vars: 12,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 2, "color", "white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "ngModel", "", "name", "key", "id", "searchName", "placeholder", "Procurar funcion\xE1rio...", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModelChange"], ["key", "ngModel"], ["id", "main-container", 1, "container"], [1, "row"], ["class", "col-md-6 col-xl-3", 4, "ngFor", "ngForOf"], ["id", "addEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addEmployeeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addEmployeeModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["addForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "ngModel", "", "name", "name", "id", "name", "placeholder", "Name", "required", "", 1, "form-control"], ["for", "email"], ["type", "email", "ngModel", "", "name", "email", "id", "email", "placeholder", "E-mail", "required", "", 1, "form-control"], ["for", "phone"], ["type", "text", "ngModel", "", "name", "jobTitle", "id", "jobTile", "placeholder", "Cargo", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "phone", "id", "phone", "placeholder", "Telefone", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "imageUrl", "id", "imageUrl", "placeholder", "URL de Imagem", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "id", "add-employee-form", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "updateEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "employeeEditModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "updateEmployeeModalLabel", 1, "modal-title"], ["editForm", "ngForm"], ["type", "text", "name", "name", "id", "name", "aria-describedby", "emailHelp", "placeholder", "Nome", 1, "form-control", 3, "ngModel"], ["type", "hidden", "name", "id", "id", "id", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["type", "hidden", "name", "userCode", "id", "userCode", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["type", "email", "name", "email", "id", "email", "placeholder", "E-mail", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "jobTitle", "id", "jobTitle", "placeholder", "Cargo", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "phone", "id", "phone", "name", "phone", "placeholder", "Telefone", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "imageUrl", "id", "imageUrl", "placeholder", "URL de Imagem", 1, "form-control", 3, "ngModel"], ["type", "button", "id", "", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "deleteEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "deleteModelLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "deleteModelLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["class", "col-lg-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "col-md-6", "col-xl-3"], [1, "card", "m-b-30"], [1, "card-body", "row"], [1, "col-6"], ["href", ""], ["alt", "", 1, "img-fluid", "rounded-circle", "w-60", 3, "src"], [1, "col-6", "card-title", "align-self-center", "mb-0"], [1, "m-0"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "fa", "fa-envelope", "float-right"], [1, "fa", "fa-phone", "float-right"], [1, "card-body"], [1, "float-right", "btn-group", "btn-group-sm"], ["data-placement", "top", "data-original-title", "Edit", 1, "btn", "btn-primary", "tooltips", 3, "click"], [1, "fa", "fa-pencil"], ["data-placement", "top", "data-original-title", "Delete", 1, "btn", "btn-secondary", "tooltips", 3, "click"], [1, "fa", "fa-times"], [1, "col-lg-12", "col-md-12", "col-xl-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Gerenciamento de Funcion\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_a_click_8_listener() {
            return ctx.onOpenModal(null, "add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Adicionar Funcion\xE1rios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);

            return ctx.searchEmployees(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AppComponent_div_17_Template, 24, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Adicionar Funcion\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "form", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

            return ctx.onAddEmloyee(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Cargo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "URL de Imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fechar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "form", null, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Cargo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "URL de Imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Fechar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_92_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](66);

            return ctx.onUpdateEmloyee(_r3.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h5", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Deletar Funcion\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "N\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_109_listener() {
            return ctx.onDeleteEmloyee(ctx.deleteEmployee == null ? null : ctx.deleteEmployee.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Sim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](111, AppComponent_div_111_Template, 6, 0, "div", 53);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.employees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r2.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Editar Funcion\xE1rio ", ctx.editEmployee == null ? null : ctx.editEmployee.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.employeeCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.jobTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.imageUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Tem certeza que quer deletar o funcion\xE1rio: ", ctx.deleteEmployee == null ? null : ctx.deleteEmployee.name, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.employees == null ? null : ctx.employees.length) == 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee.service */
    "./src/app/employee.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          providers: [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee.service.ts":
  /*!*************************************!*\
    !*** ./src/app/employee.service.ts ***!
    \*************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
      }

      _createClass(EmployeeService, [{
        key: "getEmployees",
        value: function getEmployees() {
          return this.http.get("".concat(this.apiServerUrl, "/employee/all"));
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(employee) {
          return this.http.post("".concat(this.apiServerUrl, "/employee/add"), employee);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee) {
          return this.http.put("".concat(this.apiServerUrl, "/employee/update"), employee);
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(employeeId) {
          return this.http["delete"]("".concat(this.apiServerUrl, "/employee/delete/").concat(employeeId));
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.??fac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiBaseUrl: 'https://employee-management-lucas.herokuapp.com'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\GitHub\employee-manager-front\employeemanagerapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map