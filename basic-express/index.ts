import express from 'express';
import router from './router';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extendedfalse: false }));
app.use('/api',router);
app.get('/',(request,response) => {
    response.send("hello  sss")
})

app.listen(3080, () => {
    console.log("hello at http://localhost:3080");
    
});

