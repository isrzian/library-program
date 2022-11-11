"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookEntity = void 0;
var typeorm_1 = require("typeorm");
var renting_entity_1 = require("../renting/renting.entity");
var BookEntity = /** @class */ (function () {
    function BookEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BookEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "author");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "genre");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "collateralValue");
    __decorate([
        (0, typeorm_1.Column)()
    ], BookEntity.prototype, "rentalPrice");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return renting_entity_1.RentingEntity; }, function (renting) { return renting.book; })
    ], BookEntity.prototype, "rents");
    BookEntity = __decorate([
        (0, typeorm_1.Entity)('books')
    ], BookEntity);
    return BookEntity;
}());
exports.BookEntity = BookEntity;
