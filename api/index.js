import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json(
    {
         "self": 
         {
            "about" : "Hello there! Myself Nishant Kumar Singh. I am a backend developer \ninterested in learning every piece of new twch to streamline my workflow or improve the performance of my code. I majorly work with Python based libraries like Fast API, Django and Flask but looking forward to work with different languages and libraries as I get chance. I like to contribute to Open Source projects as well and I too have created some good open source projects",
            "projects" : [
              "1. OSS Labs/Gradus: A fully functional self hosted Codelab that helps to write you own Codelab with the help of just markdown. [Link](https://github.com/oss-labs/gradus)",
              "2. Markdown Notes: Helps you to create notes or write any document with the simplicity of markdown and use CSS styling to style the components of markdown and save it as a pdf file. [Link](https://github.com/NishaantKrSingh/markdown-notes)"
            ],
            "Socials" : {
              "GitHub": "https://github.com/NishaantKrSingh",
              "Twitter/X": "https://twitter.com/NishaantKrSingh",
              "e-mail": "nishaantkrsingh@gmail.com" 
            }
         } 
        
    });
});

export default app;
