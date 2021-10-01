function savename()
{
    userName= document.getElementById("get_name").value;

    localStorage.setItem("userName", userName);
    window.location = "kwitter_room.html";
}