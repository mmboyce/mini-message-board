import express from 'express';

const router = express.Router();

const messages = [
  {
    text: 'Has anyone had a good chilli dog lately?',
    user: 'Ogilvie Maurice',
    added: new Date(),
  },
  {
    text: 'Yeah the place in Green Hill is slammin.',
    user: 'Miles',
    added: new Date(),
  },
  {
    text: 'I\'m more fond of bell peppers and beef.',
    user: 'Spike',
    added: new Date(),
  },
  {
    text: 'A man of culture..',
    user: 'Jet',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Post' });
});

router.post('/new', (req, res, next) => {
  messages.push(
    {
      text: req.body.message,
      user: req.body.name,
      added: new Date(),
    },
  );
  res.redirect('/');
});

module.exports = router;
