// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//   </head>
//   <body>
//       <h2>Fruit data</h2>
//       <header></header>
//       <main>
//           <ol>
//           <li>Apple</li>
//           <ul>
//               <li>color : red</li>
//               <li>season : winters</li>
//           </ul>
//           <li>Mango</li>
//           <ul>
//               <li>color : yellow</li>
//               <li>season : summer</li>
//           </ul>
//       </ol>
//       <h2>Tables in HTML</h2>
//       <table>
//           <caption>class registor</caption>
//           <tr>
//               <th colspan="2">
//                   Student data
//                   </th>
//           </tr>
//           <tr>
//               <th>Name </th>
//               <th>roll no </th>
//           </tr>
//           <tr>
//               <td> B sai</td>
//               <td> 08</td>
//           </tr>
//           <tr>
//               <td> Bipin</td>
//               <td> 09</td>
//           </tr>
//           <tr>
//               <td> Balaji</td>
//               <td> 10</td>
//           </tr>
//       </table>
     
//       </main>
//       <h2>form in html</h2>
//       <h1>Registoration form !</h1>
//       <form action="/action.php">
//            <input type="text" placeholder="enter your email id">
//            <br><br>
//            <input type="password" placeholder="password" >
//            <br>
//            <p>enter current year</p>
//            <label for="id1"> 
//               <input type="radio" value="Ist year" name="year" id="id1"> 1st year
//            </label>
//            <label for="id2">
//            <input type="radio" value="IInd year" name="year" id="id2"> 2nd year
//           </label>
//           <br><br><br>
//           <h5>enter your city</h5>
//           <select name="city">
//               <option value="Bombay">Bombay</option>
//               <option value="Delhi"> Delhi</option>
//               <option value="Patna">Patna</option>
//           </select>
//           <h5>select subjects</h5>
//           <label for="phy">
//               <input type="checkbox" value="phy" name="subject" id="101"> physics
//              </label>
         
//              <label for="chem">
//               <input type="checkbox" value="chem" name="subject" id="101"> chemistry
//              </label>
//              <label for="math">
//               <input type="checkbox" value="math" name="subject" id="101"> math
//              </label>
//              <label for="bio">
//               <input type="checkbox" value="bio" name="subject" id="101"> biology
//              </label>
//              <br>
//              <h5>enter your feedback here .</h5>
//              <textarea name="feedback" id="101" cols="30" rows="3" placeholder="please give your valuable feedback here"></textarea>
      
//              <br><br>
//              <h5>submit your response here.</h5>
//               <button>submit</button>
//           </form>
//           <br><br>
//   <h1>website inside website</h1>
//   <iframe width="200" height="200" src="https://www.youtube.com/embed/GaWE8MS4Ghw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//   <br><br><br>
//   <iframe width="700" height="500"src="https://www.bing.com/search?FORM=U523DF&PC=U523&q=wikipedia" frameborder="0"></iframe>
//   <br><br>
//   <h1 style="color: rgb(169, 120, 61);">introduction of css.</h1>
//   <style>
//       h1{
//           color:rgb(81, 17, 141)
//       }
//   </style>
//   <footer></footer>
//   </body>
//   </html>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(223, 245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(5, 0, 0);
              background-color: rgb(221, 166, 38);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color:darkblue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding:6px;
              border: none;
              cursor:pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color:darkgoldenrod;
              background-color:rgb(223, 245, 201);
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit. Quam culpa eius aliquam id cumque saepe, provident odio sed eos quia nihil modi error voluptate vero autem quibusdam aperiam exercitationem! Quam, consequuntur velit.</p>
          <a href="https://yahoo.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

