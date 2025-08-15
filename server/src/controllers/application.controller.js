const ApplicationService = require('../services/application.service');
const nodemailer = require('nodemailer')
require('dotenv').config()
class ApplicationController {
  static async createApplication(req, res) {
  try {
    const { userName, phoneNumber, image, description } = req.body;

    if (!userName || !phoneNumber) {
      return res.status(400).json({ message: 'userName и phoneNumber обязательны' });
    }

    const application = await ApplicationService.create({ userName, phoneNumber, image, description });
    return res.status(201).json(application);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера', error: error.message });
  }
}
   
  static async getApplications(req, res) {
    try {
      const userId = res.locals.user.id;
      const applications = await ApplicationService.findById(userId);
      return res.json(applications);
    } catch (error) {
      console.log(error);
    }
  }

  static async getOneApplication(req, res) {
    
    
    try {
      const { id } = req.params;
      const application = await ApplicationService.findOne(id);
     return res.json(application);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteApplication(req, res) {
    try {
      const { id } = req.params;
      const application = await ApplicationService.deleteApplication(id);
      return res.json(application);
    } catch (error) {
      console.log(error);
    }
  }
  static async updateApplication(req, res) {
    try {
      const { id } = req.params;
      const { title, text } = req.body;
      const application = await ApplicationService.update({ title, text, id });
      return res.json(application);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    try {
      const applications = await ApplicationService.findAll();
      return res.json(applications);
    } catch (error) {
      console.log(error);
    }
  }

   static async sendEmail(req, res) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    try {
      const { userName, email, phoneNumber, image, description } = req.body;
      await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: email,
        subject: 'Прилетела новая заявка',
        html: `<p>${description}</p>
        <p>${phoneNumber}</p>
        <p>${image}</p>`,
      });
      res.send('Сообщение отправлено!');
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = ApplicationController;
