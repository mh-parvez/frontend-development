const kitchen = ["🍚", "🥦", "🥔", "🧅"];
const friendName = "Hasan";

const friedRice = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        kitchen.includes("🍚") &&
        kitchen.includes("🥦") &&
        kitchen.includes("🥔") &&
        kitchen.includes("🧅")
      ) {
        //Internet Data
        resolve({
          status: true,
          value: `Hey ${name}, Ready to Eating Hot Fried Rice 🍲`,
        });
      } else {
        reject(new Error("Sorry bondu fartam nay ..."));
      }
    }, 2000);
  });
};

friedRice(friendName)
  .then((resolveValue) => {
    console.log(resolveValue);
    resolveValue.value = "Modifed Value";
    return resolveValue;
  })
  .then((resolveValueAgain) => {
    console.log(resolveValueAgain);
  })

  .catch((error) => {
    console.log(error);
  });

const ReadyToGO = Promise.resolve("Ready to Goo..");

ReadyToGO.then((data) => {
  console.log(data);
});
