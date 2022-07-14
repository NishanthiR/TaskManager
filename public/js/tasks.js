$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/tasks/add";
    })

    $("#delBtn").click(function () {
        var checkCount = $(":checkbox:checked").length;

        if (checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }

        var result = confirm("Are you sure to delete task");

        if (!result) {
            return;
        }
        alert("Task deleted successfully");
    })

    $("#editBtn").click(function () {
        var checkCount = $(":checkbox:checked").length;

        if (checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }

        location.href = '/tasks/edit';
    })
})