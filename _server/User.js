const mongoose = require('mongoose');
const { hash, compare } = require('bcrypt');
const { sign, verify } = require('./jwt');

mongoose.connect('mongodb://pho:123@ds125489.mlab.com:25489/word1203xxx')
.catch(error => {
    console.log(error);
    process.exit(1);
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
});

const UserModel = mongoose.model('User', userSchema);

class User extends UserModel {
    static async signUp(email, plainPassword, name) {
        try {
            const password = await hash(plainPassword, 8);
            const user = new User({ email, password, name });
            await user.save();
            const userInfo = user.toObject();
            delete userInfo.password;
            return userInfo;
        } catch (error) {
            throw new Error('INVALID_USER_INFO');
        }
    }

    static async signIn(email, plainPassword) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('CANNOT_FIND_USER');
        const same = await compare(plainPassword, user.password)
        .catch(() => {
            throw new Error('CANNOT_FIND_USER');
        });
        if (!same) throw new Error('CANNOT_FIND_USER');
        const userInfo = user.toObject();
        delete userInfo.password;
        const token = await sign({ _id: userInfo._id });
        userInfo.token = token;
        return userInfo;
    }

    static async check(userToken) {
        const { _id } = await verify(userToken);
        const user = await User.findById(_id);
        if (!user) throw new Error('CANNOT_FIND_USER');
        const userInfo = user.toObject();
        delete userInfo.password;
        const token = await sign({ _id: userInfo._id });
        userInfo.token = token;
        return userInfo;
    }
}

module.exports = { User };
