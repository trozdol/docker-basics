const backend = `http://127.0.0.1:3000`;

fetch(backend).then(res => res.json()).then(res => {
    console.log('/', res);
    document.querySelector('#test1').innerHTML = JSON.stringify(res, null, 4);
});

fetch(`${backend}/api`).then(res => res.json()).then(res => {
    console.log('/api', res);
    document.querySelector('#test2').innerHTML = JSON.stringify(res, null, 4);
});