const messages = [
  "Ezequiel",
  "Ana",
  "Pedro",
  "Lucas",
  "Luisa",
  "Miguel",
  "Andres",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
