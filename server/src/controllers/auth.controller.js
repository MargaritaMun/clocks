const cookieConfig = require('../configs/cookieConfig');
const AuthService = require('../services/auth.service');
const generateTokens = require('../utils/generateTokens');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
  static async signup(req, res) {
    try {
      const user = await AuthService.createUser(req.body);
      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }

  static async logout(req, res) {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
  }

  static async refresh(req, res) {
    try {
      const { refreshToken: oldRefreshToken } = req.cookies;
      const { user } = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);

      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  static async signin(req, res) {
    try {
      const { name, password } = req.body;

      const user = await AuthService.signin({ name, password });

      const { accessToken, refreshToken } = generateTokens({ user });
      console.log(user);
      

      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      if (err.message === 'Не все поля заполнены') {
        return res.status(400).json({ message: err.message });
      }
      if (err.message === 'Пользователь не найден' || err.message === 'Неверный пароль') {
        return res.status(401).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = AuthController;
