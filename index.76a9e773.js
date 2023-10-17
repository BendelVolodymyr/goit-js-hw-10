const t=()=>fetch("https://api.thecatapi.com/v1/breeds?live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E").then((t=>{if(!t.ok)throw new Error(t.statusText||"Помилка");return t.json()})).then((t=>t));t().then();console.log(t());
//# sourceMappingURL=index.76a9e773.js.map
