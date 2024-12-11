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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUser = void 0;
const user_1 = __importDefault(require("../../Domain/Entities/user"));
class SaveUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    saveUser(nombre, email, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_1.default(nombre, email, contrasena);
            yield this.userRepository.save(user);
        });
    }
}
exports.SaveUser = SaveUser;
