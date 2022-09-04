const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");

    if (response.status !== 200) {
        throw new Error("cannot fetch data");
    }
    const data = await response.json();

    return data;
};

getUser()
    .then((data) => {
        console.log(data)

        const img = document.createElement("img");
        img.src = data.results[0].picture.large;
        document.body.appendChild(img);
        img.classList.add("ima")
        const image = document.querySelector('.image')
        image.appendChild(img);

        const btn = document.querySelectorAll("button");

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function () {
                const user = document.querySelector(".userRandom");
                if (i === 0)
                    user.innerText = `My name is ${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}.`
                else if (i === 1)
                    user.innerText = `My email is ${data.results[0].email}.`
                else if (i === 2)
                    user.innerText = `My phone no. is ${data.results[0].phone}.`
                else if (i === 3)
                    user.innerText = `My address is ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}.`
                else if (i === 4)
                    user.innerText = `My password is ${data.results[0].login.password}.`
                else if (i === 5)
                    user.innerText = `My Birth-day is ${data.results[0].dob.date}.`

            })
        }




    })
    .catch((err) => console.log(err.message));

