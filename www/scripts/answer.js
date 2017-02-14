// 返回上一页
$('#goBack').click(function(){
	history.go(-1);
})

// 返回主页
$('#home').click(function(){
	location.href = 'index.html';
});
//从 cookie 获取要回答问题的参数 question（文件名）
//var question = $.cookie('question');
$('form').submit(function(event){
	event.preventDefault();
	//var data = $(this).serialize();
	var data = $(this).serializeArray();
	$.post('/question/answer',data,function(resData){
		$('.modal-body').text(resData.message);
		$('#myModal').modal('show').on('hide.bs.modal',function(){
			if (resData.code == 2) {
				location.href = '/';
			}
		});
	});
})
