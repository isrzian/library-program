"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ReaderService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var reader_entity_1 = require("./reader.entity");
var typeorm_2 = require("typeorm");
var ReaderService = /** @class */ (function () {
    function ReaderService(readerRepository) {
        this.readerRepository = readerRepository;
    }
    ReaderService.prototype.createReader = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var phone, newReader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readerRepository.findOne({
                            phone: dto.phone
                        })];
                    case 1:
                        phone = _a.sent();
                        if (phone) {
                            throw new common_1.HttpException('Читатель с таким телефоном уже существует!', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                        }
                        newReader = new reader_entity_1.ReaderEntity();
                        Object.assign(newReader, dto);
                        return [2 /*return*/, this.readerRepository.save(newReader)];
                }
            });
        });
    };
    ReaderService.prototype.search = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                queryBuilder = (0, typeorm_2.getRepository)(reader_entity_1.ReaderEntity)
                    .createQueryBuilder('reader')
                    .leftJoinAndSelect('reader.rents', 'rents');
                if (dto) {
                    if (dto.surname) {
                        queryBuilder.andWhere('reader.surname = :surname', { surname: dto.surname });
                    }
                    if (dto.name) {
                        queryBuilder.andWhere('reader.name = :name', { name: dto.name });
                    }
                    if (dto.patronymic) {
                        queryBuilder.andWhere('reader.patronymic = :patronymic', { patronymic: dto.patronymic });
                    }
                    if (dto.phone) {
                        queryBuilder.andWhere('reader.phone = :phone', { phone: dto.phone });
                    }
                }
                if (dto.limit) {
                    queryBuilder.limit(dto.limit);
                }
                if (dto.offset) {
                    queryBuilder.offset(dto.offset);
                }
                return [2 /*return*/, queryBuilder.getMany()];
            });
        });
    };
    ReaderService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(reader_entity_1.ReaderEntity))
    ], ReaderService);
    return ReaderService;
}());
exports.ReaderService = ReaderService;
