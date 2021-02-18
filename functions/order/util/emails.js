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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.sendToCustomer = exports.sendToMe = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var host = process.env.EMAIL_HOST || "smtp.qboxmail.com";
var port = process.env.EMAIL_PORT;
var secure = process.env.EMAIL_SECURE || true;
var user = process.env.EMAIL_USER;
var pass = process.env.EMAIL_PASS;
var transporter = nodemailer_1["default"].createTransport({
    host: host,
    port: port ? parseInt(port) : undefined,
    secure: !!secure,
    auth: {
        user: user,
        pass: pass
    }
});
var IntervalTrans = new Map([
    ["monthly", "månad"],
    ["yearly", "år"]
]);
var priceTable = {
    solo: {
        yearly: 9600,
        monthly: 2800
    },
    small: {
        yearly: 22500,
        monthly: 2800
    },
    large: {
        yearly: 48000,
        monthly: 6000
    }
};
function sendToMe(_a) {
    var name = _a.name, email = _a.email, tierName = _a.tierName, personId = _a.personId, company = _a.company;
    return __awaiter(this, void 0, void 0, function () {
        var subject, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    subject = "Ny best\u00E4llning: " + tierName;
                    message = name + " fr\u00E5n " + company + " \u00E4r intresserad av " + tierName + ".\n\t\nSkicka ett meddelande och fr\u00E5ga efter moms.nr, org.nr och address.\n\nCapsule sida: https://chjweb.capsulecrm.com/party/" + personId + "\n\t";
                    return [4 /*yield*/, transporter.sendMail({
                            from: name + " <" + email + ">",
                            to: "carl@chjweb.se",
                            text: message,
                            subject: subject
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendToMe = sendToMe;
function sendToCustomer(_a) {
    var tierType = _a.tierType, tierTimeFrame = _a.tierTimeFrame, tierName = _a.tierName, email = _a.email, name = _a.name;
    return __awaiter(this, void 0, void 0, function () {
        var price, interval, currency, amount, customerSubject, customerMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    price = priceTable[tierType][tierTimeFrame];
                    interval = IntervalTrans.get(tierTimeFrame);
                    currency = "SEK";
                    amount = new Intl.NumberFormat("sv-SE", {
                        currency: currency,
                        style: "currency",
                        currencyDisplay: "narrowSymbol"
                    }).format(price);
                    customerSubject = "Best\u00E4llning: " + tierName;
                    customerMessage = "(Det h\u00E4r meddelandet skickades automatiskt)\n\nHej " + name + ",\n\t\nNi har valt att best\u00E4lla " + tierName + ", f\u00F6r en kostnad om " + amount + " per " + interval + ". Som sagt har ni \u00E4nnu inte accepterat n\u00E5got kontrakt eller avtal och kan avbryta best\u00E4llningen n\u00E4r som helst.\n\nJag kommer att skicka ett manuellt mejl om en kort stund d\u00E4r jag kommer be om mer information som org.nr, moms.nr och f\u00F6retagets address. D\u00E4refter kommer jag skicka ett kontrakt som ni kan signera digitalt. N\u00E4r kontraktet \u00E4r signerat skickas den f\u00F6rsta fakturan och ni kan ge mig mina f\u00F6rsta uppdrag.\n\nJag ser fram emot ett givande samarbete.\n\t";
                    return [4 /*yield*/, transporter.sendMail({
                            from: "Carl Hallén Jansson <carl@chjweb.se>",
                            to: email,
                            text: customerMessage,
                            subject: customerSubject
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendToCustomer = sendToCustomer;
