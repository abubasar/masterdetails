var categories = [];
function loadProductCategory(element) {
    if (categories.length == 0) {
        $.ajax({
            type: 'GET',
            url: '/Home/getProductCategory',
            success: function (data) {
                categories = data;
                renderCategory(element);
            }

        });
    }
    else
    {
        renderCategory(element);
        
    }

}

function renderCategory(element) {
    var $element = $(element);
    $element.empty();
    $element.append($('<option/>').val('0').text('select'));
    $.each(categories, function (i, v) {
        $element.append($('<option/>').val(v.CategoryId).text(v.CategoryName));
    });
}

function loadProduct(id) {
    if (categories.length == 0) {
        $.ajax({
            type: 'GET',
            url: '/Home/GetProducts',
            data: { CategoryId: $(id).val() },
            success: function (data) {

                renderProduct($(id).parents('.myContainer').find('select.product'),data);
            },
            error: function (error)
            {
                console.log(error);
            }

        });
    }
   

}

function renderProduct(element, data)

{
    var $element = $(element);
    $element.empty();
    $element.append($('<option/>').val('0').text('select'));
    $.each(categories, function (i, v) {
        $element.append($('<option/>').val(v.ProductId).text(v.ProductName));
    });
}

   
     
            
$(document).ready(function () {
    $('#CategoryId').change(function () {
         $('#ProductId').empty();
        $.ajax({
            type: "GET",
            url: "/Home/GetProducts",
            datatype: "Json",
            data: { categoryId: $('#CategoryId').val() },
            success: function (data) {

                $.each(data, function (index, value) {
                    $('#ProductId').append('<option value="' + value.ProductId + '">' + value.ProductName + '</option>');
                });
            }

        });
    });
});

$(document).ready(function () {
    $('#add').click(function () {
        if ($.trim($("#productCategory").val()) == "0" || $.trim($("#product").val()) == "0" || $.trim($("#quantity").val()) == "" || $.trim($("#rate").val()) == "") return;
        var productCategory = $("#CategoryId option:selected").text();
        var product = $("#ProductId option:selected").text();
        var quantity = $("#quantity").val();
        var rate = $("#rate").val();


        var newRow = '<tr><td>' + productCategory + '</td><td>' + product + '</td><td>' + parseInt(quantity) + '</td><td>' + parseFloat(rate) + '</td><td><a data-itemId="0" href="#" class="delete">Remove</a></td></tr>';
        $("#orderDetailsItems").append(newRow);
        clearItem();
       
    });

});

function clearItem() {
    $("#productCategory").val('0');
    $("#product").val('0');
    $("#quantity").val('');
    $("#rate").val('');
}

$(document).on('click', 'a.delete', function (e) {
    e.preventDefault();
    var $self = $(this);
    if ($(this).attr('data-itemId') == "0") {
        $(this).parents('tr').css("background-color", "#ff6347").fadeOut(800, function () {
            $(this).remove();
        });
    }
});


$("#submit").click(function (e) {
    e.preventDefault();

    var orderArr = [];
    orderArr.length = 0;

    $.each($("#orderDetailsItems tbody tr"), function () {
        orderArr.push({
            CategoryName: $(this).find('td:eq(0)').html(),
            ProductName: $(this).find('td:eq(1)').html(),
            Quantity: $(this).find('td:eq(2)').html(),
            Rate: $(this).find('td:eq(3)').html()
        });
    });


    var data = JSON.stringify({
        orderNo: $("#orderNo").val(),
        orderDate: $("#orderDate").val(),
        description: $("#description").val(),
        orders: orderArr
    });
    $.ajax({
        type: "POST",
        url: "/Home/SaveAll",
        contentType: 'application/json; charset=utf-8',
        datatype: "Json",
        data: data,
        success: function (data) {

           
        }

    });
   
});