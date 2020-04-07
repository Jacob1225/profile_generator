const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? NickNames are also acceptable!', (answer) => {
  console.log((`Thank you for your answer: ${answer}`));

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Thank you for your answer: ${answer}`);

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log((`Thank you for your answer: ${answer}`));

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        console.log(`Thank you for your answer: ${answer}`);

        rl.question('What is your favourite thing to eat for that meal?', (answer) => {
          console.log(`Thank you for your answer: ${answer}`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Thank you for your answer: ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`Thank you for your answer: ${answer}`);

        rl.close();
            });
          });
        });
      });
    });
  });
});




  
