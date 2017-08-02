$(document).on('click', '.timeline-badge', function(e){
    var $this = $(this);
	if(!$this.hasClass('timeline-collapsed')) {
		$this.addClass('timeline-collapsed');
		$this.find('i').removeClass('fa fa-toggle-down').addClass('fa fa-toggle-up');
	} else {
		$this.removeClass('timeline-collapsed');
		$this.find('i').removeClass('fa fa-toggle-up').addClass('fa fa-toggle-down');
	}
})

$(function(){
    $("[data-toggle=popover]").popover({
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-heading").html();
        }
    });
});