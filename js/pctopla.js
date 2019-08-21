$(".btnParent").on("click", function(){
    $(this).next(".target").slideUp()
     $(this).next(".target").slideDown(300);   
  })
  $(".btnPro").on("click",function(){
    $(this).parents(".group").find("div[data-foldable-role='target']").hide(300);
      $(this).parents(".group").next().find("div[data-foldable-role='target']").show(300);
  })