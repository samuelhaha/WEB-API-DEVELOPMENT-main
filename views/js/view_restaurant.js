$(function() {
    $.ajax({
        url: 'http://localhost:3000/api/restaurant',
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function(restaurant) {
                    $("#restaurant").append(`
                    <tr>
                    <td><a href="/update?id=${restaurant._id}">${restaurant.name}</td>
                    <td>${restaurant.type}</td>
                    <td>${restaurant.img_path}</td>
                </tr>
                    `);
                })
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
});
