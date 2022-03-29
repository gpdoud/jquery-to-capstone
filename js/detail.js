
$().ready(() => {

    $("#refresh").on("click", () => {
        refresh();
    });

    $("#delete").on("click", () => {
        remove();
    });

    refresh();
    
});

const remove = () => {
    $.ajax({
        method: "DELETE",
        url: "http://localhost:5000/api/users/1",
        contentType: "application/json"
    })
        .then((res) => {
            console.debug("Delete response:", res);
            document.location.href = "index.html";
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
}

const refresh = () => {
    $.getJSON("http://localhost:5000/api/users/1")
        .then((res) => { 
            console.debug(res); 
            display(res);
        })
        .fail((err) => { 
            console.error(err); 
        });
}

const display = (user) => {
    $("#dId").text(user.id);
    $("#dName").text(`${user.firstname} ${user.lastname}`);
    $("#dUsername").text(user.username);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(user.isReviewer ? "Yes" : "No");
    $("#dAdmin").text(user.isAdmin ? "Yes" : "No");
}