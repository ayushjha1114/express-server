import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document {
    // id: string;
    email: string;
    name: string;
    role: string;
}
// "husky": {
//     "hooks": {
//         "pre-commit": "npm test",
//         "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
//     }
// },

// "pre-commit": "npm start",
// "commitmsg": "commitlint -E GIT_PARAMS"