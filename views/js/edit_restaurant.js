var id = 0;
$(document).ready(function (){
    var urlparam = new URLSearchParams(window.location.search);
    id = urlparam.get('id');
        $.ajax({
            url: 'http://localhost:3000/api/restaurant/' + id,
            method: "get",
        })
        .done(function (data){
            $("#name").val(data.name)
            $("#type").val(data.type)
            $("#image").val(data.img_path)
        })

        $("#update").submit(function(e) {
            e.preventDefault();
            let name = $("#name").val();
            let type = $("#type").val();
            let img = $("#image").val();
    
            $.ajax({
                url: 'http://localhost:3000/api/update_restaurant' + id,
                method: "put",
                data: {
                    name:name,
                    type:type,
                    img:img
                },
    
                success: function(response) {
                    alert("Successfully update type");
                }
            })
        })
})