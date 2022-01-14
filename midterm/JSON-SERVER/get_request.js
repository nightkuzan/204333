const axios = require('axios');

axios.get('http://localhost:3000/teacher')
    .then(res => {
        let data = res.data;
        data.forEach(val => {
            console.log(`${val.title} ${val.firstName} ${val.lastName} ${val.subject}`)
        })
    })
    .catch(error => {
        console.log(error);
    })