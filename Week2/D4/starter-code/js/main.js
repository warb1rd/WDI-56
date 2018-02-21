 
    var $input = $('#todo'); 
    var $addBtn = $(".btn");
    var $list = $(".list");
    var $checkBox = $(".checkedBox");
    var $iClassX = $(".glyphicon-remove");
    var $para = $("p");
    var $iClass = $(".glyphicon-star");
    var clickColor = true;
    var clickBox = true;
    var $span = $("span");

    function addToList(event){
        event.preventDefault();

        var $listItem = $input.val();
        var $allCheckboxes = $("<input>", {"type":"checkbox"});
        var $iClass = $('<i class="glyphicon glyphicon-star"></i>');
        var $iClassX = $('<i class="glyphicon glyphicon-remove"></i>');
        var $span = $("<span></span>");
        var $para = $("<p>");
        
        $list.prepend($para);
        $para.append($allCheckboxes);
        $para.append($iClass);
        $para.append($iClassX);
        $para.append($listItem);
        $para.append($span);
        var $checkBox = $(".checkedBox");
        
        $input.val("");
    }

    function complete(){
        if(clickBox === true){
            $(this).parent().children("span").css({
            textDecoration:"line-through"});  
            clickBox = false   
        } else {
            $(this).parent().children("span").css({
                textDecoration:"none"}); 
                clickBox = true
            }
}

    // function inComplete(){
    //     $(this).parent().children("span").css({
    //         textDecoration:"none"});     
    // }
    
    function colorStar(){
       if(clickColor === true){
           $(this).css({
            color: "rgb(255,204,0)"});
            clickColor = false
        } else {
            $(this).css({
            color: "rgb(0, 0, 0)"});
         clickColor = true
            }
    }

    function deleteItem(){
        $(this).parent().hide(1000)
    }


    //  if ($checkBox.attr("checked", false)){
    //     $(this).parent().children("span").css({
    //         textDecoration:"none"});     
    //  }



    $addBtn.on("click", addToList);
  
    // $checkBox.on("click", complete);

    // $iClass.on("click", colorStar);
    
    // $iClassX.on("click", deleteItem);

    $list.on("click", ".glyphicon-remove", deleteItem);

    $list.on("click", ".glyphicon-star", colorStar);

    $list.on("click", ".checkedBox", complete);
    
    
