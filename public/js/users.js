$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/users/add";
    })

    $("#delBtn").click(function () {
        var checkCount = ($(":checkbox:checked").length);

        if (checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }

        var result = confirm("Are you sure to delete user");

        if (!result) {
            return;
        }

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function() {
            return this.id;
        });
        console.log('checked id', checkedIds[0]);
        // alert("Task deleted successfully");

        $.ajax({
            url: `/api/users/${checkedIds[0]}`, 
            type: 'DELETE',
            success: function () {
                alert('Deleted successfully');
                location.reload();
            },
            error: function () {
                alert('Unable to delete');
            }
        })
    })

    $("#editBtn").click(function () {
        var checkCount = $(":checkbox:checked").length;

        if (checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }
        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function() {
            return this.id;
        });
    
        location.href = `/users/edit/${checkedIds[0]}`;
    })

})