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

/*
$(document).ready(function () {
    $('#add').click(function () {
        var isAllValid = true;
        if ($('#productCategory').val() == "0") {
            isAllValid = false;
            $('#productCategory').siblings('span.error').css('visibility', 'visible');
        } else {
            $('#productCategory').siblings('span.error').css('visibility', 'hidden');
        }

        if ($('#product').val() == "0") {
            isAllValid = false;
            $('#product').siblings('span.error').css('visibility', 'visible');
        } else {
            $('#product').siblings('span.error').css('visibility', 'hidden');
        }

        if ($('#quantity').val().trim() == "") {
            isAllValid = false;
            $('#quantity').siblings('span.error').css('visibility', 'visible');
        } else {
            $('#quantity').siblings('span.error').css('visibility', 'hidden');
        }

        if ($('#rate').val().trim() == "") {
            isAllValid = false;
            $('#rate').siblings('span.error').css('visibility', 'visible');
        } else {
            $('#rate').siblings('span.error').css('visibility', 'hidden');
        }

        if (isAllValid) {
            var $newRow = $('#mainrow').clone().removeAttr('id');

        }
    });

});

*/