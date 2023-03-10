"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSizeList = exports.getAllCategoryList = exports.getAllBrandList = exports.getAllGenderList = void 0;
var data_source_1 = require("../data-source");
var gender_entity_1 = require("../entities/gender.entity");
var brand_entity_1 = require("../entities/brand.entity");
var category_entity_1 = require("../entities/category.entity");
var size_entity_1 = require("../entities/size.entity");
var getAllGenderList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var genderRepository, allGender;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                genderRepository = data_source_1.myDataSource.getRepository(gender_entity_1.Gender);
                return [4 /*yield*/, genderRepository.find()];
            case 1:
                allGender = _a.sent();
                console.log("gender service : ", allGender);
                return [2 /*return*/, allGender];
        }
    });
}); };
exports.getAllGenderList = getAllGenderList;
var getAllBrandList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var brandRepository, allBrand;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                brandRepository = data_source_1.myDataSource.getRepository(brand_entity_1.Brand);
                return [4 /*yield*/, brandRepository.find()];
            case 1:
                allBrand = _a.sent();
                console.log("brand service : ", allBrand);
                return [2 /*return*/, allBrand];
        }
    });
}); };
exports.getAllBrandList = getAllBrandList;
var getAllCategoryList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var categoryRepository, allCategory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryRepository = data_source_1.myDataSource.getRepository(category_entity_1.Category);
                return [4 /*yield*/, categoryRepository.find()];
            case 1:
                allCategory = _a.sent();
                console.log("category service : ", allCategory);
                return [2 /*return*/, allCategory];
        }
    });
}); };
exports.getAllCategoryList = getAllCategoryList;
var getAllSizeList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var SizeRepository, allSize;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SizeRepository = data_source_1.myDataSource.getRepository(size_entity_1.Size);
                return [4 /*yield*/, SizeRepository.find()];
            case 1:
                allSize = _a.sent();
                console.log("size service : ", allSize);
                return [2 /*return*/, allSize];
        }
    });
}); };
exports.getAllSizeList = getAllSizeList;
