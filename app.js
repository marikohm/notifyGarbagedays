function noticeGarbageDay() {
  var accessToken = '5L1p2vSzwOovdKorbAcyvbOOrQ9BNl21w8mEtb3gYLM'; 

  var date = new Date();
  date.setDate(date.getDate() + 1);
  var comment = [];
  
  var is_the_what_weekly = Math.floor((date.getDate() - 1) / 7) + 1;

  switch(date.getDay()) {
      case 1:
      comment.push('可燃ごみ')
      break;
      case 2:
      comment.push('ペットボトルor不燃ごみ')
      break;
      case 3:

      break;
      case 4:
      comment.push('可燃ごみ')
      break;
      case 5:
      comment.push('資源ごみ')
      if (is_the_what_weekly === 2 || is_the_what_weekly === 4) {
          comment.push('小型複雑ごみ')
      }
      break;
  }
  
  if (comment.length < 1) return;
  
  var text = '\n今日は' + comment.join('、') + ' の日だモン!!' ;
  
  var message = text;
  var options = {
    'method' : 'post',
    'headers': {
      'Authorization': 'Bearer ' + accessToken
    },
    'payload' : {
      'message': message
    }
  };
  var response = UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
  Logger.log(response);
}
