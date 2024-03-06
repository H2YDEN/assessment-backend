const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");
const accomplishmentBtn = document.getElementById("accomplishmentButton");
const accompPost = document.getElementById("accomplishmentPost");
const accompEdit = document.getElementById("accomplishmentEdit");
const accompDelete = document.getElementById("accomplishmentDelete");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune);

const getAccomplishment = () => {
    axios.get("http://localhost:4000/api/accomplishment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

accomplishmentBtn.addEventListener('click', getAccomplishment);

const addAccomplishment = (e) => {
    e.preventDefault();
    const submitAccomp = submitAccomplishment.value;
    axios.post("http://localhost:4000/api/post/accomplishment/", {
        accomplishment: submitAccomp
    })
        .then(res => {
            console.log(res.data);
            alert("Accomplishment added successfully!");
    });
}

accompPost.addEventListener('submit', addAccomplishment);

const updateAccomplishment = (e) => {
    e.preventDefault();
    const accompIndex = accompID.value;
    //console.log(accompIndex)
    const editAccomp = editAccomplishment.value;
    axios.put("http://localhost:4000/api/put/accomplishment/", {
        index: accompIndex,
        accomplishment: editAccomp
    })
        .then(res => {
            console.log(res.data);
            alert("Accomplishment editted successfully!");
    });
}

accompEdit.addEventListener('submit', updateAccomplishment);

const removeAccomplishment = (e) => {
    e.preventDefault();
    const deleteIndex = deleteID.value;
    axios.delete("http://localhost:4000/api/delete/accomplishment/", {
        data: { index: deleteIndex }
    })
        .then(res => {
            console.log(res.data);
            alert("Accomplishment deleted successfully!");
    });
}

accompDelete.addEventListener('submit', removeAccomplishment);