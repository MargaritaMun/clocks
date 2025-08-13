const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class AuthService {
  static async createUser({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error('Не все поля заполнены');
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, hashpassword });

    if (!newUser) {
      throw new Error('Не смог создать пользователя');
    }

    const plainUser = newUser.get();
    delete plainUser.hashpass;

    return plainUser;
  }

  static async findArtistByEmail(email) {
    if (!email) return null;
    const user = await User.findOne({ where: { email } });
    return user ? user.get() : null;
  }

  static async checkPassword(password,hashpassword) {
    return bcrypt.compare(password, hashpassword);
  }

  static async signin({ email, password }) {
    if (!email || !password) {
      throw new Error('Не все поля заполнены');
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    const isMatch = await bcrypt.compare(password, user.hashpassword);
    if (!isMatch) {
      throw new Error('Неверный пароль');
    }
    const plainUser = user.get();
    delete plainUser.hashpassword;
    return { user: plainUser };
  }
}
module.exports = AuthService;