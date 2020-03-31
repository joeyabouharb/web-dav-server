const express = require('express');
const formidable = require('formidable');
const { PassThrough } = require('stream');

const app = express();
 
app.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});
 
app.post('/api/upload', (req, res, next) => {
    const form = new formidable.IncomingForm({ multiples: true });
    const pass = new PassThrough();
    const metaData = {
        filename: '',
        type: '',
    };
    form.onPart = (part) => {
        if (!part.filename) {
            form.handlePart(part);
        } else {
            metaData.filename = part.filename;
            metaData.type = part.mime;
            part.on('data', (buffer) => {
                pass.write(buffer);
            })
            part.on('end', () => {
                pass.end();
            })
        }
    }
    form.parse(req, (err) => {
        if (err) {
            res.send(err).status(404);
        } else {
            res.setHeader('Content-disposition', `attachment; filename=${metaData.filename}`);
            res.contentType(metaData.type);
            pass.pipe(res);
        }
    })
});
 
app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000 ...');
});

const d = new Map();
const weakmaps = new WeakMap();

{
    jwt: {
        ObjectID: "fsdfrfdgd"
    }
}