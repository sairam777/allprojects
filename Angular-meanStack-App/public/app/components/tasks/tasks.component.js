"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var tasks_service_1 = require("./../../services/tasks.service");
var core_1 = require("@angular/core");
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TasksComponent.prototype.addTasks = function (event) {
        var _this = this;
        event.preventDefault();
        var NewTask = {
            name: this.name,
            email: this.email
        };
        this.taskService.addTask(NewTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.name = '';
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i] == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: _task.id,
            name: task.name,
            email: !task.email
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.email = !task.email;
        });
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'tasks.component.html'
    }),
    __metadata("design:paramtypes", [tasks_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map