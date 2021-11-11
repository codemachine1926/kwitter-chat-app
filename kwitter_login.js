function login() {

    name1 = document.getElementById("user_name").value;
    localStorage.setItem("name1", name1);
    window.location = "kwitter_room.html";
}