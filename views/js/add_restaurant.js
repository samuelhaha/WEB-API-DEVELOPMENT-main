$(document).ready(function() {
    $("#adding").submit(function(e) {
        e.preventDefault();
        let name = $("#name").val();
        let type = $("#type").val();
        let img_path = $("#image").val();

        $.ajax({
            url: 'http://localhost:3000/api/add_restaurant',
            dataType: "json",
            method: "post",
            data: {
                id:4,
                name:name,
                type:type,
                img_path:img_path
            },

            success: function(response) {
                alert("Successfully added type");
            }
        })
    })
});