const greetings = [
  { name: 'Hello' },
  { name: 'Hi' },
  { name: 'Olá' },
];

module.exports = {
  getGreetings(req, res, next) {
    try {
      res.json(greetings);
    } catch (err) {
      next(err);
    }
  },

  newGreeting(req, res, next) {
    try {
      greetings.push(req.body);
      res.json('ok');
    } catch (err) {
      next(err);
    }
  },

};
