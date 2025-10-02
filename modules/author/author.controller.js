import express from 'express';
const app = express();

export const authorPage = (req, res) => {
    res.render('author', {
        title: 'News'  
    });
}
